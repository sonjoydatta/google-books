webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/BookDetails.js":
/*!***********************************!*\
  !*** ./components/BookDetails.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var react_moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-moment */ "./node_modules/react-moment/dist/index.js");
/* harmony import */ var react_moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils */ "./utils/index.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components */ "./components/index.js");
var _this = undefined,
    _jsxFileName = "/Users/sonjoydatta/Desktop/google-books/components/BookDetails.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





var BookDetails = function BookDetails(props) {
  var title, imageLink, averageRating, ratingsCount, publishedDate, authors, pageCount, categories, language, description, pdfLink, webReaderLink; // Set treatise to variables

  if (!Object(_utils__WEBPACK_IMPORTED_MODULE_3__["isEmpty"])(props.data)) {
    var _props$data = props.data,
        volumeInfo = _props$data.volumeInfo,
        accessInfo = _props$data.accessInfo;
    title = volumeInfo.title;

    if (volumeInfo.imageLinks !== undefined && !Object(_utils__WEBPACK_IMPORTED_MODULE_3__["isEmpty"])(volumeInfo.imageLinks)) {
      imageLink = volumeInfo.imageLinks.thumbnail;
    }

    averageRating = volumeInfo.averageRating;
    ratingsCount = volumeInfo.ratingsCount;
    publishedDate = volumeInfo.publishedDate;
    authors = volumeInfo.authors;
    pageCount = volumeInfo.pageCount;
    categories = volumeInfo.categories;
    language = volumeInfo.language;
    description = volumeInfo.description;

    if (accessInfo.pdf !== undefined && !Object(_utils__WEBPACK_IMPORTED_MODULE_3__["isEmpty"])(accessInfo.pdf)) {
      if (accessInfo.pdf.isAvailable) {
        pdfLink = accessInfo.pdf.acsTokenLink;
      }
    }

    webReaderLink = accessInfo.webReaderLink;
  }

  return __jsx("article", {
    className: "BookDetails",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 5
    }
  }, !Object(_utils__WEBPACK_IMPORTED_MODULE_3__["isEmpty"])(props.data) ? __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 11
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    md: "3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 13
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Image"], {
    src: imageLink !== undefined ? imageLink : './static/empty-cover.jpeg',
    thumbnail: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 15
    }
  }), __jsx(_components__WEBPACK_IMPORTED_MODULE_4__["BookRating"], {
    rating: averageRating,
    count: ratingsCount,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 15
    }
  })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    md: "9",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 13
    }
  }, __jsx("h1", {
    className: "BookDetails-Heading",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 15
    }
  }, title, publishedDate !== undefined && __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 50
    }
  }, " \u2013 ", __jsx(react_moment__WEBPACK_IMPORTED_MODULE_2___default.a, {
    date: new Date(publishedDate),
    format: "YYYY",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 59
    }
  }))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 15
    }
  }, authors !== undefined && authors.length > 0 && __jsx(_components__WEBPACK_IMPORTED_MODULE_4__["BookMeta"], {
    name: "Author",
    value: authors.join(', '),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 66
    }
  }), pageCount !== undefined && __jsx(_components__WEBPACK_IMPORTED_MODULE_4__["BookMeta"], {
    name: "Page number",
    value: pageCount,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 46
    }
  }), categories !== undefined && __jsx(_components__WEBPACK_IMPORTED_MODULE_4__["BookMeta"], {
    name: "Category",
    value: categories,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 47
    }
  }), language !== undefined && __jsx(_components__WEBPACK_IMPORTED_MODULE_4__["BookMeta"], {
    name: "Language",
    value: _utils__WEBPACK_IMPORTED_MODULE_3__["languages"].filter(function (item) {
      return item.code === language;
    })[0].name,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 45
    }
  })), description !== undefined && __jsx("p", {
    className: "BookDetails-Desc",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 46
    }
  }, Object(_utils__WEBPACK_IMPORTED_MODULE_3__["truncate"])(description, 500).replace(/<[^>]+>/g, '')), webReaderLink !== undefined && __jsx("a", {
    href: webReaderLink,
    className: "btn btn-success mr-3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 19
    }
  }, "Read Now"), pdfLink !== undefined && __jsx("a", {
    target: "_blink",
    href: pdfLink,
    className: "btn btn-danger",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 19
    }
  }, "Download PDF"))) : __jsx(_components__WEBPACK_IMPORTED_MODULE_4__["Loading"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 20
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (BookDetails);

/***/ })

})
//# sourceMappingURL=index.js.e0bd70670adf9a316d67.hot-update.js.map