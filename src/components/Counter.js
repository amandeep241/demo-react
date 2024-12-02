import { useState } from 'react';

function Counter() {

  const [count, setCount] = useState(0)
  return (
    <div>
      <h2>Count: {count}</h2> 
      <button onClick={() => setCount((prevCount) => prevCount + 1)}> click Me</button>
    </div>
  );
}

export default Counter;
