/*
export default function CategoriesSection() {
  return (
    <section className="container mx-auto py-8">
      <h2 className="text-2xl font-semibold mb-6 text-center">
        Business Categories
      </h2>
      <div className="flex gap-4 justify-center">
        <span className="px-4 py-2 bg-gray-200 rounded-md">Category 1</span>
        <span className="px-4 py-2 bg-gray-200 rounded-md">Category 2</span>
        <span className="px-4 py-2 bg-gray-200 rounded-md">Category 3</span>
      </div>
    </section>
  );
}
*/

export default function CategoriesSection() {
  const categories = [
    "Hospitality",
    "Restaurants & Cafés",
    "Healthcare",
    "Beauty & Wellness",
    "Education",
  ];

  return (
    <section className="py-8 bg-gray-50">
      <div className="w-full max-w-7xl mx-auto px-4">
        <h2 className="text-xl font-semibold mb-4">Categories</h2>
        <div className="flex flex-wrap gap-2">
          {categories.map((category, index) => (
            <span
              key={index}
              className="bg-gray-200 text-sm px-3 py-1 rounded-full hover:bg-gray-300 cursor-pointer"
            >
              {category}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
