/*
import Sidebar from "@/components/Customer-dashboard/sidebar";
import React from "react";

function customerDashboardProfile() {
  return (
    <div className="flex flex-col sm:flex-row h-screen">
      <div className="flex flex-col md:flex-row">
        {/* Sidebar =/}
        <Sidebar />

        {/* Main Content Area =/}
        <main className="flex-1 bg-white p-8">
          {/* Placeholder for dynamic content =/}
          <h1 className="text-2xl font-bold mb-6">Welcome to Profile</h1>
          <p className="text-gray-600">
            Select an option from the sidebar to Home, List, Help
          </p>
        </main>
      </div>
    </div>
  );
}

export default customerDashboardProfile;
*/

"use client";

import React, { useState } from "react";
import Sidebar from "@/components/Customer-dashboard/sidebar";
import ProfileForm from "@/components/Customer-dashboard/Profile Mgt/ProfileForm";

const ProfileManagement: React.FC = () => {
  const [customerInfo, setCustomerInfo] = useState({
    customerName: "",
    phoneNumber: "",
    address: "",
    email: "",
    bio: "",
    logo: null as File | null,
  });

  const [isEdited, setIsEdited] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setCustomerInfo((prev) => ({ ...prev, [name]: value }));
    setIsEdited(true);
  };

  const handleLogoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      setCustomerInfo((prev) => ({ ...prev, logo: files[0] }));
      setIsEdited(true);
    }
  };

  const handleSave = () => {
    alert("Your changes have been saved!");
    setIsEdited(false);
  };

  return (
    <div className="flex flex-col sm:flex-row h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Section */}
      <main className="flex-1 flex flex-col min-h-0">
        <div className="flex-1 overflow-y-auto bg-white p-4 sm:p-6">
          <section className="max-w-3xl mx-auto">
            <h1 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">
              Profile Settings
            </h1>
            <ProfileForm
              customerInfo={customerInfo}
              handleInputChange={handleInputChange}
              handleLogoUpload={handleLogoUpload}
            />
          </section>
          <div className="mt-4 sm:mt-6 flex justify-end">
            <button
              type="button"
              disabled={!isEdited}
              onClick={handleSave}
              className={`px-4 sm:px-6 py-2 font-medium text-sm sm:text-base rounded-md shadow focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                isEdited
                  ? "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500"
                  : "bg-gray-300 text-gray-500 cursor-not-allowed"
              }`}
            >
              Save Changes
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProfileManagement;
