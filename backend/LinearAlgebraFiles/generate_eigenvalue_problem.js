function isEigenvalueProblem() {
    // Determine whether it's an eigenvalue or eigenvector problem
    return Math.random() < 0.80; // 80% chance for eigenvector problem
}

function getRandomMatrixSize() {
    // Generate either 2 or 3 randomly
    return Math.random() < 0.75 ? 2 : 3;
}

function generateEigenvalueProblem(matrixSize) {
    // Generate a random matrix
    const matrix = generateRandomMatrix(matrixSize);

    // Check if it's an eigenvalue or eigenvector problem
    const isEigenvalue = isEigenvalueProblem();

    // Generate the LaTeX code for the eigenvalue or eigenvector problem
    let latexCode;
    if (isEigenvalue) {
        latexCode = `Find the eigenvalues of the following matrix:\n
            \\[
                ${matrix}
            \\]`;
    } else {
        latexCode = `Find an eigenvector for each eigenvalue of the following matrix:\n
                \\[
                    ${matrix}
                \\]`;
    }

    return latexCode;
}

function generateRandomMatrix(size) {
    // Generate a random matrix in LaTeX format
    const matrix = Array.from({ length: size }, () =>
        Array.from({ length: size }, () => Math.floor(Math.random() * 10) + 1)
    );

    // Convert the matrix to LaTeX format
    const matrixLatex = `\\begin{bmatrix}\n${matrix
        .map(row => row.join(" & "))
        .join(" \\\\\n")}\n\\end{bmatrix}`;

    return matrixLatex;
}

// Example: Generate a random eigenvalue problem and log the LaTeX code
const matrixSize = getRandomMatrixSize();
const eigenvalueProblem = generateEigenvalueProblem(matrixSize);
console.log(eigenvalueProblem);
