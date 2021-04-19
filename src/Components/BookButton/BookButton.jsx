import React from 'react';
import s from './BookButton.module.scss';

const BookButton = (props) => {
    return (
        <button className={s.btn}>{props.btnName}</button>
    );
}

export default BookButton;