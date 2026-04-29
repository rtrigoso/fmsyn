import "./App.css";
import Amp from "./composites/Amp";
import Fm from "./composites/operators/FM";
import Sequencer from "./composites/Sequencer";

function App() {
  return (
    <main class="container">
      <div class="row">
        <Fm />
        <Amp />
      </div>
      <div class="row">
        <Sequencer />
      </div>
    </main>
  );
}

export default App;
