import React from "react";
import DatePicker from "./dist/components/DatePicker";

function App() {
  const selectedDay = (val) => {
    console.log(val);
  };

  const startDate = new Date(2010, 0, 1);

  return (
    <div className="App">
      <h1>Ola</h1>
      <DatePicker
        startDate={startDate}
        days={366 * 25}
        type="month"
        selectDate={new Date(2021, 9, 1)}
        getSelectedDay={selectedDay}
        labelFormat={"MMMM yyyy"}
        color={"#374e8c"}
      />
    </div>
  );
}

export default App;
