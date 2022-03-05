"use strict";

require("core-js/modules/es.object.assign.js");

require("core-js/modules/web.dom-collections.iterator.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _dateFns = require("date-fns");

var _react = _interopRequireDefault(require("react"));

var _hexToRgb = _interopRequireDefault(require("../global/helpers/hexToRgb"));

var _DateView = _interopRequireDefault(require("./DateView"));

var _MonthView = _interopRequireDefault(require("./MonthView"));

var _styled = require("./styled");

var Locales = _interopRequireWildcard(require("date-fns/locale"));

const _excluded = ["locale", "color", "className", "startDate", "days", "type"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

const DatePicker = _ref => {
  var _Locales$locale;

  let {
    locale = "enUS",
    color = "#000000",
    className = "",
    startDate = new Date(),
    days = 90,
    type
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  const _locale = (_Locales$locale = Locales[locale]) !== null && _Locales$locale !== void 0 ? _Locales$locale : Locales["enUS"];

  const next = event => {
    event.preventDefault();
    const e = document.getElementById("container");
    const width = e ? e.getBoundingClientRect().width : null;
    e.scrollBy({
      left: width - 60,
      behavior: "smooth"
    }); // e.scrollLeft += width - 60;
  };

  const prev = event => {
    event.preventDefault();
    const e = document.getElementById("container");
    const width = e ? e.getBoundingClientRect().width : null;
    e.scrollBy({
      left: -(width - 60),
      behavior: "smooth"
    }); // e.scrollLeft -= width - 60;
  };

  const primaryColor = color ? color.indexOf("rgb") > 0 ? color : (0, _hexToRgb.default)(color) : "rgb(54, 105, 238)";
  const lastDate = (0, _dateFns.addDays)(startDate, days || 90);
  let buttonzIndex = {
    zIndex: 2
  };
  let buttonStyle = {
    background: primaryColor
  };
  let Component = _DateView.default;

  if (type === "month") {
    buttonzIndex = {
      zIndex: 5
    };
    Component = _MonthView.default;
    buttonStyle = {
      background: primaryColor,
      marginBottom: "5px"
    };
  }

  return /*#__PURE__*/_react.default.createElement(_styled.Container, {
    className: className
  }, /*#__PURE__*/_react.default.createElement(_styled.ButtonWrapper, {
    style: buttonzIndex
  }, /*#__PURE__*/_react.default.createElement(_styled.Button, {
    className: "left",
    style: buttonStyle,
    onClick: prev
  })), /*#__PURE__*/_react.default.createElement(Component, _extends({
    primaryColor: primaryColor,
    startDate: startDate,
    lastDate: lastDate,
    locale: _locale
  }, props)), /*#__PURE__*/_react.default.createElement(_styled.ButtonWrapper, {
    style: buttonzIndex
  }, /*#__PURE__*/_react.default.createElement(_styled.Button, {
    className: "right",
    style: buttonStyle,
    onClick: next
  })));
};

var _default = DatePicker;
exports.default = _default;