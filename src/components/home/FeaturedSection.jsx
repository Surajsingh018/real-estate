import React from "react";
import { Link } from "react-router-dom";
import properties from "../../data/properties";

const FeaturedSection = () => {
  const featured = properties.slice(0, 3);

  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Featured Properties</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featured.map((p) => (
            <div
              key={p.id}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition"
            >
              <img
                src={p.image}
                alt={p.title}
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold truncate">{p.title}</h3>
                <p className="text-blue-600 font-bold mt-1">{p.price}</p>
                <p className="text-sm text-gray-500 mt-1">
                  {p.beds} beds • {p.baths} baths • {p.area} sqft
                </p>
                <Link
                  to={`/property/${p.id}`}
                  className="mt-4 inline-block text-sm text-blue-600 underline"
                >
                  View Details →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;