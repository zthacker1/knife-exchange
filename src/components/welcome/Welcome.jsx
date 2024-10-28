import React, { useEffect, useState } from "react";
import "./Welcome.css";

export const Welcome = () => {
  const [counter, setCounter] = useState(203498);

  useEffect(() => {
    const updateCounter = () => {
      setCounter(
        (prevCounter) => prevCounter + Math.floor(Math.random() * 10) + 1
      );

      const nextUpdate = Math.floor(Math.random() * 4) + 3;

      setTimeout(updateCounter, nextUpdate * 1000);
    };

    updateCounter();

    return () => clearTimeout(updateCounter);
  }, []);

  return (
    <div className="welcome-container">
      <h1>
        <span>Welcome to Knife Exchange</span>
        <div>World's best place to buy, sell, and trade knives</div>
        <div> </div>
        <div className="counter">Total Knives Exchanged: {counter}</div>
      </h1>
    </div>
  );
}