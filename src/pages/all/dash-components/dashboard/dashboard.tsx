import React, {useState, useEffect }from 'react';
import './dashboard.css'
import DisplayDate from '../../../../components/date/DisplayDate';
import NutritionalChart from '../../../../components/grafic/NutritionChart';

interface NutritionalValues {
  totalCalories: number;
  totalProtein: number;
  totalVitamins: number;
  totalCarbohydrates: number;
}


const Dashboard: React.FC = () => {
  const [meals, setMeals] = useState<NutritionalValues[]>([]);

  useEffect(() => {
    const storedMeals = localStorage.getItem('meals');
    const storedTimestamp = localStorage.getItem('mealsTimestamp');
    const currentTime = new Date().getTime();

    if (storedMeals && storedTimestamp) {
      const parsedMeals = JSON.parse(storedMeals);
      const timestamp = JSON.parse(storedTimestamp);

      if (currentTime - timestamp < 24 * 60 * 60 * 1000) {
        setMeals(parsedMeals);
      } else {
        localStorage.removeItem('meals');
        localStorage.removeItem('mealsTimestamp');
      }
    }
  }, []);

  const combinedNutritionalValues = meals.reduce(
    (acc, meal) => ({
      totalCalories: acc.totalCalories + meal.totalCalories,
      totalProtein: acc.totalProtein + meal.totalProtein,
      totalVitamins: acc.totalVitamins + meal.totalVitamins,
      totalCarbohydrates: acc.totalCarbohydrates + meal.totalCarbohydrates,
    }),
    { totalCalories: 0, totalProtein: 0, totalVitamins: 0, totalCarbohydrates: 0 }
  );


 

  return (
    <div className="dashboard">
      <div className="main">

        <div className="left">
          <div className="welcome-section">
            <DisplayDate />

            <p>Olá, Bem-vindo (a) de volta!</p>

          </div>
          <img src="/header.png" className='img' />
          <div className='content'>
<div className='Nutri'>
      <h1>Resumo Nutricional</h1>
      <NutritionalChart nutritionalValues={combinedNutritionalValues} />
    </div>
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

export default Dashboard;