import React from 'react';
import Icon from './Icon';
import CommentInput from './CommentInput';

import styles from 'components/product.css';

function renderAllCommentsLink(data) {
  return <a className={styles.morelink}>View {data.comments.length} comments</a>;
}

function renderComments(data) {
  return (
    <div className={styles.comments}>
      {data.comments.map((comment) => {
        return (
          <div key={comment.id} className={styles.comment}>
            <div className={styles.cmtImage}>
              <img src={comment.image} alt={comment.username} />
            </div>
            <div className={styles.cmtText}>
              <span className={styles.cmtUsername}>{comment.username}</span> {comment.comment}
            </div>
            {/* <div className={styles.cmtText}>
              <span className={styles.cmtUsername}>{comment.username}</span> Vivamus augue ante, convallis eu congure sit amet, efficiture auis nibh. <a href="#" className={styles.hashLink}>#montmotors</a> Nullam porta est dolor. id fermentium ligula tncidun
            </div> */}
          </div>
        );
      })}
    </div>
  );
}

function renderCommentInput(addComment) {
  return (
    <CommentInput addComment={addComment} />
  );
}

const ProductItem = (props) => {
  var productImage = {
    backgroundImage: `url(${process.env.PUBLIC_URL}/images/${props.data.images[0]})`
  };

  const handleClick = (id) => {
    props.navigateTo && props.navigateTo(`product/${id}`);
  };

  return (
    <div className={styles.item}>
      <div className={styles.topHeader}>
        <div className={styles.user}>
          <img alt="User Pic" src={props.data.owner.image} className={styles.userPic} />
          <span className={styles.username}>{props.data.owner.username}</span>
        </div>
        <div className={styles.distance}>
          <span>{props.data.distance}m</span> away
        </div>
      </div>
      <div className={styles.productImg} onClick={() => handleClick(props.data.id)}>
        <div className={styles.image} style={productImage}>

        </div>
        <div className={styles.imageDetails}>
          <div className={styles.name}>
            <p>{props.data.title}</p>
            <p><strong>AED {props.data.price}</strong></p>
          </div>
          <div className={styles.share}>
            <Icon name="icon-share" className={styles.icon} />
            <Icon name="icon-heart" className={styles.heart} />
          </div>
        </div>
      </div>
      <div className={styles.likes}>
        <Icon name="icon-heart" className={styles.likeIcon} /> {props.data.likes} likes
      </div>
      <div className={styles.description}>
        <p className={styles.descriptionText}>
          {props.data.description}
          <span className={styles.hash}> {props.data.tages.map((item) => `#${item} `)}</span>
        </p>
        {!props.showComments && renderAllCommentsLink(props.data)}
      </div>
      {props.showComments && renderComments(props.data)}
      {props.showComments && renderCommentInput(props.addComment)}
    </div>
  );
};

ProductItem.defaultProps = {
  showComments: true
};

export default ProductItem;
