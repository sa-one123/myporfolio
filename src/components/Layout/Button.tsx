// components/Button.tsx
import React from 'react';

interface ButtonProps {
  name: string;
  children: React.ReactNode;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ name, children, onClick }) => {
  return (
    <button
      name={name}
      className="rounded-xl text-center transition focus-visible:ring-2 ring-offset-2 ring-orange px-4 py-1.5 bg-black text-white hover:bg-orange border-2 border-transparent"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
