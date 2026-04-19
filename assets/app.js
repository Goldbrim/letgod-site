(function () {
  const currentPath = window.location.pathname.replace(/\/index\.html$/, "/");
  document.querySelectorAll(".menu a").forEach((link) => {
    const href = link.getAttribute("href");
    if (!href) return;
    const isCurrent = currentPath.endsWith(href.replace("./", "")) || currentPath === href;
    if (isCurrent || (href === "index.html" && currentPath.endsWith("/"))) {
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
