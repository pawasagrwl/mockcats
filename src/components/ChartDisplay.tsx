import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { AnalysisSection } from '../types';
interface ChartDisplayProps {
  data: AnalysisSection;
}

const ChartDisplay: React.FC<ChartDisplayProps> = ({ data }) => {
  return (
    <BarChart width={600} height={300} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="score" fill="#8884d8" />
      <Bar dataKey="benchmarkScore" fill="#82ca9d" />
    </BarChart>
  );
};

export default ChartDisplay;
