(function () {
  const normalizePath = (path) => {
    if (!path) return "/";
    let p = path.replace(/\/index\.html$/, "/");
    if (!p.endsWith("/")) p += "/";
    return p;
  };

  const currentPath = normalizePath(window.location.pathname);
  document.querySelectorAll(".menu a").forEach((link) => {
    const href = link.getAttribute("href");
    if (!href) return;
    const linkPath = normalizePath(new URL(href, window.location.href).pathname);
    if (currentPath === linkPath) {
      link.setAttribute("aria-current", "page");
    }
  });

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  document.querySelectorAll(".reveal").forEach((el) => io.observe(el));

  const yearNode = document.getElementById("year");
  if (yearNode) yearNode.textContent = String(new Date().getFullYear());
})();
