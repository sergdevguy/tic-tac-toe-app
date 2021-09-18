import React, { useState } from 'react';
import Square from '../Square/Square';
import s from './Board.module.scss';

const Board = () => {
    const [squares, setSquares] = useState(Array(9).fill(null));
    const [xIsNext, setXisNext] = useState(true);

    const handleClick = (i) => {
        const squaresCopy = squares.slice();
        if (calculateWinner(squares) || squares[i]) {
            return;
        }
        squaresCopy[i] = xIsNext ? 'X' : 'O';
        setSquares(squaresCopy);
        setXisNext(!xIsNext);
    }

    const renderSquare = (i) => {
        return (
            <Square
                onClick={() => handleClick(i)}
                value={squares[i]}
            />
        );
    }

    const winner = calculateWinner(squares);
    let status;
    if (winner) {
        status = 'Выиграл ' + winner;
    } else {
        status = 'Следующий ход: ' + (xIsNext ? 'X' : 'O');
    }

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

function calculateWinner(squares) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    return null;
}