import React from "react";
import s from "./AutoComplete.module.scss";

const Autocomplete = ({ value, isOpen, filteredValues, itemClickHandler }) => {
  return (
    <ul
      className={
        value.length >= 1 && isOpen ? s.autocomplete : s.autocompleteHide
      }
    >
      {filteredValues.map((item, index) => {
        return (
          <li
            key={index}
            onClick={itemClickHandler}
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
