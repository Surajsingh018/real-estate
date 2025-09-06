/* -----------------  PropertyDetails.jsx  ----------------- */
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import properties from '../data/properties';

export default function PropertyDetails() {
  /*  route me :slug hai isliye yahan bhi slug  */
  const { slug } = useParams(); // slug is always string

  /*  🔍  DEBUG  */
  console.log('URL slug (string) :', slug);
  console.log('All IDs in data   :', properties.map(p => p.id));

  /*  🔧  SAFE SEARCH – skip bad rows, number compare  */
  const property = properties
    ?.filter(p => p?.id != null) // agar id field hi nahi hai to hatao
    .find(p => Number(p.id) === Number(slug)); // dono taraf number banao

  console.log('Matched property  :', property);

  /*  404  */
  if (!property) {
    return (
      <h2 className="mt-12 text-center text-2xl text-red-600">
        Property not found (slug: {slug})
      </h2>
    );
  }

  /*  ----------------  UI (same as before)  ----------------  */
  return (
    <div className="bg-white">
      {/* ----------  Breadcrumb  ---------- */}
      <nav className="bg-white border-b px-4 py-3 text-sm">
        <div className="max-w-7xl mx-auto flex items-center space-x-2 text-gray-500">
          <Link to="/" className="hover:text-blue-600">Home</Link>
          <span>/</span>
          <Link to="/properties" className="hover:text-blue-600">Properties</Link>
          <span>/</span>
          <span className="text-gray-800 truncate">{property.title}</span>
        </div>
      </nav>

      {/* ----------  Hero Image  ---------- */}
      <img
        src={property.images?.[0] || '/placeholder.jpg'}
        alt={property.title}
        className="w-full h-[50vh] md:h-[60vh] object-cover"
      />

      <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-8 px-4 py-8">
        {/* ----------  LEFT COLUMN  ---------- */}
        <div className="lg:col-span-2 space-y-6">
          {/* Title + Status */}
          <div>
            <h1 className="text-3xl font-bold text-gray-900">{property.title}</h1>
            <p className="text-gray-600 mt-1">{property.address}</p>
            <div className="mt-2 flex items-center space-x-4">
              <span className="text-green-700 font-semibold bg-green-100 px-3 py-1 rounded-full text-sm">
                {property.status}
              </span>
              <span className="text-sm text-gray-500">{property.soldTokens} investors</span>
            </div>
          </div>

          {/* Key Numbers */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
            <div className="bg-gray-50 p-4 rounded-xl">
              <p className="text-2xl font-bold text-blue-600">{property.expectedROI}%</p>
              <p className="text-sm text-gray-500">Expected ROI</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-xl">
              <p className="text-2xl font-bold text-blue-600">
                {((property.soldTokens / property.totalTokens) * 100).toFixed(1)}%
              </p>
              <p className="text-sm text-gray-500">Sold Tokens</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-xl">
              <p className="text-2xl font-bold text-blue-600">{property.lockPeriod} yrs</p>
              <p className="text-sm text-gray-500">Lock Period</p>
            </div>
          </div>

          {/* Why invest */}
          <div>
            <h2 className="text-2xl font-bold mb-3">Why invest in this property?</h2>
            <div className="prose prose-sm text-gray-700 space-y-2">
              <p><strong>Modern Urban Living:</strong> {property.whyModern}</p>
              <p><strong>Strong Rental Appeal:</strong> {property.whyRental}</p>
              <p><strong>Excellent Facilities:</strong> {property.whyFacilities}</p>
              <p><strong>Attractive Investment Returns:</strong> {property.whyReturns}</p>
              <p><strong>Below Market Price:</strong> {property.whyBelowMarket}</p>
              <p><strong>Prime Location:</strong> {property.whyLocation}</p>
            </div>
          </div>

          {/* Investment Breakdown */}
          <div>
            <h2 className="text-2xl font-bold mb-3">Investment Breakdown</h2>
            <div className="bg-gray-50 rounded-xl p-4 space-y-2 text-sm">
              {Object.entries(property.breakdown || {}).map(([k, v]) => (
                <div key={k} className="flex justify-between">
                  <span className="capitalize text-gray-600">
                    {k.replace(/([A-Z])/g, ' $1')}:
                  </span>
                  <span className="font-semibold">{v}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Description */}
          <div>
            <h2 className="text-2xl font-bold mb-3">Description</h2>
            <p className="text-gray-700 leading-relaxed whitespace-pre-line">
              {property.description}
            </p>
            <button className="text-blue-600 text-sm font-semibold mt-2 hover:underline">
              Show More
            </button>
          </div>

          {/* What's in */}
          <div>
            <h2 className="text-2xl font-bold mb-3">What's in</h2>
            <ul className="flex flex-wrap gap-2">
              {property.features?.map((f) => (
                <li key={f} className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm">
                  {f}
                </li>
              ))}
            </ul>
          </div>

          {/* Amenities */}
          <div>
            <h2 className="text-2xl font-bold mb-3">Amenities</h2>
            <ul className="flex flex-wrap gap-2">
              {property.amenities?.map((a) => (
                <li key={a} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                  {a}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* ----------  RIGHT SIDEBAR  ---------- */}
        <div className="lg:col-span-1 space-y-6">
          <div className="bg-white border rounded-xl p-6 sticky top-6">
            <p className="text-4xl font-bold text-blue-600 mb-4">{property.price}</p>
            <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700">
              Invest Now
            </button>
            <button className="w-full mt-3 border border-blue-600 text-blue-600 py-3 rounded-lg font-semibold hover:bg-blue-50">
              Schedule Viewing
            </button>

            <div className="mt-6 border-t pt-4">
              <p className="font-semibold text-gray-800">Listed by PROPY CONS</p>
              <button className="w-full mt-2 text-sm bg-gray-100 py-2 rounded-lg hover:bg-gray-200">
                Contact Agent
              </button>
            </div>
          </div>

          {/* <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center py-3 rounded-lg font-semibold hover:opacity-90"
          >
            Explore PROPY CONS Blocks
          </a> */}
        </div>
      </div>
    </div>
  );
}
// import React from 'react';
// import { useParams, Link } from 'react-router-dom';
// import properties from '../data/properties';

// export default function PropertyDetails() {
//   const { id } = useParams();
//   const property = properties.find((p) => p.id.toString() === id);

//   if (!property) {
//     return <h2 className="mt-12 text-center text-2xl">Property not found</h2>;
//   }

//   return (
//     <div className="bg-white">
//       {/* Breadcrumb */}
//       <nav className="bg-white border-b px-4 py-3 text-sm">
//         <div className="max-w-7xl mx-auto flex items-center space-x-2 text-gray-500">
//           <Link to="/" className="hover:text-blue-600">Home</Link>
//           <span>/</span>
//           <Link to="/properties" className="hover:text-blue-600">Properties</Link>
//           <span>/</span>
//           <span className="text-gray-800 truncate">{property.title}</span>
//         </div>
//       </nav>

//       {/* Hero Image */}
//       <img
//         src={property.image}
//         alt={property.title}
//         className="w-full h-[50vh] md:h-[60vh] object-cover"
//       />

//       <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-8 px-4 py-8">
//         {/* ---------- LEFT COLUMN ---------- */}
//         <div className="lg:col-span-2 space-y-6">
//           {/* Title + Status */}
//           <div>
//             <h1 className="text-3xl font-bold text-gray-900">{property.title}</h1>
//             <p className="text-gray-600 mt-1">{property.address}</p>
//             <div className="mt-2 flex items-center space-x-4">
//               <span className="text-green-700 font-semibold bg-green-100 px-3 py-1 rounded-full text-sm">{property.status}</span>
//               <span className="text-sm text-gray-500">{property.investors} investors</span>
//             </div>
//           </div>

//           {/* Key Numbers */}
//           <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
//             <div className="bg-gray-50 p-4 rounded-xl">
//               <p className="text-2xl font-bold text-blue-600">{property.grossYield}</p>
//               <p className="text-sm text-gray-500">Gross yield</p>
//             </div>
//             <div className="bg-gray-50 p-4 rounded-xl">
//               <p className="text-2xl font-bold text-blue-600">{property.netYield}</p>
//               <p className="text-sm text-gray-500">Net yield</p>
//             </div>
//             <div className="bg-gray-50 p-4 rounded-xl">
//               <p className="text-2xl font-bold text-blue-600">{property.annualised}</p>
//               <p className="text-sm text-gray-500">Annualised return</p>
//             </div>
//           </div>

//           {/* Why invest */}
//           <div>
//             <h2 className="text-2xl font-bold mb-3">Why invest in this property?</h2>
//             <div className="prose prose-sm text-gray-700 space-y-2">
//               <p><strong>Modern Urban Living:</strong> {property.whyModern}</p>
//               <p><strong>Strong Rental Appeal:</strong> {property.whyRental}</p>
//               <p><strong>Excellent Facilities:</strong> {property.whyFacilities}</p>
//               <p><strong>Attractive Investment Returns:</strong> {property.whyReturns}</p>
//               <p><strong>Below Market Price:</strong> {property.whyBelowMarket}</p>
//               <p><strong>Prime Location:</strong> {property.whyLocation}</p>
//             </div>
//           </div>

//           {/* Investment Breakdown */}
//           <div>
//             <h2 className="text-2xl font-bold mb-3">Investment Breakdown</h2>
//             <div className="bg-gray-50 rounded-xl p-4 space-y-2 text-sm">
//               {Object.entries(property.breakdown || {}).map(([k, v]) => (
//                 <div key={k} className="flex justify-between">
//                   <span className="capitalize text-gray-600">{k.replace(/([A-Z])/g, ' $1')}:</span>
//                   <span className="font-semibold">{v}</span>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Description */}
//           <div>
//             <h2 className="text-2xl font-bold mb-3">Description</h2>
//             <p className="text-gray-700 leading-relaxed whitespace-pre-line">
//               {property.description}
//             </p>
//             <button className="text-blue-600 text-sm font-semibold mt-2 hover:underline">Show More</button>
//           </div>

//           {/* What's in */}
//           <div>
//             <h2 className="text-2xl font-bold mb-3">What's in</h2>
//             <ul className="flex flex-wrap gap-2">
//               {property.features?.map((f) => (
//                 <li key={f} className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm">
//                   {f}
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Amenities */}
//           <div>
//             <h2 className="text-2xl font-bold mb-3">Amenities</h2>
//             <ul className="flex flex-wrap gap-2">
//               {property.amenities?.map((a) => (
//                 <li key={a} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
//                   {a}
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>

//         {/* ---------- RIGHT SIDEBAR ---------- */}
//         <div className="lg:col-span-1 space-y-6">
//           <div className="bg-white border rounded-xl p-6 sticky top-6">
//             <p className="text-4xl font-bold text-blue-600 mb-4">{property.price}</p>
//             <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700">
//               Invest Now
//             </button>
//             <button className="w-full mt-3 border border-blue-600 text-blue-600 py-3 rounded-lg font-semibold hover:bg-blue-50">
//               Schedule Viewing
//             </button>

//             <div className="mt-6 border-t pt-4">
//               <p className="font-semibold text-gray-800">Listed by PROPY CONS</p>
//               <button className="w-full mt-2 text-sm bg-gray-100 py-2 rounded-lg hover:bg-gray-200">
//                 Contact Agent
//               </button>
//             </div>
//           </div>

//           <a
//             href="#"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="block w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center py-3 rounded-lg font-semibold hover:opacity-90"
//           >
//             Explore PROPY CONS Blocks
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// }