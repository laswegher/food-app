import React from 'react';
import FoodMenuCard from './FoodMenuCard';

const FoodMenu = ({ filteredData }) => {
  return (
    <div className="mx-4">
      <div className="Container grid gap-y-10 gap-x-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {/* Taking filtered data from parent(TopRelated) Component */}
        {filteredData.map((food) => {
          return (
            <FoodMenuCard
              key={food.id}
              {...food}
            />
          );
        })}
      </div>
    </div>
  );
};

export default FoodMenu;
