import React from 'react';
import { Link } from 'react-router';

import Icon from './Icon';
import styles from 'components/bottom-navigation.css';

const BottomNavigation = (props) => {
  const searchIconName = !props.searchModal ? "icon-search" : "icon-cancel-1";
  return (
    <div className={styles.container}>
      <Link to="/home" className={styles.links} activeClassName={styles.active}>
        <Icon name="icon-home" />
      </Link>
      <Link to="/likes" className={styles.links} activeClassName={styles.active}>
        <Icon name="icon-heart" />
      </Link>
      <Link to="/photos" className={styles.links} activeClassName={styles.active}>
        <Icon name="icon-camera" />
      </Link>
      <Link to="/user" className={styles.links} activeClassName={styles.active}>
        <Icon name="icon-user" />
      </Link>
      <p className={[styles.links, styles.searchLink].join(" ")} onClick={() => props.onSearch()}>
        <Icon name={searchIconName} />
      </p>
    </div>
  );
};

export default BottomNavigation;
