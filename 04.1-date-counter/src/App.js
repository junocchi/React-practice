import { useState } from "react";

export default function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(0);
  const [jump, setJump] = useState(1);

  const date = new Date("february 14 2024");
  date.setDate(date.getDate() + count);

  function handleReset() {
    setCount(0);
    setJump(1);
  }

  return (
    <div>
      <div className="jump">
        <p>Date Counter Challenge</p>

        {/* range slider  */}
        <input
          type="range"
          min="0"
          max="10"
          value={jump}
          /* handle the event */
          onChange={(e) => setJump(Number(e.target.value))}
        />
        <span> Jump: {jump} </span>
      </div>
      <div>
        <button onClick={() => setCount((currentCount) => currentCount - jump)}>
          -
        </button>

        {/* input count field, between the - and + buttons */}
        <input
          type="text"
          value={count}
          /* handle the event */
          onChange={(e) => setCount(Number(e.target.value))}
        />

        <button onClick={() => setCount((currentCount) => currentCount + jump)}>
          +
        </button>
        <p>
          <span>
            {count === 0
              ? "Today is "
              : count > 0
              ? `${count} days from today is `
              : `${Math.abs(count)} days ago was `}
          </span>
          <span> {date.toDateString()} 🎉</span>
        </p>

        {/* conditionally render the reset button */}
        {count !== 0 || jump !== 1 ? (
          <div>
            <button onClick={handleReset}>Reset</button>
          </div>
        ) : null}
      </div>
    </div>
  );
}
