import React, { PropTypes, PureComponent } from 'react';
import { connect } from 'react-redux';
import { setState } from '../actions';
import InputRange from 'react-input-range';

import styles from 'home.css';

import BottomNavigation from './components/BottomNavigation';
import ProductItem from './components/ProductItem';
import { getVisibleProducts } from '../reducers/products';

export default class Home extends PureComponent {
  static propTypes = {
    searchModal: PropTypes.bool
  }
  static defaultProps = {
    searchModal: false,
    distance: 0,
    products: []
  }

  constructor(props) {
    super(props);

    this.navigateTo = this.navigateTo.bind(this);
    this.searchHandler = this.searchHandler.bind(this);
    this.handleValuesChange = this.handleValuesChange.bind(this);
    this.renderProducts = this.renderProducts.bind(this);
  }
  render() {
    const modalStyle = [
      styles.searchModal,
      this.props.searchModal && styles.showSearchModal
    ].join(" ");
    return (
      <div className={styles.mainContainer}>
        <section className={styles.products}>
          {this.props.products.map(this.renderProducts)}
        </section>
        <BottomNavigation searchModal={this.props.searchModal} onSearch={this.searchHandler} />
        <div className={modalStyle}>
          <div className={styles.searchInput}>
            <input type="text" placeholder="What are you looking for?" />
          </div>
          <div className={styles.distanceInput}>
            <p>Search within <strong>{this.props.distance}km</strong></p>
            <div className={styles.rangeInput}>
              <InputRange
                maxValue={120}
                minValue={0}
                value={this.props.distance}
                onChange={this.handleValuesChange}
              />
            </div>
          </div>
          <div className={styles.trendingSearch}>
            <div className={styles.trendingArea}>
              <h2>trending search</h2>
              <p className={styles.trends}>
                <span>#hammock</span> <span>#iceberg</span> <span>#whenindubai</span> <span>#lettuceleaf</span> <span>#Isxv8</span>
                <span>#marvel</span> <span>#dc</span> <span>#cat</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  renderProducts(item) {
    return <ProductItem key={item.id} data={item} navigateTo={this.navigateTo} showComments={false} />;
  }

  searchHandler(e) {
    this.props.setState({
      searchModal: !this.props.searchModal
    });
  }

  handleValuesChange(component, values) {
    this.props.setState({
      distance: values
    });
  }

  navigateTo(url) {
    this.props.router.push(url);
  }
}

// Connect to Redux store
function mapStateToProps(state) {
  return {
    searchModal: state.localState.searchModal,
    distance: state.localState.distance,
    products: getVisibleProducts(state.products)
  };
}

export const HomeContainer = connect(
  mapStateToProps,
  { setState }
)(Home);
