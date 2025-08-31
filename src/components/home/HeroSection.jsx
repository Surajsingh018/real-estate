import React from "react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section
      className="relative bg-cover bg-center h-[70vh] flex items-center justify-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=1650&q=80')",
      }}
    >
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 text-center text-white px-4">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight">
          Find Your Dream Home
        </h1>
        <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto">
          Explore exclusive properties in Dubai – curated for investors,
          families & first-time buyers.
        </p>
        <Link
          to="/properties"
          className="mt-8 inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg shadow transition"
        >
          Browse Properties
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;