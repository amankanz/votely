"use client";
import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import SubmitButton from "@/components/Signup/SubmitButton";
import Spinner from "@/components/Spinner"; // Reuse your existing spinner

export default function Login() {
  const [userType, setUserType] = useState(""); // Default to empty for dropdown
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false); // Toggle password visibility
  const [error, setError] = useState("");
  const router = useRouter();
  const currentPathname = usePathname(); // Get the current route
  const [isNavigating, setIsNavigating] = useState(false); // Spinner control

  useEffect(() => {
    // Stop the spinner when the pathname changes
    if (isNavigating && currentPathname !== "/login") {
      setIsLoading(false);
      setIsNavigating(false);
    }
  }, [currentPathname, isNavigating]);

  const handleLogin = async () => {
    if (!userType) {
      setError("Please select your user type.");
      return;
    }

    setError("");
    setIsLoading(true);
    setIsNavigating(true); // Set navigating to true to wait for route change

    try {
      const response = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password, userType }),
      });

      const data = await response.json();

      if (response.ok) {
        document.cookie = `token=${data.accessToken}; path=/; Secure; SameSite=Strict`;
        document.cookie = `email=${encodeURIComponent(email)}; path=/;`;

        router.push(
          userType === "Business"
            ? "/business-dashboard"
            : "/customer-dashboard"
        );
      } else {
        setError(data.error || "Login failed. Please try again.");
        setIsLoading(false);
        setIsNavigating(false); // Reset navigation state on error
      }
    } catch (err) {
      console.error(err);
      setError("An unexpected error occurred.");
      setIsLoading(false);
      setIsNavigating(false); // Reset navigation state on error
    }
  };

  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen">
      {/* Spinner Overlay */}
      {(isLoading || isNavigating) && (
        <div className="absolute inset-0 flex items-center justify-center bg-white/50 z-50">
          <Spinner />
        </div>
      )}

      <div
        className={`bg-white rounded-lg shadow-md p-8 text-center ${
          isLoading ? "opacity-50 pointer-events-none" : ""
        }`}
      >
        <h1 className="text-2xl font-bold mb-6">🏆 Welcome to Votely 🌟</h1>

        <form action="" className="flex flex-col text-start">
          {/* User Type Dropdown */}
          <div className="mb-4 w-full md:w-96 mx-auto">
            <label className="block mb-2 text-gray-700 font-medium">
              Choose your type
            </label>
            <select
              value={userType}
              onChange={(e) => setUserType(e.target.value)}
              className="w-full p-2 border rounded-md"
            >
              <option value="">Select one</option>
              <option value="Business">Business</option>
              <option value="Customer">Customer</option>
            </select>
          </div>

          {/* Email Input */}
          <div className="mb-4 w-full md:w-96 mx-auto">
            <label className="block mb-2 text-gray-700 font-medium">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 border rounded-md"
            />
          </div>

          {/* Password Input with Toggle Visibility */}
          <div className="mb-4 w-full md:w-96 relative mx-auto">
            <label className="block mb-2 text-gray-700 font-medium">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-2 border rounded-md pr-10"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-2 top-2 text-gray-500 hover:text-gray-700"
              >
                {showPassword ? "🙈" : "👁️"}
              </button>
            </div>
          </div>

          {/* Forgot Password Link */}
          <div className="mb-6 text-right w-full md:w-96 mx-auto">
            <Link
              href="/forgot-password"
              className="text-blue-500 hover:underline text-sm"
            >
              Forgot Password?
            </Link>
          </div>

          {/* Sign In Button */}
          <SubmitButton
            isLoading={isLoading}
            onClick={handleLogin}
            label="Sign in"
          />

          {/* Error Message */}
          {error && <p className="mt-4 text-red-500">{error}</p>}
        </form>

        {/* CTA for Login */}
        <p className="mt-6 text-center text-sm text-gray-600">
          Don&#39;t have an account? Sign up as a{" "}
          <Link
            href="/signup/business"
            className="text-blue-600 font-medium hover:underline"
          >
            Business User
          </Link>{" "}
          or a{" "}
          <Link
            href="/signup/customer"
            className="text-blue-600 font-medium hover:underline"
          >
            Customer User
          </Link>
          .
        </p>
      </div>
    </section>
  );
}
