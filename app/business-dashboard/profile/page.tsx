/*
import React from "react";
import Sidebar from "@/components/Business-dashboard/Sidebar";

const ProfileManagement: React.FC = () => {
  return (
    <div className="flex flex-col sm:flex-row h-screen">
      <div className="flex flex-col md:flex-row">
        {/* Sidebar =/}
        <Sidebar />

        {/* Main Content Area =/}
        <main className="flex-1 bg-white p-8">
          {/* Placeholder for dynamic content =/}
          <h1 className="text-2xl font-bold mb-6">
            Welcome to Your Profile Management Area
          </h1>
          <p className="text-gray-600">
            Select other option from the sidebar to manage your business
            services, awards, or view analytics.
          </p>
        </main>
      </div>
    </div>
  );
};

export default ProfileManagement;
*/

/*
"use client";

import React, { useState } from "react";
import Sidebar from "@/components/Business-dashboard/Sidebar";
import ProfileForm from "@/components/Business-dashboard/Profile Mgt/ProfileForm";
import Gallery from "@/components/Business-dashboard/Profile Mgt/Gallery";

const ProfileManagement: React.FC = () => {
  const [businessInfo, setBusinessInfo] = useState({
    companyName: "",
    tagline: "",
    phoneNumber: "",
    address: "",
    email: "",
    description: "",
    logo: null as File | null,
  });

  const [gallery, setGallery] = useState<File[]>([]);
  const [isEdited, setIsEdited] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setBusinessInfo((prev) => ({ ...prev, [name]: value }));
    setIsEdited(true);
  };

  const handleLogoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setBusinessInfo((prev) => ({ ...prev, logo: e.target.files[0] }));
      setIsEdited(true);
    }
  };

  const handleGalleryUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setGallery((prev) => [...prev, ...Array.from(e.target.files)]);
      setIsEdited(true);
    }
  };

  const handleDeleteImage = (index: number) => {
    setGallery((prev) => prev.filter((_, i) => i !== index));
    setIsEdited(true);
  };

  const handleSave = () => {
    alert("Your changes have been saved!");
    setIsEdited(false);
  };

  return (
    <div className="flex flex-col sm:flex-row h-screen bg-gray-100">
      <div className="flex flex-col md:flex-row">
        {/* Sidebar =/}
        <Sidebar />

        {/* Main section =/}
        <main className="flex-1 flex flex-col min-h-screen overflow-hidden">
          <div className="flex-1 overflow-y-auto bg-white p-4 sm:p-6">
            <section className="max-w-3xl mx-auto">
              <h1 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">
                Profile Settings
              </h1>
              <ProfileForm
                businessInfo={businessInfo}
                handleInputChange={handleInputChange}
                handleLogoUpload={handleLogoUpload}
              />
            </section>
            <Gallery
              gallery={gallery}
              handleGalleryUpload={handleGalleryUpload}
              handleDeleteImage={handleDeleteImage}
            />
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
    </div>
  );
};

export default ProfileManagement;
*/

"use client";

import React, { useState } from "react";
import Sidebar from "@/components/Business-dashboard/Sidebar";
import ProfileForm from "@/components/Business-dashboard/Profile Mgt/ProfileForm";
import Gallery from "@/components/Business-dashboard/Profile Mgt/Gallery";

const ProfileManagement: React.FC = () => {
  const [businessInfo, setBusinessInfo] = useState({
    companyName: "",
    tagline: "",
    phoneNumber: "",
    address: "",
    email: "",
    description: "",
    logo: null as File | null,
  });

  const [gallery, setGallery] = useState<File[]>([]);
  const [isEdited, setIsEdited] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setBusinessInfo((prev) => ({ ...prev, [name]: value }));
    setIsEdited(true);
  };

  const handleLogoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setBusinessInfo((prev) => ({ ...prev, logo: e.target.files[0] }));
      setIsEdited(true);
    }
  };

  const handleGalleryUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setGallery((prev) => [...prev, ...Array.from(e.target.files)]);
      setIsEdited(true);
    }
  };

  const handleDeleteImage = (index: number) => {
    setGallery((prev) => prev.filter((_, i) => i !== index));
    setIsEdited(true);
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
              businessInfo={businessInfo}
              handleInputChange={handleInputChange}
              handleLogoUpload={handleLogoUpload}
            />
          </section>
          <Gallery
            gallery={gallery}
            handleGalleryUpload={handleGalleryUpload}
            handleDeleteImage={handleDeleteImage}
          />
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
