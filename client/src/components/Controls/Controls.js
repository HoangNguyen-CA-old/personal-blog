import React from 'react';

import styles from './Controls.module.scss';

import Button from '../UI/Button/Button';

const Controls = (props) => {
  let content = (
    <>
      <Button onClick={props.toggleEdit}>Edit Article</Button>
    </>
  );
  if (props.editing) {
    content = (
      <>
        <Button onClick={props.editPost}>Edit Post</Button>
        <Button onClick={props.toggleEdit}>Stop Editing</Button>
      </>
    );
  }
  return <div className={styles.Controls}>{content}</div>;
};

export default Controls;
