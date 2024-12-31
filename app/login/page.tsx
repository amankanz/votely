// app/login/page.tsx
/*
"use client";
import { useState } from "react";

export default function LoginPage() {
  const [userType, setUserType] = useState("business");
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Login Data:", { ...formData, userType });
    // Add API call here for login
  };

  return (
    <section className="max-w-md mx-auto mt-12 p-8 border rounded-md shadow-md">
      <h1 className="text-2xl font-bold mb-6 text-center">Sign In</h1>
      <div className="flex justify-center mb-4 space-x-4">
        <button
          className={`p-2 rounded-md ${
            userType === "business" ? "bg-blue-600 text-white" : "bg-gray-200"
          }`}
          onClick={() => setUserType("business")}
        >
          Business
        </button>
        <button
          className={`p-2 rounded-md ${
            userType === "customer" ? "bg-blue-600 text-white" : "bg-gray-200"
          }`}
          onClick={() => setUserType("customer")}
        >
          Customer
        </button>
      </div>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded-md"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded-md"
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700"
        >
          Login
        </button>
      </form>
    </section>
  );
}
*/

/*
"use client";
import { auth } from "@/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert("Login successful!");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}
*/

/*
"use client";
import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async () => {
    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();

      if (response.ok) {
        alert("Login successful!");
      } else {
        setError(data.error);
      }
    } catch (error) {
      console.error(error);
      setError("Failed to log in.");
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
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
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleLogin = async () => {
    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();

      if (response.ok) {
        // Save the Firebase token in cookies
        document.cookie = `token=${data.user.accessToken}; path=/;`;
        alert("Login successful!");

        // Redirect to the dashboard
        router.push("/business-dashboard");
      } else {
        setError(data.error);
      }
    } catch (error) {
      console.error(error);
      setError("Failed to log in.");
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
      {error && <p>{error}</p>}
    </div>
  );
}
*/

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
