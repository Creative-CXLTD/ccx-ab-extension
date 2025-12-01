(function () {
  const LOG_ENABLED = true;
  const TEST_ID = "gro-dream-list";
  const TEST_NAME = "GRO Dream List";
  const VARIATION = "variation-1";
  const CURRENT_URL = window.location.href;

  const SELECTORS = {
    CONTROL_SHOPIFY_SECTION_FIRST: 'main .shopify-section:first-of-type',
  }

  const ASSETS = {
    SKY: `https://cdn.shopify.com/s/files/1/0275/8390/5878/files/Copy_of_RSPCA_SHIELD_WEBSITE.png?v=1762343220`,
    TEN_THOUSAND: `https://cdn-eu.dynamicyield.com/api/9881830/images/d9770e5a7faa.png`,
  }

  const NEWSLETTER_SIGNUP_URL = 'https://omaze.co.uk/pages/newsletter-signup';

  const STYLES = `
    .ccx-dream-list-draw-container {
      background: url(https://cdn-eu.dynamicyield.com/api/9881830/images/0805b8be8e91.jpg) no-repeat center center, #ffffff;
      display: flex;
      flex-flow: column;
      gap: 1rem;
      padding-top: 10px;
      padding-bottom: 26px;
      opacity: 1;
      padding: 2rem 1rem;
    }
    .ccx-dream-list-draw-container__image {
      width: 217px;
      margin: 0 auto;
      margin-bottom: 1rem;
    }
    .ccx-dream-list-draw-container__title {
      font-family: Gellix;
      font-weight: 400;
      font-style: italic;
      color: #FFFCF8;
      font-size: 20px;
      line-height: 15.79px;
      letter-spacing: 0;
      text-align: center;
      vertical-align: middle;
      margin: 0;
    }
    .ccx-dream-list-draw-container__block.ccx-dream-list-draw-container__block--content {
      display: flex;
      flex-flow: column;
      gap: 1rem;
    }
    .ccx-dream-list-draw-container__description {
      font-family: Gellix;
      font-weight: 400;
      color: #FFFCF8;
      font-size: 16px;
      line-height: 20px;
      letter-spacing: 0;
      text-align: center;
      vertical-align: middle;
      margin: 0;
    }
    .ccx-dream-list-draw-container__cta {
      width: 130px;
      min-width: 110px;
      padding-top: 3px;
      padding-right: 16px;
      padding-bottom: 5px;
      padding-left: 16px;
      opacity: 1;
      border-radius: 76px;
      border-width: 2px;
      border: 2px solid #FFFFFF;
      color: #FFFFFF;
      font-size: 16px;
      font-weight: 700;
      margin: 0 auto;
      display: block;
    }

  @media screen and (min-width: 768px) {
    .ccx-dream-list-draw-container {
      flex-flow: row;
      background-size: cover;
    }
    .ccx-dream-list-draw-container__block {
      flex: 1;
    }
    .ccx-dream-list-draw-container__description {
      text-align: left;
    }
    .ccx-dream-list-draw-container__cta {
      margin: inherit;
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

  function createDreamListDrawContainer() {
    // Main container
    var container = document.createElement("div");
    container.className = "ccx-dream-list-draw-container";

    // ------------------------------------
    // FIRST BLOCK
    // ------------------------------------
    var block1 = document.createElement("div");
    block1.className = "ccx-dream-list-draw-container__block ccx-dream-list-draw-container__block--top";

    var img = document.createElement("img");
    img.className = "ccx-dream-list-draw-container__image";
    img.src = ASSETS.TEN_THOUSAND;
    img.alt = "Dream List Draw";

    var title = document.createElement("p");
    title.className = "ccx-dream-list-draw-container__title";
    title.textContent = "Dream List Draw";

    block1.appendChild(img);
    block1.appendChild(title);

    // ------------------------------------
    // SECOND BLOCK
    // ------------------------------------
    var block2 = document.createElement("div");
    block2.className = "ccx-dream-list-draw-container__block ccx-dream-list-draw-container__block--content";

    var desc = document.createElement("p");
    desc.className = "ccx-dream-list-draw-container__description";
    desc.textContent =
      "Opt in to email marketing for your monthly chance to win £10,000. Your email is your entry, and there’s no purchase necessary.";

    var btn = document.createElement("button");
    btn.className = "ccx-dream-list-draw-container__cta";
    btn.textContent = "Sign Up";

    block2.appendChild(desc);
    block2.appendChild(btn);

    // Add both blocks to main container
    container.appendChild(block1);
    container.appendChild(block2);

    // Return finished component
    return container;
  }

  const attachEventListeners = (dreamListElement) => {
    customLog('[attachEventListeners] Attaching event listeners...');
    const cta = dreamListElement.querySelector('.ccx-dream-list-draw-container__cta');;
    if (cta) {
      cta.addEventListener('click', (e) => {
        e.preventDefault();
        window.DY.API("event", {
          name: "gro_dream_list_cta"
        });
        window.location.href = NEWSLETTER_SIGNUP_URL;
      })
    }
  }

  const init = () => {
    try {
      customLog(TEST_ID + ' | ' + VARIATION + ' | ' + TEST_NAME);
      customLog('[init] Current URL: ' + CURRENT_URL);

      waitForElements(
        [
          { selector: SELECTORS.CONTROL_SHOPIFY_SECTION_FIRST, count: 1 },
        ],
        function (results) {

          addStyles(STYLES, VARIATION);
          addBodyClass();

          const CONTROL_SHOPIFY_SECTION_FIRST = results[0].elements[0];
          if (!CONTROL_SHOPIFY_SECTION_FIRST) return;

          customLog(CONTROL_SHOPIFY_SECTION_FIRST);

          console.log('hello');


          console.log(createDreamListDrawContainer);

          // I want to insert the dream list container after the first shopify section
          const dreamListElement = createDreamListDrawContainer();
          console.log(createDreamListDrawContainer);
          CONTROL_SHOPIFY_SECTION_FIRST.insertAdjacentElement('afterend', dreamListElement);

          attachEventListeners(dreamListElement);
        }
      );

    } catch (error) {
      customLog(error);
    }
  }

  init();
})();