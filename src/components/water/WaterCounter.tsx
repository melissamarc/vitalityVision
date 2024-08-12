import React, { useState } from 'react';
import { FaTint } from 'react-icons/fa';
import './WaterCounter.css';

const WaterCounter: React.FC = () => {
  const [waterConsumed, setWaterConsumed] = useState(0);
  const [glasses, setGlasses] = useState<boolean[]>(Array(10).fill(false));

  const handleGlassClick = (index: number) => {
    const updatedGlasses = [...glasses];
    updatedGlasses[index] = !updatedGlasses[index];

    setGlasses(updatedGlasses);
    setWaterConsumed(waterConsumed + (updatedGlasses[index] ? 200 : -200));
  };

  return (
    <div className="water-counter">
      <div className="text-water"> 
       <p>Água Consumida: </p>
       <p>  {waterConsumed} ml</p>
      </div>
     

      <div className="water-glasses">
        <div className="water-row">
          {glasses.slice(0, 5).map((filled, index) => (
            <div
              key={index}
              onClick={() => handleGlassClick(index)}
              className={`water-glass ${filled ? 'filled' : 'empty'}`}
            >
              <FaTint />
            </div>
          ))}
        </div>
        <div className="water-row">
          {glasses.slice(5, 10).map((filled, index) => (
            <div
              key={index + 5}
              onClick={() => handleGlassClick(index + 5)}
              className={`water-glass ${filled ? 'filled' : 'empty'}`}
            >
              <FaTint />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WaterCounter;
