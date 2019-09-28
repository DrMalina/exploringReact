import React from "react";
import LanguageContext from "../contexts/LanguageContext";

class LanguageSelector extends React.Component {
  static contextType = LanguageContext;

  render() {
    return (
      <div>
        Select a language:
        <i
          onClick={() => this.context.onLanguageChange("english")}
          className="flag us"
        ></i>
        <i
          onClick={() => this.context.onLanguageChange("polish")}
          className="flag pl"
        ></i>
      </div>
    );
  }
}

export default LanguageSelector;
