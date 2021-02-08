// @ts-nocheck
import Head from "next/head";
import { useState } from "react";
import { Button } from "../components/button";
import Input from "../components/input";
import Layout from "../components/layout";
import { handleBlur, inputChangeHandler } from "../helpers/handler";
import {
  URLChecker,
  confirmPassword,
  email,
  fullname,
  password,
  username,
} from "../helpers/validation";

const Register = () => {
  const [registerForm, setRegisterForm] = useState({
    fullName: {
      elementType: "input",
      label: "Full Name",
      elementConfig: {
        type: "text",
        placeholder: "Full Name",
      },
      validations: [fullname],
      value: "",
      blur: false,
      touched: false,
      isValid: false,
      errorMsg: "",
    },
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
    twitter: {
      elementType: "input",
      label: "Twitter Handle",
      elementConfig: {
        type: "url",
        placeholder: "Your twitter handle",
      },
      validations: [URLChecker],
      value: "",
    },
    github: {
      elementType: "input",
      label: "Github",
      elementConfig: {
        type: "url",
        placeholder: "Github Link",
      },
      value: "",
      validations: [URLChecker],
      blur: false,
      touched: false,
      isValid: false,
      errorMsg: "",
    },
    linkedIn: {
      elementType: "input",
      label: "LinkedIn",
      elementConfig: {
        type: "url",
        placeholder: "LinkedIn Link",
      },
      value: "",
      validations: [URLChecker],
      blur: false,
      touched: false,
      isValid: false,
      errorMsg: "",
    },
    gender: {
      elementType: "select",
      label: "Gender",
      elementConfig: {
        options: [
          { value: "Male", displayValue: "Male" },
          { value: "Female", displayValue: "Female" },
          { value: "", displayValue: "Prefer not to say" },
        ],
      },
      value: "",
      validations: [],
      blur: false,
      touched: false,
      isValid: false,
      errorMsg: "",
    },
    password: {
      elementType: "input",
      label: "Password",
      elementConfig: {
        type: "password",
        placeholder: "Password",
      },
      value: "",
      validations: [password],
      blur: false,
      touched: false,
      isValid: false,
      errorMsg: "",
    },
    confirmPassword: {
      elementType: "input",
      label: "Confirm Password",
      elementConfig: {
        type: "password",
        placeholder: "Confirm Your Password",
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
  for (let key in registerForm) {
    formArray.push({
      id: key,
      config: registerForm[key],
    });
  }
  let form = formArray.map((form) => (
    <Input
      key={form.id}
      elementType={form.config.elementType}
      config={form.config.elementConfig}
      value={form.config.value}
      label={form.config.label}
      onchange={(event) =>
        inputChangeHandler(
          event,
          form.id,
          registerForm,
          setRegisterForm,
          setFormValid
        )
      }
      onblur={() => handleBlur(form.id, registerForm, setRegisterForm)}
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
        <title>Register</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <Layout> */}
        <div className="register mb-md">
          <div className="register__container">
            <div className="register__box">
              <form className="form">
                <h2 className="title">Register</h2>
                <div
                  className={["form__container", "register__form"].join(" ")}
                >
                  {form}
                </div>
                <div className="register__button">
                  <Button onclick={handleSubmit}>Register</Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      {/* </Layout> */}
    </div>
  );
};

export default Register;
