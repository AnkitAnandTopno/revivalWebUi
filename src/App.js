import React, { Component } from "react";
import "./App.css";
import { Route, BrowserRouter as Router } from "react-router-dom";
import { Header } from "./components";
import { Home, Category, Gallery, AboutUs, JoinUs, AddSongs } from "./pages";

class App extends Component {
  render() {
    return (
      <Router>
        <React.Fragment>
          <Route exact path="/" component={Home} />
          <Route path="/gallery" component={Gallery} />
          <Route path="/aboutUs" component={AboutUs} />
          <Route path="/addSongs" component={AddSongs} />
          <Route path="/joinNow" component={JoinUs} />
        </React.Fragment>
      </Router>
    );
  }
}

export default App;
