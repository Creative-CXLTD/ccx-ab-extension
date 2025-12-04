(function () {
  const LOG_ENABLED = true;
  const TEST_ID = "1-2";
  const TEST_NAME = "MM LP Winners Hero Video [Social Proof & Authority]";
  const VARIATION = "variation-2";
  const CURRENT_URL = window.location.href;

  const MM_LOGO = 'https://cdn-eu.dynamicyield.com/api/9881830/images/5c8c4934af20.png';
  const MM_VIDEO_URL = 'https://cdn.shopify.com/videos/c/o/v/b88b027eb08e4cfb8a15a2a86b0b53ea.mp4';

  const SELECTORS = {
    CONTROL_HERO_VIDEO_ELEMENT: '.campaign-hero-video-container video',
    CONTROL_HERO_LOGO_DESKTOP: '.campaign-hero-overlay .campaign-logo-desktop',
    CONTROL_HERO_LOGO_MOBILE: '.campaign-hero-overlay .campaign-logo-mobile',
    CONTROL_HERO_SUBTEXT: '.campaign-hero-overlay .campaign-hero-subtext',
    CONTROL_SECOND_MAIN_CONTAINER: 'main .shopify-section:nth-of-type(2)',
    CONTROL_DESKTOP_HERO_CTA: '.campaign-hero-overlay .campaign-hero-cta'
  }

  const STYLES = `
    main .shopify-section:nth-child(2) .section-text-content {
      max-width: 800px !important;
    }
    .campaign-hero-overlay {
      gap: 2rem !important;
    }
    .campaign-hero-overlay .campaign-logo-desktop {
      width: 220px !important;
      margin-bottom: 0 !important;
    }
    .campaign-hero-overlay .campaign-logo-mobile {
      width: 163px;
      height: 80px;
      margin-bottom: 0 !important;
    }
    .campaign-hero-title {
      margin-bottom: 0 !important;
    }
    .campaign-hero-title h1, .campaign-hero-title h1 .title-weighted-text {
      font-size: 60px !important;
    }
    .campaign-hero-title h1 br {
      display: none !important;
    }
    .campaign-hero-subtext {
      font-weight: 700;
      font-size: 20px !important;
      line-height: 32.84px;
      letter-spacing: 0;
      text-align: center;
    }
    .campaign-hero-subtext br {
      display: none !important;
    }

    /* RESPONSIVE */      
    @media (min-width: 768px) {
      .campaign-hero-subtext {
        display: block !important;
      }
    }

  `;

  const customLog = (...messages) => {
    if (!LOG_ENABLED) return;

    const style = `
    background: linear-gradient(90deg, #6a6971, #2a1f60);
    color: white;
    padding: 4px 8px;
    border-radius: 4px;
  `;

    const parts = [];
    const values = [];

    messages.forEach(msg => {
      if (msg instanceof Element) {
        parts.push("%o");
        values.push(msg);
      } else if (Array.isArray(msg)) {
        msg.forEach(item => {
          if (item instanceof Element) {
            parts.push("%o");
            values.push(item);
          } else if (item && typeof item === "object" && "html" in item) {
            const wrapper = document.createElement("div");
            wrapper.innerHTML = item.html.trim();
            const el = wrapper.firstElementChild;
            parts.push("%o");
            values.push(el);
            const { html, ...rest } = item;
            if (Object.keys(rest).length > 0) {
              parts.push("%O");
              values.push(rest);
            }
          } else {
            parts.push("%O");
            values.push(item);
          }
        });
      } else if (msg && typeof msg === "object" && "html" in msg) {
        const wrapper = document.createElement("div");
        wrapper.innerHTML = msg.html.trim();
        const el = wrapper.firstElementChild;
        parts.push("%o");
        values.push(el);
        const { html, ...rest } = msg;
        if (Object.keys(rest).length > 0) {
          parts.push("%O");
          values.push(rest);
        }
      } else {
        if (typeof msg === "string") {
          parts.push("%c" + msg.toUpperCase());
          values.push(style);
        } else {
          parts.push("%O");
          values.push(msg);
        }
      }
    });

    console.log(parts.join(" "), ...values);
  };

  const addStyles = (cssString = '', variation = 'control') => {
    if (!cssString) return;
    if (!variation) variation = 'control';
    const styleClass = 'ccx-styles-' + TEST_ID.toLowerCase() + '-' + variation.toLowerCase().replace(/\s+/g, '-') + '';

    // if styles for this variation already exist, don't add again
    if (document.querySelector('.' + styleClass)) return;

    const style = document.createElement('style');
    style.classList.add(styleClass);
    style.appendChild(document.createTextNode(cssString));
    document.head.appendChild(style);
  };

  const addBodyClass = () => {
    const bodyClass = 'ccx-' + TEST_ID.toLowerCase() + '-' + VARIATION.toLowerCase().replace(/\s+/g, '-') + '';

    // If the class for this variation already exists, don't add again
    if (!document.body.classList.contains(bodyClass)) {
      document.body.classList.add(bodyClass); // Add class to the body element
      customLog('[init] Added class ' + bodyClass + ' to body');
    }
  }

  const waitForElements = (configs, callback) => {
    if (!configs || !Array.isArray(configs) || configs.length === 0) return;
    if (!window.DYO || !DYO.waitForElementAsync) {
      console.warn('[waitForElements] DYO.waitForElementAsync not available');
      return;
    }

    const promises = configs.map(cfg => {
      const { selector, count } = cfg;
      return DYO.waitForElementAsync(selector, count, 100, 150)
        .then(elements => ({ selector, elements }));
    });

    Promise.all(promises)
      .then(results => {
        if (typeof callback === 'function') callback(results);
      })
      .catch(() => {
        console.error('[waitForElements] error:', err);
      });
  }

  const replaceMobileLogo = () => {
    customLog('[replaceMobileLogo] Replacing mobile logo');
    const CONTROL_HERO_LOGO_MOBILE = document.querySelector(SELECTORS.CONTROL_HERO_LOGO_MOBILE);
    const CONTROL_HERO_LOGO_DESKTOP = document.querySelector(SELECTORS.CONTROL_HERO_LOGO_DESKTOP);
    if (CONTROL_HERO_LOGO_MOBILE) {
      CONTROL_HERO_LOGO_MOBILE.src = MM_LOGO;
    }
    if (CONTROL_HERO_LOGO_DESKTOP) {
      CONTROL_HERO_LOGO_DESKTOP.src = MM_LOGO;
    }
  }

  function createInjectedHeroVideo(src) {
    const video = document.createElement("video");

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

  /**
 * Waits up to `maxWaitMs` for window.MMLPVideos.variant1 to exist.
 * Retries every 250ms via recursive setTimeout.
 */
  function waitForVariant(maxWaitMs = 10000, interval = 250) {
    return new Promise(resolve => {
      const start = Date.now();

      function check() {
        if (window.MMLPVideos && window.MMLPVideos.variant1) {
          return resolve(true);
        }

        if (Date.now() - start >= maxWaitMs) {
          console.warn("[waitForVariant] Timed out waiting for MMLPVideos.variant1");
          return resolve(false);
        }

        setTimeout(check, interval);
      }

      check();
    });
  }

  const replaceHeroVideoSrc = (videoEl, variant = "variant1") => {
    // fallback video URL if something fails
    let fallback = typeof MM_VIDEO_URL !== "undefined" ? MM_VIDEO_URL : "";

    let finalVideoUrl = fallback;

    try {
      const isMobile = window.innerWidth <= 768;

      if (window.MMLPVideos && window.MMLPVideos[variant]) {
        const variantObj = window.MMLPVideos[variant];

        finalVideoUrl = isMobile
          ? (variantObj.mobile || fallback)
          : (variantObj.desktop || fallback);
      }
    } catch (err) {
      console.warn("[replaceHeroVideoSrc] Error reading MMLPVideos:", err);
    }

    // Apply the video URL
    if (finalVideoUrl) {
      videoEl.src = finalVideoUrl;
      videoEl.setAttribute("data-src", finalVideoUrl);
    }

    // Reload and restart video playback
    videoEl.load();

    // Try to autoplay
    const playPromise = videoEl.play();
    if (playPromise !== undefined) {
      playPromise.catch(() => {
        console.warn("Autoplay failed, will rely on user interaction.");
      });
    }

    customLog("[replaceHeroVideoSrc] Video src replaced:", finalVideoUrl);
  };

  const init = () => {
    try {
      customLog(TEST_ID + ' | ' + VARIATION + ' | ' + TEST_NAME);
      customLog('[init] Current URL: ' + CURRENT_URL);

      // Wait for CONTROL_HERO_LOGO_MOBILE to load
      waitForElements(
        [
          { selector: SELECTORS.CONTROL_HERO_LOGO_MOBILE, count: 1 },
        ],
        function (results) {

          addStyles(STYLES, VARIATION);
          addBodyClass();

          const CONTROL_HERO_LOGO_MOBILE = results[0].elements[0];
          if (!CONTROL_HERO_LOGO_MOBILE) return;

          customLog(CONTROL_HERO_LOGO_MOBILE);

          replaceMobileLogo(CONTROL_HERO_LOGO_MOBILE);
        }
      );

      // Wait for CONTROL_HERO_SUBTEXT to load
      waitForElements(
        [
          { selector: SELECTORS.CONTROL_HERO_SUBTEXT, count: 1 },
        ],
        function (results) {

          addStyles(STYLES, VARIATION);
          addBodyClass();

          const CONTROL_HERO_SUBTEXT = results[0].elements[0];
          if (!CONTROL_HERO_SUBTEXT) return;

          customLog(CONTROL_HERO_SUBTEXT);

          replaceMobileLogo(CONTROL_HERO_SUBTEXT);
        }
      );

      // Wait for CONTROL_HERO_VIDEO_ELEMENT to load
      waitForElements(
        [{ selector: SELECTORS.CONTROL_HERO_VIDEO_ELEMENT, count: 1 }],
        async results => {
          const originalVideo = results[0].elements[0];
          if (!originalVideo) return;

          customLog("FOUND ORIGINAL VIDEO:", originalVideo);

          // Prevent double injection
          if (document.querySelector("video[data-ccx-injected-video='true']")) {
            customLog("[HERO] Already injected video — skipping.");
            return;
          }

          // Wait for variant data
          const variantReady = await waitForVariant();
          let finalSrc = MM_VIDEO_URL;

          if (variantReady && window.MMLPVideos?.variant1) {
            const v = window.MMLPVideos.variant1;
            const isMobile = window.innerWidth <= 768;
            finalSrc = isMobile ? v.mobile || MM_VIDEO_URL : v.desktop || MM_VIDEO_URL;
          }

          customLog("[HERO] Final video src:", finalSrc);

          // Hide original video
          originalVideo.style.opacity = "0";
          originalVideo.style.pointerEvents = "none";

          // Inject new video
          const newVideo = createInjectedHeroVideo(finalSrc);
          originalVideo.insertAdjacentElement("afterend", newVideo);

          // Autoplay
          requestAnimationFrame(() => {
            newVideo.play().catch(() => { });
          });
        }
      );

    } catch (error) {
      customLog(error);
    }
  }

  init();
})();
