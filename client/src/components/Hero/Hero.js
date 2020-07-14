import React from 'react';

import styles from './Hero.module.scss';

const Hero = (props) => {
  let content = null;
  let HeroClass = [styles.Hero];
  if (props.clicked) {
    HeroClass.push(styles.HeroHover);
  }

  if (props.post) {
    content = (
      <div className={HeroClass.join(' ')} onClick={props.clicked}>
        <p className={styles.SubHeader}>{props.subheader}</p>
        <h2 className={styles.Header}>{props.post.title}</h2>
        <p className={styles.Description}>{props.description}</p>
      </div>
    );
  }
  return <>{content}</>;
};

export default Hero;
