(function () {
  const LOG_ENABLED = true;
  const TEST_ID = "de18";
  const TEST_NAME = "Winner content on Homepage";
  const VARIATION = "variation-2";
  const CURRENT_URL = window.location.href;

  const block = `.ccx-${TEST_ID}--${VARIATION}`;

const styles = `
.ccx-de18--variation-2 {
    background: #081F28;
    color: white;
    font-family: Showtime;
    font-weight: 500;
    font-size: 36px;
    line-height: 40px;
    letter-spacing: 0;
    text-align: center;
    vertical-align: middle;
    text-transform: uppercase;
}

.ccx-de18--variation-2__title {
    color: #F5F5F5;
    margin-bottom: 1rem;
    padding: 1rem;
    padding-bottom: 0;
}

.ccx-de18--variation-2__paragraph,
.ccx-de18--variation-2__paragraph-one {
  font-family: Gellix;
  font-weight: 400;
  font-size: 20px;
  line-height: 30px;
  letter-spacing: 0;
  text-align: center;
  vertical-align: middle;
  padding: 0 1rem;
  text-transform: none;
}

.ccx-de18--variation-2__paragraph span {
  color: #FFDD00;
  font-weight: 700;
}

.ccx-de18--variation-2__button {
  display: none; /* hidden on mobile */
}

/*** VIDEO ***/
.ccx-de18--variation-2__video-container {
  position: relative;
  width: 100%;
  height: 380px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
}

.ccx-de18--variation-2__video-container img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.ccx-de18--variation-2__video {
  width: 100%;
  height: 100%;
  opacity: 0.9;
  object-fit: cover;
}

.ccx-de18--variation-2__polygon {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 10;
  cursor: pointer;
  transition: transform 0.3s ease, opacity 0.3s ease;
  display: flex;
  justify-content: center;
  align-items: center;
  pointer-events: auto;
}

/*** MODAL ***/
.ccx-de18--variation-2__video-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .4);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
}

.ccx-de18--variation-2__video-modal {
  position: relative;
  width: 100%;
  max-width: 720px;
  aspect-ratio: 16 / 9;
  background: #000;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.4);
}

.ccx-de18--variation-2__video-modal iframe {
  width: 100%;
  height: 100%;
  border: 0;
}

/*** DESKTOP LAYOUT ***/
@media (min-width: 768px) {

  .ccx-de18--variation-2 {
    display: flex;
    flex-direction: row;
    align-items: center;
    text-align: left;
    height: 720px;
  }

  .ccx-de18--variation-2__text {
    flex: 1;
    padding: 2rem;
  }

  .ccx-de18--variation-2__title {
    padding: 0;
  }

  .ccx-de18--variation-2__paragraph,
  .ccx-de18--variation-2__paragraph-one {
    padding: 0;
    text-align: left;
  }

  .ccx-de18--variation-2__button {
    display: inline-block;
    margin-top: 1.5rem;
    background: #FFDD00;
    color: #000;
    padding: 1rem 2rem;
    border: none;
    cursor: pointer;
    font-family: Gellix;
    font-weight: 700;
    text-transform: uppercase;
  }

  .ccx-de18--variation-2__video-container {
    flex: 1;
    height: 100%;
  }
}
`;

  const IMAGE_ONE = 'https://cdn-eu.dynamicyield.com/api/9880449/images/dd4521e755b9.jpg';

  const POLYGON = `<svg width="65" height="73" viewBox="0 0 65 73" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_d_6724_1052)">
<path d="M60.25 32.476L4 64.9519L4 -2.45877e-06L60.25 32.476Z" fill="white"/>
</g>
<defs>
<filter id="filter0_d_6724_1052" x="0" y="0" width="64.25" height="72.9519" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="4"/>
<feGaussianBlur stdDeviation="2"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_6724_1052"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_6724_1052" result="shape"/>
</filter>
</defs>
</svg>`;

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
        // Single DOM element
        parts.push("%o");
        values.push(msg);

      } else if (Array.isArray(msg)) {
        // Handle arrays
        msg.forEach(item => {
          if (item instanceof Element) {
            parts.push("%o");
            values.push(item);
          } else if (item && typeof item === "object" && "html" in item) {
            // Object with HTML string
            const wrapper = document.createElement("div");
            wrapper.innerHTML = item.html.trim();
            const el = wrapper.firstElementChild;

            parts.push("%o");
            values.push(el);

            // Log other props (e.g., entriesAmount)
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
        // Single object with HTML string
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
        // Normal text/objects
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

  const VIDEO_URL = '';

  const addStyles = (css) => {
    customLog('[addStyles] Starting the addStyles function...');

    if (!css) return;

    if (!css) {
      customLog('[addStyles] No CSS provided');
      return;
    }

    // Check if the style tag already exists
    if (document.querySelector('.ccx-styles-de9-v3')) {
      customLog('[addStyles] Custom styles already exist.');
      return;
    }

    // Create a new <style> element
    const style = document.createElement('style');
    style.classList.add('ccx-styles-de9-v3');
    style.appendChild(document.createTextNode(css));

    // Append the style tag to the document head
    document.head.appendChild(style);
    customLog('Custom styles added.');
  };

  const waitForElements = (configs, callback) => {
    customLog('[waitForElements] Starting to wait for elements...');

    if (!configs || !Array.isArray(configs) || configs.length === 0) {
      customLog('[waitForElements] No configs provided.');
      return;
    }

    if (!window.DYO || !DYO.waitForElementAsync) {
      customLog('[waitForElements] DYO.waitForElementAsync is not available.');
      return;
    }

    // Create promises for each config
    const promises = configs.map(cfg => {
      const { selector, count } = cfg;
      return DYO.waitForElementAsync(selector, count, 100, 150)
        .then(elements => {
          customLog('[' + 'waitForElements' + '] Found ' + elements.length + ' for ' + selector);
          return { selector, elements };
        });
    });

    Promise.all(promises)
      .then(results => {
        // customLog('[waitForElements] All elements found:', results);
        if (typeof callback === 'function') callback(results);
      })
      .catch(error => {
        customLog('[waitForElements] Some selectors not found within timeout.', error);
      });
  }

  const createContainer = () => {
    const block = `ccx-${TEST_ID}--${VARIATION}`;

    const container = document.createElement("div");
    container.classList.add(block);

    //
    // TEXT WRAPPER
    //
    const textWrapper = document.createElement("div");
    textWrapper.classList.add(`${block}__text`);

    //
    // H2 TITLE
    //
    const title = document.createElement("h2");
    title.classList.add(`${block}__title`);
    title.textContent = "Lerne den Gewinner des Hauses am Plauer See kennen";
    textWrapper.appendChild(title);

    //
    // PARAGRAPH 1 (DESKTOP ONLY)
    //
    const paragraphOne = document.createElement("p");
    paragraphOne.classList.add(`${block}__paragraph-one`);
    paragraphOne.textContent =
      "“Wir hatten ein gutes Leben. Jetzt haben wir das perfekte Zuhause – und keine Sorgen mehr.“";
    textWrapper.appendChild(paragraphOne);

    //
    // PARAGRAPH 2
    //
    const paragraphTwo = document.createElement("p");
    paragraphTwo.classList.add(`${block}__paragraph`);

    const before = document.createTextNode("Schau dir an, wie ");
    const span = document.createElement("span");
    span.textContent = "Burak aus Berlin ";
    const after = document.createTextNode(
      "erfährt, dass er das Haus am Plauer See gewonnen hat – ein Moment, der alles verändert"
    );

    paragraphTwo.appendChild(before);
    paragraphTwo.appendChild(span);
    paragraphTwo.appendChild(after);
    textWrapper.appendChild(paragraphTwo);

    //
    // BUTTON (DESKTOP ONLY)
    //
    const button = document.createElement("button");
    button.classList.add(`${block}__button`);
    button.textContent = "Jetzt mitmachen";
    textWrapper.appendChild(button);

    container.appendChild(textWrapper);

    //
    // VIDEO CONTAINER
    //
    const videoContainer = document.createElement("div");
    videoContainer.classList.add(`${block}__video-container`);

    const img = document.createElement("img");
    img.src =
      "https://cdn.shopify.com/s/files/1/0698/8919/6213/files/DEH1_PLAUER_SEE_HAUS_GP_WINNER_BURAK_16x9_5788548a-a15c-4591-8348-628320d077e7.jpg?v=1754506712";
    img.style.width = "100%";
    img.style.height = "100%";
    img.style.objectFit = "cover";
    videoContainer.appendChild(img);

    const polygonWrapper = document.createElement("div");
    polygonWrapper.classList.add(`${block}__polygon`);
    polygonWrapper.innerHTML = POLYGON;
    videoContainer.appendChild(polygonWrapper);

    container.appendChild(videoContainer);

    return container;
  };

  const openVideoModal = (videoUrl) => {
    document.body.style.overflow = "hidden";

    // Create backdrop
    const backdrop = document.createElement("div");
    backdrop.classList.add("ccx-de18--variation-2__video-backdrop");

    // Create modal container
    const modal = document.createElement("div");
    modal.classList.add(".ccx-de18--variation-2__video-modal");

    // Add iframe for YouTube video
    const iframe = document.createElement("iframe");
    iframe.src = videoUrl;
    iframe.title = "YouTube video player";
    iframe.allow =
      "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
    iframe.allowFullscreen = true;
    modal.appendChild(iframe);
    backdrop.appendChild(modal);
    document.body.appendChild(backdrop);

    // Click backdrop to close
    backdrop.addEventListener("click", (e) => {
      if (e.target === backdrop) {
        document.body.style.overflow = "";
        document.body.removeChild(backdrop);
      }
    });
  };

  const attachEventListeners = () => {
    const CCX_VIDEO_PLAY_BUTTON = document.querySelector('.ccx-container__polygon');

    if (CCX_VIDEO_PLAY_BUTTON) {
      CCX_VIDEO_PLAY_BUTTON.addEventListener("click", () => {
        customLog('[attachEventListeners] Play button clicked');
        openVideoModal("https://www.youtube.com/embed/iqUZ4PwjqJk?autoplay=1");
      });
    }
  };

  const updateLiveRentSellHeader = () => {
    // live-rent-sell > h1
    const liveRentSellHeader = document.querySelector('live-rent-sell > h1');

    if (!liveRentSellHeader) {
      customLog('[updateLiveRentSellHeader] live-rent-sell header not found');
      return;
    }

    if (liveRentSellHeader) {
      liveRentSellHeader.textContent = 'Entdecke das Landhaus in Oberbayern';
    }
  }

  const init = () => {
    try {
      customLog(TEST_NAME + ' | ' + VARIATION);
      customLog('[init] Current URL: ' + CURRENT_URL);

      document.body.classList.add('ccx-omaze-oz-de9-' + VARIATION);
      customLog('[init] Added class ccx-container to body');

      waitForElements(
        [
          { selector: '.hero-mobile-addendum', count: 1 }
        ],
        function (results) {
          console.log(results);
          addStyles(styles);

          // const CONTROL_ELEMENT_LOGIN = document.querySelector('#begin-checkout a[href*="/account/login"]');
          const CONTROL_HERO_ADDENDUM = results[0].elements[0];
          if (!CONTROL_HERO_ADDENDUM) {
            customLog('[init] Login element not found');
            return;
          }

          const CCX_CONTAINER = createContainer();
          CONTROL_HERO_ADDENDUM.insertAdjacentElement('afterend', CCX_CONTAINER);
          attachEventListeners();

          updateLiveRentSellHeader();
        }
      );

    } catch (error) {
      customLog(error.message);
    }
  }

  init();

})();
