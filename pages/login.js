// @ts-nocheck
import Head from "next/head";
import { useState } from "react";
import { Button } from "../components/button";
import Input from "../components/input";
import Anchor from "../components/link";
import { handleBlur, inputChangeHandler } from "../helpers/handler";
import { password, required } from "../helpers/validation";
import { authUrl, socialUrl } from "../constants/baseurls";
import ModalComponent from "../hoc/modal";
import GoogleLogin from "react-google-login";
// import GitHubLogin from "react-github-login";

const googleID = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID;
// const githubID = process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID;
const Login = () => {
  const [loginForm, setLoginForm] = useState({
    username: {
      elementType: "input",
      label: "Username or email address",
      elementConfig: {
        type: "text",
        placeholder: "Username or email address",
      },
      validations: [required],
      value: "",
      blur: false,
      touched: false,
      isValid: false,
      errorMsg: "",
    },
    password: {
      elemenType: "input",
      label: "Password",
      elementConfig: {
        type: "password",
        placeholder:
          "Must be 8 characters long including one number and alphanumeric",
      },
      value: "",
      validations: [password],
      blur: false,
      touched: false,
      isValid: false,
      errorMsg: "",
    },
  });

  const [formValid, setFormValid] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    setClicked(true);
    const login = {};
    for (let key in loginForm) {
      login[key] = loginForm[key].value;
    }

    if (!formValid) {
      event.preventDefault();
    } else {
      setIsLoading(true);
      try {
        const response = await authUrl.post("/signin", login);
        setIsLoading(false);
        console.log(response.data);
      } catch (error) {
        console.log(error.response);
        setIsLoading(false);
        setErrorMsg(error.response.data.message);
      }
    }
  };

  const handleSuccess = async (res) => {
    const { tokenId } = res;
    if (tokenId) {
      setIsLoading(true);
      try {
        const user = await socialUrl.post("/google", { tokenId });
        console.log(user.data.payload);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
        setIsLoading(false);
      }

    }
  };

  let formArray = [];
  for (let key in loginForm) {
    formArray.push({
      id: key,
      config: loginForm[key],
    });
  }
  let form = formArray.map((form) => (
    <Input
      key={form.id}
      elemenType={form.config.elemenType}
      config={form.config.elementConfig}
      value={form.config.value}
      label={form.config.label}
      onchange={() =>
        inputChangeHandler(
          event,
          form.id,
          loginForm,
          setLoginForm,
          setFormValid
        )
      }
      onblur={() => handleBlur(form.id, loginForm, setLoginForm)}
      blur={form.config.blur}
      formIsValid={formValid}
      isValid={form.config.isValid}
      clicked={clicked}
      blur={form.config.blur}
      msg={form.config.errorMsg}
    />
  ));

  return (
    <div>
      <Head>
        <title>Login - Dev Story</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {isLoading && <ModalComponent loadingMessage="Logging you in" />}
      <div className="login">
        <div className="login__container">
          <div className="login__box">
            <form className="form">
              <h2 className="title">Welcome Back</h2>
              {errorMsg !== "" && <p className="error">{errorMsg}</p>}
              <div className="form__container">
                {form}
                <Button onclick={handleSubmit}>Login</Button>

                <div className="socials">
                  <div>
                    <GoogleLogin
                      clientId={googleID}
                      buttonText="Login With Google"
                      cookiePolicy={"single_host_origin"}
                      onSuccess={handleSuccess}
                      // onFailure={handleLogin}
                      render={(renderProps) => (
                        <Button
                          onclick={renderProps.onClick}
                          disabled={renderProps.disabled}
                        >
                          Sign in with Google
                        </Button>
                      )}
                    />
                  </div>
                  {/* <div>
                  <GitHubLogin
                    client_id={githubID}
                    onSuccess={handleLogin}
                    onFailure={handleLogin}
                  />
                </div> */}
                </div>
                <Anchor link={"/forgot-password"} extra={"link__login"}>
                  Forgot Password?
                </Anchor>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
