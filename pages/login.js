// @ts-nocheck
import Head from "next/head";
import { useState } from "react";
import { Button } from "../components/button";
import Input from "../components/input";
import Layout from "../components/layout";
import Anchor from "../components/link";
import { handleBlur, inputChangeHandler } from "../helpers/handler";
import { username, password } from "../helpers/validation";

const Login = () => {
  const [loginForm, setLoginForm] = useState({
    username: {
      elementType: "input",
      label: "Username",
      elementConfig: {
        type: "text",
        placeholder: "Username",
      },
      validations: [username],
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

  const handleSubmit = (event) => {
    event.preventDefault();
    setClicked(true);

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
      {/* <Layout> */}
        <div className="login">
          <div className="login__container">
            <div className="login__box">
              <form className="form">
                <h2 className="title">Welcome Back</h2>
                <div className="form__container">
                  {form}
                  <Button onclick={handleSubmit}>Login</Button>
                  <Anchor link={"/forgot-password"} extra={"link__login"}>Forgot Password?</Anchor>
                </div>
              </form>
            </div>
          </div>
        </div>
      {/* </Layout> */}
    </div>
  );
};

export default Login;
