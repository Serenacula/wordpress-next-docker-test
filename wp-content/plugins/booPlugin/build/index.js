/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/block/edit.jsx":
/*!****************************!*\
  !*** ./src/block/edit.jsx ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Edit)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);

const {
  InspectorControls,
  MediaUpload,
  MediaUploadCheck
} = wp.blockEditor;
const {
  PanelBody,
  Button,
  ResponsiveWrapper
} = wp.components;
function Edit(wrapperProps) {
  const props = wrapperProps.props;
  const {
    attributes,
    setAttributes
  } = props;

  const removeMedia = () => {
    setAttributes({
      mediaId: 0,
      mediaUrl: ""
    });
  };

  const onSelectMedia = media => {
    setAttributes({
      mediaId: media.id,
      mediaUrl: media.url
    });
  };

  const blockStyle = {
    width: "100%",
    height: "400px"
  };
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(PanelBody, {
    title: "Select the image",
    initialOpen: true
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "editor-post-featured-image"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(MediaUploadCheck, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(MediaUpload, {
    onSelect: onSelectMedia,
    value: attributes.mediaId // Only allow images when selecting media
    ,
    allowedTypes: ["image"] // How to actually render this component
    ,
    render: _ref => {
      let {
        open
      } = _ref;
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Button, {
        className: attributes.mediaId == 0 ? "editor-post-featured-image__toggle" : "editor-post-featured-image__preview",
        onClick: open
      }, attributes.mediaId == 0 && "Choose an image", props.media != undefined && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ResponsiveWrapper, {
        naturalWidth: props.media.media_details.width,
        naturalHeight: props.media.media_details.height
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
        src: props.media.source_url
      })));
    }
  })), attributes.mediaId != 0 && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(MediaUploadCheck, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(MediaUpload, {
    title: "Replace image",
    value: attributes.mediaId,
    onSelect: onSelectMedia,
    allowedTypes: ["image"],
    render: _ref2 => {
      let {
        open
      } = _ref2;
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Button, {
        onClick: open,
        isDefault: true,
        isLarge: true
      }, "Replace image");
    }
  })), attributes.mediaId != 0 && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(MediaUploadCheck, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Button, {
    onClick: removeMedia,
    isLink: true,
    isDestructive: true
  }, "Remove image"))))));
}

/***/ }),

/***/ "./src/block/image.jsx":
/*!*****************************!*\
  !*** ./src/block/image.jsx ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Image)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);

function Image(wrapperProps) {
  const props = wrapperProps.props;
  console.log(props);
  const blockStyle = {
    width: "100%",
    height: "400px"
  };
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    className: "save image",
    src: props.attributes.mediaUrl != "" ? props.attributes.mediaUrl : "",
    alt: "",
    style: blockStyle
  });
}

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ ((module) => {

module.exports = window["wp"]["element"];

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*****************************!*\
  !*** ./src/block/index.jsx ***!
  \*****************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit */ "./src/block/edit.jsx");
/* harmony import */ var _image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./image */ "./src/block/image.jsx");



/**
 * Okay so, I THINK what happens is that when we select an image in the editor with onSelectMedia, withSelect automatically
 * updates the media prop to the new image.
 */

console.log("running index.js"); // Wrapper's job is basically just to bundle the Image and Edit panel, since we can only pass a single react component to withSelect.
// Unfortunately this means we end up with an awkward props.props, but I don't really see a way to stop that unless we wanna
// pass all the props individually.

function Wrapper(props) {
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_image__WEBPACK_IMPORTED_MODULE_2__["default"], {
    props: props
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_edit__WEBPACK_IMPORTED_MODULE_1__["default"], {
    props: props
  }));
} // Register the block


wp.blocks.registerBlockType("faylee/test-block", {
  title: "Faylee's test block",
  icon: "hammer",
  description: "describing the test block",
  category: "text",
  // Okay, so this function basically just has 1 job, which is to convert the mediaId into the media property.
  // The media property is then added to the props of Wrapper, which is called.
  edit: wp.data.withSelect((select, props) => {
    return {
      // IF there is a media target, GET the media from the database and call it media.
      media: props.attributes?.mediaId ? select("core").getMedia(props.attributes.mediaId) : undefined
    };
  })(Wrapper),
  save: props => {
    // Okay, this function receives the attributes below and passes them to Image
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_image__WEBPACK_IMPORTED_MODULE_2__["default"], {
      props: props
    });
  },
  attributes: {
    mediaId: {
      type: "number",
      default: 0
    },
    mediaUrl: {
      type: "string",
      default: ""
    }
  }
});
})();

/******/ })()
;
//# sourceMappingURL=index.js.map