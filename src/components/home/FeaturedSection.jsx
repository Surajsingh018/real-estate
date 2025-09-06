// src/components/home/FeaturedSection.jsx
import React from 'react';
import properties from '../../data/properties'; // adjust path if needed
import { Link } from 'react-router-dom';


const FeaturedSection = () => {
  const featured = properties.slice(0, 3); // show first 3

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
          Featured Properties
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {featured.map(p => (
            <div key={p.id} className="rounded-xl overflow-hidden shadow-lg">
              <img
                src={p.images[0]}
                alt={p.title}
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{p.title}</h3>
                <p className="text-sm text-gray-600 mb-1">{p.location}</p>
                <p className="text-sm text-gray-600">
                  Target ROI: <span className="font-bold text-green-600">{p.expectedROI}%</span>
                </p>
                <Link
                      to={`/property/${p.id}`}
                      className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600 hover:text-blue-700"
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

// // src/components/FeaturedSection.jsx
// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { HeartIcon } from "@heroicons/react/24/outline";
// import { HeartIcon as HeartSolid } from "@heroicons/react/24/solid";
// import properties from "../../data/properties";

// const FeaturedSection = () => {
//   // local favourite state
//   const [favs, setFavs] = useState(() => new Set());
//   const toggleFav = (id) =>
//     setFavs((prev) => {
//       const next = new Set(prev);
//       next.has(id) ? next.delete(id) : next.add(id);
//       return next;
//     });

//   const featured = properties.slice(0, 3);

//   return (
//     <section className="bg-gray-50 py-16">
//       <div className="max-w-7xl mx-auto px-4">
//         <h2 className="text-3xl font-bold mb-8 text-center">Featured Properties</h2>

//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {featured.map((p) => {
//             const isFav = favs.has(p.id);
//             return (
//               <div
//                 key={p.id}
//                 className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition"
//               >
//                 {/* image + favourite toggle */}
//                 <div className="relative">
//                   <img
//                     src={p.images[0]}
//                     alt={p.title}
//                     className="w-full h-56 object-cover"
//                     onError={(e) =>
//                       (e.target.src =
//                         "https://via.placeholder.com/800x450?text=Image+Not+Found")
//                     }
//                   />
//                   <button
//                     onClick={() => toggleFav(p.id)}
//                     className="absolute top-2 right-2 p-1.5 rounded-full bg-white/70 backdrop-blur hover:bg-white"
//                     aria-label="toggle favourite"
//                   >
//                     {isFav ? (
//                       <HeartSolid className="w-5 h-5 text-red-500" />
//                     ) : (
//                       <HeartIcon className="w-5 h-5 text-gray-700" />
//                     )}
//                   </button>
//                 </div>

//                 <div className="p-6">
//                   <h3 className="text-xl font-semibold truncate">{p.title}</h3>
//                   <p className="text-blue-600 font-bold mt-1">
//                     ${p.totalValue.toLocaleString()}
//                   </p>
//                   <p className="text-sm text-gray-500 mt-1">
//                     {p.location} • {p.sqft} sqft
//                   </p>
//                   <Link
//                     to={`/property/${p.id}`}
//                     className="mt-4 inline-block text-sm text-blue-600 underline"
//                   >
//                     View Details →
//                   </Link>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default FeaturedSection;