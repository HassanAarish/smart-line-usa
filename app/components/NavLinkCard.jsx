import { Icon } from "@iconify/react";
import Link from "next/link";
import React from "react";

const NavLinkCard = ({ href, text, classname, icon }) => {
  return (
    <div className="w-full flex">
      <li className="flex items-center">
        <Link
          href={href}
          className={`flex items-center gap-2 ${
            classname || "hover:text-teal-500"
          }`}
        >
          {text}
          {icon && (
            <Icon icon={icon} className="text-white font-extrabold text-base" />
          )}
        </Link>
      </li>
    </div>
  );
};

export default NavLinkCard;
