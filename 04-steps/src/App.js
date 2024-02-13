import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  const [step, setStep] = useState(1);
  const [name, setName] = useState({ nickname: "Ju" });

  function handlePrevious() {
    if (step > 1) setStep(step - 1);
    setName({ nickname: "Lila" });
    // mutating objects as below is a BAD practice. React is all about immutability and functional state updates.
    // name.nickname = "Lila"
  }
  function handleNext() {
    if (step < 3) setStep(step + 1);
    setName({ nickname: "Ju" });
  }

  return (
    <div className="steps">
      <div className="numbers">
        <div className={step >= 1 ? "active" : ""}>1</div>
        <div className={step >= 2 ? "active" : ""}>2</div>
        <div className={step >= 3 ? "active" : ""}>3</div>
      </div>
      <p className="message">
        Step {step}: {messages[step - 1]} {name.nickname}
      </p>
      <div className="buttons">
        <button
          style={{ backgroundColor: "#7950f2", color: "#ffff" }}
          onClick={handlePrevious}
          // onMouseEnter={() => alert("TEST")} // when hover over
        >
          Previous
        </button>
        <button
          style={{ backgroundColor: "#7950f2", color: "#ffff" }}
          onClick={handleNext}
        >
          Next
        </button>
      </div>
    </div>
  );
}
