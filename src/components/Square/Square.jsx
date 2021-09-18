import React, { useState } from 'react';
import s from './Square.module.scss';

const Square = ({ value, onClick }) => {
    return (
        <div>
            <button
                onClick={() => {
                    onClick();
                }}
                className={s["square"]}
            >
                {value}
            </button>
        </div>
    )
}

export default Square;