
// Mobile navigation toggle & footer year
(function () {
  // Run after DOM is parsed (defer recommended in HTML)
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.getElementById('site-nav');

  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const isOpen = nav.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', String(isOpen));
    });
  } else {
    // Helps debugging if selectors don't match
    console.warn('Menu toggle or nav not found. Check .menu-toggle button and #site-nav element.');
  }

  // Update year in footer
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
})();
``
