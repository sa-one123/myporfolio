"use client";

import React, { useEffect, useState } from 'react';
import Button from './Button';

const Header: React.FC = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark';
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList.add(savedTheme);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.classList.remove(theme);
    document.documentElement.classList.add(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  const toggleClassName = theme === 'dark' ? 'toggle-btn' : '';

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
      <nav className="astronav-toggle mt-2 hidden w-full lg:mt-0 lg:flex lg:w-auto">
        <ul className="flex flex-col lg:flex-row lg:gap-3">
          <li>
            <a
              aria-label="navigation link"
              href="#about"
              className="flex py-2 text-black hover:text-orange dark:text-white dark:hover:text-orange lg:px-3"
            >
              About
            </a>
          </li>
          <li>
            <a
              aria-label="navigation link"
              href="#projects"
              className="flex py-2 text-black hover:text-orange dark:text-white dark:hover:text-orange lg:px-3"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              aria-label="navigation link"
              href="#contact"
              className="flex py-2 text-black hover:text-orange dark:text-white dark:hover:text-orange lg:px-3"
            >
              Contact
            </a>
          </li>
          <li>
          <div className="theme-switch-wrapper md:flex md:items-center">
              <label
                data-testid="theme-switch"
                className="theme-switch relative inline-block h-[34px] w-[60px]"
                htmlFor="checkbox"
              >
                <input
                  type="checkbox"
                  id="checkbox"
                  className="hidden"
                  checked={theme === 'dark'}
                  onChange={toggleTheme}
                />
                <div className={`slider absolute bottom-0 left-0 right-0 top-0 cursor-pointer rounded-full bg-black before:absolute before:bottom-[4px] before:left-[4px] before:h-[26px] before:w-[26px] before:rounded-full before:bg-orange before:transition-[0.4s] dark:bg-white ${toggleClassName}`}>
                  <circle cx="12" cy="12" r="5" className="astro-NGCSDC2W"></circle>
                  <line x1="12" y1="1" x2="12" y2="3" className="astro-NGCSDC2W"></line>
                  <line x1="12" y1="21" x2="12" y2="23" className="astro-NGCSDC2W"></line>
                  <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" className="astro-NGCSDC2W"></line>
                  <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" className="astro-NGCSDC2W"></line>
                  <line x1="1" y1="12" x2="3" y2="12" className="astro-NGCSDC2W"></line>
                  <line x1="21" y1="12" x2="23" y2="12" className="astro-NGCSDC2W"></line>
                  <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" className="astro-NGCSDC2W"></line>
                  <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" className="astro-NGCSDC2W"></line>
                </div>
              </label>
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" className="astro-NGCSDC2W"></path>
            </div>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
