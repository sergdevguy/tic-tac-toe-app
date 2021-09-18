import React, { useState } from 'react';
import Board from './components/Board/Board';
import s from "./Game.module.scss";

const Game = () => {
  const [history, setHistory] = useState([{ squares: Array(9).fill(null) }]);
  const [xIsNext, setXisNext] = useState(true);

  const handleClick = (i) => {
    const historyC = history;
    const current = historyC[historyC.length - 1];
    const squares = current.squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = xIsNext ? 'X' : 'O';
    setHistory(
      history.concat([{
        squares: squares
      }])
    );
    setXisNext(!xIsNext);
  }

  const historyC = history;
  const current = historyC[historyC.length - 1];
  const winner = calculateWinner(current.squares);

  let status;
  if (winner) {
    status = 'Выиграл ' + winner;
  } else {
    status = 'Следующий ход: ' + (xIsNext ? 'X' : 'O');
  }

  return (
    <div className={s["game"]}>
      <div className={s["game-board"]}>
        <Board
          squares={current.squares}
          onClick={(i) => handleClick(i)}
        />
      </div>
      <div className={s["game-info"]}>
        <div>{ status }</div>
        <ol>{/* TODO */}</ol>
      </div>
    </div>
  );
}

export default Game;

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