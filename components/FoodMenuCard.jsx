import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';

const FoodMenuCard = (props) => {
  return (
    <motion.div
      initial={{ scale: 1 }}
      whileHover={{ scale: 1.01 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: 'spring', stiffness: 300 }}
      className="w-full  rounded-xl overflow-hidden shadow-xl cursor-pointer"
    >
      {/* Image */}
      <div className="w-full h-[180px]">
        <Image
          src={props.image}
          alt="/"
          priority
          className="w-full h-full object-cover"
        />
      </div>
      {/* Content */}
      <div className="flex p-2 justify-between items-center">
        <h1 className="text-sm font-semibold tracking-wide">
          {props.title}
        </h1>
        <p className="border-2 px-2 text-orange-500 font-semibold rounded-full">
          {props.price}
        </p>
      </div>
    </motion.div>
  );
};

export default FoodMenuCard;
