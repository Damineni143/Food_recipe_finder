import React from 'react';
import { render } from '@testing-library/react';
import RecipeList from './RecipeList';

describe('RecipeList component', () => {
  const mockRecipes = [
    { recipe: { label: 'Recipe 1', image: 'image1.jpg', calories: 200, ingredients: ['Ingredient 1', 'Ingredient 2'] } },
    { recipe: { label: 'Recipe 2', image: 'image2.jpg', calories: 300, ingredients: ['Ingredient 3', 'Ingredient 4'] } }
  ];

  test('renders list of recipes', () => {
    const { getByText } = render(<RecipeList recipes={mockRecipes} />);
    
    expect(getByText('Recipe 1')).toBeInTheDocument();
    expect(getByText('Recipe 2')).toBeInTheDocument();
  });

  test('renders correct number of recipes', () => {
    const { getAllByTestId } = render(<RecipeList recipes={mockRecipes} />);
    
    expect(getAllByTestId('recipe-item')).toHaveLength(mockRecipes.length);
  });
});
