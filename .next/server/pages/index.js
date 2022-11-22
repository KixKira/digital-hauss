(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 9399:
/***/ ((module) => {

// Exports
module.exports = {

};


/***/ }),

/***/ 3995:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "Intro_container__AnxTD",
	"card": "Intro_card__vqyI2",
	"title": "Intro_title__0waom",
	"brand": "Intro_brand__AO6yM",
	"desc": "Intro_desc__Kv6Dp",
	"button": "Intro_button__qYVWR"
};


/***/ }),

/***/ 8727:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "Services_container__QeLz8",
	"title": "Services_title___aqYv",
	"subtitle": "Services_subtitle__nOi2K",
	"services": "Services_services__EZW__",
	"service": "Services_service__k_XFm",
	"media": "Services_media__j7Ob8",
	"video": "Services_video__XH87p",
	"cat": "Services_cat__s1AQq",
	"desc": "Services_desc__prJg3"
};


/***/ }),

/***/ 1049:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Home),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: ./styles/Intro.module.css
var Intro_module = __webpack_require__(3995);
var Intro_module_default = /*#__PURE__*/__webpack_require__.n(Intro_module);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./components/Circle.jsx

const Circle = (props)=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "circle",
        style: {
            ...props
        }
    });
};
/* harmony default export */ const components_Circle = (Circle);

// EXTERNAL MODULE: ./utils/index.js
var utils = __webpack_require__(558);
;// CONCATENATED MODULE: ./components/Intro.jsx





const Intro = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (Intro_module_default()).container,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(components_Circle, {
                backgroundColor: "#D0D0CE",
                top: "-50vh",
                left: "-50vh"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(components_Circle, {
                backgroundColor: "#d0d0ce",
                right: "-40vh"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (Intro_module_default()).card,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h1", {
                        className: (Intro_module_default()).title,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: (Intro_module_default()).brand,
                                children: "DIGITAL HAUSS"
                            }),
                            " DIGITAL PRODUCT AGENCY"
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: (Intro_module_default()).desc,
                        children: "Create live segments and target the right people for messages based on their behaviors."
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (Intro_module_default()).card,
                children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                    loader: utils/* customLoader */.l,
                    src: "img/card2.png",
                    layout: "fill",
                    objectFit: "cover",
                    alt: ""
                })
            })
        ]
    });
};
/* harmony default export */ const components_Intro = (Intro);

// EXTERNAL MODULE: ./styles/Services.module.css
var Services_module = __webpack_require__(8727);
var Services_module_default = /*#__PURE__*/__webpack_require__.n(Services_module);
// EXTERNAL MODULE: ./node_modules/next/dist/client/link.js
var client_link = __webpack_require__(1551);
var link_default = /*#__PURE__*/__webpack_require__.n(client_link);
;// CONCATENATED MODULE: ./components/Services.jsx





const Services = ({ services  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (Services_module_default()).container,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                className: (Services_module_default()).title,
                children: "What We Can Do?"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                className: (Services_module_default()).subtitle,
                children: "Services we can help you with"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (Services_module_default()).services,
                children: services.map((service)=>/*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        passHref: true,
                        href: `/products/${service.name}`,
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: (Services_module_default()).service,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: (Services_module_default()).desc,
                                    children: service.desc
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    className: (Services_module_default()).cat,
                                    children: service.title
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: (Services_module_default()).media,
                                    children: service.video ? /*#__PURE__*/ jsx_runtime_.jsx("video", {
                                        src: `/img/${service.video}`,
                                        autoPlay: true,
                                        muted: true,
                                        loop: true,
                                        className: (Services_module_default()).video
                                    }) : /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                        alt: "",
                                        loader: utils/* customLoader */.l,
                                        src: `img/${service.photo}`,
                                        width: "100%",
                                        height: "100%",
                                        layout: "responsive",
                                        objectFit: "cover"
                                    })
                                })
                            ]
                        })
                    }, service.id)
                )
            })
        ]
    });
};
/* harmony default export */ const components_Services = (Services);

// EXTERNAL MODULE: ./data.js
var data = __webpack_require__(7225);
// EXTERNAL MODULE: ./styles/Home.module.css
var Home_module = __webpack_require__(9399);
var Home_module_default = /*#__PURE__*/__webpack_require__.n(Home_module);
;// CONCATENATED MODULE: ./pages/index.js






function Home({ services  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (Home_module_default()).container,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: "Digital Hauss"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "description",
                        content: "Digital Hauss"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(components_Intro, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(components_Services, {
                services: services
            })
        ]
    });
};
const getStaticProps = async ()=>{
    const services = data/* data */.a;
    return {
        props: {
            services
        }
    };
};


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
var __webpack_exports__ = __webpack_require__.X(0, [505,153,558,225], () => (__webpack_exec__(1049)));
module.exports = __webpack_exports__;

})();