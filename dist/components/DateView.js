"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/web.dom-collections.iterator.js");

var _react = _interopRequireWildcard(require("react"));

var _dateFns = require("date-fns");

var _styled = require("./styled");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const DateView = _ref => {
  let {
    startDate,
    lastDate,
    selectDate,
    getSelectedDay,
    primaryColor,
    labelFormat,
    marked
  } = _ref;
  const [selectedDate, setSelectedDate] = (0, _react.useState)(null);
  const firstSection = {
    marginLeft: "40px"
  };
  const selectedStyle = {
    fontWeight: "bold",
    width: "45px",
    height: "45px",
    borderRadius: "50%",
    border: "2px solid ".concat(primaryColor),
    color: primaryColor
  };
  const labelColor = {
    color: primaryColor
  };
  const markedStyle = {
    color: "#8c3737",
    padding: "2px",
    fontSize: 12
  };

  const getStyles = day => {
    return (0, _dateFns.isSameDay)(day, selectedDate) ? selectedStyle : null;
  };

  const getId = day => {
    return (0, _dateFns.isSameDay)(day, selectedDate) ? "selected" : "";
  };

  const getMarked = day => {
    let markedRes = marked.find(i => (0, _dateFns.isSameDay)(i.date, day));

    if (markedRes) {
      var _markedRes$style;

      if (!(markedRes !== null && markedRes !== void 0 && markedRes.marked)) {
        return;
      }

      return /*#__PURE__*/_react.default.createElement(_styled.MarkedLabel, {
        style: _objectSpread({}, (_markedRes$style = markedRes === null || markedRes === void 0 ? void 0 : markedRes.style) !== null && _markedRes$style !== void 0 ? _markedRes$style : markedStyle)
      }, markedRes.text);
    }

    return "";
  };

  const renderDays = () => {
    const dayFormat = "E";
    const dateFormat = "d";
    const months = [];
    let days = [];

    for (let i = 0; i <= (0, _dateFns.differenceInMonths)(lastDate, startDate); i++) {
      let start, end;
      const month = (0, _dateFns.startOfMonth)((0, _dateFns.addMonths)(startDate, i));
      start = i === 0 ? Number((0, _dateFns.format)(startDate, dateFormat)) - 1 : 0;
      end = i === (0, _dateFns.differenceInMonths)(lastDate, startDate) ? Number((0, _dateFns.format)(lastDate, "d")) : Number((0, _dateFns.format)((0, _dateFns.lastDayOfMonth)(month), "d"));

      for (let j = start; j < end; j++) {
        let currentDay = (0, _dateFns.addDays)(month, j);
        const ElementDateDayItem = marked ? _styled.DateDayItemMarked : _styled.DateDayItem;
        days.push( /*#__PURE__*/_react.default.createElement(ElementDateDayItem, {
          id: "".concat(getId(currentDay)),
          style: getStyles(currentDay),
          key: currentDay,
          onClick: () => onDateClick(currentDay)
        }, /*#__PURE__*/_react.default.createElement(_styled.DayLabel, null, (0, _dateFns.format)(currentDay, dayFormat)), /*#__PURE__*/_react.default.createElement(_styled.DateLabel, null, (0, _dateFns.format)(currentDay, dateFormat)), getMarked(currentDay)));
      }

      months.push( /*#__PURE__*/_react.default.createElement(_styled.MonthContainer, {
        key: month
      }, /*#__PURE__*/_react.default.createElement(_styled.MonthYearLabel, {
        style: labelColor
      }, (0, _dateFns.format)(month, labelFormat || "MMMM yyyy")), /*#__PURE__*/_react.default.createElement(_styled.DaysContainer, {
        style: i === 0 ? firstSection : null
      }, days)));
      days = [];
    }

    return /*#__PURE__*/_react.default.createElement(_styled.DateListScrollable, {
      id: "container"
    }, months);
  };

  const onDateClick = day => {
    setSelectedDate(day);

    if (getSelectedDay) {
      getSelectedDay(day);
    }
  };

  (0, _react.useEffect)(() => {
    if (getSelectedDay) {
      if (selectDate) {
        getSelectedDay(selectDate);
      } else {
        getSelectedDay(startDate);
      }
    }
  }, []);
  (0, _react.useEffect)(() => {
    if (selectDate) {
      if (!(0, _dateFns.isSameDay)(selectedDate, selectDate)) {
        setSelectedDate(selectDate);
        setTimeout(() => {
          let view = document.getElementById("selected");

          if (view) {
            view.scrollIntoView({
              behavior: "smooth",
              inline: "center",
              block: "nearest"
            });
          }
        }, 20);
      }
    }
  }, [selectDate]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, renderDays());
};

var _default = DateView;
exports.default = _default;