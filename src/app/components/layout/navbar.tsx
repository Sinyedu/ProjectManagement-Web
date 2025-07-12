import React from "react";
import Link from "next/link";

const Navbar: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between h-16">
        <div className="flex items-center">
          <span className="text-xl font-bold text-blue-600">
            ProjectManager
          </span>
        </div>
        <div className="flex items-center space-x-6">
          <Link href="/" passHref>
            Home
          </Link>
          <Link href="/projects" passHref>
            Projects
          </Link>
          <Link href="/teams" passHref>
            Teams
          </Link>
          <Link href="/support" passHref>
            Support
          </Link>
          <Link href="/login" passHref>
            Login
          </Link>
          <Link href="/signup" passHref>
            Sign up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
