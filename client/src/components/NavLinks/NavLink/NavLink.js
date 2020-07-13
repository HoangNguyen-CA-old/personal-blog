import React from 'react';
import styles from './NavLink.module.scss';

const NavLink = (props) => {
  return (
    <button onClick={props.clicked} className={styles.NavLink}>
      {props.children}
    </button>
  );
};

export default NavLink;
