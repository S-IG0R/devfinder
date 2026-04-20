import React, { type CSSProperties } from 'react';
import styles from './Button.module.scss'

interface IButton {
  children: string;
  type: 'button' | 'submit'
  handleClick?: React.MouseEventHandler<HTMLButtonElement>;
  style?: CSSProperties
}

const Button = ({ children, handleClick, type='submit', style }: IButton) => {
  return (
    <button style={style} className={styles.button} type={type} onClick={handleClick}>
      {children}
    </button>
  );
};

export default Button;
