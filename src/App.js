import React, { Component } from "react";
import "./App.css";
import { Route, BrowserRouter as Router } from "react-router-dom";
import { Header } from "./components";
import { Home, Category } from "./pages";

class App extends Component {
  render() {
    return (
      <Router>
        <React.Fragment>
          <Header />
          <Route exact path="/" component={Home} />
          <Route path="/category" component={Category} />
        </React.Fragment>
      </Router>
    );
  }
}

export default App;
