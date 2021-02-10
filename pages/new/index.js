import Head from "next/head";
import { useState } from "react";
import { required } from "../../helpers/validation";
import Title from "./title";

const Create = () => {
  const [titleForm, setTitleForm] = useState({
    title: {
      elementType: "input",
      label: "Title",
      elementConfig: {
        type: "text",
        placeholder: "Enter your story title",
      },
      value: "",
      isValid: false,
      touched: false,
      validations: [required],
      errorMessage: " ",
    },
  });

  return (
    <div>
      <Head>
        <title>Create - Dev Story</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        {/* show the title */}
        <Title formType={titleForm} updateFn={setTitleForm} />
      </div>
    </div>
  );
};

export default Create;
