import Button from "./components/Button";
import "./styles/variables.scss";

function App() {
  return (
    <div className="App">
      {/* Add Responsive container component here. Render the card components inside of that component.  */}
      <div>
        Replace me with a responsive container component to hold the group of
        cards!
        <Button>View</Button>
        <Button danger>Remove</Button>
      </div>
    </div>
  );
}

export default App;
