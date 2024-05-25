'use client';

import * as React from 'react';

// import {
//   Cloud,
//   CreditCard,
//   Github,
//   Keyboard,
//   LifeBuoy,
//   LogOut,
//   Mail,
//   MessageSquare,
//   Plus,
//   PlusCircle,
//   Settings,
//   User,
//   UserPlus,
//   Users,
// } from "lucide-react";
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const Typography = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [selectedOption, setSelectedOption] = React.useState('');

  const [position, setPosition] = React.useState('bottom');

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  // Function to handle option selection
  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
    setIsOpen(false); // Close the dropdown after selection
    // Perform any action based on the selected option
    switch (option) {
      case 'Dashboard':
        // Action for Dashboard
        break;
      case 'Settings':
        // Action for Settings
        break;
      case 'Earnings':
        // Action for Earnings
        break;
      case 'Sign out':
        // Action for Sign out
        break;
      default:
        // Default action
        break;
    }
  };
  return (
    <div>
      {/** typography */}
      <div className="mb-2 flex justify-between">
        <h3 className=" text-lg font-medium text-gray-900 dark:text-white">
          Typography:
        </h3>
      </div>
      {/** the dropdown typography */}
      <div className="relative">
        <button
          id="dropdownDefaultButton"
          className="ite flex w-full items-center justify-center rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900  focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
          type="button"
          onClick={toggleDropdown}
        >
          Typography{' '}
          <svg
            className={`ms-3 size-2.5${isOpen && 'rotate-180'}`}
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="m1 1 4 4 4-4"
            />
          </svg>
        </button>
        {/* Dropdown menu */}
        {isOpen && (
          <div
            className="absolute z-10 w-full divide-y divide-gray-100 rounded-lg bg-white shadow  dark:bg-gray-700"
            id="dropdown"
          >
            <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
              {/** family */}
              <li className=" flex items-center justify-between">
                <span
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  onClick={() => handleOptionClick('H1')}
                >
                  family
                </span>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" className="mr-1">
                      Open
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-56">
                    <DropdownMenuLabel>Font Family</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuGroup>
                      <DropdownMenuItem>
                        <span className="font-sans">Sans Serif</span>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <span className="font-serif">Serif</span>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <span className="font-mono">Monospace</span>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <span className="font-mono">Courier New</span>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <span className="font-mono">Consolas</span>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <span className="font-sans">Arial</span>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <span className="font-serif">Times New Roman</span>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <span className="font-sans">Verdana</span>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <span className="font-serif">Georgia</span>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <span className="font-sans">Helvetica</span>
                      </DropdownMenuItem>
                    </DropdownMenuGroup>
                  </DropdownMenuContent>
                </DropdownMenu>
              </li>
              {/** family */}
              {/** size */}
              <li>
                <span
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  onClick={() => handleOptionClick('H2')}
                >
                  size:
                </span>
                <div className="relative mx-2">
                  <input
                    type="search"
                    id="default-search"
                    className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-4 ps-4 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                    placeholder="size"
                  />
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <button
                        type="submit"
                        className="absolute bottom-2.5 end-2.5 rounded-lg bg-blue-700 px-4 py-2 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                      >
                        unit
                      </button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-56">
                      <DropdownMenuLabel>unit</DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <DropdownMenuGroup>
                        <DropdownMenuItem>
                          <span className="font-sans">px</span>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <span className="font-serif">rem</span>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <span className="font-mono">em</span>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <span className="font-mono">%</span>
                        </DropdownMenuItem>
                      </DropdownMenuGroup>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </li>
              {/** size */}
              {/** weight */}
              <li className=" my-4 flex items-center justify-between">
                <span
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  onClick={() => handleOptionClick('H1')}
                >
                  Weight:
                </span>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" className="mr-1">
                      Open
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-56">
                    <DropdownMenuLabel>Font Family</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuGroup>
                      <DropdownMenuItem>
                        <span className="font-sans">Sans Serif</span>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <span className="font-serif">Serif</span>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <span className="font-mono">Monospace</span>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <span className="font-mono">Courier New</span>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <span className="font-mono">Consolas</span>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <span className="font-sans">Arial</span>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <span className="font-serif">Times New Roman</span>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <span className="font-sans">Verdana</span>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <span className="font-serif">Georgia</span>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <span className="font-sans">Helvetica</span>
                      </DropdownMenuItem>
                    </DropdownMenuGroup>
                  </DropdownMenuContent>
                </DropdownMenu>
              </li>
              {/** weight */}

              {/** transform */}
              <li className=" my-4 flex items-center justify-between">
                <span
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  onClick={() => handleOptionClick('H1')}
                >
                  Transform
                </span>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" className="mr-1">
                      Open
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-56">
                    <DropdownMenuLabel>Font Family</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuGroup>
                      <DropdownMenuItem>
                        <span className="font-sans">Sans Serif</span>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <span className="font-serif">Serif</span>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <span className="font-mono">Monospace</span>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <span className="font-mono">Courier New</span>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <span className="font-mono">Consolas</span>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <span className="font-sans">Arial</span>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <span className="font-serif">Times New Roman</span>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <span className="font-sans">Verdana</span>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <span className="font-serif">Georgia</span>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <span className="font-sans">Helvetica</span>
                      </DropdownMenuItem>
                    </DropdownMenuGroup>
                  </DropdownMenuContent>
                </DropdownMenu>
              </li>
              {/** transform */}

              {/** style */}
              <li className=" my-4 flex items-center justify-between">
                <span
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  onClick={() => handleOptionClick('H1')}
                >
                  Style
                </span>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" className="mr-1">
                      Open
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-56">
                    <DropdownMenuLabel>Font Family</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuGroup>
                      <DropdownMenuItem>
                        <span className="font-sans">Sans Serif</span>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <span className="font-serif">Serif</span>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <span className="font-mono">Monospace</span>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <span className="font-mono">Courier New</span>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <span className="font-mono">Consolas</span>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <span className="font-sans">Arial</span>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <span className="font-serif">Times New Roman</span>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <span className="font-sans">Verdana</span>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <span className="font-serif">Georgia</span>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <span className="font-sans">Helvetica</span>
                      </DropdownMenuItem>
                    </DropdownMenuGroup>
                  </DropdownMenuContent>
                </DropdownMenu>
              </li>
              {/** style */}

              {/** decoration */}
              <li className=" my-4 flex items-center justify-between">
                <span
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  onClick={() => handleOptionClick('H1')}
                >
                  Decoration
                </span>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" className="mr-1">
                      Open
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-56">
                    <DropdownMenuLabel>Font Family</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuGroup>
                      <DropdownMenuItem>
                        <span className="font-sans">Sans Serif</span>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <span className="font-serif">Serif</span>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <span className="font-mono">Monospace</span>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <span className="font-mono">Courier New</span>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <span className="font-mono">Consolas</span>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <span className="font-sans">Arial</span>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <span className="font-serif">Times New Roman</span>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <span className="font-sans">Verdana</span>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <span className="font-serif">Georgia</span>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <span className="font-sans">Helvetica</span>
                      </DropdownMenuItem>
                    </DropdownMenuGroup>
                  </DropdownMenuContent>
                </DropdownMenu>
              </li>
              {/** decoration */}

              {/** line height */}
              <li>
                <span
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  onClick={() => handleOptionClick('H2')}
                >
                  Line Height:
                </span>
                <div className="relative mx-2">
                  <input
                    type="search"
                    id="default-search"
                    className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-4 ps-4 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                    placeholder="size"
                  />
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <button
                        type="submit"
                        className="absolute bottom-2.5 end-2.5 rounded-lg bg-blue-700 px-4 py-2 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                      >
                        unit
                      </button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-56">
                      <DropdownMenuLabel>unit</DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <DropdownMenuGroup>
                        <DropdownMenuItem>
                          <span className="font-sans">px</span>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <span className="font-serif">rem</span>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <span className="font-mono">em</span>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <span className="font-mono">%</span>
                        </DropdownMenuItem>
                      </DropdownMenuGroup>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </li>
              {/** line height */}

              {/** line spacing */}
              <li>
                <span
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  onClick={() => handleOptionClick('H2')}
                >
                  Letter Spacing:
                </span>
                <div className="relative mx-2">
                  <input
                    type="search"
                    id="default-search"
                    className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-4 ps-4 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                    placeholder="size"
                  />
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <button
                        type="submit"
                        className="absolute bottom-2.5 end-2.5 rounded-lg bg-blue-700 px-4 py-2 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                      >
                        unit
                      </button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-56">
                      <DropdownMenuLabel>unit</DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <DropdownMenuGroup>
                        <DropdownMenuItem>
                          <span className="font-sans">px</span>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <span className="font-serif">rem</span>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <span className="font-mono">em</span>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <span className="font-mono">%</span>
                        </DropdownMenuItem>
                      </DropdownMenuGroup>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </li>
              {/** line spacing */}

              {/** word spacing */}
              <li>
                <span
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  onClick={() => handleOptionClick('H2')}
                >
                  word Spacing:
                </span>
                <div className="relative mx-2">
                  <input
                    type="search"
                    id="default-search"
                    className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-4 ps-4 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                    placeholder="size"
                  />
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <button
                        type="submit"
                        className="absolute bottom-2.5 end-2.5 rounded-lg bg-blue-700 px-4 py-2 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                      >
                        unit
                      </button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-56">
                      <DropdownMenuLabel>unit</DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <DropdownMenuGroup>
                        <DropdownMenuItem>
                          <span className="font-sans">px</span>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <span className="font-serif">rem</span>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <span className="font-mono">em</span>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <span className="font-mono">%</span>
                        </DropdownMenuItem>
                      </DropdownMenuGroup>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </li>
              {/** word spacing */}
            </ul>
          </div>
        )}
      </div>
      {/** the dropdown the dropdown typography */}
      {/** typography */}
    </div>
  );
};

export default Typography;
