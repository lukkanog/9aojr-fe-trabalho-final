# WordFlow — Estudo de Inglês 🇬🇧

Aplicação frontend em **Vue 3** para estudo de vocabulário em inglês, consumindo um BFF REST que retorna palavras com descrições e exemplos de uso.

## Tecnologias

- **Vue 3** + Composition API + TypeScript
- **Vite** como bundler
- **Tailwind CSS v4** para estilização
- **Inter** (Google Fonts)

## Estrutura do Projeto

```
src/
├── components/       # Componentes reutilizáveis de UI
│   ├── AppHeader.vue
│   ├── ErrorMessage.vue
│   ├── LoadingSpinner.vue
│   └── WordCard.vue
├── composables/      # Lógica reutilizável (hooks)
│   └── useWords.ts
├── services/         # Comunicação com API
│   └── api.ts
├── types/            # Tipos TypeScript
│   └── index.ts
├── views/            # Telas principais
│   └── HomeView.vue
├── App.vue
├── main.ts
└── style.css
```

## Pré-requisitos

- **Node.js** 18+
- **npm** 9+

## Setup e Execução

```bash
# Instalar dependências
npm install

# Rodar em modo de desenvolvimento
npm run dev

# Build para produção
npm run build
```

O servidor de desenvolvimento estará disponível em `http://localhost:5173`.

## API

A aplicação consome o endpoint:

```
GET https://fiap-bff-9aojr.onrender.com/ask
```

**Resposta de sucesso:**
```json
[
  {
    "word": "Palavra em inglês",
    "description": "Explicação sobre a palavra",
    "useCase": "Um caso de uso para a palavra"
  }
]
```

## Funcionalidades

- Exibição de palavras com descrição e exemplo de uso
- Busca de novas palavras com um clique
- Loading state com skeleton cards
- Tratamento de erros com opção de retry
- Design responsivo (mobile-first)
- Paleta preto + rosa com animações suaves
