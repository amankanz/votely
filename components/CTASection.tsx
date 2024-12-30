import React from "react";
import Button from "./Button";

function CTASection() {
  return (
    <section className="w-full max-w-7xl mx-auto bg-blue-800 text-white py-16 px-4 text-center rounded-xl mt-16">
      <h2 className="text-2xl md:text-3xl font-bold mb-4">
        Join Votely Today and Grow Your Business with Recognition and Trust
      </h2>
      <p className="text-lg mb-6 max-w-2xl mx-auto">
        Empower your business with unparalleled exposure and build lasting trust
        with your customers.
      </p>
      <Button text="Get Started Now" variant="primary" />
    </section>
  );
}

export default CTASection;
