// TimerDisplay.jsx
import React from "react";

const TimerDisplay = ({ time }) => {
  return (
    <div className="text-5xl font-mono text-gray-900 mb-4">
      {time} <span className="text-xl">seconds</span>
    </div>
  );
};

export default TimerDisplay;
