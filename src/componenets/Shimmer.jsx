import React from 'react';

const TinderFlame = () => (
  <svg
    viewBox="0 0 512 512"
    className="w-40 h-40 fill-white animate-pulse"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M355.6,103.3c-2.8,52.6-35.6,91.7-72.4,122.3c-1.1-11.3-4.2-22.2-9.4-32.4c-15.6-30.2-41.3-48.4-55.6-56.8c-2.2,5.3-4,11-5.4,16.8
    c-8.3,35.1-3.2,67.7,7.8,97.3c-14.1,5.8-27.6,13.5-39.8,22.9c-34.7,26.9-53.3,64.9-50.9,109.3c3.4,66.6,58.4,119.9,125.1,122.1
    c38.6,1.3,75.3-12.3,102.9-38.1c27.9-26.1,44.5-62.8,45.2-102.3C404,218.2,361.8,162.5,355.6,103.3z"/>
  </svg>
);

const ShimmerLoader = () => {
  return (
    <div className="h-screen w-full bg-gradient-to-r from-red-400 via-pink-400 to-orange-400 flex items-center justify-center">
      <TinderFlame />
    </div>
  );
};

export default ShimmerLoader;
