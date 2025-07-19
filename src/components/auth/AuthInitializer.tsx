import React, { useEffect } from 'react';
import { useAuthStore } from '../../stores/authStore';

interface AuthInitializerProps {
  children: React.ReactNode;
}

export const AuthInitializer: React.FC<AuthInitializerProps> = ({ children }) => {
  const { initializeAuth } = useAuthStore();

  useEffect(() => {
    // Inicializa a autenticação ao carregar a aplicação
    initializeAuth();
  }, [initializeAuth]);

  return <>{children}</>;
}; 