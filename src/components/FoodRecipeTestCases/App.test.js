import React from 'react';
import { render, waitFor, fireEvent } from '@testing-library/react';
import { MemoryRouter, Route } from 'react-router-dom';
import App from './App';

describe('App component', () => {
  test('renders LoginPage when path is "/"', () => {
    const { getByText } = render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    );

    expect(getByText('Login Page')).toBeInTheDocument();
  });

  test('renders RecipeList when path is "/search"', async () => {
    global.fetch = jest.fn().mockResolvedValue({
      json: jest.fn().mockResolvedValue({ hits: [] }),
    });

    const { getByPlaceholderText, getByText } = render(
      <MemoryRouter initialEntries={['/search']}>
        <App />
      </MemoryRouter>
    );

    const searchInput = getByPlaceholderText('Search Recipe');
    fireEvent.change(searchInput, { target: { value: 'Test' } });

    await waitFor(() => {
      expect(getByText('Recipe List')).toBeInTheDocument();
    });
  });
});
