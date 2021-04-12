import React from 'react';
import styles from '../components/_Square.module.scss';

export const Square = (props) => {
  return (
    <button onClick={props.onClick} className={styles.square}>
      {props.value}
    </button>
  );
};
