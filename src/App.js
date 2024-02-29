import "./App.css";
import Counter from "./components/Counter";
import Mainfile from "./components/Mainfile";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Mainfile />
        <Counter/>
      </header>
    </div>
  );
}

export default App;
