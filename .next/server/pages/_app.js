(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 4852:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "Footer_container__iN3aW",
	"linkTitle": "Footer_linkTitle__YSSlZ",
	"link": "Footer_link__LnE0_",
	"linkText": "Footer_linkText__AorP3",
	"carL": "Footer_carL__OV_CQ",
	"carS": "Footer_carS__FSttN",
	"cardItem": "Footer_cardItem__6m8dQ",
	"icons": "Footer_icons__Zua4N",
	"title": "Footer_title__ZStl1"
};


/***/ }),

/***/ 5392:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "Navbar_container__rxFeS",
	"listItem": "Navbar_listItem__twU0F",
	"hamburger": "Navbar_hamburger__i8zx1",
	"menu": "Navbar_menu__66zmq",
	"list": "Navbar_list__h0uMs",
	"line": "Navbar_line__rzmvw"
};


/***/ }),

/***/ 7682:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./styles/Footer.module.css
var Footer_module = __webpack_require__(4852);
var Footer_module_default = /*#__PURE__*/__webpack_require__.n(Footer_module);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./utils/index.js
var utils = __webpack_require__(558);
;// CONCATENATED MODULE: ./components/Footer.jsx





const Footer = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (Footer_module_default()).container,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (Footer_module_default()).carL,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                        src: "img/logob.png",
                        loader: utils/* customLoader */.l,
                        width: "250px",
                        height: "60px",
                        alt: ""
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                        className: (Footer_module_default()).linkTitle,
                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: "/contact",
                            passHref: true,
                            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: (Footer_module_default()).linkText,
                                children: "WORK WITH US"
                            })
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (Footer_module_default()).carS,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (Footer_module_default()).cardItem,
                        children: [
                            "2955 GOFF AVENUE ",
                            /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                            " GRAND RAPIDS, MICHIGAN"
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (Footer_module_default()).cardItem,
                        children: [
                            "CONTACT@DIGITALHAUSS.COM ",
                            /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                            " 269 591 9059"
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (Footer_module_default()).carS,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (Footer_module_default()).cardItem,
                        children: [
                            "FOLLOW US: ",
                            /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "https://facebook.com",
                                passHref: true,
                                target: "_blank",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    target: "_blank",
                                    className: (Footer_module_default()).linkText,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                        src: "img/fb.svg",
                                        loader: utils/* customLoader */.l,
                                        width: "25px",
                                        height: "25px",
                                        right: "10px"
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "https://instagram.com",
                                passHref: true,
                                target: "_blank",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    target: "_blank",
                                    className: (Footer_module_default()).linkText,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                        src: "img/ig.svg",
                                        loader: utils/* customLoader */.l,
                                        width: "25px",
                                        height: "25px"
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "https://twitter.com",
                                passHref: true,
                                target: "_blank",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    target: "_blank",
                                    className: (Footer_module_default()).linkText,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                        src: "img/tw.svg",
                                        loader: utils/* customLoader */.l,
                                        width: "25px",
                                        height: "25px"
                                    })
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (Footer_module_default()).cardItem,
                        children: [
                            "\xa9 2022 DIGITAL HAUSS, ",
                            /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                            " ALL RIGHTS RESERVED"
                        ]
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const components_Footer = (Footer);

// EXTERNAL MODULE: ./styles/Navbar.module.css
var Navbar_module = __webpack_require__(5392);
var Navbar_module_default = /*#__PURE__*/__webpack_require__.n(Navbar_module);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./components/Navbar.jsx






const Navbar = ()=>{
    const { 0: open , 1: setOpen  } = (0,external_react_.useState)(false);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (Navbar_module_default()).container,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                href: "/",
                children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                    src: "img/logob.png",
                    loader: utils/* customLoader */.l,
                    width: "250px",
                    height: "60px",
                    alt: "",
                    href: "/"
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                className: (Navbar_module_default()).list,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                        className: (Navbar_module_default()).listItem,
                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: "/products/mktg",
                            children: "MARKETING"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                        className: (Navbar_module_default()).listItem,
                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: "/products/design",
                            children: "DESIGN"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                        className: (Navbar_module_default()).listItem,
                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: "/products/develop",
                            children: "DEVELOPMENT"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                        className: (Navbar_module_default()).listItem,
                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: "/products/photo",
                            children: "PHOTOGRAPHY"
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (Navbar_module_default()).hamburger,
                onClick: ()=>setOpen(!open)
                ,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: (Navbar_module_default()).line
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: (Navbar_module_default()).line
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: (Navbar_module_default()).line
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                onClick: ()=>setOpen(false)
                ,
                className: (Navbar_module_default()).menu,
                style: {
                    right: open ? "0px" : "-50vw"
                },
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                        className: (Navbar_module_default()).menuItem,
                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: "/products/mktg",
                            children: "MARKETING"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                        className: (Navbar_module_default()).menuItem,
                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: "/products/design",
                            children: "DESIGN"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                        className: (Navbar_module_default()).menuItem,
                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: "/products/develop",
                            children: "DEVELOPMENT"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                        className: (Navbar_module_default()).menuItem,
                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: "/products/photo",
                            children: "PHOTOGRAPHY"
                        })
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const components_Navbar = (Navbar);

;// CONCATENATED MODULE: ./components/Layout.jsx



const Layout = ({ children  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(components_Navbar, {}),
            children,
            /*#__PURE__*/ jsx_runtime_.jsx(components_Footer, {})
        ]
    });
};
/* harmony default export */ const components_Layout = (Layout);

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
;// CONCATENATED MODULE: ./pages/_app.js




function MyApp({ Component , pageProps  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((head_default()), {
                children: /*#__PURE__*/ jsx_runtime_.jsx("link", {
                    rel: "shortcut icon",
                    href: "/img/Favicon.png"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(components_Layout, {
                children: /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                    ...pageProps
                })
            })
        ]
    });
}
/* harmony default export */ const _app = (MyApp);


/***/ }),

/***/ 1664:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(1551)


/***/ }),

/***/ 2796:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 4365:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [505,153,558], () => (__webpack_exec__(7682)));
module.exports = __webpack_exports__;

})();