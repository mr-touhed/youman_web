// components/HoverImage.js

import { useState } from 'react';
import Image from 'next/image';

const HoverImage = ({ imageSrc, altText, children }) => {
  const [isHovered, setIsHovered] = useState(true);

  return (
    <div
      className="relative w-full h-full"
    //   onMouseEnter={() => setIsHovered(true)}
    //   onMouseLeave={() => setIsHovered(false)}
    >
      {isHovered && (
        <div
          className="absolute left-1/2 transform -translate-x-1/2 z-50"
          style={{
            top: '100%', // Position the image above the component
          }}
        >
          <img
            src={imageSrc}
            alt={altText}
            width={300} // Set desired width
            height={200} // Set desired height
            className="rounded-lg transition-opacity duration-300"
          />
        </div>
      )}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default HoverImage;
