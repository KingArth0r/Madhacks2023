import React from "react";
import { Menu, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const ProblemSelector = ({ setProblem }) => {
  // const [problem, setProblem] = useState(`$$\\frac{1}{\\sqrt{2}} $$`);

  return (
    <nav className="p-5 container">
      <div className="flex">
        <div className="flex-1 text-gray-800">
          <a href="/">This is the site</a>
        </div>
        <div className="flex-1 flex justify-end">
          <div className="text-gray-800 absolute">
            <Menu>
              <div>
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
                              : "text-slate-700",
                            "block px-4 py-2 text-sm text-left"
                          )}
                          onClick={() =>
                            setProblem((problem) => ({
                              ...problem,
                              ...{
                                problem: `What is the following function an example of: $\\displaystyle\\frac{1}{|G|}\\sum_{g\\in G}$?`,
                                expected: `Burnside`,
                                solution: `This is Burnside's formula. We note that $G$ is a group probably.`,
                                input: ``,
                                correct: null,
                                is_solved: false,
                              },
                            }))
                          }
                        >
                          MATH 240 - Discrete Math
                        </a>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="#"
                          className={classNames(
                            active
                              ? "bg-slate-100 text-slate-900"
                              : "text-slate-700",
                            "block px-4 py-2 text-sm text-left"
                          )}
                          onClick={() =>
                            setProblem((problem) => ({
                              ...problem,
                              ...{
                                problem: `Evaluate $$\\displaystyle\\sum_{i=1}^k\\mathrm{d}x$$ for all $x$`,
                                expected: `epi`,
                                solution: `great work... cheater`,
                                input: ``,
                                correct: null,
                                is_solved: false,
                              },
                            }))
                          }
                        >
                          MATH 340 - Linear Algebra
                        </a>
                      )}
                    </Menu.Item>
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
