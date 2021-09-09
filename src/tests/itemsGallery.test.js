import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
} from 'react-router-dom';
import '@testing-library/jest-dom';
import ItemGallery from '../components/gallery/ItemsGallery';
import store from '../redux/configureStore';

describe('Test Button component', () => {
  const data = {
    id: 1,
    name: 'BitCoin',
    priceUsd: '10',
    symbol: 'test',
  };

  const list = [data];
  render(
    <Provider store={store}>
      <Router>
        <ItemGallery list={list} />
      </Router>
    </Provider>,
  );

  screen.debug();
  test('Expect one item to be rendered', () => {
    expect(screen.getByTestId('gallery')).toBeInTheDocument();
  });
});
