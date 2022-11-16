import React from 'react';
import Image from 'next/image';
import img from '../public/hero_image.jpg';

const Hero = () => {
  return (
    <div className="mx-4">
      <div className="max-w-[1200px] mx-auto relative ">
        <div className="relative w-full h-[400px]">
          <Image
            className="w-full h-full object-cover rounded-2xl"
            src={img}
            alt="/"
            priority
          />
        </div>
        <div className="absolute inset-0 w-full px-4 text-white bg-black/50 text-4xl sm:text-5xl md:text-6xl flex flex-col justify-center rounded-2xl font-bold">
          <h1>
            The <span className="text-orange-700">Best</span>
          </h1>
          <h1>
            <span className="text-orange-700">Foods</span> Delivered
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Hero;
