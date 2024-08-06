import './recipes.css'
import React from 'react';

interface Recipe {
  name: string;
  image: string;
  description: string;
  ingredients: string[];
  instructions: string;
}

interface RecipeDetailsProps {
  recipe: Recipe | null;
}

const RecipeDetails: React.FC<RecipeDetailsProps> = ({ recipe }) => {
  if (!recipe) {
    return <div>Selecione uma receita para ver os detalhes</div>;
  }

  return (
    <div className="styles.details">
      <h2>{recipe.name}</h2>
      <img src={recipe.image} alt={recipe.name} className='styles.image2'/>
      <p>{recipe.description}</p>
      <ul>
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <h3>Modo de preparo</h3>
      <p>{recipe.instructions}</p>
    </div>
  );
};

export default RecipeDetails;
