import React, { useState } from "react";
import { Link } from "react-router-dom";

const LoginPage = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
  };

  return (
    <div className="bg-lightGreen flex flex-col items-center sm:flex-row sm:justify-center sm:items-center h-screen">
      <div className="flex justify-center m-6 text-darkGreen font-bold text-2xl sm:text-4xl">
        Share A Plate
      </div>
      <div className="flex flex-col justify-center">
        <label htmlFor="email" className="text-darkGreen">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={user.email}
          onChange={handleChange}
          className="rounded-md border border-lightGreen mb-1"
        />
        <label htmlFor="password" className="text-darkGreen">
          Password
        </label>
        <input
          type="password"
          id="password"
          name="password"
          value={user.password}
          onChange={handleChange}
          className="rounded-md border border-lightGreen mb-1"
        />
        <button
          onClick={handleSubmit}
          className="mt-4 rounded-lg bg-darkGreen text-lightGreen p-2"
        >
          Login
        </button>
        <p className="text-darkGreen mt-4">
          Don't have an account? <Link to="/register">Register </Link>
        </p>
        <p className="text-darkGreen mt-4">
          Do you want to test <Link to="/test">TESST </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
