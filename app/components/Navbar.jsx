import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-blue-700 text-white py-2 px-4">
      <ul className="flex space-x-4">
        <li>
          <Link href="/" className="hover:underline">
            Home
          </Link>
        </li>
        <li>
          <Link href="/about" className="hover:underline">
            About Us
          </Link>
        </li>
        <li>
          <Link href="/services" className="hover:underline">
            Services
          </Link>
        </li>
        <li>
          <Link href="/languages" className="hover:underline">
            Languages
          </Link>
        </li>
        <li>
          <Link href="/contact" className="hover:underline">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
