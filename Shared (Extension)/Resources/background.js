`use strict`;

browser.runtime.onMessage.addListener(async (request, sender, sendResponse) => {
    console.log(`Received request: `, request);
    
    if (request.type === `Test`) {
        console.log("Opening popup...");
        const extensionUrl = await browser.browserAction.getPopup({});
        console.log(extensionUrl);
        
        browser.tabs.create({url: extensionUrl});
        browser.browserAction.setPopup({
          popup: "popup.html"
        })
    }

    if (request.greeting === `hello`)
        sendResponse({ farewell: `goodbye`, });
});

document.addEventListener("DOMContentLoaded", function(event) {
    console.log("Hello from inside background.js");
    safari.extension.dispatchMessage("Hello World!");
});
