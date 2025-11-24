(function () {
  const LOG_ENABLED = true;
  const TEST_ID = "DE16";
  const TEST_NAME = "BV CLOSEDATE IN THE NAVBAR";
  const VARIATION = "variation-1";
  const CURRENT_URL = window.location.href;

  const SELECTORS = {
    CONTROL_NAVBAR_TOGGLE_MENU: '#mainNavbar > .nav.house-nav',
  }

  const SVG_THUNDERBOLT = `<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.00012 10.5C2.71044 10.501 2.44608 10.3351 2.32104 10.0738C2.19599 9.81245 2.23262 9.50249 2.41512 9.27752L9.84012 1.62752C9.95484 1.49511 10.1459 1.45977 10.3004 1.5424C10.4549 1.62502 10.5316 1.8036 10.4851 1.97252L9.04512 6.48752C8.95893 6.7182 8.99147 6.97649 9.13219 7.17859C9.27291 7.38068 9.50387 7.50082 9.75012 7.50002H15.0001C15.2898 7.49903 15.5542 7.66496 15.6792 7.92627C15.8043 8.18759 15.7676 8.49755 15.5851 8.72252L8.16012 16.3725C8.04541 16.5049 7.85431 16.5403 7.69983 16.4576C7.54535 16.375 7.46866 16.1964 7.51512 16.0275L8.95512 11.5125C9.04131 11.2818 9.00877 11.0235 8.86806 10.8214C8.72734 10.6194 8.49638 10.4992 8.25012 10.5H3.00012" stroke="#081F28" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;

  const SVG_TICKET_ICON = `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M1.3335 6.00004C2.43733 6.00004 3.3335 6.89621 3.3335 8.00004C3.3335 9.10387 2.43733 10 1.3335 10V11.3334C1.3335 12.0693 1.93094 12.6667 2.66683 12.6667H13.3335C14.0694 12.6667 14.6668 12.0693 14.6668 11.3334V10C13.563 10 12.6668 9.10387 12.6668 8.00004C12.6668 6.89621 13.563 6.00004 14.6668 6.00004V4.66671C14.6668 3.93082 14.0694 3.33337 13.3335 3.33337H2.66683C1.93094 3.33337 1.3335 3.93082 1.3335 4.66671V6.00004M8.66683 3.33337V4.66671M8.66683 11.3334V12.6667M8.66683 7.33337V8.66671" stroke="#0B2430" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
  `;

  const STYLES = `
    .ccx-countdown-container {
        display: none;
        color: #F5F5F5;
    }
    .ccx-countdown-container p {
        margin: 0;
    }
    @media screen and (min-width: 1255px){
      .ccx-countdown-container {
          display: initial;
      }



      .ccx-de16-variation-1 .ccx-top-row p {
        font-family: Gellix;
        font-weight: 700;
        font-size: 16px;
        line-height: 24px;
        letter-spacing: 0;
        vertical-align: middle;
        color: #F5F5F5;
      }
      .ccx-de16-variation-1 .ccx-bottom-row {
        color: #F5F5F5;
      }
      .ccx-de16-variation-1 .ccx-bottom-row p {
        font-family: Gellix;
        font-weight: 400;
        font-size: 20px;
        letter-spacing: 0;
      }
      .ccx-de16-variation-1 .ccx-bottom-row span:nth-child(1) {
        font-family: Gellix;
        font-weight: 700;
        font-style: Bold;
        font-size: 20px;
        letter-spacing: 0;
      }
      .ccx-de16-variation-1 .ccx-bottom-row span:nth-child(2) {
        font-family: Gellix;
        font-weight: 700;
        font-style: Bold;
        font-size: 20px;
        letter-spacing: 0;
        text-decoration: underline;
        text-decoration-style: solid;
        text-decoration-offset: 0%;
        text-decoration-thickness: 0%;
        text-decoration-skip-ink: auto;
        text-decoration-color: #F5F5F5;
      }



      .ccx-de16-variation-2 .ccx-countdown-container {
        display: flex;
        align-items: center;
        gap: 1rem;
      }
      .ccx-de16-variation-2 .ccx-first-container {
        background: #FFFFFF;
        border: 1px solid #F5F5F5;
        min-height: 49px;
        opacity: 1;
        padding-right: 16px;
        padding-left: 16px;
        border-radius: 24px;
        border-width: 1px;
        border-style: dashed;
        display: flex;
        padding-top: 0;
        padding-bottom: 0;
        align-items: center;
        gap: 10px;
        justify-content: space-between;
      }
      .ccx-de16-variation-2 .ccx-first-container .ccx-right-text .ccx-top-row p {
        color: #081F28;
        font-family: Gellix;
        font-weight: 400;
        font-size: 14px;
        letter-spacing: 0;
      }
      .ccx-de16-variation-2 .ccx-first-container .ccx-right-text .ccx-top-row p > span{
        color: #081F28;
        font-family: Gellix;
        font-weight: 700;
        font-size: 14px;
        letter-spacing: 0px;
      }
      .ccx-de16-variation-2 .ccx-first-container .ccx-right-text .ccx-top-row p > span:nth-child(2) {
        font-family: Gellix;
        font-weight: 700;
        font-size: 14px;
        letter-spacing: 0;
        text-decoration: underline;
        text-decoration-style: solid;
        text-decoration-thickness: 0%;
      }
      .ccx-de16-variation-2 .ccx-first-container .ccx-right-text .ccx-bottom-row p {
        font-family: Gellix;
        font-weight: 400;
        color: #626262;
        font-size: 12px;
        letter-spacing: 0px;
      }
      .ccx-de16-variation-2 .ccx-second-container {
        min-width: 175px;
        max-height: 41px;
        opacity: 1;
        padding-top: 12px;
        padding-right: 1rem;
        padding-bottom: 12px;
        padding-left: 1rem;
        border-radius: 24px;
        border-width: 1px;
        background: #FFD400;
        border: 1px solid #E1E4E6;
        display: flex;
        justify-content: space-around;
      }
      .ccx-de16-variation-2 .ccx-second-container .ccx-btn-right-text > p {
        font-family: Gellix;
        font-weight: 700;
        color: #081F28;
        font-size: 14px;
        letter-spacing: 0;
        line-height: 14px;
      }




    .ccx-de16-variation-3 .ccx-countdown-container .ccx-top-container {
      margin-bottom: 10px;
    }
    .ccx-de16-variation-3 .ccx-countdown-container .ccx-top-container p {
      font-family: Gellix;
      font-weight: 700;
      font-size: 12px;
      letter-spacing: 0px;
    }
    .ccx-de16-variation-3 .ccx-countdown-container .ccx-bottom-container {
      display: flex;
      gap: 10px;
    }
    .ccx-de16-variation-3 .ccx-countdown-container .ccx-bottom-container .ccx-bottom-left {
      min-width: 117px;
      height: 38px;
      min-width: 44px;
      opacity: 1;
      border-radius: 44px;
      padding: 8px;
      background: #FFFFFF;
      display: flex;
      align-items: center;
    }
    .ccx-de16-variation-3 .ccx-countdown-container .ccx-bottom-container .ccx-bottom-left p {
      font-family: Gellix;
      font-weight: 600;
      color: #626262;
      font-size: 18px;
      letter-spacing: 0px;
      text-align: center;
    }
    .ccx-de16-variation-3 .ccx-countdown-container .ccx-bottom-container .ccx-bottom-left span:nth-child(1) {
      font-family: Gellix;
      font-weight: 700;
      font-style: Bold;
      font-size: 18px;
      letter-spacing: 0px;
      text-align: center;
      color: #081F28;
    }
    .ccx-de16-variation-3 .ccx-countdown-container .ccx-bottom-container .ccx-bottom-left span:nth-child(2) {
      font-family: Gellix;
      font-weight: 600;
      font-size: 10px;
      letter-spacing: 0px;
      text-align: center;
      color: #081F28;
      display: inline-block;
    }
    .ccx-de16-variation-3 .ccx-countdown-container .ccx-bottom-container .ccx-bottom-right-btn {
      width: 142px;
      height: 38px;
      opacity: 1;
      padding-top: 8px;
      padding-bottom: 8px;
      border-radius: 999px;
      background: #FFD400;
      gap: 2px;
      padding-left: 0;
      padding-right: 0;
      justify-content: center;
      align-items: center;
      display: flex;
    }
    .ccx-de16-variation-3 .ccx-countdown-container .ccx-bottom-container .ccx-bottom-right-btn .ccx-btn-right-text p {
      font-family: Gellix;
      font-weight: 700;
      color: #081F28;
      font-size: 12px;
      letter-spacing: 0;
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

const getRemainingDaysNumber = () => {
  const remaining = getRemainingTimeText(); // e.g. "6 Tagen" or "< 24 Std."

  // If less than 24 hours
  if (remaining.includes("< 24")) {
    return "< 24";  // Variation-3 wants "< 24"
  }

  // Otherwise extract the number
  const match = remaining.match(/\d+/);
  return match ? match[0] : "0"; 
};


  const getRemainingTimeText = () => {
    // End date in CET (Germany)
    const endDate = new Date(Date.UTC(2025, 10, 24, 22, 59, 59));

    const now = new Date();

    const diffMs = endDate.getTime() - now.getTime();

    if (diffMs <= 0) return "< 24 Std.";

    const diffHours = diffMs / (1000 * 60 * 60);

    if (diffHours <= 24) return "< 24 Std.";

    const diffDays = Math.floor(diffHours / 24);

    return diffDays + ' Tagen';
  };


  const createCountdownContainer = (CONTROL_NAVBAR_TOGGLE_MENU) => {
    const countdownContainer = document.createElement('div');
    countdownContainer.classList.add('ccx-countdown-container');

    if (VARIATION === 'variation-1') {
      const topRow = document.createElement('div');
      topRow.classList.add('ccx-top-row');
      const topP = document.createElement('p');
      topP.textContent = 'Gewinne 250.000 € Weihnachtsgeld';
      topRow.appendChild(topP);

      const bottomRow = document.createElement('div');
      bottomRow.classList.add('ccx-bottom-row');
      const bottomP = document.createElement('p');
      bottomP.innerHTML = 'Bonus-Verlosung <span>Endet in</span> <span>5 Tagen</span>';
      bottomRow.appendChild(bottomP);

      countdownContainer.appendChild(topRow);
      countdownContainer.appendChild(bottomRow);
    }

    if (VARIATION === 'variation-2') {
      const firstContainer = document.createElement('div');
      firstContainer.classList.add('ccx-first-container');

      const leftIconContainer = document.createElement('div');
      leftIconContainer.classList.add('ccx-left-icon');
      leftIconContainer.innerHTML = SVG_THUNDERBOLT;

      const rightTextContainer = document.createElement('div');
      rightTextContainer.classList.add('ccx-right-text');

      const topRow = document.createElement('div');
      topRow.classList.add('ccx-top-row');
      const topP = document.createElement('p');
      topP.innerHTML = 'Bonus-Verlosung <span>ENDET IN</span> <span>5 TAGEN</span>';
      topRow.appendChild(topP);

      const bottomRow = document.createElement('div');
      bottomRow.classList.add('ccx-bottom-row');
      const bottomP = document.createElement('p');
      bottomP.textContent = 'Gewinne 250.000 € Weihnachtsgeld';
      bottomRow.appendChild(bottomP);

      rightTextContainer.appendChild(topRow);
      rightTextContainer.appendChild(bottomRow);

      firstContainer.appendChild(leftIconContainer);
      firstContainer.appendChild(rightTextContainer);

      const secondContainer = document.createElement('button');
      secondContainer.classList.add('ccx-second-container');

      const btnLeft = document.createElement('div');
      btnLeft.classList.add('ccx-btn-left-icon');
      btnLeft.innerHTML = SVG_TICKET_ICON;

      const btnRight = document.createElement('div');
      btnRight.classList.add('ccx-btn-right-text');
      const btnRightP = document.createElement('p');
      btnRightP.textContent = 'Jetzt mitmachen';
      btnRight.appendChild(btnRightP);

      secondContainer.appendChild(btnLeft);
      secondContainer.appendChild(btnRight);

      countdownContainer.appendChild(firstContainer);
      countdownContainer.appendChild(secondContainer);
    }

    if (VARIATION === 'variation-3') {
      const topContainer = document.createElement('div');
      topContainer.classList.add('ccx-top-container');
      const topP = document.createElement('p');
      topP.innerHTML = '<span>Gewinne 250.000 € Weihnachtsgeld</span>';
      topContainer.appendChild(topP);

      const bottomContainer = document.createElement('div');
      bottomContainer.classList.add('ccx-bottom-container');

      const leftSide = document.createElement('div');
      leftSide.classList.add('ccx-bottom-left');
      const leftP = document.createElement('p');
      leftP.innerHTML = 'Noch <span>03</span> <span>Tagen</span>';
      leftSide.appendChild(leftP);

      const rightSide = document.createElement('button');
      rightSide.classList.add('ccx-bottom-right-btn');

      const btnLeft = document.createElement('div');
      btnLeft.classList.add('ccx-btn-left-icon');
      btnLeft.innerHTML = SVG_TICKET_ICON;

      const btnRight = document.createElement('div');
      btnRight.classList.add('ccx-btn-right-text');
      const btnRightP = document.createElement('p');
      btnRightP.textContent = 'Jetzt mitmachen';
      btnRight.appendChild(btnRightP);

      rightSide.appendChild(btnLeft);
      rightSide.appendChild(btnRight);

      bottomContainer.appendChild(leftSide);
      bottomContainer.appendChild(rightSide);

      countdownContainer.appendChild(topContainer);
      countdownContainer.appendChild(bottomContainer);
    }

    CONTROL_NAVBAR_TOGGLE_MENU.insertAdjacentElement('beforebegin', countdownContainer);
  };

  // Update countdown text dynamically for V1 + V2
  const updateCountdownText = () => {
    const remaining = getRemainingTimeText();

    if (VARIATION === 'variation-1') {
      const span = document.querySelector('.ccx-de16-variation-1 .ccx-bottom-row span:nth-child(2)');
      if (span) span.textContent = remaining;
    }

    if (VARIATION === 'variation-2') {
      const span = document.querySelector('.ccx-de16-variation-2 .ccx-top-row span:nth-child(2)');
      if (span) span.textContent = remaining.toUpperCase();
    }

    if (VARIATION === 'variation-3') {
      const numberSpan = document.querySelector('.ccx-de16-variation-3 .ccx-bottom-left span:nth-child(1)');
      if (numberSpan) numberSpan.textContent = getRemainingDaysNumber();
    }
  };

  const attachEventListeners = () => {
    customLog('[attachEventListeners] Attaching event listeners.');

    // Shared CTA handler
    const triggerControlCTA = () => {
      const controlCTA = document.querySelector('.campaign-hero__content .yellow-btn');
      if (!controlCTA) {
        customLog('[attachEventListeners] controlCTA not found.');
        return;
      }
      controlCTA.click();
    };

    // Helper to safely bind listeners
    const bindClick = (element, variationLabel) => {
      if (!element) {
        customLog('Button element not found for ' + variationLabel + '.');
        return;
      }

      element.addEventListener('click', triggerControlCTA);
      customLog('[attachEventListeners] Click listener attached for ' + variationLabel + '.');
    };

    if (VARIATION === 'variation-2') {
      const button = document.querySelector('.ccx-de16-variation-2 .ccx-second-container');
      bindClick(button, 'variation-2');
    }

    if (VARIATION === 'variation-3') {
      const button = document.querySelector('.ccx-de16-variation-3 .ccx-bottom-right-btn');
      bindClick(button, 'variation-3');
    }
  };

  const init = () => {
    try {
      customLog(TEST_ID + ' | ' + VARIATION + ' | ' + TEST_NAME);
      customLog('[init] Current URL: ' + CURRENT_URL);

      waitForElements(
        [
          { selector: SELECTORS.CONTROL_NAVBAR_TOGGLE_MENU, count: 1 },
        ],
        function (results) {

          addStyles(STYLES, VARIATION);
          addBodyClass();

          const CONTROL_NAVBAR_TOGGLE_MENU = results[0].elements[0];
          if (!CONTROL_NAVBAR_TOGGLE_MENU) return;

          customLog(CONTROL_NAVBAR_TOGGLE_MENU);

          createCountdownContainer(CONTROL_NAVBAR_TOGGLE_MENU);

          updateCountdownText();

          attachEventListeners();
        }
      );

    } catch (error) {
      customLog(error);
    }
  }

  init();
})();
