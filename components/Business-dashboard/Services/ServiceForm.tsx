// components/Business-dashboard/Services/ServiceForm.tsx
/*
import React from "react";

interface ServiceFormProps {
  service: {
    name: string;
    category: string;
    price: string;
    availability: string;
  };
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
  onCancel: () => void;
  onSave: () => void;
}

const ServiceForm: React.FC<ServiceFormProps> = ({
  service,
  onChange,
  onCancel,
  onSave,
}) => {
  return (
    <form className="space-y-4">
      <div>
        <label className="block text-gray-700">Name</label>
        <input
          type="text"
          name="name"
          value={service.name}
          onChange={onChange}
          className="w-full border p-2 rounded-md"
          placeholder="Service name"
        />
      </div>
      <div>
        <label className="block text-gray-700">Category</label>
        <input
          type="text"
          name="category"
          value={service.category}
          onChange={onChange}
          className="w-full border p-2 rounded-md"
          placeholder="Category"
        />
      </div>
      <div>
        <label className="block text-gray-700">Price</label>
        <input
          type="text"
          name="price"
          value={service.price}
          onChange={onChange}
          className="w-full border p-2 rounded-md"
          placeholder="Price"
        />
      </div>
      <div>
        <label className="block text-gray-700">Availability</label>
        <select
          name="availability"
          value={service.availability}
          onChange={onChange}
          className="w-full border p-2 rounded-md"
        >
          <option value="In Stock">In Stock</option>
          <option value="Out of Stock">Out of Stock</option>
        </select>
      </div>
      <div className="flex space-x-4">
        <button
          type="button"
          className="px-4 py-2 bg-gray-200 rounded-md"
          onClick={onCancel}
        >
          Cancel
        </button>
        <button
          type="button"
          className="px-4 py-2 bg-blue-500 text-white rounded-md"
          onClick={onSave}
        >
          Save
        </button>
      </div>
    </form>
  );
};

export default ServiceForm;
*/

import React from "react";

// Define the interface for the component props, specifying the structure of the service object
interface ServiceFormProps {
  service: {
    name: string;
    description: string;
    category: string;
    price: string;
    recurringPrice: string;
    tags: string;
    availability: string;
  };
  onChange: (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => void;
  onCancel: () => void;
  onSave: () => void;
}

// Define the functional component with destructured props
const ServiceForm: React.FC<ServiceFormProps> = ({
  service,
  onChange,
  onCancel,
  onSave,
}) => {
  return (
    <form className="space-y-6 p-6 bg-white rounded-lg">
      <h2 className="text-xl">New Service</h2>

      {/* Input field for service name */}
      <div>
        <label className="block text-gray-700">Name</label>
        <input
          type="text"
          name="name"
          value={service.name}
          onChange={onChange}
          className="w-full border p-2 rounded-md"
          placeholder="E.g. Car rental"
        />
      </div>

      {/* Textarea for service description */}
      <div>
        <label className="block text-gray-700">Description</label>
        <textarea
          name="description"
          value={service.description}
          onChange={onChange}
          className="w-full border p-2 rounded-md"
          placeholder="E.g. The all-in-one plan for growing businesses"
          rows={3}
        />
      </div>

      {/* Dropdown for selecting category */}
      <div>
        <label className="block text-gray-700">Category</label>
        <select
          name="category"
          value={service.category}
          onChange={onChange}
          className="w-full border p-2 rounded-md"
        >
          <option value="">Select a category</option>
          <option value="Travel and Tourism">Travel and Tourism</option>
          <option value="Entertainment and Recreation">
            Entertainment and Recreation
          </option>
          <option value="Food and Beverage">Food and Beverage</option>
          <option value="Nightclubs">Nightclubs</option>
        </select>
      </div>

      {/* Grid layout for price and recurring price inputs */}
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-gray-700">Price</label>
          <input
            type="text"
            name="price"
            value={service.price}
            onChange={onChange}
            className="w-full border p-2 rounded-md"
            placeholder="E.g. $50"
          />
        </div>

        <div>
          <label className="block text-gray-700">Recurring price</label>
          <input
            type="text"
            name="recurringPrice"
            value={service.recurringPrice}
            onChange={onChange}
            className="w-full border p-2 rounded-md"
            placeholder="E.g. $50"
          />
        </div>
      </div>

      {/* Input for service tags */}
      <div>
        <label className="block text-gray-700">Tags</label>
        <input
          type="text"
          name="tags"
          value={service.tags}
          onChange={onChange}
          className="w-full border p-2 rounded-md"
          placeholder="E.g. Tourism, Event planning, Lodging"
        />
      </div>

      {/* Dropdown for service availability status */}
      <div>
        <label className="block text-gray-700">Availability</label>
        <select
          name="availability"
          value={service.availability}
          onChange={onChange}
          className="w-full border p-2 rounded-md"
        >
          <option value="">Select availability</option>
          <option value="Available">Available</option>
          <option value="Unavailable">Unavailable</option>
        </select>
      </div>

      {/* Action buttons for cancel and save functionality */}
      <div className="flex justify-end space-x-4">
        <button
          type="button"
          className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md"
          onClick={onCancel}
        >
          Cancel
        </button>
        <button
          type="button"
          className="px-4 py-2 bg-blue-500 text-white rounded-md"
          onClick={onSave}
        >
          Save
        </button>
      </div>
    </form>
  );
};

export default ServiceForm;
