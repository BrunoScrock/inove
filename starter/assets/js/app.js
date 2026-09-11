/* ============================================================
   app.js — Base reutilizável (design system "INOVE")
   Centralize os dados do site em SITE_CONFIG.
   ============================================================ */

const SITE_CONFIG = {
  nome: "Seu Negócio",
  whatsapp: "5500000000000", // DDI + DDD + número, só dígitos
  telefone: "(00) 00000-0000",
  endereco: "Rua Exemplo, 123 - Cidade/UF",
  horario: {
    semana: "08:00 - 18:00",
    sabado: "Fechado",
    domingo: "Fechado"
  }
};

const DIFERENCIAIS = [
  { icon: "shield-check", titulo: "Diferencial 1", descricao: "Descreva o primeiro diferencial do seu negócio." },
  { icon: "clock", titulo: "Diferencial 2", descricao: "Descreva o segundo diferencial do seu negócio." },
  { icon: "badge-check", titulo: "Diferencial 3", descricao: "Descreva o terceiro diferencial do seu negócio." }
];

const SERVICOS = [
  { icon: "wrench", titulo: "Serviço 1", descricao: "Descrição breve do serviço." },
  { icon: "settings", titulo: "Serviço 2", descricao: "Descrição breve do serviço." },
  { icon: "layers", titulo: "Serviço 3", descricao: "Descrição breve do serviço." }
];

/* ============================================================
   UTILITÁRIOS
   ============================================================ */

function buildWhatsAppUrl(message) {
  const encoded = encodeURIComponent(message);
  return `https://api.whatsapp.com/send?phone=${SITE_CONFIG.whatsapp}&text=${encoded}`;
}

function renderCards(gridId, lista) {
  const grid = document.getElementById(gridId);
  if (!grid) return;
  grid.innerHTML = lista.map((s) => `
    <div class="card">
      <div class="card-icon"><i data-lucide="${s.icon}"></i></div>
      <h3>${s.titulo}</h3>
      <p>${s.descricao}</p>
    </div>
  `).join("");
}

/* ============================================================
   MENU MOBILE
   ============================================================ */

function setupMobileMenu() {
  const btn = document.getElementById("mobileMenuBtn");
  const menu = document.getElementById("navMenu");
  if (!btn || !menu) return;

  function alternar(abrir) {
    const entrar = abrir !== undefined ? abrir : !menu.classList.contains("active");
    menu.classList.toggle("active", entrar);
    btn.setAttribute("aria-expanded", String(entrar));
    btn.querySelector("i")?.setAttribute("data-lucide", entrar ? "x" : "menu");
    if (window.lucide) window.lucide.createIcons();
  }

  btn.addEventListener("click", () => alternar());
  menu.querySelectorAll("a").forEach((a) => a.addEventListener("click", () => alternar(false)));
  document.addEventListener("click", (e) => {
    if (!e.target.closest("header")) alternar(false);
  });
}

/* ============================================================
   HEADER — reduz ao rolar
   ============================================================ */

function setupHeaderScroll() {
  const header = document.getElementById("header");
  if (!header) return;
  const onScroll = () => header.classList.toggle("scrolled", window.scrollY > 40);
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
}

/* ============================================================
   REVEAL AO ROLAR
   ============================================================ */

function setupScrollAnimations() {
  const alvos = document.querySelectorAll(".reveal");
  if (!alvos.length || !("IntersectionObserver" in window)) return;
  alvos.forEach((el) => {
    const indice = Array.prototype.indexOf.call(el.parentElement.children, el);
    el.style.transitionDelay = `${(indice % 6) * 0.08}s`;
  });
  const obs = new IntersectionObserver((entradas) => {
    entradas.forEach((entrada) => {
      if (entrada.isIntersecting) {
        entrada.target.classList.add("visible");
        obs.unobserve(entrada.target);
      }
    });
  }, { threshold: 0.12 });
  alvos.forEach((el) => obs.observe(el));
}

/* ============================================================
   INICIALIZAÇÃO
   ============================================================ */

document.addEventListener("DOMContentLoaded", () => {
  renderCards("diferenciaisGrid", DIFERENCIAIS);
  renderCards("servicosGrid", SERVICOS);
  setupMobileMenu();
  setupHeaderScroll();
  setupScrollAnimations();

  // Atribui WhatsApp a todos os links com data-whatsapp
  document.querySelectorAll("[data-whatsapp]").forEach((el) => {
    el.href = buildWhatsAppUrl(el.dataset.whatsapp || "Olá! Vim pelo site e gostaria de atendimento.");
    el.target = "_blank";
    el.rel = "noopener";
  });

  // Recria ícones após render dinâmico
  setTimeout(() => { if (window.lucide) lucide.createIcons(); }, 50);
});