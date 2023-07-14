import React, { FC } from 'react';

export const Header: FC = () => {
  return (
    <nav className="bg-gray-200">
      <div className="container mx-auto flex justify-between">
        <a href="/" className="text-gray-800 text-2xl font-bold">
          <img src="/logo.svg" alt="Bookloop logo" className="w-16 h-16" />
        </a>
        <div className="flex items-center">
          <a href="#" className="text-gray-800 hover:text-gray-900">
            Sign in
          </a>
          <a href="#" className="text-gray-800 hover:text-gray-900">
            Sign up
          </a>
        </div>
      </div>
    </nav>
  );
};
