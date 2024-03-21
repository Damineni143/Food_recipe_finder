import React from 'react';
import { render } from '@testing-library/react';
import Recipe from './Recipe';

describe('Recipe component', () => {
  const mockRecipe = {
    recipe: {
      label: 'Test Recipe',
      image: 'test_image.jpg',
      calories: 500,
      ingredients: ['Ingredient 1', 'Ingredient 2']
    }
  };

  test('renders recipe name, image, and calories', () => {
    const { getByText, getByAltText } = render(<Recipe recipe={mockRecipe} />);

    expect(getByText('Test Recipe')).toBeInTheDocument();
    expect(getByAltText('img')).toBeInTheDocument();
    expect(getByText('Calories : 500')).toBeInTheDocument();
  });

  test('renders recipe ingredients', () => {
    const { getByText } = render(<Recipe recipe={mockRecipe} />);
    
    expect(getByText('Ingredient 1')).toBeInTheDocument();
    expect(getByText('Ingredient 2')).toBeInTheDocument();
  });
});
