import Link from "next/link";
import React from "react";

const NavDropdown = ({ dropdownItems }) => {
  return (
    <ul className="absolute bg-white text-gray-600 py-3 rounded shadow-lg mt-6 z-50 text-sm">
      {dropdownItems?.map((item, index) => (
        <li key={index} className="px-4 py-2 hover:bg-teal-500">
          <Link href={item?.href}>{item?.text}</Link>
        </li>
      ))}
    </ul>
  );
};

export default NavDropdown;
