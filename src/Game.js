import React, { useState } from 'react';
import Board from './components/Board/Board';
import s from "./Game.module.scss";

const Game = () => {
  const [history, setHistory] = useState([{ squares: Array(9).fill(null), step: null }]);
  const [stepNumber, setStepNumber] = useState(0);
  const [xIsNext, setXisNext] = useState(true);

  const handleClick = (i) => {
    const historyC = history.slice(0, (stepNumber + 1));
    const current = historyC[historyC.length - 1];
    const squares = current.squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = xIsNext ? 'X' : 'O';
    setHistory(
      historyC.concat([{
        squares: squares,
        step: i
      }])
    );
    setStepNumber(historyC.length);
    setXisNext(!xIsNext);
  }

  const jumpTo = (step) => {
    setStepNumber(step);
    setXisNext((step % 2) === 0);
  }

  const getPosition = (elem) => {
    const cols = [[0, 3, 6], [1, 4, 7], [2, 5, 8]];
    const rows = [[0, 1, 2], [3, 4, 5], [6, 7, 8]];

    return `(${checkArr(cols)},${checkArr(rows)})`;

    function checkArr(arr) {
      for (let i = 0; i < arr.length; i++) {
        if (arr[i].includes(elem)) {
          return i + 1;
        }
      }
    }
  }

  const historyC = history;
  const current = historyC[stepNumber];
  const winner = calculateWinner(current.squares);

  const moves = historyC.map((step, move) => {
    const desc = move ?
      'Перейти к ходу #' + move :
      'К началу игры';
    const positionDesc = move ?
      getPosition(historyC[move].step) :
      '';

    return (
      <li key={move} onClick={() => console.log(this)}>
        <button onClick={() => jumpTo(move)}>{desc}</button>
        <span>{' '}{positionDesc}</span>
      </li>
    );
  });

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
        <div>{status}</div>
        <ol>{moves}</ol>
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