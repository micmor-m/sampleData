import React, { useState, useEffect, useRef } from "react";
import CommonCard from "components/CommonCard";
import SearchBox from "components/SearchBox";
import "./styles/variables.scss";
import "./styles/container.scss";

// Import data
import { sampleData } from "data/sampleData";

// Import helper function
import formatTimestamp from "./helpers/formatData.js";

function App() {
  /* Old code
  const [term, setTerm] = useState("");
  const [results, setResults] = useState([]);

  useEffect(() => {
    console.log("Filtering data...");

    const filteredData = sampleData.filter((item) => {
      return item.name.toLowerCase().includes(term.toLowerCase());
    });

    setResults([...filteredData]);
  }, [term]);
*/
  const [search, setSearch] = useState({
    term: "",
    results: [...sampleData],
  });
  // console.log("Term", search.term);
  const prev = useRef("");

  useEffect(() => {
    console.log("Filter data...");
    if (prev.current === "" && search.term === "") return;

    // setSearch((prev) => ({
    //   ...prev,
    // }));

    prev.current = search.term;

    //Filter data array
    const filteredData = sampleData.filter((item) => {
      return item.name.toLowerCase().includes(search.term.toLowerCase());
    });

    setSearch((search) => ({
      ...search,
      results: filteredData,
    }));
    // })
  }, [search.term]);

  return (
    <main className="layout">
      {/* <SearchBox onSearch={(term) => setTerm(term)} /> */}
      <SearchBox onSearch={(term) => setSearch({ ...search, term })} />
      <section className="container">
        {search.results.map((item) => {
          return (
            <CommonCard
              key={item.id}
              name={item.name}
              originType={item.originType}
              intents={item.intents}
              dateUpdated={formatTimestamp(item.dateUpdated)}
            />
          );
        })}
      </section>
    </main>
  );
}

export default App;
