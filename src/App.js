import "./App.css";
import Navbar from "./Components/Navbar";
import { useState } from "react";
var Latex = require("react-latex");

function App() {
  const [problem, setProblem] = useState(``);
  return (
    <div className="App">
      <Navbar setProblem={setProblem}></Navbar>

      <div className="h-screen flex items-center justify-center text-xl">
        <Latex displayMode={false}>{problem}</Latex>
      </div>
    </div>
  );
}

export default App;
