import React from "react";

const PropertyCard = ({ property }) => {
  return (
    <div className="border p-4 rounded-md shadow-sm bg-white">
      <h3 className="text-lg font-semibold">{property?.title || "Untitled"}</h3>
      <p className="text-sm text-gray-600">{property?.description || "No description"}</p>
    </div>
  );
};

export default PropertyCard;
