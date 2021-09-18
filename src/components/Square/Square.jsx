import React from 'react';
import s from './Square.module.scss';

const Square = ({ value }) => {
    return (
        <div>
            <button className={s["square"]}>
                {value}
            </button>
        </div>
    )
}

export default Square;