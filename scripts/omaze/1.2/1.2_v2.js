(function () {
  const LOG_ENABLED = true;
  const TEST_ID = "1-2";
  const TEST_NAME = "Emotional Video on Hero Homepage";
  const VARIATION = "variation-2";
  const CURRENT_URL = window.location.href;
  const MM_LOGO = 'https://cdn-eu.dynamicyield.com/api/9881830/images/5c8c4934af20.png';
  const MM_VIDEO_URL = 'https://cdn.shopify.com/videos/c/o/v/b88b027eb08e4cfb8a15a2a86b0b53ea.mp4';

  const SELECTORS = {
    CONTROL_HERO_VIDEO_ELEMENT: '.campaign-hero-video-container video',
    CONTROL_HERO_LOGO_DESKTOP: '.campaign-hero-overlay .campaign-logo-desktop',
    CONTROL_HERO_LOGO_MOBILE: '.campaign-hero-overlay .campaign-logo-mobile',
  }

  const STYLES = `
    .campaign-hero-overlay .campaign-hero-title {
      display: none !important;
    }
    .campaign-hero-subtext p > br {
      display: none !important;
    }
    .ccx-heading-container {
      margin-bottom: 2rem;
    }
    .ccx-heading-container .ccx-heading-mobile {
      font-family: Showtime;
      font-weight: 500;
      color: #FFFFFF;
      font-size: 71.84px;
      line-height: 100%;
      letter-spacing: 0;
      text-align: center;
      text-transform: uppercase;
      margin: 0;
    }
    .ccx-heading-container .ccx-heading-desktop {
      display: none;
    }
    .ccx-heading-container .ccx-amount {
      font-family: Showtime;
      font-weight: 500;
      color: #FFDD00;
      font-size: 82.11px;
      letter-spacing: 0;
      text-align: center;
      text-transform: uppercase;
      margin: 0;
    }
    .ccx-mm-logo {
      width: 146px;
      margin-bottom: 2rem;
    }
    @media screen and (min-width: 768px) {
      .campaign-hero-overlay {
        top: 0 !important;
      }
      .campaign-hero-subtext {
        display: initial !important;
        margin-bottom: 2rem !important;
      }
      .campaign-hero-cta {
        position: absolute;
        bottom: 2rem;
      }
      .ccx-mm-logo {
        width: 163px;
      }
      .ccx-heading-container {
        display: flex;
        align-items: flex-end;
        gap: 0.75rem;
        white-space: nowrap;
      }
      .ccx-heading-container .ccx-heading-mobile {
        display: none;
      }
      .ccx-heading-container .ccx-heading-desktop {
        display: initial;
        font-family: Showtime;
        font-weight: 500;
        color: white;
        font-size: 60px;
        line-height: 80px;
        text-align: center;
        text-transform: uppercase;
        margin: 0;
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

  const replaceHeroVideoSrc = (videoEl) => {

    videoEl.src = MM_VIDEO_URL;
    videoEl.setAttribute("src", MM_VIDEO_URL);
    videoEl.setAttribute("data-src", MM_VIDEO_URL);

    videoEl.load();

    customLog('[replaceHeroVideoSrc] Video src replaced:', videoEl);
  };

  const init = () => {
    try {
      customLog(TEST_ID + ' | ' + VARIATION + ' | ' + TEST_NAME);
      customLog('[init] Current URL: ' + CURRENT_URL);

      waitForElements(
        [
          { selector: SELECTORS.CONTROL_HERO_LOGO_DESKTOP, count: 1 },
          { selector: SELECTORS.CONTROL_HERO_LOGO_MOBILE, count: 1 },
          { selector: SELECTORS.CONTROL_HERO_VIDEO_ELEMENT, count: 1 },
        ],
        function (results) {

          addStyles(STYLES, VARIATION);
          addBodyClass();

          const CONTROL_HERO_LOGO_DESKTOP = results[0].elements[0];
          customLog(CONTROL_HERO_LOGO_DESKTOP);
          CONTROL_HERO_LOGO_DESKTOP.style.display = 'none';

          const CONTROL_HERO_LOGO_MOBILE = results[1].elements[0];
          customLog(CONTROL_HERO_LOGO_MOBILE);
          CONTROL_HERO_LOGO_MOBILE.style.display = 'none';

          const CONTROL_HERO_VIDEO_ELEMENT = results[2].elements[0];
          customLog(CONTROL_HERO_VIDEO_ELEMENT);
          replaceHeroVideoSrc(CONTROL_HERO_VIDEO_ELEMENT);

          // After CONTROL_HERO_LOGO_MOBILE, create an image element
          const image = document.createElement('img');
          image.src = MM_LOGO;
          image.classList.add('ccx-mm-logo');

          const ccxOmazeLogoExists = document.querySelector('.ccx-mm-logo');
          if (!ccxOmazeLogoExists) {
            CONTROL_HERO_LOGO_MOBILE.insertAdjacentElement('afterend', image);
          }

          const ccxHeadingContainer = document.querySelector('.ccx-heading-container');
          customLog({ ccxHeadingContainer, ccxOmazeLogoExists });
          if (!ccxHeadingContainer && document.querySelector('.ccx-mm-logo')) {
            customLog('hello')
            const ccxContainer = document.createElement('div');
            ccxContainer.classList.add('ccx-heading-container');
            
            const textHeadingMobile = document.createElement('h1');
            textHeadingMobile.classList.add('ccx-heading-mobile');
            textHeadingMobile.textContent = 'Win';
            
            const textHeadingDesktop = document.createElement('h1');
            textHeadingDesktop.classList.add('ccx-heading-desktop');
            textHeadingDesktop.textContent = 'Your chance to win'

            const textAmount = document.createElement('h1');
            textAmount.classList.add('ccx-amount');
            textAmount.textContent = '£1,000,000';

            ccxContainer.appendChild(textHeadingMobile);
            ccxContainer.appendChild(textHeadingDesktop);
            ccxContainer.appendChild(textAmount);
            document.querySelector('.ccx-mm-logo').insertAdjacentElement('afterend', ccxContainer);
          }
        }
      );
    } catch (error) {
      customLog(error);
    }
  }

  init();
})();