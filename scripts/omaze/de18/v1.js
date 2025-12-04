(function () {
  const LOG_ENABLED = true;
  const TEST_ID = "de18";
  const TEST_NAME = "Winner content on Homepage";
  const VARIATION = "variation-1";
  const CURRENT_URL = window.location.href;

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

  const SELECTORS = {
    CONTROL_HOME_BANNER: '.home--banner',
  };

  const CONTENT_DATA = {
    heading: 'UNSERE BISHERIGEN GEWINNER UND GEWINNERINNEN',
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
      cardCopy: 'Genau in dieser Gegend wollten wir eigentlich Urlaub machen - und jetzt besitze ich hier ein Haus. Es ist einfach unglaublich!',
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
      cardCopy: 'Wir hatten ein gutes Leben. Jetzt haben wir das perfekte Zuhause - und keine Sorgen mehr.',
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
      cardCopy: 'Ich habe noch nie etwas so Großes gewonnen. Ich konnte es kaum glauben, als ich die Nachricht bekam. Ein Gewinn wie dieser ist etwas, wovon man nur träumen kann - und jetzt steht dieses Traumauto einfach vor meiner Tür.',
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
      cardCopy: 'Zuerst war ich etwas skeptisch und dachte: Das kann nicht echt sein - das ist bestimmt ein Scherz. Aber dann hatte ich schnell ein gutes Gefühl bei Omaze. Und als das Team mit dem Porsche vor meiner Tür stand - das war überwältigend.',
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
      cardCopy: 'Am Anfang fühlt es sich sehr unwirklich an, besonders wenn man noch nie mit solchen Geldbeträgen zu tun hatte. Gleichzeitig ist man unglaublich stolz, gewonnen zu haben. Danke, Omaze.',
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
      cardCopy: 'Ich kann es immer noch kaum glauben. Meine Hotelgäste fahren normalerweise Autos wie dieses - und jetzt sitze ich selbst am Steuer eines Porsche 911. Meine Oma bekommt die erste Spritztour!',
    },
    ]
  }

  const STYLES = `
    .ccx-container {
      opacity: 1;
      padding-top: 3.5rem;
      padding-bottom: 3.5rem;
      background: white;
    }
    .ccx-container__heading {
      text-align: center;
    }
    .ccx-card__container {
      display: flex;
      align-items: flex-start;
      gap: 2rem;
      overflow: scroll;
    }
    .ccx-card {
      min-width: 340px;
      opacity: 1;
      border-radius: 12px;
      box-shadow: 0px 4px 34px 0px #0000001A;
      display: block;
    }
    .ccx-card .ccx-card__video {
      position: relative;
      width: 340px;
      height: 214px;
      overflow: hidden;
      border-radius: 12px 12px 0 0;
      background: #000;
    }
    .ccx-card__video img {
      width: 340px;
      height: 214px;
      max-width: 340px;
      object-fit: cover;
      display: block;
    }
    .ccx-card__video .ccx-play-button {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      cursor: pointer;
      z-index: 3;
      width: 58px;
      height: 56px;
    }
    .ccx-card__video iframe {
      width: 100%;
      height: 100%;
      border: none;
      display: none; /* hidden until clicked */
    }

    .ccx-card__labels {
      display: flex;
      background: #FFDD00;
    }
    .ccx-card__label-item.ccx-card__label-item--prize {
      flex: 2;
    }
    .ccx-card__label-item.ccx-card__label-item--price {
      flex: 1;
    }
    .ccx-card__label-item.ccx-card__label-item--date {
      flex: 1;
    }



    .ccx-card__label-item {
      display: flex;
      flex-flow: column;
    }
    .ccx-card__label-title {
      font-family: Showtime;
      font-weight: 500;
      color: #081F28;
      font-size: 18px;
      line-height: 16px;
      letter-spacing: 0;
      text-transform: uppercase;
    }
    .ccx-card__label-value {
      font-family: Gellix;
      font-weight: 600;
      color: #081F28;
      font-size: 16px;
      line-height: 22px;
      letter-spacing: 0;
      vertical-align: middle;
    }
    .ccx-card__content {
      opacity: 1;
      padding-top: 12px;
      padding-right: 16px;
      padding-bottom: 40px;
      padding-left: 16px;
      border-bottom-right-radius: 12px;
      border-bottom-left-radius: 12px;
      background: #FFFFFF;
      /* hard overrides to stop stretching */
      height: auto !important;
      display: block;
      flex: 0 0 auto !important;
      align-self: auto;
    }
    h3.ccx-card__title {
      font-family: Gellix;
      font-weight: 700;
      margin: 0;
      font-size: 21px;
      line-height: 100%;
      letter-spacing: -0.16px;
      text-align: center;
      vertical-align: middle;
      text-transform: uppercase;
      margin-bottom: 0.5rem;
    }
    .ccx-card__copy {
      font-family: Gellix;
      font-weight: 500;
      font-size: 16px;
      line-height: 22px;
      letter-spacing: -0.16px;
      text-align: center;
      vertical-align: middle;
      color: #626262;
    }
    .ccx-container__subheading {
      display: none;
    }
    .ccx-container__cta {
      display: none;
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
            const {
              html,
              ...rest
            } = item;
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
        const {
          html,
          ...rest
        } = msg;
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
      const {
        selector,
        count
      } = cfg;
      return DYO.waitForElementAsync(selector, count, 100, 150)
        .then(elements => ({
          selector,
          elements
        }));
    });

    Promise.all(promises)
      .then(results => {
        if (typeof callback === 'function') callback(results);
      })
      .catch((err) => {
        console.error('[waitForElements] error:', err);
      });
  }

  function createCard(cardData) {
    const ytId =
      cardData.videoSrc.split("v=")[1] ||
      cardData.videoSrc.split("youtu.be/")[1];

    return `
<div class="ccx-card">

  <div class="ccx-card__video" data-video="${ytId}">
    <img src="${cardData.image}" alt="video preview" class="ccx-video-thumb" />
    <div class="ccx-play-button">${SVG_PLAY_BUTTON}</div>
    <iframe 
      src="" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
  </div>

  <div class="ccx-card__labels">
    <div class="ccx-card__label-item ccx-card__label-item--prize">
      <span class="ccx-card__label-title">${cardData.labels[0].title}</span>
      <span class="ccx-card__label-value">${cardData.labels[0].value}</span>
    </div>
    <div class="ccx-card__label-item ccx-card__label-item--price">
      <span class="ccx-card__label-title">${cardData.labels[1].title}</span>
      <span class="ccx-card__label-value">${cardData.labels[1].value}</span>
    </div>
    <div class="ccx-card__label-item ccx-card__label-item--date">
      <span class="ccx-card__label-title">${cardData.date.month}</span>
      <span class="ccx-card__label-value">${cardData.date.year}</span>
    </div>
  </div>

  <div class="ccx-card__content">
    <h3 class="ccx-card__title">${cardData.title}</h3>
    <p class="ccx-card__copy">${cardData.copy}</p>
  </div>

</div>`;
  }

  function createAllCards(data) {
    return data.cardsData
      .map((card) =>
        createCard({
          videoSrc: card.videoUrl,
          image: card.image,  // ✔ USE THE REAL IMAGE
          labels: card.labels.map(l => ({
            title: l.title,
            value: l.amount
          })),
          date: {
            month: card.date.month,
            year: card.date.year
          },
          title: card.cardTitle,
          copy: card.cardCopy,
        })

      )
      .join("");
  }

  const init = () => {
    try {
      customLog(TEST_ID + ' | ' + VARIATION + ' | ' + TEST_NAME);
      customLog('[init] Current URL: ' + CURRENT_URL);

      waitForElements(
        [{
          selector: SELECTORS.CONTROL_HOME_BANNER,
          count: 1
        },],
        function (results) {

          addStyles(STYLES, VARIATION);
          addBodyClass();

          const CONTROL_HOME_BANNER = results[0].elements[0];
          if (!CONTROL_HOME_BANNER) return;
          customLog(CONTROL_HOME_BANNER);

          // Create new container and attach it after CONTROL_HOME_BANNER
          const ccxContainer = document.createElement('div');
          ccxContainer.classList.add('ccx-container');
          // CONTROL_HOME_BANNER.parentNode.insertBefore(container, CONTROL_HOME_BANNER.nextSibling);
          CONTROL_HOME_BANNER.insertAdjacentElement('afterend', ccxContainer);

          // Generate all cards
          const cardsHtml = createAllCards(CONTENT_DATA);

          // Insert cards into the container
          // Build full HTML inside ccx-container
          // Build full HTML inside ccx-container
          ccxContainer.innerHTML = `
            <h1 class="ccx-container__heading">${CONTENT_DATA.heading}</h1>

            <div class="ccx-card__container container">
                ${cardsHtml}
            </div>

            <h1 class="ccx-container__subheading">${CONTENT_DATA.subHeading}</h1>

            <button class="ccx-container__cta">
              Jetzt teilnehmen
            </button>
          `;

          // Activate image → video player
          document.querySelectorAll('.ccx-card__video').forEach(wrapper => {
            const iframe = wrapper.querySelector('iframe');
            const img = wrapper.querySelector('img');
            const playBtn = wrapper.querySelector('.ccx-play-button');
            const ytId = wrapper.dataset.video;

            const playVideo = () => {
              img.style.display = 'none';
              playBtn.style.display = 'none';

              iframe.src = `https://www.youtube.com/embed/${ytId}?autoplay=1&rel=0&showinfo=0`;
              iframe.style.display = 'block';
            };

            img.addEventListener('click', playVideo);
            playBtn.addEventListener('click', playVideo);
          });

        }
      );

    } catch (error) {
      customLog(error);
    }
  }

  init();
})();