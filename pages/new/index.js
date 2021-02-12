// @ts-nocheck
import Head from "next/head";
import { useState } from "react";
import { checkLength, required } from "../../helpers/validation";
import Content from "./content";
import ImageLoader from "./image";
import Title from "./title";

const Create = () => {
  const [titleForm, setTitleForm] = useState({
    title: {
      elementType: "input",
      label: "Blog Title",
      elementConfig: {
        type: "text",
        placeholder: "Enter your story title",
      },
      value: "",
      isValid: false,
      touched: false,
      validations: [required],
      errorMsg: "",
    },
  });
  const [contentForm, setContentForm] = useState({
    content: {
      elementType: "textarea",
      label: "Content",
      elementConfig: {
        type: "text",
        placeholder: "Lets hear you out",
      },
      value: "",
      isValid: false,
      touched: false,
      validations: [checkLength],
      errorMsg: "",
    },
  });

  const [item, setItem] = useState("title");
  const handleChange = (event, next) => {
    event.preventDefault();
    if (next === "title") {
      setItem("title");
    } else if (next === "content") {
      setItem("content");
    } else if (next === "image") {
      setItem("image");
    } else {
      setItem("title");
    }
  };

  const [image, setImage] = useState({
    value: "",
    errorMsg: "",
    isValid: false,
  });

  const imageChangeHandler = (event) => {
    const file = event.target.files[0];
    if (
      file.type === "image/jpeg" ||
      file.type === "image/png" ||
      file.type === "image/jpg"
    ) {
      setImage({
        src: URL.createObjectURL(file),
        isValid: true,
        errorMsg: "",
      });
    } else {
      setImage({
        errorMsg: "Error: File must be of type jpg, jpeg or png",
        isValid: false,
      });
    }
  };

  // const removeImageHandler = () => {
  //   setImage("")
  // }
  return (
    <div>
      <Head>
        <title>Create - Dev Story</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="create">
        <div className="create__container">
          <form className="create__form">
            <div className="create__form-container">
              {item === "title" && (
                <Title
                  changePage={handleChange}
                  formType={titleForm}
                  updateFn={setTitleForm}
                />
              )}
              {item === "content" && (
                <Content
                  changePage={handleChange}
                  formType={contentForm}
                  updateFn={setContentForm}
                />
              )}
              {item === "image" && (
                <ImageLoader
                  changePage={handleChange}
                  // formType={contentForm}
                  // updateFn={setContentForm}
                  onchange={imageChangeHandler}
                  onclick={() => setImage("")}
                  image={image}
                />
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Create;
