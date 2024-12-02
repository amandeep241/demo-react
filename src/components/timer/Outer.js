import { useState } from 'react'
import Timer from './Timer'



const Outer = () => {
  const [toggleTimer, setToggleTimer] = useState(true)

  return (
    <>
      { toggleTimer && <Timer displayText="Current time is"/>}
      <button onClick={() => setToggleTimer((prevToggle) => !prevToggle)}>Toggle Timer</button>
    </>
  )
}

export default Outer