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
    var globalHref = href.replace(/\/$/, "") + "/global-search/";
    document
      .querySelectorAll("a.md-header__button.md-logo[href], a.md-nav__button.md-logo[href]")
      .forEach(function (link) {
        link.href = href;
        link.title = "Back to Document Hub";
        link.setAttribute("aria-label", "Back to Document Hub");
      });
    document
      .querySelectorAll("a.oves-global-search-link[href]")
      .forEach(function (link) {
        link.href = globalHref;
        link.title = "Search all docs";
        link.setAttribute("aria-label", "Search all docs");
      });
  }

  function currentLocalSearchQuery() {
    var input = document.querySelector(".md-search__input");
    return input ? String(input.value || "").trim() : "";
  }

  function bindGlobalSearchLinks() {
    document
      .querySelectorAll("a.oves-global-search-link[href]")
      .forEach(function (link) {
        if (link.dataset.ovesGlobalBound === "1") {
          return;
        }
        link.dataset.ovesGlobalBound = "1";
        link.addEventListener("click", function (event) {
          event.preventDefault();
          var target = link.href;
          var query = currentLocalSearchQuery();
          if (query) {
            var url = new URL(target, window.location.href);
            url.searchParams.set("q", query);
            target = url.toString();
          }
          window.location.href = target;
        });
      });
  }

  function start() {
    rewriteLogoLinks();
    bindGlobalSearchLinks();
    if (window.document$ && typeof window.document$.subscribe === "function") {
      window.document$.subscribe(function () {
        rewriteLogoLinks();
        bindGlobalSearchLinks();
      });
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", start, { once: true });
  } else {
    start();
  }
})();
