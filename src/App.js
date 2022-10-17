import React from 'react';
import './App.css';
import Background from "./components/Background.js"

function App() {
  return (
    <div className="App container">
      <header className="App-header" id="Time-display">
       <Background/>
      </header>
    </div>
  );
}

export default App;
