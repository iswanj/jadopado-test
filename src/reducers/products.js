import { combineReducers } from 'redux';

const addComments = (state, newState) => {
  const newComments = state[newState.id].comments.concat(newState.comment);
  return { ...state, [newState.id]: { ...state[newState.id], comments: newComments } };
};

const byId = (state = {}, action) => {
  switch (action.type) {
  case 'RECEIVE_PRODUCTS':
    return {
      ...state,
      ...action.products.reduce((obj, product) => {
        obj[product.id] = product;
        return obj;
      }, {})
    };
  case 'ADD_COMMENT':
    return addComments(state, action.data);
  default:
    return state;
  }
};

const visibleIds = (state = [], action) => {
  switch (action.type) {
  case 'RECEIVE_PRODUCTS':
    return action.products.map(product => product.id);
  default:
    return state;
  }
};

export default combineReducers({
  byId,
  visibleIds
});

export const getProduct = (state, id) =>
  state.byId[id];

export const getVisibleProducts = state =>
  state.visibleIds.map(id => getProduct(state, id));
