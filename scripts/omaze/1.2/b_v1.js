(function () {
  const LOG_ENABLED = true;
  const TEST_ID = "1-2";
  const TEST_NAME = "MM LP Winners Hero Video [Social Proof & Authority]";
  const VARIATION = "variation-1";
  const CURRENT_URL = window.location.href;

  const MM_VIDEO_URL = 'https://cdn.shopify.com/videos/c/o/v/b88b027eb08e4cfb8a15a2a86b0b53ea.mp4';
  const SELECTORS = {
    CONTROL_HERO_VIDEO_ELEMENT: '.campaign-hero-video-container video',
  }

  const STYLES = ``;

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

  function createInjectedHeroVideo(src) {
    const video = document.createElement("video");

    video.src = src;
    video.muted = true;
    video.autoplay = true;
    video.loop = true;
    video.playsInline = true;

    // Match original dimensions
    video.style.width = "100%";
    video.style.height = "100%";
    video.style.zIndex = "2"; // Above original video
    video.style.position = "absolute";
    video.style.top = "0";
    video.style.left = "0";

    video.setAttribute("data-ccx-injected-video", "true");
    return video;
  }

  /**
 * Waits up to `maxWaitMs` for window.MMLPVideos.variant1 to exist.
 * If not found, retries every 250ms (recursive setTimeout).
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

  const init = () => {
    try {
      customLog(TEST_ID + ' | ' + VARIATION + ' | ' + TEST_NAME);
      customLog('[init] Current URL: ' + CURRENT_URL);

      // Wait for CONTROL_HERO_VIDEO_ELEMENT to load
      waitForElements(
        [{ selector: SELECTORS.CONTROL_HERO_VIDEO_ELEMENT, count: 1 }],
        async function (results) {

          // addStyles(STYLES, VARIATION);
          addBodyClass();

          const CONTROL_HERO_VIDEO_ELEMENT = results[0].elements[0];
          if (!CONTROL_HERO_VIDEO_ELEMENT) {
            customLog("CONTROL_HERO_VIDEO_ELEMENT NOT found");
            return;
          }

          customLog("FOUND CONTROL_HERO_VIDEO_ELEMENT:", CONTROL_HERO_VIDEO_ELEMENT);

          // Ensure we never double-inject
          if (document.querySelector("video[data-ccx-injected-video='true']")) {
            customLog("[HERO VIDEO] Already injected — skipping.");
            return;
          }

          const variantReady = await waitForVariant(10000);

          let finalSrc = MM_VIDEO_URL; // default fallback

          if (variantReady && window.MMLPVideos?.variant1) {
            const v = window.MMLPVideos.variant1;
            const isMobile = window.innerWidth <= 768;

            finalSrc = isMobile ? (v.mobile || MM_VIDEO_URL) : (v.desktop || MM_VIDEO_URL);
          }

          customLog("[HERO VIDEO] Injecting new video with src:", finalSrc);

          // Hide original video
          CONTROL_HERO_VIDEO_ELEMENT.style.opacity = "0";
          CONTROL_HERO_VIDEO_ELEMENT.style.pointerEvents = "none";

          // Create injected video
          const newVideo = createInjectedHeroVideo(finalSrc);

          // Insert right after original video
          CONTROL_HERO_VIDEO_ELEMENT.insertAdjacentElement("afterend", newVideo);

          // Attempt autoplay
          requestAnimationFrame(() => {
            newVideo.play().catch(() => console.warn("[HERO VIDEO] Autoplay blocked"));
          });
        }
      );


    } catch (error) {
      customLog(error);
    }
  }

  init();
})();
