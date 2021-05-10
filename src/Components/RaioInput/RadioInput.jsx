import React from "react";
import s from "./RadioInput.module.scss";

const RadioInput = (props) => {
  return (
    <div className={s.checkBoxWrapper}>
      <input
        type="radio"
        className={s.checkBox}
        value={props.inputName}
        id={props.id}
        checked={props.currentInputType === props.inputName}
        onChange={props.handleChange}
      />
      {props.ratePrice && props.rateUnit ? (
        <label
          htmlFor={props.id}
          className={
            props.currentInputType === props.inputName ? "" : s.notActiveLable
          }
        >
          {props.inputName}, {props.ratePrice}₽/{props.rateUnit}
        </label>
      ) : (
        <label
          htmlFor={props.id}
          className={
            props.currentInputType === props.inputName ? "" : s.notActiveLable
          }
        >
          {props.inputName[0].toUpperCase() + props.inputName.slice(1)}
        </label>
      )}
    </div>
  );
};

export default RadioInput;
