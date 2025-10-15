(function () {
  if (!("standalone" in window.navigator && window.navigator.standalone)) {
    return;
  }

  document.addEventListener(
    "click",
    function (event) {
      const anchor = event.target.closest("a");
      if (!anchor) {
        return;
      }

      const href = anchor.getAttribute("href");
      if (!href || href.startsWith("javascript:")) {
        return;
      }

      if (anchor.target && anchor.target.toLowerCase() !== "_self") {
        return;
      }

      const url = new URL(anchor.href, window.location.href);
      if (url.origin !== window.location.origin) {
        return;
      }

      event.preventDefault();
      window.location.href = url.href;
    },
    false
  );
})();
