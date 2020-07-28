import React from 'react';
import styles from './AdminPost.module.scss';
import Button from '../UI/Button/Button';

const AdminPost = (props) => {
  return (
    <div className={styles.Container}>
      <h6 className={styles.Title}>Title: {props.post.title}</h6>
      <div>
        <Button onClick={props.handleEditPost}>Edit</Button>
        <Button>Delete</Button>
      </div>
    </div>
  );
};

export default AdminPost;
