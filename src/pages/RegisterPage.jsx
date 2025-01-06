import React, { useState } from "react";
import foodImage from "../Assets/food.png";

const RegistrationPage = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    location: "",
    password: "",
    rePassword: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-sage-50">
      <div className="bg-lightGreen bg-sage-400 bg-red-300 bg-gray-600 p-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-semibold text-white">SHARE A PLATE</h1>
          <nav>
            <ul className="flex space-x-6 text-white text-base">
              <li>Our Vision</li>
              <li>Connect with us</li>
            </ul>
          </nav>
        </div>
      </div>

      <div className="max-w-6xl mx-auto p-8 flex gap-8">
        <div className="flex-1">
          <img
            src={foodImage}
            alt="Healthy meal plate"
            className="rounded-full w-full h-full object-cover"
          />
        </div>

        <div className="flex-1">
          <div className="bg-white/80 p-6 rounded-lg shadow-sm border-2 border-black">
            <h2 className="text-2xl font-semibold text-sage-800 mb-6">
              Register
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4 ">
              <div>
                <label className="block text-sm font-medium text-sage-700">
                  First name
                </label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-sage-300 shadow-sm p-2 focus:ring-sage-500 focus:border-sage-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-sage-700">
                  Last name
                </label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-sage-300 shadow-sm p-2 focus:ring-sage-500 focus:border-sage-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-sage-700">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-sage-300 shadow-sm p-2 focus:ring-sage-500 focus:border-sage-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-sage-700">
                  Phone
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-sage-300 shadow-sm p-2 focus:ring-sage-500 focus:border-sage-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-sage-700">
                  Location
                </label>
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-sage-300 shadow-sm p-2 focus:ring-sage-500 focus:border-sage-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-sage-700">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-sage-300 shadow-sm p-2 focus:ring-sage-500 focus:border-sage-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-sage-700">
                  Re-enter Password
                </label>
                <input
                  type="password"
                  name="rePassword"
                  value={formData.rePassword}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-sage-300 shadow-sm p-2 focus:ring-sage-500 focus:border-sage-500"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-sage-700 text-white rounded-md py-2 px-4 hover:bg-sage-800 transition-colors"
              >
                Register
              </button>
            </form>
          </div>
        </div>
      </div>

      <footer className="bg-sage-700 text-white text-center py-4 mt-8">
        <p>Copyright © 2024 Share A Plate. All Rights Reserved</p>
      </footer>
    </div>
  );
};

export default RegistrationPage;
