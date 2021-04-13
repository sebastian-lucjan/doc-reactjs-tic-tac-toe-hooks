import React from 'react';
import { Square } from './Square';
import styles from './_Board.module.scss';

export const Board = (props) => {
  const renderSquare = (fieldNumber) => (
    <Square value={props.squares[fieldNumber]} onClick={() => props.onClick(fieldNumber)} />
  );

  return (
    <>
      <div className={styles['board-row']}>
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className={styles['board-row']}>
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className={styles['board-row']}>
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </>
  );
};
