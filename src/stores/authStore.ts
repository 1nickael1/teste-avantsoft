import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { User } from '../types';

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  initializeAuth: () => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set, get) => ({
      user: null,
      isAuthenticated: false,

      login: async (email: string, password: string) => {
        // Simulação de login - em produção seria uma chamada para API
        if (email === 'admin@teste.com' && password === '123456') {
          const userData: User = {
            id: '1',
            email: email,
            name: 'Administrador'
          };
          
          set({
            user: userData,
            isAuthenticated: true
          });
        } else {
          throw new Error('Credenciais inválidas');
        }
      },

      logout: () => {
        set({
          user: null,
          isAuthenticated: false
        });
      },

      initializeAuth: () => {
        // Esta função pode ser usada para verificar se há uma sessão válida
        // Por exemplo, validar um token JWT no localStorage
        const state = get();
        if (state.user) {
          set({ isAuthenticated: true });
        }
      }
    }),
    {
      name: 'auth-storage', // nome da chave no localStorage
      partialize: (state) => ({ 
        user: state.user,
        isAuthenticated: state.isAuthenticated 
      }),
    }
  )
); 