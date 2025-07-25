import { SalesChart } from '@/components/dashboard/SalesChart';
import { TopClientsCards } from '@/components/dashboard/TopClientsCards';
import { TopSellCards } from '@/components/dashboard/TopSellCards';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useClientStore } from '@/stores/clientStore';
import { calcularEstatisticas } from '@/utils/dataNormalizer';
import React, { useEffect } from 'react';

export const DashboardPage: React.FC = () => {
  const { clientes, loading, error, fetchClientes } = useClientStore();

  useEffect(() => {
    fetchClientes();
  }, [fetchClientes]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="text-muted-foreground">Carregando dashboard...</div>
      </div>
    );
  }

  if (!clientes || clientes.length === 0) {
    return (
      <div className="text-center py-8">
        <div className="text-muted-foreground">Nenhum cliente encontrado.</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-8">
        <div className="text-destructive">Erro ao carregar dados: {error}</div>
      </div>
    );
  }

  const estatisticas = calcularEstatisticas(clientes);

  return (
    <div className="space-y-4 sm:space-y-6">
      <div>
        <h1 className="text-xl sm:text-2xl font-bold text-foreground mb-1 sm:mb-2">Dashboard</h1>
        <p className="text-sm sm:text-base text-muted-foreground">Visão geral das vendas e clientes</p>
      </div>

      <TopClientsCards
        maiorVolume={estatisticas.topClientes.maiorVolume}
        maiorMedia={estatisticas.topClientes.maiorMedia}
        maiorFrequencia={estatisticas.topClientes.maiorFrequencia}
      />

      <Card>
        <CardHeader>
          <CardTitle className="text-lg sm:text-xl">Vendas por Dia</CardTitle>
        </CardHeader>
        <CardContent className="p-4 sm:p-6">
          <div className="h-64 sm:h-80">
            <SalesChart data={estatisticas.vendasPorDia} />
          </div>
        </CardContent>
      </Card>

      <TopSellCards 
        mesMaiorVolume={estatisticas.mesMaiorVolume || null} 
        idadeMedia={estatisticas.idadeMedia || null} 
        totalVendido={estatisticas.totalVendido || null} 
      />
    </div>
  );
}; 