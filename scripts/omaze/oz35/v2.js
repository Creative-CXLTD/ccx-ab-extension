(function () {
  const LOG_ENABLED = false;
  const TEST_ID = "OZ35";
  const TEST_NAME = "Multi-Video Hero Test on House Landing Page";
  const VARIATION = "variation-2";
  const CURRENT_URL = window.location.href;

  const SELECTORS = {
    HOME_BANNER_VIDEO: '.home--banner video',
    enterNowButtons: 'a[class*=yellow-btn]'
  }

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

  const waitForElements = (configs, callback) => {
    if (!configs || !Array.isArray(configs) || configs.length === 0) return;
    if (!window.DYO || !DYO.waitForElementAsync) return;

    const promises = configs.map(cfg => {
      const { selector, count } = cfg;
      return DYO.waitForElementAsync(selector, count, 100, 150)
        .then(elements => ({ selector, elements }));
    });

    Promise.all(promises)
      .then(results => {
        if (typeof callback === 'function') callback(results);
      })
      .catch(() => { });
  }

  const getAndSetVideoURLForThisVariant = (videoElement, videoKey = 'variant2') => {
    customLog('[getAndSetVideoURLForThisVariant] Starting function...');
    customLog(`[getAndSetVideoURLForThisVariant] Received videoElement:`, videoElement);
    customLog(`Using videoKey:`, videoKey);

    const omazeVideoURLs = window.omazeVideos;
    customLog('[getAndSetVideoURLForThisVariant] window.omazeVideos:', omazeVideoURLs);

    if (!omazeVideoURLs) {
      console.warn('[getAndSetVideoURLForThisVariant] No video URLs object found on window');
      return;
    }

    const videos = omazeVideoURLs[videoKey];
    customLog('[getAndSetVideoURLForThisVariant] URLs for this key (' + videoKey + '):', videos);

    if (!videos) {
      console.warn('[getAndSetVideoURLForThisVariant] No video URLs found for key: ' + videoKey);
      return;
    }

    const isMobile = () => {
      const mobile = window.matchMedia('(max-width: 767px)').matches;
      customLog('[getAndSetVideoURLForThisVariant] isMobile(): ' + mobile);
      return mobile;
    };

    const videoURL = isMobile() ? videos.mobile : videos.desktop;
    customLog('[getAndSetVideoURLForThisVariant] Selected video URL: ' + videoURL);

    if (!videoURL) {
      console.warn('[getAndSetVideoURLForThisVariant] Missing URL for ' + (isMobile() ? 'mobile' : 'desktop'));
      return;
    }

    // Hide the original video
    customLog('[getAndSetVideoURLForThisVariant] Hiding original video...');
    videoElement.style.display = 'none';

    // Create new video element
    customLog('[getAndSetVideoURLForThisVariant] Creating new replacement video element...');
    const newVideo = document.createElement('video');
    newVideo.setAttribute('data-src', videoURL);
    newVideo.setAttribute('style', 'z-index: 1');
    newVideo.setAttribute('width', '100%');
    newVideo.setAttribute('height', '100%');
    newVideo.setAttribute('muted', 'muted');
    newVideo.setAttribute('loop', '');
    newVideo.setAttribute('playsinline', 'playsinline');
    newVideo.setAttribute('autoplay', 'true');
    newVideo.setAttribute('data-embed-responsive', '');
    newVideo.setAttribute('data-width', isMobile() ? '767' : '1920');
    newVideo.src = videoURL;

    customLog('[getAndSetVideoURLForThisVariant] Muting new video explicitly...');
    newVideo.muted = true;

    // Insert new video
    customLog('[getAndSetVideoURLForThisVariant] Inserting new video into DOM...');
    if (!videoElement.parentNode) {
      console.warn('[getAndSetVideoURLForThisVariant] Cannot insert new video, parentNode is missing');
      return;
    }

    videoElement.parentNode.insertBefore(newVideo, videoElement.nextSibling);

    // Load & play
    customLog('[getAndSetVideoURLForThisVariant] Loading video...');
    newVideo.load();

    customLog('[getAndSetVideoURLForThisVariant] Attempting to autoplay video...');
    newVideo.play()
      .then(() => {
        customLog('[getAndSetVideoURLForThisVariant] Autoplay succeeded');
      })
      .catch(err => {
        console.warn('[getAndSetVideoURLForThisVariant] Autoplay failed:', err);
      });

    customLog(
      '[getAndSetVideoURLForThisVariant] New video created (' +
      (isMobile() ? 'mobile' : 'desktop') +
      '): ' + videoURL
    );

    customLog('[getAndSetVideoURLForThisVariant] Function complete.');
    return newVideo;
  };


  function handleResize() {
    const width = window.innerWidth;
    const isMobile = width <= 767;

    customLog('[handleResize] Window width: ' + width + 'px - ' + (isMobile ? 'mobile' : 'desktop'));

    // Find the injected video element
    const originalVideo = document.querySelector(SELECTORS.HOME_BANNER_VIDEO);
    const newVideo = originalVideo?.nextElementSibling;

    if (!newVideo || newVideo.tagName !== 'VIDEO') {
      console.warn('[handleResize] New video element not found');
      return;
    }

    const omazeVideoURLs = window.omazeVideos;
    if (!omazeVideoURLs || !omazeVideoURLs.variant1) {
      console.warn('[handleResize] Video URLs not available');
      return;
    }

    const videoURL = isMobile ? omazeVideoURLs.variant1.mobile : omazeVideoURLs.variant1.desktop;

    // Only update if the URL is different
    if (newVideo.src !== videoURL) {
      newVideo.src = videoURL;
      newVideo.setAttribute('data-src', videoURL);
      newVideo.setAttribute('data-width', isMobile ? '767' : '1920');
      newVideo.muted = true; // Ensure it stays muted
      newVideo.load();
      newVideo.play().catch(err => console.warn('[handleResize] Autoplay failed:', err));
      customLog('[handleResize] Switched to ' + (isMobile ? 'mobile' : 'desktop') + ' video: ' + videoURL);
    }
  }

  const attachEventListeners = (results) => {
    customLog('[attachEventListeners] Attaching event listeners...');

    // results is an array of objects with {selector, elements}
    const buttonResult = results.find(r => r.selector === SELECTORS.enterNowButtons);

    if (!buttonResult || !buttonResult.elements) {
      console.warn('[attachEventListeners] No buttons found');
      return;
    }

    console.log(buttonResult.elements);

    buttonResult.elements.forEach(button => {
      button.addEventListener('click', () => {
        customLog('[attachEventListeners] Enter Now button clicked');
        // send DY custom event
        DY.API("event", {
          name: "click-home-enter-now-button"
        });
      });
    });
  }

  const init = () => {
    try {
      customLog(TEST_ID + ' | ' + VARIATION + ' | ' + TEST_NAME);
      customLog('[init] Current URL: ' + CURRENT_URL);

      waitForElements(
        [
          { selector: SELECTORS.HOME_BANNER_VIDEO, count: 1 },
          { selector: SELECTORS.enterNowButtons, count: 3 },
        ],
        function (results) {
          const styleClass = 'ccx-styles-oz35-' + VARIATION.toLowerCase().replace(/\s+/g, '-');

          if (document.querySelector('.' + styleClass)) return;

          document.body.classList.add(styleClass);
          customLog('[init] Added class ' + styleClass + ' to body');

          const videoResult = results.find(r => r.selector === SELECTORS.HOME_BANNER_VIDEO);
          const HOME_BANNER_VIDEO = videoResult?.elements?.[0];

          if (!HOME_BANNER_VIDEO) {
            console.warn('[init] Video element not found');
            return;
          }

          customLog(HOME_BANNER_VIDEO);
          getAndSetVideoURLForThisVariant(HOME_BANNER_VIDEO, 'variant2');
          attachEventListeners(results);
          handleResize();
        }
      );

    } catch (error) { }
  }

  init();

  // Listen for window resize
  window.addEventListener('resize', handleResize);
})();