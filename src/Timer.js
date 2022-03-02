import React, { useState, useEffect } from "react";

import './Timer.css'

function Timer() {

  const [timer, setTimer] = useState(10*60);

  
  useEffect(() => {
    if (timer === 0) {
      setTimer(600)
      return
    }

    setTimeout(() => {
      setTimer(state => state - 1)
    }, 1000);
  }, [timer]);

  return (
    <div className="container">
      {String(Math.floor(timer/60)).padStart('2', 0)}:
      {String(Math.floor(timer%60)).padStart('2', 0)}
    </div>

  );
}

export default Timer;