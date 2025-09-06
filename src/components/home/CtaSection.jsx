import React from 'react';

const CtaSection = () => {
  return (
    <>
      {/* Tailwind class-driven animated cube grid */}
      <div className="relative isolate overflow-hidden bg-black text-white">
        {/* pseudo-element grid using Tailwind JIT arbitrary properties */}
        <div
          className="absolute inset-0 [background-image:linear-gradient(theme(colors.white/5)_1px,transparent_1px),linear-gradient(90deg,theme(colors.white/5)_1px,transparent_1px)] [background-size:40px_40px] [animation:slideGrid_60s_linear_infinite]"
          style={{
            animationName: 'slideGrid',
            animationTimingFunction: 'linear',
            animationDuration: '60s',
            animationIterationCount: 'infinite',
          }}
        />

        {/* Foreground content */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 py-24 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Invest in Real Estate?
          </h2>
          <p className="text-lg mb-8">
            Join thousands of investors earning passive income from tokenized property.
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition">
            Sign Up Now
          </button>
        </div>
      </div>

      {/* Minimal global keyframe injected once via keyframes helper */}
      <style jsx global>{`
        @keyframes slideGrid {
          0%   { background-position: 0 0; }
          100% { background-position: 40px 40px; }
        }
      `}</style>
    </>
  );
};

export default CtaSection;

// import React from "react";
// import { Link } from "react-router-dom";

// const CtaSection = () => {
//   return (
//     <section className="bg-blue-600 py-16">
//       <div className="max-w-4xl mx-auto px-4 text-center text-white">
//         <h2 className="text-3xl md:text-4xl font-bold">
//           Ready to Sell or Rent Your Property?
//         </h2>
//         <p className="mt-4 text-lg opacity-90">
//           List with us and reach thousands of potential buyers & tenants.
//         </p>
//         <Link
//           to="/signup"
//           className="mt-8 inline-block bg-white text-blue-600 font-semibold px-8 py-3 rounded-lg shadow hover:bg-gray-100 transition"
//         >
//           Get Started
//         </Link>
//       </div>
//     </section>
//   );
// };

// export default CtaSection;