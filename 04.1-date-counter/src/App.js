import { useState } from "react";

export default function App() {
  return (
    <div className="App">
      <Steps />
      <Counter />
    </div>
  );
}
function Steps() {
  const [step, setStep] = useState(0);

  function handleNextStep() {
    setStep((currentStep) => currentStep + 1);
  }
  function handlePreviousStep() {
    setStep((currentStep) => currentStep - 1);
  }

  return (
    <div>
      <p>Date Counter Challenge</p>
      <p>Step: {step}</p>
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(0);

  function handleNextCount() {
    setCount((currentCount) => currentCount + 1);
  }
  function handlePreviousCount() {
    setCount((currentCount) => currentCount - 1);
  }

  return (
    <div>
      <p>Count:{count}</p>
    </div>
  );
}
