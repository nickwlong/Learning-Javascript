(() => {
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // add.js
  var require_add = __commonJS({
    "add.js"(exports, module) {
      var addy2 = (num1, num2) => {
        return num1 + num2;
      };
      module.exports = addy2;
    }
  });

  // multiply.js
  var require_multiply = __commonJS({
    "multiply.js"(exports, module) {
      var multiplyy2 = (num1, num2) => {
        return num1 * num2;
      };
      module.exports = multiplyy2;
    }
  });

  // index.js
  var addy = require_add();
  var multiplyy = require_multiply();
  console.log("Hello from the developer console!");
  console.log(new Date());
  console.log(multiplyy(4, addy(2, 2)));
})();
