(function () {
  const LOG_ENABLED = true;
  const TEST_ID = "payg-entries-economy-pricing";
  const TEST_NAME = "PAYG Entries Economy Pricing MVT Brief";
  const VARIATION = "variation-2";
  const CURRENT_URL = window.location.href;

  const SELECTORS = {
    // Buttons
    CONTROL_NO_SOURCE_PAYG_CARDS: '#enter-now-material-tab-buttons-design [id*=single-purchase-tab-pane] .add-to-cart-button',
    CONTROL_FACEBOOK_SOURCE_PAYG_CARDS: '#enter-now-legacy-design-without-discount-fb .draw-entry-cards .add-to-cart-button',
    CONTROL_OTHER_SOURCE_SOURCE_PAYG_CARDS: '#enter-now-legacy-design .draw-entry-cards .add-to-cart-button',

    // Scoped entry-counts for each source
    NO_SOURCE_ENTRY_COUNTS: '#enter-now-material-tab-buttons-design [id*=single-purchase-tab-pane] [data-test="entry-count"]',
    FACEBOOK_ENTRY_COUNTS: '#enter-now-legacy-design-without-discount-fb .draw-entry-cards [data-test="entry-count"]',
    OTHER_SOURCE_ENTRY_COUNTS: '#enter-now-legacy-design .draw-entry-cards [data-test="entry-count"]'
  };

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

    const styleClass = 'ccx-styles-' + TEST_ID.toLowerCase() + '-' + variation.toLowerCase().replace(/\s+/g, '-');

    if (document.querySelector('.' + styleClass)) return;

    const style = document.createElement('style');
    style.classList.add(styleClass);
    style.appendChild(document.createTextNode(cssString));
    document.head.appendChild(style);
  };

  const addBodyClass = () => {
    const bodyClass = 'ccx-' + TEST_ID.toLowerCase() + '-' + VARIATION.toLowerCase().replace(/\s+/g, '-');
    if (!document.body.classList.contains(bodyClass)) {
      document.body.classList.add(bodyClass);
      customLog('[init] Added class ' + bodyClass + ' to body');
    }
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
  };

  const handleNoSourcePaygCards = (CONTROL_NO_SOURCE_PAYG_CARDS) => {
    customLog('[handleNoSourcePaygCards] called');

    const entryMap = {
      "20": { newCount: 50, url: "http://omaze.co.uk/cart/43654946816086:1?storefront=true" },
      "45": { newCount: 100, url: "http://omaze.co.uk/cart/43654946848854:1?storefront=true" },
      "85": { newCount: 250, url: "http://omaze.co.uk/cart/43654946881622:1?storefront=true" },
      "320": { newCount: 1000, url: "http://omaze.co.uk/cart/43654946914390:1?storefront=true" }
    };

    CONTROL_NO_SOURCE_PAYG_CARDS.elements.forEach(originalButton => {
      try {
        const card = originalButton.closest("[data-test]");
        if (!card) return;

        const oldAmount = originalButton.getAttribute("data-entries-amount");

        // -----------------------------
        // NEW: HIDE ANY 320 ENTRY CARDS
        // -----------------------------
        if (oldAmount === "320") {
          customLog("[handleCards] Hiding 320-entry card");
          card.setAttribute("style", "display: none !important;");
          return; // Completely skip adjustments for this card
        }
        // -----------------------------

        const mapping = entryMap[oldAmount];
        if (!mapping) return;

        const { newCount, url } = mapping;

        const entryCountEl = card.querySelector('[data-test="entry-count"]');
        if (entryCountEl) {
          entryCountEl.textContent = newCount + ' Entries';
        }

        const isMobileButton =
          originalButton.classList.contains("w-[131px]") ||
          originalButton.classList.contains("h-[43px]");

        const newBtnClass = isMobileButton
          ? "ccx-button-mobile-price"
          : "ccx-button-desktop-price";

        const newButton = document.createElement("button");
        newButton.type = "button";
        newButton.className = originalButton.className + " " + newBtnClass;

        newButton.innerHTML = `
        <span class="btn-text">Buy Now</span>
        <div class="spinner-border" role="status" style="display: none;">
          <span class="sr-only">Loading...</span>
        </div>
      `;

        newButton.addEventListener("click", () => {
          window.location.href = url;
        });

        originalButton.style.display = "none";
        originalButton.insertAdjacentElement("afterend", newButton);

        customLog('[handleCards] Updated card: ' + oldAmount + ' → ' + newCount);
      } catch (err) {
        customLog("[handleCards] Error:", err);
      }
    });
  };

  const init = () => {
    try {
      customLog(TEST_ID + ' | ' + VARIATION + ' | ' + TEST_NAME);
      customLog('[init] Current URL: ' + CURRENT_URL);

      addStyles(STYLES, VARIATION);
      addBodyClass();

      const expectedCount = 8;

      const configs = [
        {
          name: "NO_SOURCE",
          buttonSelector: SELECTORS.CONTROL_NO_SOURCE_PAYG_CARDS,
          countSelector: SELECTORS.NO_SOURCE_ENTRY_COUNTS
        },
        {
          name: "FACEBOOK",
          buttonSelector: SELECTORS.CONTROL_FACEBOOK_SOURCE_PAYG_CARDS,
          countSelector: SELECTORS.FACEBOOK_ENTRY_COUNTS
        },
        {
          name: "OTHER",
          buttonSelector: SELECTORS.CONTROL_OTHER_SOURCE_SOURCE_PAYG_CARDS,
          countSelector: SELECTORS.OTHER_SOURCE_ENTRY_COUNTS
        }
      ];

      configs.forEach(cfg => {
        waitForElements(
          [
            { selector: cfg.buttonSelector, count: expectedCount },
            { selector: cfg.countSelector, count: expectedCount }
          ],
          function (results) {

            customLog('[init] Ready for ' + cfg.name, results);

            const cardResult = results[0];
            const entryCountResult = results[1];

            if (!cardResult || !entryCountResult) {
              customLog('[init] Missing results for ' + cfg.name + '. Skipping.');
              return;
            }

            // Apply handler to each group independently
            handleNoSourcePaygCards(cardResult);
          }
        );
      });

    } catch (error) {
      customLog(error);
    }
  };

  init();
})();
