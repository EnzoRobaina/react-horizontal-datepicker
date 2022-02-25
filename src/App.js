import React from "react";
import DatePicker from "./components/DatePicker";

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
        selectDate={new Date(2021, 9, 1)}
        getSelectedDay={selectedDay}
        color={"#ff0000"}
      />
    </div>
  );
}

export default App;
