import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';
import products from './products';
import localState from './local-state';

const rootReducer = combineReducers({
  products,
  localState,
  routing
});

export default rootReducer;
