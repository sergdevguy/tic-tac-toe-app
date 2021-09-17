import React from 'react';
import Square from '../Square/Square';
import s from './Board.module.scss';

const Board = () => {
    const renderSquare = (i) => {
        return <Square />;
    }

    const status = 'Next player: X';

    return (
        <div>
            <div className={s["status"]}>{status}</div>
            <div className={s["board-row"]}>
                {renderSquare(0)}
                {renderSquare(1)}
                {renderSquare(2)}
            </div>
            <div className={s["board-row"]}>
                {renderSquare(3)}
                {renderSquare(4)}
                {renderSquare(5)}
            </div>
            <div className={s["board-row"]}>
                {renderSquare(6)}
                {renderSquare(7)}
                {renderSquare(8)}
            </div>
        </div>
    )
}

export default Board;