import React from 'react';
import Square from '../Square/Square';
import s from './Board.module.scss';

const Board = ({ squares, onClick }) => {
    const renderSquares = () => {
        const colSize = [1, 2, 3];
        const rowSize = [1, 2, 3];
        let counter = 0;
        
        return (
            colSize.map((item, index) => {
                return (
                    <div className={s["board-row"]}>
                        {rowSize.map((item, index) => {
                            counter++;
                            return renderSquare(counter - 1);
                        })}
                    </div>
                )
            })
        );
    }

    const renderSquare = (i) => {
        return (
            <Square
                onClick={() => onClick(i)}
                value={squares[i]}
            />
        );
    }

    return (
        <div>
            {renderSquares()}
        </div>
    )
}

export default Board;