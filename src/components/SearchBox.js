import React, { useState, useEffect, useCallback } from "react";

import useDebounce from "../hooks/useDebounce";

import "./SearchBox.scss";

const SearchBox = (props) => {
  const [value, setValue] = useState("");
  // const term = useDebounce(value, 400);

  // const onSearch = useCallback(props.onSearch, [term]);

  // useEffect(() => {
  //   onSearch(term);
  // }, [term, onSearch]);
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
