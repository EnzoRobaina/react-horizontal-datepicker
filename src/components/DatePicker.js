/* eslint-disable react-hooks/exhaustive-deps */
import { addDays } from "date-fns";
import React from "react";
import hexToRgb from "../global/helpers/hexToRgb";
import DateView from "./DateView";
import MonthView from "./MonthView";
import { Button, ButtonWrapper, Container } from "./styled";
import * as Locales from "date-fns/locale";

const DatePicker = ({
  locale = "enUS",
  color = "#000000",
  className = "",
  startDate = new Date(),
  days = 90,
  type,
  ...props
}) => {
  const _locale = Locales[locale] ?? Locales["enUS"];
  const next = (event) => {
    event.preventDefault();
    const e = document.getElementById("container");
    const width = e ? e.getBoundingClientRect().width : null;
    e.scrollBy({
      left: width - 60,
      behavior: "smooth",
    });
    // e.scrollLeft += width - 60;
  };

  const prev = (event) => {
    event.preventDefault();
    const e = document.getElementById("container");
    const width = e ? e.getBoundingClientRect().width : null;
    e.scrollBy({
      left: -(width - 60),
      behavior: "smooth",
    });
    // e.scrollLeft -= width - 60;
  };

  const primaryColor = color
    ? color.indexOf("rgb") > 0
      ? color
      : hexToRgb(color)
    : "rgb(54, 105, 238)";

  const lastDate = addDays(startDate, days || 90);

  let buttonzIndex = { zIndex: 2 };
  let buttonStyle = { background: primaryColor };
  let Component = DateView;

  if (type === "month") {
    buttonzIndex = { zIndex: 5 };
    Component = MonthView;
    buttonStyle = { background: primaryColor, marginBottom: "5px" };
  }

  return (
    <Container className={className}>
      <ButtonWrapper style={buttonzIndex}>
        <Button className="left" style={buttonStyle} onClick={prev} />
      </ButtonWrapper>
      <Component
        primaryColor={primaryColor}
        startDate={startDate}
        lastDate={lastDate}
        locale={_locale}
        {...props}
      />
      <ButtonWrapper style={buttonzIndex}>
        <Button className="right" style={buttonStyle} onClick={next} />
      </ButtonWrapper>
    </Container>
  );
};

export default DatePicker;
