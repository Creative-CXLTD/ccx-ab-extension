(function () {
  const LOG_ENABLED = true;
  const TEST_ID = "DE19";
  const TEST_NAME = "DE19 - BV Page Car Content Uplift";
  const VARIATION = "variation-1";
  const CURRENT_URL = window.location.href;

  const SELECTORS = {
    CONTROL_PRIZE_DETAILS: 'main .prize-details',
  };

  const IMAGE_URLS = [
    "https://cdn-eu.dynamicyield.com/api/9881146/images/626663a78ae6.png", // slide 1
    "https://cdn-eu.dynamicyield.com/api/9881146/images/b67518474094.jpg", // slide 2
    "https://cdn-eu.dynamicyield.com/api/9881146/images/d9f619d9336f.jpg", // slide 3
    "https://cdn-eu.dynamicyield.com/api/9881146/images/c9fbe15388ca.jpg", // slide 4
    "https://cdn-eu.dynamicyield.com/api/9881146/images/7f1c051e3598.jpg", // slide 5
    "https://cdn-eu.dynamicyield.com/api/9881146/images/b35b416dff48.jpg", // slide 6
    "https://cdn-eu.dynamicyield.com/api/9881146/images/56d2486cddd9.jpg", // slide 7
    "https://cdn-eu.dynamicyield.com/api/9881146/images/cf9fe2479aeb.jpg", // slide 8
  ];

  const TRUSTPILOT_STARS = `https://cdn-eu.dynamicyield.com/api/9881146/images/9c3031ab1ace.png`;

  const SVG_CLOCK_ICON = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 1C9.82441 1 7.69767 1.64514 5.88873 2.85383C4.07979 4.06253 2.66989 5.78049 1.83733 7.79048C1.00477 9.80047 0.786929 12.0122 1.21137 14.146C1.6358 16.2798 2.68345 18.2398 4.22183 19.7782C5.76021 21.3166 7.72022 22.3642 9.85401 22.7886C11.9878 23.2131 14.1995 22.9952 16.2095 22.1627C18.2195 21.3301 19.9375 19.9202 21.1462 18.1113C22.3549 16.3023 23 14.1756 23 12C23 9.08262 21.8411 6.28473 19.7782 4.22183C17.7153 2.15893 14.9174 1 12 1ZM12 21C10.22 21 8.47992 20.4722 6.99987 19.4832C5.51983 18.4943 4.36628 17.0887 3.68509 15.4442C3.0039 13.7996 2.82567 11.99 3.17294 10.2442C3.5202 8.49836 4.37737 6.89471 5.63604 5.63604C6.89472 4.37737 8.49836 3.5202 10.2442 3.17293C11.99 2.82567 13.7996 3.0039 15.4442 3.68508C17.0887 4.36627 18.4943 5.51983 19.4832 6.99987C20.4722 8.47991 21 10.22 21 12C21 14.3869 20.0518 16.6761 18.364 18.364C16.6761 20.0518 14.387 21 12 21Z" fill="white"/>
<path d="M13 7C13 6.44772 12.5523 6 12 6C11.4477 6 11 6.44772 11 7L11 12C11 12.5523 11.4477 13 12 13C12.5523 13 13 12.5523 13 12L13 7Z" fill="white"/>
<path d="M12.5 11C11.9477 11 11.5 11.4477 11.5 12C11.5 12.5523 11.9477 13 12.5 13L19.5 13C20.0523 13 20.5 12.5523 20.5 12C20.5 11.4477 20.0523 11 19.5 11L12.5 11Z" fill="white"/>
</svg>
`;

  const STYLES = `
  /* ===============================
  CONTROL STYLES
  =============================== */
  .prize-details {
    display: none;
  }

  /* ===============================
  SLIDER STYLES
  =============================== */
  .ccx-slider-container {
    position: relative;
    width: 100%;
  }

  .ccx-slider-container .swiper {
    width: 100%;
    height: auto;
  }

  /* MAIN SLIDER - FIXED IMAGE SIZE */
  .ccx-main-slider .swiper-slide {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .ccx-main-slider img {
    width: 1200px !important;
    height: 675px !important;
    object-fit: cover;
    margin: 0 auto;
    display: block;
  }

  /* THUMBNAIL STRIP — SCROLLABLE BUT SCROLLBAR HIDDEN */
  .ccx-thumb-slider {
    overflow-x: auto !important;
    overflow-y: hidden !important;
    white-space: nowrap;
    scrollbar-width: none;     /* Firefox */
  }

  .ccx-thumb-slider::-webkit-scrollbar {
    display: none;             /* Chrome, Safari, Edge */
  }

  .ccx-thumb-slider .swiper-wrapper {
    gap: 2px !important;
  }

  /* THUMB STRIP — 2PX SPACING */
  .ccx-thumb-slider .swiper-wrapper {
    gap: 2px !important;
  }

  /* THUMBNAIL SLIDES */
  .ccx-thumb-slider .swiper-slide {
    width: 160px !important;
    height: 124px !important;
    margin: 0 !important;
    padding: 0 !important;
  }

  .ccx-thumb-slider .swiper-slide img {
    width: 160px !important;
    height: 124px !important;
    object-fit: cover;
    border-radius: 0;
    opacity: 0.5;
    cursor: pointer;
    display: block;
  }

  .ccx-slide-inner-wrapper {
    position: relative;
    width: 1200px;
    height: 675px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  /* IMAGE WRAPPER */
  .ccx-image-wrapper {
    position: relative;
    width: 1200px;
    height: 675px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .ccx-image-wrapper img {
    width: 1200px !important;
    height: 675px !important;
    object-fit: cover;
    display: block;
  }

  /* ACTIVE THUMB OUTLINE */
  .ccx-thumb-slider .swiper-slide-thumb-active img {
    opacity: 1;
    border: 8px solid #FFDD00
  }

  /* COUNTDOWN OVERLAY CONTAINER */
  .ccx-overlay-container {
    position: absolute;
    bottom: 40px;
    left: 50%;
    transform: translateX(-50%);
    text-align: center;
    color: white;
    font-family: inherit;
    z-index: 10;
  }

  /* TRUSTPILOT OVERLAY ON MAIN SLIDES */
  .ccx-slide {
    position: relative;
  }

  /* TOP PART (ICON + 'Ends in') */
  .ccx-overlay-top {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 6px;
    font-size: 20px;
    font-weight: 600;
  }

  .ccx-overlay-top svg {
    width: 24px;
    height: 24px;
  }

  /* BOTTOM PART ('5 Days') */
  .ccx-overlay-bottom {
    font-size: 32px;
    font-weight: 700;
    margin-top: 4px;
  }

  .ccx-main-slider .ccx-trustpilot-stars {
    width: 141px !important;
    height: 82px !important;
    left: 0;
    bottom: 2rem;
    position: absolute;
    bottom: 40px;
    left: 50%;
    transform: translateX(-50%);
    width: 240px;
    height: auto;
    z-index: 12;
    pointer-events: none;
    filter: drop-shadow(0 2px 4px rgba(0,0,0,0.4));
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
    const styleClass = 'ccx-styles-' + TEST_ID.toLowerCase() + '-' + variation.toLowerCase();
    if (document.querySelector('.' + styleClass)) return;

    const style = document.createElement('style');
    style.classList.add(styleClass);
    style.appendChild(document.createTextNode(cssString));
    document.head.appendChild(style);
  };

  const addBodyClass = () => {
    const bodyClass = 'ccx-' + TEST_ID.toLowerCase() + '-' + VARIATION.toLowerCase();
    if (!document.body.classList.contains(bodyClass)) {
      document.body.classList.add(bodyClass);
      customLog('[init] Added class ' + bodyClass + ' to body');
    }
  };

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

    Promise.all(promises).then(results => {
      if (typeof callback === 'function') callback(results);
    });
  };

  function injectSlider(afterElement) {

    // Create wrapper container
    const container = document.createElement("div");
    container.className = "ccx-slider-container";

    // Build main slider slides
    const mainSlides = IMAGE_URLS.map(url => `
  <div class="swiper-slide ccx-slide">

    <div class="ccx-slide-inner-wrapper">

      <div class="ccx-image-wrapper">
        <img src="${url}" alt="">
      </div>

      <div class="ccx-overlay-container">
        <div class="ccx-overlay-top">
          ${SVG_CLOCK_ICON}
          <span>Ends in</span>
        </div>
        <div class="ccx-overlay-bottom">
          5 Days
        </div>
      </div>

    </div>

    <img class="ccx-trustpilot-stars" src="${TRUSTPILOT_STARS}" alt="Trustpilot Rating">

  </div>
`).join("");

    // Build thumb slider slides (same images)
    const thumbSlides = IMAGE_URLS.map((url, index) => `
    <div class="swiper-slide">
      <img src="${url}" alt="thumb ${index + 1}">
    </div>
  `).join("");

    // Inject slider HTML using the dynamic slide lists
    container.innerHTML = `
    <div class="swiper ccx-main-slider">
      <div class="swiper-wrapper">
        ${mainSlides}
      </div>
      <div class="swiper-button-next"></div>
      <div class="swiper-button-prev"></div>
    </div>

    <div class="swiper ccx-thumb-slider">
      <div class="swiper-wrapper">
        ${thumbSlides}
      </div>
    </div>
  `;

    // Insert slider after the prize details element
    afterElement.insertAdjacentElement("afterend", container);

    // Initialize Swiper 11
    const thumbs = new Swiper(".ccx-thumb-slider", {
      spaceBetween: 0,   // ← NEW
      slidesPerView: 'auto',
      watchSlidesProgress: true
    });

    const mainSlider = new Swiper(".ccx-main-slider", {
      spaceBetween: 10,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      },
      thumbs: {
        swiper: thumbs
      }
    });

    customLog("[Slider] Injected and initialized", { container, thumbs, mainSlider });
  }

  const init = () => {
    try {
      customLog(TEST_ID + " | " + VARIATION + " | " + TEST_NAME);
      customLog("[init] Current URL: " + CURRENT_URL);

      waitForElements(
        [
          { selector: SELECTORS.CONTROL_PRIZE_DETAILS, count: 1 },
        ],
        function (results) {

          addStyles(STYLES, VARIATION);
          addBodyClass();

          const CONTROL_PRIZE_DETAILS = results[0].elements[0];
          if (!CONTROL_PRIZE_DETAILS) return;

          customLog(CONTROL_PRIZE_DETAILS);

          injectSlider(CONTROL_PRIZE_DETAILS);
        }
      );

    } catch (error) {
      customLog(error);
    }
  };

  init();
})();
