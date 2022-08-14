import React from "react";
import RestaurantsList from "../components/sections/RestaurantsList";

const Entrance: React.FC = () => {
  return (
    <main className='bg-white border border-gray-300  w-full px-[150px] pt-[15px] pb-16'>
      <RestaurantsList />
    </main>
  );
};

export default Entrance;
