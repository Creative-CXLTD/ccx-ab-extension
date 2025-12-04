(function () {
  const LOG_ENABLED = true;
  const TEST_ID = "1_1";
  const TEST_NAME = "Trustpilot Banner in Entries & Bolt Ons [Social Proof & Authority]";
  const VARIATION = "variation-1";
  const CURRENT_URL = window.location.href;

  const SELECTORS = {
    CONTROL_MAIN_NAV: '#main-nav',
  }

  const SVG_TRUSTPILOT_STAR_AND_LABEL = `<svg width="105" height="26" viewBox="0 0 105 26" fill="none" xmlns="http://www.w3.org/2000/svg">
<mask id="mask0_2073_183" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="0" y="0" width="105" height="26">
<path d="M104.726 0H0V25.7193H104.726V0Z" fill="white"/>
</mask>
<g mask="url(#mask0_2073_183)">
<path d="M27.5215 8.60449H38.1254V10.5829H33.9559V21.7045H31.6632V10.5829H27.5122V8.60449H27.5215ZM37.6725 12.2193H39.6323V14.0497H39.6694C39.7341 13.7908 39.8542 13.5413 40.0298 13.301C40.2055 13.0605 40.4181 12.8294 40.6677 12.6352C40.9173 12.4319 41.1947 12.2747 41.4998 12.1453C41.8049 12.0251 42.1192 11.9604 42.4335 11.9604C42.6739 11.9604 42.8495 11.9696 42.942 11.9789C43.0345 11.9881 43.1268 12.0066 43.2285 12.0159V14.0313C43.0807 14.0035 42.9328 13.985 42.7756 13.9666C42.6184 13.9481 42.4704 13.9388 42.3227 13.9388C41.9712 13.9388 41.6385 14.0128 41.3241 14.1514C41.0098 14.2902 40.7418 14.5027 40.5106 14.7709C40.2795 15.0483 40.0945 15.3811 39.9559 15.7877C39.8173 16.1946 39.7526 16.6568 39.7526 17.1838V21.6953H37.6632V12.2193H37.6725ZM52.834 21.7045H50.7817V20.3825H50.7446C50.4859 20.8632 50.1068 21.2423 49.5984 21.5289C49.0899 21.8155 48.5722 21.9634 48.0452 21.9634C46.7971 21.9634 45.8911 21.6582 45.3364 21.0389C44.7818 20.4194 44.5044 19.4858 44.5044 18.2377V12.2193H46.5938V18.0344C46.5938 18.8663 46.7509 19.458 47.0745 19.8001C47.3888 20.1421 47.8418 20.3178 48.415 20.3178C48.8587 20.3178 49.2193 20.253 49.5152 20.1144C49.811 19.9757 50.0513 19.8001 50.227 19.569C50.4119 19.347 50.5413 19.0697 50.6245 18.7553C50.7077 18.441 50.7446 18.0991 50.7446 17.7292V12.2285H52.834V21.7045ZM56.3933 18.663C56.4581 19.2731 56.6892 19.6984 57.0867 19.948C57.4935 20.1883 57.9742 20.3178 58.5382 20.3178C58.7323 20.3178 58.9541 20.2993 59.2037 20.2715C59.4533 20.2439 59.6937 20.1792 59.9064 20.096C60.1282 20.0128 60.3039 19.8833 60.4518 19.7169C60.5905 19.5505 60.6552 19.3379 60.646 19.0697C60.6367 18.8016 60.535 18.5798 60.3502 18.4134C60.1653 18.2377 59.9342 18.1082 59.6475 17.9973C59.361 17.8956 59.0373 17.8032 58.6676 17.7292C58.2977 17.6553 57.928 17.5721 57.5489 17.4889C57.1606 17.4056 56.7815 17.2947 56.4211 17.1745C56.0606 17.0543 55.7369 16.8879 55.4504 16.6753C55.1637 16.4719 54.9326 16.2039 54.7662 15.8802C54.5906 15.5566 54.5073 15.1591 54.5073 14.6784C54.5073 14.1607 54.6367 13.7354 54.8863 13.3842C55.1361 13.0328 55.4596 12.7554 55.8386 12.5429C56.2269 12.3302 56.6522 12.1823 57.1236 12.0898C57.5952 12.0066 58.0481 11.9604 58.4734 11.9604C58.9634 11.9604 59.4349 12.0159 59.8786 12.1176C60.3224 12.2193 60.7292 12.3857 61.0898 12.6261C61.4503 12.8572 61.7461 13.1622 61.9865 13.5321C62.2269 13.9018 62.3748 14.3548 62.4396 14.8817H60.2577C60.156 14.3825 59.9342 14.0404 59.5736 13.874C59.213 13.6985 58.797 13.6153 58.3348 13.6153C58.1869 13.6153 58.0112 13.6245 57.8078 13.6522C57.6044 13.68 57.4195 13.7261 57.2346 13.7908C57.0589 13.8556 56.911 13.9572 56.7816 14.0867C56.6614 14.2161 56.5967 14.3825 56.5967 14.5952C56.5967 14.8541 56.6892 15.0574 56.8647 15.2147C57.0404 15.3717 57.2716 15.5012 57.5581 15.6122C57.8448 15.7138 58.1683 15.8062 58.5382 15.8802C58.9079 15.9541 59.2869 16.0373 59.6753 16.1207C60.0543 16.2039 60.4241 16.3147 60.7939 16.435C61.1637 16.5551 61.4873 16.7215 61.7738 16.9342C62.0605 17.1468 62.2916 17.4056 62.4672 17.72C62.6429 18.0344 62.7353 18.4319 62.7353 18.8941C62.7353 19.458 62.6059 19.9296 62.347 20.3271C62.0881 20.7153 61.7554 21.0389 61.3485 21.2792C60.9419 21.5196 60.4796 21.7045 59.9803 21.8155C59.4811 21.9264 58.9819 21.9819 58.4919 21.9819C57.891 21.9819 57.3363 21.9171 56.8278 21.7785C56.3193 21.6398 55.8755 21.4364 55.5058 21.1684C55.1361 20.891 54.8402 20.5489 54.6276 20.1421C54.4149 19.7354 54.304 19.2454 54.2855 18.6815H56.3933V18.663ZM63.29 12.2193H64.8709V9.37183H66.9603V12.2193H68.8462V13.7817H66.9603V18.8479C66.9603 19.0697 66.9695 19.2547 66.9879 19.4211C67.0064 19.5782 67.0527 19.7169 67.1174 19.8278C67.1821 19.9387 67.2838 20.0219 67.4225 20.0775C67.5611 20.1329 67.7368 20.1607 67.9771 20.1607C68.125 20.1607 68.273 20.1607 68.4209 20.1514C68.5688 20.1421 68.7167 20.1236 68.8647 20.0867V21.7045C68.6335 21.7323 68.4024 21.7507 68.1898 21.7785C67.968 21.8062 67.746 21.8155 67.5149 21.8155C66.9603 21.8155 66.5165 21.7601 66.1837 21.6582C65.8508 21.5566 65.5827 21.3995 65.3979 21.196C65.2037 20.9927 65.0835 20.7431 65.0095 20.4379C64.9448 20.1329 64.8987 19.7816 64.8894 19.3933V13.8002H63.3085V12.2193H63.29ZM70.3254 12.2193H72.3038V13.5043H72.3408C72.6366 12.9496 73.0434 12.5614 73.5704 12.3209C74.0972 12.0806 74.6613 11.9604 75.2806 11.9604C76.0295 11.9604 76.6766 12.0898 77.2314 12.3579C77.786 12.6168 78.2482 12.9773 78.6181 13.4396C78.9878 13.9018 79.2559 14.4381 79.4409 15.0483C79.6258 15.6584 79.7181 16.3147 79.7181 17.0081C79.7181 17.646 79.6349 18.2655 79.4685 18.857C79.3022 19.458 79.0526 19.985 78.7198 20.4472C78.387 20.9095 77.9617 21.27 77.4439 21.5474C76.9262 21.8246 76.3254 21.9634 75.6227 21.9634C75.3177 21.9634 75.0125 21.9356 74.7074 21.8802C74.4024 21.8246 74.1065 21.7323 73.8292 21.6121C73.5518 21.4918 73.2837 21.3348 73.0526 21.1406C72.8123 20.9464 72.6181 20.7246 72.4518 20.475H72.4147V25.2084H70.3254V12.2193ZM77.6289 16.9711C77.6289 16.5458 77.5733 16.1298 77.4625 15.723C77.3515 15.3163 77.1851 14.9649 76.9632 14.6506C76.7414 14.3363 76.464 14.0867 76.1404 13.9018C75.8076 13.717 75.4285 13.6153 75.0032 13.6153C74.125 13.6153 73.4594 13.9203 73.0157 14.5305C72.5719 15.1406 72.3501 15.9541 72.3501 16.9711C72.3501 17.4518 72.4055 17.8956 72.5256 18.3024C72.6458 18.7092 72.8123 19.0605 73.0526 19.3563C73.2837 19.6522 73.5611 19.8833 73.8847 20.0497C74.2082 20.2253 74.5873 20.3086 75.0126 20.3086C75.4933 20.3086 75.8908 20.2068 76.2236 20.0128C76.5565 19.8186 76.8246 19.5597 77.0372 19.2547C77.2499 18.9404 77.4069 18.589 77.4994 18.1914C77.5826 17.7939 77.6289 17.3871 77.6289 16.9711ZM81.3175 8.60449H83.4069V10.5829H81.3175V8.60449ZM81.3175 12.2193H83.4069V21.7045H81.3175V12.2193ZM85.2743 8.60449H87.3637V21.7045H85.2743V8.60449ZM93.7705 21.9634C93.0124 21.9634 92.3375 21.8339 91.7458 21.5843C91.1542 21.3348 90.655 20.9834 90.2388 20.5489C89.8322 20.1051 89.5178 19.5782 89.3052 18.968C89.0925 18.3578 88.9816 17.6829 88.9816 16.9526C88.9816 16.2315 89.0925 15.5659 89.3052 14.9558C89.5178 14.3456 89.8322 13.8186 90.2388 13.3749C90.6457 12.9311 91.1542 12.589 91.7458 12.3394C92.3375 12.0898 93.0124 11.9604 93.7705 11.9604C94.5286 11.9604 95.2033 12.0898 95.795 12.3394C96.3867 12.589 96.886 12.9404 97.302 13.3749C97.7087 13.8186 98.023 14.3456 98.2357 14.9558C98.4483 15.5659 98.5593 16.2315 98.5593 16.9526C98.5593 17.6829 98.4483 18.3578 98.2357 18.968C98.023 19.5782 97.7087 20.1051 97.302 20.5489C96.8952 20.9927 96.3867 21.3348 95.795 21.5843C95.2033 21.8339 94.5286 21.9634 93.7705 21.9634ZM93.7705 20.3086C94.2327 20.3086 94.6394 20.2068 94.9815 20.0128C95.3236 19.8186 95.601 19.5597 95.8228 19.2454C96.0448 18.9311 96.2019 18.5705 96.3128 18.173C96.4145 17.7754 96.4699 17.3686 96.4699 16.9526C96.4699 16.5458 96.4145 16.1483 96.3128 15.7416C96.2112 15.3348 96.0448 14.9835 95.8228 14.6692C95.601 14.3548 95.3236 14.1052 94.9815 13.9111C94.6394 13.717 94.2327 13.6153 93.7705 13.6153C93.3081 13.6153 92.9015 13.717 92.5593 13.9111C92.2173 14.1052 91.94 14.3641 91.7181 14.6692C91.4963 14.9835 91.339 15.3348 91.228 15.7416C91.1264 16.1483 91.0709 16.5458 91.0709 16.9526C91.0709 17.3686 91.1264 17.7754 91.228 18.173C91.3299 18.5705 91.4963 18.9311 91.7181 19.2454C91.94 19.5597 92.2173 19.8186 92.5593 20.0128C92.9015 20.2161 93.3081 20.3086 93.7705 20.3086ZM99.1695 12.2193H100.75V9.37183H102.84V12.2193H104.726V13.7817H102.84V18.8479C102.84 19.0697 102.849 19.2547 102.867 19.4211C102.886 19.5782 102.932 19.7169 102.997 19.8278C103.062 19.9387 103.163 20.0219 103.302 20.0775C103.441 20.1329 103.616 20.1607 103.857 20.1607C104.005 20.1607 104.152 20.1607 104.3 20.1514C104.448 20.1421 104.596 20.1236 104.744 20.0867V21.7045C104.513 21.7323 104.282 21.7507 104.069 21.7785C103.847 21.8062 103.625 21.8155 103.394 21.8155C102.84 21.8155 102.396 21.7601 102.063 21.6582C101.73 21.5566 101.462 21.3995 101.277 21.196C101.083 20.9927 100.963 20.7431 100.889 20.4379C100.824 20.1329 100.778 19.7816 100.769 19.3933V13.8002H99.1879V12.2193H99.1695Z" fill="#FFFCF8"/>
<path d="M25.0813 9.11547H15.5037L12.5453 0L9.57771 9.11547L0 9.10623L7.75646 14.7456L4.78886 23.8518L12.5453 18.2217L20.2925 23.8518L17.3342 14.7456L25.0813 9.11547Z" fill="#00B67A"/>
<path d="M17.999 16.8072L17.3332 14.7456L12.5444 18.2217L17.999 16.8072Z" fill="#005128"/>
</g>
</svg>`;

  const SVG_TRUSTPILOT_TEXT = `141,361 reviews on`;

  const SVG_TRUSTPILOT_STARS = `<svg width="105" height="19" viewBox="0 0 105 19" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2076_190)">
<mask id="mask0_2076_190" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="0" y="0" width="105" height="19">
<path d="M104.746 0.378418H0.369141V18.5406H104.746V0.378418Z" fill="white"/>
</mask>
<g mask="url(#mask0_2076_190)">
<path d="M19.9433 0.378662H0.372559V18.5408H19.9433V0.378662Z" fill="#00B67A"/>
<path d="M41.1459 0.378662H21.5752V18.5408H41.1459V0.378662Z" fill="#00B67A"/>
<path d="M62.3466 0.378662H42.7759V18.5408H62.3466V0.378662Z" fill="#00B67A"/>
<path d="M83.5478 0.378662H63.9771V18.5408H83.5478V0.378662Z" fill="#00B67A"/>
<path d="M104.746 0.378662H94.9609V18.5408H104.746V0.378662Z" fill="#DCDCE6"/>
<path d="M104.67 0L84.7998 4.0271e-05V18.7676H104.67V0Z" fill="#00B67A"/>
<path d="M10.1593 12.6198L13.1362 11.9198L14.3794 15.4765L10.1593 12.6198ZM17.0091 8.02249H11.77L10.1593 3.44409L8.54867 8.02249H3.30957L7.54989 10.8603L5.93925 15.4387L10.1796 12.6009L12.789 10.8603L17.0091 8.02249Z" fill="#FFFCF8"/>
<path d="M31.3585 12.6198L34.3346 11.9198L35.5786 15.4765L31.3585 12.6198ZM38.2083 8.02249H32.9692L31.3585 3.44409L29.7479 8.02249H24.5088L28.7491 10.8603L27.1385 15.4387L31.3788 12.6009L33.9882 10.8603L38.2083 8.02249Z" fill="#FFFCF8"/>
<path d="M52.5617 12.6198L55.5378 11.9198L56.781 15.4765L52.5617 12.6198ZM59.4114 8.02249H54.1716L52.5617 3.44409L50.951 8.02249H45.7119L49.9522 10.8603L48.3416 15.4387L52.5819 12.6009L55.1913 10.8603L59.4114 8.02249Z" fill="#FFFCF8"/>
<path d="M73.7643 12.6198L76.7411 11.9198L77.9844 15.4765L73.7643 12.6198ZM80.614 8.02249H75.3749L73.7643 3.44409L72.1544 8.02249H66.9146L71.1549 10.8603L69.545 15.4387L73.7853 12.6009L76.3947 10.8603L80.614 8.02249Z" fill="#FFFCF8"/>
<path d="M94.9635 12.6198L97.9396 11.9198L99.1836 15.4765L94.9635 12.6198ZM101.813 8.02249H96.5742L94.9635 3.44409L93.3529 8.02249H88.1138L92.3541 10.8603L90.7434 15.4387L94.9837 12.6009L97.5932 10.8603L101.813 8.02249Z" fill="#FFFCF8"/>
</g>
</g>
<defs>
<clipPath id="clip0_2076_190">
<rect width="105" height="18.9189" fill="white"/>
</clipPath>
</defs>
</svg>
`;

  const STYLES = `
    .ccx-sticky-banner {
      display: flex;
      align-items: center;
      background: #06595B;
      color: #FFFCF8;
      justify-content: space-between;
      opacity: 1;
      padding-top: 12px;
      padding-right: 24px;
      padding-bottom: 12px;
      padding-left: 24px;
    }
    .ccx-sticky-banner > .ccx-sticky-banner-left > div:nth-child(1) {
      display: none;
    }
    @media screen and (min-width: 576px) {
      .ccx-sticky-banner {
        justify-content: space-around;
      }
    }
    @media screen and (min-width: 992px) {
    .ccx-sticky-banner-left {
        display: flex;
        gap: 0.25rem;
        align-items: center;
        flex: 1;
        justify-content: flex-end;
        margin-right: 10rem;
    }
      .ccx-sticky-banner > .ccx-sticky-banner-left > div:nth-child(1) {
        display: initial;
      }
      .ccx-sticky-banner-right {
        display: flex;
        justify-content: flex-start;
        flex: 1;
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
      .catch((err) => {
        console.error('[waitForElements] error:', err);
      });
  }

  const attachNewStickyBanner = (controlMainNav) => {
    customLog('[attachNewStickyBanner] Attaching new sticky banner...');

    const stickBannerExists = document.querySelector('.ccx-sticky-banner');
    if (stickBannerExists) return;

    // Main wrapper
    const ccxStickyBanner = document.createElement('div');
    ccxStickyBanner.classList.add('ccx-sticky-banner');

    // --- LEFT SIDE ---
    const ccxStickyBannerLeft = document.createElement('div');
    ccxStickyBannerLeft.classList.add('ccx-sticky-banner-left');

    // Wrapper for text
    const textWrapper = document.createElement('div');
    textWrapper.insertAdjacentHTML('afterbegin', SVG_TRUSTPILOT_TEXT);

    // Wrapper for star & label
    const starLabelWrapper = document.createElement('div');
    starLabelWrapper.insertAdjacentHTML('afterbegin', SVG_TRUSTPILOT_STAR_AND_LABEL);

    // Insert in correct order
    ccxStickyBannerLeft.insertAdjacentElement('beforeend', textWrapper);
    ccxStickyBannerLeft.insertAdjacentElement('beforeend', starLabelWrapper);

    // --- RIGHT SIDE ---
    const ccxStickyBannerRight = document.createElement('div');
    ccxStickyBannerRight.classList.add('ccx-sticky-banner-right');

    const starsWrapper = document.createElement('div');
    starsWrapper.insertAdjacentHTML('afterbegin', SVG_TRUSTPILOT_STARS);

    ccxStickyBannerRight.insertAdjacentElement('beforeend', starsWrapper);

    // Combine left + right
    ccxStickyBanner.insertAdjacentElement('beforeend', ccxStickyBannerLeft);
    ccxStickyBanner.insertAdjacentElement('beforeend', ccxStickyBannerRight);

    // Insert banner after main nav
    controlMainNav.insertAdjacentElement('afterend', ccxStickyBanner);
  };

  const init = () => {
    try {
      customLog(TEST_ID + ' | ' + VARIATION + ' | ' + TEST_NAME);
      customLog('[init] Current URL: ' + CURRENT_URL);

      waitForElements(
        [
          { selector: SELECTORS.CONTROL_MAIN_NAV, count: 1 },
        ],
        function (results) {

          addStyles(STYLES, VARIATION);
          addBodyClass();

          const CONTROL_MAIN_NAV = results[0].elements[0];
          if (!CONTROL_MAIN_NAV) return;

          customLog(CONTROL_MAIN_NAV);

          attachNewStickyBanner(CONTROL_MAIN_NAV)
        }
      );

    } catch (error) {
      customLog(error);
    }
  }

  init();
})();