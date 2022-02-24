/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import {
  addDays,
  addMonths,
  differenceInMonths,
  format,
  isSameDay,
  lastDayOfMonth,
  startOfMonth,
} from "date-fns";
import {
  MarkedLabel,
  DateDayItemMarked,
  DateDayItem,
  DayLabel,
  DateLabel,
  MonthContainer,
  MonthYearLabel,
  DaysContainer,
  DateListScrollable,
} from "./styled";

const DateView = ({
  startDate,
  lastDate,
  selectDate,
  getSelectedDay,
  primaryColor,
  labelFormat,
  marked,
}) => {
  const [selectedDate, setSelectedDate] = useState(null);
  const firstSection = { marginLeft: "40px" };
  const selectedStyle = {
    fontWeight: "bold",
    width: "45px",
    height: "45px",
    borderRadius: "50%",
    border: `2px solid ${primaryColor}`,
    color: primaryColor,
  };
  const labelColor = { color: primaryColor };
  const markedStyle = { color: "#8c3737", padding: "2px", fontSize: 12 };

  const getStyles = (day) => {
    return isSameDay(day, selectedDate) ? selectedStyle : null;
  };

  const getId = (day) => {
    return isSameDay(day, selectedDate) ? "selected" : "";
  };

  const getMarked = (day) => {
    console.log({ marked });
    if (!marked) {
      return "";
    }
    let markedRes = marked.find((i) => isSameDay(i.date, day));
    if (markedRes) {
      if (!markedRes?.marked) {
        return;
      }

      return (
        <MarkedLabel style={{ ...(markedRes?.style ?? markedStyle) }}>
          {markedRes.text}
        </MarkedLabel>
      );
    }

    return "";
  };

  const renderDays = () => {
    const dayFormat = "E";
    const dateFormat = "d";

    const months = [];
    let days = [];

    for (let i = 0; i <= differenceInMonths(lastDate, startDate); i++) {
      let start, end;
      const month = startOfMonth(addMonths(startDate, i));

      start = i === 0 ? Number(format(startDate, dateFormat)) - 1 : 0;
      end =
        i === differenceInMonths(lastDate, startDate)
          ? Number(format(lastDate, "d"))
          : Number(format(lastDayOfMonth(month), "d"));

      for (let j = start; j < end; j++) {
        let currentDay = addDays(month, j);

        const ElementDateDayItem = marked ? DateDayItemMarked : DateDayItem;

        days.push(
          <ElementDateDayItem
            id={`${getId(currentDay)}`}
            style={getStyles(currentDay)}
            key={currentDay}
            onClick={() => onDateClick(currentDay)}
          >
            <DayLabel>{format(currentDay, dayFormat)}</DayLabel>
            <DateLabel>{format(currentDay, dateFormat)}</DateLabel>
            {getMarked(currentDay)}
          </ElementDateDayItem>
        );
      }
      months.push(
        <MonthContainer key={month}>
          <MonthYearLabel style={labelColor}>
            {format(month, labelFormat || "MMMM yyyy")}
          </MonthYearLabel>
          <DaysContainer style={i === 0 ? firstSection : null}>
            {days}
          </DaysContainer>
        </MonthContainer>
      );
      days = [];
    }

    return <DateListScrollable id={"container"}>{months}</DateListScrollable>;
  };

  const onDateClick = (day) => {
    setSelectedDate(day);
    if (getSelectedDay) {
      getSelectedDay(day);
    }
  };

  useEffect(() => {
    if (getSelectedDay) {
      if (selectDate) {
        getSelectedDay(selectDate);
      } else {
        getSelectedDay(startDate);
      }
    }
  }, []);

  useEffect(() => {
    if (selectDate) {
      if (!isSameDay(selectedDate, selectDate)) {
        setSelectedDate(selectDate);
        setTimeout(() => {
          let view = document.getElementById("selected");
          if (view) {
            view.scrollIntoView({
              behavior: "smooth",
              inline: "center",
              block: "nearest",
            });
          }
        }, 20);
      }
    }
  }, [selectDate]);

  return <React.Fragment>{renderDays()}</React.Fragment>;
};

export default DateView;
