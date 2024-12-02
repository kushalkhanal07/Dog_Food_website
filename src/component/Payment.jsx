import React, { useState } from "react";

export default function Payment() {
  // State for form fields
  const [emailOrMobile, setEmailOrMobile] = useState("");
  const [password, setPassword] = useState("");

  // State for errors
  const [errors, setErrors] = useState({});

  // Regex to validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Form submission handler
  const handleSubmit = (e) => {
    e.preventDefault();
    let formErrors = {};

    // Validate Email or Mobile
    if (!emailOrMobile) {
      formErrors.emailOrMobile = "Mobile or Email is required";
    } else if (!emailRegex.test(emailOrMobile) && isNaN(emailOrMobile)) {
      formErrors.emailOrMobile = "Enter a valid email or mobile number";
    }

    // Validate Password
    if (!password) {
      formErrors.password = "Password is required";
    } else if (password.length < 6) {
      formErrors.password = "Password must be at least 6 characters";
    }

    setErrors(formErrors);

    // If no errors, proceed with form submission logic
    if (Object.keys(formErrors).length === 0) {
      alert("Form Submitted Successfully!");
      // You can add further logic to handle the successful form submission (like API calls).
    }
  };

  return (
    <div className="min-h-screen bg-purple-900 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-[350px]">
        {/* Icon Header */}
        <div className="relative flex justify-center mb-6">
          <div className="w-12 h-12 bg-purple-800 rounded-full flex items-center justify-center text-white text-3xl font-bold relative">
            K
            <span className="absolute -top-1 -right-1 bg-yellow-500 w-3 h-3 rounded-full"></span>
          </div>
        </div>

        {/* Form */}
        <form className="space-y-6" onSubmit={handleSubmit}>
          {/* Mobile or Email Input */}
          <div className="relative">
            <input
              type="text"
              value={emailOrMobile}
              onChange={(e) => setEmailOrMobile(e.target.value)}
              placeholder="Mobile or Email"
              className={`w-full border-b-2 ${
                errors.emailOrMobile ? "border-red-500" : "border-gray-300"
              } focus:outline-none focus:border-purple-600 py-2 pl-10 pr-2`}
            />
            <span className="absolute left-0 top-1/2 transform -translate-y-1/2 text-gray-500">
              <i className="fas fa-user"></i>
            </span>
            {errors.emailOrMobile && (
              <p className="text-red-500 text-sm mt-1">{errors.emailOrMobile}</p>
            )}
          </div>

          <div className="relative">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className={`w-full border-b-2 ${
                errors.password ? "border-red-500" : "border-gray-300"
              } focus:outline-none focus:border-purple-600 py-2 pl-10 pr-10`}
            />
            <span className="absolute left-0 top-1/2 transform -translate-y-1/2 text-gray-500">
              <i className="fas fa-lock"></i>
            </span>
            <span className="absolute right-0 top-1/2 transform -translate-y-1/2 text-gray-500 cursor-pointer">
              <i className="fas fa-eye"></i>
            </span>
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">{errors.password}</p>
            )}
          </div>

          
          <div>
            <button
              type="submit"
              className="w-full bg-purple-600 text-white py-2 rounded hover:bg-purple-700 focus:outline-none"
            >
             Pay
            </button>
          </div>
        </form>

        

        
      </div>
    </div>
  );
}
