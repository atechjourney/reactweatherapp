import React from 'react';
import Weather from './Weather';

import './App.css';

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Jamaica" />
        <footer>
          This project was coded by Alyssa Jones and is <a href="https://github.com/atechjourney/reactweatherapp" target=" " rel="noreferrer">
            {" "}
            Open sourced on Github

          </a> {" "}
          and {" "}
          <a href="https://vermillion-blancmange-4bab0f.netlify.app/" target=" " rel="noreferrer">
            Hosted on Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}

