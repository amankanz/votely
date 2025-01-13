import React from "react";
import Image from "next/image";

interface GalleryProps {
  gallery: File[];
  handleGalleryUpload: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleDeleteImage: (index: number) => void;
}

const Gallery: React.FC<GalleryProps> = ({
  gallery,
  handleGalleryUpload,
  handleDeleteImage,
}) => {
  return (
    <section className="mt-10 max-w-5xl mx-auto">
      <h2 className="text-xl font-semibold mb-4">Gallery</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {gallery.map((image, index) => (
          <div
            key={index}
            className="relative w-full h-48 bg-gray-200 rounded-lg shadow-md"
          >
            <Image
              src={URL.createObjectURL(image)}
              alt={`Gallery Image ${index + 1}`}
              fill
              className="object-cover rounded-lg"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            <button
              onClick={() => handleDeleteImage(index)}
              className="absolute top-2 right-2 bg-red-600 text-white text-sm p-1 rounded-full hover:bg-red-700"
            >
              &times;
            </button>
          </div>
        ))}
      </div>

      {/* Upload Images */}
      <div className="mt-4">
        <input
          type="file"
          multiple
          onChange={handleGalleryUpload}
          className="block w-full text-sm text-gray-500
          file:mr-4 file:py-2 file:px-4
          file:rounded-md file:border
          file:border-gray-300 file:text-sm file:font-medium
          file:bg-gray-50 file:text-gray-700
          hover:file:bg-gray-100"
        />
      </div>
    </section>
  );
};

export default Gallery;
