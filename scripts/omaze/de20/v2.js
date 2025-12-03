(function () {
  const LOG_ENABLED = true;
  const TEST_ID = "DE20";
  const TEST_NAME = "Give me the Facts";
  const VARIATION = "variation-2";
  const CURRENT_URL = window.location.href;

  const SELECTORS = {
    CONTROL_SELECTOR_NO_SOURCE_NAV_LATEST_FIRST_CHILD: '#enter-now-material-tab-buttons-design > [id*=nav-latest] > div:first-child',
  }

  const images = {
    imageOne: 'https://cdn-eu.dynamicyield.com/api/9881146/images/440f67879159.png',
    imageTwo: 'https://cdn-eu.dynamicyield.com/api/9881146/images/b50d5c777d26.png',
    heroImage: 'https://cdn-eu.dynamicyield.com/api/9881146/images/257dc8c20d91.jpg',
  }

  const STYLES = `
  #enter-now-material-tab-buttons-design > [id*=nav-latest] [data-tab-container] {
    background: white;
    padding-top: 2rem;
  }
  .ccx-container {
    padding-bottom: 1rem;
    background: white;
  }
  .ccx-main-heading {
    color: #FFFFFF;
    margin: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: Showtime;
    font-weight: 500;
    font-size: 34px;
    line-height: 100%;
    letter-spacing: 0px;
    text-align: center;
    vertical-align: middle;
    text-transform: uppercase;
    background: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)),
      url("https://cdn-eu.dynamicyield.com/api/9881146/images/257dc8c20d91.jpg")
      center / cover no-repeat;
    height: 200px;
    opacity: 1;
    border-bottom-right-radius: 99px;
    border-bottom-left-radius: 99px;
    margin-bottom: 1rem;
  }

  .ccx-content-wrapper {
    display: flex;
    flex-direction: column;
    gap: 16px;
    padding: 0 1rem;
  }

  .ccx-info-item {
    display: flex;
    align-items: center ;
    gap: 0.5rem;
  }

  .ccx-info-icon {
    font-size: 20px;
    line-height: 1;
    background: #F5F5F5;
    width: 35px;
    height: 35px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-basis: 10%;
    border-radius: 50%;
  }

  .ccx-info-text {
    color: #081F28;
    font-family: Gellix;
    font-weight: 400;
    font-size: 14px;
    line-height: 100%;
    letter-spacing: 0px;
    vertical-align: middle;
    flex-basis: 90%;
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
    .ccx-container {
      background: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)),
      url("https://cdn-eu.dynamicyield.com/api/9881146/images/257dc8c20d91.jpg")
      center / cover no-repeat;
      padding: 2rem 0;
      padding-top: 4rem;
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center;
    }
    .ccx-main-heading {
      background: initial;
      height: initial;
      letter-spacing: 0.75px;
      margin-bottom: 2.5rem;
    }
    .ccx-content-wrapper {
      flex-direction: row;
      justify-content: center;
      width: 100%;
    }
    .ccx-info-item {
      flex-flow: column;
      color: #FFFFFF1A;
      border: 1px solid #626262;
      background-color: rgba(98, 98, 98, 0.3);
      backdrop-filter: blur(12px);
      -webkit-backdrop-filter: blur(12px);
      padding: 0.5rem 0.75rem;
      border-radius: 16px;
      max-width: 204px;
    }
    .ccx-info-icon {
      font-size: 20px;
      line-height: 1;
      background: #f5f5f5;
      border-radius: 50%;
      width: 2rem;
      height: 2rem;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .ccx-bottom-section {
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
      width: 190px;
      opacity: 1;
      gap: 1rem;
      padding-top: 8px;
      padding-bottom: 8px;
      border-radius: 16px;
      border-width: 1px;
      border: 1px solid #626262;
      background-color: rgba(98, 98, 98, 0.3);
      backdrop-filter: blur(12px);
      -webkit-backdrop-filter: blur(12px);
      max-width: 190px;
    }
    .ccx-bottom-right {
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      gap: 0;
    }
    .ccx-info-item .ccx-info-text {
      text-align: center;
      font-size: 16px;
      color: #FFFFFF;
    }
    .ccx-image-wrapper {
      width: 86px;
      height: 26px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .ccx-image-wrapper:first-child {
      width: 86px;
      height: 25px;
      border: 0.5px solid #626262;
      background: transparent;
    }
    .ccx-bottom-left h4 {
      font-size: 16px;
      color: #FFFFFF;
    }
    .ccx-bottom-section > .ccx-bottom-right > .ccx-image-wrapper:nth-child(2) > img {
      width: auto;
    }
  }
`;

  const containerData = [
    {
      icon: `
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M15 21V13C15 12.4481 14.5519 12 14 12H10C9.44808 12 9 12.4481 9 13V21" stroke="#081F28" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path
            d="M3 9.99999C2.99986 9.41112 3.25924 8.85211 3.709 8.47199L10.709 2.47199C11.4544 1.84202 12.5456 1.84202 13.291 2.47199L20.291 8.47199C20.7408 8.85211 21.0001 9.41112 21 9.99999V19C21 20.1038 20.1038 21 19 21H5C3.89617 21 3 20.1038 3 19V9.99999"
            stroke="#081F28"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            />
        </svg>`,
      text: 'Gewinne das Landhaus in Oberbayern im Wert von über 2,7 Mio. € - plus 100.000 € Startkapital'
    },
    {
      icon: `
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8 2V6M16 2V6" stroke="#081F28" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M5 4H19C20.1038 4 21 4.89617 21 6V20C21 21.1038 20.1038 22 19 22H5C3.89617 22 3 21.1038 3 20V6C3 4.89617 3.89617 4 5 4V4"
            stroke="#081F28"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            />
          <path d="M3 10H21M8 14H8.01M12 14H12.01M16 14H16.01M8 18H8.01M12 18H12.01M16 18H16.01" stroke="#081F28" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>`,
      text: 'Haus-Verlosung endet am 27/12/2025'
    },
    {
      icon: `
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8 2V6M16 2V6" stroke="#081F28" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M5 4H19C20.1038 4 21 4.89617 21 6V20C21 21.1038 20.1038 22 19 22H5C3.89617 22 3 21.1038 3 20V6C3 4.89617 3.89617 4 5 4V4"
            stroke="#081F28"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path d="M3 10H21M8 14H8.01M12 14H12.01M16 14H16.01M8 18H8.01M12 18H12.01M16 18H16.01" stroke="#081F28" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
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
      'ccx-container'
    );

    // --- NEW: H1 AT THE TOP ---
    const heading = document.createElement('h1');
    heading.classList.add('ccx-main-heading');
    heading.textContent = "Wähle dein Los-Paket";
    ccxContainer.appendChild(heading);

    // --- WRAPPER FOR EXISTING CONTENT ---
    const contentWrapper = document.createElement('div');
    contentWrapper.classList.add(
      'ccx-content-wrapper',
      'w-11/12',
      'max-w-[380px]',
      'mx-auto',
      'lg:max-w-full'
    );

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
