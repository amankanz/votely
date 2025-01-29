// components/Business-dashboard/Services/ServiceTable.tsx
import React from "react";

interface Service {
  id: number;
  name: string;
  description: string;
  category: string;
  price: string;
  recurringPrice: string;
  tags: string;
  availability: string;
}

interface ServiceTableProps {
  services: Service[];
  onEdit: (id: number) => void;
  onDelete: (id: number) => void;
  onDuplicate: (service: Service) => void;
}

const ServiceTable: React.FC<ServiceTableProps> = ({
  services,
  onEdit,
  onDelete,
  onDuplicate,
}) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-4 text-left text-sm font-medium text-gray-600">
              Service
            </th>
            <th className="p-4 text-left text-sm font-medium text-gray-600">
              Category
            </th>
            <th className="p-4 text-left text-sm font-medium text-gray-600">
              Price
            </th>
            <th className="p-4 text-left text-sm font-medium text-gray-600">
              Availability
            </th>
            <th className="p-4 text-left text-sm font-medium text-gray-600">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {services.map((service) => (
            <tr key={service.id} className="border-t">
              <td className="p-4 text-sm">{service.name}</td>
              <td className="p-4 text-sm">{service.category}</td>
              <td className="p-4 text-sm">{service.price}</td>
              <td className="p-4 text-sm text-nowrap">
                <span
                  className={`px-2 py-1 text-xs rounded-md ${
                    service.availability === "Available"
                      ? "bg-green-100 text-green-600"
                      : "bg-red-100 text-red-600"
                  }`}
                >
                  {service.availability}
                </span>
              </td>
              <td className="p-4 text-sm flex flex-col space-y-4 lg:flex-row lg:space-x-4 lg:space-y-0 lg:items-center">
                <button
                  className="text-blue-600 hover:underline"
                  onClick={() => onEdit(service.id)}
                >
                  Edit
                </button>
                <button
                  className="text-gray-600 hover:underline"
                  onClick={() => onDuplicate(service)}
                >
                  Duplicate
                </button>
                <button
                  className="text-red-600 hover:underline"
                  onClick={() => onDelete(service.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ServiceTable;
