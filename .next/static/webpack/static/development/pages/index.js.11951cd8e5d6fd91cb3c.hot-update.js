webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./helpers/storage.js":
/*!****************************!*\
  !*** ./helpers/storage.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Storage; });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _quality__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./quality */ "./helpers/quality.js");


class Storage {}

Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(Storage, "identifier", "receivedItems");

Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(Storage, "saveReceivedItem", item => {
  const curValue = localStorage.getItem(Storage.identifier) != null ? JSON.parse(localStorage.getItem(Storage.identifier)) : [];
  const valToStore = JSON.stringify(Array.of(item, ...curValue));
  localStorage.setItem(Storage.identifier, valToStore);
});

Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(Storage, "selectAllRaw", () => {
  return JSON.parse(localStorage.getItem(Storage.identifier));
});

Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(Storage, "selectAll", () => {
  let all = JSON.parse(localStorage.getItem(Storage.identifier));
  all.map(value => {
    if (value.quality) value.quality = Object.keys(value).find(key => value[key] === value.quality);
    return value;
  });
  console.log(all);
  return all;
});

/***/ })

})
//# sourceMappingURL=index.js.11951cd8e5d6fd91cb3c.hot-update.js.map