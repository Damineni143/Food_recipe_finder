import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import SearchFrom from './SearchFrom';

describe('SearchFrom component', () => {
  test('renders input field with placeholder', () => {
    const { getByPlaceholderText } = render(<SearchFrom />);
    const inputElement = getByPlaceholderText('Search Recipe');
    
    expect(inputElement).toBeInTheDocument();
  });

  test('input field updates on change', () => {
    const { getByPlaceholderText } = render(<SearchFrom />);
    const inputElement = getByPlaceholderText('Search Recipe');
    
    fireEvent.change(inputElement, { target: { value: 'Test' } });
    
    expect(inputElement.value).toBe('Test');
  });

  test('calls getQuerry with correct value on form submission', () => {
    const getQuerryMock = jest.fn();
    const { getByPlaceholderText, getByText } = render(<SearchFrom getQuerry={getQuerryMock} />);
    const inputElement = getByPlaceholderText('Search Recipe');
    const searchButton = getByText('Search');
    
    fireEvent.change(inputElement, { target: { value: 'Test' } });
    fireEvent.click(searchButton);
    
    expect(getQuerryMock).toHaveBeenCalledWith('Test');
  });
});
