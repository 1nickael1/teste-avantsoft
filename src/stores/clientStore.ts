import { create } from 'zustand';
import { clientService } from '../services/clientService';
import type { Cliente, ClienteFormData } from '../types';

interface ClientState {
  clientes: Cliente[];
  loading: boolean;
  error: string | null;
  fetchClientes: () => Promise<void>;
  createCliente: (clienteData: ClienteFormData) => Promise<Cliente>;
  updateCliente: (id: string, clienteData: ClienteFormData) => Promise<Cliente>;
  deleteCliente: (id: string) => Promise<void>;
  clearError: () => void;
}

export const useClientStore = create<ClientState>((set) => ({
  clientes: [],
  loading: false,
  error: null,

  fetchClientes: async () => {
    set({ loading: true, error: null });
    try {
      const data = await clientService.getClientes();
      set({ clientes: data, loading: false });
    } catch (err) {
      set({ 
        error: err instanceof Error ? err.message : 'Erro ao carregar clientes',
        loading: false 
      });
    }
  },

  createCliente: async (clienteData: ClienteFormData) => {
    set({ loading: true, error: null });
    try {
      const novoCliente = await clientService.createCliente(clienteData);
      set(state => ({
        clientes: [...state.clientes, novoCliente],
        loading: false
      }));
      return novoCliente;
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Erro ao criar cliente';
      set({ error: errorMessage, loading: false });
      throw err;
    }
  },

  updateCliente: async (id: string, clienteData: ClienteFormData) => {
    set({ loading: true, error: null });
    try {
      const clienteAtualizado = await clientService.updateCliente(id, clienteData);
      set(state => ({
        clientes: state.clientes.map(cliente => 
          cliente.id === id ? clienteAtualizado : cliente
        ),
        loading: false
      }));
      return clienteAtualizado;
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Erro ao atualizar cliente';
      set({ error: errorMessage, loading: false });
      throw err;
    }
  },

  deleteCliente: async (id: string) => {
    set({ loading: true, error: null });
    try {
      await clientService.deleteCliente(id);
      set(state => ({
        clientes: state.clientes.filter(cliente => cliente.id !== id),
        loading: false
      }));
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Erro ao excluir cliente';
      set({ error: errorMessage, loading: false });
      throw err;
    }
  },

  clearError: () => {
    set({ error: null });
  }
})); 