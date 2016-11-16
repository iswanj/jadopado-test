import React, { PropTypes, PureComponent } from 'react';
import { connect } from 'react-redux';
import { setState, addComment } from '../actions';

import styles from 'product.css';

import ProductItem from './components/ProductItem';
import TopBar from './components/TopBar';

export default class Product extends PureComponent {
  static propTypes = {
    products: PropTypes.object
  }

  static defaultProps = {
    products: {}
  }

  constructor() {
    super();
    this.addComment = this.addComment.bind(this);
  }

  render() {
    const { id } = this.props.router.params;
    return (
      <div className={styles.mainContainer}>
        <section className={styles.products}>
          {typeof this.props.products[id] !== 'undefined' && <ProductItem data={this.props.products[id]} addComment={this.addComment} />}
        </section>
        <TopBar />
      </div>
    );
  }

  addComment(text) {
    this.props.addComment({
      id: this.props.router.params.id,
      comment: {
        "id": 4,
        "username": "robynrihanna",
        "image": "https://randomuser.me/api/portraits/women/28.jpg",
        "comment": text
      }
    });
  }
}

// Connect to Redux store
function mapStateToProps(state) {
  return {
    products: state.products.byId
  };
}

export const ProductContainer = connect(
  mapStateToProps,
  { setState, addComment }
)(Product);

/*
var reg = /\#.* /gi

var str = "asdfkadsf #xxxxx bb";

var rpText = reg.exec(str);

var test = str.replace(reg,"<a href='#'>"+rpText[0].replace(/ /g,'')+"</a> ");

console.log(test);
*/
