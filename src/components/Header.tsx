import Link from "next/link";
import Image from "next/image";

const Header = () => {
  return (
    <header className="bg-gray-900 text-white px-4 py-2 shadow-md"> {/* Added padding for content */}
      <nav className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <Image
            src="/logoImage.png"
            alt="Website Logo"
            width={100}
            height={100}
            className="rounded-full"
          />
          <span className="ml-3 text-2xl font-semibold tracking-wide">
            Code Sa-one
          </span>
        </div>
        <ul className="flex space-x-6 text-lg font-medium"> {/* Added font-medium for bolder text */}
          <li className="group">
            <Link href="/" passHref className="relative group-hover:text-gray-400 transition-colors duration-300">
              <span>Home</span>
              <span className="absolute left-0 bottom-0 h-1 w-0 bg-gray-400 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </li>
          <li className="group">
            <Link href="/about" passHref className="relative group-hover:text-gray-400 transition-colors duration-300">
              <span>About</span>
              <span className="absolute left-0 bottom-0 h-1 w-0 bg-gray-400 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </li>
          <li className="group">
            <Link href="/projects" passHref className="relative group-hover:text-gray-400 transition-colors duration-300">
              <span>Projects</span>
              <span className="absolute left-0 bottom-0 h-1 w-0 bg-gray-400 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </li>
          <li className="group">
            <Link href="/contact" passHref className="relative group-hover:text-gray-400 transition-colors duration-300">
              <span>Contact</span>
              <span className="absolute left-0 bottom-0 h-1 w-0 bg-gray-400 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
