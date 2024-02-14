import { useState } from "react";

export default function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

function Steps() {
  const [step, setStep] = useState(0);

  function handlePreviousStep() {
    setStep((currentStep) => currentStep - 1);
  }
  function handleNextStep() {
    setStep((currentStep) => currentStep + 1);
  }

  return (
    <div>
      <p>Date Counter Challenge</p>
      <p>
        <button onClick={handlePreviousStep}>-</button>
        Step: {step}
        <button onClick={handleNextStep}>+</button>
      </p>
    </div>
  );
}

function Count() {
  const [count, setCount] = useState(0);

  function handlePreviousCount() {
    setCount((currentCount) => currentCount - 1);
  }
  function handleNextCount() {
    setCount((currentCount) => currentCount + 1);
  }

  return (
    <div>
      <p>
        <button onClick={handlePreviousCount}>-</button>
        Count: {count}
        <button onClick={handleNextCount}>+</button>
      </p>
    </div>
  );
}

function Counter() {
  return (
    <div>
      <Steps />
      <Count />
      <p> ? days from today is ?Date?</p>
    </div>
  );
}
