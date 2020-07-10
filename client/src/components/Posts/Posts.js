import React from 'react';
import Post from './Post/Post';

const Posts = (props) => {
  const posts = props.posts.map((post) => {
    return (
      <Post
        key={post._id}
        title={post.title}
        createdAt={post.createdAt}
        markDown={post.markDown}
      ></Post>
    );
  });
  return <div>{posts}</div>;
};

export default Posts;
