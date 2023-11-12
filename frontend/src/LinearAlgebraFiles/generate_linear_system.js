function getRandomCoefficient(coefsRange) {
    // Generate a random coefficient within the specified range
    return Math.floor(Math.random() * (coefsRange[1] - coefsRange[0] + 1)) + coefsRange[0];
}

function generateLinearEquation(coefsRange = [-10, 20], decimalProbability = 0.1) {
    // Decide whether to use decimals or fractions for coefficients
    const useDecimalOrFraction = Math.random() < decimalProbability;

    // Generate coefficients based on the decision
    let a, b, c;
    if (useDecimalOrFraction) {
        // Generate coefficients as decimals or fractions
        a = (Math.random() < 0.5 ? getRandomCoefficient(coefsRange) : getRandomCoefficient(coefsRange) / 10).toFixed(1);
        b = (Math.random() < 0.5 ? getRandomCoefficient(coefsRange) : getRandomCoefficient(coefsRange) / 10).toFixed(1);
        c = (Math.random() < 0.5 ? getRandomCoefficient(coefsRange) : getRandomCoefficient(coefsRange) / 10).toFixed(1);
    } else {
        // Generate coefficients as integers
        a = getRandomCoefficient(coefsRange);
        b = getRandomCoefficient(coefsRange);
        c = getRandomCoefficient(coefsRange);
    }

    // Generate a linear equation in the form ax + by = c
    const equation = `${a}x + ${b}y = ${c}`;
    return equation;
}

function generateSystemOfEquations(numEquations = 2, coefsRange = [-5, 5]) {
    // Generate a system of linear equations
    const equations = Array.from({ length: numEquations }, () => generateLinearEquation(coefsRange));
    return equations;
}

function formatLatexEquations(equations) {
    // Format the system of equations in LaTeX
    
    let latexCode = "Solve the following system:\n";
    latexCode += "\\begin{align*}\n";
    equations.forEach(equation => {
        latexCode += "  " + equation + " \\\\\n";
    });
    latexCode += "\\end{align*}";
    return latexCode;
}

// Example: Generate a system of 2 linear equations and log the LaTeX code
const equations = generateSystemOfEquations(2);
const latexCode = formatLatexEquations(equations);
console.log(latexCode);

