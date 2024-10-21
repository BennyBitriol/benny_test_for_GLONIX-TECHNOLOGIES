import React, { useState } from "react";
import { User, Menu, X } from "lucide-react";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Left Side: Logo and Menu */}
          <div className="flex items-center space-x-4">
            <div className="text-[#00665E] font-bold text-xl sm:text-2xl">
              LOGO
            </div>

            <nav className="hidden md:flex space-x-4">
              <a
                href="#"
                className="text-[#6A6A6A] hover:text-[#00665E] text-sm lg:text-base"
              >
                รายวิชา
              </a>
              <a
                href="#"
                className="text-[#6A6A6A] hover:text-[#00665E] text-sm lg:text-base"
              >
                ถ่ายทอดสด
              </a>
              <a
                href="#"
                className="text-[#6A6A6A] hover:text-[#00665E] text-sm lg:text-base"
              >
                กระดู้คำถาม
              </a>
            </nav>
          </div>

          {/* Right Side: User Profile and Logout Button */}
          <div className="flex items-center ml-auto">
            {" "}
            {/* Use ml-auto to push it to the right */}
            <div className="hidden md:flex items-center ml-4 space-x-2">
              <button className="px-3 py-2 text-sm text-black bg-[#EFEFEF] rounded-md hover:bg-red-500 hover:text-white transition-colors duration-200">
                ออกจากระบบ
              </button>
              <div className="flex items-center space-x-2 px-3 py-2 cursor-pointer text-white bg-[#1C1C29] rounded-md hover:bg-[#00665E] transition-colors duration-200">
                <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center overflow-hidden">
                  <img
                    src={"/FirstSection/CourseLandingPageAvatar1.png"}
                    alt="User Profile"
                    className="w-8 h-8 rounded-full"
                  />
                </div>
                <span className="text-sm hidden lg:inline">
                  Siriwat Rachanon
                </span>
              </div>
            </div>
            <button
              onClick={toggleMenu}
              className="md:hidden ml-4 p-2 text-gray-600 hover:text-[#00665E] focus:outline-none"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div className={`md:hidden ${isMenuOpen ? "block" : "hidden"}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <a
            href="#"
            className="block px-3 py-2 text-base font-medium text-[#6A6A6A] hover:text-[#00665E] hover:bg-gray-50 rounded-md"
          >
            รายวิชา
          </a>
          <a
            href="#"
            className="block px-3 py-2 text-base font-medium text-[#6A6A6A] hover:text-[#00665E] hover:bg-gray-50 rounded-md"
          >
            ถ่ายทอดสด
          </a>
          <a
            href="#"
            className="block px-3 py-2 text-base font-medium text-[#6A6A6A] hover:text-[#00665E] hover:bg-gray-50 rounded-md"
          >
            กระดู้คำถาม
          </a>
        </div>
        <div className="pt-4 pb-3 border-t border-gray-200">
          <div className="flex items-center px-5">
            <div className="flex-shrink-0">
              <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center overflow-hidden">
                <img
                  src={"/FirstSection/CourseLandingPageAvatar1.png"}
                  alt="User Profile"
                  className="w-8 h-8 rounded-full"
                />
              </div>
            </div>
            <div className="ml-3">
              <div className="text-base font-medium text-gray-800">
                Siriwat Rachanon
              </div>
            </div>
          </div>
          <div className="mt-3 px-2">
            <button className="block w-full px-3 py-2 text-base font-medium text-center text-black bg-[#EFEFEF] rounded-md hover:bg-red-500 hover:text-white transition-colors duration-200">
              ออกจากระบบ
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
