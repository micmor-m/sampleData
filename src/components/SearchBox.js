import React, { useState } from "react";

import useDebounce from "../hooks/useDebounce";

import "./SearchBox.scss";

const SearchBox = (props) => {
  const [value, setValue] = useState("");

  useDebounce(() => props.onSearch(value), 400);

  return (
    <section className="search-box">
      <input
        type="text"
        placeholder="Filter By Name"
        spellCheck="false"
        name="search"
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
    </section>
  );
};

export default SearchBox;
