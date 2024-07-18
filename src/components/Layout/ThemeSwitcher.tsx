// ThemeSwitcher.tsx
"use client";

import React, { useEffect, useState } from 'react';

const ThemeSwitcher: React.FC = () => {
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
    </div>
  );
};

export default ThemeSwitcher;
