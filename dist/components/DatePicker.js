"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/es.object.assign.js");

var _dateFns = require("date-fns");

var _react = _interopRequireDefault(require("react"));

var _hexToRgb = _interopRequireDefault(require("../global/helpers/hexToRgb"));

var _DateView = require("./DateView");

var _MonthView = require("./MonthView");

var _styled = require("./styled");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const DatePicker = props => {
  const next = event => {
    event.preventDefault();
    const e = document.getElementById("container");
    const width = e ? e.getBoundingClientRect().width : null;
    e.scrollLeft += width - 60;
  };

  const prev = event => {
    event.preventDefault();
    const e = document.getElementById("container");
    const width = e ? e.getBoundingClientRect().width : null;
    e.scrollLeft -= width - 60;
  };

  const primaryColor = props.color ? props.color.indexOf("rgb") > 0 ? props.color : (0, _hexToRgb.default)(props.color) : "rgb(54, 105, 238)";
  const startDate = props.startDate || new Date();
  const lastDate = (0, _dateFns.addDays)(startDate, props.days || 90);
  let buttonzIndex = {
    zIndex: 2
  };
  let buttonStyle = {
    background: primaryColor
  };
  let Component = _DateView.DateView;

  if (props.type === "month") {
    buttonzIndex = {
      zIndex: 5
    };
    Component = _MonthView.MonthView;
    buttonStyle = {
      background: primaryColor,
      marginBottom: "5px"
    };
  }

  return /*#__PURE__*/_react.default.createElement(_styled.Container, null, /*#__PURE__*/_react.default.createElement(_styled.ButtonWrapper, {
    style: buttonzIndex
  }, /*#__PURE__*/_react.default.createElement(_styled.Button, {
    style: buttonStyle,
    onClick: prev
  }, "<")), /*#__PURE__*/_react.default.createElement(Component, _extends({}, props, {
    primaryColor: primaryColor,
    startDate: startDate,
    lastDate: lastDate
  })), /*#__PURE__*/_react.default.createElement(_styled.ButtonWrapper, {
    style: buttonzIndex
  }, /*#__PURE__*/_react.default.createElement(_styled.Button, {
    style: buttonStyle,
    onClick: next
  }, ">")));
};

var _default = DatePicker;
exports.default = _default;