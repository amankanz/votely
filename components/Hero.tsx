/*
import { montserrat } from "@/lib/font";
import Button from "./Button";

export default function HeroSection() {
  return (
    <section
      className={`relative w-full max-w-7xl h-[645px] mx-auto mt-12 rounded-3xl bg-[url('/award_2.jpg')] bg-cover bg-center bg-no-repeat text-white`}
    >
      {/* Overlay =/}
      <div className="absolute inset-0 bg-black/50 rounded-3xl "></div>

      {/* Content =/}
      <div className="relative z-10 flex flex-col items-center justify-center text-center py-24 px-4">
        <h1
          className={`text-4xl md:text-5xl font-bold mb-6 ${montserrat.className}`}
        >
          Empowering Customers, Celebrating Excellence
        </h1>

        <div className="flex flex-wrap justify-center gap-4">
          <Button text="Explore Top Businesses" variant="primary" />
          <Button text="Join as a Business" variant="secondary" />
        </div>
      </div>
    </section>
  );
}
*/

import { montserrat } from "@/lib/font";
import Button from "./Button";

export default function HeroSection() {
  return (
    <section
      className={`relative w-full max-w-7xl h-[645px] mx-auto mt-12 rounded-3xl bg-[url('/award_2.jpg')] bg-cover bg-center bg-no-repeat text-white`}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 rounded-3xl"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center py-24 px-4">
        <h1
          className={`text-2xl md:text-3xl font-bold mb-4 ${montserrat.className}`}
        >
          Empowering Customers, Celebrating Excellence
        </h1>

        {/* Subheading */}
        <p className="text-lg md:text-xl mb-6 max-w-2xl">
          Discover and recognize outstanding businesses driving innovation and
          customer satisfaction.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <Button
            link="/awards"
            text="Explore Top Businesses"
            variant="primary"
          />
          <Button
            link="/signup"
            text="Join as a Business"
            variant="secondary"
          />
        </div>
      </div>
    </section>
  );
}
