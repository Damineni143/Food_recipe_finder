import React from 'react';
import { render } from '@testing-library/react';
import RecipeIngredients from './RecipeIngredients';

describe('RecipeIngredients component', () => {
  const mockIngredients = [
    { text: 'Ingredient 1' },
    { text: 'Ingredient 2' },
    { text: 'Ingredient 3' }
  ];

  test('renders ingredient list correctly', () => {
    const { getByText } = render(<RecipeIngredients ings={mockIngredients} />);

    expect(getByText('Ingredients :')).toBeInTheDocument();
    expect(getByText('Ingredient 1')).toBeInTheDocument();
    expect(getByText('Ingredient 2')).toBeInTheDocument();
    expect(getByText('Ingredient 3')).toBeInTheDocument();
  });

  test('renders correct number of ingredients', () => {
    const { container } = render(<RecipeIngredients ings={mockIngredients} />);
    const ingredientListItems = container.querySelectorAll('li');

    expect(ingredientListItems.length).toBe(mockIngredients.length);
  });
});
