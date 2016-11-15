import React from 'react';
import { Link } from 'react-router';

import Icon from './Icon';
import styles from 'components/tob-bar.css';

const TopBar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <Link to="/" className={styles.link}>
          <Icon name="icon-left-open" />
        </Link>
      </div>
      <div className={styles.title}>
        Photos
      </div>
      <div className={styles.right}>

      </div>
    </div>
  );
};

export default TopBar;
