(function () {
  const LOG_ENABLED = true;
  const TEST_ID = "DE19";
  const TEST_NAME = "DE19 - BV Page Car Content Uplift";
  const VARIATION = "variation-1";
  const CURRENT_URL = window.location.href;

  const SELECTORS = {
    CONTROL_PRIZE_DETAILS: 'main .prize-details',
    CONTROL_MOBILE_FLOATING_CTA_CONTAINER: '.visible-xs.sticky-cta.hide-on-desktop',
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

  const SVG_INFORMATION_ICON = `<svg width="24" height="24" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10 15C10.2833 15 10.521 14.904 10.713 14.712C10.905 14.52 11.0007 14.2827 11 14V10C11 9.71667 10.904 9.47933 10.712 9.288C10.52 9.09667 10.2827 9.00067 10 9C9.71733 8.99933 9.48 9.09533 9.288 9.288C9.096 9.48067 9 9.718 9 10V14C9 14.2833 9.096 14.521 9.288 14.713C9.48 14.905 9.71733 15.0007 10 15ZM10 7C10.2833 7 10.521 6.904 10.713 6.712C10.905 6.52 11.0007 6.28267 11 6C10.9993 5.71733 10.9033 5.48 10.712 5.288C10.5207 5.096 10.2833 5 10 5C9.71667 5 9.47933 5.096 9.288 5.288C9.09667 5.48 9.00067 5.71733 9 6C8.99933 6.28267 9.09533 6.52033 9.288 6.713C9.48067 6.90567 9.718 7.00133 10 7ZM10 20C8.61667 20 7.31667 19.7373 6.1 19.212C4.88334 18.6867 3.825 17.9743 2.925 17.075C2.025 16.1757 1.31267 15.1173 0.788001 13.9C0.263335 12.6827 0.000667933 11.3827 1.26582e-06 10C-0.000665401 8.61733 0.262001 7.31733 0.788001 6.1C1.314 4.88267 2.02633 3.82433 2.925 2.925C3.82367 2.02567 4.882 1.31333 6.1 0.788C7.318 0.262667 8.618 0 10 0C11.382 0 12.682 0.262667 13.9 0.788C15.118 1.31333 16.1763 2.02567 17.075 2.925C17.9737 3.82433 18.6863 4.88267 19.213 6.1C19.7397 7.31733 20.002 8.61733 20 10C19.998 11.3827 19.7353 12.6827 19.212 13.9C18.6887 15.1173 17.9763 16.1757 17.075 17.075C16.1737 17.9743 15.1153 18.687 13.9 19.213C12.6847 19.739 11.3847 20.0013 10 20Z" fill="#0090B1"/>
</svg>
`;

  const DESCRIPTION_CONTAINER = {
    header: 'Audi SQ7 + 50 000 € in bar',
    paragraph: 'Der Audi SQ7 vereint kraftvolle Performance mit luxuriösem Komfort – und dazu bekommst du 50.000€ in bar. Mach bis Sonntag, den 09. November, bei der Haus-Verlosung mit – und schon bald könnten dir dieser High-Performance-SUV und das Extra-Geld gehören. 50.000€ für unvergessliche Roadtrips, jahrelanges Tanken oder die erste große Alpen-Tour im neuen SQ7 – du entscheidest, wie du deinen Gewinn genießt. Jedes Los bringt dich außerdem dem Landhaus in Oberbayern näher und unterstützt den Deutschen Tierschutzbund.',
    buttonText: 'Jetzt Mitmachen',
  }

  const STYLES = `
/* ===============================
CONTROL STYLES
=============================== */
.prize-details {
  display: none;
}

/* ===============================
SLIDER (BEM)
=============================== */

.ccx-slider {
  position: relative;
  width: 100%;
}

.ccx-slider .swiper {
  width: 100%;
  height: auto;
}

/* MAIN SLIDER */
.ccx-slider__main .swiper-slide {
  display: flex;
  justify-content: center;
  align-items: center;
}

/* IMAGE WRAPPER */
.ccx-slider__image-wrapper {
  position: relative;
  width: 100%;
  height: 675px;
  display: flex;
  justify-content: center;
  align-items: center;
}

/* MAIN IMAGE */
.ccx-slider__image--main {
  width: 100% !important;
  height: 675px !important;
  object-fit: cover;
}

/* OVERLAY ROOT */
.ccx-slider__overlay {
  position: absolute;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);
  color: #fff;
  z-index: 10;
  display: flex;
  align-items: center;
  gap: 4rem;
}

/* OVERLAY LEFT */
.ccx-slider__overlay-left {
  display: flex;
  align-items: center;
  justify-content: center;
}

.ccx-slider__trustpilot {
  width: 160px;
  height: auto;
  pointer-events: none;
  filter: drop-shadow(0 2px 4px rgba(0,0,0,0.4));
}

@media screen and (max-width: 768px) {
  .ccx-slider__image-wrapper {
    height: 380px;
  }
  .ccx-slider__image--main {
    width: 100% !important;
    height: 100%;
    object-fit: cover;
  }
  .ccx-slider__trustpilot {
    min-width: 102px;
  }
  .ccx-description__button {
    display: none;
  }
}

/* OVERLAY RIGHT */
.ccx-slider__overlay-right {
  display: flex;
  flex-direction: column;
  align-items: center;
}

/* TOP ROW ('Ends in') */
.ccx-slider__overlay-top {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 20px;
  font-weight: 600;
}

.ccx-slider__overlay-top svg {
  width: 24px;
  height: 24px;
}

.ccx-slider__overlay-top span {
    font-size: 1rem;
}

/* BOTTOM ROW ('5 days') */
.ccx-slider__overlay-bottom p {
  margin: 0;
  font-size: 2rem;
  text-transform: uppercase;
  font-weight: 700;
  display: flex;
  gap: 6px;
}

/* THUMBNAIL STRIP */
.ccx-slider__thumbs {
  overflow-x: auto !important;
  white-space: nowrap;
  scrollbar-width: none;
}

.ccx-slider__thumbs::-webkit-scrollbar {
  display: none;
}

.ccx-slider__thumbs .swiper-wrapper {
  gap: 2px !important;
  display: flex;
  justify-content: space-between;
}

.ccx-slider__thumbs .swiper-slide {
  width: 160px !important;
  height: 124px !important;
}

.ccx-slider__image--thumb {
  width: 160px !important;
  height: 124px !important;
  object-fit: cover;
  opacity: 0.5;
  cursor: pointer;
}

.swiper-slide-thumb-active .ccx-slider__image--thumb {
  opacity: 1;
  border: 8px solid #FFDD00;
}

@media screen and (max-width: 768px) {
  .swiper.ccx-slider__thumbs {
    display: none;
  }
}

/* ===============================
DESCRIPTION CONTAINER (BEM)
=============================== */
.ccx-description {
  padding: 2rem 1.5rem;
  text-align: center;
  font-family: inherit;
  background: #232020;
  margin: 0;
  width: 100%;
  color: #F5F5F5;
  gap: 1rem;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
}

.ccx-description__header {
  font-family: Showtime;
  font-weight: 500;
  font-size: 48px;
  letter-spacing: 0;
  line-height: 52px;
  text-align: center;
  vertical-align: middle;
  text-transform: uppercase;
  color: #F5F5F5;
  margin-bottom: 1rem;
}

.ccx-description__paragraph {
  font-family: Gellix;
  font-weight: 400;
  font-size: 20px;
  line-height: 28px;
  letter-spacing: 0;
  text-align: center;
  vertical-align: middle;
  max-width: 750px;
  margin: 0 auto;
  margin-bottom: 2rem;
}

.ccx-description__button {
  width: 224px;
  height: 56px;
  opacity: 1;
  padding: 0;
  border-radius: 76px;
  font-family: Gellix;
  font-weight: 700;
  font-size: 20px;
  line-height: 150%;
  letter-spacing: 0.3px;
  text-align: center;
  color: #090F15;
  text-transform: none;
  background: #ffdd00;
  border: none;
}

.ccx-description__button:hover {
  color: #000;
  background-color: #fdee8c;
  outline: none;
  text-decoration: none;
}

/* ===============================
DESCRIPTION CONTAINER (BEM)
=============================== */
.ccx-how-it-works {
  background: #FFFFFF;
  border-style: solid;
  border-color: #D0D0D0;
  box-shadow: 0px 4px 28px 0px #00000040;
  width: 90%;
  height: 56px;
  opacity: 1;
  padding-top: 16px;
  padding-bottom: 16px;
  gap: 0.5rem;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  border-top-width: 1px;
  border-right-width: 1px;
  border-left-width: 1px;
  display: flex;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}

.ccx-how-it-works__text {
  font-family: Gellix;
  font-weight: 600;
  font-size: 16px;
  line-height: 23px;
  text-align: center;
  vertical-align: middle;
  color: #0090B1;
  box-shadow: 0px 0px 0px 0px #FFCC00;
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

    if (document.querySelector(".ccx-slider")) {
      customLog("[Slider] Already injected, skipping");
      return;
    }

    const container = document.createElement("div");
    container.className = "ccx-slider";

    /* MAIN SLIDES */
    const mainSlides = IMAGE_URLS.map(function (url, index) {
      return (
        '<div class="swiper-slide ccx-slider__slide">' +

        '<div class="ccx-slider__image-wrapper">' +
        '<img ' +
        'class="ccx-slider__image ccx-slider__image--main" ' +
        'src="' + url + '" ' +
        'alt="" ' +
        (index === 0 ? '' : 'loading="lazy"') +
        '>' +
        '</div>' +

        '<div class="ccx-slider__overlay">' +

        '<div class="ccx-slider__overlay-left">' +
        '<img ' +
        'class="ccx-slider__trustpilot ccx-slider__image ccx-slider__image--overlay" ' +
        'src="' + TRUSTPILOT_STARS + '" ' +
        'alt="Trustpilot Rating"' +
        '>' +
        '</div>' +

        '<div class="ccx-slider__overlay-right">' +

        '<div class="ccx-slider__overlay-top">' +
        SVG_CLOCK_ICON +
        '<span>Ends in</span>' +
        '</div>' +

        '<div class="ccx-slider__overlay-bottom">' +
        '<p>' +
        '<span>5</span>' +
        '<span>days</span>' +
        '</p>' +
        '</div>' +

        '</div>' +

        '</div>' +

        '</div>'
      );
    }).join('');

    /* THUMBS */
    const thumbSlides = IMAGE_URLS.map(function (url, i) {
      return (
        '<div class="swiper-slide ccx-slider__slide">' +
        '<img class="ccx-slider__image ccx-slider__image--thumb" ' +
        'src="' + url + '" ' +
        'alt="Thumbnail ' + (i + 1) + '">' +
        '</div>'
      );
    }).join('');

    container.innerHTML =
      '<div class="swiper ccx-slider__main">' +
      '<div class="swiper-wrapper">' +
      mainSlides +
      '</div>' +
      '<div class="swiper-button-next"></div>' +
      '<div class="swiper-button-prev"></div>' +
      '</div>' +

      '<div class="swiper ccx-slider__thumbs">' +
      '<div class="swiper-wrapper">' +
      thumbSlides +
      '</div>' +
      '</div>';

    afterElement.insertAdjacentElement("afterend", container);

    /* Swiper Init */
    const thumbs = new Swiper(".ccx-slider__thumbs", {
      spaceBetween: 0,
      slidesPerView: "auto",
      // preloadImages: false,
      lazy: true,
      // watchSlidesProgress: true
    });

    const mainSlider = new Swiper(".ccx-slider__main", {
      spaceBetween: 10,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      },
      thumbs: {
        swiper: thumbs
      },
      // preloadImages: false,
      lazy: true,
    });

    customLog("[Slider] Injected and initialized");
  }

  function injectDescriptionContainer(afterElement) {

    if (document.querySelector(".ccx-description")) {
      customLog("[Description] Already injected, skipping");
      return;
    }

    const container = document.createElement("div");
    container.className = "ccx-description";

    container.innerHTML =
      '<h2 class="ccx-description__header">' +
      DESCRIPTION_CONTAINER.header +
      '</h2>' +

      '<p class="ccx-description__paragraph">' +
      DESCRIPTION_CONTAINER.paragraph +
      '</p>' +

      '<button class="ccx-description__button">' +
      DESCRIPTION_CONTAINER.buttonText +
      '</button>';

    afterElement.insertAdjacentElement("afterend", container);

    customLog("[Description] Injected description container");
  }

  function attachHowItWorksScroll() {
    const howItWorksEl = document.querySelector(".ccx-how-it-works");
    const descriptionEl = document.querySelector(".ccx-description");

    if (!howItWorksEl || !descriptionEl) {
      customLog("[Scroll] Missing elements, cannot attach scroll listener");
      return;
    }

    // Smooth scroll with adjustable speed
    function slowScrollTo(targetY, duration = 1200) {
      const startY = window.scrollY;
      const distance = targetY - startY;
      const startTime = performance.now();

      function easeOutQuad(t) {
        return t * (2 - t);
      }

      function step(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const eased = easeOutQuad(progress);

        window.scrollTo(0, startY + distance * eased);

        if (progress < 1) {
          requestAnimationFrame(step);
        }
      }

      requestAnimationFrame(step);
    }

    howItWorksEl.addEventListener("click", () => {
      const offsetRem = 2; // 2rem
      const offsetPx = offsetRem * parseFloat(getComputedStyle(document.documentElement).fontSize);

      const elementTop = descriptionEl.getBoundingClientRect().top + window.scrollY;
      const targetY = elementTop - offsetPx;

      slowScrollTo(targetY, 500); // slow 0.5 second scroll

      customLog("[Scroll] Slow-scrolling to description container (2rem above)");
    });

    customLog("[Scroll] Slow scroll listener added");
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
          const sliderEl = document.querySelector(".ccx-slider");
          if (sliderEl) injectDescriptionContainer(sliderEl);

        }
      );

      waitForElements(
        [
          { selector: SELECTORS.CONTROL_MOBILE_FLOATING_CTA_CONTAINER, count: 1 },
        ],
        function (results) {

          addStyles(STYLES, VARIATION);
          addBodyClass();

          const CONTROL_MOBILE_FLOATING_CTA_CONTAINER = results[0].elements[0];
          if (!CONTROL_MOBILE_FLOATING_CTA_CONTAINER) return;

          customLog('Found CONTROL_MOBILE_FLOATING_CTA_CONTAINER');

          // INSERT NEW CONTAINER BEFORE THE MOBILE FLOATING CTA
          const howItWorksContainer = document.createElement('div');
          howItWorksContainer.className = "ccx-how-it-works";
          CONTROL_MOBILE_FLOATING_CTA_CONTAINER.insertAdjacentElement("afterbegin", howItWorksContainer);
          // add SVG_INFORMATION_ICON inside howItWorksContainer via methods not line innerHTML
          const infoIconWrapper = document.createElement('div');
          infoIconWrapper.innerHTML = SVG_INFORMATION_ICON;
          infoIconWrapper.classList.add('ccx-how-it-works__icon');
          howItWorksContainer.appendChild(infoIconWrapper);
          // add text node
          const textNode = document.createElement('span');
          textNode.className = "ccx-how-it-works__text";
          textNode.textContent = "How It Works";
          howItWorksContainer.appendChild(textNode);

          attachHowItWorksScroll();
        }
      );

    } catch (error) {
      customLog(error);
    }
  };

  init();
})();
