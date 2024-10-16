// useCountdown.js
import { useState, useEffect, useRef } from "react";

const useCountdown = (initialTime) => {
  const [time, setTime] = useState(initialTime);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (time > 0) {
      intervalRef.current = setInterval(() => {
        setTime((prev) => prev - 1);
      }, 1000);
    }

    return () => clearInterval(intervalRef.current); // Cleanup on unmount
  }, [time]);

  const reset = () => setTime(initialTime);

  return { time, reset };
};

export default useCountdown;
