import Board from './components/Board/Board';
import s from "./Game.module.scss";

function Game() {
  return (
    <div className={s["game"]}>
      <div className={s["game-board"]}>
        <Board />
      </div>
      <div className={s["game-info"]}>
        <div>{/* status */}</div>
        <ol>{/* TODO */}</ol>
      </div>
    </div>
  );
}

export default Game;
