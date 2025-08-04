"use client";

import React, { useState } from "react";
import { Button } from "@headlessui/react";

export default function Careers() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    position: "",
    resume: null,
  });

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "file" ? files[0] : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitting career form:", formData);
  };

  return (
    <div className="bg-white w-full py-20 px-4">
      <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Left Column - Info */}
        <div className="space-y-6">
          <h2 className="sub-heading">
            Careers at Lael Designers
          </h2>
          <p className="text-blacktext-md">
            Join our creative and collaborative team to shape the future of
            design. We’re always looking for passionate individuals who thrive
            in a dynamic, design-driven environment.
          </p>
          <div className="space-y-4 text-sm text-gray-700">
            <p>
               <strong className="text-black">Location:</strong> XXXII/523 Toll Junction,Paruthelipalam Edappally,Kochi

            </p>
            <p>
               <strong className="text-black">Email:</strong> info@laeldesigners.com
            </p>
            <p>
               <strong className="text-black">Phone:</strong> +91 9496411902
            </p>
          </div>
        </div>

        {/* Right Column - Form */}
        <div className="bg-[#F3F4F4] rounded-xl p-8 shadow-md">
          <h3 className="text-2xl font-semibold mb-6">Apply Now</h3>
          <form className="space-y-5" onSubmit={handleSubmit}>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Full Name*
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                required
                onChange={handleChange}
                className="mt-1 block w-full border rounded-md shadow-sm py-2 px-3 sm:text-sm"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Email*
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  required
                  onChange={handleChange}
                  className="mt-1 block w-full border rounded-md shadow-sm py-2 px-3 sm:text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Phone Number*
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  required
                  onChange={handleChange}
                  className="mt-1 block w-full border rounded-md shadow-sm py-2 px-3 sm:text-sm"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Position Applied For*
              </label>
              <input
                type="text"
                name="position"
                value={formData.position}
                required
                onChange={handleChange}
                className="mt-1 block w-full border rounded-md shadow-sm py-2 px-3 sm:text-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Upload Resume*
              </label>
              <input
                type="file"
                name="resume"
                accept=".pdf,.doc,.docx"
                required
                onChange={handleChange}
                className="mt-1 block w-full border rounded-md shadow-sm py-2 px-3 sm:text-sm file:bg-yellow-100 file:rounded file:border-none"
              />
            </div>

            <div className="pt-4">
              <Button
                type="submit"
                className="h-10 w-full lg:w-fit rounded-full bg-gradient-to-b from-[#FFF289] to-[#FDD012] text-black font-medium px-10"
              >
                Submit Application
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
