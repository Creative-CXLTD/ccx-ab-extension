(function () {
  const LOG_ENABLED = true;
  const TEST_ID = "DE12";
  const TEST_NAME = "ODDS TESTING ON THE LP";
  const VARIATION = "variation-1";
  const CURRENT_URL = window.location.href;

  const ASSETS = {
    DESKTOP_ICON_TROPHY: `<svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M9.10232 5.62446C9.05449 5.66879 9.04166 5.71196 9.04166 5.74346V12.2045C9.04166 13.8378 9.49199 15.2378 10.3052 16.2143C11.102 17.1686 12.306 17.7916 14 17.7916C15.694 17.7916 16.898 17.1686 17.6948 16.2143C18.508 15.239 18.9583 13.8378 18.9583 12.2045V5.74346C18.9583 5.71196 18.9467 5.66879 18.8977 5.62446C18.8332 5.56987 18.7511 5.54045 18.6667 5.54163H9.33332C9.24885 5.54045 9.1668 5.56987 9.10232 5.62446ZM7.29166 5.74346C7.29166 4.60013 8.27282 3.79163 9.33332 3.79163H18.6667C19.7272 3.79163 20.7083 4.60129 20.7083 5.74346V6.12496H22.1667C23.2937 6.12496 24.2083 7.03963 24.2083 8.16663V10.5C24.2083 12.726 22.4268 14.4911 20.3502 14.8201C20.0891 15.7389 19.6429 16.5945 19.0388 17.3343C18.0437 18.5266 16.6355 19.3036 14.875 19.495V22.4583H17.5C17.7321 22.4583 17.9546 22.5505 18.1187 22.7146C18.2828 22.8787 18.375 23.1012 18.375 23.3333C18.375 23.5654 18.2828 23.7879 18.1187 23.952C17.9546 24.1161 17.7321 24.2083 17.5 24.2083H10.5C10.2679 24.2083 10.0454 24.1161 9.88127 23.952C9.71718 23.7879 9.62499 23.5654 9.62499 23.3333C9.62499 23.1012 9.71718 22.8787 9.88127 22.7146C10.0454 22.5505 10.2679 22.4583 10.5 22.4583H13.125V19.495C11.3645 19.3025 9.95632 18.5266 8.96116 17.3343C8.3571 16.5945 7.91084 15.7389 7.64982 14.8201C5.57316 14.49 3.79166 12.726 3.79166 10.5V8.16663C3.79166 7.03963 4.70632 6.12496 5.83332 6.12496H7.29166V5.74346ZM7.29166 7.87496H5.83332C5.75597 7.87496 5.68178 7.90569 5.62708 7.96039C5.57239 8.01508 5.54166 8.08927 5.54166 8.16663V10.5C5.54166 11.5616 6.29299 12.5276 7.31732 12.929C7.30046 12.6882 7.2919 12.447 7.29166 12.2056V7.87496ZM20.6827 12.929C21.707 12.5276 22.4583 11.5616 22.4583 10.5V8.16663C22.4583 8.08927 22.4276 8.01508 22.3729 7.96039C22.3182 7.90569 22.244 7.87496 22.1667 7.87496H20.7083V12.2045C20.7083 12.4479 20.6998 12.6894 20.6827 12.929Z" fill="white"/>
</svg>`,
    DESKTOP_ICON_INFORMATION: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_6894_7287)">
<path d="M7.99998 14.6667C11.6819 14.6667 14.6666 11.6819 14.6666 8.00004C14.6666 4.31814 11.6819 1.33337 7.99998 1.33337C4.31808 1.33337 1.33331 4.31814 1.33331 8.00004C1.33331 11.6819 4.31808 14.6667 7.99998 14.6667Z" stroke="#FFDD00" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8 10.6667V8" stroke="#FFDD00" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8 5.33337H8.00667" stroke="#FFDD00" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<clipPath id="clip0_6894_7287">
<rect width="16" height="16" fill="white"/>
</clipPath>
</defs>
</svg>
`,
    MOBILE_ICON_TROPHY: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M7.802 4.821C7.761 4.859 7.75 4.896 7.75 4.923V10.461C7.75 11.861 8.136 13.061 8.833 13.898C9.516 14.716 10.548 15.25 12 15.25C13.452 15.25 14.484 14.716 15.167 13.898C15.864 13.062 16.25 11.861 16.25 10.461V4.923C16.25 4.896 16.24 4.859 16.198 4.821C16.1427 4.77421 16.0724 4.74899 16 4.75H8C7.92759 4.74899 7.85727 4.77421 7.802 4.821ZM6.25 4.923C6.25 3.943 7.091 3.25 8 3.25H16C16.909 3.25 17.75 3.944 17.75 4.923V5.25H19C19.966 5.25 20.75 6.034 20.75 7V9C20.75 10.908 19.223 12.421 17.443 12.703C17.2193 13.4905 16.8368 14.2239 16.319 14.858C15.466 15.88 14.259 16.546 12.75 16.71V19.25H15C15.1989 19.25 15.3897 19.329 15.5303 19.4697C15.671 19.6103 15.75 19.8011 15.75 20C15.75 20.1989 15.671 20.3897 15.5303 20.5303C15.3897 20.671 15.1989 20.75 15 20.75H9C8.80109 20.75 8.61032 20.671 8.46967 20.5303C8.32902 20.3897 8.25 20.1989 8.25 20C8.25 19.8011 8.32902 19.6103 8.46967 19.4697C8.61032 19.329 8.80109 19.25 9 19.25H11.25V16.71C9.741 16.545 8.534 15.88 7.681 14.858C7.16324 14.2239 6.78073 13.4905 6.557 12.703C4.777 12.42 3.25 10.908 3.25 9V7C3.25 6.034 4.034 5.25 5 5.25H6.25V4.923ZM6.25 6.75H5C4.9337 6.75 4.87011 6.77634 4.82322 6.82322C4.77634 6.87011 4.75 6.9337 4.75 7V9C4.75 9.91 5.394 10.738 6.272 11.082C6.25754 10.8756 6.25021 10.6689 6.25 10.462V6.75ZM17.728 11.082C18.606 10.738 19.25 9.91 19.25 9V7C19.25 6.9337 19.2237 6.87011 19.1768 6.82322C19.1299 6.77634 19.0663 6.75 19 6.75H17.75V10.461C17.75 10.6697 17.7427 10.8767 17.728 11.082Z" fill="#626262"/>
</svg>
`,
    MOBILE_ICON_INFORMATION: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_7094_5335)">
<path d="M8.00004 14.6667C11.6819 14.6667 14.6667 11.6819 14.6667 8.00004C14.6667 4.31814 11.6819 1.33337 8.00004 1.33337C4.31814 1.33337 1.33337 4.31814 1.33337 8.00004C1.33337 11.6819 4.31814 14.6667 8.00004 14.6667Z" stroke="#0090B1" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8 10.6667V8" stroke="#0090B1" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8 5.33337H8.00667" stroke="#0090B1" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<clipPath id="clip0_7094_5335">
<rect width="16" height="16" fill="white"/>
</clipPath>
</defs>
</svg>
`,
    MODAL_ICON_INFORMATION: `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.66675 10.0001C1.66675 14.5994 5.40079 18.3334 10.0001 18.3334C14.5994 18.3334 18.3334 14.5994 18.3334 10.0001C18.3334 5.40079 14.5994 1.66675 10.0001 1.66675C5.40079 1.66675 1.66675 5.40079 1.66675 10.0001V10.0001" stroke="#081F28" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10 13.3334V10.0001M10 6.66675H10.0083" stroke="#081F28" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`,
    MODAL_ICON_CLOSE: `<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.892 0.302021C12.7995 0.209317 12.6896 0.135769 12.5686 0.085588C12.4477 0.0354065 12.318 0.00957632 12.187 0.00957632C12.0561 0.00957632 11.9264 0.0354065 11.8054 0.085588C11.6844 0.135769 11.5745 0.209317 11.482 0.302021L6.59202 5.18202L1.70202 0.29202C1.60944 0.199438 1.49953 0.125998 1.37856 0.0758934C1.2576 0.0257884 1.12795 9.75509e-10 0.997021 0C0.86609 -9.75509e-10 0.736441 0.0257884 0.615477 0.0758934C0.494513 0.125998 0.384602 0.199438 0.29202 0.29202C0.199438 0.384602 0.125998 0.494513 0.0758934 0.615477C0.0257884 0.736441 -9.75509e-10 0.86609 0 0.997021C9.75509e-10 1.12795 0.0257884 1.2576 0.0758934 1.37856C0.125998 1.49953 0.199438 1.60944 0.29202 1.70202L5.18202 6.59202L0.29202 11.482C0.199438 11.5746 0.125998 11.6845 0.0758934 11.8055C0.0257884 11.9264 0 12.0561 0 12.187C0 12.318 0.0257884 12.4476 0.0758934 12.5686C0.125998 12.6895 0.199438 12.7994 0.29202 12.892C0.384602 12.9846 0.494513 13.058 0.615477 13.1081C0.736441 13.1583 0.86609 13.184 0.997021 13.184C1.12795 13.184 1.2576 13.1583 1.37856 13.1081C1.49953 13.058 1.60944 12.9846 1.70202 12.892L6.59202 8.00202L11.482 12.892C11.5746 12.9846 11.6845 13.058 11.8055 13.1081C11.9264 13.1583 12.0561 13.184 12.187 13.184C12.318 13.184 12.4476 13.1583 12.5686 13.1081C12.6895 13.058 12.7994 12.9846 12.892 12.892C12.9846 12.7994 13.058 12.6895 13.1081 12.5686C13.1583 12.4476 13.184 12.318 13.184 12.187C13.184 12.0561 13.1583 11.9264 13.1081 11.8055C13.058 11.6845 12.9846 11.5746 12.892 11.482L8.00202 6.59202L12.892 1.70202C13.272 1.32202 13.272 0.682021 12.892 0.302021Z" fill="#626262"/>
</svg>
`,
    MODAL_ICON_TICKET: `<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.5 6.75C2.74181 6.75 3.75 7.75819 3.75 9C3.75 10.2418 2.74181 11.25 1.5 11.25V12.75C1.5 13.5779 2.17213 14.25 3 14.25H15C15.8279 14.25 16.5 13.5779 16.5 12.75V11.25C15.2582 11.25 14.25 10.2418 14.25 9C14.25 7.75819 15.2582 6.75 16.5 6.75V5.25C16.5 4.42213 15.8279 3.75 15 3.75H3C2.17213 3.75 1.5 4.42213 1.5 5.25V6.75M9.75 3.75V5.25M9.75 12.75V14.25M9.75 8.25V9.75" stroke="#081F28" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`
  };

  const SELECTORS = {
    CONTROL_MOBILE_HERO_ADDENDUM_LAST_P: '.hero-mobile-addendum > .hma-content > p:last-of-type',
    CONTROL_DESKTOP_BANNER_CONTROLS: '.home--banner > .banner-controls',
    CONTROL_CTA: '.yellow-btn'
  }

  const STYLES = `
    /* ===============================
    CONTROL ELEMENTS
    =============================== */
    .banner-controls {
      flex-flow: column;
      gap: 1rem;
    }
    #main-nav .trustpilot-widget {
      display: none !important;
    }
    /* ===============================
    UTILITY CLASSES
    =============================== */
    .ccx-hide {
      display: none !important;
    }

    /* ===============================
    ODDS CONTAINER
    =============================== */
    .ccx-odds-container-desktop {
      display: none;
    }

    .ccx-odds-container-mobile {
      display: flex;
      flex-flow: column;
      align-items: center;
      gap: 0.5rem;
    }

    .ccx-odds-container-mobile__item.ccx-odds-container-mobile__item--trophy {
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }

    .ccx-odds-container-mobile__text {
      color: #626262;
      font-size: 12px;
      font-weight: 600;
    }

    .ccx-odds-container-mobile__item.ccx-odds-container-mobile__item--info {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      cursor: pointer;
    }

    .ccx-odds-container-mobile__item--trophy .ccx-odds-container-mobile__text {
      color: #626262;
      font-size: 12px;
      font-weight: 600;
    }
    
    .ccx-odds-container-mobile__item--info .ccx-odds-container-mobile__text {
      font-weight: 700;
      font-size: 12px;
      color: #0090B1;
      line-height: 20px;
      letter-spacing: 0;
      vertical-align: middle;
      text-decoration: underline;
      text-decoration-style: solid;
      text-decoration-thickness: 0%;
      text-decoration-skip-ink: auto;
    }
    
    @media screen and (min-width: 768px) {
      .ccx-odds-container-desktop {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 1rem;
      }
      .ccx-odds-container-desktop__item {
        display: flex;
        align-items: center;
        color: white;
      }
      .ccx-odds-container-desktop__text {
        margin-left: 0.5rem;
      }
      .ccx-odds-container-desktop__item--trophy .ccx-odds-container-desktop__text {
        font-size: 16px;
        letter-spacing: 0;
      }
      .ccx-odds-container-desktop__item--info {
        cursor: pointer;
      }
      .ccx-odds-container-desktop__item--info .ccx-odds-container-desktop__text {
        font-weight: 700;
        font-size: 14px;
        color: #FFDD00;
        line-height: 20px;
        letter-spacing: 0;
        vertical-align: middle;
        text-decoration: underline;
        text-decoration-style: solid;
        text-decoration-thickness: 0%;
        text-decoration-skip-ink: auto;
      }
      .ccx-odds-container-mobile {
        display: none;
      }
    }

    /* ===============================
    MODAL & OVERLAY
    =============================== */
    .ccx-odds-modal-overlay {
      position: fixed;
      inset: 0;
      background: #141414B2;
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 99999;
    }

    .ccx-odds-modal {
      background: #fff url(https://cdn-eu.dynamicyield.com/api/9881830/images/674bfa83b221.png) no-repeat center / cover;
      width: 90%;
      max-width: 640px;
      border-radius: 16px;
      position: relative;
    }

    .ccx-odds-modal__close {
      background: none;
      border: none;
      position: absolute;
      top: 1.5rem;
      right: 1rem;
    }

    .ccx-odds-modal__header {
      background: white;
      display: flex;
      align-items: center;
      gap: 4px;
      opacity: 1;
      padding-top: 28px;
      padding-right: 8px;
      padding-bottom: 24px;
      padding-left: 8px;
      border-bottom-width: 1px;
      min-height: 76px;
      border-radius: 16px;
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
    }

    .ccx-odds-modal__title {
      margin: 0;
      font-family: Gellix;
      font-weight: 700;
      font-size: 20px;
      line-height: 100%;
      letter-spacing: 0px;
      vertical-align: middle;
      text-transform: none;
    }

    .ccx-odds-modal__content {
      opacity: 1;
      padding-top: 20px;
      padding-right: 8px;
      padding-bottom: 20px;
      padding-left: 8px;
      border-bottom: 1px solid #F5F5F5;
      background: white;
    }

    .ccx-odds-modal__highlight {
      margin: 1rem 0;
      display: flex;
      gap: .75rem;
      align-items: flex-start;
      opacity: 1;
      border-width: 1px;
      border-radius: 12px;
      padding: 16px;
      background: #F5F5F5;
      border: 1px dashed #0090B1;
    }

    .ccx-odds-modal__highlight > p {
      font-family: Gellix;
      font-weight: 400;
      font-size: 14px;
      line-height: 100%;
      letter-spacing: 0;
      vertical-align: middle;
      margin-bottom: 0;
    }

    .ccx-odds-modal__content > p:nth-child(1) {
      font-family: Gellix;
      font-weight: 400;
      color: #081F28;
      font-size: 16px;
      line-height: 100%;
      letter-spacing: 0px;
      vertical-align: middle;
      margin: 0;
    }

    .ccx-odds-modal__bundles {
      display: flex;
      flex-flow: column;
      gap: 1rem;
      margin: 1rem 0;
      background: white;
    }

    .ccx-odds-modal__bundle {
      background: #f5f7fa;
      padding: 1rem;
      border-radius: 8px;
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    .ccx-odds-modal__bundle-ticket > svg {
      margin-right: 0.25rem;
    }

    .ccx-odds-modal__bundle > p {
      margin: 0;
    }

    .ccx-odds-modal__bundle-title {
      font-family: Gellix;
      font-weight: 700;
      font-size: 16px;
      flex: 1;
      text-align: left;
    }

    .ccx-odds-modal__bundle-odds {
      font-size: .9rem;
      white-space: nowrap;
    }

  .ccx-odds-modal__footer {
    height: 105px;
    opacity: 1;
    padding-top: 32px;
    padding-right: 8px;
    padding-bottom: 24px;
    padding-left: 8px;
    border-top-width: 1px;
    background: white;
    border-radius: 16px;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
  }

  .ccx-odds-modal__cta {
    width: 100%;
    line-height: 100%;
    padding: 1rem;
    background: #FFD400;
    border: none;
    font-size: 1rem;
    font-weight: 700;
    height: 49px;
    opacity: 1;
    padding-top: 16px;
    padding-right: 32px;
    padding-bottom: 16px;
    padding-left: 32px;
    border-radius: 24px;
  }

  .ccx-odds-modal__note {
    font-size: .85rem;
    margin-top: 1rem;
    color: #444;
    margin: 0;
  }

  @media screen and (min-width: 768px) {
    .ccx-odds-modal {
      box-shadow: 0px 20px 60px 0px #00000059;
      padding: 1.5rem;
      padding-top: 1.25rem;
      max-width: 720px;
      background: #fff url(https://cdn-eu.dynamicyield.com/api/9881830/images/674bfa83b221.png) no-repeat center / cover;
    }
    .ccx-odds-modal__header {
      border: none;
      background: white;
    }
    .ccx-odds-modal__content {
      border: none;
    }
    .ccx-odds-modal__bundles {
      flex-flow: row;
    }
    .ccx-odds-modal__bundle {
      flex-flow: column;
      justify-content: flex-start;
      align-items: flex-start;
      background: #FFFFFF;
      border: 1px solid #F5F5F5;
      gap: 0.5rem;
    }
    .ccx-odds-modal__bundle-title {
      flex: 1;
      text-align: left;
      font-family: Gellix;
      font-weight: 700;
      font-size: 24px;
      line-height: 100%;
      letter-spacing: 0px;
      vertical-align: middle;
    }
    .ccx-odds-modal__bundle-odds {
      font-family: Gellix;
      font-weight: 500;
      font-size: 22px;
      line-height: 100%;
      letter-spacing: 0px;
      vertical-align: middle;
    }
    .ccx-odds-modal__note {
      font-size: 16px;
    }
    .ccx-odds-modal__footer {
      text-align: right;
      padding-bottom: 0 !important;
      height: auto;
    }
    .ccx-odds-modal__cta {
      width: auto;
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
      .catch(() => {
        console.error('[waitForElements] error:', err);
      });
  }

  const createMobileOddsContainer = function () {
    var container = document.createElement("div");
    container.className = "ccx-odds-container-mobile";

    // First Block
    var first = document.createElement("div");
    first.className = "ccx-odds-container-mobile__item ccx-odds-container-mobile__item--trophy";
    first.innerHTML =
      '<span class="ccx-odds-container-mobile__icon">' +
      ASSETS.MOBILE_ICON_TROPHY +
      '</span>' +
      '<span class="ccx-odds-container-mobile__text">1 garantierter Gewinnerin</span>';

    // Second Block
    var second = document.createElement("div");
    second.className = "ccx-odds-container-mobile__item ccx-odds-container-mobile__item--info";
    second.innerHTML =
      '<span class="ccx-odds-container-mobile__icon">' +
      ASSETS.MOBILE_ICON_INFORMATION +
      '</span>' +
      '<span class="ccx-odds-container-mobile__text">Gewinnchancen prüfen: 1 zu X</span>';

    container.appendChild(first);
    container.appendChild(second);

    return container;
  };

  const createDesktopOddsContainer = function () {
    var container = document.createElement("div");
    container.className = "ccx-odds-container-desktop";

    // First Block
    var first = document.createElement("div");
    first.className = "ccx-odds-container-desktop__item ccx-odds-container-desktop__item--trophy";
    first.innerHTML =
      '<span class="ccx-odds-container-desktop__icon">' +
      ASSETS.DESKTOP_ICON_TROPHY +
      '</span>' +
      '<span class="ccx-odds-container-desktop__text">1 garantierter Gewinnerin</span>';

    // Second Block
    var second = document.createElement("div");
    second.className = "ccx-odds-container-desktop__item ccx-odds-container-desktop__item--info";
    second.innerHTML =
      '<span class="ccx-odds-container-desktop__icon">' +
      ASSETS.DESKTOP_ICON_INFORMATION +
      '</span>' +
      '<span class="ccx-odds-container-desktop__text">Gewinnchancen prüfen: 1 zu X</span>';

    container.appendChild(first);
    container.appendChild(second);

    return container;
  };

  const initDesktopOddsObserver = (bannerControlsEl) => {
    const desktopOddsContainer = document.querySelector(".ccx-odds-container-desktop");
    if (!desktopOddsContainer || !bannerControlsEl) return;

    let lastValue = null;

    const applyDesktopVisibility = () => {
      const btn = bannerControlsEl.querySelector("button[aria-selected]");
      if (!btn) return;

      const currentValue = btn.getAttribute("aria-selected");

      // Prevent unnecessary DOM writes → prevents mutation loops & freeze
      if (currentValue === lastValue) return;
      lastValue = currentValue;

      if (currentValue === "true") {
        desktopOddsContainer.classList.remove("ccx-hide");
      } else {
        desktopOddsContainer.classList.add("ccx-hide");
      }
    };

    // Run initial state sync
    applyDesktopVisibility();

    const observer = new MutationObserver((mutations) => {
      for (const mutation of mutations) {
        // Only care about aria-selected changing
        if (
          mutation.type === "attributes" &&
          mutation.attributeName === "aria-selected"
        ) {
          applyDesktopVisibility();
          return;
        }
      }
    });

    observer.observe(bannerControlsEl, {
      attributes: true,
      attributeFilter: ["aria-selected"], // IMPORTANT: reduces triggers drastically
      subtree: true
    });

    customLog("[DESKTOP] MutationObserver initialized safely.");
  };

  const createOddsModalOverlay = function () {
    var overlay = document.createElement("div");
    overlay.className = "ccx-odds-modal-overlay";

    overlay.innerHTML =
      '<div class="ccx-odds-modal">' +
      '<button class="ccx-odds-modal__close">' +
      ASSETS.MODAL_ICON_CLOSE +
      '</button>' +

      '<div class="ccx-odds-modal__header">' +
      '<span class="ccx-odds-modal__icon">' +
      ASSETS.MODAL_ICON_INFORMATION +
      '</span>' +
      '<h2 class="ccx-odds-modal__title">Meine Gewinnchance</h2>' +
      '</div>' +

      '<div class="ccx-odds-modal__content">' +
      '<p>Deine Gewinnchance hängt von der Gesamtzahl der verkauften Lospakete ab.</p>' +

      '<div class="ccx-odds-modal__highlight">' +
      '<p>' +
      'Bei der Ziehung des <strong>Alpen-Hauses</strong> gab es ' +
      '<strong>4.5 mio Lose</strong>. Daraus ergaben sich die folgenden Gewinnwahrscheinlichkeiten:' +
      '</p>' +
      '</div>' +

      '<div class="ccx-odds-modal__bundles">' +

      '<div class="ccx-odds-modal__bundle">' +
      '<p class="ccx-odds-modal__bundle-ticket">' +
      ASSETS.MODAL_ICON_TICKET +
      '</p>' +
      '<p class="ccx-odds-modal__bundle-title">Paket mit 20 Losen</p>' +
      '<p class="ccx-odds-modal__bundle-odds">1 zu 225.000</p>' +
      '</div>' +

      '<div class="ccx-odds-modal__bundle">' +
      '<p class="ccx-odds-modal__bundle-ticket">' +
      ASSETS.MODAL_ICON_TICKET +
      '</p>' +
      '<p class="ccx-odds-modal__bundle-title">Paket mit 50 Losen</p>' +
      '<p class="ccx-odds-modal__bundle-odds">1 zu 90.000</p>' +
      '</div>' +

      '<div class="ccx-odds-modal__bundle">' +
      '<p class="ccx-odds-modal__bundle-ticket">' +
      ASSETS.MODAL_ICON_TICKET +
      '</p>' +
      '<p class="ccx-odds-modal__bundle-title">Paket mit 70 Losen</p>' +
      '<p class="ccx-odds-modal__bundle-odds">1 zu 65.000</p>' +
      '</div>' +

      '</div>' +

      '<p class="ccx-odds-modal__note">' +
      'Die Zahlen dienen nur zur Veranschaulichung und basieren auf der angegebenen Ziehung. ' +
      'Die aktuelle Gewinnchance variiert je nach Gesamtzahl der verkauften Lose.' +
      '</p>' +
      '</div>' +

      '<div class="ccx-odds-modal__footer">' +
      '<button class="ccx-odds-modal__cta">Jetzt mitmachen</button>' +
      '</div>' +
      '</div>';

    return overlay;
  };

  const openOddsModal = () => {
    const overlay = createOddsModalOverlay();
    document.body.appendChild(overlay);

    // Close button
    overlay.querySelector(".ccx-odds-modal__close").addEventListener("click", () => {
      overlay.remove();
    });

    // Clicking outside modal closes it
    overlay.addEventListener("click", (e) => {
      if (e.target === overlay) overlay.remove();
    });
  };

const removeExistingOddsModal = () => {
  customLog('[removeExistingOddsModal]');
  try {
    const overlays = document.querySelectorAll('.ccx-odds-modal-overlay');
    if (!overlays || overlays.length === 0) return;

    overlays.forEach(overlay => {
      overlay.remove();
    });

  } catch (err) {
    console.warn('[removeExistingOddsModal] Failed gracefully:', err);
  }
};

  const init = () => {
    try {
      customLog(TEST_ID + ' | ' + VARIATION + ' | ' + TEST_NAME);
      customLog('[init] Current URL: ' + CURRENT_URL);

      // Wait for CONTROL_MOBILE_HERO_ADDENDUM_LAST_P to load
      waitForElements(
        [
          { selector: SELECTORS.CONTROL_MOBILE_HERO_ADDENDUM_LAST_P, count: 1 },
        ],
        function (results) {

          addStyles(STYLES, VARIATION);
          addBodyClass();

          const CONTROL_MOBILE_HERO_ADDENDUM_LAST_P = results[0].elements[0];
          if (!CONTROL_MOBILE_HERO_ADDENDUM_LAST_P) return;
          customLog(CONTROL_MOBILE_HERO_ADDENDUM_LAST_P);

          const mobileContainer = createMobileOddsContainer();
          CONTROL_MOBILE_HERO_ADDENDUM_LAST_P.insertAdjacentElement("afterend", mobileContainer);
          customLog("[MOBILE] Mobile odds container inserted", mobileContainer);
          mobileContainer.querySelector(".ccx-odds-container-mobile__item--info")
            .addEventListener("click", openOddsModal);
        }
      );

      // Wait for CONTROL_DESKTOP_BANNER_CONTROLS to load
      waitForElements(
        [
          { selector: SELECTORS.CONTROL_DESKTOP_BANNER_CONTROLS, count: 1 },
        ],
        function (results) {

          addStyles(STYLES, VARIATION);
          addBodyClass();

          const CONTROL_DESKTOP_BANNER_CONTROLS = results[0].elements[0];
          if (!CONTROL_DESKTOP_BANNER_CONTROLS) return;
          customLog(CONTROL_DESKTOP_BANNER_CONTROLS);

          const desktopContainer = createDesktopOddsContainer();
          CONTROL_DESKTOP_BANNER_CONTROLS.insertAdjacentElement("beforeend", desktopContainer);
          customLog("[DESKTOP] Desktop odds container inserted", desktopContainer);
          desktopContainer.querySelector(".ccx-odds-container-desktop__item--info")
            .addEventListener("click", openOddsModal);
          initDesktopOddsObserver(CONTROL_DESKTOP_BANNER_CONTROLS); // Start observer
        }
      );

      // Wait for CONTROL_CTA to load
      waitForElements(
        [
          { selector: SELECTORS.CONTROL_CTA, count: 1 },
        ],
        function (results) {

          addStyles(STYLES, VARIATION);
          addBodyClass();

          const CONTROL_CTA = results[0].elements[0];
          if (!CONTROL_CTA) return;
          customLog(CONTROL_CTA);

          const yellowBtnHref = CONTROL_CTA?.getAttribute("href") || "#";
          if (yellowBtnHref) {
            document.body.addEventListener('click', (e) => {
              if (e.target.classList.contains('ccx-odds-modal__cta')) {
                console.log('CTA button clicked!');
                DY.API("event", {
                  name: "mm_modal_cta"
                });
                removeExistingOddsModal();
                setTimeout(() => {
                  window.location.href = yellowBtnHref;
                }, 500);
              }
            });
          }
        }
      );

    } catch (error) {
      customLog(error);
    }
  }

  init();
})();