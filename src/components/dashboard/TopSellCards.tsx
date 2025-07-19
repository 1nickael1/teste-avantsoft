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
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-base sm:text-lg">Mês com Maior Volume de Vendas</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl sm:text-3xl font-bold text-card-content-purple mb-2 text-center capitalize">
            {mesMaiorVolume ? new Date(mesMaiorVolume).toLocaleDateString('pt-BR', { month: 'long' }) : 'Nenhum mês'}
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-base sm:text-lg">Idade Média dos Clientes (anos)</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl sm:text-3xl font-bold text-card-content-blue mb-2 text-center">
            {idadeMedia ? idadeMedia.toFixed(0) : 'Nenhum cliente'}
          </div>
        </CardContent>
      </Card>
      <Card className="sm:col-span-2 lg:col-span-1">
        <CardHeader className="pb-2">
          <CardTitle className="text-base sm:text-lg">Total vendido até o momento</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl sm:text-3xl font-bold text-card-content-green mb-2 text-center">
            {totalVendido ? totalVendido.toFixed(0) + ' R$' : '0 R$'}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}; 