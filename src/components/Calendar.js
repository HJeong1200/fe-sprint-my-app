import React, { useState } from "react";
import Calendar from "react-calendar";
import "./Calendar.css";

function MyCalendar() {
  const [value, onChange] = useState(new Date());

  return (
    <Calendar
      onChange={onChange}
      value={value}
      next2Label={null}
      prev2Label={null}
    />
  );
}

export default MyCalendar;
