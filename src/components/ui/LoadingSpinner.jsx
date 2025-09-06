import React from "react";

const LoadingSpinner = () => {
  return (
    <div className="flex justify-center items-center py-4">
      <div className="h-6 w-6 animate-spin rounded-full border-2 border-gray-400 border-t-transparent"></div>
    </div>
  );
};

export default LoadingSpinner;