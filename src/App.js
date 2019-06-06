import React from "react";
import "./App.css";
import { Route } from "react-router-dom";
import { Home, About, Contact, Navigation } from "./components";

const App = () => (
  <React.Fragment>
    <div>
      <Navigation />
    </div>
<Route path="/" exact render={() => <Home/>} />
    <Route path="/about" render={() => <About />} />
    <Route path="/contact" render={() => <Contact />} />
  </React.Fragment>
);

export default App;
