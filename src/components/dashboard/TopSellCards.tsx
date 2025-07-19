import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import React from 'react';

interface TopSellCardsProps {
  mesMaiorVolume: string | null;
  idadeMedia: number | null;
  totalVendido: number | null;
}

export const TopSellCards: React.FC<TopSellCardsProps> = ({
  mesMaiorVolume,
  idadeMedia,
  totalVendido
}) => {

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <Card >
        <CardHeader className="pb-2">
          <CardTitle className="text-lg ">Mês com Maior Volume de Vendas</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-3xl font-bold text-card-content-purple mb-2 text-center capitalize">
            {mesMaiorVolume ? new Date(mesMaiorVolume).toLocaleDateString('pt-BR', { month: 'long' }) : 'Nenhum mês'}
          </div>
        </CardContent>
      </Card>
      <Card >
        <CardHeader className="pb-2">
          <CardTitle className="text-lg ">Idade Média dos Clientes (anos)</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-3xl font-bold text-card-content-blue mb-2 text-center">
            {idadeMedia ? idadeMedia.toFixed(0) : 'Nenhum cliente'}
          </div>
        </CardContent>
      </Card>
      <Card >
        <CardHeader className="pb-2">
          <CardTitle className="text-lg ">Total vendido até o momento</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-3xl font-bold text-card-content-green mb-2 text-center">
            {totalVendido ? totalVendido.toFixed(0) + ' R$' : '0 R$'}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}; 