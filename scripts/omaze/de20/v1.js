(function () {
  const LOG_ENABLED = true;
  const TEST_ID = "DE20";
  const TEST_NAME = "Give me the Facts";
  const VARIATION = "variation-1";
  const CURRENT_URL = window.location.href;

  const SELECTORS = {
    CONTROL_SELECTOR_NO_SOURCE_NAV_LATEST_FIRST_CHILD: '#enter-now-material-tab-buttons-design > [id*=nav-latest] > div:first-child',
  }

  const images = {
    imageOne: 'https://cdn-eu.dynamicyield.com/api/9881146/images/440f67879159.png',
    imageTwo: 'https://cdn-eu.dynamicyield.com/api/9881146/images/b50d5c777d26.png',
  }

  const STYLES = `
  .ccx-container {
    padding: 16px;
  }

  .ccx-main-heading {
    color: #1A1A1A;
    margin: 3rem 0 2rem 0;
    font-family: Showtime;
    font-weight: 500;
    font-size: 34px;
    letter-spacing: 0px;
    text-align: center;
    vertical-align: middle;
    text-transform: uppercase;
  }

  .ccx-content-wrapper {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  @media (min-width: 991px) {
    .ccx-container {
      flex-direction: row;
      justify-content: space-between;
    }
    .ccx-content-wrapper {
      flex-direction: row;
      justify-content: center;
      width: 100%;
    }
    .ccx-info-item {
      flex-flow: column;
    }
  }

  .ccx-info-item {
    display: flex;
    align-items: center ;
    gap: 0.5rem;
  }

  .ccx-info-icon {
    font-size: 20px;
    line-height: 1;
  }

  .ccx-info-text {
    color: #081F28;
    font-family: Gellix;
    font-weight: 400;
    font-size: 14px;
    line-height: 100%;
    letter-spacing: 0px;
    vertical-align: middle;
  }

  /* Bottom section */
  .ccx-bottom-section {
    display: flex;
    flex-direction: column;
    gap: 12px;
    padding-top: 12px;
  }

  .ccx-bottom-left h4 {
    margin: 0;
    font-family: Gellix;
    font-weight: 500;
    font-size: 14px;
    letter-spacing: 0px;
    text-align: center;
    vertical-align: middle;
  }

  .ccx-image-wrapper {
    width: 118px;
    height: 36px;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
  }

  .ccx-image-wrapper img {
    max-width: 100%;
    max-height: 100%;
  }

  .ccx-bottom-right {
    display: flex;
    justify-content: center;
  }
  .ccx-image-wrapper:first-child {
    background: #636363;
    border-radius: 0.5rem;
    padding: 0.25rem;
  }
  .ccx-bottom-right img {
    object-fit: contain;
    opacity: 1;
    border-radius: 8px;
    width: 118px;
  }

  @media (min-width: 991px) {
    .ccx-bottom-section {
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
    }
    .ccx-bottom-right {
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      gap: 0.5rem;
    }
    .ccx-info-item {
      max-width: 257px;
    }
    .ccx-info-item .ccx-info-text {
      text-align: center;
      font-size: 16px;
    }
    .ccx-image-wrapper:first-child {
      width: 111px;
      height: 32px;
    }
    .ccx-bottom-left h4 {
      font-size: 18px;
    }
    .ccx-bottom-section > .ccx-bottom-right > .ccx-image-wrapper:nth-child(2) > img {
      width: auto;
    }
  }
`;

  const containerData = [
    {
      icon: `<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="32" height="32" rx="16" fill="#FFDD00"/>
<rect width="32" height="32" rx="16" stroke="#4ADE80"/>
<path d="M19 25V17C19 16.4481 18.5519 16 18 16H14C13.4481 16 13 16.4481 13 17V25" stroke="#081F28" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M7 14C6.99986 13.4111 7.25924 12.8521 7.709 12.472L14.709 6.47199C15.4544 5.84202 16.5456 5.84202 17.291 6.47199L24.291 12.472C24.7408 12.8521 25.0001 13.4111 25 14V23C25 24.1038 24.1038 25 23 25H9C7.89617 25 7 24.1038 7 23V14" stroke="#081F28" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
      text: 'Gewinne das Landhaus in Oberbayern im Wert von über 2,7 Mio. € – plus 100.000 € Startkapital'
    },
    {
      icon: `<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="32" height="32" rx="16" fill="#FFDD00"/>
<rect width="32" height="32" rx="16" stroke="#C084FC"/>
<path d="M12 6V10M20 6V10" stroke="#081F28" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9 8H23C24.1038 8 25 8.89617 25 10V24C25 25.1038 24.1038 26 23 26H9C7.89617 26 7 25.1038 7 24V10C7 8.89617 7.89617 8 9 8V8" stroke="#081F28" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M7 14H25M12 18H12.01M16 18H16.01M20 18H20.01M12 22H12.01M16 22H16.01M20 22H20.01" stroke="#081F28" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
      text: 'Haus-Verlosung endet am 27/12/2025'
    },
    {
      icon: `<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="32" height="32" rx="16" fill="#FFDD00"/>
<rect width="32" height="32" rx="16" stroke="#FB923C"/>
<path d="M14 18.66V20.286C13.9923 20.9828 13.6226 21.6253 13.024 21.982C11.757 22.9204 11.0069 24.4014 11 25.978M18 18.66V20.286C18.0077 20.9828 18.3774 21.6253 18.976 21.982C20.243 22.9204 20.9931 24.4014 21 25.978M22 13H23.5C24.8798 13 26 11.8798 26 10.5C26 9.12021 24.8798 8 23.5 8H22M8 26H24" stroke="#081F28" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10 13C10 16.3115 12.6885 19 16 19C19.3115 19 22 16.3115 22 13V7C22 6.44808 21.5519 6 21 6H11C10.4481 6 10 6.44808 10 7V13M10 13H8.5C7.12021 13 6 11.8798 6 10.5C6 9.12021 7.12021 8 8.5 8H10" stroke="#081F28" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
      text: 'Garantierter Gewinner. Chance: 1 zu allen teilnehmenden Losen'
    },
  ]

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
      .catch((err) => {
        console.error('[waitForElements] error:', err);
      });
  }

  const createNewCCXContainer = (controlFirstChildContainer) => {
    const ccxContainer = document.createElement('div');
    ccxContainer.classList.add(
      'ccx-container',
      'w-11/12',
      'max-w-[380px]',
      'mx-auto',
      'lg:max-w-full'
    );

    // --- NEW: H1 AT THE TOP ---
    const heading = document.createElement('h1');
    heading.classList.add('ccx-main-heading');
    heading.textContent = "Wähle dein Los-Paket";
    ccxContainer.appendChild(heading);

    // --- WRAPPER FOR EXISTING CONTENT ---
    const contentWrapper = document.createElement('div');
    contentWrapper.classList.add('ccx-content-wrapper');

    // --- TOP SECTION: 3 items from containerData ---
    containerData.forEach(item => {
      const infoItem = document.createElement('div');
      infoItem.classList.add('ccx-info-item');

      // SVG wrapper
      const iconWrapper = document.createElement('div');
      iconWrapper.classList.add('ccx-info-icon');
      iconWrapper.innerHTML = item.icon;

      const textSpan = document.createElement('span');
      textSpan.classList.add('ccx-info-text');
      textSpan.textContent = item.text;

      infoItem.appendChild(iconWrapper);
      infoItem.appendChild(textSpan);

      contentWrapper.appendChild(infoItem);
    });

    // --- BOTTOM SECTION ---
    const bottomSection = document.createElement('div');
    bottomSection.classList.add('ccx-bottom-section');

    // Left container (H4)
    const leftContainer = document.createElement('div');
    leftContainer.classList.add('ccx-bottom-left');

    const h4 = document.createElement('h4');
    h4.textContent = "Reguliert durch:";

    leftContainer.appendChild(h4);

    // Right container (2 images)
    const rightContainer = document.createElement('div');
    rightContainer.classList.add('ccx-bottom-right');

    // Wrapper 1
    const imgWrapper1 = document.createElement('div');
    imgWrapper1.classList.add('ccx-image-wrapper');

    const img1 = document.createElement('img');
    img1.src = images.imageOne;
    img1.alt = "image 1";

    imgWrapper1.appendChild(img1);

    // Wrapper 2
    const imgWrapper2 = document.createElement('div');
    imgWrapper2.classList.add('ccx-image-wrapper');

    const img2 = document.createElement('img');
    img2.src = images.imageTwo;
    img2.alt = "image 2";

    imgWrapper2.appendChild(img2);

    // Add wrappers to right container
    rightContainer.appendChild(imgWrapper1);
    rightContainer.appendChild(imgWrapper2);


    bottomSection.appendChild(leftContainer);
    bottomSection.appendChild(rightContainer);

    // Add bottom section into wrapper
    contentWrapper.appendChild(bottomSection);

    // Add wrapper to container
    ccxContainer.appendChild(contentWrapper);

    // Insert BEFORE existing control content
    controlFirstChildContainer.insertAdjacentElement('beforebegin', ccxContainer);
  };

  const removeControlFirstChild = (controlFirstChildContainer) => {
    customLog('[removeControlChildrenOfFirstChildContainer] controlFirstChildContainer:', controlFirstChildContainer);
    if (controlFirstChildContainer) {
      controlFirstChildContainer.style.display = 'none';
    }

    createNewCCXContainer(controlFirstChildContainer);
  }

  const init = () => {
    try {
      customLog(TEST_ID + ' | ' + VARIATION + ' | ' + TEST_NAME);
      customLog('[init] Current URL: ' + CURRENT_URL);

      waitForElements(
        [
          { selector: SELECTORS.CONTROL_SELECTOR_NO_SOURCE_NAV_LATEST_FIRST_CHILD, count: 1 },
        ],
        function (results) {

          addStyles(STYLES, VARIATION);
          addBodyClass();

          const CONTROL_SELECTOR_NO_SOURCE_NAV_LATEST_FIRST_CHILD = results[0].elements[0];
          if (!CONTROL_SELECTOR_NO_SOURCE_NAV_LATEST_FIRST_CHILD) return;
          customLog(CONTROL_SELECTOR_NO_SOURCE_NAV_LATEST_FIRST_CHILD);

          removeControlFirstChild(CONTROL_SELECTOR_NO_SOURCE_NAV_LATEST_FIRST_CHILD);
        }
      );

    } catch (error) {
      customLog(error);
    }
  }

  init();
})();
