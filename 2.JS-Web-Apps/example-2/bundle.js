(() => {
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // view.js
  var require_view = __commonJS({
    "view.js"(exports, module) {
      var View2 = class {
        constructor() {
          this.mainContainerEl = document.querySelector("#main-container");
          console.log(this.mainContainerEl);
        }
        addParagraph() {
          const newParagraph = document.createElement("p");
          newParagraph.innerText = "I was created dynamically";
          this.mainContainerEl.append(newParagraph);
        }
        displayTitle() {
          const newTitle = document.createElement("h2");
          newTitle.innerText = "My amazing website";
          this.mainContainerEl.append(newTitle);
        }
        deleteParagraphs() {
          const paragraphs = document.querySelectorAll("p");
          paragraphs.forEach((paragraph) => {
            paragraph.remove();
          });
        }
      };
      module.exports = View2;
    }
  });

  // index.js
  var View = require_view();
  var view = new View();
})();
