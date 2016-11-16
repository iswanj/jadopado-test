jest.mock('react-dom');
import React from 'react';
import Home from '../containers/Home';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('Home page renders correctly', () => {
  const products = [
    {
      "id": 1,
      "title": "Leaf iPhone Case Hard Plastic",
      "owner": {
        "username": "tracymacgrady",
        "image": "https://randomuser.me/api/portraits/men/13.jpg"
      },
      "images": [
        "leaf-iphone-case.jpg"
      ],
      "price": 450,
      "distance": 500,
      "likes": 32,
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      "tages": ["iphone", "cases", "mobile_phones", "macbookpro"],
      "comments": [
        {
          "id": 1,
          "username": "jevonjans",
          "image": "https://randomuser.me/api/portraits/men/98.jpg",
          "comment": "Adhuc liberavisse cu pro. Ex eam mutat ancillae noluisse. Ius ad autem aliquid vulputate"
        },
        {
          "id": 2,
          "username": "robynrihanna",
          "image": "https://randomuser.me/api/portraits/women/28.jpg",
          "comment": "Te nec soleat graece commune, cu pri ferri verear dignissim, case wisi ad vim. Modo iusto aperiam eu eos, etiam convenire assueverit cum no."
        }
      ]
    }
  ];
  const tree = renderer.create(
    <Home products={products} />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
