import React from 'react';
import s from './BookButton.module.scss';

const BookButton = (props) => {
    return (
        <div className={s.btn}>{props.btnName}</div>
    );
}

export default BookButton;