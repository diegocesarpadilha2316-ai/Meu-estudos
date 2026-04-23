/* B&F Rações — site.js v2.0 */

/* ── WhatsApp ─────────────────────────────────────────────── */
function redirectWhatsApp(message) {
  const phone = '5541991941780';
  const text = encodeURIComponent(message || 'Olá! Quero saber mais sobre a B&F Rações.');
  window.open(`https://wa.me/${phone}?text=${text}`, '_blank');
}

/* ── Header scroll shadow ─────────────────────────────────── */
(function () {
  const header = document.querySelector('header');
  if (!header) return;
  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 10);
  }, { passive: true });
})();

/* ── Mobile hamburger menu ────────────────────────────────── */
(function () {
  const btn = document.getElementById('hamburger');
  const drawer = document.getElementById('mobile-nav');
  if (!btn || !drawer) return;
  btn.addEventListener('click', () => {
    const open = btn.classList.toggle('open');
    drawer.classList.toggle('open', open);
    btn.setAttribute('aria-expanded', open);
  });
  // Close on link click
  drawer.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      btn.classList.remove('open');
      drawer.classList.remove('open');
      btn.setAttribute('aria-expanded', false);
    });
  });
})();

/* ── Scroll-reveal (fade-up) ──────────────────────────────── */
(function () {
  const els = document.querySelectorAll('.fade-up');
  if (!els.length) return;
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });
  els.forEach(el => io.observe(el));
})();

/* ── Brand filter ─────────────────────────────────────────── */
(function () {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const brandCards = document.querySelectorAll('.brand-card[data-cat]');
  if (!filterBtns.length) return;
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const cat = btn.dataset.filter;
      brandCards.forEach(card => {
        if (cat === 'all' || card.dataset.cat === cat) {
          card.classList.remove('hidden');
        } else {
          card.classList.add('hidden');
        }
      });
    });
  });
})();

/* ── Active nav link ──────────────────────────────────────── */
(function () {
  const path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-menu a, .mobile-nav a').forEach(a => {
    const href = a.getAttribute('href');
    if (href && href !== '#' && path === href) {
      a.classList.add('active');
    }
  });
})();
