import Link from 'next/link';
import React, { useState } from 'react';
import {
  AiOutlineBars,
  AiOutlineSearch,
  AiOutlineShoppingCart,
  AiOutlineClose,
  AiFillHeart,
  AiOutlineQuestion,
  AiOutlineStar,
  AiOutlineGift,
  AiOutlineUserAdd,
} from 'react-icons/ai';
import { IoWalletOutline } from 'react-icons/io5';
import { TbTruckDelivery } from 'react-icons/tb';
import { motion } from 'framer-motion';
import ToggleButton from './ToggleButton';

const toggleVariants = {
  open: {
    x: 0,

    transition: {
      staggerChildren: 0.08,
    },
  },
  close: {
    x: '-100%',
  },
};

const items = {
  open: {
    x: 0,
    transition: {
      type: 'spring',
      stiffness: 300,
      damping: 30,
    },
  },
  close: {
    x: -100,
  },
};

const Header = () => {
  const [toggleBar, setToggleBar] = useState(false);
  console.log(toggleBar);

  const handleToggle = () => {
    setToggleBar((prevState) => !prevState);
  };

  return (
    <div className="relative w-full min-h-16 FCenter mb-10">
      <div className="p-4 Container flex justify-between gap-2 flex-col sm:flex-row">
        <div className="flex items-center flex-row  gap-4">
          {/* Mobile Nav Icon */}
          <div onClick={handleToggle}>
            <AiOutlineBars
              size={20}
              className="cursor-pointer"
            />
          </div>

          {/* Logo */}
          <Link href="/">
            <h1 className="text-2xl">
              Best <span className="font-bold">Eats</span>
            </h1>
          </Link>

          {/* Toggle Buttons */}
          <div className="hidden md:block">
            <ToggleButton />
          </div>
        </div>

        {/* Search Bar */}
        <form className="relative flex-1 md:max-w-[400px] ">
          <input
            className="w-full pl-10 py-1 text-sm rounded-[20px]  outline-none border-2 border-gray-500"
            type="text"
            name=""
            id=""
            placeholder="Search For Food"
          />
          <div className="absolute top-0 left-3 translate-y-[6px]">
            <AiOutlineSearch size={20} />
          </div>
        </form>
        {/* Cart Button */}
        <button className="hidden sm:flex sm:items-center text-sm font-semibold  gap-1 border border-black py-1 px-2 rounded-full">
          <AiOutlineShoppingCart /> Chart
        </button>
      </div>

      {/* Mobile Navigation */}
      <motion.div
        variants={toggleVariants}
        initial="close"
        animate={`${toggleBar ? 'open' : 'close'}`}
        className="z-50 fixed inset-0 p-4 max-w-[250px] h-full bg-white flex flex-col"
      >
        {/* Top Nav Bar */}
        <div className="FBetween">
          {/* Logo */}
          <Link href="/">
            <h1 className="text-3xl">
              Best <span className="font-bold">Eats</span>
            </h1>
          </Link>

          {/* Mobile Nav Icon */}
          <div onClick={handleToggle}>
            <AiOutlineClose
              size={25}
              className="cursor-pointer"
            />
          </div>
        </div>
        {/* List Items */}
        <div className="mt-6 mb-auto">
          <ul className=" flex flex-col max-w-max text-sm font-medium">
            <motion.li
              onClick={handleToggle}
              whileHover={{ scale: 1.1 }}
              variants={items}
              className="py-4 flex items-center cursor-pointer gap-2"
            >
              <TbTruckDelivery size={25} /> Orders
            </motion.li>
            <motion.li
              onClick={handleToggle}
              whileHover={{ scale: 1.1 }}
              variants={items}
              className="py-4 flex items-center cursor-pointer gap-2"
            >
              <AiFillHeart size={25} /> Favorites
            </motion.li>
            <motion.li
              onClick={handleToggle}
              whileHover={{ scale: 1.1 }}
              variants={items}
              className="py-4 flex items-center cursor-pointer gap-2"
            >
              <IoWalletOutline size={25} /> Wallet
            </motion.li>
            <motion.li
              onClick={handleToggle}
              whileHover={{ scale: 1.1 }}
              variants={items}
              className="py-4 flex items-center cursor-pointer gap-2"
            >
              <AiOutlineQuestion size={25} /> Help
            </motion.li>
            <motion.li
              onClick={handleToggle}
              whileHover={{ scale: 1.1 }}
              variants={items}
              className="py-4 flex items-center cursor-pointer gap-2"
            >
              <AiOutlineStar size={25} /> Best One
            </motion.li>
            <motion.li
              onClick={handleToggle}
              whileHover={{ scale: 1.1 }}
              variants={items}
              className="py-4 flex items-center cursor-pointer gap-2"
            >
              <AiOutlineGift size={25} /> Promotion
            </motion.li>
            <motion.li
              onClick={handleToggle}
              whileHover={{ scale: 1.1 }}
              variants={items}
              className="py-4 flex items-center cursor-pointer gap-2"
            >
              <AiOutlineUserAdd size={25} /> Invite Friends
            </motion.li>

            <motion.li
              onClick={handleToggle}
              whileHover={{ scale: 1.1 }}
              variants={items}
              className="py-4 flex items-center cursor-pointer gap-2"
            >
              <AiOutlineShoppingCart size={25} /> Chart
            </motion.li>
          </ul>
        </div>
        {/* Bottom Nav Bar */}
        <ToggleButton />
      </motion.div>

      {/* Overlay */}
      {toggleBar && (
        <div
          onClick={handleToggle}
          className="z-40 fixed cursor-pointer inset-0 w-full bg-black/70"
        ></div>
      )}
    </div>
  );
};

export default Header;
