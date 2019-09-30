import React, { useState } from "react";
import RecipeList from "./RecipeList";

const App = () => {
  const [term, setTerm] = useState("");
  const [query, searchQuery] = useState("chicken");

  const onFormSubmit = e => {
    e.preventDefault();
    searchQuery(term);
    setTerm("");
  };

  return (
    <div className="App" style={{ textAlign: "center" }}>
      <form className="search-form" onSubmit={onFormSubmit}>
        <input
          className="search-bar"
          type="text"
          value={term}
          onChange={e => setTerm(e.target.value)}
        />
        <button className="search-button" type="submit">
          Search
        </button>
      </form>
      <RecipeList query={query} />
    </div>
  );
};

export default App;
