(function () {
    const LOG_ENABLED = false;
    const TEST_ID = "0_2";
    const TEST_NAME = "0.2 - House LP Video Hero [London]";
    const VARIATION = "variation-1"; // <--- Change this value depending on variation

    const SELECTORS = {
        HOME_BANNER_VIDEO: '.home--banner video',
        enterNowButtons: 'a[class*=yellow-btn]'
    };

    const customLog = (...args) => LOG_ENABLED && console.log(...args);

    const waitForElements = (configs, callback) => {
        if (!configs || !window.DYO?.waitForElementAsync) return;
        const promises = configs.map(cfg =>
            DYO.waitForElementAsync(cfg.selector, cfg.count, 100, 150)
                .then(elements => ({ selector: cfg.selector, elements }))
        );
        Promise.all(promises).then(callback);
    };

    // ---------------------------------------
    // NEW: Mapping VARIATION → omazeVideos key
    // ---------------------------------------
    const VARIANT_MAP = {
        "variation-1": "variant_a",
        "variation-2": "variant_b",
        "variation-3": "variant_c"
    };

    function getVariantKey() {
        return VARIANT_MAP[VARIATION] || "variant_a";
    }

    // ---------------------------------------
    // Replace original video by injecting new one
    // ---------------------------------------
    function injectVideo(originalVideo) {
        if (!window.omazeVideos) {
            console.warn("[injectVideo] No omazeVideos object found");
            return;
        }

        const variantKey = getVariantKey();
        const variantObj = window.omazeVideos[variantKey];

        if (!variantObj) {
            console.warn("[injectVideo] Missing variant key:", variantKey);
            return;
        }

        const isMobile = window.innerWidth <= 767;
        const finalSrc = isMobile ? variantObj.mobile : variantObj.desktop;

        if (!finalSrc) {
            console.warn("[injectVideo] Missing URL for:", variantKey);
            return;
        }

        customLog("[injectVideo] Final video src:", finalSrc);

        // Prevent duplicate runs
        if (originalVideo.dataset.ccxReplaced === "true") {
            customLog("[injectVideo] Already handled");
            return;
        }
        originalVideo.dataset.ccxReplaced = "true";

        // --- Create new video element ---
        const newVideo = document.createElement("video");
        newVideo.src = finalSrc;
        newVideo.muted = true;
        newVideo.autoplay = true;
        newVideo.loop = true;
        newVideo.playsInline = true;
        newVideo.setAttribute("playsinline", "");

        // Style it safely
        newVideo.style.width = "100%";
        newVideo.style.height = "100%";
        newVideo.style.objectFit = "cover";
        newVideo.style.display = "block";

        newVideo.dataset.ccxInjectedVideo = "true";

        // --- Replace original video node cleanly ---
        const parent = originalVideo.parentNode;
        parent.replaceChild(newVideo, originalVideo);

        // Force autoplay
        requestAnimationFrame(() => {
            newVideo.play().catch(err => console.warn("Play failed:", err));
        });
    }

    // ---------------------------------------
    // Attach click analytics
    // ---------------------------------------
    function attachEventListeners() {
        document.body.addEventListener("click", function (e) {
            const btn = e.target.closest(".yellow-btn");

            if (!btn) return;

            // Stop the default navigation
            e.preventDefault();
            e.stopPropagation();
            e.stopImmediatePropagation();

            const href = btn.getAttribute("href");

            customLog("[Event] Yellow button clicked:", btn, " → delaying nav to:", href);

            // Fire the analytics event
            DY?.API("event", { name: "click-home-enter-now-button" });

            // Delay navigation slightly to ensure event queues
            setTimeout(() => {
                window.location.assign(href);
            }, 120); // 120ms is ideal
        });
    }

    // ---------------------------------------
    // INIT
    // ---------------------------------------
    const init = () => {
        customLog(TEST_ID, VARIATION, TEST_NAME);

        waitForElements(
            [
                { selector: SELECTORS.HOME_BANNER_VIDEO, count: 1 },
                { selector: SELECTORS.enterNowButtons, count: 1 },
            ],
            function (results) {
                const videoRes = results.find(r => r.selector === SELECTORS.HOME_BANNER_VIDEO);
                const originalVideo = videoRes?.elements?.[0];

                if (!originalVideo) {
                    console.warn("[init] Video element not found");
                    return;
                }

                injectVideo(originalVideo);
                attachEventListeners();
            }
        );
    };

    init();
})();
