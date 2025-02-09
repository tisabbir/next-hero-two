"use client";
import React from "react";
import Link from "next/link";

const Nav = () => {
  // Array of navigation items
  const navItems = [
    { title: "Posts", link: "/posts" },
    { title: "Login", link: "/login" },
    { title: "Services", link: "/services" },
    { title: "Contacts", link: "/contacts" },
    { title: "About", link: "/about" },
    { title: "Meals", link: "/meals" },
  ];

  return (
    <nav className="bg-[#FEF9E1] p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo or Brand Name */}
        <Link href="/" className="text-[#A31D1D] text-2xl font-bold">
          Next Hero
        </Link>

        {/* Navigation Links */}
        <ul className="flex space-x-6">
          {navItems.map((item, index) => (
            <li key={index}>
              <Link
                href={item.link}
                className="text-[#6D2323] hover:text-[#A31D1D] transition-colors duration-200"
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
