import React, { PureComponent } from 'react';
import styles from 'home.css';
import { connect } from 'react-redux';
import { setState } from '../actions';

import BottomNavigation from './components/BottomNavigation';
import Icon from './components/Icon';

export default class Home extends PureComponent {
  render() {
    var productImage = {
      backgroundImage: `url(${process.env.PUBLIC_URL}/images/leaf-iphone-case.jpg)`
    };
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
            <div className={styles.image} style={productImage}>
              <div className={styles.imageDetails}>
                <div className={styles.name}>
                  <p>Leaf iPhone Case Hard Plastic</p>
                  <p><strong>AED 230</strong></p>
                </div>
                <div className={styles.share}>
                  <Icon name="icon-share" className={styles.icon} />
                  <Icon name="icon-heart" className={styles.heart} />
                </div>
              </div>
            </div>
            <div className={styles.likes}>
              <Icon name="icon-heart" className={styles.likeIcon} /> 32 likes
            </div>
            <div className={styles.comments}>
              <div className={styles.comment}>
                <p className={styles.commentText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
                <p className={styles.hash}>#iphone #cases #mobile_phones #macbookpro</p>
                <a className={styles.morelink}>View 12 comments</a>
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
