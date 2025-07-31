# 🌌 Portfólio Luís Henrique - Desenvolvedor Full-Stack

Um portfólio web moderno e responsivo desenvolvido com React, TypeScript, Vite e Styled-components, apresentando um design cósmico suave com animações fluidas e interações envolventes.

## ✨ Características

### 🎨 Design & UX
- **Tema Cósmico Suave**: Gradientes profundos com efeitos de estrelas cintilantes
- **Animações Fluidas**: Powered by Framer Motion para transições suaves
- **Design Responsivo**: Otimizado para desktop, tablet e mobile
- **Efeitos Neon**: Bordas e textos com brilho característico
- **Navegação Suave**: Scroll suave entre seções com indicadores ativos

### 🚀 Funcionalidades
- **Header Fixo**: Navegação sempre acessível com indicadores de seção ativa
- **Hero Section**: Efeito de digitação no nome e botões interativos
- **Seção Sobre**: Estatísticas, habilidades e informações pessoais
- **Portfólio de Projetos**: Sistema de filtros e modal de detalhes
- **Formulário de Contato**: Validação completa e feedback visual
- **Footer Completo**: Links organizados e botão "voltar ao topo"

### 💻 Tecnologias Utilizadas
- **React 18** - Biblioteca para interfaces de usuário
- **TypeScript** - Tipagem estática para JavaScript
- **Vite** - Build tool rápido e moderno
- **Styled-components** - CSS-in-JS para estilização
- **Framer Motion** - Biblioteca de animações
- **Lucide React** - Ícones modernos e consistentes
- **ESLint + Prettier** - Qualidade e formatação de código

## 📁 Estrutura do Projeto

```
src/
├── components/           # Componentes organizados por pasta
│   ├── Header/          # Navegação principal
│   │   ├── index.tsx    # Lógica do componente
│   │   └── styles.ts    # Estilos styled-components
│   ├── Hero/            # Seção de apresentação
│   │   ├── index.tsx
│   │   └── styles.ts
│   ├── About/           # Seção sobre
│   │   ├── index.tsx
│   │   └── styles.ts
│   ├── Projects/        # Portfólio de projetos
│   │   ├── index.tsx
│   │   └── styles.ts
│   ├── Contact/         # Formulário e contato
│   │   ├── index.tsx
│   │   └── styles.ts
│   └── Footer/          # Rodapé
│       ├── index.tsx
│       └── styles.ts
├── App.tsx              # Componente principal
├── App.css              # Estilos globais e variáveis CSS
├── main.tsx             # Ponto de entrada
└── index.css            # Reset CSS
```

## 🛠️ Instalação e Uso

### Pré-requisitos
- Node.js (versão 16 ou superior)
- npm ou pnpm

### Instalação
```bash
# Clone o repositório
git clone <url-do-repositorio>

# Entre na pasta do projeto
cd luis-portfolio-novo

# Instale as dependências
npm install --legacy-peer-deps
# ou
pnpm install
```

### Desenvolvimento
```bash
# Inicie o servidor de desenvolvimento
npm run dev
# ou
pnpm run dev

# Acesse http://localhost:5173
```

### Scripts Disponíveis

```bash
# Desenvolvimento
npm run dev              # Inicia servidor de desenvolvimento

# Build
npm run build            # Gera build de produção
npm run preview          # Preview do build

# Qualidade de Código
npm run lint             # Verifica erros de linting
npm run lint:fix         # Corrige erros automaticamente
npm run format           # Formata código com Prettier
npm run format:check     # Verifica formatação
npm run type-check       # Verifica tipos TypeScript
```

## 🎨 Paleta de Cores

O projeto utiliza um sistema de variáveis CSS para manter consistência visual:

```css
/* Cores Principais */
--cosmic-deep-blue: #0a0a2a
--cosmic-dark-purple: #1a0a3a
--cosmic-dark-lilac: #2d1b4e

/* Cores Neon */
--cosmic-cyan-neon: #00ffff
--cosmic-magenta-neon: #ff00ff
--cosmic-gold: #ffd700

/* Tons de Cinza */
--cosmic-light-gray: #e2e8f0
--cosmic-medium-gray: #94a3b8
--cosmic-dark-gray: #475569
```

## 📱 Responsividade

O design é totalmente responsivo com breakpoints otimizados:

- **Desktop**: 1200px+
- **Tablet**: 768px - 1199px
- **Mobile**: < 768px

## ⚡ Performance

- **Lazy Loading**: Componentes carregados sob demanda
- **Otimização de Imagens**: Formatos modernos e compressão
- **Code Splitting**: Bundle otimizado pelo Vite
- **CSS-in-JS**: Estilos carregados apenas quando necessários

## 🔧 Personalização

### Alterando Cores
Modifique as variáveis CSS em `src/App.css`:

```css
:root {
  --cosmic-cyan-neon: #00ffff; /* Sua cor aqui */
  /* ... outras variáveis */
}
```

### Adicionando Novos Componentes
1. Crie uma pasta em `src/components/`
2. Adicione `index.tsx` e `styles.ts`
3. Importe no `App.tsx`

### Modificando Conteúdo
- **Informações pessoais**: `src/components/About/index.tsx`
- **Projetos**: `src/components/Projects/index.tsx`
- **Contato**: `src/components/Contact/index.tsx`

## 🚀 Deploy

### Build de Produção
```bash
npm run build
```

### Deploy Sugerido
- **Vercel**: Deploy automático via Git
- **Netlify**: Drag & drop da pasta `dist`
- **GitHub Pages**: Via GitHub Actions

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 🤝 Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para:

1. Fazer fork do projeto
2. Criar uma branch para sua feature
3. Commit suas mudanças
4. Push para a branch
5. Abrir um Pull Request

## 📞 Contato

**Luís Henrique** - Desenvolvedor Full-Stack

- 📧 Email: luis.henrique@email.com
- 💼 LinkedIn: [linkedin.com/in/luis-henrique](https://linkedin.com)
- 🐱 GitHub: [github.com/luis-henrique](https://github.com)

---

⭐ **Desenvolvido com paixão e tecnologias modernas** ⭐

