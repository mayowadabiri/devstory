// @ts-nocheck
import { useState } from "react";
import { Button } from "../../components/button";
import Input from "../../components/input";
import { handleBlur, inputChangeHandler } from "../../helpers/handler";
// import { required } from "../../helpers/validation";

const Title = ({ formType, updateFn, changePage }) => {
  const [formValid, setFormValid] = useState(false);
  const { title } = formType;

  return (
    <div className="animate__animated animate__fadeInLeft animate__slower">
      <div className="create__form-group">
        <label className="create__form-label" htmlFor={"title"}>
          {title.label}
        </label>
        <input
          className="create__form-input"
          id="title"
          value={title.value}
          placeholder={title.elementConfig.placeholder}
          onChange={(event) =>
            inputChangeHandler(event, "title", formType, updateFn, setFormValid)
          }
          onBlur={() => handleBlur("title", formType, updateFn)}
        />
      </div>
      <div className="create__button mt-md">
        <Button onclick={(event) => changePage(event, "content")}>Next</Button>
      </div>
    </div>
  );
};

export default Title;
