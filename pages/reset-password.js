// @ts-nocheck
import Head from "next/head";
import { useState } from "react";
import { Button } from "../components/button";
import Input from "../components/input";
import Anchor from "../components/link";
import { handleBlur, inputChangeHandler } from "../helpers/handler";
import { confirmPassword, password } from "../helpers/validation";

const Login = () => {
  const [resetForm, setResetForm] = useState({
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
    confirmPassword: {
      elemenType: "input",
      label: "Confirm Password",
      elementConfig: {
        type: "password",
      },
      value: "",
      validations: [confirmPassword],
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
  for (let key in resetForm) {
    formArray.push({
      id: key,
      config: resetForm[key],
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
          resetForm,
          setResetForm,
          setFormValid
        )
      }
      onblur={() => handleBlur(form.id, resetForm, setResetForm)}
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
        <title>Reset Password - Dev Story</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
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
    </div>
  );
};

export default Login;
