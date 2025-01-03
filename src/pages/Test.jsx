import React, { useState } from "react";
import { Link } from "react-router-dom";
import foodImage from "../Assets/food.png"; // Import the image

const Tests = () => {
  return (
    <div className="w-full min-h-screen bg-gray-100 p-4">
      {/* Main container with flex */}
      <div className="w-full flex flex-col md:flex-row gap-4">
        {/* Image container */}
        <div className="hidden md:block w-full md:w-1/2 bg-white p-4">
          <img
            src={foodImage}
            alt="Test image"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        {/* Content container */}
        <div className="w-full md:w-1/2 bg-white p-4">
          <h2 className="text-xl font-bold">Content Section</h2>
          <p>
            This section should take full width on mobile and half width on
            desktop
          </p>
        </div>
      </div>

      {/* Width indicator */}
      <div className="fixed top-0 right-0 bg-black text-white p-2">
        <p className="block md:hidden">Mobile View (Hidden Image)</p>
        <p className="hidden md:block">Desktop View (50% Width)</p>
      </div>
    </div>
  );
};

export default Tests;
