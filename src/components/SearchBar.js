import React, { useState } from "react";

const SearchBar = (props) => {
  const [term, setTerm] = useState("");

  const onFormSubmit = (e) => {
    e.preventDefault();
    props.onFormSubmit(term);
  };

  return (
    <div className="ui segment search-bar">
      <form onSubmit={onFormSubmit} className="ui form">
        <div className="field">
          <label>Search for a video</label>
          <input
            value={term}
            onChange={(e) => setTerm(e.target.value)}
            type="text"
          ></input>
        </div>
      </form>
    </div>
  );
};
export default SearchBar;
