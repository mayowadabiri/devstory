// @ts-nocheck
import { useState } from "react";
import { Button } from "../../components/button";
import { handleBlur, inputChangeHandler } from "../../helpers/handler";

const Title = ({ formType, updateFn, changePage }) => {
  const [formValid, setFormValid] = useState(false);
  const { title } = formType;
  const [clicked, setClicked] = useState(false);

  const inputClasses = ["create__form-input"];

  if (formType["title"].blur && !formType["title"].isValid) {
    inputClasses.push("create__form-invalid");
  }
  if (!formType["title"].isValid && clicked) {
    console.log(inputClasses.join(" "));
    inputClasses.push("create__form-invalid");
  }

  const clickHandler = (event) => {
    event.preventDefault();
    setClicked(true);
    console.log(formType);
    if (formType["title"].isValid && clicked) {
      changePage(event, "content");
    }
  };

  return (
    <div className="animate__animated animate__fadeInLeft animate__slower">
      <div className="create__form-group">
        <label className="create__form-label" htmlFor={"title"}>
          {title.label}
        </label>
        <input
          className={inputClasses.join(" ")}
          id="title"
          value={title.value}
          placeholder={title.elementConfig.placeholder}
          onChange={(event) =>
            inputChangeHandler(event, "title", formType, updateFn, setFormValid)
          }
          onBlur={() => handleBlur("title", formType, updateFn)}
        />
      </div>
      {title.errorMsg !== "" && <p className="error">{title.errorMsg}</p>}
      <div className="create__button mt-md">
        <Button onclick={clickHandler}>Next</Button>
      </div>
    </div>
  );
};

export default Title;
