import React from "react";
import { Switch, Route } from "react-router-dom";

import HomePage from "./pages/homepage/hompage.component";

import "./App.css";

const HastPage = () => (
  <div>
    <h1> HATS PAGE</h1>
  </div>
);

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop/hats" component={HastPage} />
      </Switch>
    </div>
  );
}

export default App;
