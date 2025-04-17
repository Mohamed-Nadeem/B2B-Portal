import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-gray-100 py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <img
            src="/image.png"
            alt="Al Rashed Food Co. Ltd. Logo"
            className="h-12"
          />
          <h1 className="ml-4 text-xl font-bold">Al Rashed QSR Portal</h1>
        </div>
        <button
          className="text-2xl md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          ☰
        </button>
        <nav
          className={`md:flex ${isMenuOpen ? "block" : "hidden"} mt-4 md:mt-0`}
        >
          <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4">
            <li>
              <Link
                to="/orders"
                className="text-blue-600 hover:underline"
                onClick={() => setIsMenuOpen(false)}
              >
                View Orders
              </Link>
            </li>
            <li>
              <button
                className="text-blue-600 hover:underline"
                onClick={() => {
                  alert(
                    "Contact Us:\nRegion A: contact@a.com\nRegion B: contact@b.com"
                  );
                  setIsMenuOpen(false);
                }}
              >
                Contact Us
              </button>
            </li>
            <li>
              <button
                className="text-blue-600 hover:underline"
                onClick={handleLogout}
              >
                Logout
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
