/*
import Sidebar from "@/components/Business-dashboard/Sidebar";
import React from "react";

const Services: React.FC = () => {
  return (
    <div className="flex flex-col sm:flex-row h-screen">
      <div className="flex flex-col md:flex-row">
        {/* Sidebar =/}
        <Sidebar />

        {/* Main Content Area =/}
        <main className="flex-1 bg-white p-8">
          {/* Placeholder for dynamic content =/}
          <h1 className="text-2xl font-bold mb-6">
            Welcome to Your Services/Products Area
          </h1>
          <p className="text-gray-600">
            Select an option from the sidebar to manage your business profile,
            awards, or view analytics.
          </p>
        </main>
      </div>
    </div>
  );
};

export default Services;
*/

/*
"use client";

import React, { useState } from "react";
import Sidebar from "@/components/Business-dashboard/Sidebar";

interface Service {
  id: number;
  name: string;
  description: string;
  category: string;
  price: string;
  recurringPrice?: string;
  tags: string[];
  availability: string;
}

const Services: React.FC = () => {
  const [services, setServices] = useState<Service[]>([]);
  const [isAddingService, setIsAddingService] = useState(false);

  const [newService, setNewService] = useState<Service>({
    id: 0,
    name: "",
    description: "",
    category: "",
    price: "",
    recurringPrice: "",
    tags: [],
    availability: "",
  });

  // Handles form field changes
  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setNewService((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handles adding a new service
  const handleAddService = () => {
    setServices((prev) => [
      ...prev,
      { ...newService, id: services.length + 1 },
    ]);
    setNewService({
      id: 0,
      name: "",
      description: "",
      category: "",
      price: "",
      recurringPrice: "",
      tags: [],
      availability: "",
    });
    setIsAddingService(false);
  };

  // Handles service deletion
  const handleDeleteService = (id: number) => {
    setServices(services.filter((service) => service.id !== id));
  };

  // Handles editing a service
  const handleEditService = (id: number) => {
    const serviceToEdit = services.find((service) => service.id === id);
    if (serviceToEdit) {
      setNewService(serviceToEdit);
      setIsAddingService(true);
      setServices(services.filter((service) => service.id !== id)); // Temporarily remove it until resaved
    }
  };

  return (
    <div className="flex flex-col sm:flex-row h-screen">
      <div className="flex flex-col md:flex-row">
        {/* Sidebar =/}
        <Sidebar />

        {/* Main Content Area =/}
        <main className="flex-1 bg-white p-8">
          <h1 className="text-2xl font-bold mb-6">Manage Services</h1>

          {/* Empty State =/}
          {services.length === 0 && !isAddingService && (
            <div className="text-center">
              <p className="text-gray-600 mb-4">
                You haven’t added any services yet.
              </p>
              <button
                className="px-4 py-2 bg-blue-500 text-white rounded-md"
                onClick={() => setIsAddingService(true)}
              >
                Add Service
              </button>
            </div>
          )}

          {/* Add Service Form =/}
          {isAddingService && (
            <form className="space-y-4">
              <div>
                <label className="block text-gray-700">Name</label>
                <input
                  type="text"
                  name="name"
                  value={newService.name}
                  onChange={handleInputChange}
                  className="w-full border p-2 rounded-md"
                  placeholder="E.g. Acme Pro"
                />
              </div>
              <div>
                <label className="block text-gray-700">Description</label>
                <textarea
                  name="description"
                  value={newService.description}
                  onChange={handleInputChange}
                  className="w-full border p-2 rounded-md"
                  placeholder="E.g. The all-in-one plan for growing businesses"
                />
              </div>
              <div>
                <label className="block text-gray-700">Category</label>
                <select
                  name="category"
                  value={newService.category}
                  onChange={handleInputChange}
                  className="w-full border p-2 rounded-md"
                >
                  <option value="">Select a category</option>
                  <option value="Marketing">Marketing</option>
                  <option value="Consulting">Consulting</option>
                  <option value="Development">Development</option>
                </select>
              </div>
              <div className="flex space-x-4">
                <div className="flex-1">
                  <label className="block text-gray-700">Price</label>
                  <input
                    type="text"
                    name="price"
                    value={newService.price}
                    onChange={handleInputChange}
                    className="w-full border p-2 rounded-md"
                    placeholder="E.g. $50"
                  />
                </div>
                <div className="flex-1">
                  <label className="block text-gray-700">Recurring Price</label>
                  <input
                    type="text"
                    name="recurringPrice"
                    value={newService.recurringPrice}
                    onChange={handleInputChange}
                    className="w-full border p-2 rounded-md"
                    placeholder="E.g. $50"
                  />
                </div>
              </div>
              <div>
                <label className="block text-gray-700">Tags</label>
                <input
                  type="text"
                  name="tags"
                  value={newService.tags.join(", ")}
                  onChange={(e) =>
                    setNewService({
                      ...newService,
                      tags: e.target.value.split(",").map((tag) => tag.trim()),
                    })
                  }
                  className="w-full border p-2 rounded-md"
                  placeholder="E.g. SaaS, Marketing, Analytics"
                />
              </div>
              <div>
                <label className="block text-gray-700">Availability</label>
                <select
                  name="availability"
                  value={newService.availability}
                  onChange={handleInputChange}
                  className="w-full border p-2 rounded-md"
                >
                  <option value="">Select availability</option>
                  <option value="Available">Available</option>
                  <option value="Unavailable">Unavailable</option>
                </select>
              </div>
              <div className="flex space-x-4">
                <button
                  type="button"
                  className="px-4 py-2 bg-gray-200 rounded-md"
                  onClick={() => setIsAddingService(false)}
                >
                  Cancel
                </button>
                <button
                  type="button"
                  className="px-4 py-2 bg-blue-500 text-white rounded-md"
                  onClick={handleAddService}
                >
                  Save
                </button>
              </div>
            </form>
          )}

          {/* List of Services =/}
          {services.length > 0 && !isAddingService && (
            <table className="w-full border mt-6">
              <thead>
                <tr>
                  <th className="text-left p-2 border-b">Name</th>
                  <th className="text-left p-2 border-b">Category</th>
                  <th className="text-left p-2 border-b">Price</th>
                  <th className="text-left p-2 border-b">Actions</th>
                </tr>
              </thead>
              <tbody>
                {services.map((service) => (
                  <tr key={service.id}>
                    <td className="p-2 border-b">{service.name}</td>
                    <td className="p-2 border-b">{service.category}</td>
                    <td className="p-2 border-b">{service.price}</td>
                    <td className="p-2 border-b">
                      <button
                        className="text-blue-500 mr-2"
                        onClick={() => handleEditService(service.id)}
                      >
                        Edit
                      </button>
                      <button
                        className="text-red-500"
                        onClick={() => handleDeleteService(service.id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </main>
      </div>
    </div>
  );
};

export default Services;
*/

/*
"use client";

import React, { useState } from "react";
import Sidebar from "@/components/Business-dashboard/Sidebar";
import ServiceTable from "@/components/Business-dashboard/Services/ServiceTable";
import ServiceForm from "@/components/Business-dashboard/Services/ServiceForm";
import FilterBar from "@/components/Business-dashboard/Services/FilterBar";

// Define the Service type
interface Service {
  id: number;
  name: string;
  category: string;
  price: string;
  availability: string;
}

const ServicesPage: React.FC = () => {
  // Add explicit types for services
  const [services, setServices] = useState<Service[]>([]);
  const [isAddingService, setIsAddingService] = useState(false);

  // Omit 'id' because it will be generated later
  const [newService, setNewService] = useState<Omit<Service, "id">>({
    name: "",
    category: "",
    price: "",
    availability: "In Stock",
  });

  // Add a new service
  const handleAddService = () => {
    // Append the new service with a generated id
    setServices((prev) => [...prev, { ...newService, id: Date.now() }]);
    // Reset newService state
    setNewService({
      name: "",
      category: "",
      price: "",
      availability: "In Stock",
    });
    setIsAddingService(false);
  };

  return (
    <div className="flex flex-col sm:flex-row h-screen">
      <Sidebar />
      <main className="flex-1 bg-white p-8">
        <h1 className="text-2xl font-bold mb-4">Services</h1>
        <FilterBar
          onSearch={(e) => console.log(e.target.value)}
          onFilter={(filter) => console.log(filter)}
        />
        {isAddingService ? (
          <ServiceForm
            service={newService}
            onChange={(e) =>
              setNewService({ ...newService, [e.target.name]: e.target.value })
            }
            onCancel={() => setIsAddingService(false)}
            onSave={handleAddService}
          />
        ) : (
          <ServiceTable
            services={services}
            onEdit={(id) => console.log("Edit", id)}
            onDelete={(id) =>
              setServices((prev) => prev.filter((s) => s.id !== id))
            }
            onDuplicate={(service) =>
              setServices((prev) => [...prev, { ...service, id: Date.now() }])
            }
          />
        )}
      </main>
    </div>
  );
};

export default ServicesPage;
*/

/*
"use client";

import React, { useState } from "react";
import Sidebar from "@/components/Business-dashboard/Sidebar";
import ServiceTable from "@/components/Business-dashboard/Services/ServiceTable";
import ServiceForm from "@/components/Business-dashboard/Services/ServiceForm";
import FilterBar from "@/components/Business-dashboard/Services/FilterBar";

// Define the Service type
interface Service {
  id: number;
  name: string;
  category: string;
  price: string;
  availability: string;
}

const ServicesPage: React.FC = () => {
  const [services, setServices] = useState<Service[]>([]); // List of services
  const [isAddingService, setIsAddingService] = useState(false); // Add service mode

  // Service form state (omit `id` because it's generated)
  const [newService, setNewService] = useState<Omit<Service, "id">>({
    name: "",
    category: "",
    price: "",
    availability: "In Stock",
  });

  // Add a new service
  const handleAddService = () => {
    setServices((prev) => [...prev, { ...newService, id: Date.now() }]);
    setNewService({
      name: "",
      category: "",
      price: "",
      availability: "In Stock",
    });
    setIsAddingService(false);
  };

  return (
    <div className="flex flex-col sm:flex-row h-screen">
      <Sidebar />
      <main className="flex-1 bg-white p-8">
        <h1 className="text-2xl font-bold mb-4">Services</h1>
        {services.length === 0 && !isAddingService ? (
          // Initial screen when no services exist
          <div className="flex flex-col items-center justify-center h-full">
            <p className="text-lg text-gray-600 mb-4">
              No services have been added yet.
            </p>
            <button
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
              onClick={() => setIsAddingService(true)}
            >
              Add a Service
            </button>
          </div>
        ) : isAddingService ? (
          // Show the service form when adding a service
          <ServiceForm
            service={newService}
            onChange={(e) =>
              setNewService({ ...newService, [e.target.name]: e.target.value })
            }
            onCancel={() => setIsAddingService(false)}
            onSave={handleAddService}
          />
        ) : (
          // Show the service table when services exist
          <>
            <FilterBar
              onSearch={(e) => console.log(e.target.value)}
              onFilter={(filter) => console.log(filter)}
            />
            <ServiceTable
              services={services}
              onEdit={(id) => console.log("Edit", id)}
              onDelete={(id) =>
                setServices((prev) => prev.filter((s) => s.id !== id))
              }
              onDuplicate={(service) =>
                setServices((prev) => [...prev, { ...service, id: Date.now() }])
              }
            />
          </>
        )}
      </main>
    </div>
  );
};

export default ServicesPage;
*/

/*
"use client";

import React, { useState } from "react";
import Sidebar from "@/components/Business-dashboard/Sidebar";
import ServiceTable from "@/components/Business-dashboard/Services/ServiceTable";
import ServiceForm from "@/components/Business-dashboard/Services/ServiceForm";
import FilterBar from "@/components/Business-dashboard/Services/FilterBar";

// Define the Service type
interface Service {
  id: number;
  name: string;
  category: string;
  price: string;
  availability: string;
}

const ServicesPage: React.FC = () => {
  const [services, setServices] = useState<Service[]>([]);
  const [filteredServices, setFilteredServices] = useState<Service[]>([]);
  const [isAddingService, setIsAddingService] = useState(false);
  const [editingService, setEditingService] = useState<Service | null>(null);

  const [newService, setNewService] = useState<Omit<Service, "id">>({
    name: "",
    category: "",
    price: "",
    availability: "In Stock",
  });

  // Add a new service
  const handleAddService = () => {
    setServices((prev) => [...prev, { ...newService, id: Date.now() }]);
    setFilteredServices((prev) => [...prev, { ...newService, id: Date.now() }]);
    setNewService({
      name: "",
      category: "",
      price: "",
      availability: "In Stock",
    });
    setIsAddingService(false);
  };

  // Edit an existing service
  const handleEditService = () => {
    setServices((prev) =>
      prev.map((service) =>
        service.id === editingService?.id ? { ...editingService } : service
      )
    );
    setFilteredServices((prev) =>
      prev.map((service) =>
        service.id === editingService?.id ? { ...editingService } : service
      )
    );
    setEditingService(null);
  };

  // Filter services
  const handleFilter = (filter: string) => {
    if (filter === "In Stock" || filter === "Out of Stock") {
      setFilteredServices(
        services.filter((service) => service.availability === filter)
      );
    } else {
      setFilteredServices(services);
    }
  };

  return (
    <div className="flex flex-col sm:flex-row h-screen">
      <Sidebar />
      <main className="flex-1 bg-white p-8">
        <h1 className="text-2xl font-bold mb-4">Services</h1>
        {!isAddingService && !editingService && (
          <FilterBar
            onSearch={(e) =>
              setFilteredServices(
                services.filter((service) =>
                  service.name
                    .toLowerCase()
                    .includes(e.target.value.toLowerCase())
                )
              )
            }
            onFilter={handleFilter}
            onAddService={() => setIsAddingService(true)}
          />
        )}
        {isAddingService ? (
          <ServiceForm
            service={newService}
            onChange={(e) =>
              setNewService({ ...newService, [e.target.name]: e.target.value })
            }
            onCancel={() => setIsAddingService(false)}
            onSave={handleAddService}
          />
        ) : editingService ? (
          <ServiceForm
            service={editingService}
            onChange={(e) =>
              setEditingService({
                ...editingService,
                [e.target.name]: e.target.value,
              } as Service)
            }
            onCancel={() => setEditingService(null)}
            onSave={handleEditService}
          />
        ) : (
          <ServiceTable
            services={filteredServices.length > 0 ? filteredServices : services}
            onEdit={(id) =>
              setEditingService(services.find((service) => service.id === id)!)
            }
            onDelete={(id) =>
              setServices((prev) => prev.filter((service) => service.id !== id))
            }
            onDuplicate={(service) =>
              setServices((prev) => [...prev, { ...service, id: Date.now() }])
            }
          />
        )}
      </main>
    </div>
  );
};

export default ServicesPage;
*/

"use client";

import React, { useState } from "react";
import Sidebar from "@/components/Business-dashboard/Sidebar";
import ServiceTable from "@/components/Business-dashboard/Services/ServiceTable";
import ServiceForm from "@/components/Business-dashboard/Services/ServiceForm";
import FilterBar from "@/components/Business-dashboard/Services/FilterBar";

// Define the Service type
interface Service {
  id: number;
  name: string;
  category: string;
  description: string;
  recurringPrice: string;
  price: string;
  tags: string;
  availability: string;
}

const ServicesPage: React.FC = () => {
  const [services, setServices] = useState<Service[]>([]);
  const [filteredServices, setFilteredServices] = useState<Service[]>([]);
  const [isAddingService, setIsAddingService] = useState(false);
  const [editingService, setEditingService] = useState<Service | null>(null);

  const [newService, setNewService] = useState<Omit<Service, "id">>({
    name: "",
    description: "",
    category: "",
    price: "",
    recurringPrice: "",
    tags: "",
    availability: "Available",
  });

  // Add a new service
  const handleAddService = () => {
    const newServiceWithId = { ...newService, id: Date.now() };
    setServices((prev) => [...prev, newServiceWithId]);
    setFilteredServices((prev) => [...prev, newServiceWithId]);
    setNewService({
      name: "",
      description: "",
      category: "",
      price: "",
      recurringPrice: "",
      tags: "",
      availability: "Available",
    });
    setIsAddingService(false);
  };

  // Edit an existing service
  const handleEditService = () => {
    setServices((prev) =>
      prev.map((service) =>
        service.id === editingService?.id ? { ...editingService } : service
      )
    );
    setFilteredServices((prev) =>
      prev.map((service) =>
        service.id === editingService?.id ? { ...editingService } : service
      )
    );
    setEditingService(null);
  };

  // Delete a service
  const handleDeleteService = (id: number) => {
    setServices((prev) => prev.filter((service) => service.id !== id));
    setFilteredServices((prev) => prev.filter((service) => service.id !== id));
  };

  // Duplicate a service
  const handleDuplicateService = (service: Service) => {
    const duplicatedService = { ...service, id: Date.now() };
    setServices((prev) => [...prev, duplicatedService]);
    setFilteredServices((prev) => [...prev, duplicatedService]);
  };

  // Filter services
  const handleFilter = (filter: string) => {
    if (filter === "Available" || filter === "Unavailable") {
      setFilteredServices(
        services.filter((service) => service.availability === filter)
      );
    } else if (filter === "All") {
      setFilteredServices(services); // Show all services when "Available" is selected
    }
  };

  // Search services by name
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchValue = e.target.value.toLowerCase();
    setFilteredServices(
      services.filter((service) =>
        service.name.toLowerCase().includes(searchValue)
      )
    );
  };

  return (
    <div className="flex flex-col sm:flex-row h-screen bg-gray-100">
      <Sidebar />
      <main className="flex-1 flex flex-col min-h-0">
        <div className="flex-1 overflow-y-auto bg-white p-4 sm:p-6">
          <h1 className="text-2xl font-bold mb-4">Services</h1>
          {!isAddingService && !editingService && (
            <FilterBar
              onSearch={handleSearch}
              onFilter={handleFilter}
              onAddService={() => setIsAddingService(true)}
            />
          )}
          {isAddingService ? (
            <ServiceForm
              service={newService}
              onChange={(e) =>
                setNewService({
                  ...newService,
                  [e.target.name]: e.target.value,
                })
              }
              onCancel={() => setIsAddingService(false)}
              onSave={handleAddService}
            />
          ) : editingService ? (
            <ServiceForm
              service={editingService}
              onChange={(e) =>
                setEditingService({
                  ...editingService,
                  [e.target.name]: e.target.value,
                } as Service)
              }
              onCancel={() => setEditingService(null)}
              onSave={handleEditService}
            />
          ) : (
            <ServiceTable
              services={
                filteredServices.length > 0 ? filteredServices : services
              }
              onEdit={(id) =>
                setEditingService(
                  services.find((service) => service.id === id)!
                )
              }
              onDelete={handleDeleteService}
              onDuplicate={handleDuplicateService}
            />
          )}
        </div>
      </main>
    </div>
  );
};

export default ServicesPage;
