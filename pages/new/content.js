// @ts-nocheck
import { useState } from "react";
import { Button } from "../../components/button";
import Input from "../../components/input";
import { handleBlur, inputChangeHandler } from "../../helpers/handler";
// import { required } from "../../helpers/validation";

const Content = ({ formType, updateFn, changePage }) => {
  const [formValid, setFormValid] = useState(false);
  const { content } = formType;
  const [clicked, setClicked] = useState(false);

  const inputClasses = ["create__form-input, create__form-textarea"];
  if (formType["content"].blur && !formType["content"].isValid) {
    inputClasses.push("create__form-invalid");
  }
  if (!formType["content"].isValid && clicked) {
    inputClasses.push("create__form-invalid");
  }

  const clickHandler = (event) => {
    event.preventDefault();
    setClicked(true);
    if (formType["content"].isValid && clicked) {
      changePage(event, "image");
    }
  };

  return (
    <div className="animate__animated animate__fadeInLeft animate__slow">
      <div className="create__form-group">
        <label className="create__form-label" htmlFor={"title"}>
          {content.label}
        </label>
        <textarea
          className={inputClasses.join(" ")}
          id="content"
          value={content.value}
          placeholder={content.elementConfig.placeholder}
          onChange={(event) =>
            inputChangeHandler(
              event,
              "content",
              formType,
              updateFn,
              setFormValid
            )
          }
          onBlur={() => handleBlur("content", formType, updateFn)}
        ></textarea>
      </div>
      <div className="flex">
        <p>{ content.value.length}/1000</p>
        {<p className="error  ">Must be of 1000 characters</p>}
        {/* {content.errorMsg !== "" && <p className="error">{content.errorMsg}</p>} */}
      </div>
      <div className="create__button create__button-content mt-md">
        <Button
          extra={"button-red"}
          onclick={(event) => changePage(event, "title")}
        >
          Back
        </Button>
        <Button onclick={clickHandler}>Next</Button>
      </div>
    </div>
  );
};

export default Content;
