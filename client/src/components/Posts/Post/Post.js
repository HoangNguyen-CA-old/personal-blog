import React from 'react';

import styles from './Post.module.scss';

const Post = (props) => {
  return (
    <div className={styles.Post} onClick={props.clicked}>
      <img
        src={props.image}
        className={styles.Image}
        src='https://www.digitalvidya.com/wp-content/uploads/2019/03/personal-blog.jpg'
      ></img>
      <div className={styles.TitleContainer}>
        <p className={styles.Title}>{props.title}</p>
      </div>
    </div>
  );
};

export default Post;
