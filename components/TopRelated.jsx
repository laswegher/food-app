import React, { useState } from 'react';
import FoodMenu from './FoodMenu';
import Filter from './Filter';

const TopRelated = () => {
  // Taking Foods data from child(filter) Component using State
  const [filteredData, setFilteredData] = useState([]);

  return (
    <div className="">
      <div className="Container ">
        <h1 className="text-xl sm:text-2xl md:text-3xl sm:mx-auto max-w-max mb-5 ml-4 border-b-2 border-orange-600">
          Top Related Foods
        </h1>
        <Filter filter={setFilteredData} />
      </div>
      <FoodMenu filteredData={filteredData} />
    </div>
  );
};

export default TopRelated;
