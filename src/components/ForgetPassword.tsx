import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { forgotPassword } from "../utils/api";

const ForgetPassword: React.FC = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    await forgotPassword(email); // Mock for now; JD Edwards API call later
    setMessage("If the email exists, a reset link has been sent.");
  };

  return (
    <div className="container mx-auto px-4 mt-10 max-w-md">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Forget Password</h2>
        {message && (
          <div className="bg-blue-100 text-blue-700 p-3 mb-4 rounded">
            {message}
          </div>
        )}
        <div className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full p-2 border rounded"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="flex space-x-4">
            <button
              className="flex-1 bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
              onClick={handleSubmit}
            >
              Reset Password
            </button>
            <button
              className="flex-1 bg-gray-300 p-2 rounded hover:bg-gray-400"
              onClick={() => navigate("/")}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;
