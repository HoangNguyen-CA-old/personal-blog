import React from 'react';
import ReactMarkdown from 'react-markdown';

import styles from './Post.module.scss';

const input = '# This is a header\n\nAnd this is a paragraph \n ### wow';

const Post = (props) => {
  return (
    <div className={styles.MarkDownContainer}>
      <h1>{props.title}</h1>
      <ReactMarkdown source={input}></ReactMarkdown>
    </div>
  );
};

export default Post;
