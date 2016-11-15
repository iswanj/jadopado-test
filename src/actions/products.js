import shop from '../api/shop';

export function getAllProducts() {
  return function(dispatch) {
    shop.getProducts(products => {
      dispatch({
        type: 'RECEIVE_PRODUCTS',
        products: products
      });
    });
  };
}

export function addComment(data) {
  return {
    type: 'ADD_COMMENT',
    data
  };
}

// export function vote(entry) {
//   return {
//     meta: { remote: true },
//     type: 'VOTE',
//     entry
//   };
// }
