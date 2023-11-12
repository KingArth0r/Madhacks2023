import React from "react";
import { Menu, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import problemDb from "../sample_data.json";

function convertIndexToLetter(index) {
  const letters = ["A", "B", "C", "D"];
  return letters[index];
}

function processProblem() {
  const randomNumber = Math.floor(Math.random() * 9);
  // const randomNumber = 10;
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

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const ProblemSelector = ({ setProblem }) => {
  return (
    <nav className="p-5 container mx-auto">
      <div className="flex">
        <div className="flex-1 text-gray-800">
          <a href="/" className="text-2xl">
            <b>Discrete Learning</b>
          </a>
        </div>
        <div className="flex-1 flex justify-end">
          <div className="text-gray-800 absolute">
            <Menu>
              <div className="text-2xl">
                <Menu.Button>Class</Menu.Button>
              </div>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div className="py-1">
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="#"
                          className={classNames(
                            active
                              ? "bg-slate-100 text-slate-900"
                              : "text-slate-900",
                            "block px-4 py-2 text-sm text-left"
                          )}
                          onClick={() => setProblem(processProblem())}
                        >
                          MATH 240 - Discrete Math
                        </a>
                      )}
                    </Menu.Item>
                    <Menu.Item disabled>
                      {({ active }) => (
                        <a
                          href="#"
                          className={classNames(
                            active
                              ? "bg-slate-100 text-slate-900"
                              : "text-slate-900",
                            "block px-4 py-2 text-sm text-left opacity-50"
                          )}
                          onClick={() => setProblem(processProblem())}
                        >
                          MATH 340 - Linear Algebra (coming soon!)
                        </a>
                      )}
                    </Menu.Item>
                    {/* <Menu.Item disabled>
                      <span className="opacity-50">
                        MATH 101 - Calculus (coming soon)
                      </span>
                    </Menu.Item> */}
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default ProblemSelector;
