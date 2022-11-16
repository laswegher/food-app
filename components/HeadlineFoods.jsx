import React from 'react';
import FoodCart from './FoodCard';
import food_data from '../data/headline_data';

const HeadlineFoods = () => {
  return (
    <div className="mx-4 my-20">
      <div className="Container flex flex-col md:flex-row gap-5">
        {food_data.map((food) => {
          return (
            <FoodCart
              key={food.id}
              {...food}
            />
          );
        })}
      </div>
    </div>
  );
};

export default HeadlineFoods;
