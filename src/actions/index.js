const products = require('./products');
const localState = require('./local-state');

module.exports = {
  ...products,
  ...localState
};
