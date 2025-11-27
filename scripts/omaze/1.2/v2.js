(function () {
  const LOG_ENABLED = true;
  const TEST_ID = "1-2";
  const TEST_NAME = "MM LP Winners Hero Video [Social Proof & Authority]";
  const VARIATION = "variation-2";
  const CURRENT_URL = window.location.href;

  const MM_LOGO = 'https://cdn-eu.dynamicyield.com/api/9881830/images/5c8c4934af20.png';
  const MM_VIDEO_URL = 'https://cdn.shopify.com/videos/c/o/v/b88b027eb08e4cfb8a15a2a86b0b53ea.mp4';
  const SVG_ARROW_LEFT = `<svg width="7" height="13" viewBox="0 0 7 13" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.82747 6.50414L6.75663 1.47199C6.92428 1.30083 7.00532 1.09829 6.99973 0.864366C6.99414 0.630445 6.90752 0.427904 6.73986 0.256742C6.5722 0.0855808 6.37381 0 6.14467 0C5.91554 0 5.71714 0.0855808 5.54949 0.256742L0.402379 5.52852C0.268252 5.66545 0.167658 5.81949 0.100595 5.99066C0.0335312 6.16182 0 6.33298 0 6.50414C0 6.6753 0.0335312 6.84646 0.100595 7.01763C0.167658 7.18879 0.268252 7.34283 0.402379 7.47976L5.56625 12.7515C5.73391 12.9227 5.92951 13.0054 6.15306 12.9997C6.3766 12.994 6.5722 12.9056 6.73986 12.7344C6.90752 12.5633 6.99135 12.3607 6.99135 12.1268C6.99135 11.8929 6.90752 11.6903 6.73986 11.5192L1.82747 6.50414Z" fill="white"/>
</svg>`;

  const SVG_ARROW_RIGHT = `<svg width="7" height="13" viewBox="0 0 7 13" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.17253 6.50414L0.243375 1.47199C0.0757166 1.30083 -0.00531819 1.09829 0.000270416 0.864366C0.00585902 0.630445 0.0924824 0.427904 0.260141 0.256742C0.427799 0.0855808 0.626194 0 0.855327 0C1.08446 0 1.28286 0.0855808 1.45051 0.256742L6.59762 5.52852C6.73175 5.66545 6.83234 5.81949 6.89941 5.99066C6.96647 6.16182 7 6.33298 7 6.50414C7 6.6753 6.96647 6.84646 6.89941 7.01763C6.83234 7.18879 6.73175 7.34283 6.59762 7.47976L1.43375 12.7515C1.26609 12.9227 1.07049 13.0054 0.846944 12.9997C0.6234 12.994 0.427799 12.9056 0.260141 12.7344C0.0924824 12.5633 0.00865333 12.3607 0.00865333 12.1268C0.00865333 11.8929 0.0924824 11.6903 0.260141 11.5192L5.17253 6.50414Z" fill="white"/>
</svg>
`;

  const TESTIMONIAL_IMAGE_URL = `https://cdn-eu.dynamicyield.com/api/9881830/images/88a919c5cf4c.jpg`;

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
        [
          { selector: SELECTORS.CONTROL_HERO_VIDEO_ELEMENT, count: 1 },
        ],
        function (results) {

          addStyles(STYLES, VARIATION);
          addBodyClass();

          console.log(results);

          // SECOND .shopify-section
          const CONTROL_HERO_VIDEO_ELEMENT = results[0].elements[0];
          if (!CONTROL_HERO_VIDEO_ELEMENT) {
            customLog("CONTROL_HERO_VIDEO_ELEMENT NOT found");
            return;
          }

          customLog("FOUND CONTROL_HERO_VIDEO_ELEMENT:", CONTROL_HERO_VIDEO_ELEMENT);

          replaceHeroVideoSrc(CONTROL_HERO_VIDEO_ELEMENT);
        }
      );

    } catch (error) {
      customLog(error);
    }
  }

  init();
})();