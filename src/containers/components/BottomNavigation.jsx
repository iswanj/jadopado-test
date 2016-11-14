import React from 'react';
import { Link } from 'react-router';

import Icon from './Icon';
import styles from 'components/bottom-navigation.css';

const BottomNavigation = () => {
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
      <Link to="/search" className={styles.links} activeClassName={styles.active}>
        <Icon name="icon-search" />
      </Link>
    </div>
  )
}

export default BottomNavigation;
