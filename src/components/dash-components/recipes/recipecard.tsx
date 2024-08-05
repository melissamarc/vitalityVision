// RecipeCard.tsx
import React from 'react';
import './recipes.css'

interface Recipe {
  name: string;
  image: string;
  description: string;
  ingredients: string[];
  instructions: string;
}

interface RecipeCardProps {
  recipe: Recipe;
  onClick: (recipe: Recipe) => void;
}

const RecipeCard: React.FC<RecipeCardProps> = ({ recipe, onClick }) => {
  return (
    <div onClick={() => onClick(recipe)} className='styles.card'>
      <img src={recipe.image} alt={recipe.name} className='styles.image'/>
      <h3>{recipe.name}</h3>
    </div>
  );
};

export default RecipeCard;
