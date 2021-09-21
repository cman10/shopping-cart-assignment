/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("var slideIndex = 1;\r\n// Next/previous controls\r\nfunction plusSlides(n) {\r\n  showSlides((slideIndex += n));\r\n}\r\n\r\n// Thumbnail image controls\r\nfunction currentSlide(n) {\r\n  showSlides((slideIndex = n));\r\n}\r\nfunction showSlides(n) {\r\n  var i;\r\n  var slides = document.getElementsByClassName(\"mySlides\");\r\n  var dots = document.getElementsByClassName(\"dot\");\r\n  if (n > slides.length) {\r\n    slideIndex = 1;\r\n  }\r\n  if (n < 1) {\r\n    slideIndex = slides.length;\r\n  }\r\n  for (i = 0; i < slides.length; i++) {\r\n    slides[i].style.display = \"none\";\r\n  }\r\n  for (i = 0; i < dots.length; i++) {\r\n    dots[i].className = dots[i].className.replace(\" active\", \"\");\r\n  }\r\n  slides[slideIndex - 1].style.display = \"block\";\r\n  dots[slideIndex - 1].className += \" active\";\r\n}\r\n\r\nfunction cartHandler() {\r\n  document.getElementById(\"overlay\").style.display = \"block\";\r\n}\r\nfunction cartClickHandler() {\r\n  document.getElementById(\"overlay\").style.display = \"none\";\r\n}\r\n\n\n//# sourceURL=webpack://code-exercise/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;