import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const OrderSuccess: React.FC = () => {
  const navigate = useNavigate();
  const { logout } = useAuth();

  const handleHome = () => {
    navigate("/dashboard");
  };

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <div className="container mx-auto px-4 mt-10 text-center">
      <h1 className="text-2xl font-bold mb-4">Order Placed Successfully</h1>
      <p className="text-gray-600 mb-6">
        Your order has been placed and will be processed shortly.
      </p>
      <div className="flex justify-center space-x-4">
        <button
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          onClick={handleHome}
        >
          Home
        </button>
        <button
          className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400"
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default OrderSuccess;
