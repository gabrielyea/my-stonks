import React from 'react';
import {
  BrowserRouter as Router,
} from 'react-router-dom';
import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';

import NavBar from '../components/navbar/Navbar';

it('renders the nav items', () => {
  const tree = renderer.create(
    <Router>
      <NavBar />
    </Router>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
