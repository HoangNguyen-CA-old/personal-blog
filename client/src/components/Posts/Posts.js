import React from 'react';
import Post from './Post/Post';

import styles from './Posts.module.scss';

const Posts = (props) => {
  const posts = props.posts.map((post, index) => {
    if (index === 0) return null;
    return (
      <Post
        key={post._id}
        title={post.title}
        createdAt={post.createdAt}
        markDown={post.markDown}
        clicked={() => props.setFocused(post)}
      ></Post>
    );
  });
  return (
    <div className={styles.Posts}>
      {posts}
      {posts}
      {posts}
      {posts}
      {posts}
      {posts}
    </div>
  );
};

export default Posts;
