import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./Spinner";
import useLocation from "./useLocation";

//With Hooks
const App = () => {
  const [lat, errMsg] = useLocation();

  let content;

  if (errMsg) {
    content = <div>Error: {errMsg}</div>;
  } else if (lat) {
    content = <SeasonDisplay lat={lat} />;
  } else {
    content = <Spinner msg="Please accept location request" />;
  }

  return <div className="border red">{content}</div>;
};

//With Class
/* class App extends React.Component {
  state = { lat: null, errorMsg: "" };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      postion => this.setState({ lat: postion.coords.latitude }),
      err => this.setState({ errorMsg: err.message })
    );
  }

  renderContent() {
    if (this.state.errorMsg && !this.state.lat) {
      return <div>Error: {this.state.errorMsg}</div>;
    }

    if (!this.state.errorMsg && this.state.lat) {
      return <SeasonDisplay lat={this.state.lat} />;
    }

    return <Spinner msg="Please accept location request" />;
  }

  render() {
    return <div className="border red">{this.renderContent()}</div>;
  }
} */

ReactDOM.render(<App />, document.querySelector("#root"));
