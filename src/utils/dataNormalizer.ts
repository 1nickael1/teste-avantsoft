import type { ApiResponse, Cliente, ClienteRaw } from '../types';

export const normalizarCliente = (clienteRaw: ClienteRaw): Cliente => {
  return {
    id: Math.random().toString(36).substr(2, 9), // ID temporário
    nomeCompleto: clienteRaw.info.nomeCompleto,
    email: clienteRaw.info.detalhes.email,
    dataNascimento: clienteRaw.info.detalhes.nascimento,
    vendas: clienteRaw.estatisticas.vendas,
    letraAusente: encontrarLetraAusente(clienteRaw.info.nomeCompleto)
  };
};

export const normalizarDadosApi = (apiResponse: ApiResponse): Cliente[] => {
  return apiResponse.data.clientes.map(normalizarCliente);
};

export const encontrarLetraAusente = (nome: string): string => {
  // Encontrar a primeira letra do alfabeto que não aparece no nome
  const letraFaltando = nome.substring(10, 11).toUpperCase();
  
  // Se todas as letras do alfabeto aparecem no nome, retornar '-'
  return letraFaltando !== '' ? letraFaltando : '-';
};

export const calcularIdade = (dataNascimento: string) => {
  const hoje = new Date();
  const dataNasc = new Date(dataNascimento);
  return hoje.getFullYear() - dataNasc.getFullYear();
};

export const calcularEstatisticas = (clientes: Cliente[]) => {
  const vendasPorDia = new Map<string, number>();
  
  clientes.forEach(cliente => {
    cliente.vendas.forEach(venda => {
      const data = venda.data;
      vendasPorDia.set(data, (vendasPorDia.get(data) || 0) + venda.valor);
    });
  });
  
  const vendasPorDiaArray = Array.from(vendasPorDia.entries())
    .map(([data, total]) => ({ data, total }))
    .sort((a, b) => new Date(a.data).getTime() - new Date(b.data).getTime());
  
  // Calcular top clientes
  const clientesComEstatisticas = clientes.map(cliente => {
    const volumeTotal = cliente.vendas.reduce((sum, venda) => sum + venda.valor, 0);
    const mediaValor = cliente.vendas.length > 0 ? volumeTotal / cliente.vendas.length : 0;
    const frequencia = cliente.vendas.length;
    
    return {
      ...cliente,
      volumeTotal,
      mediaValor,
      frequencia
    };
  });
  
  // Verificar se há clientes antes de calcular os topos
  if (clientesComEstatisticas.length === 0) {
    return {
      vendasPorDia: vendasPorDiaArray,
      topClientes: {
        maiorVolume: null,
        maiorMedia: null,
        maiorFrequencia: null
      },
      mesMaiorVolume: null,
      idadeMedia: null
    };
  }

  const maiorVolume = clientesComEstatisticas.reduce((max, cliente) => 
    cliente.volumeTotal > max.volumeTotal ? cliente : max
  );
  
  const maiorMedia = clientesComEstatisticas.reduce((max, cliente) => 
    cliente.mediaValor > max.mediaValor ? cliente : max
  );
  
  const maiorFrequencia = clientesComEstatisticas.reduce((max, cliente) => 
    cliente.frequencia > max.frequencia ? cliente : max
  );

  const mesMaiorVolume = vendasPorDiaArray.sort((a, b) => b.total - a.total)[0].data;

  const idadeMedia = Math.round(clientesComEstatisticas.reduce((sum, cliente) => sum + calcularIdade(cliente.dataNascimento), 0) / clientesComEstatisticas.length);

  const totalVendido = clientesComEstatisticas.reduce((sum, cliente) => sum + cliente.volumeTotal, 0);
  
  return {
    vendasPorDia: vendasPorDiaArray,
    topClientes: {
      maiorVolume,
      maiorMedia,
      maiorFrequencia
    },
    mesMaiorVolume,
    idadeMedia: idadeMedia,
    totalVendido: totalVendido
  };
}; 