import React from 'react';

import styles from './FocusedPost.module.scss';

import ReactMarkdown from 'react-markdown';

import Hero from '../Hero/Hero';

const FocusedPost = (props) => {
  return (
    <div className={styles.FocusedPost}>
      <Hero
        post={props.focusedPost}
        description={`written on ${
          new Date(props.focusedPost.createdAt).toISOString().split('T')[0]
        }`}
      ></Hero>
      <div className={styles.MarkDownContainer}>
        <ReactMarkdown source={props.focusedPost.markDown}></ReactMarkdown>
      </div>
    </div>
  );
};

export default FocusedPost;
