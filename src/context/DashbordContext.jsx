// src/context/PropertyContext.jsx
import React, { createContext, useContext, useEffect, useState } from "react";
import { v4 as uuid } from "uuid";
import seedProperties from "../data/properties";

const PropertyContext = createContext();

export const useProperties = () => useContext(PropertyContext);

export const PropertyProvider = ({ children }) => {
  const [properties, setProperties] = useState(() => {
    const saved = localStorage.getItem("properties");
    return saved ? JSON.parse(saved) : seedProperties;
  });

  useEffect(() => {
    localStorage.setItem("properties", JSON.stringify(properties));
  }, [properties]);

  const addProperty = (newProp) =>
    setProperties((prev) => [...prev, { ...newProp, id: uuid() }]);

  const deleteProperty = (id) =>
    setProperties((prev) => prev.filter((p) => p.id !== id));

  return (
    <PropertyContext.Provider value={{ properties, addProperty, deleteProperty }}>
      {children}
    </PropertyContext.Provider>
  );
};