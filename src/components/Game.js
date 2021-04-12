import React, { useState } from 'react';
import { Board } from './Board';

const calculateWinner = (squares) => {
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
};

const initialHistory = [{ squares: Array(9).fill(null) }];

export const Game = () => {
  const [history, setHistory] = useState(initialHistory);
  const [isXNext, setIsXNext] = useState(true);
  const [stepNumber, setStepNumber] = useState(0);

  const handleFieldClick = (fieldNumber) => {
    // console.log(stepNumber);
    const historyFromCurrent = history.slice(0, stepNumber + 1);

    const current = historyFromCurrent[historyFromCurrent.length - 1];
    const squares = current.squares.slice();
    if (calculateWinner(squares) || squares[fieldNumber]) {
      return;
    }
    squares[fieldNumber] = isXNext ? 'X' : 'O';

    const currentHistory = [...historyFromCurrent, { squares }];

    setHistory(currentHistory);
    setStepNumber(currentHistory.length - 1);
    setIsXNext(!isXNext);
  };

  const jumpTo = (step) => {
    setStepNumber(step);
    setIsXNext(step % 2 === 0);
  };

  const current = history[stepNumber];
  const winner = calculateWinner(current.squares);

  const moves = history.map((step, move) => {
    const desc = move ? 'Go to move #' + move : 'Go to game start';
    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{desc}</button>
      </li>
    );
  });

  let status;
  if (winner) {
    status = 'Winner: ' + winner;
  } else {
    status = 'Next player: ' + (isXNext ? 'X' : 'O');
  }

  return (
    <div className="game">
      <div className="game-board">
        <Board squares={current.squares} onClick={(i) => handleFieldClick(i)} />
      </div>
      <div className="game-info">
        <div>{status}</div>
        <ol>{moves}</ol>
      </div>
    </div>
  );
};
