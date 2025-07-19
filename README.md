# 🚀 Sistema de Gestão de Clientes

Um sistema web moderno para gerenciamento de clientes com dashboard interativo, desenvolvido com React, TypeScript e shadcn/ui.

## ✨ Características

- **🎨 Interface Moderna** - Design elegante com shadcn/ui e dark mode
- **📊 Dashboard Interativo** - Gráficos e estatísticas em tempo real
- **👥 Gestão de Clientes** - CRUD completo com validação
- **🔐 Autenticação** - Sistema de login com persistência de sessão
- **🌙 Dark Mode** - Alternância automática entre temas claro/escuro
- **📱 Responsivo** - Interface adaptável para todos os dispositivos
- **⚡ Performance** - Otimizado com Vite e React 18

## 🛠️ Tecnologias

### Frontend
- **React 18** - Biblioteca para interfaces de usuário
- **TypeScript** - Tipagem estática para JavaScript
- **Vite** - Build tool e dev server ultra-rápido
- **React Router** - Roteamento client-side
- **Zustand** - Gerenciamento de estado simples e eficiente

### UI/UX
- **shadcn/ui** - Componentes acessíveis e customizáveis
- **Tailwind CSS** - Framework CSS utility-first
- **Lucide React** - Ícones modernos e consistentes
- **Recharts** - Biblioteca de gráficos para React

### Desenvolvimento
- **ESLint** - Linting de código
- **PostCSS** - Processamento de CSS
- **Autoprefixer** - Prefixos CSS automáticos

## 🚀 Como Executar

### Pré-requisitos
- Node.js 18+ 
- npm ou yarn

### Instalação
```bash
# Clone o repositório
git clone https://github.com/1nickael1/teste-avantsoft.git
cd teste-avantsoft

# Instale as dependências
npm install

# Execute em modo desenvolvimento
npm run dev
```

### Build para Produção
```bash
npm run build
```

## 📁 Estrutura do Projeto

```
src/
├── components/          # Componentes reutilizáveis
│   ├── auth/           # Componentes de autenticação
│   ├── clients/        # Componentes de clientes
│   ├── dashboard/      # Componentes do dashboard
│   └── ui/             # Componentes base (shadcn/ui)
├── hooks/              # Custom hooks
├── lib/                # Utilitários e configurações
├── pages/              # Páginas da aplicação
├── services/           # Serviços de API
├── stores/             # Stores Zustand
├── types/              # Definições TypeScript
└── utils/              # Funções utilitárias
```

## 🔐 Autenticação

### Credenciais de Teste
- **Email**: `admin@teste.com`
- **Senha**: `123456`

## 🎨 Temas

O sistema suporta três modos de tema:
- **Claro** - Interface com fundo claro
- **Escuro** - Interface com fundo escuro  
- **Sistema** - Segue a preferência do sistema operacional

## 📊 Funcionalidades

### Dashboard
- **Estatísticas Gerais** - Visão geral das vendas
- **Top Clientes** - Maior volume, média e frequência
- **Gráfico de Vendas** - Vendas por dia
- **Métricas Avançadas** - Idade média e mês de maior volume

### Gestão de Clientes
- **Listagem** - Tabela com todos os clientes
- **Criação** - Formulário para adicionar clientes
- **Edição** - Modificação de dados existentes
- **Exclusão** - Remoção com confirmação modal
- **Validação** - Campos obrigatórios e formatos

### Recursos Especiais
- **Letra Ausente** - Algoritmo para encontrar primeira letra do alfabeto ausente no nome
- **Estatísticas Avançadas** - Cálculos automáticos de métricas
- **Persistência** - Dados mantidos entre sessões

## 🎯 Componentes Principais

### UI Components (shadcn/ui)
- `Button` - Botões com variantes
- `Card` - Cards com header e content
- `Input` - Campos de entrada
- `Table` - Tabelas responsivas
- `Alert` - Alertas e notificações
- `Dialog` - Modais e diálogos
- `Badge` - Tags e indicadores
- `DropdownMenu` - Menus dropdown

### Custom Components
- `ThemeToggle` - Alternância de tema
- `ConfirmDialog` - Diálogos de confirmação
- `TopClientsCards` - Cards de top clientes
- `SalesChart` - Gráfico de vendas

### Tailwind CSS
O projeto usa configuração customizada do Tailwind com:
- Cores personalizadas para cards
- Variáveis CSS para temas
- Animações suaves
- Responsividade completa

## 📈 Performance

- **Bundle Size**: ~670KB (gzipped)
- **First Load**: Otimizado com Vite
- **Hot Reload**: Desenvolvimento rápido
- **Tree Shaking**: Imports otimizados


## 👨‍💻 Desenvolvido por Nickael Vereza Bruzzi

Sistema desenvolvido com as melhores práticas de desenvolvimento web moderno, utilizando tecnologias atuais e componentes acessíveis.
