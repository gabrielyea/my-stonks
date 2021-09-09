import React from 'react';
import {
  BrowserRouter as Router,
} from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Navbar from '../components/navbar/Navbar';

describe('Test Button component', () => {
  render(
    <Router>
      <Navbar />
    </Router>,
  );

  test('Expect Nabbar to be rendered', () => {
    expect(screen.getByText('Crypto Coins')).toBeInTheDocument();
  });
});
