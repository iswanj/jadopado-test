import React from 'react';
import Icon from './Icon';
import CommentInput from './CommentInput';

import styles from 'components/product.css';

function renderAllCommentsLink() {
  return <a className={styles.morelink}>View 12 comments</a>;
}

function renderComments() {
  return (
    <div className={styles.comments}>
      <div className={styles.comment}>
        <div className={styles.cmtImage}>
          <img src="https://randomuser.me/api/portraits/women/22.jpg" alt="comment user" />
        </div>
        <div className={styles.cmtText}>
          <span className={styles.cmtUsername}>siliconalley</span> Vivamus augue ante, convallis eu congure sit amet, efficiture auis nibh. <a href="#" className={styles.hashLink}>#montmotors</a> Nullam porta est dolor. id fermentium ligula tncidun
        </div>
      </div>
      <div className={styles.comment}>
        <div className={styles.cmtImage}>
          <img src="https://randomuser.me/api/portraits/women/22.jpg" alt="comment user" />
        </div>
        <div className={styles.cmtText}>
          <span className={styles.cmtUsername}>siliconalley</span> Vivamus augue ante, convallis eu congure sit amet, efficiture auis nibh. <a href="#" className={styles.hashLink}>#montmotors</a> Nullam porta est dolor. id fermentium ligula tncidun
        </div>
      </div>
    </div>
  );
}

function renderCommentInput() {
  return (
    <CommentInput />
  );
}

const ProductItem = (props) => {
  var productImage = {
    backgroundImage: `url(${process.env.PUBLIC_URL}/images/leaf-iphone-case.jpg)`
  };

  const handleClick = () => {
    props.navigateTo && props.navigateTo('product');
  };

  return (
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
      <div className={styles.productImg} onClick={handleClick}>
        <div className={styles.image} style={productImage}>

        </div>
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
      <div className={styles.description}>
        <p className={styles.descriptionText}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          <span className={styles.hash}> #iphone #cases #mobile_phones #macbookpro</span>
        </p>
        {!props.showComments && renderAllCommentsLink()}
      </div>
      {props.showComments && renderComments()}
      {props.showComments && renderCommentInput()}
    </div>
  );
};

ProductItem.defaultProps = {
  showComments: true
};

export default ProductItem;
