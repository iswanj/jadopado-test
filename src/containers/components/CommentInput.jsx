import React, { Component } from 'react';
import Scroll from 'react-scroll';

const scroll = Scroll.animateScroll;

import Icon from './Icon';
import styles from 'components/comment-input.css';

class CommentInput extends Component {
  constructor(props) {
    super(props);

    this.clickHandler = this.clickHandler.bind(this);
  }

  render() {
    return (
      <div className={styles.container}>
        <input ref={(ref) => this.input = ref} type="text" placeholder="Write comment" className={styles.input} />
        <button className={styles.button} onClick={this.clickHandler}>
          <Icon name="icon-direction" />
        </button>
      </div>
    );
  }

  clickHandler() {
    this.props.addComment(this.input.value);
    this.input.value = "";
    scroll.scrollToBottom();
  }
}

export default CommentInput;
