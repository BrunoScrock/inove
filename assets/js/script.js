/* ==========================================================================
   INOVE MECÂNICA - Configurações Centralizadas
   ========================================================================== */

const INOVE_CONFIG = {
  nome: "Inove",
  segmento: "Mecânica Automotiva",

  // ⚠️ ALTERE AQUI: número do WhatsApp da INOVE (somente números, com DDI + DDD)
  whatsapp: "55XXXXXXXXXXX",

  telefone: "(XX) XXXXX-XXXX",
  endereco: "ENDEREÇO DA INOVE",
  mapsLink: "", // URL do Google Maps (opcional)

  instagram: "URL_DO_INSTAGRAM", // Ex: "https://www.instagram.com/inovemecanica"

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
  { categoria: "Ar-Condicionado", titulo: "Manutenção de Ar-Condicionado", imagem: "assets/images/galeria/arcondicionado-01.jpg", placeholder: "https://images.unsplash.com/photo-1555963967-582e635b4f8c?auto=format&fit=crop&w=800&q=80" },
  { categoria: "Diagnóstico", titulo: "Scanner Automotivo", imagem: "assets/images/galeria/diagnostico-02.jpg", placeholder: "https://images.unsplash.com/photo-1565043666747-69f6646db940?auto=format&fit=crop&w=800&q=80" },
  { categoria: "Oficina", titulo: "Nossa Oficina - Interior", imagem: "assets/images/galeria/oficina-01.jpg", placeholder: "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?auto=format&fit=crop&w=800&q=80" },
  { categoria: "Oficina", titulo: "Nossa Oficina - Elevadores", imagem: "assets/images/galeria/oficina-02.jpg", placeholder: "https://images.unsplash.com/photo-1632823475157-1fcfd82e1c58?auto=format&fit=crop&w=800&q=80" },
  { categoria: "Mecânica", titulo: "Manutenção de Freios", imagem: "assets/images/galeria/mecanica-02.jpg", placeholder: "https://images.unsplash.com/photo-1592202737890-634520a81992?auto=format&fit=crop&w=800&q=80" },
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

// Galeria
function renderGaleria() {
  const grid = document.getElementById("galleryGrid");
  grid.innerHTML = GALERIA.map((item, i) => `
    <div class="gallery-item fade-up" data-categoria="${item.categoria}" style="animation-delay: ${i * 0.03}s;">
      <span class="gallery-category">${item.categoria}</span>
      <img src="${item.imagem}" data-placeholder="${item.placeholder || ''}" alt="${item.titulo}" loading="lazy">
      <div class="gallery-overlay">
        <span>${item.titulo}</span>
      </div>
    </div>
  `).join("");

  // Se a foto local ainda não existir, usa a imagem placeholder automaticamente
  grid.querySelectorAll("img[data-placeholder]").forEach(img => {
    img.addEventListener("error", () => {
      if (img.dataset.placeholder) {
        img.src = img.dataset.placeholder;
        img.removeAttribute("data-placeholder");
      }
    });
  });
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
    ["segunda", "Segunda-feira"],
    ["terca", "Terça-feira"],
    ["quarta", "Quarta-feira"],
    ["quinta", "Quinta-feira"],
    ["sexta", "Sexta-feira"],
    ["sabado", "Sábado"],
    ["domingo", "Domingo"]
  ];
  list.innerHTML = dias.map(([key, label]) => `
    <li class="horarios-item">
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
   FILTROS DA GALERIA
   ========================================================================== */

function setupGalleryFilters() {
  const buttons = document.querySelectorAll(".filter-btn");
  const items = document.querySelectorAll(".gallery-item");

  const normalize = (str) =>
    str.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[-\s]/g, "");

  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      buttons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      const filter = btn.dataset.filter;
      items.forEach(item => {
        const show = filter === "todos" || normalize(item.dataset.categoria) === filter;
        item.classList.toggle("hidden", !show);
      });
    });
  });
}

/* ==========================================================================
   LIGHTBOX
   ========================================================================== */

function setupLightbox() {
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightboxImg");
  const closeBtn = lightbox.querySelector(".lightbox-close");

  document.querySelectorAll(".gallery-item").forEach(item => {
    item.addEventListener("click", () => {
      const img = item.querySelector("img");
      lightboxImg.src = img.src;
      lightboxImg.alt = img.alt;
      lightbox.classList.add("open");
      document.body.style.overflow = "hidden";
    });
  });

  function closeLightbox() {
    lightbox.classList.remove("open");
    document.body.style.overflow = "";
  }

  closeBtn.addEventListener("click", closeLightbox);
  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) closeLightbox();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeLightbox();
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
   ANIMAÇÕES DE SCROLL
   ========================================================================== */

function setupScrollAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll(".fade-up").forEach(el => observer.observe(el));
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
  renderGaleria();
  renderAvaliacoes();
  renderHorarios();
  setupWhatsAppLinks();
  setupMobileMenu();
  setupGalleryFilters();
  setupLightbox();
  setupHeaderScroll();
  setupScrollAnimations();
  setupLogoFallback();

  // Recria ícones após render dinâmico
  setTimeout(() => lucide.createIcons(), 50);

  // Configura botão de envio do pré-diagnóstico
  document.getElementById("btnPreDiagnostico").addEventListener("click", enviarPreDiagnostico);
});