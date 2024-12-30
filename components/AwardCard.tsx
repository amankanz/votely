import Image from "next/image";
import React from "react";

interface AwardCardProps {
  title: string;
  description: string;
  image: string;
}

function AwardCard({ title, description, image }: AwardCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <Image
        src={image}
        alt={title}
        width={400}
        height={200}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>
    </div>
  );
}

export default AwardCard;
