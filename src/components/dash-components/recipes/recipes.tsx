import React from 'react';
import './recipes.css'
import RecipeCard from './recipecard';
import RecipeDetails from './recipedetails';


interface Recipe {
  name: string;
  image: string;
  description: string;
  ingredients: string[];
  instructions: string;
}


const Recipes: React.FC = () => {
const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);

  const recipes: Recipe[] = [
    {
      name: 'Bolo de Chocolate',
      image: 'https://example.com/bolo-de-chocolate.jpg',
      description: 'Um delicioso bolo de chocolate...',
      ingredients: ['2 xícaras de farinha', '1 xícara de açúcar', '1 xícara de chocolate em pó', '3 ovos', '1 xícara de leite'],
      instructions: 'Misture todos os ingredientes...',
    },
    {
      name: 'Lasanha',
      image: 'https://example.com/lasanha.jpg',
      description: 'Uma saborosa lasanha...',
      ingredients: ['500g de carne moída', '2 xícaras de molho de tomate', '500g de massa para lasanha', '200g de queijo mussarela', '100g de queijo parmesão'],
      instructions: 'Monte as camadas da lasanha...',
    },
  ];


  return (
    <div className="dashboard">
      <div className="main">

        <div className="left">
    






  
    <div className='styles.app'>
      <div className='styles.container'>
        {recipes.map((recipe, index) => (
          <RecipeCard key={index} recipe={recipe} onClick={setSelectedRecipe} />
        ))}
      </div>
      <RecipeDetails recipe={selectedRecipe} />
    </div>
 




        </div>

        <div className="right">
          <div className='profile-section'>
        
      
          
            
             </div>
        </div>



      </div>
    </div>

  );
}

export default Recipes;