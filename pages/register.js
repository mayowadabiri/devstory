// @ts-nocheck
import Head from "next/head";
import { useState } from "react";
import { Button } from "../components/button";
import Input from "../components/input";
import Layout from "../components/layout";

const Login = () => {
  const [registerForm, setRegisterForm] = useState({
    fullName: {
      elementType: "input",
      label: "Full Name",
      elementConfig: {
        type: "text",
        placeholder: "Full Name",
      },

      value: "",
    },
    username: {
      elementType: "input",
      label: "Username",
      elementConfig: {
        type: "text",
        placeholder: "Username",
      },

      value: "",
    },
    email: {
      elementType: "input",
      label: "E-mail",
      elementConfig: {
        type: "email",
        placeholder: "Email",
      },
      value: "",
    },
    twitter: {
      elementType: "input",
      label: "Twitter Handle",
      elementConfig: {
        type: "url",
        placeholder: "Your twitter handle",
      },

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
    },
    linkedIn: {
      elementType: "input",
      label: "LinkedIn",
      elementConfig: {
        type: "url",
        placeholder: "LinkedIn Link",
      },
      value: "",
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
    },
    password: {
      elementType: "input",
      label: "Password",
      elementConfig: {
        type: "password",
        placeholder: "Password",
      },
      value: "",
    },
    confirmPassword: {
      elementType: "input",
      label: "Confirm Password",
      elementConfig: {
        type: "password",
        placeholder: "Confirm Your Password",
      },
      value: "",
    },
  });

  let formArray = [];
  for (let key in registerForm) {
    formArray.push({
      id: key,
      config: registerForm[key],
    });
  }
  let form = formArray.map((form) => (
    <Input
      elemenType={form.config.elemenType}
      config={form.config.elementConfig}
      value={form.config.value}
      label={form.config.label}
    />
  ));

  return (
    <div>
      <Head>
        <title>Register</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <div className="register">
          <div className="register__container">
            <form className="form">
              <h2 className="title">Register</h2>
              <div className="form__container">
                {form}
                <Button>Register</Button>
              </div>
            </form>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Login;
