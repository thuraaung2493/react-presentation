import React from "react";
import "./App.css";
import HelloMessage from "./components/HelloMessage";
import Timer from "./components/Timer";

function App() {
  return (
    <div className="App">
      <HelloMessage message="Thura" />
      <Timer />
    </div>
  );
}

export default App;
