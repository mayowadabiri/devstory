import Layout from "./layout";

const Input = ({ elementType, config, value, onchange, label }) => {
  let inputElement;
  switch (elementType) {
    case "input":
      inputElement = (
        <input
          className="form__input"
          {...config}
          value={value}
          onChange={onchange}
          name={label}
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
          className="form__input"
        ></textarea>
      );
      break;
    case "select":
      inputElement = (
        <select value={value} onChange={onchange} className="form__input">
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
          className="form__input"
          {...config}
          value={value}
          onChange={onchange}
          name={label}
        />
      );
      break;
  }

  return (
      <div className="form__group">
        <label className="form__label">{label}:</label>
        {inputElement}
      </div>
  );
};

export default Input;
