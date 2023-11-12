function getRandomMatrixSize() {
    // Generate either 2 or 3 randomly
    return Math.random() < 0.85 ? 2 : 3;
}

function generateRandomMatrix(rows, columns) {
    // Generate a random matrix in LaTeX format
    const matrix = Array.from({ length: rows }, () =>
        Array.from({ length: columns }, () => Math.floor(Math.random() * 10) + 1)
    );

    // Convert the matrix to LaTeX format
    const matrixLatex = `\\begin{bmatrix}\n${matrix
        .map(row => row.join(" & "))
        .join(" \\\\\n")}\n\\end{bmatrix}`;

    return matrixLatex;
}

function generateMatrixArithmeticProblem() {
    const matrixSizeA = getRandomMatrixSize();
    const matrixSizeB = getRandomMatrixSize();

    let operation;
    let operationText;

    const randomOperation = Math.random();
    if (randomOperation < 0.2) {
        operation = "addition";
        operationText = "Compute the sum of the following matrices:";
    } else if (randomOperation < 0.4) {
        operation = "subtraction";
        operationText = "Compute the difference of the following matrices:";
    } else if (randomOperation < 0.6) {
        operation = "multiplication";
        operationText = "Compute the product of the following matrices:";
    } else if (randomOperation < 0.8) {
        operation = "inverse";
        operationText = "Compute the inverse of the following matrix:";
    } else {
        operation = "determinant";
        operationText = "Compute the determinant of the following matrix:";
    }

    let matrixA, matrixB;

    // Generate matrices based on the operation
    if (operation === "addition" || operation === "subtraction") {
        const rows = Math.floor(Math.random() * 4) + 2; // Random number of rows between 2 and 5
        const columns = Math.floor(Math.random() * 4) + 2; // Random number of columns between 2 and 5

        matrixA = generateRandomMatrix(rows, columns);
        matrixB = generateRandomMatrix(rows, columns);
    } else if (operation === "multiplication") {
        const columnsA = Math.floor(Math.random() * 5) + 1;
        const rowsB = columnsA;

        matrixA = generateRandomMatrix(matrixSizeA, columnsA);
        matrixB = generateRandomMatrix(rowsB, matrixSizeB);
    } else {
        // For inverse and determinant, ensure the matrix is square
        const matrixSize = getRandomMatrixSize();
        matrixA = generateRandomMatrix(matrixSize, matrixSize);
    }

    // Generate the LaTeX code for the matrix arithmetic problem
    let latexCode = `${operationText}\n`;
    if (operation === "determinant") {
        latexCode += `\\[\n${getOperationSymbol(operation)}${matrixA}\n\\]`;
    } else {
        latexCode += `\\[\n${matrixA} \\${getOperationSymbol(operation)}${matrixB ? ` \\${matrixB}` : ""}\n\\]`;
    }

    return latexCode;
}


function getOperationSymbol(operation) {
    // Map operation to its corresponding LaTeX symbol
    const operationSymbols = {
        addition: "+",
        subtraction: "-",
        multiplication: "\\cdot",
        inverse: "^{-1}",
        determinant: "\\text{det}",
    };

    return operationSymbols[operation];
}

// Example: Generate a random matrix arithmetic problem and log the LaTeX code
const matrixArithmeticProblem = generateMatrixArithmeticProblem();
console.log(matrixArithmeticProblem);


