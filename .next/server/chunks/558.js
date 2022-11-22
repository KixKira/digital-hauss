"use strict";
exports.id = 558;
exports.ids = [558];
exports.modules = {

/***/ 558:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "l": () => (/* binding */ customLoader)
/* harmony export */ });
const isBrowser = "undefined" !== "undefined";
const customLoader = ({ src , width , quality  })=>{
    if (src.includes("http")) {
        return src;
    } else {
        let origin = "http://localhost:3000";
        if (isBrowser) {
            origin = document.location.origin;
        }
        return `${origin}/${src}?w=${width}&q=${quality || 75}`;
    }
};


/***/ })

};
;