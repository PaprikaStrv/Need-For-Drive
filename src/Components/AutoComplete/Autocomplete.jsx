import React from "react";
import s from "./AutoComplete.module.scss";

const Autocomplete = ({ value, isOpen, filteredValues, itemClickHandler }) => {
  return (
    <ul
      className={
        value.length >= 1 && isOpen ? s.autocomplete : s.autocompleteHide
      }
    >
      {filteredValues.map((name, id) => {
        return (
          <li
            key={id}
            onClick={itemClickHandler}
            className={s.autocompleteItem}
          >
            {name.name}
          </li>
        );
      })}
    </ul>
  );
};

export default Autocomplete;
