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

  return (
    <div>
      <div>
        <p>Date Counter Challenge</p>
        <button onClick={() => setJump((currentJump) => currentJump - 1)}>
          -
        </button>
        <span> Jump: {jump} </span>
        <button onClick={() => setJump((currentJump) => currentJump + 1)}>
          +
        </button>
      </div>
      <div>
        <button onClick={() => setCount((currentCount) => currentCount - jump)}>
          -
        </button>
        <span> Count: {count} </span>
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
      </div>
    </div>
  );
}
