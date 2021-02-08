// @ts-nocheck
import Head from "next/head";
import { useState } from "react";
import Input from "../components/input";
import Layout from "../components/layout";

const Login = () => {
  const [loginForm, setLoginForm] = useState({
    username: {
      elementType: "input",
      label: "Username",
      elementConfig: {
        type: "text",
        placeholder: "Username",
      },
      value: "",
    },
    password: {
      elemenType: "input",
      label: "Password",
      elementConfig: {
        type: "password",
        placeholder: "Password must be maximum of 8 characters long",
      },
      value: "",
    },
  });

  let formArray = [];
  for (let key in loginForm) {
    formArray.push({
      id: key,
      config: loginForm[key],
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
        <title>Login</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <div className="login">
          <div className="login__container">
            <form className="form">
              <h2 className="title">Login</h2>
              <div className="form__container">{form}</div>
            </form>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Login;
