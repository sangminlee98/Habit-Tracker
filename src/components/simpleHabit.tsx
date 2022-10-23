import React, { useCallback, useEffect, useRef, useState } from "react";

const SimpleHabit = () => {
  const [count, setCount] = useState(0);
  const spanRef = useRef<HTMLSpanElement>(null);

  const handleIncrement = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);
  useEffect(() => {
    console.log(`mounted & updated!: ${count}`);
  }, []);
  return (
    <li className="habit">
      <span ref={spanRef} className="habit-name">
        Reading
      </span>
      <span className="habit-count">{count}</span>
      <button className="habit-button habit-increase" onClick={handleIncrement}>
        <i className="fas fa-plus-square"></i>
      </button>
    </li>
  );
};

export default SimpleHabit;
