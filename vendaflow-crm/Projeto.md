# 🌳 Estrutura do Projeto VendaFlow CRM

## 📁 Organização de Diretórios

```
vendaflow-crm/
│
├── 📁 frontend/                    ← APLICAÇÃO REACT
│   │
│   ├── 📁 public/                  ← Arquivos estáticos (não processados pelo Webpack)
│   │   ├── favicon.ico
│   │   ├── logo.svg
│   │   ├── logo192.png            ← Ícone PWA 192x192
│   │   ├── logo512.png            ← Ícone PWA 512x512
│   │   ├── manifest.json          ← Configuração PWA ✨
│   │   └── index.html             ← HTML principal ✨
│   │
│   ├── 📁 src/
│   │   │
│   │   ├── 📁 components/
│   │   │   │
│   │   │   ├── 📁 layout/
│   │   │   │   ├── MainLayout.tsx
│   │   │   │   ├── Sidebar.tsx
│   │   │   │   └── Header.tsx
│   │   │   │
│   │   │   ├── 📁 ui/
│   │   │   │   ├── Button.tsx
│   │   │   │   ├── Card.tsx
│   │   │   │   ├── Input.tsx
│   │   │   │   ├── Modal.tsx
│   │   │   │   ├── Badge.tsx
│   │   │   │   ├── ScrollArea.tsx
│   │   │   │   ├── Separator.tsx
│   │   │   │   ├── Select.tsx
│   │   │   │   ├── Textarea.tsx
│   │   │   │   ├── Table.tsx
│   │   │   │   └── Tabs.tsx
│   │   │   │
│   │   │   ├── 📁 dashboard/
│   │   │   │   ├── StatCard.tsx
│   │   │   │   ├── RecentDeals.tsx
│   │   │   │   └── UpcomingTasks.tsx
│   │   │   │
│   │   │   ├── 📁 kanban/
│   │   │   │   ├── KanbanBoard.tsx
│   │   │   │   ├── KanbanColumn.tsx
│   │   │   │   └── DealCard.tsx
│   │   │   │
│   │   │   ├── 📁 forms/
│   │   │   │   ├── ProspectionForm.tsx
│   │   │   │   ├── DealForm.tsx
│   │   │   │   ├── CompanyForm.tsx
│   │   │   │   └── TaskForm.tsx
│   │   │   │
│   │   │   └── 📁 tables/
│   │   │       ├── ProspectionTable.tsx
│   │   │       ├── CompanyTable.tsx
│   │   │       └── TaskTable.tsx
│   │   │
│   │   ├── 📁 pages/
│   │   │   ├── LoginPage.tsx
│   │   │   ├── RegisterPage.tsx
│   │   │   ├── HomePage.tsx
│   │   │   ├── ProspectionPage.tsx
│   │   │   ├── DealsPage.tsx
│   │   │   ├── CompaniesPage.tsx
│   │   │   ├── CustomersPage.tsx
│   │   │   ├── TasksPage.tsx
│   │   │   ├── ReportsPage.tsx
│   │   │   ├── DocumentationPage.tsx
│   │   │   └── NotFoundPage.tsx
│   │   │
│   │   ├── 📁 services/
│   │   │   └── api.ts              ← Comunicação com backend
│   │   │
│   │   ├── 📁 styles/
│   │   │   └── main.css            ← ✨ ARQUIVO CSS ÚNICO
│   │   │
│   │   ├── 📁 hooks/
│   │   │   ├── useAuth.ts
│   │   │   ├── useLocalStorage.ts
│   │   │   └── useMediaQuery.ts
│   │   │
│   │   ├── 📁 utils/
│   │   │   ├── formatters.ts
│   │   │   ├── validators.ts
│   │   │   └── exporters.ts
│   │   │
│   │   ├── 📁 types/
│   │   │   ├── index.ts
│   │   │   ├── Deal.ts
│   │   │   ├── Company.ts
│   │   │   ├── Customer.ts
│   │   │   ├── Task.ts
│   │   │   └── User.ts
│   │   │
│   │   ├── 📁 context/
│   │   │   └── AuthContext.tsx
│   │   │
│   │   ├── App.tsx
│   │   └── index.tsx
│   │
│   ├── package.json
│   ├── tsconfig.json
│   ├── .gitignore
│   └── README.md
│
└── 📁 backend/                     ← API PHP + MySQL (cPanel)
    │
    ├── 📁 api/
    │   │
    │   ├── 📁 config/
    │   │   ├── database.php        ← Conexão MySQL
    │   │   └── cors.php            ← Headers CORS
    │   │
    │   ├── 📁 models/
    │   │   ├── User.php
    │   │   ├── Prospection.php
    │   │   ├── Deal.php
    │   │   ├── Company.php
    │   │   ├── Customer.php
    │   │   └── Task.php
    │   │
    │   ├── 📁 controllers/
    │   │   ├── AuthController.php
    │   │   ├── ProspectionController.php
    │   │   ├── DealController.php
    │   │   ├── CompanyController.php
    │   │   ├── CustomerController.php
    │   │   ├── TaskController.php
    │   │   └── ReportController.php
    │   │
    │   ├── 📁 middleware/
    │   │   └── AuthMiddleware.php
    │   │
    │   ├── 📁 utils/
    │   │   ├── Response.php
    │   │   └── Validator.php
    │   │
    │   └── index.php               ← Router principal
    │
    ├── 📁 sql/
    │   ├── database.sql            ← Schema completo
    │   └── seed.sql                ← Dados de exemplo
    │
    ├── .htaccess                   ← Configuração Apache
    └── README.md
```

## 📋 Descrição dos Módulos Principais

### 🖥️ BACKEND (PHP + MySQL)

**Hospedagem**: cPanel - https://sales.unocreative.com.br/

**Banco de Dados MySQL**:
- **Host**: localhost
- **Database**: `alph7749_sales`
- **User**: `alph7749_mast5755`
- **Password**: `AlSys25a5426#`
- **Acesso**: phpMyAdmin via cPanel

**Estrutura da API REST**:
- Autenticação JWT
- CRUD completo para todas as entidades
- Rotas RESTful organizadas
- Validação de dados
- Tratamento de erros
- CORS configurado para frontend

**Endpoints principais**:
```
POST   /api/auth/login           - Login
POST   /api/auth/register        - Registro
GET    /api/auth/me              - Usuário logado

GET    /api/prospections         - Listar prospecções
POST   /api/prospections         - Criar prospecção
PUT    /api/prospections/:id     - Atualizar prospecção
DELETE /api/prospections/:id     - Deletar prospecção
POST   /api/prospections/:id/convert - Converter para negociação

GET    /api/deals                - Listar negociações
POST   /api/deals                - Criar negociação
PUT    /api/deals/:id            - Atualizar negociação
PUT    /api/deals/:id/stage      - Mover entre etapas
DELETE /api/deals/:id            - Deletar negociação
POST   /api/deals/:id/convert    - Converter para cliente

GET    /api/companies            - Listar empresas
POST   /api/companies            - Criar empresa
PUT    /api/companies/:id        - Atualizar empresa
DELETE /api/companies/:id        - Deletar empresa

GET    /api/customers            - Listar clientes
POST   /api/customers            - Criar cliente
PUT    /api/customers/:id        - Atualizar cliente
PUT    /api/customers/:id/status - Mudar status (Ativo/Passivo/Negativo)
DELETE /api/customers/:id        - Deletar cliente

GET    /api/tasks                - Listar tarefas
POST   /api/tasks                - Criar tarefa
PUT    /api/tasks/:id            - Atualizar tarefa
PUT    /api/tasks/:id/complete   - Marcar como concluída
DELETE /api/tasks/:id            - Deletar tarefa

GET    /api/reports/dashboard    - Dados do dashboard
GET    /api/reports/export       - Exportar relatórios
```

### 🗄️ FRONTEND (React + TypeScript)

### 🔐 Autenticação
- **LoginPage**: Tela de login com email/senha
- **RegisterPage**: Tela de cadastro de nova conta

### 🏠 Dashboard (HomePage)
- KPIs principais do funil de vendas
- Negociações recentes
- Próximas tarefas
- Gráficos de performance

### 🗺️ Prospecção (ProspectionPage)
- Cadastro rápido de empresas em campo
- Tabela com lista de empresas prospectadas
- Filtros por cidade/status
- Exportar para Negociações

### 🤝 Negociações (DealsPage)
- Kanban com 5 colunas (Contato Inicial → Fechado/Perdido)
- Drag & drop entre colunas
- Modal com detalhes completos
- Converter para Cliente

### 🏢 Empresas (CompaniesPage)
- CRUD completo de empresas
- Dados detalhados (CNPJ, contatos, endereço)
- Vincular a negociações

### 👥 Clientes (CustomersPage)
- 3 categorias: Ativo / Passivo / Negativo
- Tabs para navegação entre categorias
- Migração entre status
- Histórico de interações

### ✅ Tarefas (TasksPage)
- Criar/editar/concluir tarefas
- Prioridades (Alta/Média/Baixa)
- Vincular a negociações ou clientes
- Filtros por status e data

### 📊 Relatórios (ReportsPage)
- Resumo de métricas gerais
- Exportar PDF ou Excel
- Filtros por período
- Gráficos de conversão

### 📖 Documentação (DocumentationPage)
- Guia completo do sistema
- Descrição de todas as funcionalidades
- Fluxo de trabalho recomendado

## 🎨 Arquivo CSS Único

O projeto utilizará **um único arquivo CSS** (`src/styles/main.css`) organizado em seções:

### Estrutura do main.css:
```css
/* ========================================
   VENDAFLOW CRM - ESTILOS GLOBAIS
   ======================================== */

/* 1. Variáveis CSS (cores, tamanhos, etc) */
/* 2. Reset e estilos base */
/* 3. Layout (Sidebar, Header, MainLayout) */
/* 4. Componentes UI (Button, Card, Input, etc) */
/* 5. Dashboard (StatCard, RecentDeals, etc) */
/* 6. Kanban (Board, Columns, Cards) */
/* 7. Forms (todos os formulários) */
/* 8. Tables (todas as tabelas) */
/* 9. Pages (estilos específicos de páginas) */
/* 10. Responsividade (Media Queries) */
/* 11. Utilidades (classes auxiliares) */
```

### Vantagens do CSS único:
- ✅ Mais fácil de manter
- ✅ Menos requisições HTTP
- ✅ Melhor performance
- ✅ Organização clara por seções
- ✅ Reutilização de estilos
- ✅ Variáveis CSS compartilhadas

## 🎨 Design System

### Cores Principais
- **Primary**: Azul/Turquesa (#0ea5e9)
- **Success**: Verde (#10b981)
- **Warning**: Laranja (#f59e0b)
- **Danger**: Vermelho (#ef4444)
- **Muted**: Cinza claro (#f1f5f9)

### Responsividade
- **Mobile**: < 768px (menu compacto, cards empilhados)
- **Tablet**: 768px - 1024px (layout intermediário)
- **Desktop**: > 1024px (layout completo)

## 🛠️ Tecnologias

### Frontend
- **React** 18+ com TypeScript
- **Lucide React** para ícones
- **Axios** para requisições HTTP
- **React Router** para navegação
- **CSS3** com variáveis customizadas

### Backend
- **PHP** 7.4+ (compatível com cPanel)
- **MySQL** 5.7+
- **JWT** para autenticação
- **RESTful API** architecture
- **Apache** com .htaccess

### Infraestrutura
- **Hosting**: cPanel (https://sales.unocreative.com.br/)
- **Database**: MySQL via phpMyAdmin
- **Deploy**: Frontend build para cPanel public_html

## 📱 Recursos Mobile

- Menu lateral retrátil
- Touch gestures
- Cards otimizados para toque
- Formulários adaptados
- Tabelas com scroll horizontal
- Botões de ação flutuantes (FAB)

## 🔄 Fluxo de Dados

1. **Prospecção** → coleta rápida → API salva no MySQL
2. **Negociações** → gestão no Kanban → API atualiza status
3. **Clientes** → pós-venda → API gerencia categorias
4. **Relatórios** → análise de resultados → API gera estatísticas

## 🚀 Deploy e Instalação

### Backend (cPanel)
1. Fazer upload da pasta `backend/` via FTP ou File Manager
2. Importar `sql/database.sql` no phpMyAdmin
3. Configurar credenciais em `config/database.php`
4. Configurar `.htaccess` para rotas limpas
5. Testar endpoints: `https://sales.unocreative.com.br/api/`

### Frontend (Build React)
1. Rodar `npm run build` localmente
2. Fazer upload do conteúdo de `build/` para `public_html/`
3. Configurar `.htaccess` para SPA routing
4. Apontar API_URL para `https://sales.unocreative.com.br/api/`

### Estrutura no cPanel:
```
public_html/
├── api/                    ← Backend PHP
│   ├── config/
│   ├── controllers/
│   ├── models/
│   └── index.php
├── index.html              ← Frontend React (build)
├── static/
│   ├── css/
│   └── js/
└── .htaccess
```

---

## 📝 Próximos Passos

Após aprovação desta estrutura, vou gerar:

### Frontend
1. ✅ Todos os componentes de UI base
2. ✅ Todas as páginas principais
3. ✅ Service de integração com API
4. ✅ Estilos CSS responsivos únicos

### Backend
5. ✅ Estrutura completa da API PHP
6. ✅ Models para todas as entidades
7. ✅ Controllers com todas as rotas
8. ✅ Schema SQL completo com relacionamentos
9. ✅ Autenticação JWT
10. ✅ Arquivo de configuração do banco

### Deploy
11. ✅ Scripts de instalação
12. ✅ Documentação de deploy no cPanel
13. ✅ Configuração de .htaccess
14. ✅ README completo com instruções

**Total de arquivos**: 
- Frontend: ~35 arquivos TypeScript + 1 CSS único
- Backend: ~20 arquivos PHP + 2 SQL
- **Total geral**: ~58 arquivos