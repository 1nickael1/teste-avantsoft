import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import type { Cliente } from '@/types';
import React from 'react';

interface TopClientsCardsProps {
  maiorVolume: Cliente | null;
  maiorMedia: Cliente | null;
  maiorFrequencia: Cliente | null;
}

export const TopClientsCards: React.FC<TopClientsCardsProps> = ({
  maiorVolume,
  maiorMedia,
  maiorFrequencia
}) => {
  const calcularTotalVendas = (vendas: Cliente['vendas']) => {
    return vendas.reduce((total, venda) => total + venda.valor, 0);
  };

  const calcularMediaVendas = (vendas: Cliente['vendas']) => {
    return vendas.length > 0 ? calcularTotalVendas(vendas) / vendas.length : 0;
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <Card >
        <CardHeader className="pb-2">
          <CardTitle className="text-lg ">Maior Volume de Vendas</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center">
            <div className="text-3xl font-bold text-card-content-blue mb-2">
              {maiorVolume ? `R$ ${calcularTotalVendas(maiorVolume.vendas).toFixed(2)}` : 'N/A'}
            </div>
            <div className="text-sm text-card-content-blue">
              {maiorVolume?.nomeCompleto || 'Nenhum cliente'}
            </div>
          </div>
        </CardContent>
      </Card>

      <Card >
        <CardHeader className="pb-2">
          <CardTitle className="text-lg ">Maior Média por Venda</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center">
            <div className="text-3xl font-bold text-card-content-green  mb-2">
              {maiorMedia ? `R$ ${calcularMediaVendas(maiorMedia.vendas).toFixed(2)}` : 'N/A'}
            </div>
            <div className="text-sm text-card-content-green">
              {maiorMedia?.nomeCompleto || 'Nenhum cliente'}
            </div>
          </div>
        </CardContent>
      </Card>

      <Card >
        <CardHeader className="pb-2">
          <CardTitle className="text-lg ">Maior Frequência</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center">
            <div className="text-3xl font-bold text-card-content-purple mb-2">
              {maiorFrequencia ? `${maiorFrequencia.vendas.length} compras` : 'N/A'}
            </div>
            <div className="text-sm text-card-content-purple">
              {maiorFrequencia?.nomeCompleto || 'Nenhum cliente'}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}; 