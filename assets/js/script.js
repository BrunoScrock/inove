/* ==========================================================================
   INOVE MECÂNICA - Configurações Centralizadas
   ========================================================================== */

const INOVE_CONFIG = {
  nome: "Inove",
  segmento: "Mecânica Automotiva",

  // ⚠️ ALTERE AQUI: número do WhatsApp da INOVE (somente números, com DDI + DDD)
  whatsapp: "55XXXXXXXXXXX",

  telefone: "(XX) XXXXX-XXXX",
  endereco: "Av. Anita Garibaldi, 3487 - Juvevê, Curitiba - PR, 82220-000",
  mapsLink: "https://www.google.com/maps?q=Av.+Anita+Garibaldi,+3487,+Juvev%C3%AA,+Curitiba+-+PR,+82220-000", // URL do Google Maps (opcional)

  instagram: "URL_DO_INSTAGRAM", // Ex: "https://www.instagram.com/inovemecanica"

  horario: {
    segunda: "08:00 - 18:00",
    terca: "08:00 - 18:00",
    quarta: "08:00 - 18:00",
    quinta: "08:00 - 18:00",
    sexta: "08:00 - 18:00",
    sabado: "Fechado",
    domingo: "Fechado"
  }
};

/* ==========================================================================
   SERVIÇOS - Adicione ou remova serviços facilmente aqui
   ========================================================================== */

const SERVICOS = [
  { icon: "wrench", titulo: "Mecânica Geral", descricao: "Manutenção preventiva e corretiva de veículos.", whatsappMsg: "Mecânica Geral" },
  { icon: "disc", titulo: "Freios", descricao: "Pastilhas, discos, fluido e sistema de frenagem.", whatsappMsg: "Freios" },
  { icon: "layers", titulo: "Suspensão", descricao: "Amortecedores, buchas, bieletas, pivôs e componentes.", whatsappMsg: "Suspensão" },
  { icon: "droplets", titulo: "Troca de Óleo", descricao: "Troca de óleo e filtros conforme especificação do veículo.", whatsappMsg: "Troca de Óleo" },
  { icon: "cpu", titulo: "Injeção Eletrônica", descricao: "Diagnóstico eletrônico e correção de falhas.", whatsappMsg: "Injeção Eletrônica" },
  { icon: "thermometer", titulo: "Arrefecimento", descricao: "Radiador, válvula termostática, mangueiras e sistema.", whatsappMsg: "Arrefecimento" },
  { icon: "battery-charging", titulo: "Elétrica Automotiva", descricao: "Bateria, alternador, motor de partida e sistema elétrico.", whatsappMsg: "Elétrica Automotiva" },
  { icon: "snowflake", titulo: "Ar-Condicionado", descricao: "Diagnóstico, manutenção e higienização.", whatsappMsg: "Ar-Condicionado" },
  { icon: "scan-line", titulo: "Diagnóstico com Scanner", descricao: "Análise eletrônica para identificação de falhas.", whatsappMsg: "Diagnóstico com Scanner" },
  { icon: "clipboard-check", titulo: "Revisão Preventiva", descricao: "Inspeção completa para evitar problemas futuros.", whatsappMsg: "Revisão Preventiva" },
  { icon: "sliders-horizontal", titulo: "Alinhamento e Balanceamento", descricao: "Estabilidade, segurança e durabilidade dos pneus.", whatsappMsg: "Alinhamento e Balanceamento" },
  { icon: "search", titulo: "Vistoria Pré-Compra", descricao: "Avaliação mecânica do veículo antes da compra.", whatsappMsg: "Vistoria Pré-Compra" }
];

/* ==========================================================================
   TABELA DE PREÇOS - Altere os valores aqui (use "R$ XX,XX" como placeholder)
   ========================================================================== */

const TABELA_PRECOS = [
  {
    categoria: "Óleos",
    icon: "droplets",
    itens: [
      { nome: "Óleo 0W20", valor: "R$ XX,XX" },
      { nome: "Óleo 0W40", valor: "R$ XX,XX" },
      { nome: "Óleo 5W30", valor: "R$ XX,XX" },
      { nome: "Óleo 15W40", valor: "R$ XX,XX" },
      { nome: "Óleo 20W50", valor: "R$ XX,XX" }
    ]
  },
  {
    categoria: "Filtros",
    icon: "filter",
    itens: [
      { nome: "Filtro de óleo", valor: "R$ XX,XX" },
      { nome: "Filtro de combustível", valor: "R$ XX,XX" },
      { nome: "Filtro de ar", valor: "R$ XX,XX" },
      { nome: "Filtro de ar-condicionado", valor: "R$ XX,XX" }
    ]
  },
  {
    categoria: "Freios",
    icon: "disc",
    itens: [
      { nome: "Pastilhas dianteiras", valor: "R$ XX,XX" },
      { nome: "Pastilhas traseiras", valor: "R$ XX,XX" },
      { nome: "Troca de pastilhas", valor: "R$ XX,XX" }
    ]
  },
  {
    categoria: "Serviços",
    icon: "wrench",
    itens: [
      { nome: "Troca de óleo", valor: "A partir de R$ XX,XX" },
      { nome: "Limpeza do sistema de arrefecimento", valor: "A partir de R$ XX,XX" },
      { nome: "Higienização do ar-condicionado", valor: "A partir de R$ XX,XX" },
      { nome: "Diagnóstico eletrônico", valor: "A partir de R$ XX,XX" },
      { nome: "Revisão preventiva", valor: "A partir de R$ XX,XX" }
    ]
  }
];

/* ==========================================================================
   GALERIA - Substitua pelos caminhos das fotos reais da INOVE
   As URLs abaixo são PLACEHOLDERS de exemplo (colocar fotos reais em
   assets/images/galeria/ e apontar o caminho local aqui).
   ========================================================================== */

const GALERIA = [
  { categoria: "Mecânica", titulo: "Serviço de Mecânica Geral", imagem: "assets/images/galeria/mecanica-01.jpg", placeholder: "https://images.unsplash.com/photo-1625047509248-ec889cbff17f?auto=format&fit=crop&w=800&q=80" },
  { categoria: "Diagnóstico", titulo: "Diagnóstico Eletrônico", imagem: "assets/images/galeria/diagnostico-01.jpg", placeholder: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&w=800&q=80" },
  { categoria: "Freios", titulo: "Troca de Pastilhas", imagem: "assets/images/galeria/freios-01.jpg", placeholder: "https://images.unsplash.com/photo-1599474924187-334a4ae5bd3c?auto=format&fit=crop&w=800&q=80" },
  { categoria: "Suspensão", titulo: "Manutenção de Suspensão", imagem: "assets/images/galeria/suspensao-01.jpg", placeholder: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?auto=format&fit=crop&w=800&q=80" },
  { categoria: "Motor", titulo: "Manutenção de Motor", imagem: "assets/images/galeria/motor-01.jpg", placeholder: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=800&q=80" },
  { categoria: "Elétrica", titulo: "Serviço Elétrico", imagem: "assets/images/galeria/eletrica-01.jpg", placeholder: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=800&q=80" },
  { categoria: "Ar-Condicionado", titulo: "Manutenção de Ar-Condicionado", imagem: "assets/images/galeria/arcondicionado-01.jpg", placeholder: "https://images.unsplash.com/photo-1626668893632-6f3a4466d22f?auto=format&fit=crop&w=800&q=80" },
  { categoria: "Diagnóstico", titulo: "Scanner Automotivo", imagem: "assets/images/galeria/diagnostico-02.jpg", placeholder: "https://images.unsplash.com/photo-1565043666747-69f6646db940?auto=format&fit=crop&w=800&q=80" },
  { categoria: "Oficina", titulo: "Nossa Oficina - Interior", imagem: "assets/images/galeria/oficina-01.jpg", placeholder: "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?auto=format&fit=crop&w=800&q=80" },
  { categoria: "Oficina", titulo: "Nossa Oficina - Elevadores", imagem: "assets/images/galeria/oficina-02.jpg", placeholder: "https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?auto=format&fit=crop&w=800&q=80" },
  { categoria: "Mecânica", titulo: "Manutenção de Freios", imagem: "assets/images/galeria/mecanica-02.jpg", placeholder: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=800&q=80" },
  { categoria: "Motor", titulo: "Reparo em Motor", imagem: "assets/images/galeria/motor-02.jpg", placeholder: "https://images.unsplash.com/photo-1504222490345-c075b6008014?auto=format&fit=crop&w=800&q=80" }
];

/* ==========================================================================
   AVALIAÇÕES - Substitua pelas avaliações reais dos clientes
   ========================================================================== */

const AVALIACOES = [
  {
    nome: "Nome do Cliente",
    servico: "Troca de óleo",
    texto: "Excelente atendimento, serviço transparente e preço justo.",
    nota: 5
  },
  {
    nome: "Nome do Cliente",
    servico: "Freios",
    texto: "Equipe profissional, serviço bem feito e com capricho.",
    nota: 5
  },
  {
    nome: "Nome do Cliente",
    servico: "Revisão",
    texto: "Atendimento honesto e qualidade no serviço. Recomendo!",
    nota: 5
  }
];

/* ==========================================================================
   UTILITÁRIOS DE WHATSAPP
   ========================================================================== */

function buildWhatsAppUrl(message) {
  const encoded = encodeURIComponent(message);
  return `https://api.whatsapp.com/send?phone=${INOVE_CONFIG.whatsapp}&text=${encoded}`;
}

const MSG_PADRAO = "Olá! Vim pelo site da Inove e gostaria de solicitar atendimento.";

/* ==========================================================================
   RENDERIZAÇÃO DE CONTEÚDO
   ========================================================================== */

// Serviços
function renderServicos() {
  const grid = document.getElementById("servicesGrid");
  grid.innerHTML = SERVICOS.map((s, i) => `
    <div class="service-card fade-up" style="animation-delay: ${i * 0.05}s;">
      <div class="service-icon"><i data-lucide="${s.icon}"></i></div>
      <h3>${s.titulo}</h3>
      <p>${s.descricao}</p>
      <a href="#" class="btn-card" onclick="solicitarOrcamentoServico('${s.whatsappMsg}'); return false;">
        Solicitar orçamento <i data-lucide="arrow-right"></i>
      </a>
    </div>
  `).join("");
}

// Tabela de preços
function renderPrecos() {
  const grid = document.getElementById("pricesGrid");
  grid.innerHTML = TABELA_PRECOS.map(categoria => `
    <div class="price-card fade-up">
      <div class="price-card-header">
        <i data-lucide="${categoria.icon}"></i>
        <h3>${categoria.categoria}</h3>
      </div>
      <ul class="price-list">
        ${categoria.itens.map(item => `
          <li class="price-item">
            <span>${item.nome}</span>
            <span class="price-value">${item.valor}</span>
          </li>
        `).join("")}
      </ul>
    </div>
  `).join("");
}

// Galeria — coverflow 3D
function montarCoverflow() {
  const stage = document.getElementById("coverflow-stage");
  if (!stage) return;

  const ambBg = document.getElementById("coverflow-bg");
  const dotsContainer = document.getElementById("coverflow-dots");
  const btnPrev = document.getElementById("coverflow-prev");
  const btnNext = document.getElementById("coverflow-next");

  const itens = GALERIA || [];
  if (!itens.length) return;

  let indice = 0;
  let touchX = 0;
  let hoverLock = false;

  function orcamentoDaGaleria(assunto) {
    const msg = `Olá! Vi "${assunto}" na galeria do site e gostaria de solicitar um orçamento.`;
    window.open(buildWhatsAppUrl(msg), "_blank");
  }

  // Cria os cartões
  itens.forEach((item, i) => {
    const card = document.createElement("div");
    card.className = "coverflow-card";
    card.dataset.index = i;
    card.setAttribute("role", "tabpanel");

    const img = document.createElement("img");
    img.src = item.imagem;
    img.alt = item.titulo;
    img.loading = "lazy";
    img.draggable = false;
    // Usa a imagem placeholder automaticamente se a foto local não existir
    if (item.placeholder) {
      img.addEventListener("error", () => {
        if (img.src !== item.placeholder) {
          img.src = item.placeholder;
          img.alt = item.titulo;
        }
      }, { once: true });
    }
    card.appendChild(img);

    const vignette = document.createElement("div");
    vignette.className = "coverflow-vignette";
    card.appendChild(vignette);

    const content = document.createElement("div");
    content.className = "coverflow-content";
    content.innerHTML =
      '<span class="coverflow-tag">' + (item.categoria || "Inove") + "</span>" +
      '<div class="coverflow-body">' +
      '<h3 class="coverflow-title">' + item.titulo + "</h3>" +
      (item.descricao ? '<p class="coverflow-desc">' + item.descricao + "</p>" : "") +
      '<button class="coverflow-cta">Solicitar Orçamento</button>' +
      "</div>";
    card.appendChild(content);

    card.addEventListener("click", () => {
      abrirLightbox(i);
    });

    // Navega uma foto por vez ao passar o mouse (com trava para evitar o vaivém)
    card.addEventListener("mouseenter", () => {
      if (hoverLock) return;
      const d = indiceAtual(i);
      if (d === 1) {
        hoverLock = true;
        setTimeout(() => {
          hoverLock = false;
        }, 850);
        proximo();
      } else if (d === -1) {
        hoverLock = true;
        setTimeout(() => {
          hoverLock = false;
        }, 850);
        anterior();
      }
    });

    content.querySelector(".coverflow-cta").addEventListener("click", (e) => {
      e.stopPropagation();
      orcamentoDaGaleria(item.categoria || item.titulo);
    });

    stage.appendChild(card);
  });

  const cards = Array.from(stage.children);

  // Dots de paginação
  itens.forEach((_, i) => {
    const dot = document.createElement("button");
    dot.className = "coverflow-dot";
    dot.setAttribute("role", "tab");
    dot.setAttribute("aria-label", "Ir para foto " + (i + 1));
    dot.addEventListener("click", () => irPara(i));
    dotsContainer.appendChild(dot);
  });
  const dots = Array.from(dotsContainer.children);

  function indiceAtual(i) {
    let d = (i - indice + itens.length) % itens.length;
    if (d > itens.length / 2) d -= itens.length;
    return d;
  }

  function atualizar() {
    const cardW = cards[0].offsetWidth || 310;
    const deslocamento = (fator, sinal) => Math.round(fator * cardW) * sinal;

    cards.forEach((card, i) => {
      const d = indiceAtual(i);
      const sinal = d < 0 ? -1 : 1;
      const abs = Math.abs(d);
      let transformo = "";
      let opacidade = 0;
      let z = 1;
      let filtro = "brightness(0.4) blur(2px)";
      let centro = false;

      if (d === 0) {
        transformo = "none";
        opacidade = 1;
        z = 30;
        filtro = "none";
        centro = true;
      } else if (abs === 1) {
        transformo =
          "translateX(" + deslocamento(0.62, sinal) + "px) scale(0.84) rotateY(" + -24 * sinal + "deg)";
        opacidade = 0.6;
        z = 20;
        filtro = "brightness(0.75)";
      } else if (abs === 2) {
        transformo =
          "translateX(" + deslocamento(1.05, sinal) + "px) scale(0.68) rotateY(" + -38 * sinal + "deg)";
        opacidade = 0.35;
        z = 10;
        filtro = "brightness(0.55) blur(1px)";
      } else {
        transformo =
          "translateX(" + deslocamento(1.35, sinal) + "px) scale(0.55) rotateY(" + -45 * sinal + "deg)";
        opacidade = 0;
      }

      card.style.transform = transformo;
      card.style.opacity = opacidade;
      card.style.zIndex = z;
      card.style.filter = filtro;
      card.setAttribute("aria-hidden", centro ? "false" : "true");
      card.classList.toggle("is-center", centro);
    });

    if (ambBg) ambBg.src = itens[indice].imagem;

    dots.forEach((dot, i) => {
      dot.classList.toggle("active", i === indice);
      dot.setAttribute("aria-selected", i === indice ? "true" : "false");
    });
  }

  function proximo() {
    indice = (indice + 1) % itens.length;
    atualizar();
  }

  function anterior() {
    indice = (indice - 1 + itens.length) % itens.length;
    atualizar();
  }

  function irPara(i) {
    indice = (i + itens.length) % itens.length;
    atualizar();
  }

  btnPrev.addEventListener("click", anterior);
  btnNext.addEventListener("click", proximo);

  // --------------------------------------------------------------------------
  // LIGHTBOX — galeria de fotos (aberto ao clicar no cartão central)
  // --------------------------------------------------------------------------

  const overlay = document.createElement("div");
  overlay.className = "lightbox";
  overlay.setAttribute("role", "dialog");
  overlay.setAttribute("aria-modal", "true");
  overlay.setAttribute("aria-label", "Galeria de fotos da Inove");
  overlay.innerHTML =
    '<button class="lightbox-close" aria-label="Fechar galeria"><i data-lucide="x"></i></button>' +
    '<div class="lightbox-counter"></div>' +
    '<button class="lightbox-arrow prev" aria-label="Foto anterior"><i data-lucide="chevron-left"></i></button>' +
    '<button class="lightbox-arrow next" aria-label="Próxima foto"><i data-lucide="chevron-right"></i></button>' +
    '<figure class="lightbox-figure">' +
    '<img class="lightbox-img" src="" alt="">' +
    "<figcaption>" +
    '<span class="coverflow-tag lightbox-tag"></span>' +
    '<h3 class="lightbox-title"></h3>' +
    '<button class="coverflow-cta lightbox-cta">Solicitar Orçamento</button>' +
    "</figcaption>" +
    "</figure>" +
    '<div class="lightbox-thumbs"></div>';
  document.body.appendChild(overlay);

  let obraAtiva = 0;
  let fotoAtiva = 0;

  function fotosDaObra(item) {
    const fotos = Array.isArray(item.imagens) && item.imagens.length ? item.imagens : [item.imagem];
    return fotos;
  }

  function atualizarLightbox() {
    const fotos = fotosDaObra(itens[obraAtiva]);
    const item = itens[obraAtiva];
    const imgEl = overlay.querySelector(".lightbox-img");
    const counter = overlay.querySelector(".lightbox-counter");
    const hasMulti = fotos.length > 1;

    if (fotos.length) {
      imgEl.src = fotos[fotoAtiva];
      imgEl.alt = item.titulo + " - foto " + (fotoAtiva + 1) + " de " + fotos.length;
    }

    // Se a foto local não existir, usa a imagem placeholder
    imgEl.onerror = null;
    if (item.placeholder) {
      imgEl.onerror = () => {
        if (imgEl.src !== item.placeholder) {
          imgEl.src = item.placeholder;
          imgEl.alt = item.titulo;
        }
      };
    }

    counter.textContent = hasMulti ? fotoAtiva + 1 + " / " + fotos.length : "";
    overlay.classList.toggle("has-single", !hasMulti);
    overlay.querySelector(".lightbox-tag").textContent = item.categoria || "Inove";
    overlay.querySelector(".lightbox-title").textContent = item.titulo;
    overlay.querySelector(".lightbox-cta").onclick = () => orcamentoDaGaleria(item.categoria || item.titulo);

    const thumbs = overlay.querySelector(".lightbox-thumbs");
    thumbs.innerHTML = "";
    if (hasMulti) {
      fotos.forEach((src, fi) => {
        const t = document.createElement("button");
        t.type = "button";
        t.className = "lightbox-thumb" + (fi === fotoAtiva ? " active" : "");
        t.setAttribute("aria-label", "Ir para a foto " + (fi + 1));
        const ti = document.createElement("img");
        ti.src = src;
        ti.alt = "";
        ti.loading = "lazy";
        t.appendChild(ti);
        t.addEventListener("click", () => {
          fotoAtiva = fi;
          atualizarLightbox();
        });
        thumbs.appendChild(t);
      });
    }

    if (window.lucide) window.lucide.createIcons();
  }

  function fotoAnterior() {
    const fotos = fotosDaObra(itens[obraAtiva]);
    if (fotos.length <= 1) return;
    fotoAtiva = (fotoAtiva - 1 + fotos.length) % fotos.length;
    atualizarLightbox();
  }

  function fotoProxima() {
    const fotos = fotosDaObra(itens[obraAtiva]);
    if (fotos.length <= 1) return;
    fotoAtiva = (fotoAtiva + 1) % fotos.length;
    atualizarLightbox();
  }

  function abrirLightbox(i) {
    obraAtiva = i;
    fotoAtiva = 0;
    pararAutoplay();
    atualizarLightbox();
    overlay.classList.add("open");
    document.body.classList.add("no-scroll");
    if (window.lucide) window.lucide.createIcons();
  }

  function fecharLightbox() {
    overlay.classList.remove("open");
    document.body.classList.remove("no-scroll");
    iniciarAutoplay();
  }

  overlay.querySelector(".lightbox-close").addEventListener("click", fecharLightbox);
  overlay.querySelector(".lightbox-arrow.prev").addEventListener("click", (e) => {
    e.stopPropagation();
    fotoAnterior();
  });
  overlay.querySelector(".lightbox-arrow.next").addEventListener("click", (e) => {
    e.stopPropagation();
    fotoProxima();
  });
  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) fecharLightbox();
  });

  let lightboxTouchX = 0;
  overlay.addEventListener("touchstart", (e) => {
    lightboxTouchX = e.touches[0].clientX;
  }, { passive: true });
  overlay.addEventListener("touchend", (e) => {
    const diff = e.changedTouches[0].clientX - lightboxTouchX;
    if (Math.abs(diff) > 45) {
      if (diff < 0) fotoProxima();
      else fotoAnterior();
    }
  }, { passive: true });

  document.addEventListener("keydown", (e) => {
    if (!overlay.classList.contains("open")) return;
    if (e.key === "Escape") {
      fecharLightbox();
      e.preventDefault();
    } else if (e.key === "ArrowLeft") {
      fotoAnterior();
      e.preventDefault();
    } else if (e.key === "ArrowRight") {
      fotoProxima();
      e.preventDefault();
    }
  });

  // Navegação por teclado (setas) quando o foco está na galeria
  stage.addEventListener("keydown", (e) => {
    if (overlay.classList.contains("open")) return;
    if (e.key === "ArrowLeft") {
      anterior();
      e.preventDefault();
    }
    if (e.key === "ArrowRight") {
      proximo();
      e.preventDefault();
    }
  });

  // Gestos de toque (swipe)
  stage.addEventListener("touchstart", (e) => {
    touchX = e.touches[0].clientX;
  }, { passive: true });
  stage.addEventListener("touchend", (e) => {
    const diff = e.changedTouches[0].clientX - touchX;
    if (Math.abs(diff) > 45) {
      if (diff < 0) proximo();
      else anterior();
    }
  }, { passive: true });

  // Autoplay (pausa ao passar o mouse; desligado se o usuário prefere menos movimento)
  const reduzirMovimento = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  let timer = null;

  function pararAutoplay() {
    if (timer) {
      clearInterval(timer);
      timer = null;
    }
  }

  function iniciarAutoplay() {
    pararAutoplay();
    if (reduzirMovimento || itens.length <= 1) return;
    if (overlay.classList.contains("open")) return;
    timer = setInterval(proximo, 5000);
  }

  const cover = document.getElementById("coverflow");
  if (cover) {
    cover.addEventListener("mouseenter", pararAutoplay);
    cover.addEventListener("mouseleave", iniciarAutoplay);
    cover.addEventListener("focusin", pararAutoplay);
    cover.addEventListener("focusout", iniciarAutoplay);
  }

  atualizar();
  iniciarAutoplay();
  if (window.lucide) window.lucide.createIcons();
}

// Avaliações
function renderAvaliacoes() {
  const grid = document.getElementById("reviewsGrid");
  grid.innerHTML = AVALIACOES.map((a, i) => {
    const iniciais = a.nome.trim().split(" ").map(p => p[0]).join("").slice(0, 2).toUpperCase();
    const estrelas = Array.from({ length: 5 }, (_, j) =>
      `<i data-lucide="star" style="${j >= a.nota ? "opacity:0.25;" : ""}"></i>`
    ).join("");
    return `
      <div class="review-card fade-up" style="animation-delay: ${i * 0.1}s;">
        <div class="review-stars">${estrelas}</div>
        <p class="review-text">"${a.texto}"</p>
        <div class="review-author">
          <div class="review-avatar">${iniciais}</div>
          <div>
            <strong>${a.nome}</strong>
            <span>${a.servico}</span>
          </div>
        </div>
      </div>
    `;
  }).join("");
}

// Horários
function renderHorarios() {
  const list = document.getElementById("horariosList");
  const dias = [
    ["segunda", "Segunda-feira", 1],
    ["terca", "Terça-feira", 2],
    ["quarta", "Quarta-feira", 3],
    ["quinta", "Quinta-feira", 4],
    ["sexta", "Sexta-feira", 5],
    ["sabado", "Sábado", 6],
    ["domingo", "Domingo", 0]
  ];
  const hoje = new Date().getDay();
  list.innerHTML = dias.map(([key, label, jsDay]) => `
    <li class="horarios-item${jsDay === hoje ? " hoje" : ""}">
      <span class="horarios-day">${label}</span>
      <span class="horarios-hour">${INOVE_CONFIG.horario[key]}</span>
    </li>
  `).join("");
}

/* ==========================================================================
   LINKS DE WHATSAPP
   ========================================================================== */

function solicitarOrcamentoServico(servico) {
  const msg = `Olá! Gostaria de solicitar um orçamento para o serviço de ${servico}.`;
  window.open(buildWhatsAppUrl(msg), "_blank");
}

function setupWhatsAppLinks() {
  const links = [
    ["btnHeaderWhatsApp", "Olá! Gostaria de falar com a Inove."],
    ["btnHeroWhatsApp", "Olá! Gostaria de agendar um serviço na Inove."],
    ["btnHeroOrcamento", "Olá! Gostaria de solicitar um orçamento para meu veículo."],
    ["btnPrecosWhatsApp", "Olá! Vi a tabela de preços no site e gostaria de confirmar um orçamento exato para o meu carro."],
    ["whatsappFloat", MSG_PADRAO],
    ["btnContatoWhatsApp", "Olá! Gostaria de falar com a Inove."],
    ["footerWhatsApp", MSG_PADRAO]
  ];

  links.forEach(([id, mensagem]) => {
    const el = document.getElementById(id);
    if (el) {
      el.href = buildWhatsAppUrl(mensagem);
      el.target = "_blank";
    }
  });

  // Instagram
  const instaLinks = ["btnInstagram", "footerInstagram"];
  instaLinks.forEach(id => {
    const el = document.getElementById(id);
    if (el) el.href = INOVE_CONFIG.instagram || "#";
  });

  // Maps
  if (INOVE_CONFIG.mapsLink) {
    const mapLinks = ["btnMaps", "btnMapa"];
    mapLinks.forEach(id => {
      const el = document.getElementById(id);
      if (el) el.href = INOVE_CONFIG.mapsLink;
    });
  }
}

/* ==========================================================================
   PRÉ-DIAGNÓSTICO
   ========================================================================== */

function nextStep(step) {
  const steps = document.querySelectorAll(".pre-step");
  steps.forEach(s => s.classList.remove("active"));
  document.querySelector(`.pre-step[data-step="${step}"]`).classList.add("active");
}

function prevStep(step) {
  nextStep(step);
}

function enviarPreDiagnostico() {
  const marca = document.getElementById("pdMarca").value;
  const modelo = document.getElementById("pdModelo").value;
  const ano = document.getElementById("pdAno").value;
  const motorizacao = document.getElementById("pdMotorizacao").value;

  const servico = document.querySelector('input[name="pdServico"]:checked');
  const urgencia = document.querySelector('input[name="pdUrgencia"]:checked');

  if (!servico) {
    alert("Por favor, selecione o serviço necessário.");
    nextStep(2);
    return;
  }
  if (!urgencia) {
    alert("Por favor, selecione o que deseja.");
    return;
  }

  let msg = "Olá! Gostaria de atendimento na Inove.\n\n";
  msg += "Veículo:\n";
  msg += `Marca: ${marca || "-"}\n`;
  msg += `Modelo: ${modelo || "-"}\n`;
  msg += `Ano: ${ano || "-"}\n`;
  msg += `Motorização: ${motorizacao || "-"}\n\n`;
  msg += `Serviço: ${servico.value}\n\n`;
  msg += `O que deseja: ${urgencia.value}`;

  window.open(buildWhatsAppUrl(msg), "_blank");
  nextStep(1);

  // Limpa o formulário
  document.getElementById("pdMarca").value = "";
  document.getElementById("pdModelo").value = "";
  document.getElementById("pdAno").value = "";
  document.getElementById("pdMotorizacao").value = "";
  document.querySelectorAll('input[name="pdServico"]').forEach(r => r.checked = false);
  document.querySelectorAll('input[name="pdUrgencia"]').forEach(r => r.checked = false);
}

/* ==========================================================================
   COPIAR ENDEREÇO
   ========================================================================== */

function setupCopyEndereco() {
  const btn = document.getElementById("btnCopyEndereco");
  if (!btn) return;

  const icon = btn.querySelector("i");
  const label = btn.querySelector(".copy-label");

  btn.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(INOVE_CONFIG.endereco);
      btn.classList.add("copied");
      if (icon) icon.setAttribute("data-lucide", "check");
      if (label) label.textContent = "Endereço copiado!";
      if (window.lucide) window.lucide.createIcons();
      setTimeout(() => {
        btn.classList.remove("copied");
        if (icon) icon.setAttribute("data-lucide", "copy");
        if (label) label.textContent = "Copiar Endereço";
        if (window.lucide) window.lucide.createIcons();
      }, 2000);
    } catch (e) {
      // Clipboard indisponível — mantém o estado atual
    }
  });
}

/* ==========================================================================
   MENU MOBILE
   ========================================================================== */

function setupMobileMenu() {
  const menuBtn = document.getElementById("mobileMenuBtn");
  const navMenu = document.getElementById("navMenu");

  if (!menuBtn || !navMenu) return;

  menuBtn.addEventListener("click", () => {
    navMenu.classList.toggle("active");

    const icon = menuBtn.querySelector("i");
    const isOpen = navMenu.classList.contains("active");
    icon.setAttribute("data-lucide", isOpen ? "x" : "menu");
    menuBtn.setAttribute("aria-label", isOpen ? "Fechar Menu" : "Abrir Menu");
    lucide.createIcons();
  });

  document.querySelectorAll(".nav-menu a, .nav-menu .btn-header").forEach(link => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("active");
      const icon = menuBtn.querySelector("i");
      if (icon) {
        icon.setAttribute("data-lucide", "menu");
        lucide.createIcons();
      }
    });
  });
}

/* ==========================================================================
   HEADER SCROLL
   ========================================================================== */

function setupHeaderScroll() {
  const header = document.getElementById("header");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 40) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });
}

/* ==========================================================================
   ANIMAÇÕES DE ENTRADA (REVEAL AO ROLAR)
   ========================================================================== */

function setupScrollAnimations() {
  const seletores = [
    ".section-title",
    ".pillars-grid > *",
    ".services-grid > *",
    ".prices-grid > *",
    ".pre-diagnostico-wrapper",
    ".sobre-grid > *",
    ".sobre-features > *",
    ".coverflow",
    ".reviews-grid > *",
    ".contato-grid > *",
    ".contato-cards > *",
    ".map-info",
    ".map-wrapper",
    ".footer-content > *"
  ];

  const alvos = document.querySelectorAll(seletores.join(","));
  if (!alvos.length || !("IntersectionObserver" in window)) return;

  alvos.forEach((el) => {
    el.classList.add("reveal");
    // Atraso escalonado suave entre os itens da mesma linha
    const indice = Array.prototype.indexOf.call(el.parentElement.children, el);
    el.style.transitionDelay = `${(indice % 6) * 0.08}s`;
  });

  const observador = new IntersectionObserver(
    (entradas) => {
      entradas.forEach((entrada) => {
        if (entrada.isIntersecting) {
          entrada.target.classList.add("visible");
          observador.unobserve(entrada.target);
          // Após o fim da entrada escalonada, zera o atraso para não
          // prejudicar os hovers (instantâneo).
          const atraso = parseFloat(entrada.target.style.transitionDelay || 0);
          setTimeout(() => {
            entrada.target.style.transitionDelay = "0s";
          }, atraso * 1000 + 750);
        }
      });
    },
    { threshold: 0.12 }
  );

  alvos.forEach((el) => observador.observe(el));
}

/* ==========================================================================
   FALLBACK DA LOGO (enquanto o arquivo oficial não for inserido)
   ========================================================================== */

function setupLogoFallback() {
  const fallbackSvg =
    "data:image/svg+xml;charset=utf-8," +
    encodeURIComponent(
      `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
        <rect width="64" height="64" rx="14" fill="#ffffff"/>
        <text x="32" y="30" font-family="Arial" font-size="26" font-weight="900" fill="#111827" text-anchor="middle">I</text>
        <text x="32" y="48" font-family="Arial" font-size="10" font-weight="800" fill="#dc2626" text-anchor="middle">NOVE</text>
      </svg>`
    );

  document.querySelectorAll(".logo-img, .footer-logo").forEach(img => {
    img.addEventListener("error", () => {
      img.src = fallbackSvg;
    }, { once: true });
  });
}

/* ==========================================================================
   INICIALIZAÇÃO
   ========================================================================== */

document.addEventListener("DOMContentLoaded", () => {
  renderServicos();
  renderPrecos();
  renderAvaliacoes();
  renderHorarios();
  setupWhatsAppLinks();
  setupMobileMenu();
  setupCopyEndereco();
  montarCoverflow();
  setupHeaderScroll();
  setupScrollAnimations();
  setupLogoFallback();

  // Recria ícones após render dinâmico
  setTimeout(() => lucide.createIcons(), 50);

  // Configura botão de envio do pré-diagnóstico
  document.getElementById("btnPreDiagnostico").addEventListener("click", enviarPreDiagnostico);
});