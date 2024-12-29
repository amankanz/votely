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
