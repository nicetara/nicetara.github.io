
// cxone-init.js

(function (n, u) {
  // Expose the queue function and config on the window
  window.CXoneDfo = n;
  window[n] = window[n] || function () {
    (window[n].q = window[n].q || []).push(arguments);
  };
  window[n].u = u;

  // Dynamically load the CXone module loader
  let e = document.createElement("script");
  e.type = "module";
  e.src = u + "?" + Math.round(Date.now() / 1e3 / 3600); // cache-busting hourly
  document.head.appendChild(e);
})("cxone", "https://web-modules-de-na1.niceincontact.com/loader/1/loader.js");

// Initialize CXone
cxone("init", "5157");

// Initialize Guide
cxone("guide", "init");
