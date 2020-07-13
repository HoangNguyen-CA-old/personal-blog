import React from 'react';

import styles from './Input.module.scss';

const Input = (props) => {
  let inputElement = null;
  switch (props.type) {
    case 'input':
      inputElement = (
        <input
          className={styles.Input}
          {...props.config}
          value={props.value}
          onChange={props.changed}
        ></input>
      );
      break;
    case 'textarea':
      inputElement = (
        <textarea
          className={styles.TextArea}
          {...props.config}
          value={props.value}
          onChange={props.changed}
        />
      );
      break;
    default:
      inputElement = (
        <input
          className={styles.Input}
          {...props.config}
          value={props.value}
          onChange={props.changed}
        ></input>
      );
  }

  return (
    <div className={styles.FormGroup}>
      <label className={styles.Label}>{props.label}</label>
      {inputElement}
    </div>
  );
};

export default Input;
