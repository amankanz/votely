"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import FormInput from "@/components/Signup/FormInput";
import PasswordInput from "@/components/Signup/PasswordInput";
import SelectInput from "@/components/Signup/SelectInput";
import CheckboxInput from "@/components/Signup/CheckboxInput";
import ErrorDisplay from "@/components/Signup/ErrorDisplay";
import SubmitButton from "@/components/Signup/SubmitButton";
import Link from "next/link";
import { montserrat } from "@/lib/font";
import ToastMsg from "@/components/ToastMsg";
import { SignupCreatedFlagContext } from "@/context/SignupCreatedFlagContext";

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
  const [showToastMsg, setShowToastMsg] = useState<string | null>(null);

  const router = useRouter();

  // Show Toast Msg
  useEffect(() => {
    if (showToastMsg) {
      setTimeout(() => {
        setShowToastMsg(null);
      }, 3000);
    }
  }, [showToastMsg]);

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
        setShowToastMsg(formData.businessName);
        setTimeout(() => {
          router.push(data.redirectTo || "/business-dashboard");
          console.log("API Response:", data);
        }, 3000);
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
    <SignupCreatedFlagContext.Provider
      value={{ showToastMsg, setShowToastMsg }}
    >
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4">
        {showToastMsg && (
          <ToastMsg
            styles={"absolute"}
            msg={`${showToastMsg} has been successfully registered. ✅`}
          />
        )}
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
    </SignupCreatedFlagContext.Provider>
  );
}
