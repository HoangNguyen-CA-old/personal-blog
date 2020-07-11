import React from 'react';

import styles from './FocusedPost.module.scss';

import { Redirect } from 'react-router-dom';

import ReactMarkdown from 'react-markdown';

import Hero from '../Hero/Hero';
import Controls from './Controls/Controls';

const FocusedPost = (props) => {
  let content = <Redirect to='/'></Redirect>;
  if (props.focusedPost !== null) {
    content = (
      <div>
        <Hero post={props.focusedPost}></Hero>
        <div className={styles.MarkDownContainer}>
          <ReactMarkdown source={props.focusedPost.markDown}></ReactMarkdown>
        </div>

        <Controls />
      </div>
    );
  }
  return <>{content}</>;
};

export default FocusedPost;
