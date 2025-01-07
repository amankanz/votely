/*
"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Signup() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    businessName: "",
    contactNumber: "",
    businessType: "",
    agreeToTerms: false,
  });
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false); // Toggle visibility for passwords

  const router = useRouter();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;

    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSignup = async () => {
    if (
      !formData.email ||
      !formData.password ||
      !formData.businessName ||
      !formData.contactNumber ||
      !formData.businessType ||
      !formData.agreeToTerms
    ) {
      setError("Please fill out all fields.");
      return;
    }
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    setError("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        router.push(data.redirectTo || "/business-dashboard");
      } else {
        setError(data.error || "Signup failed.");
      }
    } catch (err) {
      console.error(err);
      setError("Failed to sign up.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-md md:max-w-4xl bg-white rounded-lg shadow-md p-8">
        <h1 className="text-2xl font-bold text-center mb-6">
          Register your business
        </h1>

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
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
                onChange={handleChange}
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
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
                onChange={handleChange}
              />
            </div>
          </div>

          {/* Password Fields =/}
          <div className="flex flex-col md:flex-row md:gap-6">
            <div className="w-full md:max-w-[24rem] relative">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Enter your password"
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
                onChange={handleChange}
              />
            </div>

            <div className="w-full md:max-w-[24rem] relative">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Confirm Password
              </label>
              <input
                type={showPassword ? "text" : "password"}
                name="confirmPassword"
                placeholder="Confirm your password"
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
                onChange={handleChange}
              />
            </div>
          </div>

          {/* Toggle Password Visibility =/}
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              id="showPassword"
              checked={showPassword}
              onChange={() => setShowPassword(!showPassword)}
              className="h-4 w-4"
            />
            <label htmlFor="showPassword" className="text-sm text-gray-700">
              Show Password
            </label>
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
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
                onChange={handleChange}
              />
            </div>

            <div className="w-full md:max-w-[24rem]">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Business Type
              </label>
              <select
                name="businessType"
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
                onChange={handleChange}
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

          {/* Terms Agreement =/}
          <div className="flex items-center">
            <input
              type="checkbox"
              id="agreeToTerms"
              name="agreeToTerms"
              className="h-4 w-4 text-blue-600 border-gray-300 rounded"
              onChange={handleChange}
            />
            <label
              htmlFor="agreeToTerms"
              className="ml-2 text-sm text-gray-900"
            >
              I agree to the terms and conditions
            </label>
          </div>

          {/* Submit Button =/}
          {/* <button
            type="button"
            onClick={handleSignup}
            className="w-full bg-blue-500 text-white py-2 mt-6 rounded-md"
          >
            Sign Up
          </button> =/}
          {/* Loading Indicator =/}
          {isLoading ? (
            <div className="text-center text-blue-500">Registering...</div>
          ) : (
            <button
              type="button"
              onClick={handleSignup}
              disabled={isLoading}
              className="w-full bg-blue-500 text-white py-2 rounded-md"
            >
              Sign Up
            </button>
          )}

          {/* Error Display =/}
          {error && <p className="text-red-500 text-sm mt-4">{error}</p>}
        </form>
      </div>
    </div>
  );
}
*/

"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import FormInput from "@/components/Signup/FormInput";
import PasswordInput from "@/components/Signup/PasswordInput";
import SelectInput from "@/components/Signup/SelectInput";
import CheckboxInput from "@/components/Signup/CheckboxInput";
import ErrorDisplay from "@/components/Signup/ErrorDisplay";
import SubmitButton from "@/components/Signup/SubmitButton";
import Link from "next/link";
import { montserrat } from "@/lib/font";

export default function Signup() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    businessName: "",
    contactNumber: "",
    businessType: "",
    agreeToTerms: false,
  });
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const router = useRouter();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    const checked =
      type === "checkbox" ? (e.target as HTMLInputElement).checked : undefined;
    setFormData((prev) => ({ ...prev, [name]: checked ?? value }));
  };

  const handleSignup = async () => {
    // Validation
    if (
      !formData.email ||
      !formData.password ||
      !formData.confirmPassword ||
      !formData.businessName ||
      !formData.contactNumber ||
      !formData.businessType ||
      !formData.agreeToTerms
    ) {
      setError("Please fill out all fields.");
      return;
    }
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    setError("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/signup/business", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      // Ensure JSON content type
      const contentType = response.headers.get("content-type");
      if (!contentType?.includes("application/json")) {
        const textResponse = await response.text(); // Log the raw response
        console.error("Unexpected Response:", textResponse);
        throw new Error(`Unexpected content type: ${contentType}`);
      }

      const data = await response.json();

      if (response.ok) {
        router.push(data.redirectTo || "/business-dashboard");
      } else {
        setError(data.error || "Signup failed.");
      }
    } catch (err) {
      console.error("Signup Error:", err);
      setError(err instanceof Error ? err.message : "Failed to sign up.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-md md:max-w-4xl bg-white rounded-lg shadow-md p-8">
        <h1
          className={`text-2xl font-bold text-center mb-6 ${montserrat.className}`}
        >
          Register your business 🚀
        </h1>
        <form className="space-y-4">
          <div className="flex flex-col md:flex-row md:gap-6">
            <FormInput
              label="Business Name"
              name="businessName"
              placeholder="Enter your business name"
              onChange={handleChange}
            />
            <FormInput
              label="Email"
              name="email"
              placeholder="Enter your email address"
              type="email"
              onChange={handleChange}
            />
          </div>

          <div className="flex flex-col md:flex-row md:gap-6">
            <PasswordInput
              label="Password"
              name="password"
              placeholder="Enter your password"
              onChange={handleChange}
              showPassword={showPassword}
              toggleVisibility={() => setShowPassword((prev) => !prev)}
            />
            <PasswordInput
              label="Confirm Password"
              name="confirmPassword"
              placeholder="Confirm your password"
              onChange={handleChange}
              showPassword={showPassword}
              toggleVisibility={() => setShowPassword((prev) => !prev)}
            />
          </div>

          <div className="flex flex-col md:flex-row md:gap-6">
            <FormInput
              label="Contact Number"
              name="contactNumber"
              placeholder="Enter your contact number"
              onChange={handleChange}
            />
            <SelectInput
              label="Business Type"
              name="businessType"
              options={[
                "Retail",
                "Hospitality",
                "Restaurant & Cafés",
                "Healthcare",
                "Beauty & Wellness",
                "Education",
                "Other Services",
              ]}
              onChange={handleChange}
            />
          </div>

          <CheckboxInput
            label="I agree to the terms and conditions"
            name="agreeToTerms"
            onChange={handleChange}
          />

          <ErrorDisplay error={error} />

          <SubmitButton
            isLoading={isLoading}
            onClick={handleSignup}
            label="Sign Up"
          />
        </form>

        {/* CTA for Login */}
        <p className="mt-6 text-center text-sm text-gray-600">
          Already have an account?{" "}
          <Link
            href="/login"
            className="text-blue-600 font-medium hover:underline"
          >
            Log in here
          </Link>
        </p>
      </div>
    </div>
  );
}
