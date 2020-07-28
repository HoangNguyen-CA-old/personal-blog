import React from 'react';

import styles from './Button.module.scss';

const Button = (props) => {
  let classes = [styles.Button];
  if (props.full) classes.push(styles.ButtonFull);
  return (
    <button {...props} className={classes.join(' ')}>
      {props.children}
    </button>
  );
};

export default Button;
