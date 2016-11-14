import React from 'react';

import Icon from './Icon';
import styles from 'components/comment-input.css';

const CommentInput = () => {
  return (
    <div className={styles.container}>
      <input type="text" placeholder="Write comment" className={styles.input} />
      <button className={styles.button}>
        <Icon name="icon-direction" />
      </button>
    </div>
  );
};

export default CommentInput;
