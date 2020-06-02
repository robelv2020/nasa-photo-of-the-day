import React, {useState, useEffect, Component} from "react";

// Importing the style
import "./App.css";

// setting up for Components
import Card from './components/Cards.js'

// setting up for API
import axios from 'axios'

 

function App() {
  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p>
    </div>
  );
}

export default App;
