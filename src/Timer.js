import React, { useState, useEffect } from 'react';

import './Timer.css';

function Timer() {

  const total = 600;

  let minutes = Math.floor(total % 3600 / 60);
  let seconds = Math.floor(total % 3600 % 60);

  const [clock, setClock] = useState(minutes + ":" + seconds)

  useEffect(() => {
    clock > 0 && setTimeout(() => setClock(clock - 1), 1000);
    return () => clearInterval(clock);
  }, [clock]);

  return (
    <div className='container'>

      <div>
        {clock}
      </div>
      <button>RESET</button>
    </div>
  )
}

export default Timer;