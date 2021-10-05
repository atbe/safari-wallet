`use strict`;

document.addEventListener("DOMContentLoaded", function(event) {
    console.log(`Hello World!`, browser);
    safari.extension.dispatchMessage("Hello World!");
});

const $ = (id) => document.getElementById(id);

$(`open`).addEventListener(`click`, () => {
    console.log("WOAH THERE", $(`popup`), document.safari);
    browser.runtime.sendMessage({type: "Test"})
});

$(`cancel`).addEventListener(`click`, () => {
    console.log("Close clicked");
    window.close();
});

$(`connect`).addEventListener(`click`, () => {
    // TODO
});
