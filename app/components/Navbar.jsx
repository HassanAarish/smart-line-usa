"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { NavlinksData } from "../utils/constant";
import NavLinkCard from "./NavLinkCard";
import NavDropdown from "./NavDropdown";
import PrimaryButton from "./PrimaryButton";

const Navbar = () => {
  const router = useRouter();
  const [showDropdown, setShowDropdown] = useState(null);

  const handleMouseEnter = (index) => setShowDropdown(index);
  const handleMouseLeave = () => setShowDropdown(null);
  return (
    <nav className="w-full flex justify-between items-center text-white py-2 px-4 text-lg">
      <ul className="flex space-x-8">
        {NavlinksData?.map((links, index) => {
          return (
            <div
              key={index}
              className="relative"
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              {/* Main nav Links */}
              <NavLinkCard
                href={links?.href}
                text={links?.text}
                className={links?.className}
                icon={links?.dropdown ? "oui:arrow-down" : null}
              />

              {/* DropDowns */}
              {links?.dropdown && showDropdown === index && (
                <NavDropdown dropdownItems={links?.dropdown} />
              )}
            </div>
          );
        })}
      </ul>

      {/* Contact Us Button */}
      <PrimaryButton
        className="bg-teal-400 px-6 py-3 hover:bg-teal-500 text-white text-lg"
        onClick={() => router.push("/contact-us")}
        text={"Contact Us"}
      />
    </nav>
  );
};

export default Navbar;
