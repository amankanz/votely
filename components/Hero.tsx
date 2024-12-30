/*
import React from "react";

import Button from "@/components/Button";

export default function HeroSection() {
  return (
    <section className="bg-blue-600 text-white text-center py-16">
      <h1 className="text-4xl font-bold mb-4">
        Empowering Customers, Celebrating Excellence.
      </h1>
      <div className="flex justify-center gap-4 mt-6">
        <Button text="Explore Top Businesses" variant="primary" />
        <Button text="Join as a Business" variant="secondary" />
      </div>
    </section>
  );
}
*/

/*
import { montserrat } from "@/lib/font";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative w-full">
      <div className="w-full max-w-7xl bg- mx-auto px-4 py-12">
        <div className="relative overflow-hidden rounded-lg w-full mx-auto">
          <Image
            src="/award_2.jpg"
            alt="Award Image"
            width={1028}
            height={480}
            className="w-full h-[400px] object-contain rounded-lg"
          />
          <div className="absolute inset-0 flex items-start justify-center bg-black/50 right-1 w-full">
            <h1
              className={` flex flex-col absolute bottom-1 text-white font-thin text-2xl text-center w-full ${montserrat.className}`}
            >
              <span>Empowering Customers, Celebrating</span>
              <span>Excellence</span>
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
}
*/

import { montserrat } from "@/lib/font";

export default function HeroSection() {
  return (
    <section
      className={`relative w-full max-w-7xl h-[645px] mx-auto rounded-3xl bg-[url('/award_2.jpg')] bg-cover bg-center bg-no-repeat text-white`}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 rounded-3xl "></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center py-24 px-4">
        <h1
          className={`text-4xl md:text-5xl font-bold mb-6 ${montserrat.className}`}
        >
          Empowering Customers, Celebrating Excellence
        </h1>
        <div className="flex flex-wrap justify-center gap-4">
          <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-md">
            Explore Top Businesses
          </button>
          <button className="bg-white text-blue-600 hover:bg-gray-200 py-2 px-6 rounded-md">
            Join as a Business
          </button>
        </div>
      </div>
    </section>
  );
}
