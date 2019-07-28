import React from "react";
import DriversList from "./DriversList";
import './App.css';

const App = () => (
  <div className="app">
    <div className="header">
      <h2 className="header__title">Formula 1 drivers - 2019</h2>
    </div>
    <DriversList />
  </div>
);

export default App;