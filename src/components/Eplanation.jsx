import { useState, useEffect, useRef } from "react";

// Custom Hook: useCountdown
// This hook manages a countdown timer logic. It takes an initial time (in seconds) as an argument
// and returns the current time and a reset function.
const useCountdown = (initialTime) => {
  // useState hook to store the current time in the countdown.
  // The initial value of 'time' is set to the 'initialTime' passed to the hook.
  const [time, setTime] = useState(initialTime);

  // useRef hook to store a reference to the interval ID.
  // This allows us to control the interval (start, stop, clear) without causing re-renders.
  const intervalRef = useRef(null);

  // useEffect hook to handle the countdown logic.
  // This hook is responsible for setting up the interval that decrements the 'time' state every second.
  useEffect(() => {
    // Only start the interval if 'time' is greater than 0 (i.e., countdown is still running).
    if (time > 0) {
      // Set an interval that updates the 'time' state every second (1000ms).
      intervalRef.current = setInterval(() => {
        setTime((prev) => prev - 1); // Decrement the previous time value by 1 second.
      }, 1000);
    }

    // Cleanup function: This ensures that the interval is cleared when the component using the hook unmounts
    // or when the countdown finishes (time reaches 0). This prevents memory leaks.
    return () => clearInterval(intervalRef.current);

    // The effect runs when 'time' changes, meaning it will update whenever the 'time' state changes.
  }, [time]);

  // Reset function to restart the countdown by resetting the time back to the initial value.
  // This is useful for allowing the user to reset the countdown.
  const reset = () => setTime(initialTime);

  // The hook returns two values: the current 'time' and the 'reset' function.
  // Components using this hook can access the current time and reset the countdown when needed.
  return { time, reset };
};

export default useCountdown;
