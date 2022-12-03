import React from "react";

function Timer(props) {
  const { seconds, minutes, isRunning, start, pause } = props;

  const handleTimer = () => {
    isRunning ? pause() : start();
  };

  return (
    <div className="timer">
      <button className="timer-button" onClick={handleTimer}>
        {isRunning ? "◼︎" : "▶️"}
      </button>
      <span>
        {minutes < 10 ? "0" : null}
        {minutes}:{seconds < 10 ? "0" : null}
        {seconds}
      </span>
    </div>
  );
}

export default Timer;
