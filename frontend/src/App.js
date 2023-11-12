import "./App.css";
import ProblemSelector from "./Components/Navbar";
import { useState } from "react";
import Problem from "./Components/Problem";

function App() {
  const handleChange = (event) => {
    setProblem((problem) => ({
      ...problem,
      ...{
        input: event.target.value,
        correct: null,
        is_solved: false,
      },
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setProblem((problem) => ({
      ...problem,
      ...{
        is_solved: true,
        correct: problem.input.toLowerCase() === problem.expected.toLowerCase(),
      },
    }));
  };

  const [problem, setProblem] = useState(null);

  return (
    <div className="App bg-slate-50">
      <div className="absolute w-full">
        <ProblemSelector setProblem={setProblem} />
      </div>
      <div className="m-5">
        <div className="h-screen max-w-lg m-auto flex flex-col space-y-4 justify-center text-xl">
          <Problem
            problem={problem}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            setProblem={setProblem}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
