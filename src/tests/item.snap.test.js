import React from 'react';
import {
  BrowserRouter as Router,
} from 'react-router-dom';
import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';

import Item from '../components/item/Item';

it('renders correctly when there is one item', () => {
  const data = {
    id: 1,
    name: 'BitCoin',
    priceUsd: '10',
    symbol: 'test',
  };
  const tree = renderer.create(
    <Router>
      <Item data={data} />
    </Router>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
