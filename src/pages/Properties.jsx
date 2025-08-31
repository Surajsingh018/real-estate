// src/pages/Properties.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HeartIcon } from "@heroicons/react/24/outline";
import { HeartIcon as HeartSolid } from "@heroicons/react/24/solid";
import properties from "../data/properties";

export default function Properties() {
  const [favs, setFavs] = useState(() => new Set());
  const toggleFav = (id) => {
    const next = new Set(favs);
    next.has(id) ? next.delete(id) : next.add(id);
    setFavs(next);
  };

  /* ----------  1.  Prypco Splash Section  ---------- */
  const Splash = () => (
    <section className="relative isolate overflow-hidden bg-gradient-to-br from-blue-700 via-indigo-800 to-purple-900">
      {/* subtle grid pattern */}
      <svg
        className="absolute inset-0 -z-10 h-full w-full stroke-white/10 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
        aria-hidden="true"
      >
        <defs>
          <pattern
            id="grid"
            width={60}
            height={60}
            patternUnits="userSpaceOnUse"
            patternTransform="translate(0 -1)"
          >
            <path d="M.5 59V.5H59" fill="none" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" strokeWidth={0} fill="url(#grid)" />
      </svg>

      <div className="max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white drop-shadow-lg">
          PROPY CONS
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-indigo-200">
          Mortgage, Real Estate Investments & Golden Visa Services
        </p>
      </div>
    </section>
  );

  /* ----------  2.  3-Card Grid  ---------- */
  const CardGrid = () => (
    <section className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold text-gray-900 mb-8">Properties</h2>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {properties.map((p) => {
          const isFav = favs.has(p.id);
          return (
            <article
              key={p.id}
              className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              {/* image */}
              <div className="relative overflow-hidden rounded-t-2xl">
                <img
                  src={p.image}
                  alt={p.title}
                  className="h-56 w-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <button
                  onClick={() => toggleFav(p.id)}
                  className="absolute top-3 right-3 p-2 rounded-full bg-white/70 backdrop-blur hover:bg-white"
                  aria-label="toggle favourite"
                >
                  {isFav ? (
                    <HeartSolid className="w-5 h-5 text-red-500" />
                  ) : (
                    <HeartIcon className="w-5 h-5 text-gray-700" />
                  )}
                </button>
              </div>

              {/* content */}
              <div className="p-5">
                <h3 className="text-lg font-semibold text-gray-900 truncate">{p.title}</h3>
                <p className="mt-1 text-2xl font-bold text-blue-600">{p.price}</p>
                <p className="mt-1 text-sm text-gray-500">
                  {p.beds} bed • {p.baths} bath • {p.area} sqft
                </p>
                <Link
                  to={`/property/${p.id}`}
                  className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600 hover:text-blue-700"
                >
                  View Details →
                </Link>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );

  /* ----------  Skeleton fallback  ---------- */
  const SkeletonGrid = () => (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="bg-white rounded-2xl shadow animate-pulse">
            <div className="h-56 rounded-t-2xl bg-gray-200" />
            <div className="p-5 space-y-3">
              <div className="h-4 bg-gray-200 rounded w-3/4" />
              <div className="h-5 bg-gray-200 rounded w-1/2" />
              <div className="h-3 bg-gray-200 rounded w-2/3" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <>
      <Splash />
      {properties.length ? <CardGrid /> : <SkeletonGrid />}
    </>
  );
}
// // src/pages/Properties.jsx
// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { HeartIcon } from "@heroicons/react/24/outline";      // npm i @heroicons/react
// import { HeartIcon as HeartSolid } from "@heroicons/react/24/solid";
// import properties from "../data/properties";

// export default function Properties() {
//   const [favs, setFavs] = useState(() => new Set());
//   const toggleFav = (id) =>
//     setFavs((prev) => {
//       const next = new Set(prev);
//       next.has(id) ? next.delete(id) : next.add(id);
//       return next;
//     });

//   return (
//     <>
//       {/* Hero */}
//       <div className="relative isolate overflow-hidden bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-700">
//         <svg
//           className="absolute inset-0 -z-10 h-full w-full stroke-white/10 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
//           aria-hidden="true"
//         >
//           <defs>
//             <pattern
//               id="grid"
//               width={60}
//               height={60}
//               patternUnits="userSpaceOnUse"
//               patternTransform="translate(0 -1)"
//             >
//               <path d="M.5 59V.5H59" fill="none" />
//             </pattern>
//           </defs>
//           <rect width="100%" height="100%" strokeWidth={0} fill="url(#grid)" />
//         </svg>
//         <div className="max-w-7xl mx-auto px-4 py-20 sm:px-6 lg:px-8 text-center">
//           <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white drop-shadow-md">
//             Discover Your Next Home
//           </h1>
//           <p className="mt-4 max-w-2xl mx-auto text-lg text-indigo-200">
//             Hand-picked properties across the UAE, curated for comfort and
//             investment.
//           </p>
//         </div>
//       </div>

//       {/* Listing Grid */}
//       <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
//         {properties.length === 0 ? (
//           <SkeletonGrid />
//         ) : (
//           <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
//             {properties.map((p) => {
//               const isFav = favs.has(p.id);
//               return (
//                 <article
//                   key={p.id}
//                   className="group relative bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 ease-out"
//                 >
//                   {/* Image container */}
//                   <div className="relative overflow-hidden rounded-t-2xl">
//                     <img
//                       src={p.image}
//                       alt={p.title}
//                       className="h-56 w-full object-cover group-hover:scale-105 transition-transform duration-500"
//                     />
//                     <button
//                       onClick={() => toggleFav(p.id)}
//                       className="absolute top-3 right-3 p-2 rounded-full bg-white/60 backdrop-blur hover:bg-white/90 transition"
//                       aria-label={isFav ? "Remove from favourites" : "Add to favourites"}
//                     >
//                       {isFav ? (
//                         <HeartSolid className="w-5 h-5 text-red-500" />
//                       ) : (
//                         <HeartIcon className="w-5 h-5 text-gray-700" />
//                       )}
//                     </button>
//                   </div>

//                   {/* Content */}
//                   <div className="p-5">
//                     <div className="flex items-start justify-between">
//                       <h3 className="text-lg font-semibold text-gray-900 truncate pr-2">
//                         {p.title}
//                       </h3>
//                     </div>
//                     <p className="mt-1 text-2xl font-bold text-blue-600">
//                       {p.price}
//                     </p>
//                     <p className="mt-1 text-sm text-gray-500">
//                       {p.beds} bed • {p.baths} bath • {p.area} sqft
//                     </p>

//                     <Link
//                       to={`/property/${p.id}`}
//                       className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600 hover:text-blue-700"
//                     >
//                       View Details →
//                     </Link>
//                   </div>
//                 </article>
//               );
//             })}
//           </div>
//         )}
//       </div>
//     </>
//   );
// }

// /* ------------  Skeleton placeholder while loading ------------ */
// function SkeletonGrid() {
//   return (
//     <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
//       {[...Array(8)].map((_, i) => (
//         <div key={i} className="bg-white rounded-2xl shadow-md animate-pulse">
//           <div className="h-56 rounded-t-2xl bg-gray-200" />
//           <div className="p-5 space-y-3">
//             <div className="h-4 bg-gray-200 rounded w-3/4" />
//             <div className="h-5 bg-gray-200 rounded w-1/2" />
//             <div className="h-3 bg-gray-200 rounded w-2/3" />
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }