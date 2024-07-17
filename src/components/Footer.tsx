// components/Footer.tsx
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer data-testid="footer" className="p-6 text-center text-sm text-black dark:text-white">
        <p className="text-sm">© {new Date().getFullYear()} Jane Doe. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
