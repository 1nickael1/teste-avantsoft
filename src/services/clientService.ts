import type { ApiResponse, Cliente, ClienteFormData } from '../types';
import { normalizarDadosApi } from '../utils/dataNormalizer';

// Dados mockados para simular a API
const mockApiResponse: ApiResponse = {
  data: {
    clientes: [
      {
        info: {
          nomeCompleto: "Ana Beatriz",
          detalhes: {
            email: "ana.b@example.com",
            nascimento: "1992-05-01"
          }
        },
        estatisticas: {
          vendas: [
            { data: "2024-01-01", valor: 150 },
            { data: "2024-01-02", valor: 50 },
            { data: "2024-01-03", valor: 200 }
          ]
        }
      },
      {
        info: {
          nomeCompleto: "Carlos Eduardo",
          detalhes: {
            email: "cadu@example.com",
            nascimento: "1987-08-15"
          }
        },
        duplicado: {
          nomeCompleto: "Carlos Eduardo"
        },
        estatisticas: {
          vendas: [
            { data: "2024-01-01", valor: 300 },
            { data: "2024-01-02", valor: 100 }
          ]
        }
      },
      {
        info: {
          nomeCompleto: "Maria Silva",
          detalhes: {
            email: "maria@example.com",
            nascimento: "1995-12-10"
          }
        },
        estatisticas: {
          vendas: [
            { data: "2024-01-01", valor: 75 },
            { data: "2024-01-02", valor: 125 },
            { data: "2024-01-03", valor: 80 },
            { data: "2024-01-04", valor: 90 }
          ]
        }
      },
      {
        info: {
          nomeCompleto: "Eduardo Moreira Silva",
          detalhes: {
            email: "eduardo@example.com",
            nascimento: "1990-01-01"
          }
        },
        estatisticas: {
          vendas: [
            { data: "2024-01-01", valor: 10 },
            { data: "2024-01-02", valor: 10 },
            { data: "2024-01-03", valor: 10 },
            { data: "2024-01-04", valor: 10 }
          ]
        }
      }
    ]
  },
  meta: {
    registroTotal: 3,
    pagina: 1
  },
  redundante: {
    status: "ok"
  }
};

export const clientService = {
  async getClientes(): Promise<Cliente[]> {
    // Simular delay da API
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Em produção, seria uma chamada real para a API
    // const response = await api.get('/clientes');
    // return normalizarDadosApi(response.data);
    
    return normalizarDadosApi(mockApiResponse);
  },

  async createCliente(clienteData: ClienteFormData): Promise<Cliente> {
    // Simular criação
    await new Promise(resolve => setTimeout(resolve, 500));
    
    const novoCliente: Cliente = {
      id: Math.random().toString(36).substr(2, 9),
      nomeCompleto: clienteData.nomeCompleto,
      email: clienteData.email,
      dataNascimento: clienteData.dataNascimento,
      vendas: []
    };
    
    return novoCliente;
  },

  async updateCliente(id: string, clienteData: ClienteFormData): Promise<Cliente> {
    // Simular atualização
    await new Promise(resolve => setTimeout(resolve, 500));
    
    const clienteAtualizado: Cliente = {
      id,
      nomeCompleto: clienteData.nomeCompleto,
      email: clienteData.email,
      dataNascimento: clienteData.dataNascimento,
      vendas: []
    };
    
    return clienteAtualizado;
  },

  async deleteCliente(_id: string): Promise<void> {
    // Simular exclusão
    await new Promise(resolve => setTimeout(resolve, 500));
  }
}; 