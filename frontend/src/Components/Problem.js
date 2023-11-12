function Problem({ problem, handleChange, handleSubmit }) {
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
          <Latex displayMode={false}>{problem.solution}</Latex>
          <button className="border-2 border-blue-500" onClick={handleChange}>
            Reset Problem
          </button>
        </>
      )}
    </>
  );
}

export default Problem;
