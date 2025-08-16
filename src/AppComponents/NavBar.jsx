import { useState } from "react";
import { FaHome, FaUserAlt, FaBriefcase, FaEnvelope } from "react-icons/fa"; 
import { SiGithub, SiLinkedin } from "react-icons/si";
import { Link, useLocation } from "react-router-dom";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation(); // 🔥 tells us the current route

  const navItems = [
    { key: "/", text: "Home", icon: <FaHome className="inline mr-2" /> },
    { key: "/about", text: "About", icon: <FaUserAlt className="inline mr-2" /> },
    { key: "/projects", text: "Projects", icon: <FaBriefcase className="inline mr-2" /> },
    { key: "/contact", text: "Contact", icon: <FaEnvelope className="inline mr-2" /> },
  ];

  return (
    <nav className="bg-white/90 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo / Brand */}
          <Link
            to="/"
            className="text-2xl font-bold text-gray-900 hover:text-blue-600 transition-colors"
          >
            Chandru
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            {navItems.map((item, index) => (
              <Link
                key={index}
                to={item.key} // ✅ tells router where to go
                className={`flex items-center text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium ${
                  location.pathname === item.key ? "text-blue-600" : ""
                }`}
              >
                {item.icon}
                {item.text}
              </Link>
            ))}

            {/* Socials */}
            <div className="flex space-x-4 ml-6">
              <a href="https://github.com/" target="_blank" rel="noreferrer">
                <SiGithub className="text-gray-700 hover:text-black transition-colors" size={20} />
              </a>
              <a href="https://linkedin.com/" target="_blank" rel="noreferrer">
                <SiLinkedin className="text-gray-700 hover:text-blue-600 transition-colors" size={20} />
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span
                className={`block w-5 h-0.5 bg-gray-600 transition-all duration-300 ${
                  isOpen ? "rotate-45 translate-y-1" : ""
                }`}
              ></span>
              <span
                className={`block w-5 h-0.5 bg-gray-600 mt-1 transition-all duration-300 ${
                  isOpen ? "opacity-0" : ""
                }`}
              ></span>
              <span
                className={`block w-5 h-0.5 bg-gray-600 mt-1 transition-all duration-300 ${
                  isOpen ? "-rotate-45 -translate-y-1" : ""
                }`}
              ></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4">
            {navItems.map((item, index) => (
              <Link
                key={index}
                to={item.key} // ✅ navigation works on mobile too
                onClick={() => setIsOpen(false)}
                className={`flex items-center py-2 text-gray-700 hover:text-blue-600 transition-colors duration-200 w-full text-left ${
                  location.pathname === item.key ? "text-blue-600" : ""
                }`}
              >
                {item.icon}
                {item.text}
              </Link>
            ))}

            {/* Mobile Socials */}
            <div className="flex space-x-4 mt-3 pl-1">

                   
              <a 
               href="https://github.com/Chandar-uoo"
              target="_blank" rel="noreferrer">
                <SiGithub className="text-gray-700 hover:text-black transition-colors" size={22} />
              </a>
              <a href="https://www.linkedin.com/in/chandru-v-9197712a0?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noreferrer">
                <SiLinkedin className="text-gray-700 hover:text-blue-600 transition-colors" size={22} />
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
