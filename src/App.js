import React from 'react';
import Weather from './Weather';

import './App.css';

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Jamaica"/>
        <footer>
          <p> This project was coded by Alyssa Jones and is <a href=" " target=" " rel="noreferrer">
            {" "}
            Open sourced
            </a>
            </p>
        </footer>
      </div>
    </div>
  );
}

