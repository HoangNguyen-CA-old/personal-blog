import React from 'react';
import styles from './AdminPost.module.scss';
import Button from '../UI/Button/Button';

const AdminPost = (props) => {
  return (
    <div className={styles.Container}>
      <h6 className={styles.Title}>Title: {props.post.title}</h6>
      <div>
        <span className={styles.ButtonContainer}>
          <Button onClick={props.handleEditPost}>Edit</Button>
        </span>
        <span className={styles.ButtonContainer}>
          <Button>Delete</Button>
        </span>
      </div>
    </div>
  );
};

export default AdminPost;
