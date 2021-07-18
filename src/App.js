import CommonCard from "components/CommonCard";
import "./styles/variables.scss";
import "./styles/container.scss";

// Import data
import { sampleData } from "data/sampleData";

function App() {
  return (
    <main className="layout">
      {/* Add Responsive container component here. Render the card components inside of that component.  */}
      <section className="container">
        {sampleData.map((item) => {
          return (
            <CommonCard
              key={item.id}
              name={item.name}
              originType={item.originType}
              intents={item.intents}
              dateUpdated={item.dateUpdated}
            />
          );
        })}
      </section>
    </main>
  );
}

export default App;
