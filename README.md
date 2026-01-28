# 🚀 VendaFlow CRM

Sistema completo de gerenciamento de vendas e relacionamento com clientes desenvolvido em React + TypeScript.

![VendaFlow](https://img.shields.io/badge/version-1.0.0-blue.svg)
![React](https://img.shields.io/badge/react-18.2.0-61dafb.svg)
![TypeScript](https://img.shields.io/badge/typescript-5.3.3-blue.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)

## ✨ Características

- 📊 **Dashboard** completo com KPIs e métricas
- 🗺️ **Prospecção** rápida de empresas em campo
- 🤝 **Kanban** de negociações com drag & drop
- 🏢 **Gestão de Empresas** com CRUD completo
- 👥 **Clientes** organizados por categoria (Ativo/Passivo/Negativo)
- ✅ **Tarefas** com prioridades e vinculação
- 📈 **Relatórios** exportáveis em PDF/Excel
- 📱 **100% Responsivo** - Mobile, Tablet e Desktop
- 🎨 **UI Moderna** baseada no template Denovers

## 🛠️ Tecnologias

### Frontend
- **React** 18.2 com TypeScript
- **Vite** para build rápido
- **React Router** para navegação
- **Axios** para requisições HTTP
- **Lucide React** para ícones
- **CSS3** com variáveis customizadas

### Backend (API)
- **PHP** 7.4+
- **MySQL** com phpMyAdmin
- **JWT** para autenticação
- **RESTful API** architecture

## 📦 Instalação

### Pré-requisitos
- Node.js 16+ e npm 8+
- Git

### Passo a Passo

1. **Clone o repositório**
```bash
git clone https://github.com/seu-usuario/vendaflow-crm.git
cd vendaflow-crm/frontend
```

2. **Instale as dependências**
```bash
npm install
```

3. **Configure as variáveis de ambiente**
```bash
# Crie um arquivo .env na raiz do projeto
echo "VITE_API_URL=https://sales.unocreative.com.br/api" > .env
```

4. **Execute em modo desenvolvimento**
```bash
npm run dev
```

O aplicativo estará rodando em `http://localhost:3000`

## 🚀 Scripts Disponíveis

```bash
# Desenvolvimento
npm run dev          # Inicia servidor de desenvolvimento

# Build
npm run build        # Compila para produção
npm run preview      # Preview do build de produção

# Verificação
npm run lint         # Verifica erros de código
npm run type-check   # Verifica tipos TypeScript
```

## 📱 Acesso via Celular/Tablet

O servidor de desenvolvimento está configurado para aceitar conexões da rede local:

1. Execute `npm run dev`
2. Anote o IP local exibido (ex: `http://192.168.1.100:3000`)
3. Acesse este IP no seu celular/tablet na mesma rede Wi-Fi

## 📂 Estrutura de Pastas

```
frontend/
├── public/              # Arquivos estáticos
│   ├── index.html      # HTML principal
│   ├── manifest.json   # Configuração PWA
│   └── ...
├── src/
│   ├── components/     # Componentes reutilizáveis
│   │   ├── layout/    # Layout (Sidebar, Header)
│   │   ├── ui/        # Componentes UI base
│   │   ├── dashboard/ # Componentes do dashboard
│   │   ├── kanban/    # Componentes do Kanban
│   │   ├── forms/     # Formulários
│   │   └── tables/    # Tabelas
│   ├── pages/         # Páginas da aplicação
│   ├── context/       # Context API (Auth, etc)
│   ├── hooks/         # Custom hooks
│   ├── services/      # API services
│   ├── utils/         # Funções utilitárias
│   ├── types/         # TypeScript types
│   ├── styles/        # Estilos globais
│   │   └── main.css   # CSS único
│   ├── App.tsx        # Componente principal
│   └── index.tsx      # Entry point
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

## 🔐 Autenticação

O sistema utiliza JWT (JSON Web Tokens) para autenticação:

1. Faça login em `/login`
2. O token é armazenado no `localStorage`
3. Todas as requisições incluem o token no header `Authorization`

Para logout, basta remover o token:
```javascript
localStorage.removeItem('vendaflow_token');
```

## 🌐 Deploy

### Build para Produção

```bash
npm run build
```

Os arquivos otimizados estarão na pasta `dist/`

### Deploy no cPanel

1. Execute `npm run build`
2. Faça upload do conteúdo de `dist/` para `public_html/` via FTP
3. Configure `.htaccess` para SPA routing:

```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

## 📖 Documentação

Acesse `/documentation` dentro do sistema para ver o guia completo de uso.

## 🤝 Contribuindo

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/NovaFeature`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova feature'`)
4. Push para a branch (`git push origin feature/NovaFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 👥 Autores

- **VendaFlow Team** - *Desenvolvimento inicial*

## 📞 Suporte

Para suporte, envie um email para suporte@vendaflow.com ou abra uma issue no GitHub.

---

Desenvolvido com ❤️ pela equipe VendaFlow
