// @ts-nocheck
import { useState } from "react";
import Input from "../../components/input";
import { handleBlur, inputChangeHandler } from "../../helpers/handler";
// import { required } from "../../helpers/validation";

const Title = ({ formType, updateFn }) => {
  console.log("reached");
  const [formValid, setFormValid] = useState(false);
  const { title } = formType;

  return (
    <div>
      <label htmlFor={"title"}>{title.label}</label>
      <input
        id="title"
        value={title.value}
        placeholder={title.elementConfig.placeholder}
        onChange={(event) =>
          inputChangeHandler(event, "title", formType, updateFn, setFormValid)
        }
      />
    </div>
  );
};

export default Title;
