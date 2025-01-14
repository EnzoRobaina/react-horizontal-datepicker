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
import defaultLocale from "date-fns/locale/en-US";
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
  locale = defaultLocale,
}) => {
  const [selectedDate, setSelectedDate] = useState(null);
  const firstSection = { marginLeft: "40px" };
  const selectedStyle = {
    fontWeight: "bold",
    width: "50px",
    height: "50px",
    borderRadius: "50%",
    border: `2px solid ${primaryColor}`,
    color: primaryColor,
    alignItems: "center",
    justifyContent: "center",
  };
  const labelColor = { color: primaryColor };
  const markedStyle = { color: primaryColor, padding: "2px", fontSize: 12 };

  const getStyles = (day) => {
    return isSameDay(day, selectedDate) ? selectedStyle : null;
  };

  const getId = (day) => {
    return isSameDay(day, selectedDate) ? "selected" : "";
  };

  const getMarked = (day) => {
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

      start =
        i === 0 ? Number(format(startDate, dateFormat, { locale })) - 1 : 0;
      end =
        i === differenceInMonths(lastDate, startDate)
          ? Number(format(lastDate, "d", { locale }))
          : Number(format(lastDayOfMonth(month), "d", { locale }));

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
            <DayLabel>
              {format(currentDay, dayFormat, { locale }).slice(0, 3)}
            </DayLabel>
            <DateLabel>{format(currentDay, dateFormat, { locale })}</DateLabel>
            {getMarked(currentDay)}
          </ElementDateDayItem>
        );
      }
      months.push(
        <MonthContainer key={month}>
          <MonthYearLabel style={labelColor}>
            {format(month, labelFormat || "MMMM yyyy", { locale })}
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
