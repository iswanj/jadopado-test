import React from 'react';
import Product from '../containers/Product';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('Product page renders correctly', () => {
  const tree = renderer.create(
    <Product />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
