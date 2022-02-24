"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/web.dom-collections.iterator.js");

require("core-js/modules/es.regexp.exec.js");

require("core-js/modules/es.string.split.js");

require("core-js/modules/es.string.replace.js");

require("core-js/modules/es.parse-int.js");

var _react = _interopRequireWildcard(require("react"));

var _dateFns = require("date-fns");

var _styled = require("./styled");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/* eslint-disable react-hooks/exhaustive-deps */
const MonthView = _ref => {
  let {
    startDate,
    lastDate,
    selectDate,
    getSelectedDay,
    primaryColor,
    labelFormat
  } = _ref;
  const [selectedDate, setSelectedDate] = (0, _react.useState)(null);
  const rgb = primaryColor.replace(/[^\d,]/g, "").split(",");
  const brightness = Math.round((parseInt(rgb[0]) * 299 + parseInt(rgb[1]) * 587 + parseInt(rgb[2]) * 114) / 1000);
  const textColour = brightness > 125 ? "black" : "white";
  const selectedStyle = {
    borderRadius: "0.7rem",
    background: "".concat(primaryColor),
    color: textColour
  };

  const getStyles = day => {
    return (0, _dateFns.isSameDay)(day, selectedDate) ? selectedStyle : null;
  };

  const getId = day => {
    return (0, _dateFns.isSameDay)(day, selectedDate) ? "selected" : "";
  };

  const renderDays = () => {
    const months = [];

    for (let i = 0; i <= (0, _dateFns.differenceInMonths)(lastDate, startDate); i++) {
      const month = (0, _dateFns.startOfMonth)((0, _dateFns.addMonths)(startDate, i));
      months.push( /*#__PURE__*/_react.default.createElement(_styled.MonthContainer, {
        id: "".concat(getId(month)),
        key: month,
        style: getStyles(month),
        onClick: () => onDateClick(month)
      }, /*#__PURE__*/_react.default.createElement(_styled.MonthYearLabel, null, (0, _dateFns.format)(month, labelFormat || "MMMM yyyy"))));
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

var _default = MonthView;
exports.default = _default;