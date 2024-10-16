// CountdownTimer.jsx
import React, { useState } from "react";
import TimerDisplay from "./TimerDisplay";
import useCountdown from "./useCountdown";

const CountdownTimer = () => {
  const [inputTime, setInputTime] = useState(60); // Default 60 seconds
  const { time, reset } = useCountdown(inputTime);

  const handleChange = (e) => setInputTime(Number(e.target.value));

  return (
    <div className="timer-container">
      <h1 className="text-2xl font-bold text-gray-700 mb-4">Countdown Timer</h1>
      <input
        type="number"
        className="border-2 border-gray-300 rounded-lg p-2 mb-4 text-center w-full focus:outline-none focus:ring-2 focus:ring-purple-600"
        value={inputTime}
        onChange={handleChange}
        placeholder="Set time in seconds"
      />
      <TimerDisplay time={time} />
      <button
        className="mt-4 bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-400"
        onClick={reset}
      >
        Reset Timer
      </button>
    </div>
  );
};

export default CountdownTimer;
