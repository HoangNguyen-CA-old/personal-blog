import React from 'react';
import Post from './Post/Post';

const Posts = (props) => {
  const posts = props.posts.map((post) => {
    return <Post title={post.title} createdAt={post.createdAt}></Post>;
  });
  return <div>{posts}</div>;
};

export default Posts;
