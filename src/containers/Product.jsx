import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { setState } from '../actions';

import styles from 'product.css';

import ProductItem from './components/ProductItem';

export default class Product extends PureComponent {
  render() {
    return (
      <div className={styles.mainContainer}>
        <section className={styles.products}>
          <ProductItem />
        </section>
      </div>
    );
  }
}

// Connect to Redux store
function mapStateToProps(state, ownProps) {
  return {

  };
}

export const ProductContainer = connect(
  mapStateToProps,
  { setState }
)(Product);

/*
var reg = /\#.* /gi

var str = "asdfkadsf #xxxxx bb";

var rpText = reg.exec(str);

var test = str.replace(reg,"<a href='#'>"+rpText[0].replace(/ /g,'')+"</a> ");

console.log(test);
*/
