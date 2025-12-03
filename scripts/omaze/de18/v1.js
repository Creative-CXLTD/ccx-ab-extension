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

  const SELECTORS = {
    CONTROL_HOME_BANNER: '.home--banner',
  };

  const CONTENT_DATA = {
    heading: 'UNSERE BISHERIGEN GEWINNER UND GEWINNERINNEN',
    subHeading: 'Could you be our next winners?',
    buttonText: 'Jetzt mitmachen',
    cardsData: [{
      // videoUrl: 'https://youtu.be/Jjxgaq84lig',
      videoUrl: 'https://www.youtube.com/watch?v=Jjxgaq84lig',
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
      gap: 2rem;
      margin-bottom: 4rem;
    }
    .ccx-card {
      min-width: 340px;
      opacity: 1;
      border-radius: 12px;
      box-shadow: 0px 4px 34px 0px #0000001A;
    }
    .ccx-card .ccx-card__video {
      background: red;
      border-radius: 0.75rem 0.75rem 0 0;
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
      height: 242px;
      opacity: 1;
      padding-top: 12px;
      padding-right: 16px;
      padding-bottom: 40px;
      padding-left: 16px;
      border-bottom-right-radius: 12px;
      border-bottom-left-radius: 12px;
      background: #FFFFFF;
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
    const label1 = cardData.labels[0];
    const label2 = cardData.labels[1];

    return `
<div class="ccx-card">

  <!-- Video Section -->
  <div class="ccx-card__video">
    <video src="${cardData.videoSrc || ''}" width="340" height="214"></video>
  </div>

  <!-- Labels Section -->
  <div class="ccx-card__labels">

    <!-- Label 1 -->
    <div class="ccx-card__label-item ccx-card__label-item--prize">
      <span class="ccx-card__label-title">${label1.title}</span>
      <span class="ccx-card__label-value">${label1.value}</span>
    </div>

    <!-- Label 2 -->
    <div class="ccx-card__label-item ccx-card__label-item--price">
      <span class="ccx-card__label-title">${label2.title}</span>
      <span class="ccx-card__label-value">${label2.value}</span>
    </div>

    <!-- Date (special class) -->
    <div class="ccx-card__label-item ccx-card__label-item--date">
      <span class="ccx-card__label-title">${cardData.date.month}</span>
      <span class="ccx-card__label-value">${cardData.date.year}</span>
    </div>

  </div>

  <!-- Content Section -->
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
        }
      );

    } catch (error) {
      customLog(error);
    }
  }

  init();
})();