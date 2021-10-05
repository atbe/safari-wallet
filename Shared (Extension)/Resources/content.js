`use strict`;

const injection = document.createElement(`script`);
injection.setAttribute(`type`, `text/javascript`);
injection.innerHTML = `
    function SafariWallet() {
        this.opened = false;
    }

    SafariWallet.prototype.open = () => {
        console.log("SafariWallet.prototype.open", window.safariWallet)
        if (window.safariWallet.opened === false) {
            window.safariWallet.opened = true;
            try {
                
                alert(\`click received. still trying to figure out how to open the native popover from here!\`);
                window.safariWallet.opened = false;
                //browser.pageAction.show();
            } catch (e) {
                alert(\`Error: \`, e.message);
            }
        }
    };

    SafariWallet.prototype.close = () => {
        if (!!window.safariWallet.opened) {
            window.safariWallet.opened = false;
        }
    };

    window.safariWallet = new SafariWallet();
`;

document.body.insertBefore(injection, document.body.firstChild);

document.addEventListener("DOMContentLoaded", function(event) {
    console.log("HMMMMMM")
    var newElement = document.createElement("img");
    newElement.src = safari.extension.baseURI + "myCat.jpg";
    document.body.insertBefore(newElement,
    document.body.firstChild);
    
    browser.runtime.sendMessage({type: "Test"})
});

function test() {
    console.log("test")
}
