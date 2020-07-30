import React from 'react';
import styles from './AdminPost.module.scss';
import Button from '../UI/Button/Button';

const AdminPost = (props) => {
  return (
    <div className={styles.Container}>
      <h6 className={styles.Title}>{props.post.title}</h6>
      <div className={styles.Buttons}>
        <span className={styles.ButtonContainer}>
          <Button onClick={props.handleEditPost}>Edit</Button>
        </span>
        <div className={styles.ButtonContainer}>
          <Button onClick={props.handleDeletePost}>Delete</Button>
        </div>
      </div>
    </div>
  );
};

export default AdminPost;
