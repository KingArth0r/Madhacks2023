import problemDb from "../sample_data.json";

function convertIndexToLetter(index) {
  const letters = ["A", "B", "C", "D"];
  return letters[index];
}

function processProblem() {
  const randomNumber = Math.floor(Math.random() * 9);
  const problemFromDb =
    problemDb.class[0].math240.chapters[0].chapter1.quiz.questions[
      randomNumber
    ];

  // is_solved is determined by the backend
  return {
    problem: problemFromDb.question,
    choices: problemFromDb.choices,
    expected: convertIndexToLetter(problemFromDb.solutionIndex),
    solution: problemFromDb.solutionSteps,
    correct: null,
    input: ``,
    is_solved: false,
  };
}

function Problem({ problem, setProblem, handleChange, handleSubmit }) {
  if (problem == null) {
    return (
      <>
        <div className="text-3xl">
          Welcome CS Majors. We know you need help. <b>Desperately.</b>
        </div>
      </>
    );
  }
  var Latex = require("react-latex");

  return (
    <>
      <div className="p-5 border-2 rounded-md bg-slate-200x border-slate-800">
        <Latex displayMode={false}>{problem.problem}</Latex>
        <ol class="list-[upper-alpha]">
          {problem.choices.map((step) => (
            <li className="text-red-500">
              <Latex displayMode={false}>{step}</Latex>
            </li>
          ))}
        </ol>
      </div>
      <form onSubmit={handleSubmit}>
        <label>
          Solution:
          {problem.correct == false ? (
            <input
              type="text"
              value={problem.input}
              onChange={handleChange}
              className="ml-3 bg-slate-200 border border-red-500"
            />
          ) : (
            <input
              placeholder="Enter your answer"
              type="text"
              value={problem.input}
              onChange={handleChange}
              className="ml-3 bg-slate-200"
            />
          )}
        </label>
        <button type="submit"></button>
      </form>
      {problem.correct == false && (
        <div className="p-3 rounded-md bg-red-100">you are INCORRECT</div>
      )}
      {problem.correct == true && (
        <div className="p-3 rounded-md bg-green-100">you are CORRECT </div>
      )}
      {problem.is_solved && (
        <>
          <ul class="list-disc">
            {problem.solution.map((step) => (
              <li>
                <Latex displayMode={false}>{step}</Latex>
              </li>
            ))}
          </ul>

          <button
            className="border-2 border-blue-500"
            onClick={() => setProblem(processProblem())}
          >
            New Problem
          </button>
        </>
      )}
    </>
  );
}

export default Problem;
