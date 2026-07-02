// evaluated in browser
(() => {
  const nav = document.querySelector('[data-testid="nav-logo-img"]');
  const foot = document.querySelector('[data-testid="footer-logo"]');
  const info = (el) => {
    if (!el) return { exists: false };
    const r = el.getBoundingClientRect();
    const cs = getComputedStyle(el);
    return {
      exists: true, tag: el.tagName, src: el.src,
      complete: el.complete, naturalWidth: el.naturalWidth, naturalHeight: el.naturalHeight,
      top: r.top, left: r.left, width: r.width, height: r.height,
      visibility: cs.visibility, opacity: cs.opacity
    };
  };
  return { nav: info(nav), footer: info(foot) };
})();
