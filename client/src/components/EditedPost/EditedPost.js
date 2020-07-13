import React from 'react';

import styles from './EditedPost.module.scss';

import FormInputs from '../UI/FormInputs/FormInputs';

const EditedPost = (props) => {
  return (
    <div>
      <FormInputs
        controls={props.controls}
        handleInputChanged={props.handleInputChanged}
      ></FormInputs>
    </div>
  );
};

export default EditedPost;
