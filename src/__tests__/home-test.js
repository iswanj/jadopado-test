import React from 'react';
import Home from '../containers/Home';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('Home page renders correctly', () => {
  const tree = renderer.create(
    <Home />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
