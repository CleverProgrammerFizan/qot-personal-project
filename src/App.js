import React, { useEffect } from 'react'
import { useState } from 'react/cjs/react.development'

import './App.css'
import Header from './Header';

const App = () => {
  const [quotes, setQuotes] = useState('');

  const getQuotes = () => {
    fetch("https://type.fit/api/quotes")
    .then(res => res.json())
    .then(data => {
      let randomNum = Math.floor(Math.random() * data.length);
      setQuotes(data[randomNum]);
    });
  };

  useEffect(() => {
    getQuotes();
  }, []);


  return (
    <div className="App">
      <div className="header">
        <Header />
      </div>
      
      <div className="quote__card">
        <div className="quotes">
            <p>{quotes.text}</p>
            <p>- {quotes.author}</p> 
        </div>
        
        <div className="btn">
          <button onClick={getQuotes}>Get a new qoute</button>
        </div>
      </div>
    </div>
  )
}

export default App
