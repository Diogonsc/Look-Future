# Componentes de Navegação

Este diretório contém os componentes de navegação da aplicação Look Future.

## Header

O componente `Header` é responsável pela navegação principal da aplicação.

### Características:

- **Responsivo**: Adapta-se automaticamente para desktop e mobile
- **Sticky**: Permanece fixo no topo da página durante o scroll
- **Backdrop Blur**: Efeito de blur no fundo para melhor legibilidade
- **Logo**: Exibe o logo da aplicação com link para a página inicial
- **Navegação Desktop**: Menu horizontal para telas maiores
- **Menu Mobile**: Integração com o componente MobileMenu

### Uso:

```tsx
import { Header } from './components/Header'

function App() {
  return (
    <div>
      <Header />
      {/* Conteúdo da aplicação */}
    </div>
  )
}
```

## MobileMenu

O componente `MobileMenu` é responsável pelo menu mobile que abre da direita para a esquerda.

### Características:

- **Animação**: Desliza da direita para a esquerda
- **Ícones**: Cada item de navegação possui um ícone
- **Seções**: Dividido em navegação principal e menu do usuário
- **Responsivo**: Largura adaptativa (300px em mobile, 400px em tablet)
- **Scroll**: Conteúdo scrollável quando necessário
- **Footer**: Informações de copyright e botão de ação

### Estrutura do Menu:

1. **Header**: Logo e nome da aplicação
2. **Navegação**: Links principais com ícones
3. **Menu do Usuário**: Opções de conta e configurações
4. **Footer**: Botão de ação e copyright

### Uso:

```tsx
import { MobileMenu } from './components/MobileMenu'

function Header() {
  return (
    <header>
      {/* Logo e navegação desktop */}
      <MobileMenu />
    </header>
  )
}
```

## Tecnologias Utilizadas

- **shadcn/ui**: Componentes base (Sheet, Button)
- **Lucide React**: Ícones
- **Tailwind CSS**: Estilização
- **Radix UI**: Acessibilidade e comportamento

## Personalização

### Cores e Tema

Os componentes utilizam as variáveis CSS do tema configurado no `index.css`:

- `--primary`: Cor principal
- `--background`: Cor de fundo
- `--foreground`: Cor do texto
- `--muted-foreground`: Cor do texto secundário
- `--border`: Cor das bordas

### Responsividade

- **Mobile**: < 768px (md:)
- **Desktop**: ≥ 768px (md:)

### Animações

O menu mobile utiliza as animações do Radix UI:
- `slide-in-from-right`: Entrada da direita
- `slide-out-to-right`: Saída para a direita
- `fade-in`: Fade do overlay
- `fade-out`: Fade out do overlay
