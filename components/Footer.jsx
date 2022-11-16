import Link from 'next/link';
import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <div className="w-full h-20 FCenter mt-10 border-t-2 border-orange-100">
      <div className="Container">
        <Link
          target="_blank"
          href="https://www.ufuktekin.com/"
        >
          <motion.h1
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 1 }}
            transition={{ type: 'spring', stiffness: 500 }}
            className="text-[#333] text-sm font-semibold tracking-widest text-center"
          >
            www.ufuktekin.com
          </motion.h1>
        </Link>
      </div>
    </div>
  );
};

export default Footer;
