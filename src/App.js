import "./App.css";

import MyTabs from "./Components/MyTabs";
import Output from "./Components/Output";

function App() {
  return (
    <div className="App">
      <div className="playground">
        <MyTabs />
        <Output />
      </div>
      <button id="runBtn">Run</button>
    </div>
  );
}

export default App;
