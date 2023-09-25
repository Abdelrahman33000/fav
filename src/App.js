import React from "react";
import { BrowserRouter as Router, Switch, Route ,} from "react-router-dom";
import Home from "./Home";
import ProductDetails from "./ProductDetails";
import NotFound from "./NotFound";
import "./App.css";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/product/:id" component={ProductDetails} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;




