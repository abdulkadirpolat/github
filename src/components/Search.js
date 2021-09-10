import React from "react";
import "../style/search.css";

function Search(props) {
  return (
    <div className="repos-search">
      <input id="repository" type="text" placeholder="Find a repository..." />
    </div>
  );
}
export default Search;
