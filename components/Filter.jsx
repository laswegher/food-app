import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import food_data from '../data/foods_data';

const Filter = (props) => {
  // Handeling filter form
  const [formData, setFormData] = useState({
    type: 'all',
    price: 'all',
  });
  console.log(formData);
  // Handeling onChange event
  const handleChange = (e) => {
    setFormData((prevState) => {
      return {
        ...prevState,
        [e.target.name]: e.target.value,
      };
    });
  };

  // Filtering food Arr and sending data to parent(TopRelated) Component
  useEffect(() => {
    const newFoods = food_data
      .filter(
        (el) =>
          el.catagory === formData.type || formData.type === 'all'
      )
      .filter(
        (el) =>
          el.price === formData.price || formData.price === 'all'
      );
    props.filter(newFoods);
  }, [formData]);

  return (
    <div className="px-4 mb-5">
      {/* Form Element */}
      <form className=" flex flex-col sm:flex-row sm:justify-between ">
        {/* Filter by Type */}
        <div className="mb-3">
          <p className="text-xs font-bold tracking-widest mb-1">
            Filtered By Type
          </p>
          <div className="flex">
            <input
              type="radio"
              name="type"
              id="all"
              value="all"
              checked={formData.type === 'all'}
              onChange={handleChange}
              className="appearance-none"
            />
            <motion.label
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: 'spring', stiffness: 500 }}
              className="border border-orange-300 rounded-xl text-xs font-semibold px-2 py-1 tracking-widest mr-2 cursor-pointer "
              htmlFor="all"
            >
              All
            </motion.label>

            <input
              type="radio"
              name="type"
              id="burger"
              value="burger"
              onChange={handleChange}
              checked={formData.type === 'burger'}
              className="appearance-none"
            />
            <motion.label
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: 'spring', stiffness: 500 }}
              className="border border-orange-300 rounded-xl text-xs font-semibold px-2 py-1 tracking-widest mr-2 cursor-pointer"
              htmlFor="burger"
            >
              Burger
            </motion.label>

            <input
              type="radio"
              name="type"
              id="pizza"
              value="pizza"
              checked={formData.type === 'pizza'}
              onChange={handleChange}
              className="appearance-none"
            />
            <motion.label
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 1 }}
              transition={{ type: 'spring', stiffness: 500 }}
              className="border border-orange-300 rounded-xl text-xs font-semibold px-2 py-1 tracking-widest mr-2 cursor-pointer"
              htmlFor="pizza"
            >
              Pizza
            </motion.label>

            <input
              type="radio"
              name="type"
              id="pasta"
              value="pasta"
              onChange={handleChange}
              checked={formData.type === 'pasta'}
              className="appearance-none"
            />
            <motion.label
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: 'spring', stiffness: 500 }}
              className="border border-orange-300 rounded-xl text-xs font-semibold px-2 py-1 tracking-widest mr-2 cursor-pointer"
              htmlFor="pasta"
            >
              Pasta
            </motion.label>
          </div>
        </div>

        {/* Filter by Price */}
        <div className="flex flex-col sm:items-end">
          <p className="text-xs font-bold tracking-widest mb-1">
            Filtered By Price
          </p>

          <div className="flex">
            <input
              type="radio"
              name="price"
              id="allPrice"
              value="all"
              checked={formData.price === 'all'}
              onChange={handleChange}
              className="appearance-none"
            />
            <motion.label
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: 'spring', stiffness: 500 }}
              className="border border-orange-300 rounded-xl text-xs font-semibold px-2 py-1 tracking-widest  cursor-pointer"
              htmlFor="allPrice"
            >
              All
            </motion.label>

            <input
              type="radio"
              name="price"
              id="$"
              value="$"
              checked={formData.price === '$'}
              onChange={handleChange}
              className="appearance-none"
            />
            <motion.label
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: 'spring', stiffness: 500 }}
              className="border border-orange-300 rounded-xl text-xs font-semibold px-2 py-1 tracking-widest ml-2 cursor-pointer"
              htmlFor="$"
            >
              $
            </motion.label>

            <input
              type="radio"
              name="price"
              id="$$"
              value="$$"
              checked={formData.price === '$$'}
              onChange={handleChange}
              className="appearance-none"
            />
            <motion.label
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: 'spring', stiffness: 500 }}
              className="border border-orange-300 rounded-xl text-xs font-semibold px-2 py-1 tracking-widest ml-2 cursor-pointer"
              htmlFor="$$"
            >
              $$
            </motion.label>

            <input
              type="radio"
              name="price"
              id="$$$"
              value="$$$"
              checked={formData.price === '$$$'}
              onChange={handleChange}
              className="appearance-none"
            />
            <motion.label
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 1 }}
              transition={{ type: 'spring', stiffness: 500 }}
              className="border border-orange-300 rounded-xl text-xs font-semibold px-2 py-1 tracking-widest ml-2 cursor-pointer"
              htmlFor="$$$"
            >
              $$$
            </motion.label>

            <input
              type="radio"
              name="price"
              id="$$$$"
              value="$$$$"
              checked={formData.price === '$$$$'}
              onChange={handleChange}
              className="appearance-none"
            />
            <motion.label
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: 'spring', stiffness: 500 }}
              className="border border-orange-300 rounded-xl text-xs font-semibold px-2 py-1 tracking-widest ml-2 cursor-pointer"
              htmlFor="$$$$"
            >
              $$$$
            </motion.label>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Filter;
