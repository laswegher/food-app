import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const FoodCard = (props) => {
  return (
    <motion.div className="w-full relative text-white flex-1  max-h-[200px] rounded-xl overflow-hidden">
      <div className="flex flex-col items-start absolute p-4 bg-black/50 inset-0">
        <h1 className="text-lg font-semibold">{props.title}</h1>
        <h2 className="text-xs tracking-wider mb-auto">
          {props.subTitle}
        </h2>
        <motion.button
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          transition={{ type: 'spring', stiffness: 300 }}
          className="px-4 py-1 rounded-lg text-sm border"
        >
          Order now
        </motion.button>
      </div>
      <div className="w-full h-full">
        <Image
          className="w-full h-full object-cover"
          src={props.image}
          alt="/"
          priority
        />
      </div>
    </motion.div>
  );
};

export default FoodCard;
