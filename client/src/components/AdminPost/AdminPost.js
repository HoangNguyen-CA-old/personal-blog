import React from 'react';
import styles from './AdminPost.module.scss';
import Button from '../UI/Button/Button';

const AdminPost = (props) => {
  return (
    <div className={styles.Container}>
      <Button>Edit</Button>
    </div>
  );
};

export default AdminPost;
