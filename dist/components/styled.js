"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MonthYearLabel = exports.MonthContainer = exports.MarkedLabel = exports.DaysContainer = exports.DayLabel = exports.DateListScrollable = exports.DateLabel = exports.DateDayItemMarked = exports.DateDayItem = exports.Container = exports.ButtonWrapper = exports.Button = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

const Container = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  width: 100%;\n  background: inherit;\n"])));

exports.Container = Container;

const ButtonWrapper = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: flex-end;\n  background: inherit;\n"])));

exports.ButtonWrapper = ButtonWrapper;

const Button = _styledComponents.default.button(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  border: none;\n  text-decoration: none;\n  cursor: pointer;\n  border-radius: 50%;\n  width: 40px;\n  height: 40px;\n  color: white;\n  font-size: 20px;\n  font-weight: bold;\n  flex-shrink: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 0;\n  margin-bottom: 13px;\n"])));

exports.Button = Button;

const MarkedLabel = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  margin-top: 10px;\n"])));

exports.MarkedLabel = MarkedLabel;

const DateDayItemMarked = _styledComponents.default.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  cursor: pointer;\n  margin: 0 0 0 5px;\n  width: 45px;\n  height: 70px;\n  flex-shrink: 0;\n"])));

exports.DateDayItemMarked = DateDayItemMarked;

const DateDayItem = _styledComponents.default.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  cursor: pointer;\n  margin: 0 0 0 5px;\n  width: 45px;\n  height: 49px;\n  flex-shrink: 0;\n"])));

exports.DateDayItem = DateDayItem;

const DayLabel = _styledComponents.default.div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  font-size: 12px;\n  margin: 4px 0 0 0;\n"])));

exports.DayLabel = DayLabel;

const DateLabel = _styledComponents.default.div(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  font-size: 18px;\n"])));

exports.DateLabel = DateLabel;

const MonthContainer = _styledComponents.default.div(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  cursor: pointer;\n  padding: 2px;\n  margin: 2px;\n"])));

exports.MonthContainer = MonthContainer;

const MonthYearLabel = _styledComponents.default.span(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n  align-self: flex-start;\n  z-index: 3;\n  font-size: 15px;\n  font-weight: bold;\n  position: sticky;\n  top: 10px;\n  left: 0;\n  width: max-content;\n  margin: 0 10px;\n"])));

exports.MonthYearLabel = MonthYearLabel;

const DaysContainer = _styledComponents.default.div(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n  display: flex;\n  z-index: 1;\n  margin-top: 10px;\n"])));

exports.DaysContainer = DaysContainer;

const DateListScrollable = _styledComponents.default.div(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n  display: flex;\n  overflow-x: scroll;\n  scrollbar-width: none;\n  margin: 2px 0 2px -40px;\n  -webkit-overflow-scrolling: touch;\n  &::-webkit-scrollbar {\n    -webkit-appearance: none;\n    display: none;\n  }\n"])));

exports.DateListScrollable = DateListScrollable;