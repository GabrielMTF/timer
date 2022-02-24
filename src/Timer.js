import React, { useState, useEffect } from 'react';

import './Timer.css';

function Timer(duration, display) {

  const [clock, setClock] = useState('00:00')

  return (
    <div className='container'>
      {clock}
    </div>
  )
}

export default Timer;