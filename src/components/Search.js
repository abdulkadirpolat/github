import React from "react";
import "../style/search.css";

function Search(props) {
  const formSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <form onSubmit={formSubmit} className="repos-search">
      <input
        onChange={props.searchRepoProps}
        id="repository"
        type="text"
        placeholder="Find a repository..."
      />
    </form>
  );
}
export default Search;
