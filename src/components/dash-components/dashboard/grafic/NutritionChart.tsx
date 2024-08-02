import React from 'react';
import { Chart, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

Chart.register(ArcElement, Tooltip, Legend);

interface NutritionalValues {
  totalCalories: number;
  totalProtein: number;
  totalVitamins: number;
  totalCarbohydrates: number;
}

interface NutritionalChartProps {
  nutritionalValues: NutritionalValues;
}

const NutritionalChart: React.FC<NutritionalChartProps> = ({ nutritionalValues }) => {
  const data = {
    labels: [ 'Proteínas', 'Vitaminas', 'Carboidratos'],
    datasets: [
      {
        data: [
          nutritionalValues.totalProtein,
          nutritionalValues.totalVitamins,
          nutritionalValues.totalCarbohydrates
        ],
        backgroundColor: ['#36A2EB', '#FFCE56', '#4BC0C0'],
        borderColor: '#fff',
        borderWidth: 1,
      }
    ]
  };

  return (
    <div className="pizza-chart">
      <Doughnut data={data} />
    </div>
  );
};

export default NutritionalChart;
