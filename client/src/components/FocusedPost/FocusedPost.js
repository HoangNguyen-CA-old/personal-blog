import React from 'react';

import styles from './FocusedPost.module.scss';

import ReactMarkdown from 'react-markdown';

import Hero from '../Hero/Hero';

const FocusedPost = (props) => {
  return (
    <div className={styles.FocusedPost}>
      <Hero post={props.focusedPost}></Hero>
      <div className={styles.MarkDownContainer}>
        <ReactMarkdown source={props.focusedPost.markDown}></ReactMarkdown>
      </div>
    </div>
  );
};

export default FocusedPost;
