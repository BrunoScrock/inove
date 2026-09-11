# INOVE Mecânica Automotiva

Site institucional profissional para a **INOVE Mecânica Automotiva**.

> 📄 Documentação técnica completa: [docs/DOCUMENTACAO.md](docs/DOCUMENTACAO.md)

> ♻️ Reuse este design em novos projetos: cole o [PROMPT.md](PROMPT.md) em qualquer chat
> ou duplique a pasta [starter/](starter/) como ponto de partida.

## Estrutura do Projeto

```
inove-mecanica/
│
├── index.html              # Página principal
├── sitemap.xml             # Sitemap para o Google
├── robots.txt              # Regras de rastreamento
├── llms.txt                # Resumo para LLMs
│
├── assets/
│   ├── css/
│   │   └── style.css       # Estilos completos
│   ├── js/
│   │   └── script.js       # Funcionalidades + config centralizada
│   ├── images/
│   │   ├── logo/           # → logo-inove.png (LOGO OFICIAL)
│   │   ├── hero/           # → hero-inove.jpg (foto principal)
│   │   ├── servicos/       # Fotos dos serviços
│   │   └── galeria/        # Fotos da galeria
│   └── icons/
│
└── README.md
```

## Como substituir a LOGO OFICIAL

1. Coloque o arquivo da logo em: `assets/images/logo/logo-inove.png`
2. O site usa automaticamente esse arquivo no cabeçalho, no rodapé.
3. A logo deve estar em formato PNG (fundo transparente ou branco). Não modificar, distorcer ou alterar as cores.

## Como personalizar os DADOS DA EMPRESA

Abra `assets/js/script.js` → bloco `INOVE_CONFIG` e altere:

```javascript
const INOVE_CONFIG = {
  nome: "Inove",
  segmento: "Mecânica Automotiva",

  // Número do WhatsApp (somente números, com 55 + DDD + número)
  whatsapp: "55XXXXXXXXXXX",

  telefone: "(XX) XXXXX-XXXX",
  endereco: "ENDEREÇO DA INOVE",
  mapsLink: "", // URL do Google Maps

  instagram: "URL_DO_INSTAGRAM",

  horario: {
    segunda: "08:00 - 18:00",
    terca: "08:00 - 18:00",
    quarta: "08:00 - 18:00",
    quinta: "08:00 - 18:00",
    sexta: "08:00 - 18:00",
    sabado: "08:00 - 13:00",
    domingo: "Fechado"
  }
};
```

## Como alterar SERVIÇOS

No `script.js`, bloco `SERVICOS`. Para adicionar um serviço:

```javascript
{ icon: "wrench", titulo: "Meu Novo Serviço", descricao: "Descrição do serviço.", whatsappMsg: "Meu Novo Serviço" },
```

Ícones disponíveis (Lucide Icons): `wrench`, `disc`, `layers`, `droplets`, `cpu`, `thermometer`, `battery-charging`, `snowflake`, `scan-line`, `clipboard-check`, `sliders-horizontal`, `search`, `settings`, `car`, `shield`, etc.

## Como alterar os PREÇOS

No `script.js`, bloco `TABELA_PRECOS`. Estrutura por categoria:

```javascript
{
  categoria: "Óleos",
  icon: "droplets",
  itens: [
    { nome: "Óleo 0W20", valor: "R$ 49,90" },
    ...
  ]
}
```

**Importante:** enquanto não tiver os valores reais, mantenha `"R$ XX,XX"` como placeholder.

## Como substituir as FOTOS DA GALERIA

1. Coloque as fotos reais em `assets/images/galeria/`.
2. No `script.js`, bloco `GALERIA`, informe categoria, título e caminho:

```javascript
{ categoria: "Mecânica", titulo: "Manutenção Automotiva", imagem: "assets/images/galeria/mecanica-01.jpg" }
```

Categorias válidas: `Mecânica`, `Diagnóstico`, `Freios`, `Suspensão`, `Motor`, `Elétrica`, `Ar-condicionado`, `Oficina`.

## Como alterar as AVALIAÇÕES

No `script.js`, bloco `AVALIACOES`:

```javascript
{
  nome: "João da Silva",
  servico: "Troca de óleo",
  texto: "Excelente atendimento...",
  nota: 5  // de 1 a 5
}
```

As avaliações atuais são **exemplos para substituição**. Coloque apenas avaliações reais.

## Como testar

Abra o arquivo `index.html` diretamente no navegador, ou use um servidor local:

```bash
npx serve inove-mecanica
```

## Observações importantes

- Todos os links de WhatsApp utilizam o número centralizado em `INOVE_CONFIG.whatsapp`.
- O formulário de pré-diagnóstico monta uma mensagem automática e envia pelo WhatsApp.
- A tabela de preços exibe placeholders (`R$ XX,XX`) até os valores reais serem fornecidos.
- Galeria e serviços possuem filtros/carrossel funcionais.
- O site é totalmente responsivo (celular, tablet e desktop).