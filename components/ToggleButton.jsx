import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ToggleButton = () => {
  const [isOn, setIsOn] = useState(false);
  return (
    <div>
      <div
        onClick={() => setIsOn(!isOn)}
        className={`relative items-center px-1 flex w-[160px] h-[32px] border border-black rounded-full ${
          isOn ? 'justify-start' : 'justify-end'
        }`}
      >
        <div className="z-20 absolute inset-0 w-full  FBetween select-none font-semibold text-sm">
          <h1
            className={` px-3 ${isOn ? 'text-white' : 'text-black'} `}
          >
            Delivery
          </h1>
          <h1
            className={` px-4 ${isOn ? 'text-black' : 'text-white'} `}
          >
            Pickup
          </h1>
        </div>
        <motion.div
          layout
          transition={{ type: 'spring', stiffness: 700, damping: 30 }}
          className="w-[70px] h-[24px]  rounded-full bg-red-500"
        />
      </div>
    </div>
  );
};

export default ToggleButton;
