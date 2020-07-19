import React from 'react';
import styles from './ErrorMessage.module.scss';

const ErrorMessage = (props) => {
  return (
    <div className={styles.Container}>
      <p className={styles.Message}>{props.children}</p>
    </div>
  );
};

export default ErrorMessage;
