import React from 'react';
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Label,
} from 'recharts';
import './Chart.css';

const dataPie = [
  { name: 'Mobile Users', value: 80 },
  { name: 'Other', value: 20 },
];

const COLORS = ['#0088FE', '#FFBB28', '#FF8042'];

const dataBar = [
  { name: 'Vitaminas', value: 60 },
  { name: 'Proteínas', value: 30 },
  { name: 'Carboidratos', value: 10 },
];

const Chart: React.FC = () => {
  return (
    <div className="chart-container">
      <h3>Informações Nutricionais</h3>
      <div className="chart-content">
        <ResponsiveContainer width="50%" height={200}>
          <PieChart>
            <Pie
              data={dataPie}
              cx="25%"
              cy="50%"
              innerRadius={60}
              outerRadius={80}
              fill="#8884d8"
              paddingAngle={5}
              dataKey="value"
            >
              {dataPie.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
              <Label
                value={`${dataPie[0].value}%`}
                position="center"
                fill="#000"
                style={{ fontSize: '24px', fontWeight: 'bold' }}
              />
            </Pie>
          </PieChart>
          
        </ResponsiveContainer>
        <ResponsiveContainer width="50%" height={200}>
          <BarChart data={dataBar}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="value" fill="#8884d8">
              {dataBar.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Chart;
