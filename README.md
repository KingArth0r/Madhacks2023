# Discrete Learning
Discrete Learning is an interactive website for students to solve advanced math problems

## Overview
We know that many computer science students struggle in Discrete Math, so we've created a website to help solve that issue. The main purpose is to give students a way to easily practice problems outside of class. 

## Topics covered
Discrete Maths: Basic concepts of logic and basic concepts of proofs, truth tables
Linear Algebra: Matrix Operation, Systems of Linear Equations, Determinants, Eigenvalues and Eigenvectors

## Problem Set Sources
MATH240 (Introduction to Discrete Mathematics) @UW-Madison

## File Explanations

## Frontend
Dockerfile
- The Dockerfile builds a React application

App.css
- Styles the App components

App.js
- Defines the main React component structure and logic

index.js
- Renders the App component into the HTML DOM

## Backend
Dockerfile
- Sets up a containerized environment for a Python-based backend application, installing Flask (as specified in requirements.txt) and configuring it to run on port 5000

requirements.txt
- install Flask

integratedChapter.json
- This file contains problem sets for Discrete Mathematics (Math 240), including contents basic concepts of logic and basic concepts of proofs, and truth tables.

LinearAlgebraFiles
- generate_eigenvalue_problem.js
  - This file generates eigenvalue problems in LaTeX for 2x2 75% of the time and 3x3 matrices 15% of time
- generate_linear_system.js
  - This will generate a 2x2 linear system of equations in LaTeX with integer coefficients 90% of time and single decimal coefficients 10% of the time.
- matrix_operations.js
  - This will generate problems regarding matrix operations such as addition, subtraction, multiplication, inverses, and determinants. The dimensions of the matrices are random depending on the operation. Addition and subtraction will have the same dimensions, multiplication will just have the first matrix have the same number of columns as the the number of rows in the second matrix, for inverses and determinants we only do 2x2 and 3x3 matrices.
- verify_answers.js
  - This will check the inputted answer and verify if it’s correct depending on the type of problem. Currently empty.

app.py
- basic Flask application
