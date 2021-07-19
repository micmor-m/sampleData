import React, { useState, useEffect } from "react";
import CommonCard from "components/CommonCard";
import SearchBox from "components/SearchBox";
import "./styles/variables.scss";
import "./styles/container.scss";

// Import data
import { sampleData } from "data/sampleData";

// Import helper function
import formatTimestamp from "./helpers/formatData.js";

function App() {
  /* OLD VERSION
  const [search, setSearch] = useState(""); 
  const handleSearch = (value) => {
    setSearch(value);
  };
  const filteredData = sampleData.filter((item) => {
    return item.name.toLowerCase().includes(search.toLowerCase());
  });
*/

  const [term, setTerm] = useState("");
  const [results, setResults] = useState([]);

  console.log("term", term);

  useEffect(() => {
    console.log("Fetching data...");

    const filteredData = sampleData.filter((item) => {
      return item.name.toLowerCase().includes(term.toLowerCase());
    });

    setResults([...filteredData]);
  }, [term]);

  return (
    <main className="layout">
      <SearchBox onSearch={(term) => setTerm(term)} />
      <section className="container">
        {results.map((item) => {
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
