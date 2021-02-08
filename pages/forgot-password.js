// @ts-nocheck
import Head from "next/head";
import { useState } from "react";
import { Button } from "../components/button";
import Input from "../components/input";
import Layout from "../components/layout";
import Anchor from "../components/link";
import { handleBlur, inputChangeHandler } from "../helpers/handler";
import { email } from "../helpers/validation";

const Login = () => {
  const [forgotForm, setForgotForm] = useState({
    email: {
      elementType: "input",
      label: "E-mail",
      elementConfig: {
        type: "email",
        placeholder: "Email",
      },
      value: "",
      validations: [email],
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
    // console.log(loginForm);
    // console.log(formValid);
    // console.log(clicked);
  };

  let formArray = [];
  for (let key in forgotForm) {
    formArray.push({
      id: key,
      config: forgotForm[key],
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
          forgotForm,
          setForgotForm,
          setFormValid
        )
      }
      onblur={() => handleBlur(form.id, forgotForm, setForgotForm)}
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
        <title>Login</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <Layout> */}
        <div className="login">
          <div className="login__container">
            <div className="login__box">
              <form className="form">
                <h2 className="title">Forgot Password</h2>
                <div className="form__container">
                  {form}
                  <Button onclick={handleSubmit}>Submit</Button>
                  <Anchor link={"/login"} extra={"link__forgot"}>
                    Login
                  </Anchor>
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
