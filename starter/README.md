# Starter — Design System "INOVE"

Ponto de partida genérico para novos sites com o mesmo estilo do projeto **INOVE**.
Reaproveita o design system (cores, header frosted, hero com fagulhas, cards, reveal,
menu mobile e responsividade) sem conteúdo específico do negócio.

## Como usar

1. **Duplicar a pasta** `starter/` para o novo projeto (renomeie como quiser).
2. Abrir `index.html` e substituir os textos de exemplo pelos do seu negócio.
3. Em `assets/js/app.js`, editar **`SITE_CONFIG`** (nome, WhatsApp, telefone, endereço)
   e as listas `DIFERENCIAIS`/`SERVICOS`.
4. Em `assets/css/style.css`, ajustar as variáveis `:root` (principalmente
   `--secondary` e `--accent` para a cor de marca do novo projeto).
5. Adicionar as seções extras do projeto copiando os padrões já documentados
   (ver `PROMPT.md` na raiz e `docs/DOCUMENTACAO.md` do projeto INOVE).

## Do que ele já vem com

- Header fixo com degradê transparente na base + banda escura no topo do `body` (sem faixa branca).
- Menu mobile "frosted" (translúcido + blur).
- Hero escuro com **fagulhas animadas** (2 camadas + máscara de fade).
- Grids de cards com `border-top` colorido no hover, botões, section-title.
- Classe utilitária `.section-dark` para blocos escuros com fagulhas.
- Reveal ao rolar (`IntersectionObserver`), menu mobile, header scroll e ícones Lucide no `app.js`.
- Responsivo (1000/900/768/480px) e `prefers-reduced-motion`.

## Estrutura

```
starter/
├── index.html
└── assets/
    ├── css/style.css   (design system base)
    └── js/app.js       (config + interações)
```

> Interativo: os cards e o link do WhatsApp são renderizados via JS a partir das
> constantes — não precisa editar o HTML para trocar conteúdo.