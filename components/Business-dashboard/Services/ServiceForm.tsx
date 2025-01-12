// components/Business-dashboard/Services/ServiceForm.tsx
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
