import React from 'react';

import styles from './Controls.module.scss';

import Button from '../../../components/UI/Button/Button';

const Controls = () => {
  return (
    <div className={styles.Controls}>
      <Button>Edit Article</Button>
      <Button>Delete Article</Button>
    </div>
  );
};

export default Controls;
