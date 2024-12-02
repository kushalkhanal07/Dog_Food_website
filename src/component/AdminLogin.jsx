import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function AdminLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate(); 
  const searchParams = JSON.parse(new URLSearchParams(location.search).get("password"));
  const searchParams2 = JSON.parse(new URLSearchParams(location.search).get("product"));
  

  function handleSubmit(e) {
    e.preventDefault();
    
    const validCredentials = {
      admin: "admin123",
      ayush: "ayush123",
    };
    
    if (validCredentials[username] === password) {
      navigate(`/adminNavbar?value=${JSON.stringify(searchParams)}&product=${JSON.stringify(searchParams2)}`);
    } else {
      // Show error message if credentials are invalid
      setError("Invalid username or password");
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 mx-3 shadow-2xl">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-8 space-y-6">
        <h2 className="text-2xl font-bold text-center text-gray-800">Admin Login</h2>
        <h2 className="text-[14px] text-center text-gray-800"> <span className="font-bold">Username:</span> admin <span className="font-bold">Password:</span> admin123</h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          {/* Username Field */}
          <div className="relative">
            <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="username">
              Username
            </label>
            <input
              id="username"
              type="text"
              placeholder="Enter your username"
              className="block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>

          {/* Password Field */}
          <div className="relative">
            <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="password">
              Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="Enter your password"
              className="block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {/* Error Message */}
          {error && <p className="text-red-500 text-sm text-center">{error}</p>}

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-150 ease-in-out"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
