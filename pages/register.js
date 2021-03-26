// @ts-nocheck
import Head from "next/head";
import { useState } from "react";
import { Button } from "../components/button";
import Input from "../components/input";
import { handleBlur, inputChangeHandler } from "../helpers/handler";
import {
  URLChecker,
  confirmPassword,
  email,
  fullname,
  password,
  username,
} from "../helpers/validation";

import { authUrl } from "../constants/baseurls";
import ModalComponent from "../hoc/modal";

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
      blur: false,
      touched: false,
      isValid: true,
      errorMsg: "",
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
      isValid: true,
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
      isValid: true,
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
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    setClicked(true);
    const register = {};
    for (let key in registerForm) {
      register[key] = registerForm[key].value;
    }
    if (!formValid) {
      event.preventDefault();
    } else {
      setIsLoading(true);
      try {
        const response = await authUrl.post("/signup", register);
        setIsLoading(false);
         router.push("/login");
      } catch (error) {
        setErrorMsg(error.response.data.message);
        setIsLoading(false);
      }
      setIsLoading(true);
      setIsLoading(false);
    }
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
        <title>Register - Dev Story</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {isLoading && <ModalComponent loadingMessage="Registering" />}
      <div className="register mb-md">
        <div className="register__container">
          <div className="register__box">
            <form className="form">
              <h2 className="title">Register</h2>
              {errorMsg !== "" && <p className="error">{errorMsg}</p>}
              <div className={["form__container", "register__form"].join(" ")}>
                {form}
              </div>
              <div className="register__button">
                <Button onclick={handleSubmit}>Register</Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
