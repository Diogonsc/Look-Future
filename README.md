# Look Future - Agência Digital

Uma aplicação moderna e responsiva para agência digital, desenvolvida com React, TypeScript e Vite.

## 🚀 Funcionalidades

- **Design Moderno**: Interface elegante com tema escuro/claro
- **Navegação Suave**: Scroll suave entre seções
- **Formulário de Contato**: Formulário completo com validação
- **Google Maps**: Integração com Google Maps API
- **Redes Sociais**: Cards interativos para redes sociais
- **Responsivo**: Otimizado para todos os dispositivos

## 🛠️ Tecnologias

- React 19
- TypeScript
- Vite
- Tailwind CSS
- Lucide React Icons
- React Google Maps API

## 📦 Instalação

```bash
# Clone o repositório
git clone [url-do-repositorio]

# Entre na pasta
cd look-future

# Instale as dependências
npm install

# Execute o projeto
npm run dev
```

## 🔧 Configuração

### Google Maps API

Para usar o mapa interativo, você precisa de uma API key do Google Maps:

1. Acesse [Google Cloud Console](https://console.cloud.google.com/)
2. Crie um novo projeto ou selecione um existente
3. Habilite a **Maps JavaScript API**
4. Crie uma chave de API
5. Crie um arquivo `.env` na raiz do projeto:

```env
REACT_APP_GOOGLE_MAPS_API_KEY=sua_api_key_aqui
```

**Nota**: Sem a API key, o mapa mostrará um placeholder com link para o Google Maps.

## 📱 Seções da Aplicação

- **Início**: Hero section com apresentação da empresa
- **Serviços**: Grid de serviços oferecidos
- **Metodologia**: Processo de trabalho
- **Preços**: Planos e valores
- **Contato**: Formulário, informações e mapa

## 🎨 Personalização

O projeto usa Tailwind CSS para estilização. As cores principais podem ser alteradas no arquivo `src/index.css` nas variáveis CSS customizadas.

## 📄 Licença

Este projeto está sob a licença MIT.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      ...tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      ...tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      ...tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
# Look-Future
