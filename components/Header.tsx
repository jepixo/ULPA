
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="py-8 px-4 bg-white border-b border-gray-100">
      <div className="container mx-auto text-center max-w-4xl">
        <h1 className="text-3xl md:text-5xl font-extrabold text-primary tracking-tight mb-3">
          UL Postgraduate Accommodation
        </h1>
        <p className="text-lg text-gray-500 font-medium">Your AI-Powered Research Hub for 2025-2026</p>
      </div>
    </header>
  );
};

export default Header;
