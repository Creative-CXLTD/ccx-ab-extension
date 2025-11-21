(function () {
  const LOG_ENABLED = true;
  const TEST_ID = "1-2";
  const TEST_NAME = "PROD 1.2 - MM LP Winners Hero Video [Social Proof & Authority]";
  const VARIATION = "variation-1";
  const CURRENT_URL = window.location.href;
  let resizeTimer;
  let isAnimating = false;

  const SELECTORS = {
    CONTROL_HERO_VIDEO_ELEMENT: '.campaign-hero-video-container video',
    CONTROL_HMA_LAST_H3: '.campaign-hero-overlay .campaign-hero-title',
  }

  const SLIDE_DATA = [
    {
      image: "https://cdn-eu.dynamicyield.com/api/9881830/images/88a919c5cf4c.jpg",
      name: "Naomi",
      location: "Worcestershire",
      prize: "£1,000,000",
      month: "August",
      mainText: "Winning a million pounds is beyond transformational, it's incredible, utterly life-changing for our family."
    },
    {
      image: "https://cdn-eu.dynamicyield.com/api/9881830/images/635dd55a7431.png",
      name: "Mark",
      location: "XXX",
      prize: "£1,000,000",
      month: "September",
      mainText: "Absolutely shocked. It's a lot to take in. It's genuinely life-changing and now we no longer need to worry about the heating bill."
    },
    {
      image: "https://cdn-eu.dynamicyield.com/api/9881830/images/17bf03fbb789.jpg",
      name: "Christian",
      location: "XXX",
      prize: "£1,000,000",
      month: "October",
      mainText: "ncksdcbnksdjnkjdsncksdcbnksdjnkjdsncksdcbnksdjnkjdsncksdcbnksdjnkjsdncksdcbnksdjnkjdsncksdcbnksdjnkjdsncksdcbnksdjnkjds"
    }
  ];


  const ARROW_LEFT = `<svg width="7" height="14" viewBox="0 0 7 14" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M1.82747 7.00414L6.75663 1.97199C6.92428 1.80083 7.00532 1.59829 6.99973 1.36437C6.99414 1.13045 6.90752 0.927904 6.73986 0.756742C6.5722 0.585581 6.37381 0.5 6.14467 0.5C5.91554 0.5 5.71714 0.585581 5.54949 0.756742L0.402379 6.02852C0.268252 6.16545 0.167658 6.31949 0.100595 6.49066C0.0335312 6.66182 0 6.83298 0 7.00414C0 7.1753 0.0335312 7.34646 0.100595 7.51763C0.167658 7.68879 0.268252 7.84283 0.402379 7.97976L5.56625 13.2515C5.73391 13.4227 5.92951 13.5054 6.15306 13.4997C6.3766 13.494 6.5722 13.4056 6.73986 13.2344C6.90752 13.0633 6.99135 12.8607 6.99135 12.6268C6.99135 12.3929 6.90752 12.1903 6.73986 12.0192L1.82747 7.00414Z" fill="white"/>
</svg>`;

  const ARROW_RIGHT = `<svg width="7" height="14" viewBox="0 0 7 14" fill="none" xmlns="http://www.w3.org/2000/svg" style="transform: rotate(180deg);">
  <path d="M1.82747 7.00414L6.75663 1.97199C6.92428 1.80083 7.00532 1.59829 6.99973 1.36437C6.99414 1.13045 6.90752 0.927904 6.73986 0.756742C6.5722 0.585581 6.37381 0.5 6.14467 0.5C5.91554 0.5 5.71714 0.585581 5.54949 0.756742L0.402379 6.02852C0.268252 6.16545 0.167658 6.31949 0.100595 6.49066C0.0335312 6.66182 0 6.83298 0 7.00414C0 7.1753 0.0335312 7.34646 0.100595 7.51763C0.167658 7.68879 0.268252 7.84283 0.402379 7.97976L5.56625 13.2515C5.73391 13.4227 5.92951 13.5054 6.15306 13.4997C6.3766 13.494 6.5722 13.4056 6.73986 13.2344C6.90752 13.0633 6.99135 12.8607 6.99135 12.6268C6.99135 12.3929 6.90752 12.1903 6.73986 12.0192L1.82747 7.00414Z" fill="white"/>
</svg>`;

  const STYLES = `
        /* ===============================
   SLIDER COMPONENT
=============================== */
.no-italic {
  font-style: normal !important;
  display: inline;
}
.ccx-slider-wrapper {
  background: #081f28;
  border-radius: 20px;
  width: 100%;
  box-sizing: border-box;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  position: relative;
  opacity: 1;
  max-height: 215px;
  margin-bottom: 1rem;
  justify-content: center;
}

.ccx-slider-top {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;
  gap: 12px;
}

.ccx-arrow-wrap {
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex: 0 0 auto;
  align-self: center;
}

.ccx-arrow-btn {
  background: none;
  border: 0;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}

.ccx-main {
  display: flex;
  flex: 1 1 auto;
  transition: opacity 250ms ease;
  will-change: opacity;
}
.ccx-main.is-fading-out { opacity: 0; }
.ccx-main.is-fading-in { opacity: 1; }

.ccx-media {
  display: flex;
  width: 60px;
  height: 60px;
  flex: 0 0 auto;
  align-self: flex-start;
}
.ccx-media img {
  display: block;
  width: 60px;
  height: 60px;
  object-fit: cover;
  border-radius: 50%;
  border: 2px solid #FFDD00;
}

.ccx-copy {
  display: flex;
  flex-direction: column;
  gap: 6px;
  flex: 1 1 auto;
  margin-left: 1rem;
}
.ccx-maintext {
  text-align: left;
  margin: 0;
  color: #fff;
  font-family: Gellix;
  font-weight: 500;
  font-style: italic;
  font-size: 17px;
  line-height: normal;
  text-shadow: none;
  word-break: break-word;
}
.ccx-desc {
  text-align: left;
  margin: 0;
  color: #fff;
  font-family: Gellix;
  font-size: 13px;
  text-shadow: none;
}
.ccx-desc strong {
  font-weight: 700;
}

.ccx-slider-bottom {
  width: 100%;
  display: flex;
  justify-content: flex-end;
}
.ccx-bottom-image,
.ccx-trustpilot {
  display: flex;
  align-items: center;
  justify-content: center;
}

@media (max-width: 576px) {
  .ccx-slider-wrapper {
    min-height: 10rem;
  }
}

@media (min-width: 768px) and (max-width: 991px) {
  .ccx-slider-wrapper {
    display: none !important;
  }
}

@media (min-width: 992px) {
  .ccx-slider-wrapper {
    width: 483px;
    margin: 0 auto;
    min-height: auto;
    border: 2px solid #ffdd00;
    background: #081f28a6;
  }
  .ccx-slider-top {
    min-height: 6rem;
  }
  .ccx-slider-bottom {
    padding-right: 1rem;
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

  const getVideoVariantKey = (variation) => {
    // variation-1 → variant1, variation-2 → variant2, etc.
    return variation.replace('variation-', 'variant');
  };

  const replaceHeroVideoSrc = (videoEl, variantKey) => {
    customLog('[replaceHeroVideoSrc] Running… using', variantKey);

    if (!window.MMLPVideos || !window.MMLPVideos[variantKey]) {
      customLog('[replaceHeroVideoSrc] No MMLPVideos data for', variantKey);
      return;
    }

    const { desktop, mobile } = window.MMLPVideos[variantKey];

    const isMobile = window.matchMedia('(max-width: 767px)').matches;
    const newSrc = isMobile ? mobile : desktop;

    customLog('[replaceHeroVideoSrc] New video URL:', newSrc);

    videoEl.src = newSrc;
    videoEl.setAttribute("src", newSrc);
    videoEl.setAttribute("data-src", newSrc);

    videoEl.load();

    customLog('[replaceHeroVideoSrc] Video src replaced:', videoEl);
  };

  const attachVideoResizeListener = (videoEl, variantKey) => {
    customLog('[attachVideoResizeListener] Initializing resize watcher… using', variantKey);

    if (!window.MMLPVideos || !window.MMLPVideos[variantKey]) {
      customLog('[attachVideoResizeListener] No MMLPVideos data for', variantKey);
      return;
    }

    const { desktop, mobile } = window.MMLPVideos[variantKey];

    let isMobile = window.matchMedia("(max-width: 767px)").matches;

    const updateOnResize = () => {
      const nowMobile = window.matchMedia("(max-width: 767px)").matches;

      if (nowMobile !== isMobile) {
        isMobile = nowMobile;
        const newSrc = isMobile ? mobile : desktop;

        customLog('[attachVideoResizeListener] Breakpoint changed — updating video to:', newSrc);

        videoEl.src = newSrc;
        videoEl.setAttribute("src", newSrc);
        videoEl.setAttribute("data-src", newSrc);
        videoEl.load();
      }
    };

    window.addEventListener('resize', updateOnResize);

    customLog('[attachVideoResizeListener] Listener added');
  };

  const fadeSwap = (container, updateFn) => {
    if (isAnimating) return; // ignore rapid clicks during an active animation
    isAnimating = true;
    container.classList.remove('is-fading-in');
    container.offsetHeight;

    const onFadeOutEnd = () => {
      // update content while invisible
      updateFn();

      // next frame, fade in
      requestAnimationFrame(() => {
        container.classList.add('is-fading-in');
        container.classList.remove('is-fading-out');

        const onFadeInEnd = () => {
          container.removeEventListener('transitionend', onFadeInEnd);
          container.classList.remove('is-fading-in');
          isAnimating = false;
        };

        // fallback if transitionend doesn't fire
        const fallbackIn = setTimeout(() => {
          container.removeEventListener('transitionend', onFadeInEnd);
          container.classList.remove('is-fading-in');
          isAnimating = false;
        }, 400); // 250ms CSS + buffer

        container.addEventListener('transitionend', (e) => {
          if (e.target !== container || e.propertyName !== 'opacity') return;
          clearTimeout(fallbackIn);
          onFadeInEnd();
        }, { once: true });
      });
    };

    // start fade out
    container.classList.add('is-fading-out');

    // fallback if transitionend doesn't fire
    const fallbackOut = setTimeout(() => {
      onFadeOutEnd();
    }, 300); // 250ms CSS + buffer

    container.addEventListener('transitionend', (e) => {
      if (e.target !== container || e.propertyName !== 'opacity') return;
      clearTimeout(fallbackOut);
      onFadeOutEnd();
    }, { once: true });
  };

  const handlePrevClick = (state, render) => {
    const { data } = state;
    state.index = state.index === 0 ? data.length - 1 : state.index - 1;
    render();
  };

  const handleNextClick = (state, render) => {
    const { data } = state;
    state.index = state.index === data.length - 1 ? 0 : state.index + 1;
    render();
  };

  function createCCXSlider(CONTROL_HMA_LAST_H3, SLIDE_DATA, ARROW_LEFT, ARROW_RIGHT) {
    if (!CONTROL_HMA_LAST_H3) return;

    // === Helper: get user initials ===
    const getInitials = (name) => {
      if (!name) return '';
      const cleanName = name.replace(/[^a-zA-Z\s]/g, '').trim();
      const parts = cleanName.split(' ').filter(Boolean);
      return parts.length > 1
        ? (parts[0][0] + parts[1][0]).toUpperCase()
        : parts[0][0].toUpperCase();
    };

    // === Create wrapper ===
    const wrapper = document.createElement('div');
    wrapper.className = 'ccx-slider-wrapper';

    // === TOP (row) ===
    const top = document.createElement('div');
    top.className = 'ccx-slider-top';

    const leftWrap = document.createElement('div');
    leftWrap.className = 'ccx-arrow-wrap ccx-arrow-wrap--left';
    const leftBtn = document.createElement('button');
    leftBtn.className = 'ccx-arrow-btn ccx-arrow-btn--left';
    leftBtn.innerHTML = ARROW_LEFT;
    leftWrap.appendChild(leftBtn);

    const main = document.createElement('div');
    main.className = 'ccx-main';

    // main -> [media][copy]
    const media = document.createElement('div');
    media.className = 'ccx-media';

    // initials fallback (shown if image fails)
    const initialsCircle = document.createElement('div');
    initialsCircle.className = 'ccx-initials-circle';
    initialsCircle.style.cssText = `
      width: 60px;
      height: 60px;
      border-radius: 50%;
      background-color: #FFDD00;
      color: #000;
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: Gellix, sans-serif;
      font-weight: 700;
      font-size: 18px;
  `;

    // Copy container
    const copy = document.createElement('div');
    copy.className = 'ccx-copy';
    const pMain = document.createElement('p');
    pMain.className = 'ccx-maintext';
    const pDesc = document.createElement('p');
    pDesc.className = 'ccx-desc';
    copy.appendChild(pMain);
    copy.appendChild(pDesc);

    main.appendChild(media);
    main.appendChild(copy);

    const rightWrap = document.createElement('div');
    rightWrap.className = 'ccx-arrow-wrap ccx-arrow-wrap--right';
    const rightBtn = document.createElement('button');
    rightBtn.className = 'ccx-arrow-btn ccx-arrow-btn--right';
    rightBtn.innerHTML = ARROW_RIGHT;
    rightWrap.appendChild(rightBtn);

    top.appendChild(leftWrap);
    top.appendChild(main);
    top.appendChild(rightWrap);

    // Append to wrapper and insert after H3
    wrapper.appendChild(top);
    CONTROL_HMA_LAST_H3.insertAdjacentElement('afterend', wrapper);

    // === State + renderer ===
    const state = { index: 0, data: SLIDE_DATA };

    const render = () => {
      const slide = state.data[state.index];

      fadeSwap(main, () => {
        media.innerHTML = '';

        // ============================
        // IMAGE WITH FALLBACK TO INITIALS
        // ============================
        const img = document.createElement('img');
        img.src = slide.image;

        img.onerror = () => {
          media.innerHTML = '';
          initialsCircle.textContent = getInitials(slide.name);
          media.appendChild(initialsCircle);
        };

        img.onload = () => {
          media.innerHTML = '';
          media.appendChild(img);
        };

        // Try loading immediately
        media.appendChild(img);

        // ============================
        // MAIN TEXT (inside quotes)
        // ============================
        const formatted = slide.mainText.replace(/😊/g, '<span class="no-italic">😊</span>');
        pMain.innerHTML = `“${formatted}”`;

        // ============================
        // DESCRIPTION AREA
        // ============================
        pDesc.innerHTML =
          `<strong>${slide.name}</strong> from ${slide.location} won ` +
          `<strong>${slide.prize}</strong> in the ` +
          `<strong>${slide.month} Monthly Millionaire Draw.</strong>`;
      });
    };

    // === Initial render ===
    render();

    // === Navigation — KEEPING YOUR ORIGINAL LOGIC ===
    leftBtn.addEventListener('click', () => handlePrevClick(state, render));
    rightBtn.addEventListener('click', () => handleNextClick(state, render));
  }

  const handleSlideshowPosition = () => {
    const slideshowWrapper = document.querySelector('.ccx-slider-wrapper');
    const heroContent = document.querySelector('#hero-video > .campaign-hero__content');
    const mobileSubtext = document.querySelector('.campaign-hero-overlay .campaign-hero-subtext');

    if (!slideshowWrapper) {
      customLog('[handleSlideshowPosition] Slideshow wrapper not found');
      return;
    }

    const screenWidth = window.innerWidth;

    if (screenWidth >= 992) {
      // DESKTOP → inside hero content
      if (heroContent && heroContent.lastElementChild !== slideshowWrapper) {
        customLog('[handleSlideshowPosition] Moving slideshow to desktop hero content');
        heroContent.appendChild(slideshowWrapper);
      }
    } else {
      // MOBILE → after .campaign-hero-subtext
      if (mobileSubtext && mobileSubtext.nextElementSibling !== slideshowWrapper) {
        customLog('[handleSlideshowPosition] Moving slideshow after .campaign-hero-subtext (mobile)');
        mobileSubtext.insertAdjacentElement('afterend', slideshowWrapper);
      }
    }
  };


  const init = () => {
    try {
      customLog(TEST_ID + ' | ' + VARIATION + ' | ' + TEST_NAME);
      customLog('[init] Current URL: ' + CURRENT_URL);

      waitForElements(
        [
          { selector: SELECTORS.CONTROL_HERO_VIDEO_ELEMENT, count: 1 },
          { selector: SELECTORS.CONTROL_HMA_LAST_H3, count: 1 },
        ],
        function (results) {

          console.log(results);

          addStyles(STYLES, VARIATION);
          addBodyClass();

          const CONTROL_HERO_VIDEO_ELEMENT = results[0].elements[0];
          if (!CONTROL_HERO_VIDEO_ELEMENT) return;

          customLog(CONTROL_HERO_VIDEO_ELEMENT);

          const variantKey = getVideoVariantKey(VARIATION);

          customLog('[init] Using variant key:', variantKey);

          replaceHeroVideoSrc(CONTROL_HERO_VIDEO_ELEMENT, variantKey);
          attachVideoResizeListener(CONTROL_HERO_VIDEO_ELEMENT, variantKey);





          const CONTROL_HMA_LAST_H3 = results?.[1]?.elements?.[0];
          if (!CONTROL_HMA_LAST_H3) return;
          customLog('CONTROL_HMA_LAST_H3', CONTROL_HMA_LAST_H3);

          // ==========================
          // Component Creation
          // ==========================
          createCCXSlider(
            CONTROL_HMA_LAST_H3,
            SLIDE_DATA,
            ARROW_LEFT,
            ARROW_RIGHT,
            VARIATION
          );

          handleSlideshowPosition(CONTROL_HMA_LAST_H3);
          // Listen for window resize with debouncing
          window.addEventListener('resize', () => {
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(() => {
              handleSlideshowPosition();
            }, 150);
          });
        }
      );

    } catch (error) {
      customLog(error);
    }
  }

  init();
})();
