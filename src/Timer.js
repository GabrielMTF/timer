import React, { useState, useEffect } from "react";

function App() {

  const [timer, setTimer] = useState(10*60);

  
  useEffect(() => {
    if (timer === 0) {
      setTimer(10)
      return
    }

    setTimeout(() => {
      setTimer(state => state - 1)
    }, 1000);
  }, [timer]);

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      {String(Math.floor(timer/60)).padStart('2', 0)}:
      {String(Math.floor(timer%60)).padStart('2', 0)}
    </div>

  );
}

export default App;