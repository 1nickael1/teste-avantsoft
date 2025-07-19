import React from 'react';
import { CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

interface SalesChartProps {
  data: Array<{
    data: string;
    total: number;
  }>;
}

export const SalesChart: React.FC<SalesChartProps> = ({ data }) => {
  const formatarData = (data: string) => {
    return new Date(data).toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: '2-digit'
    });
  };

  const formatarValor = (value: number) => {
    return `R$ ${value.toFixed(2)}`;
  };

  return (
    <div className="h-80">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis 
            dataKey="data" 
            tickFormatter={formatarData}
            tick={{ fontSize: 12 }}
          />
          <YAxis 
            tickFormatter={formatarValor}
            tick={{ fontSize: 12 }}
          />
          <Tooltip 
            labelStyle={{ color: 'black' }}
            labelFormatter={formatarData}
            formatter={(value: number) => [formatarValor(value), 'Total de Vendas']}
          />
          <Line 
            type="monotone" 
            dataKey="total" 
            stroke="#3B82F6" 
            strokeWidth={2}
            dot={{ fill: '#3B82F6', strokeWidth: 2, r: 4 }}
            activeDot={{ r: 6 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}; 