import React from "react";

interface ProfileFormProps {
  customerInfo: {
    customerName: string;
    phoneNumber: string;
    address: string;
    email: string;
    bio: string;
    logo: File | null;
  };
  handleInputChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  handleLogoUpload: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const ProfileForm: React.FC<ProfileFormProps> = ({
  customerInfo,
  handleInputChange,
  handleLogoUpload,
}) => {
  return (
    <form className="space-y-4">
      {/* Company Name */}
      <div>
        <label
          htmlFor="customerName"
          className="block text-sm font-medium text-gray-700"
        >
          Full Name
        </label>
        <input
          type="text"
          id="customerName"
          name="customerName"
          value={customerInfo.customerName}
          onChange={handleInputChange}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      {/* Phone Number */}
      <div>
        <label
          htmlFor="phoneNumber"
          className="block text-sm font-medium text-gray-700"
        >
          Phone Number
        </label>
        <input
          type="text"
          id="phoneNumber"
          name="phoneNumber"
          value={customerInfo.phoneNumber}
          onChange={handleInputChange}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      {/* Email */}
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700"
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={customerInfo.email}
          onChange={handleInputChange}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      {/* Description */}
      <div>
        <label
          htmlFor="description"
          className="block text-sm font-medium text-gray-700"
        >
          Bio
        </label>
        <textarea
          id="description"
          name="description"
          rows={4}
          value={customerInfo.bio}
          onChange={handleInputChange}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
        ></textarea>
      </div>
      {/* Logo Upload */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Profile Image
        </label>
        <input
          type="file"
          onChange={handleLogoUpload}
          className="block w-full text-sm text-gray-500
          file:mr-4 file:py-2 file:px-4
          file:rounded-md file:border
          file:border-gray-300 file:text-sm file:font-medium
          file:bg-gray-50 file:text-gray-700
          hover:file:bg-gray-100"
        />
        <p className="mt-2 text-sm text-gray-500">Recommended size: 100×100</p>
      </div>
    </form>
  );
};

export default ProfileForm;
