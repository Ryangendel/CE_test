import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from "./pages/About";

function App() {
  return (
    <Router>
      <div>
          <Route exact path="/" component={About} />
      </div>
    </Router>
  );
}

export default App;
