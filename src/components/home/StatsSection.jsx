import React from "react";

const StatsSection = () => {
  const stats = [
    { label: "Properties Listed", value: "2,300+" },
    { label: "Daily Users", value: "15K+" },
    { label: "Satisfied Clients", value: "8,700+" },
  ];

  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
        {stats.map((stat) => (
          <div key={stat.label}>
            <p className="text-4xl font-bold text-blue-600">{stat.value}</p>
            <p className="mt-2 text-gray-600">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatsSection;