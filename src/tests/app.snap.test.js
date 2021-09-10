import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import store from '../redux/configureStore';
import '@testing-library/jest-dom';

import App from '../App';

it('renders correctly when there are no items', () => {
  const tree = renderer.create(
    <Provider store={store}>
      <App />
    </Provider>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
