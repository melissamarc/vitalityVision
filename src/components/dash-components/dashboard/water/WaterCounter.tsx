import React, { useState } from 'react';
import { FaTint } from 'react-icons/fa'; // Exemplo de ícone de copo

const WaterCounter: React.FC = () => {
  // Estado para armazenar a quantidade de água bebida
  const [waterConsumed, setWaterConsumed] = useState(0);
  // Estado para armazenar os copos clicados
  const [glasses, setGlasses] = useState<boolean[]>(Array(10).fill(false));

  // Função para lidar com o clique em um copo
  const handleGlassClick = (index: number) => {
    const updatedGlasses = [...glasses];
    updatedGlasses[index] = !updatedGlasses[index]; // Alterna o estado do copo

    setGlasses(updatedGlasses);
    // Atualiza a quantidade de água bebida
    setWaterConsumed(waterConsumed + (updatedGlasses[index] ? 200 : -200));
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <h2>Água Bebida: {waterConsumed} ml</h2>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
        {glasses.map((filled, index) => (
          <div
            key={index}
            onClick={() => handleGlassClick(index)}
            style={{
              cursor: 'pointer',
              color: filled ? '#00f' : '#aaa', // Azul quando preenchido, cinza quando vazio
              fontSize: '2rem',
            }}
          >
            <FaTint />
          </div>
        ))}
      </div>
    </div>
  );
};

export default WaterCounter;
