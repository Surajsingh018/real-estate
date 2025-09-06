// src/components/home/HeroSection.jsx
import React from 'react';

const HeroSection = () => (
  <section className="relative bg-black text-white min-h-screen flex items-center justify-center">
    <div className="text-center max-w-3xl px-4">
      <h1 className="text-5xl md:text-7xl font-bold mb-4">
        Own Property, Digitally.
      </h1>
      <p className="text-lg md:text-xl mb-8">
        Mortgage solutions, real-estate investments & golden-visa services — all on one platform.
      </p>
      <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition">
        Get Started
      </button>
    </div>
  </section>
);

export default HeroSection;

// import React from "react";
// import { Link } from "react-router-dom";

// const HeroSection = () => {
//   return (
//     <section
//       className="relative bg-cover bg-center h-[70vh] flex items-center justify-center"
//       style={{
//         backgroundImage:
//           "url('https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=1650&q=80')",
//       }}
//     >
//       <div className="absolute inset-0 bg-black/50" />
//       <div className="relative z-10 text-center text-white px-4">
//         <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight">
//           Find Your Dream Home
//         </h1>
//         <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto">
//           Explore exclusive properties in Dubai – curated for investors,
//           families & first-time buyers.
//         </p>
//         <Link
//           to="/properties"
//           className="mt-8 inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg shadow transition"
//         >
//           Browse Properties
//         </Link>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;