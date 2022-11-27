import React, { useState } from "react";
import Calendar from "react-calendar";
import "./Calendar.css";

function MyCalendar() {
  const [value, onChange] = useState(new Date());

  return (
    <div className="calendar-wrapper">
      <Calendar onChange={onChange} value={value} />
    </div>
  );
}

export default MyCalendar;
