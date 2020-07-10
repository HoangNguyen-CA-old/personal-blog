import React from 'react';

import styles from './Hero.module.scss';

const Hero = (props) => {
  let content = null;
  if (props.post) {
    content = (
      <div className={styles.Hero} onClick={() => props.setFocused(props.post)}>
        <p className={styles.SubHeader}>Featured Article</p>
        <h2 className={styles.Header}>{props.post.title}</h2>
      </div>
    );
  }
  return <>{content}</>;
};

export default Hero;
