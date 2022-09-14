(() => {
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[Object.keys(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // messageView.js
  var require_messageView = __commonJS({
    "messageView.js"(exports, module) {
      var MessageView2 = class {
        constructor() {
          this.mainContainerEl = document.querySelector("#main-container");
          this.buttonEl = document.querySelector("#show-message-button");
          this.hideButtonEl = document.querySelector("#hide-message-button");
          this.buttonEl.addEventListener("click", () => {
            this.displayMessage();
          });
          this.hideButtonEl.addEventListener("click", () => {
            this.hideMessage();
          });
        }
        displayMessage() {
          const message = document.querySelector("#message-input").value;
          const newDiv = document.createElement("div");
          newDiv.id = "message";
          newDiv.innerText = message;
          this.mainContainerEl.append(newDiv);
          document.querySelector("#message-input").value = "";
          console.log("Thanks for clicking me!");
        }
        hideMessage() {
          const message = document.getElementById("message");
          message.remove();
        }
      };
      module.exports = MessageView2;
    }
  });

  // index.js
  var MessageView = require_messageView();
  var view = new MessageView();
})();
