import React from "react";
import s from "./AutoComplete.module.scss";

const Autocomplete = (props) => {
  return (
    <ul
      className={
        props.value.length >= 1 && props.isOpen
          ? s.autocomplete
          : s.autocompleteHide
      }
    >
      {props.filteredValues.map((item, index) => {
        return (
          <li
            key={index}
            onClick={props.itemClickHandler}
            className={s.autocompleteItem}
          >
            {item.name}
          </li>
        );
      })}
    </ul>
  );
};

export default Autocomplete;
