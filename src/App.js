import React from "react";
import "./App.css";

function App() {
const hs = { 
    textAlign: "center"
  };
  return (
    <div style={hs} >
      <h1 style = {{fontFamily: "cursive"}}>Hello!</h1>
      <h4 style= {{fontFamily: "monospace"}}>How are you?</h4>
      <h5 className = "App-weather-message">Today is a nice day!</h5>
    </div>
  );
}

export default App;
