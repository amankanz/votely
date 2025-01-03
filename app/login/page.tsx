/*
"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Login() {
  const [userType, setUserType] = useState<"Business" | "Customer">("Business");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleLogin = async () => {
    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password, userType }),
      });

      if (response.ok) {
        const data = await response.json();
        document.cookie = `token=${data.accessToken}; path=/;`;

        router.push(
          userType === "Business"
            ? "/business-dashboard"
            : "/customer-dashboard"
        );
      } else {
        const data = await response.json();
        setError(data.error);
      }
    } catch (err) {
      console.error(err);
      setError("Failed to log in.");
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <div>
        <button onClick={() => setUserType("Business")}>Business</button>
        <button onClick={() => setUserType("Customer")}>Customer</button>
      </div>
      <input
        type="email"
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
      {error && <p>{error}</p>}
    </div>
  );
}
*/

/*
"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Login() {
  const [userType, setUserType] = useState(""); // Default to empty for dropdown
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleLogin = async () => {
    if (!userType) {
      setError("Please select your user type.");
      return;
    }

    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password, userType }),
      });

      if (response.ok) {
        const data = await response.json();
        document.cookie = `token=${data.accessToken}; path=/;`;

        router.push(
          userType === "Business"
            ? "/business-dashboard"
            : "/customer-dashboard"
        );
      } else {
        const data = await response.json();
        setError(data.error);
      }
    } catch (err) {
      console.error(err);
      setError("Failed to log in.");
    }
  };

  return (
    <section className="flex flex-col items-center justify-center min-h-screen">
      <div className="bg-white rounded-lg shadow-md p-8">
        <h1 className="text-2xl font-bold mb-6">Welcome to Votely 🏆🌟</h1>

        <form action="" className="flex flex-col">
          {/* User Type Dropdown =/}
          <div className="mb-4 w-full md:w-96">
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

          {/* Email Input =/}
          <div className="mb-4 w-full md:w-96">
            <label className="block mb-2 text-gray-700 font-medium">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 border rounded-md"
            />
          </div>

          {/* Password Input =/}
          <div className="mb-6 w-full md:w-96">
            <label className="block mb-2 text-gray-700 font-medium">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 border rounded-md"
            />
          </div>

          {/* Sign In Button =/}
          <button
            onClick={handleLogin}
            className="w-full md:w-96 bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
          >
            Sign in
          </button>

          {/* Error Message =/}
          {error && <p className="mt-4 text-red-500">{error}</p>}
        </form>
      </div>
    </section>
  );
}
*/

/*
"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Login() {
  const [userType, setUserType] = useState(""); // Default to empty for dropdown
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  // 🥠 Load email from cookies on component mount
  useEffect(() => {
    const getEmailFromCookies = () => {
      const cookies = document.cookie.split("; ");
      const emailCookie = cookies.find((cookie) => cookie.startsWith("email="));
      if (emailCookie) {
        const savedEmail = emailCookie.split("=")[1];
        setEmail(decodeURIComponent(savedEmail));
      }
    };

    getEmailFromCookies();
  }, []);

  const handleLogin = async () => {
    if (!userType) {
      setError("Please select your user type.");
      return;
    }

    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password, userType }),
      });

      if (response.ok) {
        const data = await response.json();
        document.cookie = `token=${data.accessToken}; path=/;`;
        document.cookie = `email=${encodeURIComponent(email)}; path=/;`;

        router.push(
          userType === "Business"
            ? "/business-dashboard"
            : "/customer-dashboard"
        );
      } else {
        const data = await response.json();
        setError(data.error);
      }
    } catch (err) {
      console.error(err);
      setError("Failed to log in.");
    }
  };

  return (
    <section className="flex flex-col items-center justify-center min-h-screen">
      <div className="bg-white rounded-lg shadow-md p-8">
        <h1 className="text-2xl font-bold mb-6">🏆 Welcome to Votely 🌟</h1>

        <form action="" className="flex flex-col">
          {/* User Type Dropdown =/}
          <div className="mb-4 w-full md:w-96">
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

          {/* Email Input =/}
          <div className="mb-4 w-full md:w-96">
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

          {/* Password Input =/}
          <div className="mb-6 w-full md:w-96">
            <label className="block mb-2 text-gray-700 font-medium">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 border rounded-md"
            />
          </div>

          {/* Sign In Button =/}
          <button
            type="button"
            onClick={handleLogin}
            className="w-full md:w-96 bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
          >
            Sign in
          </button>

          {/* Error Message =/}
          {error && <p className="mt-4 text-red-500">{error}</p>}
        </form>
      </div>
    </section>
  );
}
*/

"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Login() {
  const [userType, setUserType] = useState(""); // Default to empty for dropdown
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false); // Toggle password visibility
  const [error, setError] = useState("");
  const router = useRouter();

  // 🥠 Load email from cookies on component mount
  useEffect(() => {
    const getEmailFromCookies = () => {
      const cookies = document.cookie.split("; ");
      const emailCookie = cookies.find((cookie) => cookie.startsWith("email="));
      if (emailCookie) {
        const savedEmail = emailCookie.split("=")[1];
        setEmail(decodeURIComponent(savedEmail));
      }
    };

    getEmailFromCookies();
  }, []);

  const handleLogin = async () => {
    if (!userType) {
      setError("Please select your user type.");
      return;
    }

    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password, userType }),
      });

      if (response.ok) {
        const data = await response.json();
        document.cookie = `token=${data.accessToken}; path=/;`;
        document.cookie = `email=${encodeURIComponent(email)}; path=/;`;

        router.push(
          userType === "Business"
            ? "/business-dashboard"
            : "/customer-dashboard"
        );
      } else {
        const data = await response.json();
        setError(data.error);
      }
    } catch (err) {
      console.error(err);
      setError("Failed to log in.");
    }
  };

  return (
    <section className="flex flex-col items-center justify-center min-h-screen">
      <div className="bg-white rounded-lg shadow-md p-8">
        <h1 className="text-2xl font-bold mb-6">🏆 Welcome to Votely 🌟</h1>

        <form action="" className="flex flex-col">
          {/* User Type Dropdown */}
          <div className="mb-4 w-full md:w-96">
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
          <div className="mb-4 w-full md:w-96">
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
          <div className="mb-4 w-full md:w-96 relative">
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
          <div className="mb-6 text-right w-full md:w-96">
            <Link
              href="/forgot-password"
              className="text-blue-500 hover:underline text-sm"
            >
              Forgot Password?
            </Link>
          </div>

          {/* Sign In Button */}
          <button
            type="button"
            onClick={handleLogin}
            className="w-full md:w-96 bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
          >
            Sign in
          </button>

          {/* Error Message */}
          {error && <p className="mt-4 text-red-500">{error}</p>}
        </form>
      </div>
    </section>
  );
}
