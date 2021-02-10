// @ts-nocheck
import { useState } from "react";
import { Button } from "../../components/button";
import Input from "../../components/input";
import { handleBlur, inputChangeHandler } from "../../helpers/handler";
// import { required } from "../../helpers/validation";

const Content = ({ formType, updateFn, changePage }) => {
  const [formValid, setFormValid] = useState(false);
  const { content } = formType;

  return (
    <div className="animate__animated animate__fadeInLeft animate__slow">
      <div className="create__form-group">
        <label className="create__form-label" htmlFor={"title"}>
          {content.label}
        </label>
        <textarea
          className="create__form-textarea"
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
      <div className="create__button create__button-content mt-md">
        <Button
          extra={"button-red"}
          onclick={(event) => changePage(event, "title")}
        >
          Back
        </Button>
        <Button onclick={(event) => changePage(event, "image")}>Content</Button>
      </div>
    </div>
  );
};

export default Content;
