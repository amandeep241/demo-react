import { useState } from 'react';
function HomePage() {

  const [message, setMessage] = useState("Hello Word!")
  const toggleMessage = () => {
    const newMessage = (message == "Hello World") ? "Welcome to home page" : "Hello World"
    setMessage(newMessage)
  }

  return (
    <div>
      <h1>
        {message}
      </h1>
      <button onClick={toggleMessage}>Change Text</button>
    </div>
  );
}

export default HomePage;
