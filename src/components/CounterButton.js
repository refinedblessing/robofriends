import React, { useState } from 'react';

const CounterButton = ({ color }) => {
  const [counter, setCounter] = useState(0);

  return (
    <button
      id="counter"
      color={color}
      onClick={() => setCounter(counter + 1)}
      >
      Count: {counter}
    </button>
  )
}

export default CounterButton;
