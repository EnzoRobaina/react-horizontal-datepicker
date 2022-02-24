/* eslint-disable react-hooks/exhaustive-deps */
import { addDays } from "date-fns";
import React from "react";
import hexToRgb from "../global/helpers/hexToRgb";
import { DateView } from "./DateView";
import { MonthView } from "./MonthView";
import { Button, ButtonWrapper, Container } from "./styled";

const DatePicker = (props) => {
  const next = (event) => {
    event.preventDefault();
    const e = document.getElementById("container");
    const width = e ? e.getBoundingClientRect().width : null;
    e.scrollLeft += width - 60;
  };

  const prev = (event) => {
    event.preventDefault();
    const e = document.getElementById("container");
    const width = e ? e.getBoundingClientRect().width : null;
    e.scrollLeft -= width - 60;
  };

  const primaryColor = props.color
    ? props.color.indexOf("rgb") > 0
      ? props.color
      : hexToRgb(props.color)
    : "rgb(54, 105, 238)";

  const startDate = props.startDate || new Date();
  const lastDate = addDays(startDate, props.days || 90);

  let buttonzIndex = { zIndex: 2 };
  let buttonStyle = { background: primaryColor };
  let Component = DateView;

  if (props.type === "month") {
    buttonzIndex = { zIndex: 5 };
    Component = MonthView;
    buttonStyle = { background: primaryColor, marginBottom: "5px" };
  }

  return (
    <Container>
      <ButtonWrapper style={buttonzIndex}>
        <Button style={buttonStyle} onClick={prev}>
          &lt;
        </Button>
      </ButtonWrapper>
      <Component
        {...props}
        primaryColor={primaryColor}
        startDate={startDate}
        lastDate={lastDate}
      />
      <ButtonWrapper style={buttonzIndex}>
        <Button style={buttonStyle} onClick={next}>
          &gt;
        </Button>
      </ButtonWrapper>
    </Container>
  );
};

export default DatePicker;
