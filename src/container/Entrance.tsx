import React from "react";
import RestaurantsList from "../components/sections/RestaurantsList";

const Entrance: React.FC = () => {
  return (
    <main className='bg-white border shadow-md w-full px-[150px] py-[15px]'>
      <RestaurantsList />
    </main>
  );
};

export default Entrance;
