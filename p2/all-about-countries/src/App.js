import React, { Component } from "react";
import "./App.css";
import Search from "./components/Search";
import { Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <React.Fragment>
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
      </React.Fragment>
    );
  }
}

export default App;
