export interface Venda {
  data: string;
  valor: number;
}

export interface Cliente {
  id: string;
  nomeCompleto: string;
  email: string;
  dataNascimento: string;
  vendas: Venda[];
  letraAusente?: string;
}

// Tipos para dados brutos da API
export interface ClienteRaw {
  info: {
    nomeCompleto: string;
    detalhes: {
      email: string;
      nascimento: string;
    };
  };
  estatisticas: {
    vendas: Venda[];
  };
  duplicado?: {
    nomeCompleto: string;
  };
}

export interface ApiResponse {
  data: {
    clientes: ClienteRaw[];
  };
  meta: {
    registroTotal: number;
    pagina: number;
  };
  redundante?: {
    status: string;
  };
}

export interface User {
  id: string;
  email: string;
  name: string;
}

export interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  isAuthenticated: boolean;
}

export interface ClienteFormData {
  nomeCompleto: string;
  email: string;
  dataNascimento: string;
}

export interface StatisticsData {
  vendasPorDia: Array<{
    data: string;
    total: number;
  }>;
  topClientes: {
    maiorVolume: Cliente | null;
    maiorMedia: Cliente | null;
    maiorFrequencia: Cliente | null;
  };
} 