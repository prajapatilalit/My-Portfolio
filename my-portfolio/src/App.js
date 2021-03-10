import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import "./App.css";
import Navigation from "./Components/Navigation/navigation";

function App() {
  return (
    <div className="App">
      <h1>Lalit Kumar</h1>
      <Router>
        <Navigation />
      </Router>
    </div>
  );
}

export default App;
