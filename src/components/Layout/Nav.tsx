"use client";

import React from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/navigation';

const ThemeSwitcher = dynamic(() => import('./ThemeSwitcher'), {
  ssr: false,
});

const Nav: React.FC = () => {
  const router = useRouter();
  console.log(router)
  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Projects', href: '/projects' },
    { name: 'Contact', href: '/contact' },
  ];
  
  return (
      <nav className="astronav-toggle mt-2 hidden w-full lg:mt-0 lg:flex lg:w-auto">
        <ul className="flex flex-col lg:flex-row lg:gap-3">
          {navigation.map((item)=>(
            <li key={item.href}>
              <Link href={item.href}>
                {item.name}
              </Link>
            </li>
          ))}
          <li>
            <ThemeSwitcher />
          </li>
        </ul>
      </nav>
  );
};

export default Nav;
