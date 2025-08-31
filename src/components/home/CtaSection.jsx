import React from "react";
import { Link } from "react-router-dom";

const CtaSection = () => {
  return (
    <section className="bg-blue-600 py-16">
      <div className="max-w-4xl mx-auto px-4 text-center text-white">
        <h2 className="text-3xl md:text-4xl font-bold">
          Ready to Sell or Rent Your Property?
        </h2>
        <p className="mt-4 text-lg opacity-90">
          List with us and reach thousands of potential buyers & tenants.
        </p>
        <Link
          to="/signup"
          className="mt-8 inline-block bg-white text-blue-600 font-semibold px-8 py-3 rounded-lg shadow hover:bg-gray-100 transition"
        >
          Get Started
        </Link>
      </div>
    </section>
  );
};

export default CtaSection;