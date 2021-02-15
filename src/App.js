import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from "pages/Home.jsx"

export default function App() {
  return (
    <Router>
        <Switch>
          <Route path="/" component={Home} exact/>
        </Switch>
    </Router>
  );
}

