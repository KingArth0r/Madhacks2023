import React from "react";
import { Menu, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Navbar = ({ setProblem }) => {
  // const [problem, setProblem] = useState(`$$\\frac{1}{\\sqrt{2}} $$`);

  return (
    <nav className="p-4">
      <div className="container mx-auto">
        <div className="flex">
          <div className="text-gray-800">
            <a href="/">Site Name!</a>
          </div>
          <div className="ml-auto mr-10">
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
                  <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active
                                ? "bg-gray-100 text-gray-900"
                                : "text-gray-700",
                              "block px-4 py-2 text-sm text-left"
                            )}
                            onClick={() =>
                              setProblem(
                                `test! $$\\int_{a}^{b}b^2\\mathrm{d}x$$`
                              )
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
                                ? "bg-gray-100 text-gray-900"
                                : "text-gray-700",
                              "block px-4 py-2 text-sm text-left"
                            )}
                            onClick={() =>
                              setProblem(`test2! $$\\sqrt{a^2+b^2}$$`)
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
      </div>
    </nav>
  );
};

export default Navbar;
