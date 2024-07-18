import React from 'react';
import Button from './Button';
import Nav from './Nav';

const Header: React.FC = () => {
  return (
    <header data-testid="header" className="my-5 flex flex-col items-center justify-between lg:flex-row">
      <div className="flex w-full items-center justify-between lg:w-auto">
        <Button name="Download CV">Download CV</Button>
        <div className="block lg:hidden">
          <button id="astronav-menu">
            <svg
              fill="currentColor"
              className="h-4 w-4 text-black dark:text-white"
              width="24"
              height="24"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path
                className="astronav-toggle hidden"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M18.278 16.864a1 1 0 01-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 01-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 011.414-1.414l4.829 4.828 4.828-4.828a1 1 0 111.414 1.414l-4.828 4.829 4.828 4.828z"
              ></path>
              <path
                className="astronav-toggle"
                fillRule="evenodd"
                d="M4 5h16a1 1 0 010 2H4a1 1 0 110-2zm0 6h16a1 1 0 010 2H4a1 1 0 010-2zm0 6h16a1 1 0 010 2H4a1 1 0 010-2z"
              ></path>
            </svg>
          </button>
        </div>
      </div>
      <Nav />
    </header>
  );
};

export default Header;
