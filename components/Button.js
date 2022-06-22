import React from 'react';
import styles from './Button.module.css';

const Button = ({ text, redirectTo }) => {
  const handleBtnClick = () => {
    const res = confirm(
      'You will be redirected to another website, do you want to proceed?'
    );
    if (res) window.open(redirectTo, '_blank');
  };
  return (
    <button onClick={handleBtnClick} className={styles.buttonStyles}>
      {text}
    </button>
  );
};

export default Button;
