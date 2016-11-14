function getProducts(state, newState) {
  return { ...state, ...newState };
}

export default function(state = {}, action) {
  switch (action.type) {
  case 'GET_PRODUCTS':
    return getProducts(state, action.state);
  default:
    return state;
  }
}
