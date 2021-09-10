import React from 'react';
import {
  BrowserRouter as Router,
} from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Item from '../components/item/Item';

describe('Test Button component', () => {
  const data = {
    id: 1,
    name: 'BitCoin',
    priceUsd: '10',
    symbol: 'test',
  };
  render(
    <Router>
      <Item data={data} />
    </Router>,
  );

  test('Expect item BitCoin to be rendered', () => {
    expect(screen.getByText('BitCoin')).toBeInTheDocument();
  });
});
