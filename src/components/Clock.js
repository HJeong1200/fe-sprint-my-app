import { useState, useEffect } from "react";

function Clock() {
  let current = new Date().toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
  });

  const [time, setTime] = useState(current);

  useEffect(() => {
    const timer = setInterval(
      () =>
        setTime(
          new Date().toLocaleTimeString("en-US", {
            hour: "2-digit",
            minute: "2-digit",
          })
        ),
      1000
    );

    return function cleanup() {
      clearInterval(timer);
    };
  });

  return <div>{time}</div>;
}

export default Clock;
