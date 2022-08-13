import React from "react";
import { Restaurant } from "../../types";
import Button from "./Button";
import { ReactComponent as MinusIcon } from "../../icons/minus.svg";

interface RestaurantCardProps {
  className?: string;
  restaurant: Restaurant;
}

const RestaurantCard: React.FC<RestaurantCardProps> = ({
  className,
  restaurant,
}) => {
  return (
    <div
      className={`py-[18px] px-5 bg-[#f3f4f5] w-full hover:bg-[#323cf0] hover:!text-white group ${className}`}
    >
      <div className='flex items-center justify-between'>
        <div>
          <h6 className='text-[22px] font-semibold mb-1'>{restaurant.name}</h6>
          <span>{restaurant.address}</span>
        </div>
        <Button className='bg-[#4c54ee] text-white h-12 hidden group-hover:block'>
          <MinusIcon />
        </Button>
      </div>
      <div className='flex items-center justify-between mt-7'>
        <a
          className='text-[#323cf0] group-hover:text-white'
          href={`mailto:${restaurant.email}`}
        >
          {restaurant.email}
        </a>
        <a href={`tel:+${restaurant.phone}`}>{restaurant.phone}</a>
      </div>
    </div>
  );
};

export default RestaurantCard;
