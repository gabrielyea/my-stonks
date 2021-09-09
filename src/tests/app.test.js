import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import store from '../redux/configureStore';
import App from '../App';

describe('Check if all components are rendered', () => {
  test('Renders NavBar', () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>,
    );
    expect(screen.getByText('Crypto Coins')).toBeInTheDocument();
  });
  test('Renders section title', () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>,
    );
    expect(screen.getByText('All crypto currencies')).toBeInTheDocument();
  });
  test('Renders Header', () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>,
    );
    expect(screen.getByText('Cryptocurrencies')).toBeInTheDocument();
  });
  test('Renders Loader', () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>,
    );
    expect(screen.getByText('LOADING')).toBeInTheDocument();
  });
});
