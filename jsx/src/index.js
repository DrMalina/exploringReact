//Import the React and ReactDom Lib
import React from "react";
import ReactDOM from "react-dom";

//Create a react component
const App = () => {
  return <div>Hello there!</div>;
};

//Take the react component and show it on the screen
ReactDOM.render(<App />, document.querySelector("#root"));
