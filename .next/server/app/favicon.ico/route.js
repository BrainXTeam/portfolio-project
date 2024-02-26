"use strict";
(() => {
var exports = {};
exports.id = 155;
exports.ids = [155];
exports.modules = {

/***/ 4021:
/***/ ((module) => {

module.exports = import("next/dist/compiled/@vercel/og/index.node.js");;

/***/ }),

/***/ 2037:
/***/ ((module) => {

module.exports = require("os");

/***/ }),

/***/ 4141:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  headerHooks: () => (/* binding */ headerHooks),
  originalPathname: () => (/* binding */ originalPathname),
  requestAsyncStorage: () => (/* binding */ requestAsyncStorage),
  routeModule: () => (/* binding */ routeModule),
  serverHooks: () => (/* binding */ serverHooks),
  staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage),
  staticGenerationBailout: () => (/* binding */ staticGenerationBailout)
});

// NAMESPACE OBJECT: ./node_modules/next/dist/build/webpack/loaders/next-metadata-route-loader.js?page=%2Ffavicon.ico%2Froute&isDynamic=0!./src/app/favicon.ico?__next_metadata_route__
var favicon_next_metadata_route_namespaceObject = {};
__webpack_require__.r(favicon_next_metadata_route_namespaceObject);
__webpack_require__.d(favicon_next_metadata_route_namespaceObject, {
  GET: () => (GET),
  dynamic: () => (dynamic)
});

// EXTERNAL MODULE: ./node_modules/next/dist/server/node-polyfill-headers.js
var node_polyfill_headers = __webpack_require__(2394);
// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-modules/app-route/module.js
var app_route_module = __webpack_require__(9692);
var module_default = /*#__PURE__*/__webpack_require__.n(app_route_module);
// EXTERNAL MODULE: ./node_modules/next/server.js
var server = __webpack_require__(514);
;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-metadata-route-loader.js?page=%2Ffavicon.ico%2Froute&isDynamic=0!./src/app/favicon.ico?__next_metadata_route__


const contentType = "image/x-icon"
const buffer = Buffer.from("iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyBpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNSBXaW5kb3dzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjdBMTI3RERFMDFGNDExRUU5MkJFOEU4RTA0NUE0Nzc2IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjdBMTI3RERGMDFGNDExRUU5MkJFOEU4RTA0NUE0Nzc2Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6N0ExMjdEREMwMUY0MTFFRTkyQkU4RThFMDQ1QTQ3NzYiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6N0ExMjdEREQwMUY0MTFFRTkyQkU4RThFMDQ1QTQ3NzYiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7WUp9gAAAEQklEQVR42uyd0XHaQBBATxn/mw5CKgiuwKQC4w6ggpgKiCvAriByBTYVICqIUgGkA7kCosscEybBAYXb063uvZkbzfhDltin3T0JdNl2uzWQLu/4CBAAEAAQABAAEAAQABAAEAAQABAAEAAQALrLhcROsywb1JtexOdd1qPSGDDfT28zicfBtQCanjEXe9sf9djs/Q0BEhDgX1nCirBy2woB0hLgUKZY1OPFZQkESEyAP2V4cjJUCJCeADts8PN6PIbKCggQL1aEe2kRfMeL+wD+GNdjXY955FNgBBDmzolwp+FgKQHyzeLEZ1mgBOhiWI9vrjxQAhLF9gNf3YiuN6AEhMXeXfx0zr0DSoBuBq4kDMgAaVO5TFCSAdLtC5YxZAIyQPuZ4KrJNJEM0L1M8Nzm7EBLBrBXSO7pAx/sbWPBPlW8bSMD/Nqh72F363ksBbvysZujrwWOu8mYtRGv1AU4JMS8RRmGCNCuAPuM3Zw9pADrY/2A71jRBL5N7jp0rw9zjtA/tRTQA4Tv1ucBM8GADBDffH1qzryP34B5qBNDgGYU5j9v4TZkeEpDiADtUAaSYIYAcZcEaQmCZAEEOE+CiXBPMEOA+MvBRDgL9BEgbux9/AfB/X9GgPiR/EHICAF09AP3QvvuSzaDCOCPXDAL3CCAnlKgqgwggI4s0JeaDSCAzKxAakqIAAp4EtrvNQLooBQqAwMESLsMIIAiVlr6AASQKwMS9BBAB7YHkHhK+BEB0s4CZABlWSD6RhABdAnALAAQQAvfKQFpIzELoAkEBAAEAAQABIgciad3JQLo4VLDzAIBKAEgxJAMkDYS7/6jB0i8CXxFgHTTPxkg8avfskEAHUh8h79CAD1I/JZP5IumCOCfsdB+CwTQgdRPuVcIED99I/dTbjKAAqTe6iX1i2ME8Hz1S9X/FQLEj+T7fckACqZ9I8HgbxAgXnZLw0qxkDx4BDgfyVW/7JWfI0C82Ct/KLj/XPoEEOC84I8F92/v/T8iQJrBtzyYAKuTXBDLxg3fs5F/j3+Qq58M0Awb9LUJs5TL1IRZmwgBTqDvrvqlCbPGbxmi+UOA0wK/W1J2FPD/TkKeJD3A39jm7iZw0Hd8MfKLUSHAgdpuv8N33VLQdxRG7m3j6gXoeWi+bEp/vxf0mJaQtw3fbRv/OPO+Hr3daZZtDTTh6tTU7zteNIHtMwld9xEgruDnbR4AAiQcfARIPPgI0F63n8dyQNwHCMfGBb+M6aDIAGF4aTLVQ4Bupfypu/KrGA+QEiB71U9N5G8NRwCZWm+7/ELDwVIC/Af+g5bgkwH8Bf4+pqkdAoTBBvxJ09WOAH4au4XbVl04IQQ4nt4LF/SiK0FHgMPs1vy125XbVl0/aSkB7Pz3MuLzfjW/78olEei3EPlGEOiB+wAIAAgACAAIAAgACAAIAAgACAAIAAgACAAd5qcAAwCeabspbhVlJwAAAABJRU5ErkJggg==", 'base64'
  )

function GET() {
  return new server.NextResponse(buffer, {
    headers: {
      'Content-Type': contentType,
      'Cache-Control': "public, max-age=0, must-revalidate",
    },
  })
}

const dynamic = 'force-static'

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?page=%2Ffavicon.ico%2Froute&name=app%2Ffavicon.ico%2Froute&pagePath=private-next-app-dir%2Ffavicon.ico&appDir=%2FUsers%2Fdevhouse%2FDocuments%2FDevelopement%2FProjects%2Fportfolio-project%2Fsrc%2Fapp&appPaths=%2Ffavicon.ico&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!

    

    

    

    const options = {"definition":{"kind":"APP_ROUTE","page":"/favicon.ico/route","pathname":"/favicon.ico","filename":"favicon","bundlePath":"app/favicon.ico/route"},"resolvedPagePath":"next-metadata-route-loader?page=%2Ffavicon.ico%2Froute&isDynamic=0!/Users/devhouse/Documents/Developement/Projects/portfolio-project/src/app/favicon.ico?__next_metadata_route__","nextConfigOutput":""}
    const routeModule = new (module_default())({
      ...options,
      userland: favicon_next_metadata_route_namespaceObject,
    })

    // Pull out the exports that we need to expose from the module. This should
    // be eliminated when we've moved the other routes to the new format. These
    // are used to hook into the route.
    const {
      requestAsyncStorage,
      staticGenerationAsyncStorage,
      serverHooks,
      headerHooks,
      staticGenerationBailout
    } = routeModule

    const originalPathname = "/favicon.ico/route"

    

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [697,218], () => (__webpack_exec__(4141)));
module.exports = __webpack_exports__;

})();