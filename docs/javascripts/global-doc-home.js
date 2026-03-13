(function () {
  var cloudHome = "https://docs.omnivoltaic.com/internal/consolidated-docs/";
  var localHome = "http://127.0.0.1:8099/internal/consolidated-docs/";

  function targetUrl() {
    return new Set(["127.0.0.1", "localhost"]).has(window.location.hostname)
      ? localHome
      : cloudHome;
  }

  function rewriteLogoLinks() {
    var href = targetUrl();
    document
      .querySelectorAll("a.md-header__button.md-logo[href], a.md-nav__button.md-logo[href]")
      .forEach(function (link) {
        link.href = href;
        link.title = "Document home";
        link.setAttribute("aria-label", "Document home");
      });
  }

  function start() {
    rewriteLogoLinks();
    if (window.document$ && typeof window.document$.subscribe === "function") {
      window.document$.subscribe(rewriteLogoLinks);
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", start, { once: true });
  } else {
    start();
  }
})();
