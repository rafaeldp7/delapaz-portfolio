/* =============================================================
   THEME SWITCHER — cycles default → light → dark, persists in LS
   ============================================================= */
(function () {
  const THEMES = ['theme-default', 'theme-light', 'theme-dark'];
  const KEY = 'rdp-theme';

  function apply(theme) {
    document.body.classList.remove(...THEMES);
    document.body.classList.add(theme);
    try { localStorage.setItem(KEY, theme); } catch (e) {}
  }

  // Apply saved theme ASAP
  const saved = (() => { try { return localStorage.getItem(KEY); } catch (e) { return null; } })();
  if (saved && THEMES.includes(saved)) apply(saved);

  document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('themeToggle');
    if (!btn) return;
    btn.addEventListener('click', () => {
      const current = THEMES.find(t => document.body.classList.contains(t)) || THEMES[0];
      const next = THEMES[(THEMES.indexOf(current) + 1) % THEMES.length];
      apply(next);
    });
  });
})();
