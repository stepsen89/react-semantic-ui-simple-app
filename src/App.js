import React from "react";
import "./App.css";
import Todos from "./components/Todos";

class App extends React.Component() {
  state = [
    {
      title: "Title",
      name: "Take out trash",
      index: 1
    },
    {
      title: "Title",
      name: "Take out trash",
      index: 1
    },
    {
      title: "Title",
      name: "Take out trash",
      index: 1
    }
  ];

  render() {
    return (
      <div className="App">
        <Todos />
      </div>
    );
  }
}

export default App;
