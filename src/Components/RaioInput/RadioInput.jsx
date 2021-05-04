import React from "react";
import s from './RadioInput.module.scss';

const RadioInput = (props) => {
  return (
      <div className={s.checkBoxWrapper}>
        <input
          type="radio"
          className={s.checkBox}
          value={props.modelName}
          id={props.id}
          checked={props.currentModelType === props.modelName}
          onChange={props.handleChange}
        />
        <label
          htmlFor={props.id}
          className={props.currentModelType === props.modelName ? "" : s.notActiveLable}
        >
          {props.modelName}
        </label>
      </div>
  );
};


export default RadioInput;
