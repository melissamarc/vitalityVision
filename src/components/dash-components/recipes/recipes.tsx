import React, { useState } from 'react';
import './recipes.css'

interface Recipe {
  title: string;
  description: string;
  image: string;
}

const recipesData: { [key: string]: Recipe[] } = {
  'Café da Manhã': [
    { title: 'Panquecas', description: 'Deliciosas panquecas caseiras.', image: 'https://via.placeholder.com/150' },
    { title: 'Smoothie Bowl', description: 'Tigela de smoothie saudável.', image: 'https://via.placeholder.com/150' },
    { title: 'Ovos Mexidos', description: 'Ovos mexidos com torradas.', image: 'https://via.placeholder.com/150' },
    { title: 'Muffins', description: 'Muffins de blueberry.', image: 'https://via.placeholder.com/150' },
  ],
  'Almoço': [
    { title: 'Salada Caesar', description: 'Salada Caesar clássica.', image: 'https://via.placeholder.com/150' },
    { title: 'Sopa de Tomate', description: 'Sopa de tomate fresca.', image: 'https://via.placeholder.com/150' },
    { title: 'Sanduíche de Frango', description: 'Sanduíche de frango grelhado.', image: 'https://via.placeholder.com/150' },
    { title: 'Quiche', description: 'Quiche de espinafre.', image: 'https://via.placeholder.com/150' },
  ],
  'Jantar': [
    { title: 'Spaghetti', description: 'Spaghetti à bolonhesa.', image: 'https://via.placeholder.com/150' },
    { title: 'Hambúrguer', description: 'Hambúrguer artesanal.', image: 'https://via.placeholder.com/150' },
    { title: 'Pizza', description: 'Pizza de pepperoni.', image: 'https://via.placeholder.com/150' },
    { title: 'Salmão', description: 'Salmão grelhado.', image: 'https://via.placeholder.com/150' },
  ],
};

const Recipes: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Café da Manhã');
  const recipes = recipesData[selectedCategory];

  return (
    <div className='container'>

    <h1 className='title'>
  Descubra nossas receitas
</h1>
<p className='subtitulo'> Nossas receitas são indicadas pensando especialmente em você e no seu perfil.
Escolha qual melhor se adapta a sua realidade no cotidiano.</p>
    <div className="recipe-menu">
      <div className="categories">
        {Object.keys(recipesData).map(category => (
          <button
            key={category}
            className={`category-button ${selectedCategory === category ? 'active' : ''}`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="recipes">




        {recipes.map((recipe, index) => (
          <div key={index} className="recipe-card">
            <img src={recipe.image} alt={recipe.title} className="recipe-image" />
            <div className="recipe-info">
              <h3>{recipe.title}</h3>
              <p>{recipe.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div> </div>
  );
};

export default Recipes;
