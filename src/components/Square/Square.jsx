import React, { useState } from 'react';
import s from './Square.module.scss';

const Square = ({ value }) => {
    const [stateValue, setStateValue] = useState(value);

    return (
        <div>
            <button
                onClick={() => {
                    setStateValue('X');
                }}
                className={s["square"]}
            >
                {stateValue}
            </button>
        </div>
    )
}

export default Square;