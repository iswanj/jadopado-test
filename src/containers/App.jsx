import React, { Component } from 'react';
import 'normalize.css';
import styles from 'home.css';

class App extends Component {
  render() {
    const { children } = this.props;
    return (
      <div className={styles.app}>
        {children}
      </div>
    );
  }
}

export default App;
