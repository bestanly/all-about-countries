import React, { Component } from "react";
import "./App.css";
import Search from "./components/Search";
import { Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="app">
        <header>
          <div className="title">
            <h2>All Country Information</h2>
          </div>
        </header>
        <div className="container">
          <main>
            <Route path="/search/:code" component={Search} />
            <Route path="/" exact component={Search} />
          </main>
        </div>
        <footer>
          <h6>Copyright © 2019 by Stanly Rodriguez</h6>
        </footer>
      </div>
    );
  }
}

export default App;
