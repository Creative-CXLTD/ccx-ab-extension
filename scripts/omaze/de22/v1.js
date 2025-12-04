(function () {
  const LOG_ENABLED = false;
  const TEST_ID = "DE22";
  const TEST_NAME = "Germany Christmas House LP Video";
  const VARIATION = "variation-1"; // <--- Change this value depending on variation

  const SELECTORS = {
    HOME_BANNER_VIDEO: '.home--banner video',
    enterNowButtons: 'a[class*=yellow-btn]'
  };

  const customLog = (...args) => LOG_ENABLED && console.log(...args);

  const waitForElements = (configs, callback) => {
    if (!configs || !window.DYO?.waitForElementAsync) return;
    const promises = configs.map(cfg =>
      DYO.waitForElementAsync(cfg.selector, cfg.count, 100, 150)
        .then(elements => ({ selector: cfg.selector, elements }))
    );
    Promise.all(promises).then(callback);
  };

  // ---------------------------------------
  // 🔥 NEW: Mapping VARIATION → omazeVideos key
  // ---------------------------------------
  const VARIANT_MAP = {
    "variation-1": "variant_a",
    "variation-2": "variant_b",
    "variation-3": "variant_c"
  };

  function getVariantKey() {
    return VARIANT_MAP[VARIATION] || "variant_a";
  }

  // ---------------------------------------
  // 🔥 NEW: Create injected hero video (minimal attrs only)
  // ---------------------------------------
  function createInjectedVideo(src) {
    const video = document.createElement("video");

    // minimal, stable attributes
    video.src = src;
    video.muted = true;
    video.autoplay = true;
    video.loop = true;
    video.playsInline = true;

    video.style.width = "100%";
    video.style.height = "100%";
    video.style.position = "absolute";
    video.style.top = "0";
    video.style.left = "0";
    video.style.zIndex = "2";

    video.setAttribute("data-ccx-injected-video", "true");

    return video;
  }

  // ---------------------------------------
  // 🔥 Replace original video by injecting new one
  // ---------------------------------------
  function injectVideo(originalVideo) {
    if (!window.omazeVideos) {
      console.warn("[injectVideo] No omazeVideos object found");
      return;
    }

    const variantKey = getVariantKey();
    const variantObj = window.omazeVideos[variantKey];

    if (!variantObj) {
      console.warn("[injectVideo] Missing variant key:", variantKey);
      return;
    }

    // Decide mobile/desktop strictly on first load
    const isMobile = window.innerWidth <= 767;
    const finalSrc = isMobile ? variantObj.mobile : variantObj.desktop;

    if (!finalSrc) {
      console.warn("[injectVideo] Missing URL for:", variantKey);
      return;
    }

    customLog("[injectVideo] Final video src:", finalSrc);

    // Prevent duplicate injection
    if (originalVideo.nextElementSibling?.dataset?.ccxInjectedVideo === "true") {
      customLog("[injectVideo] Video already injected");
      return;
    }

    // Hide original video
    originalVideo.style.opacity = "0";
    originalVideo.style.pointerEvents = "none";

    // Inject new video
    const newVideo = createInjectedVideo(finalSrc);
    originalVideo.insertAdjacentElement("afterend", newVideo);

    // Autoplay attempt
    requestAnimationFrame(() => {
      newVideo.play().catch(() => { });
    });
  }

  // ---------------------------------------
  // Attach click analytics
  // ---------------------------------------
  function attachEventListeners(results) {
    const buttonResult = results.find(r => r.selector === SELECTORS.enterNowButtons);
    if (!buttonResult?.elements) return;

    buttonResult.elements.forEach(button => {
      button.addEventListener("click", () => {
        DY?.API("event", { name: "click-home-enter-now-button" });
      });
    });
  }

  // ---------------------------------------
  // INIT
  // ---------------------------------------
  const init = () => {
    customLog(TEST_ID, VARIATION, TEST_NAME);

    waitForElements(
      [
        { selector: SELECTORS.HOME_BANNER_VIDEO, count: 1 },
        { selector: SELECTORS.enterNowButtons, count: 1 },
      ],
      function (results) {
        const videoRes = results.find(r => r.selector === SELECTORS.HOME_BANNER_VIDEO);
        const originalVideo = videoRes?.elements?.[0];

        if (!originalVideo) {
          console.warn("[init] Video element not found");
          return;
        }

        injectVideo(originalVideo);
        attachEventListeners(results);
      }
    );
  };

  init();
})();
