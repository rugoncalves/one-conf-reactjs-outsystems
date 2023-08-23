var ReactJSComponents = (function (exports, React, reactDom) {
  'use strict';

  function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

  function _interopNamespace(e) {
    if (e && e.__esModule) return e;
    var n = Object.create(null);
    if (e) {
      Object.keys(e).forEach(function (k) {
        if (k !== 'default') {
          var d = Object.getOwnPropertyDescriptor(e, k);
          Object.defineProperty(n, k, d.get ? d : {
            enumerable: true,
            get: function () { return e[k]; }
          });
        }
      });
    }
    n["default"] = e;
    return Object.freeze(n);
  }

  var React__namespace = /*#__PURE__*/_interopNamespace(React);
  var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

  function _typeof(obj) {
    "@babel/helpers - typeof";

    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
      return typeof obj;
    } : function (obj) {
      return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    }, _typeof(obj);
  }

  function _toPrimitive(input, hint) {
    if (_typeof(input) !== "object" || input === null) return input;
    var prim = input[Symbol.toPrimitive];
    if (prim !== undefined) {
      var res = prim.call(input, hint || "default");
      if (_typeof(res) !== "object") return res;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (hint === "string" ? String : Number)(input);
  }

  function _toPropertyKey(arg) {
    var key = _toPrimitive(arg, "string");
    return _typeof(key) === "symbol" ? key : String(key);
  }

  function _defineProperty(obj, key, value) {
    key = _toPropertyKey(key);
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }
    return obj;
  }

  function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      enumerableOnly && (symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      })), keys.push.apply(keys, symbols);
    }
    return keys;
  }
  function _objectSpread2(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = null != arguments[i] ? arguments[i] : {};
      i % 2 ? ownKeys(Object(source), !0).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
    return target;
  }

  function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
  }

  function _iterableToArrayLimit(arr, i) {
    var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"];
    if (null != _i) {
      var _s,
        _e,
        _x,
        _r,
        _arr = [],
        _n = !0,
        _d = !1;
      try {
        if (_x = (_i = _i.call(arr)).next, 0 === i) {
          if (Object(_i) !== _i) return;
          _n = !1;
        } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0);
      } catch (err) {
        _d = !0, _e = err;
      } finally {
        try {
          if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return;
        } finally {
          if (_d) throw _e;
        }
      }
      return _arr;
    }
  }

  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
    return arr2;
  }

  function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
  }

  function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
  }

  function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;
    for (i = 0; i < sourceKeys.length; i++) {
      key = sourceKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      target[key] = source[key];
    }
    return target;
  }

  function _objectWithoutProperties(source, excluded) {
    if (source == null) return {};
    var target = _objectWithoutPropertiesLoose(source, excluded);
    var key, i;
    if (Object.getOwnPropertySymbols) {
      var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
      for (i = 0; i < sourceSymbolKeys.length; i++) {
        key = sourceSymbolKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
        target[key] = source[key];
      }
    }
    return target;
  }

  var _excluded$6 = ["defaultInputValue", "defaultMenuIsOpen", "defaultValue", "inputValue", "menuIsOpen", "onChange", "onInputChange", "onMenuClose", "onMenuOpen", "value"];
  function useStateManager(_ref) {
    var _ref$defaultInputValu = _ref.defaultInputValue,
      defaultInputValue = _ref$defaultInputValu === void 0 ? '' : _ref$defaultInputValu,
      _ref$defaultMenuIsOpe = _ref.defaultMenuIsOpen,
      defaultMenuIsOpen = _ref$defaultMenuIsOpe === void 0 ? false : _ref$defaultMenuIsOpe,
      _ref$defaultValue = _ref.defaultValue,
      defaultValue = _ref$defaultValue === void 0 ? null : _ref$defaultValue,
      propsInputValue = _ref.inputValue,
      propsMenuIsOpen = _ref.menuIsOpen,
      propsOnChange = _ref.onChange,
      propsOnInputChange = _ref.onInputChange,
      propsOnMenuClose = _ref.onMenuClose,
      propsOnMenuOpen = _ref.onMenuOpen,
      propsValue = _ref.value,
      restSelectProps = _objectWithoutProperties(_ref, _excluded$6);
    var _useState = React.useState(propsInputValue !== undefined ? propsInputValue : defaultInputValue),
      _useState2 = _slicedToArray(_useState, 2),
      stateInputValue = _useState2[0],
      setStateInputValue = _useState2[1];
    var _useState3 = React.useState(propsMenuIsOpen !== undefined ? propsMenuIsOpen : defaultMenuIsOpen),
      _useState4 = _slicedToArray(_useState3, 2),
      stateMenuIsOpen = _useState4[0],
      setStateMenuIsOpen = _useState4[1];
    var _useState5 = React.useState(propsValue !== undefined ? propsValue : defaultValue),
      _useState6 = _slicedToArray(_useState5, 2),
      stateValue = _useState6[0],
      setStateValue = _useState6[1];
    var onChange = React.useCallback(function (value, actionMeta) {
      if (typeof propsOnChange === 'function') {
        propsOnChange(value, actionMeta);
      }
      setStateValue(value);
    }, [propsOnChange]);
    var onInputChange = React.useCallback(function (value, actionMeta) {
      var newValue;
      if (typeof propsOnInputChange === 'function') {
        newValue = propsOnInputChange(value, actionMeta);
      }
      setStateInputValue(newValue !== undefined ? newValue : value);
    }, [propsOnInputChange]);
    var onMenuOpen = React.useCallback(function () {
      if (typeof propsOnMenuOpen === 'function') {
        propsOnMenuOpen();
      }
      setStateMenuIsOpen(true);
    }, [propsOnMenuOpen]);
    var onMenuClose = React.useCallback(function () {
      if (typeof propsOnMenuClose === 'function') {
        propsOnMenuClose();
      }
      setStateMenuIsOpen(false);
    }, [propsOnMenuClose]);
    var inputValue = propsInputValue !== undefined ? propsInputValue : stateInputValue;
    var menuIsOpen = propsMenuIsOpen !== undefined ? propsMenuIsOpen : stateMenuIsOpen;
    var value = propsValue !== undefined ? propsValue : stateValue;
    return _objectSpread2(_objectSpread2({}, restSelectProps), {}, {
      inputValue: inputValue,
      menuIsOpen: menuIsOpen,
      onChange: onChange,
      onInputChange: onInputChange,
      onMenuClose: onMenuClose,
      onMenuOpen: onMenuOpen,
      value: value
    });
  }

  function _extends() {
    _extends = Object.assign ? Object.assign.bind() : function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
    return _extends.apply(this, arguments);
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
    }
  }
  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    Object.defineProperty(Constructor, "prototype", {
      writable: false
    });
    return Constructor;
  }

  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };
    return _setPrototypeOf(o, p);
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    Object.defineProperty(subClass, "prototype", {
      writable: false
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
  }

  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }

  function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
      Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
      return true;
    } catch (e) {
      return false;
    }
  }

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
  }

  function _possibleConstructorReturn(self, call) {
    if (call && (_typeof(call) === "object" || typeof call === "function")) {
      return call;
    } else if (call !== void 0) {
      throw new TypeError("Derived constructors may only return object or undefined");
    }
    return _assertThisInitialized(self);
  }

  function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();
    return function _createSuperInternal() {
      var Super = _getPrototypeOf(Derived),
        result;
      if (hasNativeReflectConstruct) {
        var NewTarget = _getPrototypeOf(this).constructor;
        result = Reflect.construct(Super, arguments, NewTarget);
      } else {
        result = Super.apply(this, arguments);
      }
      return _possibleConstructorReturn(this, result);
    };
  }

  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
  }

  function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
  }

  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
  }

  /*

  Based off glamor's StyleSheet, thanks Sunil ❤️

  high performance StyleSheet for css-in-js systems

  - uses multiple style tags behind the scenes for millions of rules
  - uses `insertRule` for appending in production for *much* faster performance

  // usage

  import { StyleSheet } from '@emotion/sheet'

  let styleSheet = new StyleSheet({ key: '', container: document.head })

  styleSheet.insert('#box { border: 1px solid red; }')
  - appends a css rule into the stylesheet

  styleSheet.flush()
  - empties the stylesheet of all its contents

  */
  // $FlowFixMe
  function sheetForTag(tag) {
    if (tag.sheet) {
      // $FlowFixMe
      return tag.sheet;
    } // this weirdness brought to you by firefox

    /* istanbul ignore next */

    for (var i = 0; i < document.styleSheets.length; i++) {
      if (document.styleSheets[i].ownerNode === tag) {
        // $FlowFixMe
        return document.styleSheets[i];
      }
    }
  }
  function createStyleElement(options) {
    var tag = document.createElement('style');
    tag.setAttribute('data-emotion', options.key);
    if (options.nonce !== undefined) {
      tag.setAttribute('nonce', options.nonce);
    }
    tag.appendChild(document.createTextNode(''));
    tag.setAttribute('data-s', '');
    return tag;
  }
  var StyleSheet = /*#__PURE__*/function () {
    // Using Node instead of HTMLElement since container may be a ShadowRoot
    function StyleSheet(options) {
      var _this = this;
      this._insertTag = function (tag) {
        var before;
        if (_this.tags.length === 0) {
          if (_this.insertionPoint) {
            before = _this.insertionPoint.nextSibling;
          } else if (_this.prepend) {
            before = _this.container.firstChild;
          } else {
            before = _this.before;
          }
        } else {
          before = _this.tags[_this.tags.length - 1].nextSibling;
        }
        _this.container.insertBefore(tag, before);
        _this.tags.push(tag);
      };
      this.isSpeedy = options.speedy === undefined ? "production" === 'production' : options.speedy;
      this.tags = [];
      this.ctr = 0;
      this.nonce = options.nonce; // key is the value of the data-emotion attribute, it's used to identify different sheets

      this.key = options.key;
      this.container = options.container;
      this.prepend = options.prepend;
      this.insertionPoint = options.insertionPoint;
      this.before = null;
    }
    var _proto = StyleSheet.prototype;
    _proto.hydrate = function hydrate(nodes) {
      nodes.forEach(this._insertTag);
    };
    _proto.insert = function insert(rule) {
      // the max length is how many rules we have per style tag, it's 65000 in speedy mode
      // it's 1 in dev because we insert source maps that map a single rule to a location
      // and you can only have one source map per style tag
      if (this.ctr % (this.isSpeedy ? 65000 : 1) === 0) {
        this._insertTag(createStyleElement(this));
      }
      var tag = this.tags[this.tags.length - 1];
      if (this.isSpeedy) {
        var sheet = sheetForTag(tag);
        try {
          // this is the ultrafast version, works across browsers
          // the big drawback is that the css won't be editable in devtools
          sheet.insertRule(rule, sheet.cssRules.length);
        } catch (e) {
        }
      } else {
        tag.appendChild(document.createTextNode(rule));
      }
      this.ctr++;
    };
    _proto.flush = function flush() {
      // $FlowFixMe
      this.tags.forEach(function (tag) {
        return tag.parentNode && tag.parentNode.removeChild(tag);
      });
      this.tags = [];
      this.ctr = 0;
    };
    return StyleSheet;
  }();

  var e$1 = "-ms-";
  var r$1 = "-moz-";
  var a = "-webkit-";
  var n$1 = "comm";
  var c$1 = "rule";
  var s = "decl";
  var i$1 = "@import";
  var h$1 = "@keyframes";
  var $ = "@layer";
  var g$1 = Math.abs;
  var k$1 = String.fromCharCode;
  var m$1 = Object.assign;
  function x$1(e, r) {
    return O(e, 0) ^ 45 ? (((r << 2 ^ O(e, 0)) << 2 ^ O(e, 1)) << 2 ^ O(e, 2)) << 2 ^ O(e, 3) : 0;
  }
  function y$1(e) {
    return e.trim();
  }
  function j$1(e, r) {
    return (e = r.exec(e)) ? e[0] : e;
  }
  function z$1(e, r, a) {
    return e.replace(r, a);
  }
  function C(e, r) {
    return e.indexOf(r);
  }
  function O(e, r) {
    return e.charCodeAt(r) | 0;
  }
  function A$1(e, r, a) {
    return e.slice(r, a);
  }
  function M(e) {
    return e.length;
  }
  function S(e) {
    return e.length;
  }
  function q$1(e, r) {
    return r.push(e), e;
  }
  function B(e, r) {
    return e.map(r).join("");
  }
  var D = 1;
  var E = 1;
  var F = 0;
  var G = 0;
  var H = 0;
  var I = "";
  function J(e, r, a, n, c, s, t) {
    return {
      value: e,
      root: r,
      parent: a,
      type: n,
      props: c,
      children: s,
      line: D,
      column: E,
      length: t,
      return: ""
    };
  }
  function K(e, r) {
    return m$1(J("", null, null, "", null, null, 0), e, {
      length: -e.length
    }, r);
  }
  function L() {
    return H;
  }
  function N() {
    H = G > 0 ? O(I, --G) : 0;
    if (E--, H === 10) E = 1, D--;
    return H;
  }
  function P() {
    H = G < F ? O(I, G++) : 0;
    if (E++, H === 10) E = 1, D++;
    return H;
  }
  function Q() {
    return O(I, G);
  }
  function R() {
    return G;
  }
  function T(e, r) {
    return A$1(I, e, r);
  }
  function U(e) {
    switch (e) {
      case 0:
      case 9:
      case 10:
      case 13:
      case 32:
        return 5;
      case 33:
      case 43:
      case 44:
      case 47:
      case 62:
      case 64:
      case 126:
      case 59:
      case 123:
      case 125:
        return 4;
      case 58:
        return 3;
      case 34:
      case 39:
      case 40:
      case 91:
        return 2;
      case 41:
      case 93:
        return 1;
    }
    return 0;
  }
  function V(e) {
    return D = E = 1, F = M(I = e), G = 0, [];
  }
  function W(e) {
    return I = "", e;
  }
  function X(e) {
    return y$1(T(G - 1, re(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
  }
  function Z(e) {
    while (H = Q()) if (H < 33) P();else break;
    return U(e) > 2 || U(H) > 3 ? "" : " ";
  }
  function ee(e, r) {
    while (--r && P()) if (H < 48 || H > 102 || H > 57 && H < 65 || H > 70 && H < 97) break;
    return T(e, R() + (r < 6 && Q() == 32 && P() == 32));
  }
  function re(e) {
    while (P()) switch (H) {
      case e:
        return G;
      case 34:
      case 39:
        if (e !== 34 && e !== 39) re(H);
        break;
      case 40:
        if (e === 41) re(e);
        break;
      case 92:
        P();
        break;
    }
    return G;
  }
  function ae(e, r) {
    while (P()) if (e + H === 47 + 10) break;else if (e + H === 42 + 42 && Q() === 47) break;
    return "/*" + T(r, G - 1) + "*" + k$1(e === 47 ? e : P());
  }
  function ne(e) {
    while (!U(Q())) P();
    return T(e, G);
  }
  function ce(e) {
    return W(se("", null, null, null, [""], e = V(e), 0, [0], e));
  }
  function se(e, r, a, n, c, s, t, u, i) {
    var f = 0;
    var o = 0;
    var l = t;
    var v = 0;
    var p = 0;
    var h = 0;
    var b = 1;
    var w = 1;
    var d = 1;
    var $ = 0;
    var g = "";
    var m = c;
    var x = s;
    var y = n;
    var j = g;
    while (w) switch (h = $, $ = P()) {
      case 40:
        if (h != 108 && O(j, l - 1) == 58) {
          if (C(j += z$1(X($), "&", "&\f"), "&\f") != -1) d = -1;
          break;
        }
      case 34:
      case 39:
      case 91:
        j += X($);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        j += Z(h);
        break;
      case 92:
        j += ee(R() - 1, 7);
        continue;
      case 47:
        switch (Q()) {
          case 42:
          case 47:
            q$1(ue(ae(P(), R()), r, a), i);
            break;
          default:
            j += "/";
        }
        break;
      case 123 * b:
        u[f++] = M(j) * d;
      case 125 * b:
      case 59:
      case 0:
        switch ($) {
          case 0:
          case 125:
            w = 0;
          case 59 + o:
            if (d == -1) j = z$1(j, /\f/g, "");
            if (p > 0 && M(j) - l) q$1(p > 32 ? ie(j + ";", n, a, l - 1) : ie(z$1(j, " ", "") + ";", n, a, l - 2), i);
            break;
          case 59:
            j += ";";
          default:
            q$1(y = te(j, r, a, f, o, c, u, g, m = [], x = [], l), s);
            if ($ === 123) if (o === 0) se(j, r, y, y, m, s, l, u, x);else switch (v === 99 && O(j, 3) === 110 ? 100 : v) {
              case 100:
              case 108:
              case 109:
              case 115:
                se(e, y, y, n && q$1(te(e, y, y, 0, 0, c, u, g, c, m = [], l), x), c, x, l, u, n ? m : x);
                break;
              default:
                se(j, y, y, y, [""], x, 0, u, x);
            }
        }
        f = o = p = 0, b = d = 1, g = j = "", l = t;
        break;
      case 58:
        l = 1 + M(j), p = h;
      default:
        if (b < 1) if ($ == 123) --b;else if ($ == 125 && b++ == 0 && N() == 125) continue;
        switch (j += k$1($), $ * b) {
          case 38:
            d = o > 0 ? 1 : (j += "\f", -1);
            break;
          case 44:
            u[f++] = (M(j) - 1) * d, d = 1;
            break;
          case 64:
            if (Q() === 45) j += X(P());
            v = Q(), o = l = M(g = j += ne(R())), $++;
            break;
          case 45:
            if (h === 45 && M(j) == 2) b = 0;
        }
    }
    return s;
  }
  function te(e, r, a, n, s, t, u, i, f, o, l) {
    var v = s - 1;
    var p = s === 0 ? t : [""];
    var h = S(p);
    for (var b = 0, w = 0, d = 0; b < n; ++b) for (var $ = 0, k = A$1(e, v + 1, v = g$1(w = u[b])), m = e; $ < h; ++$) if (m = y$1(w > 0 ? p[$] + " " + k : z$1(k, /&\f/g, p[$]))) f[d++] = m;
    return J(e, r, a, s === 0 ? c$1 : i, f, o, l);
  }
  function ue(e, r, a) {
    return J(e, r, a, n$1, k$1(L()), A$1(e, 2, -2), 0);
  }
  function ie(e, r, a, n) {
    return J(e, r, a, s, A$1(e, 0, n), A$1(e, n + 1, -1), n);
  }
  function oe(e, r) {
    var a = "";
    var n = S(e);
    for (var c = 0; c < n; c++) a += r(e[c], c, e, r) || "";
    return a;
  }
  function le(e, r, a, t) {
    switch (e.type) {
      case $:
        if (e.children.length) break;
      case i$1:
      case s:
        return e.return = e.return || e.value;
      case n$1:
        return "";
      case h$1:
        return e.return = e.value + "{" + oe(e.children, t) + "}";
      case c$1:
        e.value = e.props.join(",");
    }
    return M(a = oe(e.children, t)) ? e.return = e.value + "{" + a + "}" : "";
  }
  function ve(e) {
    var r = S(e);
    return function (a, n, c, s) {
      var t = "";
      for (var u = 0; u < r; u++) t += e[u](a, n, c, s) || "";
      return t;
    };
  }
  function pe(e) {
    return function (r) {
      if (!r.root) if (r = r.return) e(r);
    };
  }

  var weakMemoize = function weakMemoize(func) {
    // $FlowFixMe flow doesn't include all non-primitive types as allowed for weakmaps
    var cache = new WeakMap();
    return function (arg) {
      if (cache.has(arg)) {
        // $FlowFixMe
        return cache.get(arg);
      }
      var ret = func(arg);
      cache.set(arg, ret);
      return ret;
    };
  };

  function memoize(fn) {
    var cache = Object.create(null);
    return function (arg) {
      if (cache[arg] === undefined) cache[arg] = fn(arg);
      return cache[arg];
    };
  }

  var identifierWithPointTracking = function identifierWithPointTracking(begin, points, index) {
    var previous = 0;
    var character = 0;
    while (true) {
      previous = character;
      character = Q(); // &\f

      if (previous === 38 && character === 12) {
        points[index] = 1;
      }
      if (U(character)) {
        break;
      }
      P();
    }
    return T(begin, G);
  };
  var toRules = function toRules(parsed, points) {
    // pretend we've started with a comma
    var index = -1;
    var character = 44;
    do {
      switch (U(character)) {
        case 0:
          // &\f
          if (character === 38 && Q() === 12) {
            // this is not 100% correct, we don't account for literal sequences here - like for example quoted strings
            // stylis inserts \f after & to know when & where it should replace this sequence with the context selector
            // and when it should just concatenate the outer and inner selectors
            // it's very unlikely for this sequence to actually appear in a different context, so we just leverage this fact here
            points[index] = 1;
          }
          parsed[index] += identifierWithPointTracking(G - 1, points, index);
          break;
        case 2:
          parsed[index] += X(character);
          break;
        case 4:
          // comma
          if (character === 44) {
            // colon
            parsed[++index] = Q() === 58 ? '&\f' : '';
            points[index] = parsed[index].length;
            break;
          }

        // fallthrough

        default:
          parsed[index] += k$1(character);
      }
    } while (character = P());
    return parsed;
  };
  var getRules = function getRules(value, points) {
    return W(toRules(V(value), points));
  }; // WeakSet would be more appropriate, but only WeakMap is supported in IE11

  var fixedElements = /* #__PURE__ */new WeakMap();
  var compat = function compat(element) {
    if (element.type !== 'rule' || !element.parent ||
    // positive .length indicates that this rule contains pseudo
    // negative .length indicates that this rule has been already prefixed
    element.length < 1) {
      return;
    }
    var value = element.value,
      parent = element.parent;
    var isImplicitRule = element.column === parent.column && element.line === parent.line;
    while (parent.type !== 'rule') {
      parent = parent.parent;
      if (!parent) return;
    } // short-circuit for the simplest case

    if (element.props.length === 1 && value.charCodeAt(0) !== 58
    /* colon */ && !fixedElements.get(parent)) {
      return;
    } // if this is an implicitly inserted rule (the one eagerly inserted at the each new nested level)
    // then the props has already been manipulated beforehand as they that array is shared between it and its "rule parent"

    if (isImplicitRule) {
      return;
    }
    fixedElements.set(element, true);
    var points = [];
    var rules = getRules(value, points);
    var parentRules = parent.props;
    for (var i = 0, k = 0; i < rules.length; i++) {
      for (var j = 0; j < parentRules.length; j++, k++) {
        element.props[k] = points[i] ? rules[i].replace(/&\f/g, parentRules[j]) : parentRules[j] + " " + rules[i];
      }
    }
  };
  var removeLabel = function removeLabel(element) {
    if (element.type === 'decl') {
      var value = element.value;
      if (
      // charcode for l
      value.charCodeAt(0) === 108 &&
      // charcode for b
      value.charCodeAt(2) === 98) {
        // this ignores label
        element["return"] = '';
        element.value = '';
      }
    }
  };

  /* eslint-disable no-fallthrough */

  function prefix(value, length) {
    switch (x$1(value, length)) {
      // color-adjust
      case 5103:
        return a + 'print-' + value + value;
      // animation, animation-(delay|direction|duration|fill-mode|iteration-count|name|play-state|timing-function)

      case 5737:
      case 4201:
      case 3177:
      case 3433:
      case 1641:
      case 4457:
      case 2921: // text-decoration, filter, clip-path, backface-visibility, column, box-decoration-break

      case 5572:
      case 6356:
      case 5844:
      case 3191:
      case 6645:
      case 3005: // mask, mask-image, mask-(mode|clip|size), mask-(repeat|origin), mask-position, mask-composite,

      case 6391:
      case 5879:
      case 5623:
      case 6135:
      case 4599:
      case 4855: // background-clip, columns, column-(count|fill|gap|rule|rule-color|rule-style|rule-width|span|width)

      case 4215:
      case 6389:
      case 5109:
      case 5365:
      case 5621:
      case 3829:
        return a + value + value;
      // appearance, user-select, transform, hyphens, text-size-adjust

      case 5349:
      case 4246:
      case 4810:
      case 6968:
      case 2756:
        return a + value + r$1 + value + e$1 + value + value;
      // flex, flex-direction

      case 6828:
      case 4268:
        return a + value + e$1 + value + value;
      // order

      case 6165:
        return a + value + e$1 + 'flex-' + value + value;
      // align-items

      case 5187:
        return a + value + z$1(value, /(\w+).+(:[^]+)/, a + 'box-$1$2' + e$1 + 'flex-$1$2') + value;
      // align-self

      case 5443:
        return a + value + e$1 + 'flex-item-' + z$1(value, /flex-|-self/, '') + value;
      // align-content

      case 4675:
        return a + value + e$1 + 'flex-line-pack' + z$1(value, /align-content|flex-|-self/, '') + value;
      // flex-shrink

      case 5548:
        return a + value + e$1 + z$1(value, 'shrink', 'negative') + value;
      // flex-basis

      case 5292:
        return a + value + e$1 + z$1(value, 'basis', 'preferred-size') + value;
      // flex-grow

      case 6060:
        return a + 'box-' + z$1(value, '-grow', '') + a + value + e$1 + z$1(value, 'grow', 'positive') + value;
      // transition

      case 4554:
        return a + z$1(value, /([^-])(transform)/g, '$1' + a + '$2') + value;
      // cursor

      case 6187:
        return z$1(z$1(z$1(value, /(zoom-|grab)/, a + '$1'), /(image-set)/, a + '$1'), value, '') + value;
      // background, background-image

      case 5495:
      case 3959:
        return z$1(value, /(image-set\([^]*)/, a + '$1' + '$`$1');
      // justify-content

      case 4968:
        return z$1(z$1(value, /(.+:)(flex-)?(.*)/, a + 'box-pack:$3' + e$1 + 'flex-pack:$3'), /s.+-b[^;]+/, 'justify') + a + value + value;
      // (margin|padding)-inline-(start|end)

      case 4095:
      case 3583:
      case 4068:
      case 2532:
        return z$1(value, /(.+)-inline(.+)/, a + '$1$2') + value;
      // (min|max)?(width|height|inline-size|block-size)

      case 8116:
      case 7059:
      case 5753:
      case 5535:
      case 5445:
      case 5701:
      case 4933:
      case 4677:
      case 5533:
      case 5789:
      case 5021:
      case 4765:
        // stretch, max-content, min-content, fill-available
        if (M(value) - 1 - length > 6) switch (O(value, length + 1)) {
          // (m)ax-content, (m)in-content
          case 109:
            // -
            if (O(value, length + 4) !== 45) break;
          // (f)ill-available, (f)it-content

          case 102:
            return z$1(value, /(.+:)(.+)-([^]+)/, '$1' + a + '$2-$3' + '$1' + r$1 + (O(value, length + 3) == 108 ? '$3' : '$2-$3')) + value;
          // (s)tretch

          case 115:
            return ~C(value, 'stretch') ? prefix(z$1(value, 'stretch', 'fill-available'), length) + value : value;
        }
        break;
      // position: sticky

      case 4949:
        // (s)ticky?
        if (O(value, length + 1) !== 115) break;
      // display: (flex|inline-flex)

      case 6444:
        switch (O(value, M(value) - 3 - (~C(value, '!important') && 10))) {
          // stic(k)y
          case 107:
            return z$1(value, ':', ':' + a) + value;
          // (inline-)?fl(e)x

          case 101:
            return z$1(value, /(.+:)([^;!]+)(;|!.+)?/, '$1' + a + (O(value, 14) === 45 ? 'inline-' : '') + 'box$3' + '$1' + a + '$2$3' + '$1' + e$1 + '$2box$3') + value;
        }
        break;
      // writing-mode

      case 5936:
        switch (O(value, length + 11)) {
          // vertical-l(r)
          case 114:
            return a + value + e$1 + z$1(value, /[svh]\w+-[tblr]{2}/, 'tb') + value;
          // vertical-r(l)

          case 108:
            return a + value + e$1 + z$1(value, /[svh]\w+-[tblr]{2}/, 'tb-rl') + value;
          // horizontal(-)tb

          case 45:
            return a + value + e$1 + z$1(value, /[svh]\w+-[tblr]{2}/, 'lr') + value;
        }
        return a + value + e$1 + value + value;
    }
    return value;
  }
  var prefixer = function prefixer(element, index, children, callback) {
    if (element.length > -1) if (!element["return"]) switch (element.type) {
      case s:
        element["return"] = prefix(element.value, element.length);
        break;
      case h$1:
        return oe([K(element, {
          value: z$1(element.value, '@', '@' + a)
        })], callback);
      case c$1:
        if (element.length) return B(element.props, function (value) {
          switch (j$1(value, /(::plac\w+|:read-\w+)/)) {
            // :read-(only|write)
            case ':read-only':
            case ':read-write':
              return oe([K(element, {
                props: [z$1(value, /:(read-\w+)/, ':' + r$1 + '$1')]
              })], callback);
            // :placeholder

            case '::placeholder':
              return oe([K(element, {
                props: [z$1(value, /:(plac\w+)/, ':' + a + 'input-$1')]
              }), K(element, {
                props: [z$1(value, /:(plac\w+)/, ':' + r$1 + '$1')]
              }), K(element, {
                props: [z$1(value, /:(plac\w+)/, e$1 + 'input-$1')]
              })], callback);
          }
          return '';
        });
    }
  };
  var isBrowser$3 = typeof document !== 'undefined';
  var getServerStylisCache = isBrowser$3 ? undefined : weakMemoize(function () {
    return memoize(function () {
      var cache = {};
      return function (name) {
        return cache[name];
      };
    });
  });
  var defaultStylisPlugins = [prefixer];
  var createCache = function createCache(options) {
    var key = options.key;
    if (isBrowser$3 && key === 'css') {
      var ssrStyles = document.querySelectorAll("style[data-emotion]:not([data-s])"); // get SSRed styles out of the way of React's hydration
      // document.head is a safe place to move them to(though note document.head is not necessarily the last place they will be)
      // note this very very intentionally targets all style elements regardless of the key to ensure
      // that creating a cache works inside of render of a React component

      Array.prototype.forEach.call(ssrStyles, function (node) {
        // we want to only move elements which have a space in the data-emotion attribute value
        // because that indicates that it is an Emotion 11 server-side rendered style elements
        // while we will already ignore Emotion 11 client-side inserted styles because of the :not([data-s]) part in the selector
        // Emotion 10 client-side inserted styles did not have data-s (but importantly did not have a space in their data-emotion attributes)
        // so checking for the space ensures that loading Emotion 11 after Emotion 10 has inserted some styles
        // will not result in the Emotion 10 styles being destroyed
        var dataEmotionAttribute = node.getAttribute('data-emotion');
        if (dataEmotionAttribute.indexOf(' ') === -1) {
          return;
        }
        document.head.appendChild(node);
        node.setAttribute('data-s', '');
      });
    }
    var stylisPlugins = options.stylisPlugins || defaultStylisPlugins;
    var inserted = {};
    var container;
    var nodesToHydrate = [];
    if (isBrowser$3) {
      container = options.container || document.head;
      Array.prototype.forEach.call(
      // this means we will ignore elements which don't have a space in them which
      // means that the style elements we're looking at are only Emotion 11 server-rendered style elements
      document.querySelectorAll("style[data-emotion^=\"" + key + " \"]"), function (node) {
        var attrib = node.getAttribute("data-emotion").split(' '); // $FlowFixMe

        for (var i = 1; i < attrib.length; i++) {
          inserted[attrib[i]] = true;
        }
        nodesToHydrate.push(node);
      });
    }
    var _insert;
    var omnipresentPlugins = [compat, removeLabel];
    if (isBrowser$3) {
      var currentSheet;
      var finalizingPlugins = [le, pe(function (rule) {
        currentSheet.insert(rule);
      })];
      var serializer = ve(omnipresentPlugins.concat(stylisPlugins, finalizingPlugins));
      var stylis = function stylis(styles) {
        return oe(ce(styles), serializer);
      };
      _insert = function insert(selector, serialized, sheet, shouldCache) {
        currentSheet = sheet;
        stylis(selector ? selector + "{" + serialized.styles + "}" : serialized.styles);
        if (shouldCache) {
          cache.inserted[serialized.name] = true;
        }
      };
    } else {
      var _finalizingPlugins = [le];
      var _serializer = ve(omnipresentPlugins.concat(stylisPlugins, _finalizingPlugins));
      var _stylis = function _stylis(styles) {
        return oe(ce(styles), _serializer);
      }; // $FlowFixMe

      var serverStylisCache = getServerStylisCache(stylisPlugins)(key);
      var getRules = function getRules(selector, serialized) {
        var name = serialized.name;
        if (serverStylisCache[name] === undefined) {
          serverStylisCache[name] = _stylis(selector ? selector + "{" + serialized.styles + "}" : serialized.styles);
        }
        return serverStylisCache[name];
      };
      _insert = function _insert(selector, serialized, sheet, shouldCache) {
        var name = serialized.name;
        var rules = getRules(selector, serialized);
        if (cache.compat === undefined) {
          // in regular mode, we don't set the styles on the inserted cache
          // since we don't need to and that would be wasting memory
          // we return them so that they are rendered in a style tag
          if (shouldCache) {
            cache.inserted[name] = true;
          }
          return rules;
        } else {
          // in compat mode, we put the styles on the inserted cache so
          // that emotion-server can pull out the styles
          // except when we don't want to cache it which was in Global but now
          // is nowhere but we don't want to do a major right now
          // and just in case we're going to leave the case here
          // it's also not affecting client side bundle size
          // so it's really not a big deal
          if (shouldCache) {
            cache.inserted[name] = rules;
          } else {
            return rules;
          }
        }
      };
    }
    var cache = {
      key: key,
      sheet: new StyleSheet({
        key: key,
        container: container,
        nonce: options.nonce,
        speedy: options.speedy,
        prepend: options.prepend,
        insertionPoint: options.insertionPoint
      }),
      nonce: options.nonce,
      inserted: inserted,
      registered: {},
      insert: _insert
    };
    cache.sheet.hydrate(nodesToHydrate);
    return cache;
  };

  function unwrapExports (x) {
  	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
  }

  function createCommonjsModule(fn, module) {
  	return module = { exports: {} }, fn(module, module.exports), module.exports;
  }

  /** @license React v16.13.1
   * react-is.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */

  var b = "function" === typeof Symbol && Symbol.for,
    c = b ? Symbol.for("react.element") : 60103,
    d = b ? Symbol.for("react.portal") : 60106,
    e = b ? Symbol.for("react.fragment") : 60107,
    f = b ? Symbol.for("react.strict_mode") : 60108,
    g = b ? Symbol.for("react.profiler") : 60114,
    h = b ? Symbol.for("react.provider") : 60109,
    k = b ? Symbol.for("react.context") : 60110,
    l = b ? Symbol.for("react.async_mode") : 60111,
    m = b ? Symbol.for("react.concurrent_mode") : 60111,
    n = b ? Symbol.for("react.forward_ref") : 60112,
    p = b ? Symbol.for("react.suspense") : 60113,
    q = b ? Symbol.for("react.suspense_list") : 60120,
    r = b ? Symbol.for("react.memo") : 60115,
    t = b ? Symbol.for("react.lazy") : 60116,
    v = b ? Symbol.for("react.block") : 60121,
    w$1 = b ? Symbol.for("react.fundamental") : 60117,
    x = b ? Symbol.for("react.responder") : 60118,
    y = b ? Symbol.for("react.scope") : 60119;
  function z(a) {
    if ("object" === typeof a && null !== a) {
      var u = a.$$typeof;
      switch (u) {
        case c:
          switch (a = a.type, a) {
            case l:
            case m:
            case e:
            case g:
            case f:
            case p:
              return a;
            default:
              switch (a = a && a.$$typeof, a) {
                case k:
                case n:
                case t:
                case r:
                case h:
                  return a;
                default:
                  return u;
              }
          }
        case d:
          return u;
      }
    }
  }
  function A(a) {
    return z(a) === m;
  }
  var AsyncMode = l;
  var ConcurrentMode = m;
  var ContextConsumer = k;
  var ContextProvider = h;
  var Element$1 = c;
  var ForwardRef = n;
  var Fragment = e;
  var Lazy = t;
  var Memo = r;
  var Portal = d;
  var Profiler = g;
  var StrictMode = f;
  var Suspense = p;
  var isAsyncMode = function (a) {
    return A(a) || z(a) === l;
  };
  var isConcurrentMode = A;
  var isContextConsumer = function (a) {
    return z(a) === k;
  };
  var isContextProvider = function (a) {
    return z(a) === h;
  };
  var isElement$1 = function (a) {
    return "object" === typeof a && null !== a && a.$$typeof === c;
  };
  var isForwardRef = function (a) {
    return z(a) === n;
  };
  var isFragment = function (a) {
    return z(a) === e;
  };
  var isLazy = function (a) {
    return z(a) === t;
  };
  var isMemo = function (a) {
    return z(a) === r;
  };
  var isPortal = function (a) {
    return z(a) === d;
  };
  var isProfiler = function (a) {
    return z(a) === g;
  };
  var isStrictMode = function (a) {
    return z(a) === f;
  };
  var isSuspense = function (a) {
    return z(a) === p;
  };
  var isValidElementType = function (a) {
    return "string" === typeof a || "function" === typeof a || a === e || a === m || a === g || a === f || a === p || a === q || "object" === typeof a && null !== a && (a.$$typeof === t || a.$$typeof === r || a.$$typeof === h || a.$$typeof === k || a.$$typeof === n || a.$$typeof === w$1 || a.$$typeof === x || a.$$typeof === y || a.$$typeof === v);
  };
  var typeOf = z;
  var reactIs_production_min = {
    AsyncMode: AsyncMode,
    ConcurrentMode: ConcurrentMode,
    ContextConsumer: ContextConsumer,
    ContextProvider: ContextProvider,
    Element: Element$1,
    ForwardRef: ForwardRef,
    Fragment: Fragment,
    Lazy: Lazy,
    Memo: Memo,
    Portal: Portal,
    Profiler: Profiler,
    StrictMode: StrictMode,
    Suspense: Suspense,
    isAsyncMode: isAsyncMode,
    isConcurrentMode: isConcurrentMode,
    isContextConsumer: isContextConsumer,
    isContextProvider: isContextProvider,
    isElement: isElement$1,
    isForwardRef: isForwardRef,
    isFragment: isFragment,
    isLazy: isLazy,
    isMemo: isMemo,
    isPortal: isPortal,
    isProfiler: isProfiler,
    isStrictMode: isStrictMode,
    isSuspense: isSuspense,
    isValidElementType: isValidElementType,
    typeOf: typeOf
  };

  var reactIs_development = createCommonjsModule(function (module, exports) {
  });
  reactIs_development.AsyncMode;
  reactIs_development.ConcurrentMode;
  reactIs_development.ContextConsumer;
  reactIs_development.ContextProvider;
  reactIs_development.Element;
  reactIs_development.ForwardRef;
  reactIs_development.Fragment;
  reactIs_development.Lazy;
  reactIs_development.Memo;
  reactIs_development.Portal;
  reactIs_development.Profiler;
  reactIs_development.StrictMode;
  reactIs_development.Suspense;
  reactIs_development.isAsyncMode;
  reactIs_development.isConcurrentMode;
  reactIs_development.isContextConsumer;
  reactIs_development.isContextProvider;
  reactIs_development.isElement;
  reactIs_development.isForwardRef;
  reactIs_development.isFragment;
  reactIs_development.isLazy;
  reactIs_development.isMemo;
  reactIs_development.isPortal;
  reactIs_development.isProfiler;
  reactIs_development.isStrictMode;
  reactIs_development.isSuspense;
  reactIs_development.isValidElementType;
  reactIs_development.typeOf;

  var reactIs = createCommonjsModule(function (module) {

    {
      module.exports = reactIs_production_min;
    }
  });

  var FORWARD_REF_STATICS = {
    '$$typeof': true,
    render: true,
    defaultProps: true,
    displayName: true,
    propTypes: true
  };
  var MEMO_STATICS = {
    '$$typeof': true,
    compare: true,
    defaultProps: true,
    displayName: true,
    propTypes: true,
    type: true
  };
  var TYPE_STATICS = {};
  TYPE_STATICS[reactIs.ForwardRef] = FORWARD_REF_STATICS;
  TYPE_STATICS[reactIs.Memo] = MEMO_STATICS;

  var isBrowser$2 = typeof document !== 'undefined';
  function getRegisteredStyles(registered, registeredStyles, classNames) {
    var rawClassName = '';
    classNames.split(' ').forEach(function (className) {
      if (registered[className] !== undefined) {
        registeredStyles.push(registered[className] + ";");
      } else {
        rawClassName += className + " ";
      }
    });
    return rawClassName;
  }
  var registerStyles = function registerStyles(cache, serialized, isStringTag) {
    var className = cache.key + "-" + serialized.name;
    if (
    // we only need to add the styles to the registered cache if the
    // class name could be used further down
    // the tree but if it's a string tag, we know it won't
    // so we don't have to add it to registered cache.
    // this improves memory usage since we can avoid storing the whole style string
    (isStringTag === false ||
    // we need to always store it if we're in compat mode and
    // in node since emotion-server relies on whether a style is in
    // the registered cache to know whether a style is global or not
    // also, note that this check will be dead code eliminated in the browser
    isBrowser$2 === false && cache.compat !== undefined) && cache.registered[className] === undefined) {
      cache.registered[className] = serialized.styles;
    }
  };
  var insertStyles = function insertStyles(cache, serialized, isStringTag) {
    registerStyles(cache, serialized, isStringTag);
    var className = cache.key + "-" + serialized.name;
    if (cache.inserted[serialized.name] === undefined) {
      var stylesForSSR = '';
      var current = serialized;
      do {
        var maybeStyles = cache.insert(serialized === current ? "." + className : '', current, cache.sheet, true);
        if (!isBrowser$2 && maybeStyles !== undefined) {
          stylesForSSR += maybeStyles;
        }
        current = current.next;
      } while (current !== undefined);
      if (!isBrowser$2 && stylesForSSR.length !== 0) {
        return stylesForSSR;
      }
    }
  };

  /* eslint-disable */
  // Inspired by https://github.com/garycourt/murmurhash-js
  // Ported from https://github.com/aappleby/smhasher/blob/61a0530f28277f2e850bfc39600ce61d02b518de/src/MurmurHash2.cpp#L37-L86
  function murmur2(str) {
    // 'm' and 'r' are mixing constants generated offline.
    // They're not really 'magic', they just happen to work well.
    // const m = 0x5bd1e995;
    // const r = 24;
    // Initialize the hash
    var h = 0; // Mix 4 bytes at a time into the hash

    var k,
      i = 0,
      len = str.length;
    for (; len >= 4; ++i, len -= 4) {
      k = str.charCodeAt(i) & 0xff | (str.charCodeAt(++i) & 0xff) << 8 | (str.charCodeAt(++i) & 0xff) << 16 | (str.charCodeAt(++i) & 0xff) << 24;
      k = /* Math.imul(k, m): */
      (k & 0xffff) * 0x5bd1e995 + ((k >>> 16) * 0xe995 << 16);
      k ^= /* k >>> r: */
      k >>> 24;
      h = /* Math.imul(k, m): */
      (k & 0xffff) * 0x5bd1e995 + ((k >>> 16) * 0xe995 << 16) ^ /* Math.imul(h, m): */
      (h & 0xffff) * 0x5bd1e995 + ((h >>> 16) * 0xe995 << 16);
    } // Handle the last few bytes of the input array

    switch (len) {
      case 3:
        h ^= (str.charCodeAt(i + 2) & 0xff) << 16;
      case 2:
        h ^= (str.charCodeAt(i + 1) & 0xff) << 8;
      case 1:
        h ^= str.charCodeAt(i) & 0xff;
        h = /* Math.imul(h, m): */
        (h & 0xffff) * 0x5bd1e995 + ((h >>> 16) * 0xe995 << 16);
    } // Do a few final mixes of the hash to ensure the last few
    // bytes are well-incorporated.

    h ^= h >>> 13;
    h = /* Math.imul(h, m): */
    (h & 0xffff) * 0x5bd1e995 + ((h >>> 16) * 0xe995 << 16);
    return ((h ^ h >>> 15) >>> 0).toString(36);
  }

  var unitlessKeys = {
    animationIterationCount: 1,
    aspectRatio: 1,
    borderImageOutset: 1,
    borderImageSlice: 1,
    borderImageWidth: 1,
    boxFlex: 1,
    boxFlexGroup: 1,
    boxOrdinalGroup: 1,
    columnCount: 1,
    columns: 1,
    flex: 1,
    flexGrow: 1,
    flexPositive: 1,
    flexShrink: 1,
    flexNegative: 1,
    flexOrder: 1,
    gridRow: 1,
    gridRowEnd: 1,
    gridRowSpan: 1,
    gridRowStart: 1,
    gridColumn: 1,
    gridColumnEnd: 1,
    gridColumnSpan: 1,
    gridColumnStart: 1,
    msGridRow: 1,
    msGridRowSpan: 1,
    msGridColumn: 1,
    msGridColumnSpan: 1,
    fontWeight: 1,
    lineHeight: 1,
    opacity: 1,
    order: 1,
    orphans: 1,
    tabSize: 1,
    widows: 1,
    zIndex: 1,
    zoom: 1,
    WebkitLineClamp: 1,
    // SVG-related properties
    fillOpacity: 1,
    floodOpacity: 1,
    stopOpacity: 1,
    strokeDasharray: 1,
    strokeDashoffset: 1,
    strokeMiterlimit: 1,
    strokeOpacity: 1,
    strokeWidth: 1
  };

  var hyphenateRegex = /[A-Z]|^ms/g;
  var animationRegex = /_EMO_([^_]+?)_([^]*?)_EMO_/g;
  var isCustomProperty = function isCustomProperty(property) {
    return property.charCodeAt(1) === 45;
  };
  var isProcessableValue = function isProcessableValue(value) {
    return value != null && typeof value !== 'boolean';
  };
  var processStyleName = /* #__PURE__ */memoize(function (styleName) {
    return isCustomProperty(styleName) ? styleName : styleName.replace(hyphenateRegex, '-$&').toLowerCase();
  });
  var processStyleValue = function processStyleValue(key, value) {
    switch (key) {
      case 'animation':
      case 'animationName':
        {
          if (typeof value === 'string') {
            return value.replace(animationRegex, function (match, p1, p2) {
              cursor = {
                name: p1,
                styles: p2,
                next: cursor
              };
              return p1;
            });
          }
        }
    }
    if (unitlessKeys[key] !== 1 && !isCustomProperty(key) && typeof value === 'number' && value !== 0) {
      return value + 'px';
    }
    return value;
  };
  var noComponentSelectorMessage = 'Component selectors can only be used in conjunction with ' + '@emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware ' + 'compiler transform.';
  function handleInterpolation(mergedProps, registered, interpolation) {
    if (interpolation == null) {
      return '';
    }
    if (interpolation.__emotion_styles !== undefined) {
      return interpolation;
    }
    switch (typeof interpolation) {
      case 'boolean':
        {
          return '';
        }
      case 'object':
        {
          if (interpolation.anim === 1) {
            cursor = {
              name: interpolation.name,
              styles: interpolation.styles,
              next: cursor
            };
            return interpolation.name;
          }
          if (interpolation.styles !== undefined) {
            var next = interpolation.next;
            if (next !== undefined) {
              // not the most efficient thing ever but this is a pretty rare case
              // and there will be very few iterations of this generally
              while (next !== undefined) {
                cursor = {
                  name: next.name,
                  styles: next.styles,
                  next: cursor
                };
                next = next.next;
              }
            }
            var styles = interpolation.styles + ";";
            return styles;
          }
          return createStringFromObject(mergedProps, registered, interpolation);
        }
      case 'function':
        {
          if (mergedProps !== undefined) {
            var previousCursor = cursor;
            var result = interpolation(mergedProps);
            cursor = previousCursor;
            return handleInterpolation(mergedProps, registered, result);
          }
          break;
        }
    } // finalize string values (regular strings and functions interpolated into css calls)

    if (registered == null) {
      return interpolation;
    }
    var cached = registered[interpolation];
    return cached !== undefined ? cached : interpolation;
  }
  function createStringFromObject(mergedProps, registered, obj) {
    var string = '';
    if (Array.isArray(obj)) {
      for (var i = 0; i < obj.length; i++) {
        string += handleInterpolation(mergedProps, registered, obj[i]) + ";";
      }
    } else {
      for (var _key in obj) {
        var value = obj[_key];
        if (typeof value !== 'object') {
          if (registered != null && registered[value] !== undefined) {
            string += _key + "{" + registered[value] + "}";
          } else if (isProcessableValue(value)) {
            string += processStyleName(_key) + ":" + processStyleValue(_key, value) + ";";
          }
        } else {
          if (_key === 'NO_COMPONENT_SELECTOR' && "production" !== 'production') {
            throw new Error(noComponentSelectorMessage);
          }
          if (Array.isArray(value) && typeof value[0] === 'string' && (registered == null || registered[value[0]] === undefined)) {
            for (var _i = 0; _i < value.length; _i++) {
              if (isProcessableValue(value[_i])) {
                string += processStyleName(_key) + ":" + processStyleValue(_key, value[_i]) + ";";
              }
            }
          } else {
            var interpolated = handleInterpolation(mergedProps, registered, value);
            switch (_key) {
              case 'animation':
              case 'animationName':
                {
                  string += processStyleName(_key) + ":" + interpolated + ";";
                  break;
                }
              default:
                {
                  string += _key + "{" + interpolated + "}";
                }
            }
          }
        }
      }
    }
    return string;
  }
  var labelPattern = /label:\s*([^\s;\n{]+)\s*(;|$)/g;
  // keyframes are stored on the SerializedStyles object as a linked list

  var cursor;
  var serializeStyles = function serializeStyles(args, registered, mergedProps) {
    if (args.length === 1 && typeof args[0] === 'object' && args[0] !== null && args[0].styles !== undefined) {
      return args[0];
    }
    var stringMode = true;
    var styles = '';
    cursor = undefined;
    var strings = args[0];
    if (strings == null || strings.raw === undefined) {
      stringMode = false;
      styles += handleInterpolation(mergedProps, registered, strings);
    } else {
      styles += strings[0];
    } // we start at 1 since we've already handled the first arg

    for (var i = 1; i < args.length; i++) {
      styles += handleInterpolation(mergedProps, registered, args[i]);
      if (stringMode) {
        styles += strings[i];
      }
    }

    labelPattern.lastIndex = 0;
    var identifierName = '';
    var match; // https://esbench.com/bench/5b809c2cf2949800a0f61fb5

    while ((match = labelPattern.exec(styles)) !== null) {
      identifierName += '-' +
      // $FlowFixMe we know it's not null
      match[1];
    }
    var name = murmur2(styles) + identifierName;
    return {
      name: name,
      styles: styles,
      next: cursor
    };
  };

  var isBrowser$1 = typeof document !== 'undefined';
  var syncFallback = function syncFallback(create) {
    return create();
  };
  var useInsertionEffect = React__namespace['useInsertion' + 'Effect'] ? React__namespace['useInsertion' + 'Effect'] : false;
  var useInsertionEffectAlwaysWithSyncFallback = !isBrowser$1 ? syncFallback : useInsertionEffect || syncFallback;

  var isBrowser = typeof document !== 'undefined';
  var hasOwnProperty = {}.hasOwnProperty;
  var EmotionCacheContext = /* #__PURE__ */React__namespace.createContext(
  // we're doing this to avoid preconstruct's dead code elimination in this one case
  // because this module is primarily intended for the browser and node
  // but it's also required in react native and similar environments sometimes
  // and we could have a special build just for that
  // but this is much easier and the native packages
  // might use a different theme context in the future anyway
  typeof HTMLElement !== 'undefined' ? /* #__PURE__ */createCache({
    key: 'css'
  }) : null);
  EmotionCacheContext.Provider;
  var withEmotionCache = function withEmotionCache(func) {
    // $FlowFixMe
    return /*#__PURE__*/React.forwardRef(function (props, ref) {
      // the cache will never be null in the browser
      var cache = React.useContext(EmotionCacheContext);
      return func(props, cache, ref);
    });
  };
  if (!isBrowser) {
    withEmotionCache = function withEmotionCache(func) {
      return function (props) {
        var cache = React.useContext(EmotionCacheContext);
        if (cache === null) {
          // yes, we're potentially creating this on every render
          // it doesn't actually matter though since it's only on the server
          // so there will only every be a single render
          // that could change in the future because of suspense and etc. but for now,
          // this works and i don't want to optimise for a future thing that we aren't sure about
          cache = createCache({
            key: 'css'
          });
          return /*#__PURE__*/React__namespace.createElement(EmotionCacheContext.Provider, {
            value: cache
          }, func(props, cache));
        } else {
          return func(props, cache);
        }
      };
    };
  }
  var ThemeContext = /* #__PURE__ */React__namespace.createContext({});
  var typePropName = '__EMOTION_TYPE_PLEASE_DO_NOT_USE__';
  var createEmotionProps = function createEmotionProps(type, props) {
    var newProps = {};
    for (var key in props) {
      if (hasOwnProperty.call(props, key)) {
        newProps[key] = props[key];
      }
    }
    newProps[typePropName] = type; // For performance, only call getLabelFromStackTrace in development and when
    return newProps;
  };
  var Insertion = function Insertion(_ref) {
    var cache = _ref.cache,
      serialized = _ref.serialized,
      isStringTag = _ref.isStringTag;
    registerStyles(cache, serialized, isStringTag);
    var rules = useInsertionEffectAlwaysWithSyncFallback(function () {
      return insertStyles(cache, serialized, isStringTag);
    });
    if (!isBrowser && rules !== undefined) {
      var _ref2;
      var serializedNames = serialized.name;
      var next = serialized.next;
      while (next !== undefined) {
        serializedNames += ' ' + next.name;
        next = next.next;
      }
      return /*#__PURE__*/React__namespace.createElement("style", (_ref2 = {}, _ref2["data-emotion"] = cache.key + " " + serializedNames, _ref2.dangerouslySetInnerHTML = {
        __html: rules
      }, _ref2.nonce = cache.sheet.nonce, _ref2));
    }
    return null;
  };
  var Emotion = /* #__PURE__ */withEmotionCache(function (props, cache, ref) {
    var cssProp = props.css; // so that using `css` from `emotion` and passing the result to the css prop works
    // not passing the registered cache to serializeStyles because it would
    // make certain babel optimisations not possible

    if (typeof cssProp === 'string' && cache.registered[cssProp] !== undefined) {
      cssProp = cache.registered[cssProp];
    }
    var WrappedComponent = props[typePropName];
    var registeredStyles = [cssProp];
    var className = '';
    if (typeof props.className === 'string') {
      className = getRegisteredStyles(cache.registered, registeredStyles, props.className);
    } else if (props.className != null) {
      className = props.className + " ";
    }
    var serialized = serializeStyles(registeredStyles, undefined, React__namespace.useContext(ThemeContext));
    className += cache.key + "-" + serialized.name;
    var newProps = {};
    for (var key in props) {
      if (hasOwnProperty.call(props, key) && key !== 'css' && key !== typePropName && ("production" === 'production' )) {
        newProps[key] = props[key];
      }
    }
    newProps.ref = ref;
    newProps.className = className;
    return /*#__PURE__*/React__namespace.createElement(React__namespace.Fragment, null, /*#__PURE__*/React__namespace.createElement(Insertion, {
      cache: cache,
      serialized: serialized,
      isStringTag: typeof WrappedComponent === 'string'
    }), /*#__PURE__*/React__namespace.createElement(WrappedComponent, newProps));
  });
  var Emotion$1 = Emotion;

  var _extends_1 = createCommonjsModule(function (module) {
    function _extends() {
      module.exports = _extends = Object.assign ? Object.assign.bind() : function (target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i];
          for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
              target[key] = source[key];
            }
          }
        }
        return target;
      }, module.exports.__esModule = true, module.exports["default"] = module.exports;
      return _extends.apply(this, arguments);
    }
    module.exports = _extends, module.exports.__esModule = true, module.exports["default"] = module.exports;
  });
  unwrapExports(_extends_1);

  var jsx = function jsx(type, props) {
    var args = arguments;
    if (props == null || !hasOwnProperty.call(props, 'css')) {
      // $FlowFixMe
      return React__namespace.createElement.apply(undefined, args);
    }
    var argsLength = args.length;
    var createElementArgArray = new Array(argsLength);
    createElementArgArray[0] = Emotion$1;
    createElementArgArray[1] = createEmotionProps(type, props);
    for (var i = 2; i < argsLength; i++) {
      createElementArgArray[i] = args[i];
    } // $FlowFixMe

    return React__namespace.createElement.apply(null, createElementArgArray);
  };
  function css$2() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    return serializeStyles(args);
  }
  var keyframes = function keyframes() {
    var insertable = css$2.apply(void 0, arguments);
    var name = "animation-" + insertable.name; // $FlowFixMe

    return {
      name: name,
      styles: "@keyframes " + name + "{" + insertable.styles + "}",
      anim: 1,
      toString: function toString() {
        return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
      }
    };
  };

  function _taggedTemplateLiteral(strings, raw) {
    if (!raw) {
      raw = strings.slice(0);
    }
    return Object.freeze(Object.defineProperties(strings, {
      raw: {
        value: Object.freeze(raw)
      }
    }));
  }

  const min = Math.min;
  const max = Math.max;
  const round = Math.round;
  const floor = Math.floor;
  const createCoords = v => ({
    x: v,
    y: v
  });
  function rectToClientRect(rect) {
    return {
      ...rect,
      top: rect.y,
      left: rect.x,
      right: rect.x + rect.width,
      bottom: rect.y + rect.height
    };
  }

  function getNodeName(node) {
    if (isNode(node)) {
      return (node.nodeName || '').toLowerCase();
    }
    // Mocked nodes in testing environments may not be instances of Node. By
    // returning `#document` an infinite loop won't occur.
    // https://github.com/floating-ui/floating-ui/issues/2317
    return '#document';
  }
  function getWindow(node) {
    var _node$ownerDocument;
    return (node == null ? void 0 : (_node$ownerDocument = node.ownerDocument) == null ? void 0 : _node$ownerDocument.defaultView) || window;
  }
  function getDocumentElement(node) {
    var _ref;
    return (_ref = (isNode(node) ? node.ownerDocument : node.document) || window.document) == null ? void 0 : _ref.documentElement;
  }
  function isNode(value) {
    return value instanceof Node || value instanceof getWindow(value).Node;
  }
  function isElement(value) {
    return value instanceof Element || value instanceof getWindow(value).Element;
  }
  function isHTMLElement(value) {
    return value instanceof HTMLElement || value instanceof getWindow(value).HTMLElement;
  }
  function isShadowRoot(value) {
    // Browsers without `ShadowRoot` support.
    if (typeof ShadowRoot === 'undefined') {
      return false;
    }
    return value instanceof ShadowRoot || value instanceof getWindow(value).ShadowRoot;
  }
  function isOverflowElement(element) {
    const {
      overflow,
      overflowX,
      overflowY,
      display
    } = getComputedStyle$1(element);
    return /auto|scroll|overlay|hidden|clip/.test(overflow + overflowY + overflowX) && !['inline', 'contents'].includes(display);
  }
  function isWebKit() {
    if (typeof CSS === 'undefined' || !CSS.supports) return false;
    return CSS.supports('-webkit-backdrop-filter', 'none');
  }
  function isLastTraversableNode(node) {
    return ['html', 'body', '#document'].includes(getNodeName(node));
  }
  function getComputedStyle$1(element) {
    return getWindow(element).getComputedStyle(element);
  }
  function getParentNode(node) {
    if (getNodeName(node) === 'html') {
      return node;
    }
    const result =
    // Step into the shadow DOM of the parent of a slotted node.
    node.assignedSlot ||
    // DOM Element detected.
    node.parentNode ||
    // ShadowRoot detected.
    isShadowRoot(node) && node.host ||
    // Fallback.
    getDocumentElement(node);
    return isShadowRoot(result) ? result.host : result;
  }
  function getNearestOverflowAncestor(node) {
    const parentNode = getParentNode(node);
    if (isLastTraversableNode(parentNode)) {
      return node.ownerDocument ? node.ownerDocument.body : node.body;
    }
    if (isHTMLElement(parentNode) && isOverflowElement(parentNode)) {
      return parentNode;
    }
    return getNearestOverflowAncestor(parentNode);
  }
  function getOverflowAncestors(node, list) {
    var _node$ownerDocument2;
    if (list === void 0) {
      list = [];
    }
    const scrollableAncestor = getNearestOverflowAncestor(node);
    const isBody = scrollableAncestor === ((_node$ownerDocument2 = node.ownerDocument) == null ? void 0 : _node$ownerDocument2.body);
    const win = getWindow(scrollableAncestor);
    if (isBody) {
      return list.concat(win, win.visualViewport || [], isOverflowElement(scrollableAncestor) ? scrollableAncestor : []);
    }
    return list.concat(scrollableAncestor, getOverflowAncestors(scrollableAncestor));
  }

  function getCssDimensions(element) {
    const css = getComputedStyle$1(element);
    // In testing environments, the `width` and `height` properties are empty
    // strings for SVG elements, returning NaN. Fallback to `0` in this case.
    let width = parseFloat(css.width) || 0;
    let height = parseFloat(css.height) || 0;
    const hasOffset = isHTMLElement(element);
    const offsetWidth = hasOffset ? element.offsetWidth : width;
    const offsetHeight = hasOffset ? element.offsetHeight : height;
    const shouldFallback = round(width) !== offsetWidth || round(height) !== offsetHeight;
    if (shouldFallback) {
      width = offsetWidth;
      height = offsetHeight;
    }
    return {
      width,
      height,
      $: shouldFallback
    };
  }
  function unwrapElement(element) {
    return !isElement(element) ? element.contextElement : element;
  }
  function getScale(element) {
    const domElement = unwrapElement(element);
    if (!isHTMLElement(domElement)) {
      return createCoords(1);
    }
    const rect = domElement.getBoundingClientRect();
    const {
      width,
      height,
      $
    } = getCssDimensions(domElement);
    let x = ($ ? round(rect.width) : rect.width) / width;
    let y = ($ ? round(rect.height) : rect.height) / height;

    // 0, NaN, or Infinity should always fallback to 1.

    if (!x || !Number.isFinite(x)) {
      x = 1;
    }
    if (!y || !Number.isFinite(y)) {
      y = 1;
    }
    return {
      x,
      y
    };
  }
  const noOffsets = /*#__PURE__*/createCoords(0);
  function getVisualOffsets(element) {
    const win = getWindow(element);
    if (!isWebKit() || !win.visualViewport) {
      return noOffsets;
    }
    return {
      x: win.visualViewport.offsetLeft,
      y: win.visualViewport.offsetTop
    };
  }
  function shouldAddVisualOffsets(element, isFixed, floatingOffsetParent) {
    if (isFixed === void 0) {
      isFixed = false;
    }
    if (!floatingOffsetParent || isFixed && floatingOffsetParent !== getWindow(element)) {
      return false;
    }
    return isFixed;
  }
  function getBoundingClientRect(element, includeScale, isFixedStrategy, offsetParent) {
    if (includeScale === void 0) {
      includeScale = false;
    }
    if (isFixedStrategy === void 0) {
      isFixedStrategy = false;
    }
    const clientRect = element.getBoundingClientRect();
    const domElement = unwrapElement(element);
    let scale = createCoords(1);
    if (includeScale) {
      if (offsetParent) {
        if (isElement(offsetParent)) {
          scale = getScale(offsetParent);
        }
      } else {
        scale = getScale(element);
      }
    }
    const visualOffsets = shouldAddVisualOffsets(domElement, isFixedStrategy, offsetParent) ? getVisualOffsets(domElement) : createCoords(0);
    let x = (clientRect.left + visualOffsets.x) / scale.x;
    let y = (clientRect.top + visualOffsets.y) / scale.y;
    let width = clientRect.width / scale.x;
    let height = clientRect.height / scale.y;
    if (domElement) {
      const win = getWindow(domElement);
      const offsetWin = offsetParent && isElement(offsetParent) ? getWindow(offsetParent) : offsetParent;
      let currentIFrame = win.frameElement;
      while (currentIFrame && offsetParent && offsetWin !== win) {
        const iframeScale = getScale(currentIFrame);
        const iframeRect = currentIFrame.getBoundingClientRect();
        const css = getComputedStyle$1(currentIFrame);
        const left = iframeRect.left + (currentIFrame.clientLeft + parseFloat(css.paddingLeft)) * iframeScale.x;
        const top = iframeRect.top + (currentIFrame.clientTop + parseFloat(css.paddingTop)) * iframeScale.y;
        x *= iframeScale.x;
        y *= iframeScale.y;
        width *= iframeScale.x;
        height *= iframeScale.y;
        x += left;
        y += top;
        currentIFrame = getWindow(currentIFrame).frameElement;
      }
    }
    return rectToClientRect({
      width,
      height,
      x,
      y
    });
  }

  // https://samthor.au/2021/observing-dom/
  function observeMove(element, onMove) {
    let io = null;
    let timeoutId;
    const root = getDocumentElement(element);
    function cleanup() {
      clearTimeout(timeoutId);
      io && io.disconnect();
      io = null;
    }
    function refresh(skip, threshold) {
      if (skip === void 0) {
        skip = false;
      }
      if (threshold === void 0) {
        threshold = 1;
      }
      cleanup();
      const {
        left,
        top,
        width,
        height
      } = element.getBoundingClientRect();
      if (!skip) {
        onMove();
      }
      if (!width || !height) {
        return;
      }
      const insetTop = floor(top);
      const insetRight = floor(root.clientWidth - (left + width));
      const insetBottom = floor(root.clientHeight - (top + height));
      const insetLeft = floor(left);
      const rootMargin = -insetTop + "px " + -insetRight + "px " + -insetBottom + "px " + -insetLeft + "px";
      const options = {
        rootMargin,
        threshold: max(0, min(1, threshold)) || 1
      };
      let isFirstUpdate = true;
      function handleObserve(entries) {
        const ratio = entries[0].intersectionRatio;
        if (ratio !== threshold) {
          if (!isFirstUpdate) {
            return refresh();
          }
          if (!ratio) {
            timeoutId = setTimeout(() => {
              refresh(false, 1e-7);
            }, 100);
          } else {
            refresh(false, ratio);
          }
        }
        isFirstUpdate = false;
      }

      // Older browsers don't support a `document` as the root and will throw an
      // error.
      try {
        io = new IntersectionObserver(handleObserve, {
          ...options,
          // Handle <iframe>s
          root: root.ownerDocument
        });
      } catch (e) {
        io = new IntersectionObserver(handleObserve, options);
      }
      io.observe(element);
    }
    refresh(true);
    return cleanup;
  }

  /**
   * Automatically updates the position of the floating element when necessary.
   * Should only be called when the floating element is mounted on the DOM or
   * visible on the screen.
   * @returns cleanup function that should be invoked when the floating element is
   * removed from the DOM or hidden from the screen.
   * @see https://floating-ui.com/docs/autoUpdate
   */
  function autoUpdate(reference, floating, update, options) {
    if (options === void 0) {
      options = {};
    }
    const {
      ancestorScroll = true,
      ancestorResize = true,
      elementResize = typeof ResizeObserver === 'function',
      layoutShift = typeof IntersectionObserver === 'function',
      animationFrame = false
    } = options;
    const referenceEl = unwrapElement(reference);
    const ancestors = ancestorScroll || ancestorResize ? [...(referenceEl ? getOverflowAncestors(referenceEl) : []), ...getOverflowAncestors(floating)] : [];
    ancestors.forEach(ancestor => {
      ancestorScroll && ancestor.addEventListener('scroll', update, {
        passive: true
      });
      ancestorResize && ancestor.addEventListener('resize', update);
    });
    const cleanupIo = referenceEl && layoutShift ? observeMove(referenceEl, update) : null;
    let reobserveFrame = -1;
    let resizeObserver = null;
    if (elementResize) {
      resizeObserver = new ResizeObserver(_ref => {
        let [firstEntry] = _ref;
        if (firstEntry && firstEntry.target === referenceEl && resizeObserver) {
          // Prevent update loops when using the `size` middleware.
          // https://github.com/floating-ui/floating-ui/issues/1740
          resizeObserver.unobserve(floating);
          cancelAnimationFrame(reobserveFrame);
          reobserveFrame = requestAnimationFrame(() => {
            resizeObserver && resizeObserver.observe(floating);
          });
        }
        update();
      });
      if (referenceEl && !animationFrame) {
        resizeObserver.observe(referenceEl);
      }
      resizeObserver.observe(floating);
    }
    let frameId;
    let prevRefRect = animationFrame ? getBoundingClientRect(reference) : null;
    if (animationFrame) {
      frameLoop();
    }
    function frameLoop() {
      const nextRefRect = getBoundingClientRect(reference);
      if (prevRefRect && (nextRefRect.x !== prevRefRect.x || nextRefRect.y !== prevRefRect.y || nextRefRect.width !== prevRefRect.width || nextRefRect.height !== prevRefRect.height)) {
        update();
      }
      prevRefRect = nextRefRect;
      frameId = requestAnimationFrame(frameLoop);
    }
    update();
    return () => {
      ancestors.forEach(ancestor => {
        ancestorScroll && ancestor.removeEventListener('scroll', update);
        ancestorResize && ancestor.removeEventListener('resize', update);
      });
      cleanupIo && cleanupIo();
      resizeObserver && resizeObserver.disconnect();
      resizeObserver = null;
      if (animationFrame) {
        cancelAnimationFrame(frameId);
      }
    };
  }

  var index = typeof document !== 'undefined' ? React.useLayoutEffect : React.useEffect;

  var _excluded$4 = ["className", "clearValue", "cx", "getStyles", "getClassNames", "getValue", "hasValue", "isMulti", "isRtl", "options", "selectOption", "selectProps", "setValue", "theme"];
  // ==============================
  // NO OP
  // ==============================

  var noop = function noop() {};

  // ==============================
  // Class Name Prefixer
  // ==============================

  /**
   String representation of component state for styling with class names.

   Expects an array of strings OR a string/object pair:
   - className(['comp', 'comp-arg', 'comp-arg-2'])
     @returns 'react-select__comp react-select__comp-arg react-select__comp-arg-2'
   - className('comp', { some: true, state: false })
     @returns 'react-select__comp react-select__comp--some'
  */
  function applyPrefixToName(prefix, name) {
    if (!name) {
      return prefix;
    } else if (name[0] === '-') {
      return prefix + name;
    } else {
      return prefix + '__' + name;
    }
  }
  function classNames(prefix, state) {
    for (var _len = arguments.length, classNameList = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
      classNameList[_key - 2] = arguments[_key];
    }
    var arr = [].concat(classNameList);
    if (state && prefix) {
      for (var key in state) {
        if (state.hasOwnProperty(key) && state[key]) {
          arr.push("".concat(applyPrefixToName(prefix, key)));
        }
      }
    }
    return arr.filter(function (i) {
      return i;
    }).map(function (i) {
      return String(i).trim();
    }).join(' ');
  }
  // ==============================
  // Clean Value
  // ==============================

  var cleanValue = function cleanValue(value) {
    if (isArray(value)) return value.filter(Boolean);
    if (_typeof(value) === 'object' && value !== null) return [value];
    return [];
  };

  // ==============================
  // Clean Common Props
  // ==============================

  var cleanCommonProps = function cleanCommonProps(props) {
    //className
    props.className;
    props.clearValue;
    props.cx;
    props.getStyles;
    props.getClassNames;
    props.getValue;
    props.hasValue;
    props.isMulti;
    props.isRtl;
    props.options;
    props.selectOption;
    props.selectProps;
    props.setValue;
    props.theme;
    var innerProps = _objectWithoutProperties(props, _excluded$4);
    return _objectSpread2({}, innerProps);
  };

  // ==============================
  // Get Style Props
  // ==============================

  var getStyleProps = function getStyleProps(props, name, classNamesState) {
    var cx = props.cx,
      getStyles = props.getStyles,
      getClassNames = props.getClassNames,
      className = props.className;
    return {
      css: getStyles(name, props),
      className: cx(classNamesState !== null && classNamesState !== void 0 ? classNamesState : {}, getClassNames(name, props), className)
    };
  };

  // ==============================
  // Scroll Helpers
  // ==============================

  function isDocumentElement(el) {
    return [document.documentElement, document.body, window].indexOf(el) > -1;
  }

  // Normalized Scroll Top
  // ------------------------------

  function normalizedHeight(el) {
    if (isDocumentElement(el)) {
      return window.innerHeight;
    }
    return el.clientHeight;
  }

  // Normalized scrollTo & scrollTop
  // ------------------------------

  function getScrollTop(el) {
    if (isDocumentElement(el)) {
      return window.pageYOffset;
    }
    return el.scrollTop;
  }
  function scrollTo(el, top) {
    // with a scroll distance, we perform scroll on the element
    if (isDocumentElement(el)) {
      window.scrollTo(0, top);
      return;
    }
    el.scrollTop = top;
  }

  // Get Scroll Parent
  // ------------------------------

  function getScrollParent(element) {
    var style = getComputedStyle(element);
    var excludeStaticParent = style.position === 'absolute';
    var overflowRx = /(auto|scroll)/;
    if (style.position === 'fixed') return document.documentElement;
    for (var parent = element; parent = parent.parentElement;) {
      style = getComputedStyle(parent);
      if (excludeStaticParent && style.position === 'static') {
        continue;
      }
      if (overflowRx.test(style.overflow + style.overflowY + style.overflowX)) {
        return parent;
      }
    }
    return document.documentElement;
  }

  // Animated Scroll To
  // ------------------------------

  /**
    @param t: time (elapsed)
    @param b: initial value
    @param c: amount of change
    @param d: duration
  */
  function easeOutCubic(t, b, c, d) {
    return c * ((t = t / d - 1) * t * t + 1) + b;
  }
  function animatedScrollTo(element, to) {
    var duration = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 200;
    var callback = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : noop;
    var start = getScrollTop(element);
    var change = to - start;
    var increment = 10;
    var currentTime = 0;
    function animateScroll() {
      currentTime += increment;
      var val = easeOutCubic(currentTime, start, change, duration);
      scrollTo(element, val);
      if (currentTime < duration) {
        window.requestAnimationFrame(animateScroll);
      } else {
        callback(element);
      }
    }
    animateScroll();
  }

  // Scroll Into View
  // ------------------------------

  function scrollIntoView(menuEl, focusedEl) {
    var menuRect = menuEl.getBoundingClientRect();
    var focusedRect = focusedEl.getBoundingClientRect();
    var overScroll = focusedEl.offsetHeight / 3;
    if (focusedRect.bottom + overScroll > menuRect.bottom) {
      scrollTo(menuEl, Math.min(focusedEl.offsetTop + focusedEl.clientHeight - menuEl.offsetHeight + overScroll, menuEl.scrollHeight));
    } else if (focusedRect.top - overScroll < menuRect.top) {
      scrollTo(menuEl, Math.max(focusedEl.offsetTop - overScroll, 0));
    }
  }

  // ==============================
  // Get bounding client object
  // ==============================

  // cannot get keys using array notation with DOMRect
  function getBoundingClientObj(element) {
    var rect = element.getBoundingClientRect();
    return {
      bottom: rect.bottom,
      height: rect.height,
      left: rect.left,
      right: rect.right,
      top: rect.top,
      width: rect.width
    };
  }

  // ==============================
  // Touch Capability Detector
  // ==============================

  function isTouchCapable() {
    try {
      document.createEvent('TouchEvent');
      return true;
    } catch (e) {
      return false;
    }
  }

  // ==============================
  // Mobile Device Detector
  // ==============================

  function isMobileDevice() {
    try {
      return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    } catch (e) {
      return false;
    }
  }

  // ==============================
  // Passive Event Detector
  // ==============================

  // https://github.com/rafgraph/detect-it/blob/main/src/index.ts#L19-L36
  var passiveOptionAccessed = false;
  var options = {
    get passive() {
      return passiveOptionAccessed = true;
    }
  };
  // check for SSR
  var w = typeof window !== 'undefined' ? window : {};
  if (w.addEventListener && w.removeEventListener) {
    w.addEventListener('p', noop, options);
    w.removeEventListener('p', noop, false);
  }
  var supportsPassiveEvents = passiveOptionAccessed;
  function notNullish(item) {
    return item != null;
  }
  function isArray(arg) {
    return Array.isArray(arg);
  }
  function valueTernary(isMulti, multiValue, singleValue) {
    return isMulti ? multiValue : singleValue;
  }
  function singleValueAsValue(singleValue) {
    return singleValue;
  }
  function multiValueAsValue(multiValue) {
    return multiValue;
  }
  var removeProps = function removeProps(propsObj) {
    for (var _len2 = arguments.length, properties = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      properties[_key2 - 1] = arguments[_key2];
    }
    var propsMap = Object.entries(propsObj).filter(function (_ref) {
      var _ref2 = _slicedToArray(_ref, 1),
        key = _ref2[0];
      return !properties.includes(key);
    });
    return propsMap.reduce(function (newProps, _ref3) {
      var _ref4 = _slicedToArray(_ref3, 2),
        key = _ref4[0],
        val = _ref4[1];
      newProps[key] = val;
      return newProps;
    }, {});
  };
  var _excluded$3 = ["children", "innerProps"],
    _excluded2$1 = ["children", "innerProps"];
  function getMenuPlacement(_ref) {
    var preferredMaxHeight = _ref.maxHeight,
      menuEl = _ref.menuEl,
      minHeight = _ref.minHeight,
      preferredPlacement = _ref.placement,
      shouldScroll = _ref.shouldScroll,
      isFixedPosition = _ref.isFixedPosition,
      controlHeight = _ref.controlHeight;
    var scrollParent = getScrollParent(menuEl);
    var defaultState = {
      placement: 'bottom',
      maxHeight: preferredMaxHeight
    };

    // something went wrong, return default state
    if (!menuEl || !menuEl.offsetParent) return defaultState;

    // we can't trust `scrollParent.scrollHeight` --> it may increase when
    // the menu is rendered
    var _scrollParent$getBoun = scrollParent.getBoundingClientRect(),
      scrollHeight = _scrollParent$getBoun.height;
    var _menuEl$getBoundingCl = menuEl.getBoundingClientRect(),
      menuBottom = _menuEl$getBoundingCl.bottom,
      menuHeight = _menuEl$getBoundingCl.height,
      menuTop = _menuEl$getBoundingCl.top;
    var _menuEl$offsetParent$ = menuEl.offsetParent.getBoundingClientRect(),
      containerTop = _menuEl$offsetParent$.top;
    var viewHeight = isFixedPosition ? window.innerHeight : normalizedHeight(scrollParent);
    var scrollTop = getScrollTop(scrollParent);
    var marginBottom = parseInt(getComputedStyle(menuEl).marginBottom, 10);
    var marginTop = parseInt(getComputedStyle(menuEl).marginTop, 10);
    var viewSpaceAbove = containerTop - marginTop;
    var viewSpaceBelow = viewHeight - menuTop;
    var scrollSpaceAbove = viewSpaceAbove + scrollTop;
    var scrollSpaceBelow = scrollHeight - scrollTop - menuTop;
    var scrollDown = menuBottom - viewHeight + scrollTop + marginBottom;
    var scrollUp = scrollTop + menuTop - marginTop;
    var scrollDuration = 160;
    switch (preferredPlacement) {
      case 'auto':
      case 'bottom':
        // 1: the menu will fit, do nothing
        if (viewSpaceBelow >= menuHeight) {
          return {
            placement: 'bottom',
            maxHeight: preferredMaxHeight
          };
        }

        // 2: the menu will fit, if scrolled
        if (scrollSpaceBelow >= menuHeight && !isFixedPosition) {
          if (shouldScroll) {
            animatedScrollTo(scrollParent, scrollDown, scrollDuration);
          }
          return {
            placement: 'bottom',
            maxHeight: preferredMaxHeight
          };
        }

        // 3: the menu will fit, if constrained
        if (!isFixedPosition && scrollSpaceBelow >= minHeight || isFixedPosition && viewSpaceBelow >= minHeight) {
          if (shouldScroll) {
            animatedScrollTo(scrollParent, scrollDown, scrollDuration);
          }

          // we want to provide as much of the menu as possible to the user,
          // so give them whatever is available below rather than the minHeight.
          var constrainedHeight = isFixedPosition ? viewSpaceBelow - marginBottom : scrollSpaceBelow - marginBottom;
          return {
            placement: 'bottom',
            maxHeight: constrainedHeight
          };
        }

        // 4. Forked beviour when there isn't enough space below

        // AUTO: flip the menu, render above
        if (preferredPlacement === 'auto' || isFixedPosition) {
          // may need to be constrained after flipping
          var _constrainedHeight = preferredMaxHeight;
          var spaceAbove = isFixedPosition ? viewSpaceAbove : scrollSpaceAbove;
          if (spaceAbove >= minHeight) {
            _constrainedHeight = Math.min(spaceAbove - marginBottom - controlHeight, preferredMaxHeight);
          }
          return {
            placement: 'top',
            maxHeight: _constrainedHeight
          };
        }

        // BOTTOM: allow browser to increase scrollable area and immediately set scroll
        if (preferredPlacement === 'bottom') {
          if (shouldScroll) {
            scrollTo(scrollParent, scrollDown);
          }
          return {
            placement: 'bottom',
            maxHeight: preferredMaxHeight
          };
        }
        break;
      case 'top':
        // 1: the menu will fit, do nothing
        if (viewSpaceAbove >= menuHeight) {
          return {
            placement: 'top',
            maxHeight: preferredMaxHeight
          };
        }

        // 2: the menu will fit, if scrolled
        if (scrollSpaceAbove >= menuHeight && !isFixedPosition) {
          if (shouldScroll) {
            animatedScrollTo(scrollParent, scrollUp, scrollDuration);
          }
          return {
            placement: 'top',
            maxHeight: preferredMaxHeight
          };
        }

        // 3: the menu will fit, if constrained
        if (!isFixedPosition && scrollSpaceAbove >= minHeight || isFixedPosition && viewSpaceAbove >= minHeight) {
          var _constrainedHeight2 = preferredMaxHeight;

          // we want to provide as much of the menu as possible to the user,
          // so give them whatever is available below rather than the minHeight.
          if (!isFixedPosition && scrollSpaceAbove >= minHeight || isFixedPosition && viewSpaceAbove >= minHeight) {
            _constrainedHeight2 = isFixedPosition ? viewSpaceAbove - marginTop : scrollSpaceAbove - marginTop;
          }
          if (shouldScroll) {
            animatedScrollTo(scrollParent, scrollUp, scrollDuration);
          }
          return {
            placement: 'top',
            maxHeight: _constrainedHeight2
          };
        }

        // 4. not enough space, the browser WILL NOT increase scrollable area when
        // absolutely positioned element rendered above the viewport (only below).
        // Flip the menu, render below
        return {
          placement: 'bottom',
          maxHeight: preferredMaxHeight
        };
      default:
        throw new Error("Invalid placement provided \"".concat(preferredPlacement, "\"."));
    }
    return defaultState;
  }

  // Menu Component
  // ------------------------------

  function alignToControl(placement) {
    var placementToCSSProp = {
      bottom: 'top',
      top: 'bottom'
    };
    return placement ? placementToCSSProp[placement] : 'bottom';
  }
  var coercePlacement = function coercePlacement(p) {
    return p === 'auto' ? 'bottom' : p;
  };
  var menuCSS = function menuCSS(_ref2, unstyled) {
    var _objectSpread2$1;
    var placement = _ref2.placement,
      _ref2$theme = _ref2.theme,
      borderRadius = _ref2$theme.borderRadius,
      spacing = _ref2$theme.spacing,
      colors = _ref2$theme.colors;
    return _objectSpread2((_objectSpread2$1 = {
      label: 'menu'
    }, _defineProperty(_objectSpread2$1, alignToControl(placement), '100%'), _defineProperty(_objectSpread2$1, "position", 'absolute'), _defineProperty(_objectSpread2$1, "width", '100%'), _defineProperty(_objectSpread2$1, "zIndex", 1), _objectSpread2$1), unstyled ? {} : {
      backgroundColor: colors.neutral0,
      borderRadius: borderRadius,
      boxShadow: '0 0 0 1px hsla(0, 0%, 0%, 0.1), 0 4px 11px hsla(0, 0%, 0%, 0.1)',
      marginBottom: spacing.menuGutter,
      marginTop: spacing.menuGutter
    });
  };
  var PortalPlacementContext = /*#__PURE__*/React.createContext(null);

  // NOTE: internal only
  var MenuPlacer = function MenuPlacer(props) {
    var children = props.children,
      minMenuHeight = props.minMenuHeight,
      maxMenuHeight = props.maxMenuHeight,
      menuPlacement = props.menuPlacement,
      menuPosition = props.menuPosition,
      menuShouldScrollIntoView = props.menuShouldScrollIntoView,
      theme = props.theme;
    var _ref3 = React.useContext(PortalPlacementContext) || {},
      setPortalPlacement = _ref3.setPortalPlacement;
    var ref = React.useRef(null);
    var _useState = React.useState(maxMenuHeight),
      _useState2 = _slicedToArray(_useState, 2),
      maxHeight = _useState2[0],
      setMaxHeight = _useState2[1];
    var _useState3 = React.useState(null),
      _useState4 = _slicedToArray(_useState3, 2),
      placement = _useState4[0],
      setPlacement = _useState4[1];
    var controlHeight = theme.spacing.controlHeight;
    index(function () {
      var menuEl = ref.current;
      if (!menuEl) return;

      // DO NOT scroll if position is fixed
      var isFixedPosition = menuPosition === 'fixed';
      var shouldScroll = menuShouldScrollIntoView && !isFixedPosition;
      var state = getMenuPlacement({
        maxHeight: maxMenuHeight,
        menuEl: menuEl,
        minHeight: minMenuHeight,
        placement: menuPlacement,
        shouldScroll: shouldScroll,
        isFixedPosition: isFixedPosition,
        controlHeight: controlHeight
      });
      setMaxHeight(state.maxHeight);
      setPlacement(state.placement);
      setPortalPlacement === null || setPortalPlacement === void 0 ? void 0 : setPortalPlacement(state.placement);
    }, [maxMenuHeight, menuPlacement, menuPosition, menuShouldScrollIntoView, minMenuHeight, setPortalPlacement, controlHeight]);
    return children({
      ref: ref,
      placerProps: _objectSpread2(_objectSpread2({}, props), {}, {
        placement: placement || coercePlacement(menuPlacement),
        maxHeight: maxHeight
      })
    });
  };
  var Menu = function Menu(props) {
    var children = props.children,
      innerRef = props.innerRef,
      innerProps = props.innerProps;
    return jsx("div", _extends({}, getStyleProps(props, 'menu', {
      menu: true
    }), {
      ref: innerRef
    }, innerProps), children);
  };
  var Menu$1 = Menu;

  // ==============================
  // Menu List
  // ==============================

  var menuListCSS = function menuListCSS(_ref4, unstyled) {
    var maxHeight = _ref4.maxHeight,
      baseUnit = _ref4.theme.spacing.baseUnit;
    return _objectSpread2({
      maxHeight: maxHeight,
      overflowY: 'auto',
      position: 'relative',
      // required for offset[Height, Top] > keyboard scroll
      WebkitOverflowScrolling: 'touch'
    }, unstyled ? {} : {
      paddingBottom: baseUnit,
      paddingTop: baseUnit
    });
  };
  var MenuList = function MenuList(props) {
    var children = props.children,
      innerProps = props.innerProps,
      innerRef = props.innerRef,
      isMulti = props.isMulti;
    return jsx("div", _extends({}, getStyleProps(props, 'menuList', {
      'menu-list': true,
      'menu-list--is-multi': isMulti
    }), {
      ref: innerRef
    }, innerProps), children);
  };

  // ==============================
  // Menu Notices
  // ==============================

  var noticeCSS = function noticeCSS(_ref5, unstyled) {
    var _ref5$theme = _ref5.theme,
      baseUnit = _ref5$theme.spacing.baseUnit,
      colors = _ref5$theme.colors;
    return _objectSpread2({
      textAlign: 'center'
    }, unstyled ? {} : {
      color: colors.neutral40,
      padding: "".concat(baseUnit * 2, "px ").concat(baseUnit * 3, "px")
    });
  };
  var noOptionsMessageCSS = noticeCSS;
  var loadingMessageCSS = noticeCSS;
  var NoOptionsMessage = function NoOptionsMessage(_ref6) {
    var _ref6$children = _ref6.children,
      children = _ref6$children === void 0 ? 'No options' : _ref6$children,
      innerProps = _ref6.innerProps,
      restProps = _objectWithoutProperties(_ref6, _excluded$3);
    return jsx("div", _extends({}, getStyleProps(_objectSpread2(_objectSpread2({}, restProps), {}, {
      children: children,
      innerProps: innerProps
    }), 'noOptionsMessage', {
      'menu-notice': true,
      'menu-notice--no-options': true
    }), innerProps), children);
  };
  var LoadingMessage = function LoadingMessage(_ref7) {
    var _ref7$children = _ref7.children,
      children = _ref7$children === void 0 ? 'Loading...' : _ref7$children,
      innerProps = _ref7.innerProps,
      restProps = _objectWithoutProperties(_ref7, _excluded2$1);
    return jsx("div", _extends({}, getStyleProps(_objectSpread2(_objectSpread2({}, restProps), {}, {
      children: children,
      innerProps: innerProps
    }), 'loadingMessage', {
      'menu-notice': true,
      'menu-notice--loading': true
    }), innerProps), children);
  };

  // ==============================
  // Menu Portal
  // ==============================

  var menuPortalCSS = function menuPortalCSS(_ref8) {
    var rect = _ref8.rect,
      offset = _ref8.offset,
      position = _ref8.position;
    return {
      left: rect.left,
      position: position,
      top: offset,
      width: rect.width,
      zIndex: 1
    };
  };
  var MenuPortal = function MenuPortal(props) {
    var appendTo = props.appendTo,
      children = props.children,
      controlElement = props.controlElement,
      innerProps = props.innerProps,
      menuPlacement = props.menuPlacement,
      menuPosition = props.menuPosition;
    var menuPortalRef = React.useRef(null);
    var cleanupRef = React.useRef(null);
    var _useState5 = React.useState(coercePlacement(menuPlacement)),
      _useState6 = _slicedToArray(_useState5, 2),
      placement = _useState6[0],
      setPortalPlacement = _useState6[1];
    var portalPlacementContext = React.useMemo(function () {
      return {
        setPortalPlacement: setPortalPlacement
      };
    }, []);
    var _useState7 = React.useState(null),
      _useState8 = _slicedToArray(_useState7, 2),
      computedPosition = _useState8[0],
      setComputedPosition = _useState8[1];
    var updateComputedPosition = React.useCallback(function () {
      if (!controlElement) return;
      var rect = getBoundingClientObj(controlElement);
      var scrollDistance = menuPosition === 'fixed' ? 0 : window.pageYOffset;
      var offset = rect[placement] + scrollDistance;
      if (offset !== (computedPosition === null || computedPosition === void 0 ? void 0 : computedPosition.offset) || rect.left !== (computedPosition === null || computedPosition === void 0 ? void 0 : computedPosition.rect.left) || rect.width !== (computedPosition === null || computedPosition === void 0 ? void 0 : computedPosition.rect.width)) {
        setComputedPosition({
          offset: offset,
          rect: rect
        });
      }
    }, [controlElement, menuPosition, placement, computedPosition === null || computedPosition === void 0 ? void 0 : computedPosition.offset, computedPosition === null || computedPosition === void 0 ? void 0 : computedPosition.rect.left, computedPosition === null || computedPosition === void 0 ? void 0 : computedPosition.rect.width]);
    index(function () {
      updateComputedPosition();
    }, [updateComputedPosition]);
    var runAutoUpdate = React.useCallback(function () {
      if (typeof cleanupRef.current === 'function') {
        cleanupRef.current();
        cleanupRef.current = null;
      }
      if (controlElement && menuPortalRef.current) {
        cleanupRef.current = autoUpdate(controlElement, menuPortalRef.current, updateComputedPosition, {
          elementResize: 'ResizeObserver' in window
        });
      }
    }, [controlElement, updateComputedPosition]);
    index(function () {
      runAutoUpdate();
    }, [runAutoUpdate]);
    var setMenuPortalElement = React.useCallback(function (menuPortalElement) {
      menuPortalRef.current = menuPortalElement;
      runAutoUpdate();
    }, [runAutoUpdate]);

    // bail early if required elements aren't present
    if (!appendTo && menuPosition !== 'fixed' || !computedPosition) return null;

    // same wrapper element whether fixed or portalled
    var menuWrapper = jsx("div", _extends({
      ref: setMenuPortalElement
    }, getStyleProps(_objectSpread2(_objectSpread2({}, props), {}, {
      offset: computedPosition.offset,
      position: menuPosition,
      rect: computedPosition.rect
    }), 'menuPortal', {
      'menu-portal': true
    }), innerProps), children);
    return jsx(PortalPlacementContext.Provider, {
      value: portalPlacementContext
    }, appendTo ? /*#__PURE__*/reactDom.createPortal(menuWrapper, appendTo) : menuWrapper);
  };

  // ==============================
  // Root Container
  // ==============================

  var containerCSS = function containerCSS(_ref) {
    var isDisabled = _ref.isDisabled,
      isRtl = _ref.isRtl;
    return {
      label: 'container',
      direction: isRtl ? 'rtl' : undefined,
      pointerEvents: isDisabled ? 'none' : undefined,
      // cancel mouse events when disabled
      position: 'relative'
    };
  };
  var SelectContainer = function SelectContainer(props) {
    var children = props.children,
      innerProps = props.innerProps,
      isDisabled = props.isDisabled,
      isRtl = props.isRtl;
    return jsx("div", _extends({}, getStyleProps(props, 'container', {
      '--is-disabled': isDisabled,
      '--is-rtl': isRtl
    }), innerProps), children);
  };

  // ==============================
  // Value Container
  // ==============================

  var valueContainerCSS = function valueContainerCSS(_ref2, unstyled) {
    var spacing = _ref2.theme.spacing,
      isMulti = _ref2.isMulti,
      hasValue = _ref2.hasValue,
      controlShouldRenderValue = _ref2.selectProps.controlShouldRenderValue;
    return _objectSpread2({
      alignItems: 'center',
      display: isMulti && hasValue && controlShouldRenderValue ? 'flex' : 'grid',
      flex: 1,
      flexWrap: 'wrap',
      WebkitOverflowScrolling: 'touch',
      position: 'relative',
      overflow: 'hidden'
    }, unstyled ? {} : {
      padding: "".concat(spacing.baseUnit / 2, "px ").concat(spacing.baseUnit * 2, "px")
    });
  };
  var ValueContainer = function ValueContainer(props) {
    var children = props.children,
      innerProps = props.innerProps,
      isMulti = props.isMulti,
      hasValue = props.hasValue;
    return jsx("div", _extends({}, getStyleProps(props, 'valueContainer', {
      'value-container': true,
      'value-container--is-multi': isMulti,
      'value-container--has-value': hasValue
    }), innerProps), children);
  };

  // ==============================
  // Indicator Container
  // ==============================

  var indicatorsContainerCSS = function indicatorsContainerCSS() {
    return {
      alignItems: 'center',
      alignSelf: 'stretch',
      display: 'flex',
      flexShrink: 0
    };
  };
  var IndicatorsContainer = function IndicatorsContainer(props) {
    var children = props.children,
      innerProps = props.innerProps;
    return jsx("div", _extends({}, getStyleProps(props, 'indicatorsContainer', {
      indicators: true
    }), innerProps), children);
  };
  var _templateObject;
  var _excluded$2 = ["size"],
    _excluded2 = ["innerProps", "isRtl", "size"];

  // ==============================
  // Dropdown & Clear Icons
  // ==============================
  var _ref2$2 = {
    name: "8mmkcg",
    styles: "display:inline-block;fill:currentColor;line-height:1;stroke:currentColor;stroke-width:0"
  } ;
  var Svg = function Svg(_ref) {
    var size = _ref.size,
      props = _objectWithoutProperties(_ref, _excluded$2);
    return jsx("svg", _extends({
      height: size,
      width: size,
      viewBox: "0 0 20 20",
      "aria-hidden": "true",
      focusable: "false",
      css: _ref2$2
    }, props));
  };
  var CrossIcon = function CrossIcon(props) {
    return jsx(Svg, _extends({
      size: 20
    }, props), jsx("path", {
      d: "M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z"
    }));
  };
  var DownChevron = function DownChevron(props) {
    return jsx(Svg, _extends({
      size: 20
    }, props), jsx("path", {
      d: "M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"
    }));
  };

  // ==============================
  // Dropdown & Clear Buttons
  // ==============================

  var baseCSS = function baseCSS(_ref3, unstyled) {
    var isFocused = _ref3.isFocused,
      _ref3$theme = _ref3.theme,
      baseUnit = _ref3$theme.spacing.baseUnit,
      colors = _ref3$theme.colors;
    return _objectSpread2({
      label: 'indicatorContainer',
      display: 'flex',
      transition: 'color 150ms'
    }, unstyled ? {} : {
      color: isFocused ? colors.neutral60 : colors.neutral20,
      padding: baseUnit * 2,
      ':hover': {
        color: isFocused ? colors.neutral80 : colors.neutral40
      }
    });
  };
  var dropdownIndicatorCSS = baseCSS;
  var DropdownIndicator = function DropdownIndicator(props) {
    var children = props.children,
      innerProps = props.innerProps;
    return jsx("div", _extends({}, getStyleProps(props, 'dropdownIndicator', {
      indicator: true,
      'dropdown-indicator': true
    }), innerProps), children || jsx(DownChevron, null));
  };
  var clearIndicatorCSS = baseCSS;
  var ClearIndicator = function ClearIndicator(props) {
    var children = props.children,
      innerProps = props.innerProps;
    return jsx("div", _extends({}, getStyleProps(props, 'clearIndicator', {
      indicator: true,
      'clear-indicator': true
    }), innerProps), children || jsx(CrossIcon, null));
  };

  // ==============================
  // Separator
  // ==============================

  var indicatorSeparatorCSS = function indicatorSeparatorCSS(_ref4, unstyled) {
    var isDisabled = _ref4.isDisabled,
      _ref4$theme = _ref4.theme,
      baseUnit = _ref4$theme.spacing.baseUnit,
      colors = _ref4$theme.colors;
    return _objectSpread2({
      label: 'indicatorSeparator',
      alignSelf: 'stretch',
      width: 1
    }, unstyled ? {} : {
      backgroundColor: isDisabled ? colors.neutral10 : colors.neutral20,
      marginBottom: baseUnit * 2,
      marginTop: baseUnit * 2
    });
  };
  var IndicatorSeparator = function IndicatorSeparator(props) {
    var innerProps = props.innerProps;
    return jsx("span", _extends({}, innerProps, getStyleProps(props, 'indicatorSeparator', {
      'indicator-separator': true
    })));
  };

  // ==============================
  // Loading
  // ==============================

  var loadingDotAnimations = keyframes(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  0%, 80%, 100% { opacity: 0; }\n  40% { opacity: 1; }\n"])));
  var loadingIndicatorCSS = function loadingIndicatorCSS(_ref5, unstyled) {
    var isFocused = _ref5.isFocused,
      size = _ref5.size,
      _ref5$theme = _ref5.theme,
      colors = _ref5$theme.colors,
      baseUnit = _ref5$theme.spacing.baseUnit;
    return _objectSpread2({
      label: 'loadingIndicator',
      display: 'flex',
      transition: 'color 150ms',
      alignSelf: 'center',
      fontSize: size,
      lineHeight: 1,
      marginRight: size,
      textAlign: 'center',
      verticalAlign: 'middle'
    }, unstyled ? {} : {
      color: isFocused ? colors.neutral60 : colors.neutral20,
      padding: baseUnit * 2
    });
  };
  var LoadingDot = function LoadingDot(_ref6) {
    var delay = _ref6.delay,
      offset = _ref6.offset;
    return jsx("span", {
      css: /*#__PURE__*/css$2({
        animation: "".concat(loadingDotAnimations, " 1s ease-in-out ").concat(delay, "ms infinite;"),
        backgroundColor: 'currentColor',
        borderRadius: '1em',
        display: 'inline-block',
        marginLeft: offset ? '1em' : undefined,
        height: '1em',
        verticalAlign: 'top',
        width: '1em'
      }, "" , "" )
    });
  };
  var LoadingIndicator = function LoadingIndicator(_ref7) {
    var innerProps = _ref7.innerProps,
      isRtl = _ref7.isRtl,
      _ref7$size = _ref7.size,
      size = _ref7$size === void 0 ? 4 : _ref7$size,
      restProps = _objectWithoutProperties(_ref7, _excluded2);
    return jsx("div", _extends({}, getStyleProps(_objectSpread2(_objectSpread2({}, restProps), {}, {
      innerProps: innerProps,
      isRtl: isRtl,
      size: size
    }), 'loadingIndicator', {
      indicator: true,
      'loading-indicator': true
    }), innerProps), jsx(LoadingDot, {
      delay: 0,
      offset: isRtl
    }), jsx(LoadingDot, {
      delay: 160,
      offset: true
    }), jsx(LoadingDot, {
      delay: 320,
      offset: !isRtl
    }));
  };
  var css$1 = function css(_ref, unstyled) {
    var isDisabled = _ref.isDisabled,
      isFocused = _ref.isFocused,
      _ref$theme = _ref.theme,
      colors = _ref$theme.colors,
      borderRadius = _ref$theme.borderRadius,
      spacing = _ref$theme.spacing;
    return _objectSpread2({
      label: 'control',
      alignItems: 'center',
      cursor: 'default',
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
      minHeight: spacing.controlHeight,
      outline: '0 !important',
      position: 'relative',
      transition: 'all 100ms'
    }, unstyled ? {} : {
      backgroundColor: isDisabled ? colors.neutral5 : colors.neutral0,
      borderColor: isDisabled ? colors.neutral10 : isFocused ? colors.primary : colors.neutral20,
      borderRadius: borderRadius,
      borderStyle: 'solid',
      borderWidth: 1,
      boxShadow: isFocused ? "0 0 0 1px ".concat(colors.primary) : undefined,
      '&:hover': {
        borderColor: isFocused ? colors.primary : colors.neutral30
      }
    });
  };
  var Control = function Control(props) {
    var children = props.children,
      isDisabled = props.isDisabled,
      isFocused = props.isFocused,
      innerRef = props.innerRef,
      innerProps = props.innerProps,
      menuIsOpen = props.menuIsOpen;
    return jsx("div", _extends({
      ref: innerRef
    }, getStyleProps(props, 'control', {
      control: true,
      'control--is-disabled': isDisabled,
      'control--is-focused': isFocused,
      'control--menu-is-open': menuIsOpen
    }), innerProps), children);
  };
  var Control$1 = Control;
  var _excluded$1 = ["data"];
  var groupCSS = function groupCSS(_ref, unstyled) {
    var spacing = _ref.theme.spacing;
    return unstyled ? {} : {
      paddingBottom: spacing.baseUnit * 2,
      paddingTop: spacing.baseUnit * 2
    };
  };
  var Group = function Group(props) {
    var children = props.children,
      cx = props.cx,
      getStyles = props.getStyles,
      getClassNames = props.getClassNames,
      Heading = props.Heading,
      headingProps = props.headingProps,
      innerProps = props.innerProps,
      label = props.label,
      theme = props.theme,
      selectProps = props.selectProps;
    return jsx("div", _extends({}, getStyleProps(props, 'group', {
      group: true
    }), innerProps), jsx(Heading, _extends({}, headingProps, {
      selectProps: selectProps,
      theme: theme,
      getStyles: getStyles,
      getClassNames: getClassNames,
      cx: cx
    }), label), jsx("div", null, children));
  };
  var groupHeadingCSS = function groupHeadingCSS(_ref2, unstyled) {
    var _ref2$theme = _ref2.theme,
      colors = _ref2$theme.colors,
      spacing = _ref2$theme.spacing;
    return _objectSpread2({
      label: 'group',
      cursor: 'default',
      display: 'block'
    }, unstyled ? {} : {
      color: colors.neutral40,
      fontSize: '75%',
      fontWeight: 500,
      marginBottom: '0.25em',
      paddingLeft: spacing.baseUnit * 3,
      paddingRight: spacing.baseUnit * 3,
      textTransform: 'uppercase'
    });
  };
  var GroupHeading = function GroupHeading(props) {
    var _cleanCommonProps = cleanCommonProps(props);
    _cleanCommonProps.data;
    var innerProps = _objectWithoutProperties(_cleanCommonProps, _excluded$1);
    return jsx("div", _extends({}, getStyleProps(props, 'groupHeading', {
      'group-heading': true
    }), innerProps));
  };
  var Group$1 = Group;
  var _excluded$5 = ["innerRef", "isDisabled", "isHidden", "inputClassName"];
  var inputCSS = function inputCSS(_ref, unstyled) {
    var isDisabled = _ref.isDisabled,
      value = _ref.value,
      _ref$theme = _ref.theme,
      spacing = _ref$theme.spacing,
      colors = _ref$theme.colors;
    return _objectSpread2(_objectSpread2({
      visibility: isDisabled ? 'hidden' : 'visible',
      // force css to recompute when value change due to @emotion bug.
      // We can remove it whenever the bug is fixed.
      transform: value ? 'translateZ(0)' : ''
    }, containerStyle), unstyled ? {} : {
      margin: spacing.baseUnit / 2,
      paddingBottom: spacing.baseUnit / 2,
      paddingTop: spacing.baseUnit / 2,
      color: colors.neutral80
    });
  };
  var spacingStyle = {
    gridArea: '1 / 2',
    font: 'inherit',
    minWidth: '2px',
    border: 0,
    margin: 0,
    outline: 0,
    padding: 0
  };
  var containerStyle = {
    flex: '1 1 auto',
    display: 'inline-grid',
    gridArea: '1 / 1 / 2 / 3',
    gridTemplateColumns: '0 min-content',
    '&:after': _objectSpread2({
      content: 'attr(data-value) " "',
      visibility: 'hidden',
      whiteSpace: 'pre'
    }, spacingStyle)
  };
  var inputStyle = function inputStyle(isHidden) {
    return _objectSpread2({
      label: 'input',
      color: 'inherit',
      background: 0,
      opacity: isHidden ? 0 : 1,
      width: '100%'
    }, spacingStyle);
  };
  var Input = function Input(props) {
    var cx = props.cx,
      value = props.value;
    var _cleanCommonProps = cleanCommonProps(props),
      innerRef = _cleanCommonProps.innerRef,
      isDisabled = _cleanCommonProps.isDisabled,
      isHidden = _cleanCommonProps.isHidden,
      inputClassName = _cleanCommonProps.inputClassName,
      innerProps = _objectWithoutProperties(_cleanCommonProps, _excluded$5);
    return jsx("div", _extends({}, getStyleProps(props, 'input', {
      'input-container': true
    }), {
      "data-value": value || ''
    }), jsx("input", _extends({
      className: cx({
        input: true
      }, inputClassName),
      ref: innerRef,
      style: inputStyle(isHidden),
      disabled: isDisabled
    }, innerProps)));
  };
  var Input$1 = Input;
  var multiValueCSS = function multiValueCSS(_ref, unstyled) {
    var _ref$theme = _ref.theme,
      spacing = _ref$theme.spacing,
      borderRadius = _ref$theme.borderRadius,
      colors = _ref$theme.colors;
    return _objectSpread2({
      label: 'multiValue',
      display: 'flex',
      minWidth: 0
    }, unstyled ? {} : {
      backgroundColor: colors.neutral10,
      borderRadius: borderRadius / 2,
      margin: spacing.baseUnit / 2
    });
  };
  var multiValueLabelCSS = function multiValueLabelCSS(_ref2, unstyled) {
    var _ref2$theme = _ref2.theme,
      borderRadius = _ref2$theme.borderRadius,
      colors = _ref2$theme.colors,
      cropWithEllipsis = _ref2.cropWithEllipsis;
    return _objectSpread2({
      overflow: 'hidden',
      textOverflow: cropWithEllipsis || cropWithEllipsis === undefined ? 'ellipsis' : undefined,
      whiteSpace: 'nowrap'
    }, unstyled ? {} : {
      borderRadius: borderRadius / 2,
      color: colors.neutral80,
      fontSize: '85%',
      padding: 3,
      paddingLeft: 6
    });
  };
  var multiValueRemoveCSS = function multiValueRemoveCSS(_ref3, unstyled) {
    var _ref3$theme = _ref3.theme,
      spacing = _ref3$theme.spacing,
      borderRadius = _ref3$theme.borderRadius,
      colors = _ref3$theme.colors,
      isFocused = _ref3.isFocused;
    return _objectSpread2({
      alignItems: 'center',
      display: 'flex'
    }, unstyled ? {} : {
      borderRadius: borderRadius / 2,
      backgroundColor: isFocused ? colors.dangerLight : undefined,
      paddingLeft: spacing.baseUnit,
      paddingRight: spacing.baseUnit,
      ':hover': {
        backgroundColor: colors.dangerLight,
        color: colors.danger
      }
    });
  };
  var MultiValueGeneric = function MultiValueGeneric(_ref4) {
    var children = _ref4.children,
      innerProps = _ref4.innerProps;
    return jsx("div", innerProps, children);
  };
  var MultiValueContainer = MultiValueGeneric;
  var MultiValueLabel = MultiValueGeneric;
  function MultiValueRemove(_ref5) {
    var children = _ref5.children,
      innerProps = _ref5.innerProps;
    return jsx("div", _extends({
      role: "button"
    }, innerProps), children || jsx(CrossIcon, {
      size: 14
    }));
  }
  var MultiValue = function MultiValue(props) {
    var children = props.children,
      components = props.components,
      data = props.data,
      innerProps = props.innerProps,
      isDisabled = props.isDisabled,
      removeProps = props.removeProps,
      selectProps = props.selectProps;
    var Container = components.Container,
      Label = components.Label,
      Remove = components.Remove;
    return jsx(Container, {
      data: data,
      innerProps: _objectSpread2(_objectSpread2({}, getStyleProps(props, 'multiValue', {
        'multi-value': true,
        'multi-value--is-disabled': isDisabled
      })), innerProps),
      selectProps: selectProps
    }, jsx(Label, {
      data: data,
      innerProps: _objectSpread2({}, getStyleProps(props, 'multiValueLabel', {
        'multi-value__label': true
      })),
      selectProps: selectProps
    }, children), jsx(Remove, {
      data: data,
      innerProps: _objectSpread2(_objectSpread2({}, getStyleProps(props, 'multiValueRemove', {
        'multi-value__remove': true
      })), {}, {
        'aria-label': "Remove ".concat(children || 'option')
      }, removeProps),
      selectProps: selectProps
    }));
  };
  var MultiValue$1 = MultiValue;
  var optionCSS = function optionCSS(_ref, unstyled) {
    var isDisabled = _ref.isDisabled,
      isFocused = _ref.isFocused,
      isSelected = _ref.isSelected,
      _ref$theme = _ref.theme,
      spacing = _ref$theme.spacing,
      colors = _ref$theme.colors;
    return _objectSpread2({
      label: 'option',
      cursor: 'default',
      display: 'block',
      fontSize: 'inherit',
      width: '100%',
      userSelect: 'none',
      WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)'
    }, unstyled ? {} : {
      backgroundColor: isSelected ? colors.primary : isFocused ? colors.primary25 : 'transparent',
      color: isDisabled ? colors.neutral20 : isSelected ? colors.neutral0 : 'inherit',
      padding: "".concat(spacing.baseUnit * 2, "px ").concat(spacing.baseUnit * 3, "px"),
      // provide some affordance on touch devices
      ':active': {
        backgroundColor: !isDisabled ? isSelected ? colors.primary : colors.primary50 : undefined
      }
    });
  };
  var Option = function Option(props) {
    var children = props.children,
      isDisabled = props.isDisabled,
      isFocused = props.isFocused,
      isSelected = props.isSelected,
      innerRef = props.innerRef,
      innerProps = props.innerProps;
    return jsx("div", _extends({}, getStyleProps(props, 'option', {
      option: true,
      'option--is-disabled': isDisabled,
      'option--is-focused': isFocused,
      'option--is-selected': isSelected
    }), {
      ref: innerRef,
      "aria-disabled": isDisabled
    }, innerProps), children);
  };
  var Option$1 = Option;
  var placeholderCSS = function placeholderCSS(_ref, unstyled) {
    var _ref$theme = _ref.theme,
      spacing = _ref$theme.spacing,
      colors = _ref$theme.colors;
    return _objectSpread2({
      label: 'placeholder',
      gridArea: '1 / 1 / 2 / 3'
    }, unstyled ? {} : {
      color: colors.neutral50,
      marginLeft: spacing.baseUnit / 2,
      marginRight: spacing.baseUnit / 2
    });
  };
  var Placeholder = function Placeholder(props) {
    var children = props.children,
      innerProps = props.innerProps;
    return jsx("div", _extends({}, getStyleProps(props, 'placeholder', {
      placeholder: true
    }), innerProps), children);
  };
  var Placeholder$1 = Placeholder;
  var css = function css(_ref, unstyled) {
    var isDisabled = _ref.isDisabled,
      _ref$theme = _ref.theme,
      spacing = _ref$theme.spacing,
      colors = _ref$theme.colors;
    return _objectSpread2({
      label: 'singleValue',
      gridArea: '1 / 1 / 2 / 3',
      maxWidth: '100%',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap'
    }, unstyled ? {} : {
      color: isDisabled ? colors.neutral40 : colors.neutral80,
      marginLeft: spacing.baseUnit / 2,
      marginRight: spacing.baseUnit / 2
    });
  };
  var SingleValue = function SingleValue(props) {
    var children = props.children,
      isDisabled = props.isDisabled,
      innerProps = props.innerProps;
    return jsx("div", _extends({}, getStyleProps(props, 'singleValue', {
      'single-value': true,
      'single-value--is-disabled': isDisabled
    }), innerProps), children);
  };
  var SingleValue$1 = SingleValue;
  var components = {
    ClearIndicator: ClearIndicator,
    Control: Control$1,
    DropdownIndicator: DropdownIndicator,
    DownChevron: DownChevron,
    CrossIcon: CrossIcon,
    Group: Group$1,
    GroupHeading: GroupHeading,
    IndicatorsContainer: IndicatorsContainer,
    IndicatorSeparator: IndicatorSeparator,
    Input: Input$1,
    LoadingIndicator: LoadingIndicator,
    Menu: Menu$1,
    MenuList: MenuList,
    MenuPortal: MenuPortal,
    LoadingMessage: LoadingMessage,
    NoOptionsMessage: NoOptionsMessage,
    MultiValue: MultiValue$1,
    MultiValueContainer: MultiValueContainer,
    MultiValueLabel: MultiValueLabel,
    MultiValueRemove: MultiValueRemove,
    Option: Option$1,
    Placeholder: Placeholder$1,
    SelectContainer: SelectContainer,
    SingleValue: SingleValue$1,
    ValueContainer: ValueContainer
  };
  var defaultComponents = function defaultComponents(props) {
    return _objectSpread2(_objectSpread2({}, components), props.components);
  };

  var safeIsNaN = Number.isNaN || function ponyfill(value) {
    return typeof value === 'number' && value !== value;
  };
  function isEqual(first, second) {
    if (first === second) {
      return true;
    }
    if (safeIsNaN(first) && safeIsNaN(second)) {
      return true;
    }
    return false;
  }
  function areInputsEqual(newInputs, lastInputs) {
    if (newInputs.length !== lastInputs.length) {
      return false;
    }
    for (var i = 0; i < newInputs.length; i++) {
      if (!isEqual(newInputs[i], lastInputs[i])) {
        return false;
      }
    }
    return true;
  }
  function memoizeOne(resultFn, isEqual) {
    if (isEqual === void 0) {
      isEqual = areInputsEqual;
    }
    var cache = null;
    function memoized() {
      var newArgs = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        newArgs[_i] = arguments[_i];
      }
      if (cache && cache.lastThis === this && isEqual(newArgs, cache.lastArgs)) {
        return cache.lastResult;
      }
      var lastResult = resultFn.apply(this, newArgs);
      cache = {
        lastResult: lastResult,
        lastArgs: newArgs,
        lastThis: this
      };
      return lastResult;
    }
    memoized.clear = function clear() {
      cache = null;
    };
    return memoized;
  }

  // Assistive text to describe visual elements. Hidden for sighted users.
  var _ref = {
    name: "7pg0cj-a11yText",
    styles: "label:a11yText;z-index:9999;border:0;clip:rect(1px, 1px, 1px, 1px);height:1px;width:1px;position:absolute;overflow:hidden;padding:0;white-space:nowrap"
  } ;
  var A11yText = function A11yText(props) {
    return jsx("span", _extends({
      css: _ref
    }, props));
  };
  var A11yText$1 = A11yText;
  var defaultAriaLiveMessages = {
    guidance: function guidance(props) {
      var isSearchable = props.isSearchable,
        isMulti = props.isMulti,
        isDisabled = props.isDisabled,
        tabSelectsValue = props.tabSelectsValue,
        context = props.context;
      switch (context) {
        case 'menu':
          return "Use Up and Down to choose options".concat(isDisabled ? '' : ', press Enter to select the currently focused option', ", press Escape to exit the menu").concat(tabSelectsValue ? ', press Tab to select the option and exit the menu' : '', ".");
        case 'input':
          return "".concat(props['aria-label'] || 'Select', " is focused ").concat(isSearchable ? ',type to refine list' : '', ", press Down to open the menu, ").concat(isMulti ? ' press left to focus selected values' : '');
        case 'value':
          return 'Use left and right to toggle between focused values, press Backspace to remove the currently focused value';
        default:
          return '';
      }
    },
    onChange: function onChange(props) {
      var action = props.action,
        _props$label = props.label,
        label = _props$label === void 0 ? '' : _props$label,
        labels = props.labels,
        isDisabled = props.isDisabled;
      switch (action) {
        case 'deselect-option':
        case 'pop-value':
        case 'remove-value':
          return "option ".concat(label, ", deselected.");
        case 'clear':
          return 'All selected options have been cleared.';
        case 'initial-input-focus':
          return "option".concat(labels.length > 1 ? 's' : '', " ").concat(labels.join(','), ", selected.");
        case 'select-option':
          return isDisabled ? "option ".concat(label, " is disabled. Select another option.") : "option ".concat(label, ", selected.");
        default:
          return '';
      }
    },
    onFocus: function onFocus(props) {
      var context = props.context,
        focused = props.focused,
        options = props.options,
        _props$label2 = props.label,
        label = _props$label2 === void 0 ? '' : _props$label2,
        selectValue = props.selectValue,
        isDisabled = props.isDisabled,
        isSelected = props.isSelected;
      var getArrayIndex = function getArrayIndex(arr, item) {
        return arr && arr.length ? "".concat(arr.indexOf(item) + 1, " of ").concat(arr.length) : '';
      };
      if (context === 'value' && selectValue) {
        return "value ".concat(label, " focused, ").concat(getArrayIndex(selectValue, focused), ".");
      }
      if (context === 'menu') {
        var disabled = isDisabled ? ' disabled' : '';
        var status = "".concat(isSelected ? 'selected' : 'focused').concat(disabled);
        return "option ".concat(label, " ").concat(status, ", ").concat(getArrayIndex(options, focused), ".");
      }
      return '';
    },
    onFilter: function onFilter(props) {
      var inputValue = props.inputValue,
        resultsMessage = props.resultsMessage;
      return "".concat(resultsMessage).concat(inputValue ? ' for search term ' + inputValue : '', ".");
    }
  };
  var LiveRegion = function LiveRegion(props) {
    var ariaSelection = props.ariaSelection,
      focusedOption = props.focusedOption,
      focusedValue = props.focusedValue,
      focusableOptions = props.focusableOptions,
      isFocused = props.isFocused,
      selectValue = props.selectValue,
      selectProps = props.selectProps,
      id = props.id;
    var ariaLiveMessages = selectProps.ariaLiveMessages,
      getOptionLabel = selectProps.getOptionLabel,
      inputValue = selectProps.inputValue,
      isMulti = selectProps.isMulti,
      isOptionDisabled = selectProps.isOptionDisabled,
      isSearchable = selectProps.isSearchable,
      menuIsOpen = selectProps.menuIsOpen,
      options = selectProps.options,
      screenReaderStatus = selectProps.screenReaderStatus,
      tabSelectsValue = selectProps.tabSelectsValue;
    var ariaLabel = selectProps['aria-label'];
    var ariaLive = selectProps['aria-live'];

    // Update aria live message configuration when prop changes
    var messages = React.useMemo(function () {
      return _objectSpread2(_objectSpread2({}, defaultAriaLiveMessages), ariaLiveMessages || {});
    }, [ariaLiveMessages]);

    // Update aria live selected option when prop changes
    var ariaSelected = React.useMemo(function () {
      var message = '';
      if (ariaSelection && messages.onChange) {
        var option = ariaSelection.option,
          selectedOptions = ariaSelection.options,
          removedValue = ariaSelection.removedValue,
          removedValues = ariaSelection.removedValues,
          value = ariaSelection.value;
        // select-option when !isMulti does not return option so we assume selected option is value
        var asOption = function asOption(val) {
          return !Array.isArray(val) ? val : null;
        };

        // If there is just one item from the action then get its label
        var selected = removedValue || option || asOption(value);
        var label = selected ? getOptionLabel(selected) : '';

        // If there are multiple items from the action then return an array of labels
        var multiSelected = selectedOptions || removedValues || undefined;
        var labels = multiSelected ? multiSelected.map(getOptionLabel) : [];
        var onChangeProps = _objectSpread2({
          // multiSelected items are usually items that have already been selected
          // or set by the user as a default value so we assume they are not disabled
          isDisabled: selected && isOptionDisabled(selected, selectValue),
          label: label,
          labels: labels
        }, ariaSelection);
        message = messages.onChange(onChangeProps);
      }
      return message;
    }, [ariaSelection, messages, isOptionDisabled, selectValue, getOptionLabel]);
    var ariaFocused = React.useMemo(function () {
      var focusMsg = '';
      var focused = focusedOption || focusedValue;
      var isSelected = !!(focusedOption && selectValue && selectValue.includes(focusedOption));
      if (focused && messages.onFocus) {
        var onFocusProps = {
          focused: focused,
          label: getOptionLabel(focused),
          isDisabled: isOptionDisabled(focused, selectValue),
          isSelected: isSelected,
          options: focusableOptions,
          context: focused === focusedOption ? 'menu' : 'value',
          selectValue: selectValue
        };
        focusMsg = messages.onFocus(onFocusProps);
      }
      return focusMsg;
    }, [focusedOption, focusedValue, getOptionLabel, isOptionDisabled, messages, focusableOptions, selectValue]);
    var ariaResults = React.useMemo(function () {
      var resultsMsg = '';
      if (menuIsOpen && options.length && messages.onFilter) {
        var resultsMessage = screenReaderStatus({
          count: focusableOptions.length
        });
        resultsMsg = messages.onFilter({
          inputValue: inputValue,
          resultsMessage: resultsMessage
        });
      }
      return resultsMsg;
    }, [focusableOptions, inputValue, menuIsOpen, messages, options, screenReaderStatus]);
    var ariaGuidance = React.useMemo(function () {
      var guidanceMsg = '';
      if (messages.guidance) {
        var context = focusedValue ? 'value' : menuIsOpen ? 'menu' : 'input';
        guidanceMsg = messages.guidance({
          'aria-label': ariaLabel,
          context: context,
          isDisabled: focusedOption && isOptionDisabled(focusedOption, selectValue),
          isMulti: isMulti,
          isSearchable: isSearchable,
          tabSelectsValue: tabSelectsValue
        });
      }
      return guidanceMsg;
    }, [ariaLabel, focusedOption, focusedValue, isMulti, isOptionDisabled, isSearchable, menuIsOpen, messages, selectValue, tabSelectsValue]);
    var ariaContext = "".concat(ariaFocused, " ").concat(ariaResults, " ").concat(ariaGuidance);
    var ScreenReaderText = jsx(React.Fragment, null, jsx("span", {
      id: "aria-selection"
    }, ariaSelected), jsx("span", {
      id: "aria-context"
    }, ariaContext));
    var isInitialFocus = (ariaSelection === null || ariaSelection === void 0 ? void 0 : ariaSelection.action) === 'initial-input-focus';
    return jsx(React.Fragment, null, jsx(A11yText$1, {
      id: id
    }, isInitialFocus && ScreenReaderText), jsx(A11yText$1, {
      "aria-live": ariaLive,
      "aria-atomic": "false",
      "aria-relevant": "additions text"
    }, isFocused && !isInitialFocus && ScreenReaderText));
  };
  var LiveRegion$1 = LiveRegion;
  var diacritics = [{
    base: 'A',
    letters: "A\u24B6\uFF21\xC0\xC1\xC2\u1EA6\u1EA4\u1EAA\u1EA8\xC3\u0100\u0102\u1EB0\u1EAE\u1EB4\u1EB2\u0226\u01E0\xC4\u01DE\u1EA2\xC5\u01FA\u01CD\u0200\u0202\u1EA0\u1EAC\u1EB6\u1E00\u0104\u023A\u2C6F"
  }, {
    base: 'AA',
    letters: "\uA732"
  }, {
    base: 'AE',
    letters: "\xC6\u01FC\u01E2"
  }, {
    base: 'AO',
    letters: "\uA734"
  }, {
    base: 'AU',
    letters: "\uA736"
  }, {
    base: 'AV',
    letters: "\uA738\uA73A"
  }, {
    base: 'AY',
    letters: "\uA73C"
  }, {
    base: 'B',
    letters: "B\u24B7\uFF22\u1E02\u1E04\u1E06\u0243\u0182\u0181"
  }, {
    base: 'C',
    letters: "C\u24B8\uFF23\u0106\u0108\u010A\u010C\xC7\u1E08\u0187\u023B\uA73E"
  }, {
    base: 'D',
    letters: "D\u24B9\uFF24\u1E0A\u010E\u1E0C\u1E10\u1E12\u1E0E\u0110\u018B\u018A\u0189\uA779"
  }, {
    base: 'DZ',
    letters: "\u01F1\u01C4"
  }, {
    base: 'Dz',
    letters: "\u01F2\u01C5"
  }, {
    base: 'E',
    letters: "E\u24BA\uFF25\xC8\xC9\xCA\u1EC0\u1EBE\u1EC4\u1EC2\u1EBC\u0112\u1E14\u1E16\u0114\u0116\xCB\u1EBA\u011A\u0204\u0206\u1EB8\u1EC6\u0228\u1E1C\u0118\u1E18\u1E1A\u0190\u018E"
  }, {
    base: 'F',
    letters: "F\u24BB\uFF26\u1E1E\u0191\uA77B"
  }, {
    base: 'G',
    letters: "G\u24BC\uFF27\u01F4\u011C\u1E20\u011E\u0120\u01E6\u0122\u01E4\u0193\uA7A0\uA77D\uA77E"
  }, {
    base: 'H',
    letters: "H\u24BD\uFF28\u0124\u1E22\u1E26\u021E\u1E24\u1E28\u1E2A\u0126\u2C67\u2C75\uA78D"
  }, {
    base: 'I',
    letters: "I\u24BE\uFF29\xCC\xCD\xCE\u0128\u012A\u012C\u0130\xCF\u1E2E\u1EC8\u01CF\u0208\u020A\u1ECA\u012E\u1E2C\u0197"
  }, {
    base: 'J',
    letters: "J\u24BF\uFF2A\u0134\u0248"
  }, {
    base: 'K',
    letters: "K\u24C0\uFF2B\u1E30\u01E8\u1E32\u0136\u1E34\u0198\u2C69\uA740\uA742\uA744\uA7A2"
  }, {
    base: 'L',
    letters: "L\u24C1\uFF2C\u013F\u0139\u013D\u1E36\u1E38\u013B\u1E3C\u1E3A\u0141\u023D\u2C62\u2C60\uA748\uA746\uA780"
  }, {
    base: 'LJ',
    letters: "\u01C7"
  }, {
    base: 'Lj',
    letters: "\u01C8"
  }, {
    base: 'M',
    letters: "M\u24C2\uFF2D\u1E3E\u1E40\u1E42\u2C6E\u019C"
  }, {
    base: 'N',
    letters: "N\u24C3\uFF2E\u01F8\u0143\xD1\u1E44\u0147\u1E46\u0145\u1E4A\u1E48\u0220\u019D\uA790\uA7A4"
  }, {
    base: 'NJ',
    letters: "\u01CA"
  }, {
    base: 'Nj',
    letters: "\u01CB"
  }, {
    base: 'O',
    letters: "O\u24C4\uFF2F\xD2\xD3\xD4\u1ED2\u1ED0\u1ED6\u1ED4\xD5\u1E4C\u022C\u1E4E\u014C\u1E50\u1E52\u014E\u022E\u0230\xD6\u022A\u1ECE\u0150\u01D1\u020C\u020E\u01A0\u1EDC\u1EDA\u1EE0\u1EDE\u1EE2\u1ECC\u1ED8\u01EA\u01EC\xD8\u01FE\u0186\u019F\uA74A\uA74C"
  }, {
    base: 'OI',
    letters: "\u01A2"
  }, {
    base: 'OO',
    letters: "\uA74E"
  }, {
    base: 'OU',
    letters: "\u0222"
  }, {
    base: 'P',
    letters: "P\u24C5\uFF30\u1E54\u1E56\u01A4\u2C63\uA750\uA752\uA754"
  }, {
    base: 'Q',
    letters: "Q\u24C6\uFF31\uA756\uA758\u024A"
  }, {
    base: 'R',
    letters: "R\u24C7\uFF32\u0154\u1E58\u0158\u0210\u0212\u1E5A\u1E5C\u0156\u1E5E\u024C\u2C64\uA75A\uA7A6\uA782"
  }, {
    base: 'S',
    letters: "S\u24C8\uFF33\u1E9E\u015A\u1E64\u015C\u1E60\u0160\u1E66\u1E62\u1E68\u0218\u015E\u2C7E\uA7A8\uA784"
  }, {
    base: 'T',
    letters: "T\u24C9\uFF34\u1E6A\u0164\u1E6C\u021A\u0162\u1E70\u1E6E\u0166\u01AC\u01AE\u023E\uA786"
  }, {
    base: 'TZ',
    letters: "\uA728"
  }, {
    base: 'U',
    letters: "U\u24CA\uFF35\xD9\xDA\xDB\u0168\u1E78\u016A\u1E7A\u016C\xDC\u01DB\u01D7\u01D5\u01D9\u1EE6\u016E\u0170\u01D3\u0214\u0216\u01AF\u1EEA\u1EE8\u1EEE\u1EEC\u1EF0\u1EE4\u1E72\u0172\u1E76\u1E74\u0244"
  }, {
    base: 'V',
    letters: "V\u24CB\uFF36\u1E7C\u1E7E\u01B2\uA75E\u0245"
  }, {
    base: 'VY',
    letters: "\uA760"
  }, {
    base: 'W',
    letters: "W\u24CC\uFF37\u1E80\u1E82\u0174\u1E86\u1E84\u1E88\u2C72"
  }, {
    base: 'X',
    letters: "X\u24CD\uFF38\u1E8A\u1E8C"
  }, {
    base: 'Y',
    letters: "Y\u24CE\uFF39\u1EF2\xDD\u0176\u1EF8\u0232\u1E8E\u0178\u1EF6\u1EF4\u01B3\u024E\u1EFE"
  }, {
    base: 'Z',
    letters: "Z\u24CF\uFF3A\u0179\u1E90\u017B\u017D\u1E92\u1E94\u01B5\u0224\u2C7F\u2C6B\uA762"
  }, {
    base: 'a',
    letters: "a\u24D0\uFF41\u1E9A\xE0\xE1\xE2\u1EA7\u1EA5\u1EAB\u1EA9\xE3\u0101\u0103\u1EB1\u1EAF\u1EB5\u1EB3\u0227\u01E1\xE4\u01DF\u1EA3\xE5\u01FB\u01CE\u0201\u0203\u1EA1\u1EAD\u1EB7\u1E01\u0105\u2C65\u0250"
  }, {
    base: 'aa',
    letters: "\uA733"
  }, {
    base: 'ae',
    letters: "\xE6\u01FD\u01E3"
  }, {
    base: 'ao',
    letters: "\uA735"
  }, {
    base: 'au',
    letters: "\uA737"
  }, {
    base: 'av',
    letters: "\uA739\uA73B"
  }, {
    base: 'ay',
    letters: "\uA73D"
  }, {
    base: 'b',
    letters: "b\u24D1\uFF42\u1E03\u1E05\u1E07\u0180\u0183\u0253"
  }, {
    base: 'c',
    letters: "c\u24D2\uFF43\u0107\u0109\u010B\u010D\xE7\u1E09\u0188\u023C\uA73F\u2184"
  }, {
    base: 'd',
    letters: "d\u24D3\uFF44\u1E0B\u010F\u1E0D\u1E11\u1E13\u1E0F\u0111\u018C\u0256\u0257\uA77A"
  }, {
    base: 'dz',
    letters: "\u01F3\u01C6"
  }, {
    base: 'e',
    letters: "e\u24D4\uFF45\xE8\xE9\xEA\u1EC1\u1EBF\u1EC5\u1EC3\u1EBD\u0113\u1E15\u1E17\u0115\u0117\xEB\u1EBB\u011B\u0205\u0207\u1EB9\u1EC7\u0229\u1E1D\u0119\u1E19\u1E1B\u0247\u025B\u01DD"
  }, {
    base: 'f',
    letters: "f\u24D5\uFF46\u1E1F\u0192\uA77C"
  }, {
    base: 'g',
    letters: "g\u24D6\uFF47\u01F5\u011D\u1E21\u011F\u0121\u01E7\u0123\u01E5\u0260\uA7A1\u1D79\uA77F"
  }, {
    base: 'h',
    letters: "h\u24D7\uFF48\u0125\u1E23\u1E27\u021F\u1E25\u1E29\u1E2B\u1E96\u0127\u2C68\u2C76\u0265"
  }, {
    base: 'hv',
    letters: "\u0195"
  }, {
    base: 'i',
    letters: "i\u24D8\uFF49\xEC\xED\xEE\u0129\u012B\u012D\xEF\u1E2F\u1EC9\u01D0\u0209\u020B\u1ECB\u012F\u1E2D\u0268\u0131"
  }, {
    base: 'j',
    letters: "j\u24D9\uFF4A\u0135\u01F0\u0249"
  }, {
    base: 'k',
    letters: "k\u24DA\uFF4B\u1E31\u01E9\u1E33\u0137\u1E35\u0199\u2C6A\uA741\uA743\uA745\uA7A3"
  }, {
    base: 'l',
    letters: "l\u24DB\uFF4C\u0140\u013A\u013E\u1E37\u1E39\u013C\u1E3D\u1E3B\u017F\u0142\u019A\u026B\u2C61\uA749\uA781\uA747"
  }, {
    base: 'lj',
    letters: "\u01C9"
  }, {
    base: 'm',
    letters: "m\u24DC\uFF4D\u1E3F\u1E41\u1E43\u0271\u026F"
  }, {
    base: 'n',
    letters: "n\u24DD\uFF4E\u01F9\u0144\xF1\u1E45\u0148\u1E47\u0146\u1E4B\u1E49\u019E\u0272\u0149\uA791\uA7A5"
  }, {
    base: 'nj',
    letters: "\u01CC"
  }, {
    base: 'o',
    letters: "o\u24DE\uFF4F\xF2\xF3\xF4\u1ED3\u1ED1\u1ED7\u1ED5\xF5\u1E4D\u022D\u1E4F\u014D\u1E51\u1E53\u014F\u022F\u0231\xF6\u022B\u1ECF\u0151\u01D2\u020D\u020F\u01A1\u1EDD\u1EDB\u1EE1\u1EDF\u1EE3\u1ECD\u1ED9\u01EB\u01ED\xF8\u01FF\u0254\uA74B\uA74D\u0275"
  }, {
    base: 'oi',
    letters: "\u01A3"
  }, {
    base: 'ou',
    letters: "\u0223"
  }, {
    base: 'oo',
    letters: "\uA74F"
  }, {
    base: 'p',
    letters: "p\u24DF\uFF50\u1E55\u1E57\u01A5\u1D7D\uA751\uA753\uA755"
  }, {
    base: 'q',
    letters: "q\u24E0\uFF51\u024B\uA757\uA759"
  }, {
    base: 'r',
    letters: "r\u24E1\uFF52\u0155\u1E59\u0159\u0211\u0213\u1E5B\u1E5D\u0157\u1E5F\u024D\u027D\uA75B\uA7A7\uA783"
  }, {
    base: 's',
    letters: "s\u24E2\uFF53\xDF\u015B\u1E65\u015D\u1E61\u0161\u1E67\u1E63\u1E69\u0219\u015F\u023F\uA7A9\uA785\u1E9B"
  }, {
    base: 't',
    letters: "t\u24E3\uFF54\u1E6B\u1E97\u0165\u1E6D\u021B\u0163\u1E71\u1E6F\u0167\u01AD\u0288\u2C66\uA787"
  }, {
    base: 'tz',
    letters: "\uA729"
  }, {
    base: 'u',
    letters: "u\u24E4\uFF55\xF9\xFA\xFB\u0169\u1E79\u016B\u1E7B\u016D\xFC\u01DC\u01D8\u01D6\u01DA\u1EE7\u016F\u0171\u01D4\u0215\u0217\u01B0\u1EEB\u1EE9\u1EEF\u1EED\u1EF1\u1EE5\u1E73\u0173\u1E77\u1E75\u0289"
  }, {
    base: 'v',
    letters: "v\u24E5\uFF56\u1E7D\u1E7F\u028B\uA75F\u028C"
  }, {
    base: 'vy',
    letters: "\uA761"
  }, {
    base: 'w',
    letters: "w\u24E6\uFF57\u1E81\u1E83\u0175\u1E87\u1E85\u1E98\u1E89\u2C73"
  }, {
    base: 'x',
    letters: "x\u24E7\uFF58\u1E8B\u1E8D"
  }, {
    base: 'y',
    letters: "y\u24E8\uFF59\u1EF3\xFD\u0177\u1EF9\u0233\u1E8F\xFF\u1EF7\u1E99\u1EF5\u01B4\u024F\u1EFF"
  }, {
    base: 'z',
    letters: "z\u24E9\uFF5A\u017A\u1E91\u017C\u017E\u1E93\u1E95\u01B6\u0225\u0240\u2C6C\uA763"
  }];
  var anyDiacritic = new RegExp('[' + diacritics.map(function (d) {
    return d.letters;
  }).join('') + ']', 'g');
  var diacriticToBase = {};
  for (var i = 0; i < diacritics.length; i++) {
    var diacritic = diacritics[i];
    for (var j = 0; j < diacritic.letters.length; j++) {
      diacriticToBase[diacritic.letters[j]] = diacritic.base;
    }
  }
  var stripDiacritics = function stripDiacritics(str) {
    return str.replace(anyDiacritic, function (match) {
      return diacriticToBase[match];
    });
  };
  var memoizedStripDiacriticsForInput = memoizeOne(stripDiacritics);
  var trimString = function trimString(str) {
    return str.replace(/^\s+|\s+$/g, '');
  };
  var defaultStringify = function defaultStringify(option) {
    return "".concat(option.label, " ").concat(option.value);
  };
  var createFilter = function createFilter(config) {
    return function (option, rawInput) {
      // eslint-disable-next-line no-underscore-dangle
      if (option.data.__isNew__) return true;
      var _ignoreCase$ignoreAcc = _objectSpread2({
          ignoreCase: true,
          ignoreAccents: true,
          stringify: defaultStringify,
          trim: true,
          matchFrom: 'any'
        }, config),
        ignoreCase = _ignoreCase$ignoreAcc.ignoreCase,
        ignoreAccents = _ignoreCase$ignoreAcc.ignoreAccents,
        stringify = _ignoreCase$ignoreAcc.stringify,
        trim = _ignoreCase$ignoreAcc.trim,
        matchFrom = _ignoreCase$ignoreAcc.matchFrom;
      var input = trim ? trimString(rawInput) : rawInput;
      var candidate = trim ? trimString(stringify(option)) : stringify(option);
      if (ignoreCase) {
        input = input.toLowerCase();
        candidate = candidate.toLowerCase();
      }
      if (ignoreAccents) {
        input = memoizedStripDiacriticsForInput(input);
        candidate = stripDiacritics(candidate);
      }
      return matchFrom === 'start' ? candidate.substr(0, input.length) === input : candidate.indexOf(input) > -1;
    };
  };
  var _excluded = ["innerRef"];
  function DummyInput(_ref) {
    var innerRef = _ref.innerRef,
      props = _objectWithoutProperties(_ref, _excluded);
    // Remove animation props not meant for HTML elements
    var filteredProps = removeProps(props, 'onExited', 'in', 'enter', 'exit', 'appear');
    return jsx("input", _extends({
      ref: innerRef
    }, filteredProps, {
      css: /*#__PURE__*/css$2({
        label: 'dummyInput',
        // get rid of any default styles
        background: 0,
        border: 0,
        // important! this hides the flashing cursor
        caretColor: 'transparent',
        fontSize: 'inherit',
        gridArea: '1 / 1 / 2 / 3',
        outline: 0,
        padding: 0,
        // important! without `width` browsers won't allow focus
        width: 1,
        // remove cursor on desktop
        color: 'transparent',
        // remove cursor on mobile whilst maintaining "scroll into view" behaviour
        left: -100,
        opacity: 0,
        position: 'relative',
        transform: 'scale(.01)'
      }, "" , "" )
    }));
  }
  var cancelScroll = function cancelScroll(event) {
    event.preventDefault();
    event.stopPropagation();
  };
  function useScrollCapture(_ref) {
    var isEnabled = _ref.isEnabled,
      onBottomArrive = _ref.onBottomArrive,
      onBottomLeave = _ref.onBottomLeave,
      onTopArrive = _ref.onTopArrive,
      onTopLeave = _ref.onTopLeave;
    var isBottom = React.useRef(false);
    var isTop = React.useRef(false);
    var touchStart = React.useRef(0);
    var scrollTarget = React.useRef(null);
    var handleEventDelta = React.useCallback(function (event, delta) {
      if (scrollTarget.current === null) return;
      var _scrollTarget$current = scrollTarget.current,
        scrollTop = _scrollTarget$current.scrollTop,
        scrollHeight = _scrollTarget$current.scrollHeight,
        clientHeight = _scrollTarget$current.clientHeight;
      var target = scrollTarget.current;
      var isDeltaPositive = delta > 0;
      var availableScroll = scrollHeight - clientHeight - scrollTop;
      var shouldCancelScroll = false;

      // reset bottom/top flags
      if (availableScroll > delta && isBottom.current) {
        if (onBottomLeave) onBottomLeave(event);
        isBottom.current = false;
      }
      if (isDeltaPositive && isTop.current) {
        if (onTopLeave) onTopLeave(event);
        isTop.current = false;
      }

      // bottom limit
      if (isDeltaPositive && delta > availableScroll) {
        if (onBottomArrive && !isBottom.current) {
          onBottomArrive(event);
        }
        target.scrollTop = scrollHeight;
        shouldCancelScroll = true;
        isBottom.current = true;

        // top limit
      } else if (!isDeltaPositive && -delta > scrollTop) {
        if (onTopArrive && !isTop.current) {
          onTopArrive(event);
        }
        target.scrollTop = 0;
        shouldCancelScroll = true;
        isTop.current = true;
      }

      // cancel scroll
      if (shouldCancelScroll) {
        cancelScroll(event);
      }
    }, [onBottomArrive, onBottomLeave, onTopArrive, onTopLeave]);
    var onWheel = React.useCallback(function (event) {
      handleEventDelta(event, event.deltaY);
    }, [handleEventDelta]);
    var onTouchStart = React.useCallback(function (event) {
      // set touch start so we can calculate touchmove delta
      touchStart.current = event.changedTouches[0].clientY;
    }, []);
    var onTouchMove = React.useCallback(function (event) {
      var deltaY = touchStart.current - event.changedTouches[0].clientY;
      handleEventDelta(event, deltaY);
    }, [handleEventDelta]);
    var startListening = React.useCallback(function (el) {
      // bail early if no element is available to attach to
      if (!el) return;
      var notPassive = supportsPassiveEvents ? {
        passive: false
      } : false;
      el.addEventListener('wheel', onWheel, notPassive);
      el.addEventListener('touchstart', onTouchStart, notPassive);
      el.addEventListener('touchmove', onTouchMove, notPassive);
    }, [onTouchMove, onTouchStart, onWheel]);
    var stopListening = React.useCallback(function (el) {
      // bail early if no element is available to detach from
      if (!el) return;
      el.removeEventListener('wheel', onWheel, false);
      el.removeEventListener('touchstart', onTouchStart, false);
      el.removeEventListener('touchmove', onTouchMove, false);
    }, [onTouchMove, onTouchStart, onWheel]);
    React.useEffect(function () {
      if (!isEnabled) return;
      var element = scrollTarget.current;
      startListening(element);
      return function () {
        stopListening(element);
      };
    }, [isEnabled, startListening, stopListening]);
    return function (element) {
      scrollTarget.current = element;
    };
  }
  var STYLE_KEYS = ['boxSizing', 'height', 'overflow', 'paddingRight', 'position'];
  var LOCK_STYLES = {
    boxSizing: 'border-box',
    // account for possible declaration `width: 100%;` on body
    overflow: 'hidden',
    position: 'relative',
    height: '100%'
  };
  function preventTouchMove(e) {
    e.preventDefault();
  }
  function allowTouchMove(e) {
    e.stopPropagation();
  }
  function preventInertiaScroll() {
    var top = this.scrollTop;
    var totalScroll = this.scrollHeight;
    var currentScroll = top + this.offsetHeight;
    if (top === 0) {
      this.scrollTop = 1;
    } else if (currentScroll === totalScroll) {
      this.scrollTop = top - 1;
    }
  }

  // `ontouchstart` check works on most browsers
  // `maxTouchPoints` works on IE10/11 and Surface
  function isTouchDevice() {
    return 'ontouchstart' in window || navigator.maxTouchPoints;
  }
  var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);
  var activeScrollLocks = 0;
  var listenerOptions = {
    capture: false,
    passive: false
  };
  function useScrollLock(_ref) {
    var isEnabled = _ref.isEnabled,
      _ref$accountForScroll = _ref.accountForScrollbars,
      accountForScrollbars = _ref$accountForScroll === void 0 ? true : _ref$accountForScroll;
    var originalStyles = React.useRef({});
    var scrollTarget = React.useRef(null);
    var addScrollLock = React.useCallback(function (touchScrollTarget) {
      if (!canUseDOM) return;
      var target = document.body;
      var targetStyle = target && target.style;
      if (accountForScrollbars) {
        // store any styles already applied to the body
        STYLE_KEYS.forEach(function (key) {
          var val = targetStyle && targetStyle[key];
          originalStyles.current[key] = val;
        });
      }

      // apply the lock styles and padding if this is the first scroll lock
      if (accountForScrollbars && activeScrollLocks < 1) {
        var currentPadding = parseInt(originalStyles.current.paddingRight, 10) || 0;
        var clientWidth = document.body ? document.body.clientWidth : 0;
        var adjustedPadding = window.innerWidth - clientWidth + currentPadding || 0;
        Object.keys(LOCK_STYLES).forEach(function (key) {
          var val = LOCK_STYLES[key];
          if (targetStyle) {
            targetStyle[key] = val;
          }
        });
        if (targetStyle) {
          targetStyle.paddingRight = "".concat(adjustedPadding, "px");
        }
      }

      // account for touch devices
      if (target && isTouchDevice()) {
        // Mobile Safari ignores { overflow: hidden } declaration on the body.
        target.addEventListener('touchmove', preventTouchMove, listenerOptions);

        // Allow scroll on provided target
        if (touchScrollTarget) {
          touchScrollTarget.addEventListener('touchstart', preventInertiaScroll, listenerOptions);
          touchScrollTarget.addEventListener('touchmove', allowTouchMove, listenerOptions);
        }
      }

      // increment active scroll locks
      activeScrollLocks += 1;
    }, [accountForScrollbars]);
    var removeScrollLock = React.useCallback(function (touchScrollTarget) {
      if (!canUseDOM) return;
      var target = document.body;
      var targetStyle = target && target.style;

      // safely decrement active scroll locks
      activeScrollLocks = Math.max(activeScrollLocks - 1, 0);

      // reapply original body styles, if any
      if (accountForScrollbars && activeScrollLocks < 1) {
        STYLE_KEYS.forEach(function (key) {
          var val = originalStyles.current[key];
          if (targetStyle) {
            targetStyle[key] = val;
          }
        });
      }

      // remove touch listeners
      if (target && isTouchDevice()) {
        target.removeEventListener('touchmove', preventTouchMove, listenerOptions);
        if (touchScrollTarget) {
          touchScrollTarget.removeEventListener('touchstart', preventInertiaScroll, listenerOptions);
          touchScrollTarget.removeEventListener('touchmove', allowTouchMove, listenerOptions);
        }
      }
    }, [accountForScrollbars]);
    React.useEffect(function () {
      if (!isEnabled) return;
      var element = scrollTarget.current;
      addScrollLock(element);
      return function () {
        removeScrollLock(element);
      };
    }, [isEnabled, addScrollLock, removeScrollLock]);
    return function (element) {
      scrollTarget.current = element;
    };
  }
  var blurSelectInput = function blurSelectInput() {
    return document.activeElement && document.activeElement.blur();
  };
  var _ref2$1 = {
    name: "1kfdb0e",
    styles: "position:fixed;left:0;bottom:0;right:0;top:0"
  } ;
  function ScrollManager(_ref) {
    var children = _ref.children,
      lockEnabled = _ref.lockEnabled,
      _ref$captureEnabled = _ref.captureEnabled,
      captureEnabled = _ref$captureEnabled === void 0 ? true : _ref$captureEnabled,
      onBottomArrive = _ref.onBottomArrive,
      onBottomLeave = _ref.onBottomLeave,
      onTopArrive = _ref.onTopArrive,
      onTopLeave = _ref.onTopLeave;
    var setScrollCaptureTarget = useScrollCapture({
      isEnabled: captureEnabled,
      onBottomArrive: onBottomArrive,
      onBottomLeave: onBottomLeave,
      onTopArrive: onTopArrive,
      onTopLeave: onTopLeave
    });
    var setScrollLockTarget = useScrollLock({
      isEnabled: lockEnabled
    });
    var targetRef = function targetRef(element) {
      setScrollCaptureTarget(element);
      setScrollLockTarget(element);
    };
    return jsx(React.Fragment, null, lockEnabled && jsx("div", {
      onClick: blurSelectInput,
      css: _ref2$1
    }), children(targetRef));
  }
  var _ref2 = {
    name: "1a0ro4n-requiredInput",
    styles: "label:requiredInput;opacity:0;pointer-events:none;position:absolute;bottom:0;left:0;right:0;width:100%"
  } ;
  var RequiredInput = function RequiredInput(_ref) {
    var name = _ref.name,
      onFocus = _ref.onFocus;
    return jsx("input", {
      required: true,
      name: name,
      tabIndex: -1,
      "aria-hidden": "true",
      onFocus: onFocus,
      css: _ref2
      // Prevent `Switching from uncontrolled to controlled` error
      ,

      value: "",
      onChange: function onChange() {}
    });
  };
  var RequiredInput$1 = RequiredInput;
  var formatGroupLabel = function formatGroupLabel(group) {
    return group.label;
  };
  var getOptionLabel$1 = function getOptionLabel(option) {
    return option.label;
  };
  var getOptionValue$1 = function getOptionValue(option) {
    return option.value;
  };
  var isOptionDisabled = function isOptionDisabled(option) {
    return !!option.isDisabled;
  };
  var defaultStyles = {
    clearIndicator: clearIndicatorCSS,
    container: containerCSS,
    control: css$1,
    dropdownIndicator: dropdownIndicatorCSS,
    group: groupCSS,
    groupHeading: groupHeadingCSS,
    indicatorsContainer: indicatorsContainerCSS,
    indicatorSeparator: indicatorSeparatorCSS,
    input: inputCSS,
    loadingIndicator: loadingIndicatorCSS,
    loadingMessage: loadingMessageCSS,
    menu: menuCSS,
    menuList: menuListCSS,
    menuPortal: menuPortalCSS,
    multiValue: multiValueCSS,
    multiValueLabel: multiValueLabelCSS,
    multiValueRemove: multiValueRemoveCSS,
    noOptionsMessage: noOptionsMessageCSS,
    option: optionCSS,
    placeholder: placeholderCSS,
    singleValue: css,
    valueContainer: valueContainerCSS
  };
  var colors = {
    primary: '#2684FF',
    primary75: '#4C9AFF',
    primary50: '#B2D4FF',
    primary25: '#DEEBFF',
    danger: '#DE350B',
    dangerLight: '#FFBDAD',
    neutral0: 'hsl(0, 0%, 100%)',
    neutral5: 'hsl(0, 0%, 95%)',
    neutral10: 'hsl(0, 0%, 90%)',
    neutral20: 'hsl(0, 0%, 80%)',
    neutral30: 'hsl(0, 0%, 70%)',
    neutral40: 'hsl(0, 0%, 60%)',
    neutral50: 'hsl(0, 0%, 50%)',
    neutral60: 'hsl(0, 0%, 40%)',
    neutral70: 'hsl(0, 0%, 30%)',
    neutral80: 'hsl(0, 0%, 20%)',
    neutral90: 'hsl(0, 0%, 10%)'
  };
  var borderRadius = 4;
  // Used to calculate consistent margin/padding on elements
  var baseUnit = 4;
  // The minimum height of the control
  var controlHeight = 38;
  // The amount of space between the control and menu */
  var menuGutter = baseUnit * 2;
  var spacing = {
    baseUnit: baseUnit,
    controlHeight: controlHeight,
    menuGutter: menuGutter
  };
  var defaultTheme = {
    borderRadius: borderRadius,
    colors: colors,
    spacing: spacing
  };
  var defaultProps = {
    'aria-live': 'polite',
    backspaceRemovesValue: true,
    blurInputOnSelect: isTouchCapable(),
    captureMenuScroll: !isTouchCapable(),
    classNames: {},
    closeMenuOnSelect: true,
    closeMenuOnScroll: false,
    components: {},
    controlShouldRenderValue: true,
    escapeClearsValue: false,
    filterOption: createFilter(),
    formatGroupLabel: formatGroupLabel,
    getOptionLabel: getOptionLabel$1,
    getOptionValue: getOptionValue$1,
    isDisabled: false,
    isLoading: false,
    isMulti: false,
    isRtl: false,
    isSearchable: true,
    isOptionDisabled: isOptionDisabled,
    loadingMessage: function loadingMessage() {
      return 'Loading...';
    },
    maxMenuHeight: 300,
    minMenuHeight: 140,
    menuIsOpen: false,
    menuPlacement: 'bottom',
    menuPosition: 'absolute',
    menuShouldBlockScroll: false,
    menuShouldScrollIntoView: !isMobileDevice(),
    noOptionsMessage: function noOptionsMessage() {
      return 'No options';
    },
    openMenuOnFocus: false,
    openMenuOnClick: true,
    options: [],
    pageSize: 5,
    placeholder: 'Select...',
    screenReaderStatus: function screenReaderStatus(_ref) {
      var count = _ref.count;
      return "".concat(count, " result").concat(count !== 1 ? 's' : '', " available");
    },
    styles: {},
    tabIndex: 0,
    tabSelectsValue: true,
    unstyled: false
  };
  function toCategorizedOption(props, option, selectValue, index) {
    var isDisabled = _isOptionDisabled(props, option, selectValue);
    var isSelected = _isOptionSelected(props, option, selectValue);
    var label = getOptionLabel(props, option);
    var value = getOptionValue(props, option);
    return {
      type: 'option',
      data: option,
      isDisabled: isDisabled,
      isSelected: isSelected,
      label: label,
      value: value,
      index: index
    };
  }
  function buildCategorizedOptions(props, selectValue) {
    return props.options.map(function (groupOrOption, groupOrOptionIndex) {
      if ('options' in groupOrOption) {
        var categorizedOptions = groupOrOption.options.map(function (option, optionIndex) {
          return toCategorizedOption(props, option, selectValue, optionIndex);
        }).filter(function (categorizedOption) {
          return isFocusable(props, categorizedOption);
        });
        return categorizedOptions.length > 0 ? {
          type: 'group',
          data: groupOrOption,
          options: categorizedOptions,
          index: groupOrOptionIndex
        } : undefined;
      }
      var categorizedOption = toCategorizedOption(props, groupOrOption, selectValue, groupOrOptionIndex);
      return isFocusable(props, categorizedOption) ? categorizedOption : undefined;
    }).filter(notNullish);
  }
  function buildFocusableOptionsFromCategorizedOptions(categorizedOptions) {
    return categorizedOptions.reduce(function (optionsAccumulator, categorizedOption) {
      if (categorizedOption.type === 'group') {
        optionsAccumulator.push.apply(optionsAccumulator, _toConsumableArray(categorizedOption.options.map(function (option) {
          return option.data;
        })));
      } else {
        optionsAccumulator.push(categorizedOption.data);
      }
      return optionsAccumulator;
    }, []);
  }
  function buildFocusableOptions(props, selectValue) {
    return buildFocusableOptionsFromCategorizedOptions(buildCategorizedOptions(props, selectValue));
  }
  function isFocusable(props, categorizedOption) {
    var _props$inputValue = props.inputValue,
      inputValue = _props$inputValue === void 0 ? '' : _props$inputValue;
    var data = categorizedOption.data,
      isSelected = categorizedOption.isSelected,
      label = categorizedOption.label,
      value = categorizedOption.value;
    return (!shouldHideSelectedOptions(props) || !isSelected) && _filterOption(props, {
      label: label,
      value: value,
      data: data
    }, inputValue);
  }
  function getNextFocusedValue(state, nextSelectValue) {
    var focusedValue = state.focusedValue,
      lastSelectValue = state.selectValue;
    var lastFocusedIndex = lastSelectValue.indexOf(focusedValue);
    if (lastFocusedIndex > -1) {
      var nextFocusedIndex = nextSelectValue.indexOf(focusedValue);
      if (nextFocusedIndex > -1) {
        // the focused value is still in the selectValue, return it
        return focusedValue;
      } else if (lastFocusedIndex < nextSelectValue.length) {
        // the focusedValue is not present in the next selectValue array by
        // reference, so return the new value at the same index
        return nextSelectValue[lastFocusedIndex];
      }
    }
    return null;
  }
  function getNextFocusedOption(state, options) {
    var lastFocusedOption = state.focusedOption;
    return lastFocusedOption && options.indexOf(lastFocusedOption) > -1 ? lastFocusedOption : options[0];
  }
  var getOptionLabel = function getOptionLabel(props, data) {
    return props.getOptionLabel(data);
  };
  var getOptionValue = function getOptionValue(props, data) {
    return props.getOptionValue(data);
  };
  function _isOptionDisabled(props, option, selectValue) {
    return typeof props.isOptionDisabled === 'function' ? props.isOptionDisabled(option, selectValue) : false;
  }
  function _isOptionSelected(props, option, selectValue) {
    if (selectValue.indexOf(option) > -1) return true;
    if (typeof props.isOptionSelected === 'function') {
      return props.isOptionSelected(option, selectValue);
    }
    var candidate = getOptionValue(props, option);
    return selectValue.some(function (i) {
      return getOptionValue(props, i) === candidate;
    });
  }
  function _filterOption(props, option, inputValue) {
    return props.filterOption ? props.filterOption(option, inputValue) : true;
  }
  var shouldHideSelectedOptions = function shouldHideSelectedOptions(props) {
    var hideSelectedOptions = props.hideSelectedOptions,
      isMulti = props.isMulti;
    if (hideSelectedOptions === undefined) return isMulti;
    return hideSelectedOptions;
  };
  var instanceId = 1;
  var Select = /*#__PURE__*/function (_Component) {
    _inherits(Select, _Component);
    var _super = _createSuper(Select);
    // Misc. Instance Properties
    // ------------------------------

    // TODO

    // Refs
    // ------------------------------

    // Lifecycle
    // ------------------------------

    function Select(_props) {
      var _this;
      _classCallCheck(this, Select);
      _this = _super.call(this, _props);
      _this.state = {
        ariaSelection: null,
        focusedOption: null,
        focusedValue: null,
        inputIsHidden: false,
        isFocused: false,
        selectValue: [],
        clearFocusValueOnUpdate: false,
        prevWasFocused: false,
        inputIsHiddenAfterUpdate: undefined,
        prevProps: undefined
      };
      _this.blockOptionHover = false;
      _this.isComposing = false;
      _this.commonProps = void 0;
      _this.initialTouchX = 0;
      _this.initialTouchY = 0;
      _this.instancePrefix = '';
      _this.openAfterFocus = false;
      _this.scrollToFocusedOptionOnUpdate = false;
      _this.userIsDragging = void 0;
      _this.controlRef = null;
      _this.getControlRef = function (ref) {
        _this.controlRef = ref;
      };
      _this.focusedOptionRef = null;
      _this.getFocusedOptionRef = function (ref) {
        _this.focusedOptionRef = ref;
      };
      _this.menuListRef = null;
      _this.getMenuListRef = function (ref) {
        _this.menuListRef = ref;
      };
      _this.inputRef = null;
      _this.getInputRef = function (ref) {
        _this.inputRef = ref;
      };
      _this.focus = _this.focusInput;
      _this.blur = _this.blurInput;
      _this.onChange = function (newValue, actionMeta) {
        var _this$props = _this.props,
          onChange = _this$props.onChange,
          name = _this$props.name;
        actionMeta.name = name;
        _this.ariaOnChange(newValue, actionMeta);
        onChange(newValue, actionMeta);
      };
      _this.setValue = function (newValue, action, option) {
        var _this$props2 = _this.props,
          closeMenuOnSelect = _this$props2.closeMenuOnSelect,
          isMulti = _this$props2.isMulti,
          inputValue = _this$props2.inputValue;
        _this.onInputChange('', {
          action: 'set-value',
          prevInputValue: inputValue
        });
        if (closeMenuOnSelect) {
          _this.setState({
            inputIsHiddenAfterUpdate: !isMulti
          });
          _this.onMenuClose();
        }
        // when the select value should change, we should reset focusedValue
        _this.setState({
          clearFocusValueOnUpdate: true
        });
        _this.onChange(newValue, {
          action: action,
          option: option
        });
      };
      _this.selectOption = function (newValue) {
        var _this$props3 = _this.props,
          blurInputOnSelect = _this$props3.blurInputOnSelect,
          isMulti = _this$props3.isMulti,
          name = _this$props3.name;
        var selectValue = _this.state.selectValue;
        var deselected = isMulti && _this.isOptionSelected(newValue, selectValue);
        var isDisabled = _this.isOptionDisabled(newValue, selectValue);
        if (deselected) {
          var candidate = _this.getOptionValue(newValue);
          _this.setValue(multiValueAsValue(selectValue.filter(function (i) {
            return _this.getOptionValue(i) !== candidate;
          })), 'deselect-option', newValue);
        } else if (!isDisabled) {
          // Select option if option is not disabled
          if (isMulti) {
            _this.setValue(multiValueAsValue([].concat(_toConsumableArray(selectValue), [newValue])), 'select-option', newValue);
          } else {
            _this.setValue(singleValueAsValue(newValue), 'select-option');
          }
        } else {
          _this.ariaOnChange(singleValueAsValue(newValue), {
            action: 'select-option',
            option: newValue,
            name: name
          });
          return;
        }
        if (blurInputOnSelect) {
          _this.blurInput();
        }
      };
      _this.removeValue = function (removedValue) {
        var isMulti = _this.props.isMulti;
        var selectValue = _this.state.selectValue;
        var candidate = _this.getOptionValue(removedValue);
        var newValueArray = selectValue.filter(function (i) {
          return _this.getOptionValue(i) !== candidate;
        });
        var newValue = valueTernary(isMulti, newValueArray, newValueArray[0] || null);
        _this.onChange(newValue, {
          action: 'remove-value',
          removedValue: removedValue
        });
        _this.focusInput();
      };
      _this.clearValue = function () {
        var selectValue = _this.state.selectValue;
        _this.onChange(valueTernary(_this.props.isMulti, [], null), {
          action: 'clear',
          removedValues: selectValue
        });
      };
      _this.popValue = function () {
        var isMulti = _this.props.isMulti;
        var selectValue = _this.state.selectValue;
        var lastSelectedValue = selectValue[selectValue.length - 1];
        var newValueArray = selectValue.slice(0, selectValue.length - 1);
        var newValue = valueTernary(isMulti, newValueArray, newValueArray[0] || null);
        _this.onChange(newValue, {
          action: 'pop-value',
          removedValue: lastSelectedValue
        });
      };
      _this.getValue = function () {
        return _this.state.selectValue;
      };
      _this.cx = function () {
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }
        return classNames.apply(void 0, [_this.props.classNamePrefix].concat(args));
      };
      _this.getOptionLabel = function (data) {
        return getOptionLabel(_this.props, data);
      };
      _this.getOptionValue = function (data) {
        return getOptionValue(_this.props, data);
      };
      _this.getStyles = function (key, props) {
        var unstyled = _this.props.unstyled;
        var base = defaultStyles[key](props, unstyled);
        base.boxSizing = 'border-box';
        var custom = _this.props.styles[key];
        return custom ? custom(base, props) : base;
      };
      _this.getClassNames = function (key, props) {
        var _this$props$className, _this$props$className2;
        return (_this$props$className = (_this$props$className2 = _this.props.classNames)[key]) === null || _this$props$className === void 0 ? void 0 : _this$props$className.call(_this$props$className2, props);
      };
      _this.getElementId = function (element) {
        return "".concat(_this.instancePrefix, "-").concat(element);
      };
      _this.getComponents = function () {
        return defaultComponents(_this.props);
      };
      _this.buildCategorizedOptions = function () {
        return buildCategorizedOptions(_this.props, _this.state.selectValue);
      };
      _this.getCategorizedOptions = function () {
        return _this.props.menuIsOpen ? _this.buildCategorizedOptions() : [];
      };
      _this.buildFocusableOptions = function () {
        return buildFocusableOptionsFromCategorizedOptions(_this.buildCategorizedOptions());
      };
      _this.getFocusableOptions = function () {
        return _this.props.menuIsOpen ? _this.buildFocusableOptions() : [];
      };
      _this.ariaOnChange = function (value, actionMeta) {
        _this.setState({
          ariaSelection: _objectSpread2({
            value: value
          }, actionMeta)
        });
      };
      _this.onMenuMouseDown = function (event) {
        if (event.button !== 0) {
          return;
        }
        event.stopPropagation();
        event.preventDefault();
        _this.focusInput();
      };
      _this.onMenuMouseMove = function (event) {
        _this.blockOptionHover = false;
      };
      _this.onControlMouseDown = function (event) {
        // Event captured by dropdown indicator
        if (event.defaultPrevented) {
          return;
        }
        var openMenuOnClick = _this.props.openMenuOnClick;
        if (!_this.state.isFocused) {
          if (openMenuOnClick) {
            _this.openAfterFocus = true;
          }
          _this.focusInput();
        } else if (!_this.props.menuIsOpen) {
          if (openMenuOnClick) {
            _this.openMenu('first');
          }
        } else {
          if (event.target.tagName !== 'INPUT' && event.target.tagName !== 'TEXTAREA') {
            _this.onMenuClose();
          }
        }
        if (event.target.tagName !== 'INPUT' && event.target.tagName !== 'TEXTAREA') {
          event.preventDefault();
        }
      };
      _this.onDropdownIndicatorMouseDown = function (event) {
        // ignore mouse events that weren't triggered by the primary button
        if (event && event.type === 'mousedown' && event.button !== 0) {
          return;
        }
        if (_this.props.isDisabled) return;
        var _this$props4 = _this.props,
          isMulti = _this$props4.isMulti,
          menuIsOpen = _this$props4.menuIsOpen;
        _this.focusInput();
        if (menuIsOpen) {
          _this.setState({
            inputIsHiddenAfterUpdate: !isMulti
          });
          _this.onMenuClose();
        } else {
          _this.openMenu('first');
        }
        event.preventDefault();
      };
      _this.onClearIndicatorMouseDown = function (event) {
        // ignore mouse events that weren't triggered by the primary button
        if (event && event.type === 'mousedown' && event.button !== 0) {
          return;
        }
        _this.clearValue();
        event.preventDefault();
        _this.openAfterFocus = false;
        if (event.type === 'touchend') {
          _this.focusInput();
        } else {
          setTimeout(function () {
            return _this.focusInput();
          });
        }
      };
      _this.onScroll = function (event) {
        if (typeof _this.props.closeMenuOnScroll === 'boolean') {
          if (event.target instanceof HTMLElement && isDocumentElement(event.target)) {
            _this.props.onMenuClose();
          }
        } else if (typeof _this.props.closeMenuOnScroll === 'function') {
          if (_this.props.closeMenuOnScroll(event)) {
            _this.props.onMenuClose();
          }
        }
      };
      _this.onCompositionStart = function () {
        _this.isComposing = true;
      };
      _this.onCompositionEnd = function () {
        _this.isComposing = false;
      };
      _this.onTouchStart = function (_ref2) {
        var touches = _ref2.touches;
        var touch = touches && touches.item(0);
        if (!touch) {
          return;
        }
        _this.initialTouchX = touch.clientX;
        _this.initialTouchY = touch.clientY;
        _this.userIsDragging = false;
      };
      _this.onTouchMove = function (_ref3) {
        var touches = _ref3.touches;
        var touch = touches && touches.item(0);
        if (!touch) {
          return;
        }
        var deltaX = Math.abs(touch.clientX - _this.initialTouchX);
        var deltaY = Math.abs(touch.clientY - _this.initialTouchY);
        var moveThreshold = 5;
        _this.userIsDragging = deltaX > moveThreshold || deltaY > moveThreshold;
      };
      _this.onTouchEnd = function (event) {
        if (_this.userIsDragging) return;

        // close the menu if the user taps outside
        // we're checking on event.target here instead of event.currentTarget, because we want to assert information
        // on events on child elements, not the document (which we've attached this handler to).
        if (_this.controlRef && !_this.controlRef.contains(event.target) && _this.menuListRef && !_this.menuListRef.contains(event.target)) {
          _this.blurInput();
        }

        // reset move vars
        _this.initialTouchX = 0;
        _this.initialTouchY = 0;
      };
      _this.onControlTouchEnd = function (event) {
        if (_this.userIsDragging) return;
        _this.onControlMouseDown(event);
      };
      _this.onClearIndicatorTouchEnd = function (event) {
        if (_this.userIsDragging) return;
        _this.onClearIndicatorMouseDown(event);
      };
      _this.onDropdownIndicatorTouchEnd = function (event) {
        if (_this.userIsDragging) return;
        _this.onDropdownIndicatorMouseDown(event);
      };
      _this.handleInputChange = function (event) {
        var prevInputValue = _this.props.inputValue;
        var inputValue = event.currentTarget.value;
        _this.setState({
          inputIsHiddenAfterUpdate: false
        });
        _this.onInputChange(inputValue, {
          action: 'input-change',
          prevInputValue: prevInputValue
        });
        if (!_this.props.menuIsOpen) {
          _this.onMenuOpen();
        }
      };
      _this.onInputFocus = function (event) {
        if (_this.props.onFocus) {
          _this.props.onFocus(event);
        }
        _this.setState({
          inputIsHiddenAfterUpdate: false,
          isFocused: true
        });
        if (_this.openAfterFocus || _this.props.openMenuOnFocus) {
          _this.openMenu('first');
        }
        _this.openAfterFocus = false;
      };
      _this.onInputBlur = function (event) {
        var prevInputValue = _this.props.inputValue;
        if (_this.menuListRef && _this.menuListRef.contains(document.activeElement)) {
          _this.inputRef.focus();
          return;
        }
        if (_this.props.onBlur) {
          _this.props.onBlur(event);
        }
        _this.onInputChange('', {
          action: 'input-blur',
          prevInputValue: prevInputValue
        });
        _this.onMenuClose();
        _this.setState({
          focusedValue: null,
          isFocused: false
        });
      };
      _this.onOptionHover = function (focusedOption) {
        if (_this.blockOptionHover || _this.state.focusedOption === focusedOption) {
          return;
        }
        _this.setState({
          focusedOption: focusedOption
        });
      };
      _this.shouldHideSelectedOptions = function () {
        return shouldHideSelectedOptions(_this.props);
      };
      _this.onValueInputFocus = function (e) {
        e.preventDefault();
        e.stopPropagation();
        _this.focus();
      };
      _this.onKeyDown = function (event) {
        var _this$props5 = _this.props,
          isMulti = _this$props5.isMulti,
          backspaceRemovesValue = _this$props5.backspaceRemovesValue,
          escapeClearsValue = _this$props5.escapeClearsValue,
          inputValue = _this$props5.inputValue,
          isClearable = _this$props5.isClearable,
          isDisabled = _this$props5.isDisabled,
          menuIsOpen = _this$props5.menuIsOpen,
          onKeyDown = _this$props5.onKeyDown,
          tabSelectsValue = _this$props5.tabSelectsValue,
          openMenuOnFocus = _this$props5.openMenuOnFocus;
        var _this$state = _this.state,
          focusedOption = _this$state.focusedOption,
          focusedValue = _this$state.focusedValue,
          selectValue = _this$state.selectValue;
        if (isDisabled) return;
        if (typeof onKeyDown === 'function') {
          onKeyDown(event);
          if (event.defaultPrevented) {
            return;
          }
        }

        // Block option hover events when the user has just pressed a key
        _this.blockOptionHover = true;
        switch (event.key) {
          case 'ArrowLeft':
            if (!isMulti || inputValue) return;
            _this.focusValue('previous');
            break;
          case 'ArrowRight':
            if (!isMulti || inputValue) return;
            _this.focusValue('next');
            break;
          case 'Delete':
          case 'Backspace':
            if (inputValue) return;
            if (focusedValue) {
              _this.removeValue(focusedValue);
            } else {
              if (!backspaceRemovesValue) return;
              if (isMulti) {
                _this.popValue();
              } else if (isClearable) {
                _this.clearValue();
              }
            }
            break;
          case 'Tab':
            if (_this.isComposing) return;
            if (event.shiftKey || !menuIsOpen || !tabSelectsValue || !focusedOption ||
            // don't capture the event if the menu opens on focus and the focused
            // option is already selected; it breaks the flow of navigation
            openMenuOnFocus && _this.isOptionSelected(focusedOption, selectValue)) {
              return;
            }
            _this.selectOption(focusedOption);
            break;
          case 'Enter':
            if (event.keyCode === 229) {
              // ignore the keydown event from an Input Method Editor(IME)
              // ref. https://www.w3.org/TR/uievents/#determine-keydown-keyup-keyCode
              break;
            }
            if (menuIsOpen) {
              if (!focusedOption) return;
              if (_this.isComposing) return;
              _this.selectOption(focusedOption);
              break;
            }
            return;
          case 'Escape':
            if (menuIsOpen) {
              _this.setState({
                inputIsHiddenAfterUpdate: false
              });
              _this.onInputChange('', {
                action: 'menu-close',
                prevInputValue: inputValue
              });
              _this.onMenuClose();
            } else if (isClearable && escapeClearsValue) {
              _this.clearValue();
            }
            break;
          case ' ':
            // space
            if (inputValue) {
              return;
            }
            if (!menuIsOpen) {
              _this.openMenu('first');
              break;
            }
            if (!focusedOption) return;
            _this.selectOption(focusedOption);
            break;
          case 'ArrowUp':
            if (menuIsOpen) {
              _this.focusOption('up');
            } else {
              _this.openMenu('last');
            }
            break;
          case 'ArrowDown':
            if (menuIsOpen) {
              _this.focusOption('down');
            } else {
              _this.openMenu('first');
            }
            break;
          case 'PageUp':
            if (!menuIsOpen) return;
            _this.focusOption('pageup');
            break;
          case 'PageDown':
            if (!menuIsOpen) return;
            _this.focusOption('pagedown');
            break;
          case 'Home':
            if (!menuIsOpen) return;
            _this.focusOption('first');
            break;
          case 'End':
            if (!menuIsOpen) return;
            _this.focusOption('last');
            break;
          default:
            return;
        }
        event.preventDefault();
      };
      _this.instancePrefix = 'react-select-' + (_this.props.instanceId || ++instanceId);
      _this.state.selectValue = cleanValue(_props.value);

      // Set focusedOption if menuIsOpen is set on init (e.g. defaultMenuIsOpen)
      if (_props.menuIsOpen && _this.state.selectValue.length) {
        var focusableOptions = _this.buildFocusableOptions();
        var optionIndex = focusableOptions.indexOf(_this.state.selectValue[0]);
        _this.state.focusedOption = focusableOptions[optionIndex];
      }
      return _this;
    }
    _createClass(Select, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        this.startListeningComposition();
        this.startListeningToTouch();
        if (this.props.closeMenuOnScroll && document && document.addEventListener) {
          // Listen to all scroll events, and filter them out inside of 'onScroll'
          document.addEventListener('scroll', this.onScroll, true);
        }
        if (this.props.autoFocus) {
          this.focusInput();
        }

        // Scroll focusedOption into view if menuIsOpen is set on mount (e.g. defaultMenuIsOpen)
        if (this.props.menuIsOpen && this.state.focusedOption && this.menuListRef && this.focusedOptionRef) {
          scrollIntoView(this.menuListRef, this.focusedOptionRef);
        }
      }
    }, {
      key: "componentDidUpdate",
      value: function componentDidUpdate(prevProps) {
        var _this$props6 = this.props,
          isDisabled = _this$props6.isDisabled,
          menuIsOpen = _this$props6.menuIsOpen;
        var isFocused = this.state.isFocused;
        if (
        // ensure focus is restored correctly when the control becomes enabled
        isFocused && !isDisabled && prevProps.isDisabled ||
        // ensure focus is on the Input when the menu opens
        isFocused && menuIsOpen && !prevProps.menuIsOpen) {
          this.focusInput();
        }
        if (isFocused && isDisabled && !prevProps.isDisabled) {
          // ensure select state gets blurred in case Select is programmatically disabled while focused
          // eslint-disable-next-line react/no-did-update-set-state
          this.setState({
            isFocused: false
          }, this.onMenuClose);
        } else if (!isFocused && !isDisabled && prevProps.isDisabled && this.inputRef === document.activeElement) {
          // ensure select state gets focused in case Select is programatically re-enabled while focused (Firefox)
          // eslint-disable-next-line react/no-did-update-set-state
          this.setState({
            isFocused: true
          });
        }

        // scroll the focused option into view if necessary
        if (this.menuListRef && this.focusedOptionRef && this.scrollToFocusedOptionOnUpdate) {
          scrollIntoView(this.menuListRef, this.focusedOptionRef);
          this.scrollToFocusedOptionOnUpdate = false;
        }
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        this.stopListeningComposition();
        this.stopListeningToTouch();
        document.removeEventListener('scroll', this.onScroll, true);
      }

      // ==============================
      // Consumer Handlers
      // ==============================
    }, {
      key: "onMenuOpen",
      value: function onMenuOpen() {
        this.props.onMenuOpen();
      }
    }, {
      key: "onMenuClose",
      value: function onMenuClose() {
        this.onInputChange('', {
          action: 'menu-close',
          prevInputValue: this.props.inputValue
        });
        this.props.onMenuClose();
      }
    }, {
      key: "onInputChange",
      value: function onInputChange(newValue, actionMeta) {
        this.props.onInputChange(newValue, actionMeta);
      }

      // ==============================
      // Methods
      // ==============================
    }, {
      key: "focusInput",
      value: function focusInput() {
        if (!this.inputRef) return;
        this.inputRef.focus();
      }
    }, {
      key: "blurInput",
      value: function blurInput() {
        if (!this.inputRef) return;
        this.inputRef.blur();
      }

      // aliased for consumers
    }, {
      key: "openMenu",
      value: function openMenu(focusOption) {
        var _this2 = this;
        var _this$state2 = this.state,
          selectValue = _this$state2.selectValue,
          isFocused = _this$state2.isFocused;
        var focusableOptions = this.buildFocusableOptions();
        var openAtIndex = focusOption === 'first' ? 0 : focusableOptions.length - 1;
        if (!this.props.isMulti) {
          var selectedIndex = focusableOptions.indexOf(selectValue[0]);
          if (selectedIndex > -1) {
            openAtIndex = selectedIndex;
          }
        }

        // only scroll if the menu isn't already open
        this.scrollToFocusedOptionOnUpdate = !(isFocused && this.menuListRef);
        this.setState({
          inputIsHiddenAfterUpdate: false,
          focusedValue: null,
          focusedOption: focusableOptions[openAtIndex]
        }, function () {
          return _this2.onMenuOpen();
        });
      }
    }, {
      key: "focusValue",
      value: function focusValue(direction) {
        var _this$state3 = this.state,
          selectValue = _this$state3.selectValue,
          focusedValue = _this$state3.focusedValue;

        // Only multiselects support value focusing
        if (!this.props.isMulti) return;
        this.setState({
          focusedOption: null
        });
        var focusedIndex = selectValue.indexOf(focusedValue);
        if (!focusedValue) {
          focusedIndex = -1;
        }
        var lastIndex = selectValue.length - 1;
        var nextFocus = -1;
        if (!selectValue.length) return;
        switch (direction) {
          case 'previous':
            if (focusedIndex === 0) {
              // don't cycle from the start to the end
              nextFocus = 0;
            } else if (focusedIndex === -1) {
              // if nothing is focused, focus the last value first
              nextFocus = lastIndex;
            } else {
              nextFocus = focusedIndex - 1;
            }
            break;
          case 'next':
            if (focusedIndex > -1 && focusedIndex < lastIndex) {
              nextFocus = focusedIndex + 1;
            }
            break;
        }
        this.setState({
          inputIsHidden: nextFocus !== -1,
          focusedValue: selectValue[nextFocus]
        });
      }
    }, {
      key: "focusOption",
      value: function focusOption() {
        var direction = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'first';
        var pageSize = this.props.pageSize;
        var focusedOption = this.state.focusedOption;
        var options = this.getFocusableOptions();
        if (!options.length) return;
        var nextFocus = 0; // handles 'first'
        var focusedIndex = options.indexOf(focusedOption);
        if (!focusedOption) {
          focusedIndex = -1;
        }
        if (direction === 'up') {
          nextFocus = focusedIndex > 0 ? focusedIndex - 1 : options.length - 1;
        } else if (direction === 'down') {
          nextFocus = (focusedIndex + 1) % options.length;
        } else if (direction === 'pageup') {
          nextFocus = focusedIndex - pageSize;
          if (nextFocus < 0) nextFocus = 0;
        } else if (direction === 'pagedown') {
          nextFocus = focusedIndex + pageSize;
          if (nextFocus > options.length - 1) nextFocus = options.length - 1;
        } else if (direction === 'last') {
          nextFocus = options.length - 1;
        }
        this.scrollToFocusedOptionOnUpdate = true;
        this.setState({
          focusedOption: options[nextFocus],
          focusedValue: null
        });
      }
    }, {
      key: "getTheme",
      value:
      // ==============================
      // Getters
      // ==============================

      function getTheme() {
        // Use the default theme if there are no customisations.
        if (!this.props.theme) {
          return defaultTheme;
        }
        // If the theme prop is a function, assume the function
        // knows how to merge the passed-in default theme with
        // its own modifications.
        if (typeof this.props.theme === 'function') {
          return this.props.theme(defaultTheme);
        }
        // Otherwise, if a plain theme object was passed in,
        // overlay it with the default theme.
        return _objectSpread2(_objectSpread2({}, defaultTheme), this.props.theme);
      }
    }, {
      key: "getCommonProps",
      value: function getCommonProps() {
        var clearValue = this.clearValue,
          cx = this.cx,
          getStyles = this.getStyles,
          getClassNames = this.getClassNames,
          getValue = this.getValue,
          selectOption = this.selectOption,
          setValue = this.setValue,
          props = this.props;
        var isMulti = props.isMulti,
          isRtl = props.isRtl,
          options = props.options;
        var hasValue = this.hasValue();
        return {
          clearValue: clearValue,
          cx: cx,
          getStyles: getStyles,
          getClassNames: getClassNames,
          getValue: getValue,
          hasValue: hasValue,
          isMulti: isMulti,
          isRtl: isRtl,
          options: options,
          selectOption: selectOption,
          selectProps: props,
          setValue: setValue,
          theme: this.getTheme()
        };
      }
    }, {
      key: "hasValue",
      value: function hasValue() {
        var selectValue = this.state.selectValue;
        return selectValue.length > 0;
      }
    }, {
      key: "hasOptions",
      value: function hasOptions() {
        return !!this.getFocusableOptions().length;
      }
    }, {
      key: "isClearable",
      value: function isClearable() {
        var _this$props7 = this.props,
          isClearable = _this$props7.isClearable,
          isMulti = _this$props7.isMulti;

        // single select, by default, IS NOT clearable
        // multi select, by default, IS clearable
        if (isClearable === undefined) return isMulti;
        return isClearable;
      }
    }, {
      key: "isOptionDisabled",
      value: function isOptionDisabled(option, selectValue) {
        return _isOptionDisabled(this.props, option, selectValue);
      }
    }, {
      key: "isOptionSelected",
      value: function isOptionSelected(option, selectValue) {
        return _isOptionSelected(this.props, option, selectValue);
      }
    }, {
      key: "filterOption",
      value: function filterOption(option, inputValue) {
        return _filterOption(this.props, option, inputValue);
      }
    }, {
      key: "formatOptionLabel",
      value: function formatOptionLabel(data, context) {
        if (typeof this.props.formatOptionLabel === 'function') {
          var _inputValue = this.props.inputValue;
          var _selectValue = this.state.selectValue;
          return this.props.formatOptionLabel(data, {
            context: context,
            inputValue: _inputValue,
            selectValue: _selectValue
          });
        } else {
          return this.getOptionLabel(data);
        }
      }
    }, {
      key: "formatGroupLabel",
      value: function formatGroupLabel(data) {
        return this.props.formatGroupLabel(data);
      }

      // ==============================
      // Mouse Handlers
      // ==============================
    }, {
      key: "startListeningComposition",
      value:
      // ==============================
      // Composition Handlers
      // ==============================

      function startListeningComposition() {
        if (document && document.addEventListener) {
          document.addEventListener('compositionstart', this.onCompositionStart, false);
          document.addEventListener('compositionend', this.onCompositionEnd, false);
        }
      }
    }, {
      key: "stopListeningComposition",
      value: function stopListeningComposition() {
        if (document && document.removeEventListener) {
          document.removeEventListener('compositionstart', this.onCompositionStart);
          document.removeEventListener('compositionend', this.onCompositionEnd);
        }
      }
    }, {
      key: "startListeningToTouch",
      value:
      // ==============================
      // Touch Handlers
      // ==============================

      function startListeningToTouch() {
        if (document && document.addEventListener) {
          document.addEventListener('touchstart', this.onTouchStart, false);
          document.addEventListener('touchmove', this.onTouchMove, false);
          document.addEventListener('touchend', this.onTouchEnd, false);
        }
      }
    }, {
      key: "stopListeningToTouch",
      value: function stopListeningToTouch() {
        if (document && document.removeEventListener) {
          document.removeEventListener('touchstart', this.onTouchStart);
          document.removeEventListener('touchmove', this.onTouchMove);
          document.removeEventListener('touchend', this.onTouchEnd);
        }
      }
    }, {
      key: "renderInput",
      value:
      // ==============================
      // Renderers
      // ==============================
      function renderInput() {
        var _this$props8 = this.props,
          isDisabled = _this$props8.isDisabled,
          isSearchable = _this$props8.isSearchable,
          inputId = _this$props8.inputId,
          inputValue = _this$props8.inputValue,
          tabIndex = _this$props8.tabIndex,
          form = _this$props8.form,
          menuIsOpen = _this$props8.menuIsOpen,
          required = _this$props8.required;
        var _this$getComponents = this.getComponents(),
          Input = _this$getComponents.Input;
        var _this$state4 = this.state,
          inputIsHidden = _this$state4.inputIsHidden,
          ariaSelection = _this$state4.ariaSelection;
        var commonProps = this.commonProps;
        var id = inputId || this.getElementId('input');

        // aria attributes makes the JSX "noisy", separated for clarity
        var ariaAttributes = _objectSpread2(_objectSpread2(_objectSpread2({
          'aria-autocomplete': 'list',
          'aria-expanded': menuIsOpen,
          'aria-haspopup': true,
          'aria-errormessage': this.props['aria-errormessage'],
          'aria-invalid': this.props['aria-invalid'],
          'aria-label': this.props['aria-label'],
          'aria-labelledby': this.props['aria-labelledby'],
          'aria-required': required,
          role: 'combobox'
        }, menuIsOpen && {
          'aria-controls': this.getElementId('listbox'),
          'aria-owns': this.getElementId('listbox')
        }), !isSearchable && {
          'aria-readonly': true
        }), this.hasValue() ? (ariaSelection === null || ariaSelection === void 0 ? void 0 : ariaSelection.action) === 'initial-input-focus' && {
          'aria-describedby': this.getElementId('live-region')
        } : {
          'aria-describedby': this.getElementId('placeholder')
        });
        if (!isSearchable) {
          // use a dummy input to maintain focus/blur functionality
          return /*#__PURE__*/React__namespace.createElement(DummyInput, _extends({
            id: id,
            innerRef: this.getInputRef,
            onBlur: this.onInputBlur,
            onChange: noop,
            onFocus: this.onInputFocus,
            disabled: isDisabled,
            tabIndex: tabIndex,
            inputMode: "none",
            form: form,
            value: ""
          }, ariaAttributes));
        }
        return /*#__PURE__*/React__namespace.createElement(Input, _extends({}, commonProps, {
          autoCapitalize: "none",
          autoComplete: "off",
          autoCorrect: "off",
          id: id,
          innerRef: this.getInputRef,
          isDisabled: isDisabled,
          isHidden: inputIsHidden,
          onBlur: this.onInputBlur,
          onChange: this.handleInputChange,
          onFocus: this.onInputFocus,
          spellCheck: "false",
          tabIndex: tabIndex,
          form: form,
          type: "text",
          value: inputValue
        }, ariaAttributes));
      }
    }, {
      key: "renderPlaceholderOrValue",
      value: function renderPlaceholderOrValue() {
        var _this3 = this;
        var _this$getComponents2 = this.getComponents(),
          MultiValue = _this$getComponents2.MultiValue,
          MultiValueContainer = _this$getComponents2.MultiValueContainer,
          MultiValueLabel = _this$getComponents2.MultiValueLabel,
          MultiValueRemove = _this$getComponents2.MultiValueRemove,
          SingleValue = _this$getComponents2.SingleValue,
          Placeholder = _this$getComponents2.Placeholder;
        var commonProps = this.commonProps;
        var _this$props9 = this.props,
          controlShouldRenderValue = _this$props9.controlShouldRenderValue,
          isDisabled = _this$props9.isDisabled,
          isMulti = _this$props9.isMulti,
          inputValue = _this$props9.inputValue,
          placeholder = _this$props9.placeholder;
        var _this$state5 = this.state,
          selectValue = _this$state5.selectValue,
          focusedValue = _this$state5.focusedValue,
          isFocused = _this$state5.isFocused;
        if (!this.hasValue() || !controlShouldRenderValue) {
          return inputValue ? null : /*#__PURE__*/React__namespace.createElement(Placeholder, _extends({}, commonProps, {
            key: "placeholder",
            isDisabled: isDisabled,
            isFocused: isFocused,
            innerProps: {
              id: this.getElementId('placeholder')
            }
          }), placeholder);
        }
        if (isMulti) {
          return selectValue.map(function (opt, index) {
            var isOptionFocused = opt === focusedValue;
            var key = "".concat(_this3.getOptionLabel(opt), "-").concat(_this3.getOptionValue(opt));
            return /*#__PURE__*/React__namespace.createElement(MultiValue, _extends({}, commonProps, {
              components: {
                Container: MultiValueContainer,
                Label: MultiValueLabel,
                Remove: MultiValueRemove
              },
              isFocused: isOptionFocused,
              isDisabled: isDisabled,
              key: key,
              index: index,
              removeProps: {
                onClick: function onClick() {
                  return _this3.removeValue(opt);
                },
                onTouchEnd: function onTouchEnd() {
                  return _this3.removeValue(opt);
                },
                onMouseDown: function onMouseDown(e) {
                  e.preventDefault();
                }
              },
              data: opt
            }), _this3.formatOptionLabel(opt, 'value'));
          });
        }
        if (inputValue) {
          return null;
        }
        var singleValue = selectValue[0];
        return /*#__PURE__*/React__namespace.createElement(SingleValue, _extends({}, commonProps, {
          data: singleValue,
          isDisabled: isDisabled
        }), this.formatOptionLabel(singleValue, 'value'));
      }
    }, {
      key: "renderClearIndicator",
      value: function renderClearIndicator() {
        var _this$getComponents3 = this.getComponents(),
          ClearIndicator = _this$getComponents3.ClearIndicator;
        var commonProps = this.commonProps;
        var _this$props10 = this.props,
          isDisabled = _this$props10.isDisabled,
          isLoading = _this$props10.isLoading;
        var isFocused = this.state.isFocused;
        if (!this.isClearable() || !ClearIndicator || isDisabled || !this.hasValue() || isLoading) {
          return null;
        }
        var innerProps = {
          onMouseDown: this.onClearIndicatorMouseDown,
          onTouchEnd: this.onClearIndicatorTouchEnd,
          'aria-hidden': 'true'
        };
        return /*#__PURE__*/React__namespace.createElement(ClearIndicator, _extends({}, commonProps, {
          innerProps: innerProps,
          isFocused: isFocused
        }));
      }
    }, {
      key: "renderLoadingIndicator",
      value: function renderLoadingIndicator() {
        var _this$getComponents4 = this.getComponents(),
          LoadingIndicator = _this$getComponents4.LoadingIndicator;
        var commonProps = this.commonProps;
        var _this$props11 = this.props,
          isDisabled = _this$props11.isDisabled,
          isLoading = _this$props11.isLoading;
        var isFocused = this.state.isFocused;
        if (!LoadingIndicator || !isLoading) return null;
        var innerProps = {
          'aria-hidden': 'true'
        };
        return /*#__PURE__*/React__namespace.createElement(LoadingIndicator, _extends({}, commonProps, {
          innerProps: innerProps,
          isDisabled: isDisabled,
          isFocused: isFocused
        }));
      }
    }, {
      key: "renderIndicatorSeparator",
      value: function renderIndicatorSeparator() {
        var _this$getComponents5 = this.getComponents(),
          DropdownIndicator = _this$getComponents5.DropdownIndicator,
          IndicatorSeparator = _this$getComponents5.IndicatorSeparator;

        // separator doesn't make sense without the dropdown indicator
        if (!DropdownIndicator || !IndicatorSeparator) return null;
        var commonProps = this.commonProps;
        var isDisabled = this.props.isDisabled;
        var isFocused = this.state.isFocused;
        return /*#__PURE__*/React__namespace.createElement(IndicatorSeparator, _extends({}, commonProps, {
          isDisabled: isDisabled,
          isFocused: isFocused
        }));
      }
    }, {
      key: "renderDropdownIndicator",
      value: function renderDropdownIndicator() {
        var _this$getComponents6 = this.getComponents(),
          DropdownIndicator = _this$getComponents6.DropdownIndicator;
        if (!DropdownIndicator) return null;
        var commonProps = this.commonProps;
        var isDisabled = this.props.isDisabled;
        var isFocused = this.state.isFocused;
        var innerProps = {
          onMouseDown: this.onDropdownIndicatorMouseDown,
          onTouchEnd: this.onDropdownIndicatorTouchEnd,
          'aria-hidden': 'true'
        };
        return /*#__PURE__*/React__namespace.createElement(DropdownIndicator, _extends({}, commonProps, {
          innerProps: innerProps,
          isDisabled: isDisabled,
          isFocused: isFocused
        }));
      }
    }, {
      key: "renderMenu",
      value: function renderMenu() {
        var _this4 = this;
        var _this$getComponents7 = this.getComponents(),
          Group = _this$getComponents7.Group,
          GroupHeading = _this$getComponents7.GroupHeading,
          Menu = _this$getComponents7.Menu,
          MenuList = _this$getComponents7.MenuList,
          MenuPortal = _this$getComponents7.MenuPortal,
          LoadingMessage = _this$getComponents7.LoadingMessage,
          NoOptionsMessage = _this$getComponents7.NoOptionsMessage,
          Option = _this$getComponents7.Option;
        var commonProps = this.commonProps;
        var focusedOption = this.state.focusedOption;
        var _this$props12 = this.props,
          captureMenuScroll = _this$props12.captureMenuScroll,
          inputValue = _this$props12.inputValue,
          isLoading = _this$props12.isLoading,
          loadingMessage = _this$props12.loadingMessage,
          minMenuHeight = _this$props12.minMenuHeight,
          maxMenuHeight = _this$props12.maxMenuHeight,
          menuIsOpen = _this$props12.menuIsOpen,
          menuPlacement = _this$props12.menuPlacement,
          menuPosition = _this$props12.menuPosition,
          menuPortalTarget = _this$props12.menuPortalTarget,
          menuShouldBlockScroll = _this$props12.menuShouldBlockScroll,
          menuShouldScrollIntoView = _this$props12.menuShouldScrollIntoView,
          noOptionsMessage = _this$props12.noOptionsMessage,
          onMenuScrollToTop = _this$props12.onMenuScrollToTop,
          onMenuScrollToBottom = _this$props12.onMenuScrollToBottom;
        if (!menuIsOpen) return null;

        // TODO: Internal Option Type here
        var render = function render(props, id) {
          var type = props.type,
            data = props.data,
            isDisabled = props.isDisabled,
            isSelected = props.isSelected,
            label = props.label,
            value = props.value;
          var isFocused = focusedOption === data;
          var onHover = isDisabled ? undefined : function () {
            return _this4.onOptionHover(data);
          };
          var onSelect = isDisabled ? undefined : function () {
            return _this4.selectOption(data);
          };
          var optionId = "".concat(_this4.getElementId('option'), "-").concat(id);
          var innerProps = {
            id: optionId,
            onClick: onSelect,
            onMouseMove: onHover,
            onMouseOver: onHover,
            tabIndex: -1
          };
          return /*#__PURE__*/React__namespace.createElement(Option, _extends({}, commonProps, {
            innerProps: innerProps,
            data: data,
            isDisabled: isDisabled,
            isSelected: isSelected,
            key: optionId,
            label: label,
            type: type,
            value: value,
            isFocused: isFocused,
            innerRef: isFocused ? _this4.getFocusedOptionRef : undefined
          }), _this4.formatOptionLabel(props.data, 'menu'));
        };
        var menuUI;
        if (this.hasOptions()) {
          menuUI = this.getCategorizedOptions().map(function (item) {
            if (item.type === 'group') {
              var _data = item.data,
                options = item.options,
                groupIndex = item.index;
              var groupId = "".concat(_this4.getElementId('group'), "-").concat(groupIndex);
              var headingId = "".concat(groupId, "-heading");
              return /*#__PURE__*/React__namespace.createElement(Group, _extends({}, commonProps, {
                key: groupId,
                data: _data,
                options: options,
                Heading: GroupHeading,
                headingProps: {
                  id: headingId,
                  data: item.data
                },
                label: _this4.formatGroupLabel(item.data)
              }), item.options.map(function (option) {
                return render(option, "".concat(groupIndex, "-").concat(option.index));
              }));
            } else if (item.type === 'option') {
              return render(item, "".concat(item.index));
            }
          });
        } else if (isLoading) {
          var message = loadingMessage({
            inputValue: inputValue
          });
          if (message === null) return null;
          menuUI = /*#__PURE__*/React__namespace.createElement(LoadingMessage, commonProps, message);
        } else {
          var _message = noOptionsMessage({
            inputValue: inputValue
          });
          if (_message === null) return null;
          menuUI = /*#__PURE__*/React__namespace.createElement(NoOptionsMessage, commonProps, _message);
        }
        var menuPlacementProps = {
          minMenuHeight: minMenuHeight,
          maxMenuHeight: maxMenuHeight,
          menuPlacement: menuPlacement,
          menuPosition: menuPosition,
          menuShouldScrollIntoView: menuShouldScrollIntoView
        };
        var menuElement = /*#__PURE__*/React__namespace.createElement(MenuPlacer, _extends({}, commonProps, menuPlacementProps), function (_ref4) {
          var ref = _ref4.ref,
            _ref4$placerProps = _ref4.placerProps,
            placement = _ref4$placerProps.placement,
            maxHeight = _ref4$placerProps.maxHeight;
          return /*#__PURE__*/React__namespace.createElement(Menu, _extends({}, commonProps, menuPlacementProps, {
            innerRef: ref,
            innerProps: {
              onMouseDown: _this4.onMenuMouseDown,
              onMouseMove: _this4.onMenuMouseMove,
              id: _this4.getElementId('listbox')
            },
            isLoading: isLoading,
            placement: placement
          }), /*#__PURE__*/React__namespace.createElement(ScrollManager, {
            captureEnabled: captureMenuScroll,
            onTopArrive: onMenuScrollToTop,
            onBottomArrive: onMenuScrollToBottom,
            lockEnabled: menuShouldBlockScroll
          }, function (scrollTargetRef) {
            return /*#__PURE__*/React__namespace.createElement(MenuList, _extends({}, commonProps, {
              innerRef: function innerRef(instance) {
                _this4.getMenuListRef(instance);
                scrollTargetRef(instance);
              },
              isLoading: isLoading,
              maxHeight: maxHeight,
              focusedOption: focusedOption
            }), menuUI);
          }));
        });

        // positioning behaviour is almost identical for portalled and fixed,
        // so we use the same component. the actual portalling logic is forked
        // within the component based on `menuPosition`
        return menuPortalTarget || menuPosition === 'fixed' ? /*#__PURE__*/React__namespace.createElement(MenuPortal, _extends({}, commonProps, {
          appendTo: menuPortalTarget,
          controlElement: this.controlRef,
          menuPlacement: menuPlacement,
          menuPosition: menuPosition
        }), menuElement) : menuElement;
      }
    }, {
      key: "renderFormField",
      value: function renderFormField() {
        var _this5 = this;
        var _this$props13 = this.props,
          delimiter = _this$props13.delimiter,
          isDisabled = _this$props13.isDisabled,
          isMulti = _this$props13.isMulti,
          name = _this$props13.name,
          required = _this$props13.required;
        var selectValue = this.state.selectValue;
        if (required && !this.hasValue() && !isDisabled) {
          return /*#__PURE__*/React__namespace.createElement(RequiredInput$1, {
            name: name,
            onFocus: this.onValueInputFocus
          });
        }
        if (!name || isDisabled) return;
        if (isMulti) {
          if (delimiter) {
            var value = selectValue.map(function (opt) {
              return _this5.getOptionValue(opt);
            }).join(delimiter);
            return /*#__PURE__*/React__namespace.createElement("input", {
              name: name,
              type: "hidden",
              value: value
            });
          } else {
            var input = selectValue.length > 0 ? selectValue.map(function (opt, i) {
              return /*#__PURE__*/React__namespace.createElement("input", {
                key: "i-".concat(i),
                name: name,
                type: "hidden",
                value: _this5.getOptionValue(opt)
              });
            }) : /*#__PURE__*/React__namespace.createElement("input", {
              name: name,
              type: "hidden",
              value: ""
            });
            return /*#__PURE__*/React__namespace.createElement("div", null, input);
          }
        } else {
          var _value = selectValue[0] ? this.getOptionValue(selectValue[0]) : '';
          return /*#__PURE__*/React__namespace.createElement("input", {
            name: name,
            type: "hidden",
            value: _value
          });
        }
      }
    }, {
      key: "renderLiveRegion",
      value: function renderLiveRegion() {
        var commonProps = this.commonProps;
        var _this$state6 = this.state,
          ariaSelection = _this$state6.ariaSelection,
          focusedOption = _this$state6.focusedOption,
          focusedValue = _this$state6.focusedValue,
          isFocused = _this$state6.isFocused,
          selectValue = _this$state6.selectValue;
        var focusableOptions = this.getFocusableOptions();
        return /*#__PURE__*/React__namespace.createElement(LiveRegion$1, _extends({}, commonProps, {
          id: this.getElementId('live-region'),
          ariaSelection: ariaSelection,
          focusedOption: focusedOption,
          focusedValue: focusedValue,
          isFocused: isFocused,
          selectValue: selectValue,
          focusableOptions: focusableOptions
        }));
      }
    }, {
      key: "render",
      value: function render() {
        var _this$getComponents8 = this.getComponents(),
          Control = _this$getComponents8.Control,
          IndicatorsContainer = _this$getComponents8.IndicatorsContainer,
          SelectContainer = _this$getComponents8.SelectContainer,
          ValueContainer = _this$getComponents8.ValueContainer;
        var _this$props14 = this.props,
          className = _this$props14.className,
          id = _this$props14.id,
          isDisabled = _this$props14.isDisabled,
          menuIsOpen = _this$props14.menuIsOpen;
        var isFocused = this.state.isFocused;
        var commonProps = this.commonProps = this.getCommonProps();
        return /*#__PURE__*/React__namespace.createElement(SelectContainer, _extends({}, commonProps, {
          className: className,
          innerProps: {
            id: id,
            onKeyDown: this.onKeyDown
          },
          isDisabled: isDisabled,
          isFocused: isFocused
        }), this.renderLiveRegion(), /*#__PURE__*/React__namespace.createElement(Control, _extends({}, commonProps, {
          innerRef: this.getControlRef,
          innerProps: {
            onMouseDown: this.onControlMouseDown,
            onTouchEnd: this.onControlTouchEnd
          },
          isDisabled: isDisabled,
          isFocused: isFocused,
          menuIsOpen: menuIsOpen
        }), /*#__PURE__*/React__namespace.createElement(ValueContainer, _extends({}, commonProps, {
          isDisabled: isDisabled
        }), this.renderPlaceholderOrValue(), this.renderInput()), /*#__PURE__*/React__namespace.createElement(IndicatorsContainer, _extends({}, commonProps, {
          isDisabled: isDisabled
        }), this.renderClearIndicator(), this.renderLoadingIndicator(), this.renderIndicatorSeparator(), this.renderDropdownIndicator())), this.renderMenu(), this.renderFormField());
      }
    }], [{
      key: "getDerivedStateFromProps",
      value: function getDerivedStateFromProps(props, state) {
        var prevProps = state.prevProps,
          clearFocusValueOnUpdate = state.clearFocusValueOnUpdate,
          inputIsHiddenAfterUpdate = state.inputIsHiddenAfterUpdate,
          ariaSelection = state.ariaSelection,
          isFocused = state.isFocused,
          prevWasFocused = state.prevWasFocused;
        var options = props.options,
          value = props.value,
          menuIsOpen = props.menuIsOpen,
          inputValue = props.inputValue,
          isMulti = props.isMulti;
        var selectValue = cleanValue(value);
        var newMenuOptionsState = {};
        if (prevProps && (value !== prevProps.value || options !== prevProps.options || menuIsOpen !== prevProps.menuIsOpen || inputValue !== prevProps.inputValue)) {
          var focusableOptions = menuIsOpen ? buildFocusableOptions(props, selectValue) : [];
          var focusedValue = clearFocusValueOnUpdate ? getNextFocusedValue(state, selectValue) : null;
          var focusedOption = getNextFocusedOption(state, focusableOptions);
          newMenuOptionsState = {
            selectValue: selectValue,
            focusedOption: focusedOption,
            focusedValue: focusedValue,
            clearFocusValueOnUpdate: false
          };
        }
        // some updates should toggle the state of the input visibility
        var newInputIsHiddenState = inputIsHiddenAfterUpdate != null && props !== prevProps ? {
          inputIsHidden: inputIsHiddenAfterUpdate,
          inputIsHiddenAfterUpdate: undefined
        } : {};
        var newAriaSelection = ariaSelection;
        var hasKeptFocus = isFocused && prevWasFocused;
        if (isFocused && !hasKeptFocus) {
          // If `value` or `defaultValue` props are not empty then announce them
          // when the Select is initially focused
          newAriaSelection = {
            value: valueTernary(isMulti, selectValue, selectValue[0] || null),
            options: selectValue,
            action: 'initial-input-focus'
          };
          hasKeptFocus = !prevWasFocused;
        }

        // If the 'initial-input-focus' action has been set already
        // then reset the ariaSelection to null
        if ((ariaSelection === null || ariaSelection === void 0 ? void 0 : ariaSelection.action) === 'initial-input-focus') {
          newAriaSelection = null;
        }
        return _objectSpread2(_objectSpread2(_objectSpread2({}, newMenuOptionsState), newInputIsHiddenState), {}, {
          prevProps: props,
          ariaSelection: newAriaSelection,
          prevWasFocused: hasKeptFocus
        });
      }
    }]);
    return Select;
  }(React.Component);
  Select.defaultProps = defaultProps;

  var _typeof_1 = createCommonjsModule(function (module) {
    function _typeof(obj) {
      "@babel/helpers - typeof";

      return (module.exports = _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
        return typeof obj;
      } : function (obj) {
        return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      }, module.exports.__esModule = true, module.exports["default"] = module.exports), _typeof(obj);
    }
    module.exports = _typeof, module.exports.__esModule = true, module.exports["default"] = module.exports;
  });
  unwrapExports(_typeof_1);

  var toPrimitive = createCommonjsModule(function (module) {
    var _typeof = _typeof_1["default"];
    function _toPrimitive(input, hint) {
      if (_typeof(input) !== "object" || input === null) return input;
      var prim = input[Symbol.toPrimitive];
      if (prim !== undefined) {
        var res = prim.call(input, hint || "default");
        if (_typeof(res) !== "object") return res;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return (hint === "string" ? String : Number)(input);
    }
    module.exports = _toPrimitive, module.exports.__esModule = true, module.exports["default"] = module.exports;
  });
  unwrapExports(toPrimitive);

  var toPropertyKey = createCommonjsModule(function (module) {
    var _typeof = _typeof_1["default"];
    function _toPropertyKey(arg) {
      var key = toPrimitive(arg, "string");
      return _typeof(key) === "symbol" ? key : String(key);
    }
    module.exports = _toPropertyKey, module.exports.__esModule = true, module.exports["default"] = module.exports;
  });
  unwrapExports(toPropertyKey);

  var defineProperty = createCommonjsModule(function (module) {
    function _defineProperty(obj, key, value) {
      key = toPropertyKey(key);
      if (key in obj) {
        Object.defineProperty(obj, key, {
          value: value,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        obj[key] = value;
      }
      return obj;
    }
    module.exports = _defineProperty, module.exports.__esModule = true, module.exports["default"] = module.exports;
  });
  unwrapExports(defineProperty);

  var objectSpread2 = createCommonjsModule(function (module) {
    function ownKeys(object, enumerableOnly) {
      var keys = Object.keys(object);
      if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        enumerableOnly && (symbols = symbols.filter(function (sym) {
          return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        })), keys.push.apply(keys, symbols);
      }
      return keys;
    }
    function _objectSpread2(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = null != arguments[i] ? arguments[i] : {};
        i % 2 ? ownKeys(Object(source), !0).forEach(function (key) {
          defineProperty(target, key, source[key]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
      }
      return target;
    }
    module.exports = _objectSpread2, module.exports.__esModule = true, module.exports["default"] = module.exports;
  });
  unwrapExports(objectSpread2);

  var arrayWithHoles = createCommonjsModule(function (module) {
    function _arrayWithHoles(arr) {
      if (Array.isArray(arr)) return arr;
    }
    module.exports = _arrayWithHoles, module.exports.__esModule = true, module.exports["default"] = module.exports;
  });
  unwrapExports(arrayWithHoles);

  var iterableToArrayLimit = createCommonjsModule(function (module) {
    function _iterableToArrayLimit(arr, i) {
      var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"];
      if (null != _i) {
        var _s,
          _e,
          _x,
          _r,
          _arr = [],
          _n = !0,
          _d = !1;
        try {
          if (_x = (_i = _i.call(arr)).next, 0 === i) {
            if (Object(_i) !== _i) return;
            _n = !1;
          } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0);
        } catch (err) {
          _d = !0, _e = err;
        } finally {
          try {
            if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return;
          } finally {
            if (_d) throw _e;
          }
        }
        return _arr;
      }
    }
    module.exports = _iterableToArrayLimit, module.exports.__esModule = true, module.exports["default"] = module.exports;
  });
  unwrapExports(iterableToArrayLimit);

  var arrayLikeToArray = createCommonjsModule(function (module) {
    function _arrayLikeToArray(arr, len) {
      if (len == null || len > arr.length) len = arr.length;
      for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
      return arr2;
    }
    module.exports = _arrayLikeToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;
  });
  unwrapExports(arrayLikeToArray);

  var unsupportedIterableToArray = createCommonjsModule(function (module) {
    function _unsupportedIterableToArray(o, minLen) {
      if (!o) return;
      if (typeof o === "string") return arrayLikeToArray(o, minLen);
      var n = Object.prototype.toString.call(o).slice(8, -1);
      if (n === "Object" && o.constructor) n = o.constructor.name;
      if (n === "Map" || n === "Set") return Array.from(o);
      if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
    }
    module.exports = _unsupportedIterableToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;
  });
  unwrapExports(unsupportedIterableToArray);

  var nonIterableRest = createCommonjsModule(function (module) {
    function _nonIterableRest() {
      throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    module.exports = _nonIterableRest, module.exports.__esModule = true, module.exports["default"] = module.exports;
  });
  unwrapExports(nonIterableRest);

  var slicedToArray = createCommonjsModule(function (module) {
    function _slicedToArray(arr, i) {
      return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || unsupportedIterableToArray(arr, i) || nonIterableRest();
    }
    module.exports = _slicedToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;
  });
  unwrapExports(slicedToArray);

  var objectWithoutPropertiesLoose = createCommonjsModule(function (module) {
    function _objectWithoutPropertiesLoose(source, excluded) {
      if (source == null) return {};
      var target = {};
      var sourceKeys = Object.keys(source);
      var key, i;
      for (i = 0; i < sourceKeys.length; i++) {
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
      }
      return target;
    }
    module.exports = _objectWithoutPropertiesLoose, module.exports.__esModule = true, module.exports["default"] = module.exports;
  });
  unwrapExports(objectWithoutPropertiesLoose);

  var objectWithoutProperties = createCommonjsModule(function (module) {
    function _objectWithoutProperties(source, excluded) {
      if (source == null) return {};
      var target = objectWithoutPropertiesLoose(source, excluded);
      var key, i;
      if (Object.getOwnPropertySymbols) {
        var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
        for (i = 0; i < sourceSymbolKeys.length; i++) {
          key = sourceSymbolKeys[i];
          if (excluded.indexOf(key) >= 0) continue;
          if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
          target[key] = source[key];
        }
      }
      return target;
    }
    module.exports = _objectWithoutProperties, module.exports.__esModule = true, module.exports["default"] = module.exports;
  });
  unwrapExports(objectWithoutProperties);

  var classCallCheck = createCommonjsModule(function (module) {
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    module.exports = _classCallCheck, module.exports.__esModule = true, module.exports["default"] = module.exports;
  });
  unwrapExports(classCallCheck);

  var createClass = createCommonjsModule(function (module) {
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, toPropertyKey(descriptor.key), descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps) _defineProperties(Constructor.prototype, protoProps);
      if (staticProps) _defineProperties(Constructor, staticProps);
      Object.defineProperty(Constructor, "prototype", {
        writable: false
      });
      return Constructor;
    }
    module.exports = _createClass, module.exports.__esModule = true, module.exports["default"] = module.exports;
  });
  unwrapExports(createClass);

  var setPrototypeOf = createCommonjsModule(function (module) {
    function _setPrototypeOf(o, p) {
      module.exports = _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
      }, module.exports.__esModule = true, module.exports["default"] = module.exports;
      return _setPrototypeOf(o, p);
    }
    module.exports = _setPrototypeOf, module.exports.__esModule = true, module.exports["default"] = module.exports;
  });
  unwrapExports(setPrototypeOf);

  var inherits = createCommonjsModule(function (module) {
    function _inherits(subClass, superClass) {
      if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
      }
      subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
          value: subClass,
          writable: true,
          configurable: true
        }
      });
      Object.defineProperty(subClass, "prototype", {
        writable: false
      });
      if (superClass) setPrototypeOf(subClass, superClass);
    }
    module.exports = _inherits, module.exports.__esModule = true, module.exports["default"] = module.exports;
  });
  unwrapExports(inherits);

  var getPrototypeOf = createCommonjsModule(function (module) {
    function _getPrototypeOf(o) {
      module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
      }, module.exports.__esModule = true, module.exports["default"] = module.exports;
      return _getPrototypeOf(o);
    }
    module.exports = _getPrototypeOf, module.exports.__esModule = true, module.exports["default"] = module.exports;
  });
  unwrapExports(getPrototypeOf);

  var isNativeReflectConstruct = createCommonjsModule(function (module) {
    function _isNativeReflectConstruct() {
      if (typeof Reflect === "undefined" || !Reflect.construct) return false;
      if (Reflect.construct.sham) return false;
      if (typeof Proxy === "function") return true;
      try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
        return true;
      } catch (e) {
        return false;
      }
    }
    module.exports = _isNativeReflectConstruct, module.exports.__esModule = true, module.exports["default"] = module.exports;
  });
  unwrapExports(isNativeReflectConstruct);

  var assertThisInitialized = createCommonjsModule(function (module) {
    function _assertThisInitialized(self) {
      if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return self;
    }
    module.exports = _assertThisInitialized, module.exports.__esModule = true, module.exports["default"] = module.exports;
  });
  unwrapExports(assertThisInitialized);

  var possibleConstructorReturn = createCommonjsModule(function (module) {
    var _typeof = _typeof_1["default"];
    function _possibleConstructorReturn(self, call) {
      if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
      } else if (call !== void 0) {
        throw new TypeError("Derived constructors may only return object or undefined");
      }
      return assertThisInitialized(self);
    }
    module.exports = _possibleConstructorReturn, module.exports.__esModule = true, module.exports["default"] = module.exports;
  });
  unwrapExports(possibleConstructorReturn);

  var createSuper = createCommonjsModule(function (module) {
    function _createSuper(Derived) {
      var hasNativeReflectConstruct = isNativeReflectConstruct();
      return function _createSuperInternal() {
        var Super = getPrototypeOf(Derived),
          result;
        if (hasNativeReflectConstruct) {
          var NewTarget = getPrototypeOf(this).constructor;
          result = Reflect.construct(Super, arguments, NewTarget);
        } else {
          result = Super.apply(this, arguments);
        }
        return possibleConstructorReturn(this, result);
      };
    }
    module.exports = _createSuper, module.exports.__esModule = true, module.exports["default"] = module.exports;
  });
  unwrapExports(createSuper);

  var arrayWithoutHoles = createCommonjsModule(function (module) {
    function _arrayWithoutHoles(arr) {
      if (Array.isArray(arr)) return arrayLikeToArray(arr);
    }
    module.exports = _arrayWithoutHoles, module.exports.__esModule = true, module.exports["default"] = module.exports;
  });
  unwrapExports(arrayWithoutHoles);

  var iterableToArray = createCommonjsModule(function (module) {
    function _iterableToArray(iter) {
      if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
    }
    module.exports = _iterableToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;
  });
  unwrapExports(iterableToArray);

  var nonIterableSpread = createCommonjsModule(function (module) {
    function _nonIterableSpread() {
      throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    module.exports = _nonIterableSpread, module.exports.__esModule = true, module.exports["default"] = module.exports;
  });
  unwrapExports(nonIterableSpread);

  var toConsumableArray = createCommonjsModule(function (module) {
    function _toConsumableArray(arr) {
      return arrayWithoutHoles(arr) || iterableToArray(arr) || unsupportedIterableToArray(arr) || nonIterableSpread();
    }
    module.exports = _toConsumableArray, module.exports.__esModule = true, module.exports["default"] = module.exports;
  });
  unwrapExports(toConsumableArray);

  var taggedTemplateLiteral = createCommonjsModule(function (module) {
    function _taggedTemplateLiteral(strings, raw) {
      if (!raw) {
        raw = strings.slice(0);
      }
      return Object.freeze(Object.defineProperties(strings, {
        raw: {
          value: Object.freeze(raw)
        }
      }));
    }
    module.exports = _taggedTemplateLiteral, module.exports.__esModule = true, module.exports["default"] = module.exports;
  });
  unwrapExports(taggedTemplateLiteral);

  var StateManagedSelect = /*#__PURE__*/React.forwardRef(function (props, ref) {
    var baseSelectProps = useStateManager(props);
    return /*#__PURE__*/React__namespace.createElement(Select, _extends({
      ref: ref
    }, baseSelectProps));
  });
  var StateManagedSelect$1 = StateManagedSelect;

  class SelectWrapper extends React.Component {
    render() {
      const {
        options,
        onChange
      } = this.props;
      return /*#__PURE__*/React__default["default"].createElement(StateManagedSelect$1, {
        options: options,
        onChange: onChange
      });
    }
  }

  exports.SelectWrapper = SelectWrapper;

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;

})({}, React, ReactDOM);
