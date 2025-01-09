import React, { useState } from "react";
import { login } from "../Services/LoginApiCall";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const LoginPage = () => {
  const [user, setUser] = useState({
    Email: "",
    Password: "",
  });

  const navigate = useNavigate();
  const [succesfulLogin, setSuccesfulLogin] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  // method to handle the form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle login logic heres
    console.log("Email:", user.Email);

    setLoading(true);
    setError("");
    try {
      await login(user.Email, user.Password); // login returns token
      setSuccesfulLogin(true);
      navigate("/homePage");
    } catch (error) {
      setError("Login failed");
    } finally {
      setLoading(false);
    }
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
          id="Email"
          name="Email"
          value={user.Email}
          onChange={handleChange}
          className="rounded-md border border-lightGreen mb-1"
          required
        />
        <label htmlFor="password" className="text-darkGreen">
          Password
        </label>
        <input
          type="password"
          id="Password"
          name="Password"
          value={user.Password}
          onChange={handleChange}
          className="rounded-md border border-lightGreen mb-1"
          required
        />
        <button
          onClick={handleSubmit}
          className="mt-4 rounded-lg bg-darkGreen text-lightGreen p-2"
        >
          Login
        </button>
        <p className="text-darkGreen mt-4">
          Don&#39;t have an account? <Link to="/register">Register </Link>
        </p>
        <p className="text-darkGreen mt-4">
          Do you want to test <Link to="/test">TESST </Link>
        </p>
        {error && <p className="text-red-500 mt-2">{error}</p>}
        {loading && <p className="text-darkGreen mt-2">Loading...</p>}
      </div>
    </div>
  );
};

export default LoginPage;
