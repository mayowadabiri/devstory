const Input = ({
  elementType,
  config,
  value,
  onchange,
  label,
  blur,
  formIsValid,
  clicked,
  isValid,
  onblur,
  msg,
}) => {
  let inputClasses = ["form__input"];
  if ((blur && !isValid) || (!isValid && !formIsValid && clicked)) {
    inputClasses.push("form__invalid");
  } else if (isValid && blur) {
    inputClasses.push("form__valid");
  }
  let inputElement;
  switch (elementType) {
    case "input":
      inputElement = (
        <input
          className={inputClasses.join(" ")}
          {...config}
          value={value}
          onChange={onchange}
          name={label}
          onBlur={onblur}
        />
      );
      break;
    case "textarea":
      inputElement = (
        <textarea
          id="textarea"
          {...config}
          value={value}
          onChange={onchange}
          name={label}
          className={inputClasses.join(" ")}
          onBlur={onblur}
        ></textarea>
      );
      break;
    case "select":
      inputElement = (
        <select
          value={value}
          onChange={onchange}
          className={inputClasses.join(" ")}
          onBlur={onblur}
        >
          {config.options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.displayValue}
            </option>
          ))}
        </select>
      );
      break;
    default:
      inputElement = (
        <input
          className={inputClasses.join(" ")}
          {...config}
          value={value}
          onChange={onchange}
          name={label}
          onBlur={onblur}
        />
      );
      break;
  }

  return (
    <div className="form__group">
      <label className="form__label">{label}:</label>
      {inputElement}
      {msg !== "" && (
        <span
          style={{
            color: "red",
            display: "inline-block",
            textAlign: "start",
            fontSize: "12px",
            width: "100%",
          }}
        >
          {msg}
        </span>
      )}
    </div>
  );
};

export default Input;
