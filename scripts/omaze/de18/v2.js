(function () {
  const LOG_ENABLED = true;
  const TEST_ID = "de18";
  const TEST_NAME = "Winner content on Homepage";
  const VARIATION = "variation-2";
  const CURRENT_URL = window.location.href;

  const SELECTORS = {
    CONTROL_MOBILE_SECTION_LIVE_RENT_SELL: '.shopify-section.home-marquee-section',
    CONTROL_DESKTOP_SECTION_LIVE_RENT_SELL: '.shopify-section[id*="campaign-hero"]',
  }

  // Note in the designs the cards' content doesn't match for some cards between mobile and desktop
  const CONTENT_DATA = {
    heading: 'UNSERE GEWINNER',
    subHeading: 'Could you be our next winners?',
    buttonText: 'Jetzt mitmachen',
    cardsData: [{
      videoUrl: 'https://youtu.be/Jjxgaq84lig',
      image: 'https://cdn-eu.dynamicyield.com/api/9881146/images/5e51fc53972b.jpg',
      labels: [{
        title: 'Alpen-Haus 2025',
        amount: '2,8 Mio. €'
      },
      {
        title: 'GEWONNEN FÜR',
        amount: '25€'
      },
      ],
      date: {
        month: 'November',
        year: '2025'
      },
      cardTitle: 'JONAS G. - GEWINNER VOM ALPEN-HAUS',
      cardCopy: '"Genau in dieser Gegend wollten wir eigentlich Urlaub machen - und jetzt besitze ich hier ein Haus. Es ist einfach unglaublich!"',
    },
    {
      videoUrl: 'https://youtu.be/iqUZ4PwjqJk',
      image: 'https://cdn-eu.dynamicyield.com/api/9881146/images/5f44d099c6b7.jpg',
      labels: [{
        title: 'Plauer See-Haus 2025',
        amount: '2,5 Mio. €'
      },
      {
        title: 'GEWONNEN FÜR',
        amount: '25€'
      },
      ],
      date: {
        month: 'August',
        year: '2025'
      },
      cardTitle: 'BURAK B. - GEWINNER VOM HAUS AM PLAUER SEE',
      cardCopy: '"Wir hatten ein gutes Leben. Jetzt haben wir das perfekte Zuhause - und keine Sorgen mehr."',
    },
    {
      videoUrl: 'https://youtu.be/EPjqmbCtpCQ',
      image: 'https://cdn-eu.dynamicyield.com/api/9881146/images/28164b4a38bf.jpg',
      labels: [{
        title: 'Mercedes amg gt 63',
        amount: '200.000 €'
      },
      {
        title: 'GEWONNEN FÜR',
        amount: '25€'
      },
      ],
      date: {
        month: 'OKTOBER',
        year: '2025'
      },
      cardTitle: 'FANNY - GEWINNERIN DES MERCEDES AMG GT63',
      cardCopy: '"Ich habe noch nie etwas so Großes gewonnen. Ich konnte es kaum glauben, als ich die Nachricht bekam. Ein Gewinn wie dieser ist etwas, wovon man nur träumen kann - und jetzt steht dieses Traumauto einfach vor meiner Tür."',
    },
    {
      videoUrl: 'https://youtu.be/BVE4clYBz78',
      image: 'https://cdn-eu.dynamicyield.com/api/9881146/images/323b9f082ba9.jpg',
      labels: [{
        title: 'PORSCHE MACAN 4S',
        amount: '90.000 €'
      },
      {
        title: 'GEWONNEN FÜR',
        amount: '25€'
      },
      ],
      date: {
        month: 'SEPTEMBER',
        year: '2025'
      },
      cardTitle: 'RAINER - GEWINNER DES PORSCHE MACAN 4S',
      cardCopy: '"Zuerst war ich etwas skeptisch und dachte: Das kann nicht echt sein - das ist bestimmt ein Scherz. Aber dann hatte ich schnell ein gutes Gefühl bei Omaze. Und als das Team mit dem Porsche vor meiner Tür stand - das war überwältigend."',
    },
    {
      videoUrl: 'https://youtu.be/b5LLVBAxoJg',
      image: 'https://cdn-eu.dynamicyield.com/api/9881146/images/fdbc17617185.png',
      labels: [{
        title: 'BONUS-VERLOSUNG',
        amount: '200.000 €'
      },
      {
        title: 'GEWONNEN FÜR',
        amount: '25€'
      },
      ],
      date: {
        month: 'Juli',
        year: '2025'
      },
      cardTitle: 'RENÉ - GEWINNER VON 200.000 €',
      cardCopy: '"Am Anfang fühlt es sich sehr unwirklich an, besonders wenn man noch nie mit solchen Geldbeträgen zu tun hatte. Gleichzeitig ist man unglaublich stolz, gewonnen zu haben. Danke, Omaze."',
    },
    {
      videoUrl: 'https://youtu.be/BM2QL-dnj9A',
      image: 'https://cdn-eu.dynamicyield.com/api/9881146/images/216a620c6379.jpg',
      labels: [{
        title: 'PORSCHE 911',
        amount: '200.000 €'
      },
      {
        title: 'GEWONNEN FÜR',
        amount: '25€'
      },
      ],
      date: {
        month: 'Juli',
        year: '2025'
      },
      cardTitle: 'JOHANNES - GEWINNER DES PORSCHE 911',
      cardCopy: '"Ich kann es immer noch kaum glauben. Meine Hotelgäste fahren normalerweise Autos wie dieses - und jetzt sitze ich selbst am Steuer eines Porsche 911. Meine Oma bekommt die erste Spritztour!"',
    },
    ]
  }

  /*
  Alpine Winner - https://youtu.be/Jjxgaq84lig
  Audi SQ7 Winner - https://youtu.be/FqeXh-A96Pw
  Mercedes AMG Winner - https://youtu.be/EPjqmbCtpCQ
  Porsche Macan Winner - https://youtu.be/BVE4clYBz78
  Land Rover Winner - https://youtu.be/ZXnm9an20vo
  Rene 200.000 Winner - https://youtu.be/b5LLVBAxoJg
  BMW 420i Winner - https://youtu.be/DML0L2cGFKQ
  Audi RS6 Winner - https://youtu.be/48rgB0Eem6w
  Peter 200.000 Winner - https://youtu.be/11SgE0Zr1Uc
  Porsche 911 Winner - https://youtu.be/BM2QL-dnj9A
  Plauer See Haus Winner - https://youtu.be/iqUZ4PwjqJk
  */

  const SVG_PLAY_BUTTON = `<svg width="58" height="56" viewBox="0 0 58 56" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M22.4475 36.1418C22.4477 36.4131 22.5212 36.6793 22.6606 36.9127C22.8 37.146 22.9999 37.3379 23.2396 37.4683C23.4793 37.5987 23.7499 37.6628 24.0231 37.6538C24.2963 37.6448 24.5621 37.5632 24.7926 37.4174L38.6264 28.6783C39.5669 28.0825 39.5669 26.7183 38.6264 26.124L24.7926 17.3849C24.5621 17.2395 24.2965 17.1582 24.0236 17.1495C23.7506 17.1407 23.4803 17.2049 23.2408 17.3352C23.0014 17.4655 22.8016 17.6573 22.6623 17.8904C22.523 18.1235 22.4494 18.3895 22.4491 18.6605V36.1418H22.4475ZM29.0595 54.4554C25.3334 54.4554 21.8127 53.7445 18.4957 52.3243C15.2517 50.953 12.3018 48.9788 9.80509 46.508C7.31518 44.0305 5.32573 41.1032 3.94395 37.884C2.51276 34.5925 1.79639 31.0987 1.79639 27.4011C1.79639 23.6585 2.51276 20.1414 3.94395 16.8498C5.37514 13.5583 7.3299 10.696 9.80666 8.26004C12.2834 5.82559 15.1787 3.89826 18.4957 2.47804C21.8127 1.05781 25.335 0.346924 29.0611 0.346924C32.8311 0.346924 36.3754 1.05781 39.6923 2.47804C43.0093 3.89826 45.8952 5.82559 48.3484 8.26004C50.8017 10.696 52.7455 13.5583 54.1766 16.8498C55.6078 20.1414 56.3242 23.6585 56.3242 27.4011C56.3242 31.0987 55.6078 34.5925 54.1766 37.8856C52.7455 41.1756 50.8017 44.0503 48.3484 46.508C45.8952 48.9658 43.0093 50.904 39.6923 52.3258C36.3754 53.7445 32.8311 54.4554 29.0595 54.4554Z" fill="#FFDD00"/>
</svg>`;

  const SVG_ICON_ARROW_LEFT = `<svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_d_7262_1972)">
<rect width="40" height="40" rx="20" transform="matrix(-1 0 0 1 52 8)" fill="white" shape-rendering="crispEdges"/>
<path d="M36.0603 37.5459C36.3415 37.2646 36.4995 36.8832 36.4995 36.4854C36.4995 36.0877 36.3415 35.7062 36.0603 35.4249L28.6353 27.9999L36.0603 20.5749C36.3336 20.292 36.4848 19.9131 36.4813 19.5198C36.4779 19.1265 36.3202 18.7503 36.0421 18.4722C35.7639 18.1941 35.3877 18.0363 34.9944 18.0329C34.6011 18.0295 34.2222 18.1807 33.9393 18.4539L25.4538 26.9394C25.1726 27.2207 25.0147 27.6022 25.0147 27.9999C25.0147 28.3977 25.1726 28.7791 25.4538 29.0604L33.9393 37.5459C34.2206 37.8271 34.6021 37.9851 34.9998 37.9851C35.3976 37.9851 35.779 37.8271 36.0603 37.5459Z" fill="black"/>
</g>
<defs>
<filter id="filter0_d_7262_1972" x="0" y="0" width="64" height="64" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="4"/>
<feGaussianBlur stdDeviation="6"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_7262_1972"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_7262_1972" result="shape"/>
</filter>
</defs>
</svg>
`;

  const SVG_ICON_ARROW_RIGHT = `<svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_d_7262_1977)">
<rect x="12" y="8" width="40" height="40" rx="20" fill="white" shape-rendering="crispEdges"/>
<path d="M27.9397 37.5459C27.6585 37.2646 27.5005 36.8832 27.5005 36.4854C27.5005 36.0877 27.6585 35.7062 27.9397 35.4249L35.3647 27.9999L27.9397 20.5749C27.6664 20.292 27.5152 19.9131 27.5187 19.5198C27.5221 19.1265 27.6798 18.7503 27.9579 18.4722C28.2361 18.1941 28.6123 18.0363 29.0056 18.0329C29.3989 18.0295 29.7778 18.1807 30.0607 18.4539L38.5462 26.9394C38.8274 27.2207 38.9853 27.6022 38.9853 27.9999C38.9853 28.3977 38.8274 28.7791 38.5462 29.0604L30.0607 37.5459C29.7794 37.8271 29.3979 37.9851 29.0002 37.9851C28.6024 37.9851 28.221 37.8271 27.9397 37.5459Z" fill="black"/>
</g>
<defs>
<filter id="filter0_d_7262_1977" x="0" y="0" width="64" height="64" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="4"/>
<feGaussianBlur stdDeviation="6"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_7262_1977"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_7262_1977" result="shape"/>
</filter>
</defs>
</svg>
`;

  const STYLES = `
/* Hide Scrollbar for card wrappers  */
.ccx-de18-mobile__cards-wrapper,
.ccx-de18-desktop__cards-wrapper {
  -ms-overflow-style: none;    /* IE + Edge */
  scrollbar-width: none;       /* Firefox */
}

.ccx-de18-mobile__cards-wrapper::-webkit-scrollbar,
.ccx-de18-desktop__cards-wrapper::-webkit-scrollbar {
  display: none;               /* Chrome + Safari */
}


/* Main container */
.ccx-de18-mobile__container {
  background: white;
}
.ccx-de18-mobile__container > * {
  margin: 0;
  padding: 0;
}

h2.ccx-de18-mobile__heading {
  text-align: center;
  margin-bottom: 1rem;
}

/* ===============================
MOBILE SLIDER — UPDATED STYLING
=============================== */

:root .swiper-button-next, :root .swiper-button-prev {
  background-image: none !important;
}

.swiper-container,
.swiper {
  position: relative;
  width: 100%;
  overflow: hidden;
}

.swiper-wrapper {
  display: flex;
  transition-property: transform;
  box-sizing: content-box;
}

.swiper-slide {
  flex-shrink: 0;
  width: 100%; /* ensures ONLY ONE slide is visible */
  height: auto;
}

.ccx-de18-mobile__slider-container {
  position: relative;
  width: 100%;
  max-width: 390px;
  margin: 0 auto;
}

.ccx-de18-mobile__swiper {
  width: 100%;
}

.ccx-de18-mobile__swiper-wrapper {}

.ccx-de18-mobile__swiper-slide {
  display: flex;
  flex-direction: column;
  align-items: center;
}

/* ===============================
IMAGE + OVERLAYS
=============================== */

.ccx-de18-mobile__slide-image-wrapper {
  position: relative;
  width: 390px;
  height: 260px;
}

.ccx-de18-mobile__slide-image {
  width: 390px;
  height: 260px;
  object-fit: cover;
  display: block;
  will-change: transform;
}

/* Center play button */
.ccx-de18-mobile__slide-play-button {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 5;
}

/* ===============================
ARROWS
=============================== */

.ccx-de18-mobile__swiper-arrow {
  position: absolute;
  top: 50%;
  transform: translateY(190%);
  z-index: 6;
  cursor: pointer;
}

.ccx-de18-mobile__swiper-arrow--left {
  left: 8px;
}

.ccx-de18-mobile__swiper-arrow--right {
  right: 8px;
}

/* Remove default Swiper arrow icons */
.swiper-button-prev:after,
.swiper-button-next:after {
  display: none !important;
}

/* ===============================
TEXT BELOW SLIDE
=============================== */

.ccx-de18-mobile__card-title {
  font-family: Gellix;
  font-weight: 700;
  font-size: 24px;
  line-height: 100%;
  letter-spacing: -0.16px;
  text-align: center;
  text-transform: uppercase;
  color: #081F28;
  margin-top: 1rem;
  padding: 0 1rem;
}

.ccx-de18-mobile__card-copy {
  font-family: Gellix;
  font-weight: 500;
  font-size: 16px;
  color: #626262;
  line-height: 22px;
  letter-spacing: -0.16px;
  text-align: center;
  padding: 1rem 2rem 2rem;
}

/* ===============================
PAGINATION DOTS — BELOW SLIDER
=============================== */

/* default Swiper placement (bottom centered) is correct, only restyle bullets */
.ccx-de18-mobile__swiper-pagination {
  margin-top: 1rem;
}

.ccx-de18-mobile__swiper-pagination .swiper-pagination-bullet {
  background: #626262;
  opacity: 1;
  width: 10px;
  height: 10px;
}

.ccx-de18-mobile__swiper-pagination .swiper-pagination-bullet-active {
  background: #FFDD00 !important;
  width: 36px;
  height: 12px;
  border-radius: 999px;
}

/* ===============================
PAGINATION DOTS — BELOW SLIDER
=============================== */

@media screen and (min-width: 768px) {
  .ccx-de18-mobile__container {
    display: none;
  }
  .ccx-de18-desktop__container {
    display: block;
    background: white;
  }
}

/* ===============================
DESKTOP SLIDER
=============================== */

.ccx-de18-desktop__container {
  width: 100%;
  height: auto;
  position: relative;
  display: none;
}

.ccx-de18-desktop__swiper {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
}

.ccx-de18-desktop__swiper-wrapper {}

.ccx-de18-desktop__swiper-slide {
  width: 100%;
  height: 100vh;
  position: relative;
}

.ccx-de18-desktop__slide-image {
  width: 1440px;
  height: 810px;
  object-fit: cover;
  will-change: transform;
}

/* ===============================
DESKTOP OVERLAY
=============================== */

.ccx-de18-desktop__overlay {
  position: absolute;
  top: 2rem;
  right: 2rem;
  width: 360px;
  background: #FFDD00;
  padding: 1.5rem;
  border-radius: 0.75rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  z-index: 10;
}

.ccx-de18-desktop__overlay-label,
.ccx-de18-desktop__overlay-title,
.ccx-de18-desktop__overlay-copy {
  color: #081F28;
  margin: 0;
  padding: 0;
}

.ccx-de18-desktop__overlay-label {
  font-family: Gellix;
  font-weight: 700;
  font-size: 15px;
  line-height: 22.5px;
  letter-spacing: 1px;
  vertical-align: middle;
  text-transform: uppercase;
  color: #081F28;
}

.ccx-de18-desktop__overlay-title {
  font-family: Gellix;
  font-weight: 700;
  font-size: 26px;
  line-height: 30px;
  letter-spacing: 0;
  vertical-align: middle;
  text-transform: uppercase;
}

.ccx-de18-desktop__overlay-copy {
  font-family: Gellix;
  font-weight: 400;
  font-size: 16px;
  line-height: 21px;
  letter-spacing: -0.15px;
  vertical-align: middle;
  color: #626262;
}

/* Button */
.ccx-de18-desktop__overlay-button {
  margin-top: 0.5rem;
  background: #081F28;
  color: #FFFFFF;
  padding: 0.75rem 1rem;
  font-family: Gellix;
  font-size: 14px;
  width: 193px;
  height: 48px;
  padding-top: 12px;
  padding-right: 32px;
  padding-bottom: 12px;
  padding-left: 32px;
  opacity: 1;
  border-radius: 999px;
  border-width: 1px;
  border: 1px solid #081F28;
  line-height: 14px;
}

/* ===============================
DESKTOP ARROWS
=============================== */

.ccx-de18-desktop__swiper-arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 12;
  cursor: pointer;
}

.ccx-de18-desktop__swiper-arrow--left {
  left: 1rem;
}

.ccx-de18-desktop__swiper-arrow--right {
  right: 1rem;
}

/* Remove default icons */
.swiper-button-prev:after,
.swiper-button-next:after {
  display: none !important;
}

/* ===============================
RESPONSIVE VISIBILITY
=============================== */

@media screen and (min-width: 768px) {
  .ccx-de18-desktop__container {
    display: block;
  }
  .ccx-de18-mobile__container {
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

  const injectMobileContainer = function (referenceElement) {
    customLog('[injectMobileContainer] Injecting mobile slider container');

    var BLOCK = 'ccx-' + TEST_ID + '-mobile';

    // MAIN CONTAINER
    var container = document.createElement("div");
    container.className = BLOCK + '__container';

    // HEADING
    var heading = document.createElement("h2");
    heading.className = BLOCK + '__heading';
    heading.textContent = CONTENT_DATA.heading;
    container.appendChild(heading);

    // SWIPER CONTAINER
    var sliderContainer = document.createElement("div");
    sliderContainer.className = BLOCK + '__slider-container swiper-container ccx-de18-mobile__swiper';

    var wrapper = document.createElement("div");
    wrapper.className = 'swiper-wrapper ' + BLOCK + '__swiper-wrapper';
    sliderContainer.appendChild(wrapper);

    // CREATE SLIDES
    CONTENT_DATA.cardsData.forEach(function (cardData) {

      var slide = document.createElement("div");
      slide.className = 'swiper-slide ' + BLOCK + '__swiper-slide';

      // --- IMAGE WRAPPER ---
      var imgWrap = document.createElement("div");
      imgWrap.className = BLOCK + '__slide-image-wrapper';

      var img = document.createElement("img");
      img.className = BLOCK + '__slide-image';
      img.src = cardData.image;
      img.alt = cardData.cardTitle;

      var playButton = document.createElement("div");
      playButton.className = BLOCK + '__slide-play-button ccx-de18-mobile__card-play-button';
      playButton.innerHTML = SVG_PLAY_BUTTON;
      playButton.dataset.video = cardData.videoUrl;

      imgWrap.appendChild(img);
      imgWrap.appendChild(playButton);

      // --- LEFT ARROW ---
      var leftArrow = document.createElement("div");
      leftArrow.className = BLOCK + '__swiper-arrow ' + BLOCK + '__swiper-arrow--left swiper-button-prev';
      leftArrow.innerHTML = SVG_ICON_ARROW_LEFT;
      imgWrap.appendChild(leftArrow);

      // --- RIGHT ARROW ---
      var rightArrow = document.createElement("div");
      rightArrow.className = BLOCK + '__swiper-arrow ' + BLOCK + '__swiper-arrow--right swiper-button-next';
      rightArrow.innerHTML = SVG_ICON_ARROW_RIGHT;
      imgWrap.appendChild(rightArrow);

      slide.appendChild(imgWrap);

      // --- TITLE ---
      var title = document.createElement("div");
      title.className = BLOCK + '__card-title';
      title.textContent = cardData.cardTitle.toUpperCase();
      slide.appendChild(title);

      // --- COPY ---
      var copy = document.createElement("div");
      copy.className = BLOCK + '__card-copy';
      copy.textContent = cardData.cardCopy;
      slide.appendChild(copy);

      // ADD SLIDE TO WRAPPER
      wrapper.appendChild(slide);
    });

    // PAGINATION
    var pagination = document.createElement("div");
    pagination.className = 'swiper-pagination ' + BLOCK + '__swiper-pagination';
    sliderContainer.appendChild(pagination);

    container.appendChild(sliderContainer);

    // INSERT AFTER REFERENCE ELEMENT
    referenceElement.insertAdjacentElement("afterend", container);

    customLog({ html: container.outerHTML });

    // INIT SWIPER
    setTimeout(function () {
      var swiper = new Swiper('.ccx-de18-mobile__swiper', {
        slidesPerView: 1,
        loop: true,
        navigation: {
          nextEl: '.' + BLOCK + '__swiper-arrow--right',
          prevEl: '.' + BLOCK + '__swiper-arrow--left'
        },
        pagination: {
          el: '.' + BLOCK + '__swiper-pagination',
          clickable: true
        },
        lazy: true,
      });
    }, 50);
  };

  const injectDesktopContainer = function (referenceElement) {
    customLog('[injectDesktopContainer] Injecting desktop slider container');

    var BLOCK = 'ccx-' + TEST_ID + '-desktop';

    var container = document.createElement("div");
    container.className = BLOCK + '__container';

    var sliderContainer = document.createElement("div");
    sliderContainer.className = BLOCK + '__swiper swiper-container';

    var wrapper = document.createElement("div");
    wrapper.className = 'swiper-wrapper ' + BLOCK + '__swiper-wrapper';
    sliderContainer.appendChild(wrapper);

    CONTENT_DATA.cardsData.forEach(function (cardData) {

      var slide = document.createElement("div");
      slide.className = 'swiper-slide ' + BLOCK + '__swiper-slide';

      var img = document.createElement("img");
      img.className = BLOCK + '__slide-image';
      img.src = cardData.image;
      img.alt = cardData.cardTitle;

      slide.appendChild(img);

      var overlay = document.createElement("div");
      overlay.className = BLOCK + '__overlay';

      var p1 = document.createElement("p");
      p1.className = BLOCK + '__overlay-label';
      p1.textContent = 'UNSERE GEWINNER';
      overlay.appendChild(p1);

      var p2 = document.createElement("p");
      p2.className = BLOCK + '__overlay-title';
      p2.textContent = cardData.cardTitle;
      overlay.appendChild(p2);

      var p3 = document.createElement("p");
      p3.className = BLOCK + '__overlay-copy';
      p3.textContent = cardData.cardCopy;
      overlay.appendChild(p3);

      var btn = document.createElement("button");
      btn.className = BLOCK + '__overlay-button ccx-de18-desktop__card-play-button';
      btn.textContent = 'VIDEO ABSPIELEN';
      btn.dataset.video = cardData.videoUrl;
      overlay.appendChild(btn);

      slide.appendChild(overlay);

      var leftArrow = document.createElement("div");
      leftArrow.className = BLOCK + '__swiper-arrow ' + BLOCK + '__swiper-arrow--left swiper-button-prev';
      leftArrow.innerHTML = SVG_ICON_ARROW_LEFT;
      slide.appendChild(leftArrow);

      var rightArrow = document.createElement("div");
      rightArrow.className = BLOCK + '__swiper-arrow ' + BLOCK + '__swiper-arrow--right swiper-button-next';
      rightArrow.innerHTML = SVG_ICON_ARROW_RIGHT;
      slide.appendChild(rightArrow);

      wrapper.appendChild(slide);
    });

    container.appendChild(sliderContainer);

    referenceElement.insertAdjacentElement("afterend", container);

    customLog({ html: container.outerHTML });

    setTimeout(function () {
      var swiper = new Swiper('.' + BLOCK + '__swiper', {
        slidesPerView: 1,
        loop: true,
        navigation: {
          nextEl: '.' + BLOCK + '__swiper-arrow--right',
          prevEl: '.' + BLOCK + '__swiper-arrow--left'
        }
      });
    }, 50);
  };

  function addVideoModal() {
    if (document.querySelector('.ccx-video-backdrop')) return;

    const modalHTML = `
    <div class="ccx-video-backdrop" style="
        display:none;
        position:fixed;
        inset:0;
        background:rgba(0,0,0,0.75);
        z-index:999999;
        justify-content:center;
        align-items:center;
    ">
      <div class="ccx-video-modal" style="
          max-width:90%;
          width:800px;
          aspect-ratio:16/9;
          background:#000;
          position:relative;
      ">
        <iframe 
          src="" 
          style="width:100%; height:100%; border:0;"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen>
        </iframe>
      </div>
    </div>
  `;

    document.body.insertAdjacentHTML("beforeend", modalHTML);

    const backdrop = document.querySelector('.ccx-video-backdrop');
    const iframe = backdrop.querySelector('iframe');

    // Close modal by clicking backdrop
    backdrop.addEventListener('click', (e) => {
      if (e.target.classList.contains('ccx-video-backdrop')) {
        iframe.src = "";
        backdrop.style.display = "none";
      }
    });

    return backdrop;
  }

  function attachVideoListeners() {
    customLog("[attachVideoListeners] Attaching video click handlers");

    var backdrop = document.querySelector(".ccx-video-backdrop");
    if (!backdrop) {
      customLog("Modal not found — aborting listeners");
      return;
    }

    var modalIframe = backdrop.querySelector("iframe");

    // Select all play buttons from mobile + desktop
    var playButtons = document.querySelectorAll(
      ".ccx-de18-mobile__card-play-button, " +
      ".ccx-de18-desktop__card-play-button"
    );

    if (!playButtons.length) {
      customLog("No play buttons found yet.");
      return;
    }

    playButtons.forEach(function (btn) {

      // Prevent duplicate listeners
      btn.removeEventListener("click", btn._videoHandler);

      // Define handler
      btn._videoHandler = function () {
        var url = btn.dataset.video;
        if (!url) return;

        var ytId = "";

        try {
          if (url.indexOf("youtu.be") !== -1) {
            ytId = url.split("/").pop();
          } else {
            ytId = new URL(url).searchParams.get("v");
          }
        } catch (err) {
          customLog("Invalid video URL:", url);
          return;
        }

        modalIframe.src = "https://www.youtube.com/embed/" + ytId + "?autoplay=1&rel=0";
        backdrop.style.display = "flex";
      };

      btn.addEventListener("click", btn._videoHandler);
    });

    customLog("Attached listeners to " + playButtons.length + " play buttons.");
  }

  const init = () => {
    try {
      customLog(TEST_ID + ' | ' + VARIATION + ' | ' + TEST_NAME);
      customLog('[init] Current URL: ' + CURRENT_URL);

      // Wait for mobile section and apply changes
      waitForElements(
        [
          { selector: SELECTORS.CONTROL_MOBILE_SECTION_LIVE_RENT_SELL, count: 1 },
        ],
        function (results) {

          addStyles(STYLES, VARIATION);
          addBodyClass();

          const CONTROL_MOBILE_SECTION_LIVE_RENT_SELL = results[0].elements[0];
          if (!CONTROL_MOBILE_SECTION_LIVE_RENT_SELL) return;
          customLog(CONTROL_MOBILE_SECTION_LIVE_RENT_SELL);

          injectMobileContainer(CONTROL_MOBILE_SECTION_LIVE_RENT_SELL);
          addVideoModal();
          attachVideoListeners();


        }
      );

      // Wait for desktop section and apply changes
      waitForElements(
        [
          { selector: SELECTORS.CONTROL_DESKTOP_SECTION_LIVE_RENT_SELL, count: 1 },
        ],
        function (results) {

          addStyles(STYLES, VARIATION);
          addBodyClass();

          const CONTROL_DESKTOP_SECTION_LIVE_RENT_SELL = results[0].elements[0];
          if (!CONTROL_DESKTOP_SECTION_LIVE_RENT_SELL) return;
          customLog(CONTROL_DESKTOP_SECTION_LIVE_RENT_SELL);

          injectDesktopContainer(CONTROL_DESKTOP_SECTION_LIVE_RENT_SELL);
          addVideoModal();
          attachVideoListeners();
        }
      );

    } catch (error) {
      customLog(error);
    }
  }

  init();
})();