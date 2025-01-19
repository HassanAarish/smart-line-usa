"use client";
import Image from "next/image";
import logo from "../../public/logo.jpeg";
import headerFront from "../../public/header-front.png";
import { useRouter } from "next/navigation";
import Navbar from "./Navbar";
import PrimaryButton from "./PrimaryButton";

const Header = () => {
  const router = useRouter();

  const logoClick = (e) => {
    e.preventDefault();
    router.push("/");
  };

  const handleContact = (e) => {
    e.preventDefault();
    router.push("/contact-us");
  };

  return (
    <header
      className="w-full bg-cover bg-center bg-no-repeat h-[900px] flex items-center justify-between"
      style={{
        backgroundImage: `url('/header-background.jpeg')`,
      }}
    >
      {/* Top-left Logo and Navbar */}
      <div className="absolute top-0 left-64 flex items-center justify-between py-4 gap-8 bg-opacity-80">
        {/* Logo Section */}
        <div className="flex items-center">
          <Image
            src={logo}
            alt="Logo"
            width={190}
            height={190}
            className="cursor-pointer"
            onClick={logoClick}
          />
        </div>

        {/* Navbar Section */}
        <Navbar />
      </div>

      {/* Main Content Section */}
      <div className="w-full flex items-center justify-between gap-8">
        {/* Left: Header Image */}
        <div className="w-full flex flex-1 justify-end">
          <Image
            src={headerFront}
            alt="Header Front"
            className="max-w-full h-auto"
            width={400}
            height={400}
          />
        </div>

        {/* Right: Text Content */}
        <div className="w-full flex flex-col flex-1 text-start text-white ml-auto">
          <h1 className="text-2xl md:text-5xl font-bold mb-4 leading-snug">
            Understand the Word to Unify the World
          </h1>
          <p className="text-lg md:text-sm mb-6 leading-relaxed">
            SMART LINE USA (SLU) is a professional business solution company
            that provides oneor more language-relates services, such as
            translation, notarization, remote interpretation and on-site
            services.
          </p>
          <PrimaryButton
            className="self-start px-6 py-3 bg-teal-500 text-white font-semibold hover:bg-teal-600"
            onClick={handleContact}
            text="Contact Us"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
