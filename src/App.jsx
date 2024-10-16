// App.jsx
import React from "react";
import CountdownTimer from "./components/CountdownTimer";

const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 flex flex-col justify-center items-center p-6">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold text-white mb-4">Countdown Timer</h1>
        <p className="text-lg text-purple-100 mb-6 max-w-lg mx-auto">
          A fun little project to test my understanding of React hooks. Built
          using <code className="text-white font-semibold">useState</code>,{" "}
          <code className="text-white font-semibold">useEffect</code>,{" "}
          <code className="text-white font-semibold">useRef</code>, and a custom
          hook.
        </p>
        <div className="bg-white shadow-2xl rounded-xl p-8 max-w-md mx-auto transition-transform transform hover:scale-105 duration-300">
          <CountdownTimer />
        </div>
      </div>

      <div className="max-w-4xl mx-auto p-8 bg-white shadow-xl rounded-xl my-12 space-y-6">
        <h3 className="text-3xl font-bold text-purple-700 mb-4">
          State (<code>useState</code>)
        </h3>
        <p className="text-gray-700 text-base">
          The{" "}
          <code className="bg-gray-100 text-gray-900 px-2 py-1 rounded">
            useState
          </code>{" "}
          hook initializes and tracks the current time in the countdown.{" "}
          <code className="bg-gray-100 text-gray-900 px-2 py-1 rounded">
            time
          </code>{" "}
          is the current state (countdown time), and{" "}
          <code className="bg-gray-100 text-gray-900 px-2 py-1 rounded">
            setTime
          </code>{" "}
          is used to update this state.
        </p>

        <h3 className="text-3xl font-bold text-purple-700 mb-4">
          Reference (<code>useRef</code>)
        </h3>
        <p className="text-gray-700 text-base">
          <code className="bg-gray-100 text-gray-900 px-2 py-1 rounded">
            useRef
          </code>{" "}
          is used to store the ID of the interval (from{" "}
          <code className="bg-gray-100 text-gray-900 px-2 py-1 rounded">
            setInterval
          </code>
          ). This reference allows us to control (clear, start, stop) the
          interval without triggering re-renders. It’s crucial because we don’t
          want the component to re-render each time the interval is updated.
        </p>

        <h3 className="text-3xl font-bold text-purple-700 mb-4">
          Effect (<code>useEffect</code>)
        </h3>
        <p className="text-gray-700 text-base">
          The{" "}
          <code className="bg-gray-100 text-gray-900 px-2 py-1 rounded">
            useEffect
          </code>{" "}
          hook is responsible for setting up and running the countdown logic. It
          sets an interval that decreases the{" "}
          <code className="bg-gray-100 text-gray-900 px-2 py-1 rounded">
            time
          </code>{" "}
          by 1 every second. The cleanup function{" "}
          <code className="bg-gray-100 text-gray-900 px-2 py-1 rounded">
            return () =`&gt;`? clearInterval(intervalRef.current)
          </code>{" "}
          ensures that when the countdown finishes or the component using the
          hook is unmounted, the interval is cleared to avoid memory leaks.
        </p>

        <h3 className="text-3xl font-bold text-purple-700 mb-4">
          Reset Function
        </h3>
        <p className="text-gray-700 text-base">
          This function allows the countdown to be reset to its initial time.
          The{" "}
          <code className="bg-gray-100 text-gray-900 px-2 py-1 rounded">
            reset
          </code>{" "}
          function can be called from the component to restart the timer.
        </p>

        <h3 className="text-3xl font-bold text-purple-700 mb-4">
          Return Value
        </h3>
        <p className="text-gray-700 text-base">
          The hook returns an object containing the{" "}
          <code className="bg-gray-100 text-gray-900 px-2 py-1 rounded">
            time
          </code>{" "}
          state and the{" "}
          <code className="bg-gray-100 text-gray-900 px-2 py-1 rounded">
            reset
          </code>{" "}
          function. This enables components using this hook to display the
          current countdown time and trigger a reset when needed.
        </p>

        <h3 className="text-3xl font-bold text-purple-700 mb-4">Summary</h3>
        <p className="text-gray-700 text-base">
          The{" "}
          <code className="bg-gray-100 text-gray-900 px-2 py-1 rounded">
            useCountdown
          </code>{" "}
          hook encapsulates the entire countdown timer logic, managing state{" "}
          <code className="bg-gray-100 text-gray-900 px-2 py-1 rounded">
            time
          </code>
          , side effects (using intervals), and references{" "}
          <code className="bg-gray-100 text-gray-900 px-2 py-1 rounded">
            intervalRef
          </code>
          . It is designed to be reusable in any component that needs countdown
          functionality. The hook efficiently manages the timer state and cleans
          up the interval to prevent memory leaks.
        </p>
      </div>
    </div>
  );
};

export default App;
