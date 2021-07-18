import ButtonGroup from "./components/ButtonGroup";
import CardHeader from "./components/CardHeader";
import "./styles/variables.scss";

function App() {
  return (
    <main className="layout">
      {/* Add Responsive container component here. Render the card components inside of that component.  */}
      <div>
        Replace me with a responsive container component to hold the group of
        cards!
        <ButtonGroup />
        <CardHeader>Automated Origin</CardHeader>
        <CardHeader manual>Manual Origin</CardHeader>
      </div>
    </main>
  );
}

export default App;
