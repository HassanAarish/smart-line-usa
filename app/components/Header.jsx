import Image from "next/image";
import logo from "../../public/logo.jpeg";
import backgroundImage from "../../public/header-background.jpeg";

const Header = () => {
  return (
    <header
      className="relative bg-cover bg-center bg-no-repeat h-[500px] flex items-center justify-center"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      <div className="text-center text-white px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Understand the Word to Unify the World
        </h1>
        <p className="text-lg md:text-xl">
          SMART LINE USA (SLU) provides professional business solutions,
          including translation, interpretation, and more.
        </p>
        <button className="mt-6 px-6 py-3 bg-teal-500 text-white font-semibold rounded-md hover:bg-teal-600">
          Contact Us
        </button>
      </div>
      <Image src={logo} alt="Logo" className="w-[20] h-[20]" />
      <h1 className="text-2xl font-bold">Smart Line USA</h1>
    </header>
  );
};

export default Header;
