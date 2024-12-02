import { useState, useEffect } from 'react'

const Timer = (props) => {

  // used destructuring to fetch props
  const { displayText } = props
  
  const [time, setTimer] = useState(0)

  useEffect(() => {
    console.log("I'm running")
    const interval = setInterval(() => {
      console.log('I am running set interval')
      setTimer((prevTimer) => prevTimer + 1)
    }, 1000)

    //cleanup function: runs during unmount of Timer component
    return() => {
      console.log("unmount timer")
      clearInterval(interval)
    }

  }, [])

  return (
    <div>{displayText}: {time}</div>
    
  )
}

export default Timer