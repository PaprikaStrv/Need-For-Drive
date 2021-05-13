import React from "react";
import s from "./RadioInput.module.scss";

const RadioInput = ({
  inputName,
  id,
  currentInputType,
  handleChange,
  ratePrice,
  rateUnit,
}) => {
  return (
    <div className={s.checkBoxWrapper}>
      <input
        type="radio"
        className={s.checkBox}
        value={inputName}
        id={id}
        checked={currentInputType === inputName}
        onChange={handleChange}
      />
      {ratePrice && rateUnit ? (
        <label
          htmlFor={id}
          className={
            currentInputType === inputName ? "" : s.notActiveLable
          }
        >
          {inputName}, {ratePrice}₽/{rateUnit}
        </label>
      ) : (
        <label
          htmlFor={id}
          className={
            currentInputType === inputName ? "" : s.notActiveLable
          }
        >
          {inputName[0].toUpperCase() + inputName.slice(1)}
        </label>
      )}
    </div>
  );
};

export default RadioInput;
