import React from 'react';

import styles from './FocusedPost.module.scss';

import ReactMarkdown from 'react-markdown';

import Hero from '../Hero/Hero';
import Controls from './Controls/Controls';

const FocusedPost = (props) => {
  return (
    <div>
      <Hero post={props.focusedPost}></Hero>
      <div className={styles.MarkDownContainer}>
        <ReactMarkdown source={props.focusedPost.markDown}></ReactMarkdown>
      </div>

      <Controls />
    </div>
  );
};

export default FocusedPost;
