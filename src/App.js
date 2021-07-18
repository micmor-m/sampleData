import CommonCard from "components/CommonCard";
import "./styles/variables.scss";
import "./styles/container.scss";

function App() {
  return (
    <main className="layout">
      {/* Add Responsive container component here. Render the card components inside of that component.  */}
      <section className="container">
        <CommonCard />
      </section>
    </main>
  );
}

export default App;
