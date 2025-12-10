(function () {
  const LOG_ENABLED = true;
  const TEST_ID = "DE23";
  const TEST_NAME = "Cart Page USPs";
  const VARIATION = "variation-1";
  const CURRENT_URL = window.location.href;

  const SELECTORS = {
    CONTROL_MOBILE_CART_TABLE_LINK: '.cart-table .cart-table__details-col > a',
    CONTROL_TABLET_CART_TABLE_LINK: '.cart-table__details-col > div:first-child a',
  }

  const SVG_CHECKMARK = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16 5.5L7.75 13.75L4 10" stroke="#16A34A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;

  const CONTENT_DATA = {
    variation1: [
      {
        text: 'Die Ziehung der Oberbayern Hausverlosung findet am 30. Dezember 2025 statt.'
      },
      {
        text: 'Staatlich lizenzierte Soziallotterie, Ziehung unter notarieller Aufsicht.'
      },
    ],
    variation2: [
      {
        text: 'Die Ziehung der Oberbayern Hausverlosung findet am 30. Dezember 2025 statt.'
      },
      {
        text: 'Staatlich lizenzierte Soziallotterie, Ziehung unter notarieller Aufsicht.'
      },
      {
        text: 'Inkl. Servicegebühren & MwSt.'
      },
    ],
    variation3: [
      {
        text: 'Die Ziehung der Oberbayern Hausverlosung findet am 30. Dezember 2025 statt.'
      },
      {
        text: 'Staatlich lizenzierte Soziallotterie, Ziehung unter notarieller Aufsicht.'
      },
      {
        text: 'Mindestens 21% deiner Ausgaben geht an wohltätige Zwecke.'
      },
      {
        text: 'Inkl. Servicegebühren & MwSt.'
      },
    ]
  }

  const STYLES = `
.ccx-DE23--tablet {
  display: none;
}
.ccx-DE23__item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}
.ccx-DE23__item svg {
  flex-shrink: 0;
}
.ccx-DE23__text {
  font-family: Gellix;
  font-weight: 400;
  font-size: 14px;
  color: #626262;
  line-height: 21px;
  letter-spacing: 0px;
  vertical-align: middle;
  flex: 7;
}

@media screen and (min-width: 768px) {
  .ccx-DE23--mobile {
    display: none;
  }
  .ccx-DE23--tablet {
    display: block;
  }
}
@media screen and (min-width: 992px) {
  .ccx-DE23--mobile {
    display: none;
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
      .catch((error) => {
        console.error('[waitForElements] error:', error);
      });
  }

  const createContainer = function (targetEl, type) {
    if (!targetEl) return;

    type = type || 'mobile';

    var variationKey = VARIATION.replace(/-/g, '');
    var contentList = CONTENT_DATA[variationKey];

    if (!contentList || !Array.isArray(contentList)) {
      customLog('[createContainer] No CONTENT_DATA found for variationKey: ' + variationKey);
      return;
    }

    // Base block name WITHOUT variation
    var baseBlock = 'ccx-' + TEST_ID;

    // Check if container already exists
    // var existing = document.querySelector('.' + baseBlock + '--' + type);
    // if (existing) {
    //   customLog('[createContainer] Container already exists for type "' + type + '", skipping.');
    //   return;
    // }

    // Create outer container
    var container = document.createElement("div");
    container.className =
      baseBlock + ' ' +
      baseBlock + '--' + VARIATION + ' ' +
      baseBlock + '--' + type;

    // Build inner rows
    contentList.forEach(function (item) {
      var row = document.createElement("div");
      row.className = baseBlock + '__item';

      // Insert SVG directly
      row.insertAdjacentHTML('beforeend', SVG_CHECKMARK);

      // Text span
      var textSpan = document.createElement("span");
      textSpan.className = baseBlock + '__text';
      textSpan.textContent = item.text;

      row.appendChild(textSpan);
      container.appendChild(row);
    });

    // Insert after target element
    targetEl.insertAdjacentElement("afterend", container);

    customLog('[createContainer] Injected container:', container);
  };

  const init = () => {
    try {
      customLog(TEST_ID + ' | ' + VARIATION + ' | ' + TEST_NAME);
      customLog('[init] Current URL: ' + CURRENT_URL);

      // Wait for mobile cart table link
      waitForElements(
        [
          { selector: SELECTORS.CONTROL_MOBILE_CART_TABLE_LINK, count: 1 },
        ],
        function (results) {

          addStyles(STYLES, VARIATION);
          addBodyClass();

          const CONTROL_MOBILE_CART_TABLE_LINK = results[0].elements[0];
          if (!CONTROL_MOBILE_CART_TABLE_LINK) return;
          customLog(CONTROL_MOBILE_CART_TABLE_LINK);

          createContainer(CONTROL_MOBILE_CART_TABLE_LINK, 'mobile');
        }
      );

      // Wait for tablet cart table link
      waitForElements(
        [
          { selector: SELECTORS.CONTROL_TABLET_CART_TABLE_LINK, count: 1 },
        ],
        function (results) {

          addStyles(STYLES, VARIATION);
          addBodyClass();

          const CONTROL_TABLET_CART_TABLE_LINK = results[0].elements[0];
          if (!CONTROL_TABLET_CART_TABLE_LINK) return;
          customLog(CONTROL_TABLET_CART_TABLE_LINK);

          createContainer(CONTROL_TABLET_CART_TABLE_LINK, 'tablet');
        }
      );

    } catch (error) {
      customLog(error);
    }
  }

  init();
})();
