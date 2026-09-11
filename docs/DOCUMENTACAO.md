# Documentação do Sistema — INOVE Mecânica Automotiva

> Site institucional one-page. Atualizado conforme o código-fonte do repositório `BrunoScrock/inove`.

---

## 1. Visão Geral

Site institucional para a **INOVE Mecânica Automotiva** (Curitiba/PR), de página única, totalmente **estático** (sem servidor, sem banco de dados, sem build), publicado no **GitHub Pages** em:

- **Produção:** https://brunoscrock.github.io/inove/
- **Repositório:** https://github.com/BrunoScrock/inove

O site apresenta: hero com animação, diferenciais, serviços, tabela de valores, formulário de pré-diagnóstico (envia pelo WhatsApp), sobre, galeria em coverflow 3D, avaliações, contato e localização com mapa OpenStreetMap.

### Finalidade do conteúdo

Todo o conteúdo é **renderizado via JavaScript** a partir de constantes centralizadas no arquivo `assets/js/script.js`. Para alterar textos, valores ou contatos, **não é preciso mexer no HTML** — basta editar as configurações descritas na seção [4](#4-configuração-central) e [5](#5-dados-dinâmicos).

---

## 2. Stack e Arquitetura

| Camada | Tecnologia |
|---|---|
| Linguagens | HTML5, CSS3, JavaScript (ES6+) **puro** — sem frameworks |
| Ícones | Lucide Icons (CDN `unpkg` — pode ser servido localmente) |
| Fontes | Google Fonts — `Inter` |
| Analytics | Google Analytics 4 (`gtag.js`) — placeholder, ver [8.7](#87-google-analytics) |
| Mapa | OpenStreetMap (iframe embed) |
| Deploy | GitHub Pages (branch `main`, raiz do repositório) |
| Dependências | Nenhuma (sem `package.json`, `node_modules` ou lockfiles) |

### Fluxo de dados

```
index.html ──► assets/js/script.js (config + render)
                    │
                    ├─► DOM (cards, galeria, horários)
                    └─► WhatsApp (api.whatsapp.com/send?...)
```

Não há requisições a APIs próprias; a única "saída de dados" é a abertura do WhatsApp com mensagem montada (pré-diagnóstico e CTAs). Não há armazenamento local (`localStorage`/`sessionStorage`/cookies).

---

## 3. Estrutura de Arquivos

```
inove-mecanica/
│
├── index.html              # Página única (seções + head SEO/analytics)
├── sitemap.xml             # Sitemap para mecanismos de busca
├── robots.txt              # Regras de rastreamento (+ aponta sitemap)
├── llms.txt                # Resumo do site para modelos de linguagem
├── README.md               # Guia rápido de personalização
│
└── assets/
    ├── css/
    │   └── style.css       # Estilos (~2.500 linhas): tema, seções,
    │                       # coverflow, lightbox, animações, responsivo
    ├── js/
    │   └── script.js       # Config centralizada + render + interações
    ├── images/
    │   ├── logo/
    │   │   └── logo-inove.png   # Logotipo oficial (favicon, header, footer, OG)
    │   ├── hero/           # (previsto) foto principal do hero
    │   ├── servicos/       # (previsto) fotos dos serviços
    │   ├── galeria/        # (previsto) fotos da galeria
    │   └── icons/
    └── (documentação)      # ver docs/
```

> **Importante:** pastas `hero/`, `servicos/`, `galeria/` ainda não possuem imagens locais — o site usa temporariamente imagens do Unsplash e um fallback SVG interno para a logo.

---

## 4. Configuração Central

Tudo que é "dado da empresa" fica em `INOVE_CONFIG` (`assets/js/script.js`, linhas ~5–27):

| Campo | Exemplo atual | Descrição |
|---|---|---|
| `nome` | `"Inove"` | Nome exibido |
| `segmento` | `"Mecânica Automotiva"` | Segmento |
| `whatsapp` | `"55XXXXXXXXXXX"` | **Precisa ser real** — nº com DDI+DDD, só números |
| `telefone` | `"(XX) XXXXX-XXXX"` | Exibição do telefone |
| `endereco` | `"Av. Anita Garibaldi, 3487 - Juvevê, Curitiba - PR, 82220-000"` | Usado no botão "Copiar Endereço" |
| `mapsLink` | URL Google Maps | Link dos botões "Abrir no Google Maps" |
| `instagram` | `"URL_DO_INSTAGRAM"` | **Precisa ser real** — link do perfil |
| `horario.*` | seg–sex `08:00 - 18:00`; sáb/dom `"Fechado"` | Texto exibido na lista de horários |

> **Ação obrigatória antes da divulgação:** preencher `whatsapp`, `telefone` e `instagram` reais, senão todos os CTAs apontam para placeholders inválidos.

---

## 5. Dados Dinâmicos

Constantess no `script.js` que alimentam as seções:

### `SERVICOS` (seção Serviços)
```javascript
{ icon: "wrench", titulo: "Mecânica Geral", descricao: "...", whatsappMsg: "Mecânica Geral" }
```
- `icon`: nome do ícone Lucide; `whatsappMsg`: texto pré-preenchido no WhatsApp ao clicar "Solicitar orçamento".

### `TABELA_PRECOS` (seção Preços)
```javascript
{ categoria: "Óleos", icon: "droplets", itens: [ { nome: "Óleo 0W20", valor: "R$ 49,90" } ] }
```
- Enquanto não houver valores reais, manter `"R$ XX,XX"` como placeholder.

### `GALERIA` (seção Conheça a INOVE — coverflow)
```javascript
{ categoria: "Mecânica", titulo: "Manutenção Automotiva", imagem: "assets/images/galeria/mecanica-01.jpg" }
```
- `imagem` pode ser caminho local OU URL. O campo `imagens[]` (lista) também é suportado pelo lightbox para múltiplas fotos por obra.
- Cada item possui um CTA "Solicitar Orçamento" que abre WhatsApp com a categoria no texto.

### `AVALIACOES` (seção Quem Conhece, Confia)
```javascript
{ nome: "Nome do Cliente", servico: "Troca de óleo", texto: "...", nota: 5 }
```
- **Atualmente são exemplos** (leia a seção [9.3](#93-avaliações) antes de publicar).

---

## 6. Funcionalidades e Módulos

### 6.1 JS — inicialização (`DOMContentLoaded`)
Ordem de execução em `assets/js/script.js` (final do arquivo):
`renderServicos` → `renderPrecos` → `renderAvaliacoes` → `renderHorarios` → `setupWhatsAppLinks` → `setupMobileMenu` → `setupCopyEndereco` → `montarCoverflow` → `setupHeaderScroll` → `setupScrollAnimations` → `setupLogoFallback` → (recria ícones Lucide) → evento do pré-diagnóstico.

### 6.2 WhatsApp e CTAs
- `buildWhatsAppUrl(mensagem)` monta `https://api.whatsapp.com/send?phone=<INOVE_CONFIG.whatsapp>&text=<encoded>`.
- `setupWhatsAppLinks()` liga os botões do site (header, cards, galeria, mapa, Instagram) ao número centralizado.

### 6.3 Pré-diagnóstico (wizard)
Formulário em **3 passos** (`#pre-diagnostico`): dados do veículo → serviço desejado → o que deseja (orçamento / agendar / urgente). Ao concluir, `enviarPreDiagnostico()` monta uma mensagem e abre o WhatsApp. Os valores do formulário vão **apenas** para a URL (`encodeURIComponent`), nunca de volta ao DOM.

### 6.4 Galeria Coverflow 3D (`montarCoverflow`)
- Estágio 3D com **cartões sobrepostos** (destaque central + laterais deslocadas/rotacionadas).
- Navegação: setas, dots, **swipe** (toque), **teclado** e **hover nos vizinhos imediatos** (1 foto por vez, com `hoverLock` de 850ms).
- **Autoplay** de 5s que pausa ao passar o mouse ou focar; respeita `prefers-reduced-motion`.
- **Lightbox** integrado: legenda (categoria/título), contador, miniaturas e swipe.

### 6.5 Avaliações — marquee infinito (`renderAvaliacoes`)
- 3 colunas rolando para cima em **loop infinito** (CSS), com conteúdo duplicado e `translateY(calc(-50% - 11px))` para junção perfeita.
- Velocidades diferentes por coluna (`--dur`: 32s / 44s / 38s) e **máscara de fade** nas bordas.
- Responsivo: 1 coluna (mobile), 2 (tablet), 3 (desktop); pausa ao passar o mouse.

### 6.6 Horários (`renderHorarios`)
Lista de dias × horários em `#horariosList`. O dia atual recebe a classe `.hoje` (fundo verde claro + barra lateral verde), via `new Date().getDay()`.

### 6.7 Animações de entrada (reveal)
`setupScrollAnimations()` usa `IntersectionObserver` (threshold 0.12) para adicionar `.visible` a elementos com `.reveal`, com atraso escalonado `(índice % 6) * 0.08s`. Seletores observados:
`.section-title`, `.pillars-grid > *`, `.services-grid > *`, `.prices-grid > *`, `.pre-diagnostico-wrapper`, `.sobre-grid > *`, `.sobre-features > *`, `.coverflow`, `.reviews-marquee`, `.contato-grid > *`, `.contato-cards > *`, `.map-info`, `.map-wrapper`, `.footer-content > *`.

### 6.8 Fundo animado de fagulhas (`sparks`)
Camada CSS pura (`.sparks`, `::before`/`::after`): duas camadas de pontos (âmbar/branco/laranja) subindo em velocidades diferentes, com **máscara de fade** nas bordas via `mask-image`. Presente no **hero**, **Preços** e **Avaliações** (seções com fundo escuro).

### 6.9 Copiar endereço
Botão `#btnCopyEndereco` usa `navigator.clipboard.writeText(INOVE_CONFIG.endereco)` com feedback visual ("Endereço copiado!" em verde, 2s) — com fallback silencioso se a API não estiver disponível.

### 6.10 Menu mobile e header
`setupMobileMenu()` alterna o menu; `setupHeaderScroll()` ajusta o header ao rolar. No mobile (`max-width:768px`) o logo mantém o subtítulo (ajustado em tamanho).

### 6.11 Fallback da logo (`setupLogoFallback`)
Se a imagem da logo falhar ao carregar, substitui por um **SVG embutido** (INOVE com o "I" grafite e "NOVE" vermelho).

### 6.12 Ícones Lucide
O Lucide **substitui `<i data-lucide="...">` por `<svg>`** em tempo de execução. Por isso, regras de cor devem mirar `i, svg` (ex.: `.review-stars i, .review-stars svg`). Ícones recriados após render dinâmico via `lucide.createIcons()`.

---

## 7. Tema e Estilos

Variáveis de tema em `:root` (`assets/css/style.css`):

| Variável | Valor | Uso |
|---|---|---|
| `--primary` | `#111827` | Grafite escuro (fundos/seções escuras) |
| `--primary-light` | `#1f2937` | Grafite claro |
| `--secondary` | `#dc2626` | Vermelho INOVE (CTA, hover, borda topo de cards) |
| `--secondary-hover` | `#b91c1c` | Hover do vermelho |
| `--accent` | `#f97316` | Laranja (destaques, borda topo dos preços, botões) |
| `--whatsapp` | `#22c55e` / hover `#16a34a` | Botões/CTAs WhatsApp |
| `--bg-light` | `#f9fafb` | Fundo claro de seções/cards |
| `--text-dark` / `--text-muted` | `#1e293b` / `#64748b` | Textos |
| `--white` | `#ffffff` | Branco |
| `--shadow` / `--shadow-hover` | — | Sombras padrão/hover |
| `--radius` | `14px` | Arredondamento geral |

### Seções
| id | Nome visual | Fundo |
|---|---|---|
| `#inicio` | Hero / INÍCIO | Escuro + fagulhas |
| `#diferenciais` | POR QUE ESCOLHER A INOVE? | Claro |
| `#servicos` | SERVIÇOS | Claro |
| `#precos` | TABELA DE VALORES | Escuro + fagulhas |
| `#pre-diagnostico` | PRÉ-DIAGNÓSTICO | Claro |
| `#sobre` | SOBRE A INOVE | Claro |
| `#galeria` | CONHEÇA A INOVE | Claro |
| `#avaliacoes` | QUEM CONHECE, CONFIA | Escuro + fagulhas |
| `#contato` | FALE COM A INOVE | Claro |
| `#localizacao` | ONDE ESTAMOS | Claro |
| footer | — | Escuro |

### Responsividade
Breakpoints principais: `1000px` (grids em 1 coluna, herói centraliza), `768px` (header reduzido, preços 1 coluna, marquee de avaliações com altura reduzida), `480px` (tipografia e botões em largura total). Há também bloco para telas muito pequenas (`coverflow` esconde setas, etc.). `prefers-reduced-motion: reduce` zera animações/transições (inclui pseudo-elementos).

---

## 8. SEO e Mídia

### 8.1 `<head>` do index.html
- `title`, `meta description`, `meta keywords`, `author`, `theme-color`, `viewport`, `charset`.
- Open Graph: `og:title`, `og:description`, `og:type`, `og:locale`, `og:url`, `og:image` (URL absoluta da logo).
- `<link rel="canonical">` e `<meta name="robots" content="index, follow">`.
- Favicon: `assets/images/logo/logo-inove.png`.

### 8.2 Dados estruturados (JSON-LD)
Tipo `AutoRepair` (schema.org) no `<head>`: nome, descrição, URL, imagem, telefone, `priceRange`, endereço postal completo, `geo` (lat -25.3824739 / lon -49.2618130) e `openingHoursSpecification` (seg–sex 08:00–18:00). Responsável pelos *rich results* de negócio local no Google.

### 8.3 `sitemap.xml`
Uma URL (`https://brunoscrock.github.io/inove/`), `lastmod 2026-09-11`, `changefreq monthly`, `priority 1.0`. **Enviar no Google Search Console.**

### 8.4 `robots.txt`
```text
User-agent: *
Allow: /

Sitemap: https://brunoscrock.github.io/inove/sitemap.xml
```

### 8.5 `llms.txt`
Resumo em markdown (sobre, serviços, contato, horário) para LLMs — atualizar junto com qualquer mudança de contato/horário.

### 8.6 Google Search Console
Pendente (fora do código): verificação do domínio e envio do sitemap.

### 8.7 Google Analytics (GA4)
O snippet `gtag.js` está no `<head>` com **`G-XXXXXXXXXX` (placeholder)**. Troque pelo Measurement ID real da propriedade GA4 (criar em analytics.google.com). Depois valide os eventos em "Tempo real".

### 8.8 Performance (já aplicado)
- `defer` no script do Lucide (não bloqueia o render).
- `fetchpriority="high"` na imagem do hero (LCP).
- `preconnect` para Google Fonts; `loading="lazy"` em imagens secundárias e no mapa.

---

## 9. Publicação e Checklist

Antes de divulgar oficialmente:

- [ ] Preencher `INOVE_CONFIG.whatsapp`, `telefone` e `instagram` reais
- [ ] Substituir **avaliações de exemplo** por avaliações reais
- [ ] Definir **preços reais** em `TABELA_PRECOS` (remover `R$ XX,XX`)
- [ ] Trocar imagens do Unsplash pelas fotos reais da oficina (hero, sobre, galeria)
- [ ] Substituir `G-XXXXXXXXXX` pelo Measurement ID da GA4
- [ ] Criar a propriedade e configurar o **Google Meu Negócio**
- [ ] Prompt Search Console → verificar domínio → enviar `sitemap.xml`
- [ ] Rodar **Performance Test** (Lighthouse) e revisar Core Web Vitals
- [ ] Atualizar `llms.txt` se contatos/horário mudarem

### Deploy (GitHub Pages)
O site é servido da branch `main` (raiz). O fluxo é: editar → `git commit` → `git push` e o Pages publica automaticamente. Recarregar com **`Ctrl+F5`** para ver mudanças sem cache.

---

## 10. Segurança

Auditoria (11/09/2026) — **nível geral: BAIXO**; 0 críticos, 0 altos.

- **Sem segredos no repositório**: nenhuma API key/token commitado (varredura de todos os blobs do Git). Aviso: um GitHub PAT foi digitado anteriormente em terminal — nunca commitado; **revogado/recomendação de revogar** e usar GCM/SSH.
- **Sem backend**: não há SQLi, XSS-refletido, CSRF, IDOR, SSRF, upload, auth/autorização (n/a).
- **XSS/DOM**: `innerHTML` usado somente com dados hardcoded; inputs do formulário vão apenas para `encodeURIComponent` numa URL — nunca de volta ao DOM.
- **Pendências (MÉDIO/BAIXO)**: `lucide@latest` sem versão fixa/SRI (fixar ou servir local), ausência de Content-Security-Policy, links `target="_blank"` sem `rel="noopener noreferrer"` (btnMaps/btnInstagram/btnMapa), ausência de `.gitignore`.
- **HTTPS**: garantido pelo GitHub Pages.

---

## 11. Convenções

- **Idioma do projeto:** português (BR) — HTML `lang="pt-BR"`, comentários e textos.
- **Estilo:** comentários em bloco `/* ===== seção ===== */`, constantes de dados em MAIÚSCULAS, funções em `camelCase`.
- **Sem comentários colados no código sem necessidade; sem frameworks; JavaScript ES6 puro.**
- Mudanças visuais seguem a identidade: grafite, vermelho INOVE, laranja de destaque e verde WhatsApp.