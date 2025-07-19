# 🚀 Sistema de Gestão de Clientes

Um sistema web moderno para gerenciamento de clientes com dashboard interativo, desenvolvido com React, TypeScript e shadcn/ui.

## ✨ Características

- **🎨 Interface Moderna** - Design elegante com shadcn/ui e dark mode
- **📊 Dashboard Interativo** - Gráficos e estatísticas em tempo real
- **👥 Gestão de Clientes** - CRUD completo com validação
- **🔐 Autenticação** - Sistema de login com persistência de sessão
- **🌙 Dark Mode** - Alternância automática entre temas claro/escuro
- **📱 Totalmente Responsivo** - Interface adaptável para todos os dispositivos (mobile, tablet, desktop)
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
- **Tailwind CSS** - Framework CSS utility-first com responsividade
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

## 📱 Responsividade

O projeto foi desenvolvido com **Mobile-First** e é totalmente responsivo:

### 📱 Mobile (< 640px)
- **Menu hamburger** com navegação colapsável
- **Cards empilhados** em uma coluna
- **Tabelas com scroll horizontal**
- **Botões full-width** para melhor toque
- **Tipografia escalável** (text-xs → text-3xl)

### 📱 Tablet (640px - 1024px)
- **Grid 2x2** para cards de estatísticas
- **Navegação horizontal** visível
- **Tabelas com colunas condicionais**
- **Formulários otimizados** para toque

### 💻 Desktop (> 1024px)
- **Grid 3x1** para cards de estatísticas
- **Navegação completa** sempre visível
- **Tabelas com todas as colunas**
- **Layout otimizado** para mouse e teclado

### 🎯 Breakpoints Utilizados
- **sm**: 640px+ (tablets pequenos)
- **md**: 768px+ (tablets e desktops pequenos)
- **lg**: 1024px+ (desktops médios)
- **xl**: 1280px+ (desktops grandes)

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

### Responsividade Mobile
- **Layout** - Menu hamburger e navegação adaptativa
- **TopClientsCards** - Grid responsivo (1→2→3 colunas)
- **ClienteList** - Tabela com scroll e colunas condicionais
- **ClienteForm** - Botões empilhados no mobile
- **LoginForm** - Card compacto e otimizado

### Tailwind CSS
O projeto usa configuração customizada do Tailwind com:
- Cores personalizadas para cards
- Variáveis CSS para temas
- Animações suaves
- Responsividade completa com breakpoints

## 📈 Performance

- **Bundle Size**: ~670KB (gzipped)
- **First Load**: Otimizado com Vite
- **Hot Reload**: Desenvolvimento rápido
- **Tree Shaking**: Imports otimizados
- **Mobile Performance**: Otimizado para dispositivos móveis

## 👨‍💻 Desenvolvido por Nickael Vereza Bruzzi

Sistema desenvolvido com as melhores práticas de desenvolvimento web moderno, utilizando tecnologias atuais e componentes acessíveis. **Totalmente responsivo** para uma experiência perfeita em qualquer dispositivo.
