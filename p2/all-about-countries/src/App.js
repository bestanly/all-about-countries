import React, { Component } from "react";
import "./App.css";
import Search from "./components/Search";

class App extends Component {
  render() {
    return (
      <div className="container">
        <header className="App-header" />
        <main>
          <Search />
        </main>
      </div>
    );
  }
}

export default App;
