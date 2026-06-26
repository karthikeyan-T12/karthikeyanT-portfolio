// ============================================================
// SHARED UTILITIES  —  nav · loader · scroll · theme
// ============================================================

// ── Loader ────────────────────────────────────────────────
function hideLoader() {
  const l = document.getElementById('loader');
  if (l) setTimeout(() => l.classList.add('hidden'), 400);
}
window.addEventListener('load', hideLoader);

// ── Scroll progress ───────────────────────────────────────
function updateProgress() {
  const el = document.getElementById('scroll-progress');
  if (!el) return;
  const h = document.documentElement;
  const pct = (h.scrollTop / (h.scrollHeight - h.clientHeight)) * 100;
  el.style.width = pct + '%';
}
window.addEventListener('scroll', updateProgress, { passive: true });

// ── Back to top ───────────────────────────────────────────
function initBackToTop() {
  const btn = document.getElementById('back-to-top');
  if (!btn) return;
  window.addEventListener('scroll', () => {
    btn.classList.toggle('visible', window.scrollY > 400);
  }, { passive: true });
  btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

// ── Theme toggle ──────────────────────────────────────────
// NOTE: the actual dark/light class is applied as early as possible by a
// tiny inline script in each page's <head> (before CSS loads), so there is
// no flash of the wrong theme on navigation. This function just keeps body
// and html in sync, and wires up the toggle button.
function initTheme() {
  const saved = localStorage.getItem('theme') || 'dark';
  const shouldBeLight = saved === 'light';

  // Sync body class with html class (the inline head script only touches
  // <html> because <body> doesn't exist yet when it runs)
  document.body.classList.toggle('light-mode', shouldBeLight);
  document.documentElement.classList.toggle('light-mode', shouldBeLight);

  // Fade overlay used to mask the swap (created once, reused)
  let fadeEl = document.getElementById('theme-fade');
  if (!fadeEl) {
    fadeEl = document.createElement('div');
    fadeEl.id = 'theme-fade';
    document.body.appendChild(fadeEl);
  }

  document.querySelectorAll('.theme-toggle').forEach(btn => {
    updateToggleIcon(btn);
    btn.addEventListener('click', () => {
      const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

      if (reduceMotion) {
        document.body.classList.toggle('light-mode');
        document.documentElement.classList.toggle('light-mode', document.body.classList.contains('light-mode'));
      } else {
        document.body.classList.add('theme-transitioning');
        fadeEl.classList.add('active');
        requestAnimationFrame(() => {
          document.body.classList.toggle('light-mode');
          document.documentElement.classList.toggle('light-mode', document.body.classList.contains('light-mode'));
          setTimeout(() => fadeEl.classList.remove('active'), 60);
          setTimeout(() => document.body.classList.remove('theme-transitioning'), 500);
        });
      }

      const isDark = !document.body.classList.contains('light-mode');
      localStorage.setItem('theme', isDark ? 'dark' : 'light');
      document.querySelectorAll('.theme-toggle').forEach(updateToggleIcon);
    });
  });
}
function updateToggleIcon(btn) {
  btn.textContent = document.body.classList.contains('light-mode') ? '🌙' : '☀️';
  btn.setAttribute('aria-label', 'Toggle color mode');
}

// ── Active nav link ───────────────────────────────────────
function setActiveNav() {
  const path = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a, .mobile-nav a').forEach(a => {
    const href = a.getAttribute('href').split('/').pop();
    a.classList.toggle('active', href === path || (path === 'index.html' && href === 'index.html'));
  });
}

// ── Mobile nav ────────────────────────────────────────────
function initMobileNav() {
  const ham = document.querySelector('.hamburger');
  const mob = document.querySelector('.mobile-nav');
  if (!ham || !mob) return;
  ham.addEventListener('click', () => {
    ham.classList.toggle('open');
    mob.classList.toggle('open');
  });
  mob.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    ham.classList.remove('open');
    mob.classList.remove('open');
  }));
}

// ── Reveal on scroll ──────────────────────────────────────
function initReveal() {
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); } });
  }, { threshold: 0.12 });
  document.querySelectorAll('.reveal').forEach(el => obs.observe(el));
}

// ── Progress bars ─────────────────────────────────────────
function initProgressBars() {
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        const fill = e.target.querySelector('.progress-fill');
        if (fill) fill.style.width = fill.dataset.level + '%';
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.4 });
  document.querySelectorAll('.progress-bar').forEach(b => obs.observe(b));
}

// ── Canvas particle background (hero) ─────────────────────
function initParticles(canvasId) {
  const canvas = document.getElementById(canvasId);
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let W, H, particles = [];

  function resize() {
    W = canvas.width = canvas.offsetWidth;
    H = canvas.height = canvas.offsetHeight;
  }
  resize();
  window.addEventListener('resize', resize);

  class Particle {
    constructor() { this.reset(); }
    reset() {
      this.x = Math.random() * W;
      this.y = Math.random() * H;
      this.vx = (Math.random() - 0.5) * 0.4;
      this.vy = (Math.random() - 0.5) * 0.4;
      this.r = Math.random() * 1.5 + 0.5;
      this.alpha = Math.random() * 0.5 + 0.1;
    }
    update() {
      this.x += this.vx; this.y += this.vy;
      if (this.x < 0 || this.x > W || this.y < 0 || this.y > H) this.reset();
    }
    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(16,185,129,${this.alpha})`;
      ctx.fill();
    }
  }

  const COUNT = Math.min(80, Math.floor((W * H) / 14000));
  for (let i = 0; i < COUNT; i++) particles.push(new Particle());

  function drawLines() {
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.hypot(dx, dy);
        if (dist < 120) {
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = `rgba(16,185,129,${0.06 * (1 - dist / 120)})`;
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
      }
    }
  }

  function loop() {
    ctx.clearRect(0, 0, W, H);
    particles.forEach(p => { p.update(); p.draw(); });
    drawLines();
    requestAnimationFrame(loop);
  }
  loop();
}

// ── Build shared nav HTML ──────────────────────────────────
function buildNav(root = '') {
  const pages = [
    { href: `${root}index.html`, label: 'Home' },
    { href: `${root}pages/about.html`, label: 'About' },
    { href: `${root}pages/projects.html`, label: 'Projects' },
    { href: `${root}pages/journey.html`, label: 'Journey' },
    { href: `${root}pages/resume.html`, label: 'Resume' },
    { href: `${root}pages/contact.html`, label: 'Contact' },
  ];
  const links = pages.map(p => `<li><a href="${p.href}">${p.label}</a></li>`).join('');
  const mobileLinks = pages.map(p => `<a href="${p.href}">${p.label}</a>`).join('');
  return `
  <div id="scroll-progress"></div>
  <nav>
    <div class="nav-inner">
      <a href="${root}index.html" class="nav-logo">K<span>T</span></a>
      <ul class="nav-links">${links}</ul>
      <div class="nav-actions">
        <button class="theme-toggle" aria-label="Toggle theme">☀️</button>
        <button class="hamburger" aria-label="Menu">
          <span></span><span></span><span></span>
        </button>
      </div>
    </div>
  </nav>
  <div class="mobile-nav">${mobileLinks}</div>`;
}

// ── Build shared footer HTML ──────────────────────────────
function buildFooter(root = '') {
  const d = PORTFOLIO_DATA;
  return `
  <footer>
    <div class="container">
      <div class="footer-grid">
        <div class="footer-brand">
          <span class="nav-logo" style="font-family:var(--font-display);font-size:1.2rem;font-weight:700">K<span style="color:var(--emerald)">T</span></span>
          <p>Computer Science (IoT) student building software and exploring connected systems.</p>
        </div>
        <div class="footer-col">
          <h4>Pages</h4>
          <ul>
            <li><a href="${root}index.html">Home</a></li>
            <li><a href="${root}pages/about.html">About</a></li>
            <li><a href="${root}pages/projects.html">Projects</a></li>
            <li><a href="${root}pages/journey.html">Journey</a></li>
            <li><a href="${root}pages/resume.html">resume</a></li>
            <li><a href="${root}pages/contact.html">Contact</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>Connect</h4>
          <ul>
            <li><a href="mailto:${d.email}">Email</a></li>
            <li><a href="${d.github}" target="_blank" rel="noopener">GitHub</a></li>
            <li><a href="${d.linkedin}" target="_blank" rel="noopener">LinkedIn</a></li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <p>© ${new Date().getFullYear()} ${d.name}. Built with care </p>
        <p style="color:var(--emerald);font-size:0.78rem;font-family:var(--font-mono)">// open to opportunities</p>
      </div>
    </div>
  </footer>
  <button id="back-to-top" aria-label="Back to top">↑</button>`;
}

// ── Init all shared ───────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  setActiveNav();
  initMobileNav();
  initReveal();
  initProgressBars();
  initBackToTop();
  document.querySelector('main')?.classList.add('page-fade');
});
