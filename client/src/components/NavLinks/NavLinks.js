import React from 'react';
import styles from './NavLinks.module.scss';
import NavLink from './NavLink/NavLink';

const NavLinks = (props) => {
  return (
    <div className={styles.NavLinks}>
      <NavLink clicked={props.gotoPosts}>Articles</NavLink>
    </div>
  );
};

export default NavLinks;
