import React from "react";

import "./SearchBox.scss";

const SearchBox = (props) => {
  return (
    <section className="search-box">
      <input
        spellCheck="false"
        type="text"
        placeholder="Filter By Name"
        id="search"
        name="search"
        onChange={(e) => props.handleSearch(e.target.value)}
        value={props.searchString}
      />
    </section>
  );
};

export default SearchBox;
