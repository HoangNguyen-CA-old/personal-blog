import React from 'react';
import styles from './NavLink.module.scss';

const NavLink = (props) => {
  return (
    <a onClick={props.clicked} className={styles.NavLink}>
      {props.children}
    </a>
  );
};

export default NavLink;
