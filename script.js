// Sticky navbar: transparent over hero, solid Bone on scroll
(function () {
  const nav = document.getElementById('nav');
  const onScroll = () => {
    nav.classList.toggle('is-scrolled', window.scrollY > 40);
  };
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });
})();

// Booking form: demo-only inline confirmation, no real submission
(function () {
  const form = document.getElementById('bookForm');
  const confirm = document.getElementById('bookConfirm');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
    const name = (document.getElementById('bk-name').value || '').trim();
    const service = document.getElementById('bk-service').value;
    const date = document.getElementById('bk-date').value;

    confirm.textContent =
      `thanks${name ? ', ' + name : ''} — we've noted your request for ${service}` +
      `${date ? ' on ' + date : ''}. we'll call ${'to confirm shortly. (demo only — no booking was sent.)'}`;
    confirm.hidden = false;
    form.reset();
    confirm.focus?.();
  });
})();

// Footer year
document.getElementById('year').textContent = new Date().getFullYear();
