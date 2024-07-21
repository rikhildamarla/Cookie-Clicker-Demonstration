import React, { useState } from 'react';
import './App.css';
import cookie from './image-assets/full.png';
import cookieCrumbling from './image-assets/bite.png';

function App() {
  const [count, setCount] = useState(0);
  const [isCrumbling, setIsCrumbling] = useState(false);
  const [message, setMessage] = useState('');

  const handleClick = () => {
    if (count + 1 === 50) {
      setCount(count + 1);
      setMessage('You win!');
    } else {
      setCount(count + 1);
      setIsCrumbling(true);
      setTimeout(() => setIsCrumbling(false), 40);
    }
  };

  const handleRestart = () => {
    setCount(0);
    setMessage('');
  };

  return (
    <div className="App">
      <header className="App-header">
        COOKIE CLICKER! : BTG HACKATHON WORKSHOP
      </header>
      <h1>Cookies clicked: {count}</h1>
      {message && <h2>{message}</h2>}
      {message ? (
        <button onClick={handleRestart} className="restart-button">Restart</button>
      ) : (
        <img 
          src={isCrumbling ? cookieCrumbling : cookie} 
          alt="cookie" 
          onClick={handleClick} 
          className={`cookie ${isCrumbling ? 'fade-in' : ''}`}
        />
      )}
    </div>
  );
}

export default App;
