/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/packs/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./app/javascript/packs/home.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/javascript/packs/home.js":
/*!**************************************!*\
  !*** ./app/javascript/packs/home.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: /home/luis/Documents/Rails/environment/frontend-test/app/javascript/packs/home.js: Missing semicolon (15:54)\n\n  13 |     arrow.classList.remove(\"vector-up\");\n  14 |     arrow.classList.add(\"vector-down\");\n> 15 |   } elsif (arrow.classList.contains === \"vector-down\") {\n     |                                                       ^\n  16 |     arrow.classList.remove(\"vector-down\");\n  17 |     arrow.classList.add(\"vector-up\");\n  18 |   }\n    at Parser._raise (/home/luis/Documents/Rails/environment/frontend-test/node_modules/@babel/parser/lib/index.js:776:17)\n    at Parser.raiseWithData (/home/luis/Documents/Rails/environment/frontend-test/node_modules/@babel/parser/lib/index.js:769:17)\n    at Parser.raise (/home/luis/Documents/Rails/environment/frontend-test/node_modules/@babel/parser/lib/index.js:737:17)\n    at Parser.semicolon (/home/luis/Documents/Rails/environment/frontend-test/node_modules/@babel/parser/lib/index.js:9668:10)\n    at Parser.parseExpressionStatement (/home/luis/Documents/Rails/environment/frontend-test/node_modules/@babel/parser/lib/index.js:12740:10)\n    at Parser.parseStatementContent (/home/luis/Documents/Rails/environment/frontend-test/node_modules/@babel/parser/lib/index.js:12338:19)\n    at Parser.parseStatement (/home/luis/Documents/Rails/environment/frontend-test/node_modules/@babel/parser/lib/index.js:12202:17)\n    at Parser.parseBlockOrModuleBlockBody (/home/luis/Documents/Rails/environment/frontend-test/node_modules/@babel/parser/lib/index.js:12782:25)\n    at Parser.parseBlockBody (/home/luis/Documents/Rails/environment/frontend-test/node_modules/@babel/parser/lib/index.js:12773:10)\n    at Parser.parseBlock (/home/luis/Documents/Rails/environment/frontend-test/node_modules/@babel/parser/lib/index.js:12757:10)\n    at Parser.parseFunctionBody (/home/luis/Documents/Rails/environment/frontend-test/node_modules/@babel/parser/lib/index.js:11724:24)\n    at Parser.parseFunctionBodyAndFinish (/home/luis/Documents/Rails/environment/frontend-test/node_modules/@babel/parser/lib/index.js:11708:10)\n    at /home/luis/Documents/Rails/environment/frontend-test/node_modules/@babel/parser/lib/index.js:12915:12\n    at Parser.withTopicForbiddingContext (/home/luis/Documents/Rails/environment/frontend-test/node_modules/@babel/parser/lib/index.js:12020:14)\n    at Parser.parseFunction (/home/luis/Documents/Rails/environment/frontend-test/node_modules/@babel/parser/lib/index.js:12914:10)\n    at Parser.parseFunctionStatement (/home/luis/Documents/Rails/environment/frontend-test/node_modules/@babel/parser/lib/index.js:12550:17)\n    at Parser.parseStatementContent (/home/luis/Documents/Rails/environment/frontend-test/node_modules/@babel/parser/lib/index.js:12240:21)\n    at Parser.parseStatement (/home/luis/Documents/Rails/environment/frontend-test/node_modules/@babel/parser/lib/index.js:12202:17)\n    at Parser.parseBlockOrModuleBlockBody (/home/luis/Documents/Rails/environment/frontend-test/node_modules/@babel/parser/lib/index.js:12782:25)\n    at Parser.parseBlockBody (/home/luis/Documents/Rails/environment/frontend-test/node_modules/@babel/parser/lib/index.js:12773:10)\n    at Parser.parseProgram (/home/luis/Documents/Rails/environment/frontend-test/node_modules/@babel/parser/lib/index.js:12137:10)\n    at Parser.parseTopLevel (/home/luis/Documents/Rails/environment/frontend-test/node_modules/@babel/parser/lib/index.js:12128:25)\n    at Parser.parse (/home/luis/Documents/Rails/environment/frontend-test/node_modules/@babel/parser/lib/index.js:13836:10)\n    at parse (/home/luis/Documents/Rails/environment/frontend-test/node_modules/@babel/parser/lib/index.js:13888:38)\n    at parser (/home/luis/Documents/Rails/environment/frontend-test/node_modules/@babel/core/lib/parser/index.js:54:34)\n    at parser.next (<anonymous>)\n    at normalizeFile (/home/luis/Documents/Rails/environment/frontend-test/node_modules/@babel/core/lib/transformation/normalize-file.js:59:38)\n    at normalizeFile.next (<anonymous>)\n    at run (/home/luis/Documents/Rails/environment/frontend-test/node_modules/@babel/core/lib/transformation/index.js:31:50)\n    at run.next (<anonymous>)");

/***/ })

/******/ });
//# sourceMappingURL=home-0678b25dc3d6897c2ddc.js.map