/*
"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Signup() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    businessName: "",
    contactNumber: "",
    businessType: "",
    agreeToTerms: false,
  });
  const [error, setError] = useState("");
  const router = useRouter();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;

    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked; // Narrow to HTMLInputElement
      setFormData((prev) => ({
        ...prev,
        [name]: checked,
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSignup = async () => {
    try {
      const response = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Signup successful!");
        router.push("/business-dashboard");
      } else {
        const data = await response.json();
        setError(data.error);
      }
    } catch (err) {
      console.error(err);
      setError("Failed to sign up.");
    }
  };

  return (
    <div>
      <h1>Sign Up as Business</h1>
      <input
        name="businessName"
        placeholder="Business Name"
        onChange={handleChange}
      />
      <input
        name="email"
        type="email"
        placeholder="Email"
        onChange={handleChange}
      />
      <input
        name="password"
        type="password"
        placeholder="Password"
        onChange={handleChange}
      />
      <input
        name="contactNumber"
        placeholder="Contact Number"
        onChange={handleChange}
      />
      <select name="businessType" onChange={handleChange}>
        <option value="">Select Business Type</option>
        <option value="Retail">Retail</option>
        <option value="Services">Services</option>
      </select>
      <label>
        <input type="checkbox" name="agreeToTerms" onChange={handleChange} />{" "}
        Agree to Terms
      </label>
      <button onClick={handleSignup}>Sign Up</button>
      {error && <p>{error}</p>}
    </div>
  );
}
*/

"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Signup() {
  // State to manage form data and error messages
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "", // Field to confirm password
    businessName: "",
    contactNumber: "",
    businessType: "",
    agreeToTerms: false, // Checkbox for terms agreement
  });
  const [error, setError] = useState(""); // Error message state
  const router = useRouter(); // Hook to navigate between pages

  // Handler for input changes (both text and checkbox inputs)
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    console.log(
      "Input change detected:",
      e.target.name,
      e.target.value,
      e.target.type
    );
    const { name, value, type } = e.target;

    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked; // Narrowing to HTMLInputElement for checkbox
      console.log("Checkbox value:", name, checked);
      setFormData((prev) => ({
        ...prev,
        [name]: checked, // Update checkbox value in state
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value, // Update text/select input value in state
      }));
    }
  };

  // Handler for signup button click
  const handleSignup = async () => {
    console.log("Submitting form with data:", formData);

    // Validation checks
    if (
      !formData.email ||
      !formData.password ||
      !formData.businessName ||
      !formData.contactNumber ||
      !formData.businessType
    ) {
      setError("Please fill out all fields.");
      return;
    }
    if (!formData.agreeToTerms) {
      setError("You must agree to the terms and conditions.");
      return;
    }
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    try {
      const response = await fetch("/api/auth/signup", {
        method: "POST", // HTTP method
        headers: { "Content-Type": "application/json" }, // Headers for JSON data
        body: JSON.stringify(formData), // Convert form data to JSON
      });

      if (response.ok) {
        alert("Signup successful!");
        router.push("/business-dashboard"); // Navigate to dashboard on success
      } else {
        const data = await response.json();
        console.error("Signup error response:", data);
        setError(data.error); // Set error message from server
      }
    } catch (err) {
      console.error("Network or server error during signup:", err);
      setError("Failed to sign up."); // Generic error message
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4">
      {/* Form container */}
      <div className="w-full max-w-md md:max-w-4xl bg-white rounded-lg shadow-md p-8">
        <h1 className="text-2xl font-bold text-center mb-6">
          Register your business
        </h1>

        {/* Form fields */}
        <form className="space-y-4">
          <div className="flex flex-col md:flex-row md:gap-6">
            <div className="w-full md:max-w-[24rem]">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Business Name
              </label>
              <input
                type="text"
                name="businessName"
                placeholder="Enter your business name"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
                onChange={handleChange} // Input change handler
              />
            </div>

            <div className="w-full md:max-w-[24rem]">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email address"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
                onChange={handleChange} // Input change handler
              />
            </div>
          </div>

          <div className="flex flex-col md:flex-row md:gap-6">
            <div className="w-full md:max-w-[24rem]">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
                onChange={handleChange} // Input change handler
              />
            </div>

            <div className="w-full md:max-w-[24rem]">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Confirm Password
              </label>
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm your password"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
                onChange={handleChange} // Input change handler
              />
            </div>
          </div>

          <div className="flex flex-col md:flex-row md:gap-6">
            <div className="w-full md:max-w-[24rem]">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Contact Number
              </label>
              <input
                type="text"
                name="contactNumber"
                placeholder="Enter your contact number"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
                onChange={handleChange} // Input change handler
              />
            </div>

            <div className="w-full md:max-w-[24rem]">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Business Type
              </label>
              <select
                name="businessType"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
                onChange={handleChange} // Select change handler
              >
                <option value="">Select your business type</option>
                <option value="Retail">Retail</option>
                <option value="Hospitality">Hospitality</option>
                <option value="Restaurant & Cafés">Restaurant & Cafés</option>
                <option value="Healthcare">Healthcare</option>
                <option value="Beauty & Wellness">Beauty & Wellness</option>
                <option value="Education">Education</option>
                <option value="Services">Other Services</option>
              </select>
            </div>
          </div>

          <div className="flex items-center">
            <input
              type="checkbox"
              name="agreeToTerms"
              className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              onChange={handleChange} // Checkbox change handler
            />
            <label className="ml-2 block text-sm text-gray-900">
              I agree to the terms and conditions
            </label>
          </div>

          {/* Submit button */}
          <button
            type="button"
            onClick={() => {
              console.log("Signup button clicked"); // Log button click
              handleSignup();
            }}
            className="w-full bg-blue-500 text-white py-2 mt-6 rounded-md font-semibold hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
          >
            Sign Up
          </button>

          {/* Display error message if any */}
          {error && <p className="text-red-500 text-sm mt-4">{error}</p>}
        </form>
      </div>
    </div>
  );
}
