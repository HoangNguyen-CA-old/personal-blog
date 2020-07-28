import React from 'react';
import styles from './NavLinks.module.scss';
import NavLink from './NavLink/NavLink';

const NavLinks = (props) => {
  return (
    <div className={styles.NavLinks}>
      <NavLink clicked={props.gotoPosts}>Articles</NavLink>
      {props.isAuthenticated ? (
        <>
          <NavLink clicked={props.gotoAdmin}>Admin-Panel</NavLink>
          <NavLink clicked={props.logout}>Logout</NavLink>
        </>
      ) : (
        <NavLink clicked={props.gotoLogin}>Admin-Login</NavLink>
      )}
    </div>
  );
};

export default NavLinks;
