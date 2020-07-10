import React from 'react';

const Post = (props) => {
  return (
    <div>
      <h1>
        {props.title}
        {props.createdAt}
      </h1>
    </div>
  );
};

export default Post;
