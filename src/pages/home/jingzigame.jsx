import "./jingzigame.css";
import { useState } from "react";
import { Button } from "antd";

// eslint-disable-next-line react/prop-types
function Square({ value, onSquareClick }) {
  // const [value, setValue] = useState(null);
  // function handleClick() {
  //   setValue("黑");
  //   // console.log("你点击了!");
  // }
  return (
    <>
      <button className="square" onClick={onSquareClick}>
        {value}
      </button>
    </>
  );
}

function Board() {
  const [xIsNext, setXIsNext] = useState(true);
  const [squares, setSquares] = useState(Array(9).fill(null));

  function handleClick(i) {
    if (squares[i] || calculateWinner(squares)) {
      return;
    }
    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[i] = "黑";
    } else {
      nextSquares[i] = "白";
    }
    console.log(nextSquares[i]);
    // 打印点击的元素
    setSquares(nextSquares);
    // 保存棋盘内的数组
    setXIsNext(!xIsNext);
  }
  // 告诉玩家游戏何时结束
  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = "胜利者: " + winner;
  } else {
    status = "下一位玩家: " + (xIsNext ? "黑" : "白");
  }
  return (
    <>
      <h1 className="h1">井字棋游戏</h1>
      <div className="main">
        <div className="status">{status}</div>
        <div className="board-row">
          <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
          <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
          <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
        </div>
        <div className="board-row">
          <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
          <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
          <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
        </div>
        <div className="board-row">
          <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
          <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
          <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
        </div>
      </div>
      <div className="to_refresh">
        <Button type="primary">
          再来一次
        </Button>
      </div>
    </>
  );
}

// 显示游戏何时获胜
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

export default Board;
