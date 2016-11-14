import React, { PureComponent } from 'react';
import styles from 'home.css';
import { connect } from 'react-redux';
import { setState } from '../actions';

import BottomNavigation from './components/BottomNavigation';

export default class Home extends PureComponent {
  render() {
    return (
      <div className={styles.mainContainer}>
        <section className={styles.products}>
          <div className={styles.item}>
            <div className={styles.topHeader}>
              <div className={styles.user}>
                <img alt="User Pic" src="https://randomuser.me/api/portraits/men/13.jpg" className={styles.userPic} />
                <span className={styles.username}>tracymacgrady</span>
              </div>
              <div className={styles.distance}>
                <span>500m</span> away
              </div>
            </div>
          </div>
        </section>
        <BottomNavigation />
      </div>
    );
  }
}

// Connect to Redux store
function mapStateToProps(state, ownProps) {
  return {

  };
}

export const HomeContainer = connect(
  mapStateToProps,
  { setState }
)(Home);
