# PROMPT REUTILIZÁVEL — Design System "INOVE"

> Cole este texto em QUALQUER chat/IA (junto com sua descrição do novo projeto) para
> recriar sites com o mesmo estilo, estrutura e comportamento do projeto de referência
> `BrunoScrock/inove`. A documentação técnica do projeto original está em
> `docs/DOCUMENTACAO.md` e o código-fonte completo em `index.html`,
> `assets/css/style.css` e `assets/js/script.js`.

---

## PAPEL

Você é um desenvolvedor front-end sênior especialista em **HTML5, CSS3 e JavaScript puro (ES6+)**.
Nada de frameworks, build tools, TypeScript ou preprocessadores. Dependências permitidas apenas:
Lucide Icons (CDN) e Google Fonts (Inter).

## OBJETIVO

Criar um site institucional **one-page** para: **[DESCREVA AQUI O NEGÓCIO, SEGMENTO, PÚBLICO E SEÇÕES]**
Replicando o padrão de design e arquitetura descrito abaixo, de forma fiel e com respiro visual
(muito espaço em branco, hierarquia clara, transições suaves).

## DESIGN SYSTEM (copiar)

### Cores (variáveis em `:root`)
```css
--primary: #111827;        /* grafite escuro */
--primary-light: #1f2937;  /* grafite claro */
--secondary: #dc2626;      /* cor principal de marca (CALL TO ACTION) */
--secondary-hover: #b91c1c;
--accent: #f97316;         /* laranja de destaque */
--whatsapp: #22c55e;  --whatsapp-hover: #16a34a;
--bg-light: #f9fafb;
--text-dark: #1e293b;  --text-muted: #64748b;
--white: #ffffff;
--shadow: 0 10px 25px -5px rgba(0,0,0,.1), 0 8px 10px -6px rgba(0,0,0,.06);
--shadow-hover: 0 20px 35px -8px rgba(0,0,0,.2);
--radius: 14px;
```
Troque `--secondary`/`--accent` pela cor de marca do novo projeto, mantendo o contraste.

### Tipografia
- Google Fonts **Inter** (300–900). Fonte padrão global via `* { font-family: 'Inter' }`.
- Títulos de seção: `font-weight: 900`, `letter-spacing: -0.5px`, com `<span>` no `--secondary`.
- Subtítulos/descrições: `--text-muted`.

### Layout e espaçamento
- `.container { max-width: 1200px; margin: 0 auto; padding: 0 20px; }`
- Seções: `padding: 100px 0` (desktop) → `60px 0` (mobile).
- Cards: `border-radius: var(--radius)`, sombra suave, hover eleva `translateY(-4px)` + `--shadow-hover`.

### Componentes obrigatórios
1. **Header fixo** (80px desktop / 70px mobile):
   - Fundo `linear-gradient(to bottom, rgba(17,24,39,.97) 55%, rgba(17,24,39,.55) 100%)` + `backdrop-filter: blur(10px)`.
   - Logo (imagem + nome/subtítulo), nav com sublinhado animado em `:hover`, botão CTA.
   - **Banda escura no topo do `body`**: `background: linear-gradient(to bottom, #0d1117 0, #0d1117 <altura-do-header>, var(--white) <altura-do-header>, var(--white) 100%)` + `padding-top` igual à altura — evita faixa branca atrás do header fixo.
2. **Menu mobile** (dropdown sob o header): translúcido frosted — `linear-gradient(to bottom, rgba(17,24,39,.96), rgba(17,24,39,.88))` + `backdrop-filter: blur(16px)`.
3. **Hero escuro** com gradiente `135deg #0d1117 → #161b22 → #1f2937`, badge, título grande, CTAs e imagem.
4. **Fundo animado de fagulhas** (seções escuras): `.sparks` em CSS puro — 2 camadas (`::before`/`::after`) com `radial-gradient` (pontos âmbar/laranja/branco), subindo via `background-position` em `@keyframes`, velocidades diferentes, **máscara de fade** nas bordas (`mask-image: linear-gradient(to bottom, transparent, #000 20%, #000 80%, transparent)`) e `pointer-events: none`.
5. **Grids de cards** (diferenciais/serviços): `grid-template-columns: repeat(auto-fit, minmax(280px, 1fr))`; cards com **`border-top: 4px solid transparent`** que fica na cor de marca no `:hover`.
6. **Botões**: `.btn-cta-hero` (preenchido `--secondary`), `.btn-cta-secondary` (transparente com borda), `.btn-contato` (preenchido, `margin-top: auto` para alinhar no rodapé do card).
7. **Reveal ao rolar**: `IntersectionObserver` (threshold 0.12) adiciona classe `.visible` a `.reveal`, com stagger `(índice % 6) * 0.08s`.
8. **Ícones Lucide**: `<i data-lucide="...">` é **substituído por `<svg>`** em runtime — qualquer regra de cor DEVE usar o seletor `i, svg`. Chamar `lucide.createIcons()` após render dinâmico.
9. **Acessibilidade**: `@media (prefers-reduced-motion: reduce)` zera animações/transições (incluir `*::before, *::after`).

### Arquitetura (mínima, sem framework)
```
index.html
assets/css/style.css      (tema + componentes + responsivo)
assets/js/script.js       (config centralizada + render + interações)
```
- Dados da empresa/site em **um objeto de configuração** (`INOVE_CONFIG` equivalente).
- Conteúdo renderizado via JS a partir de constantes (SEM duplicar no HTML).
- Responsividade: breakpoints 1000px / 900px / 768px / 480px.

## SEO (incluir sempre)
- `<title>`, `meta description`, `keywords`, `canonical`, Open Graph (`og:url`, `og:image`), `meta robots`.
- **JSON-LD** com o schema do tipo de negócio (ex.: `AutoRepair`, `LocalBusiness`, `Restaurant`...) incluindo endereço, geo e horários.
- Arquivos: `sitemap.xml`, `robots.txt`, `llms.txt`.

## CONVENÇÕES
- Idioma: português (BR). Comentários em blocos `/* == seção == */`.
- Constantes de dados em MAIÚSCULAS, funções em `camelCase`. Sem comentários desnecessários no código.

## ENTREGÁVEIS
Liste para cada arquivo o que será gerado e valide: HTML válido, CSS responsivo de 360px a 1440px,
JS sem erros (`node --check`), sem segredos hardcoded.

---
**Instruções específicas do projeto:** [COLE AQUI O QUE O NOVO SITE PRECISA TER]