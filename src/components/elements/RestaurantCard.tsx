import React from "react";
import type { Restaurant } from "../../types";
import Button from "./Button";
import { ReactComponent as MinusIcon } from "../../icons/minus.svg";
import useConfirm from "../../hooks/useConfirm";

interface RestaurantCardProps {
  className?: string;
  restaurant: Restaurant;
  onItemClick: (item: Restaurant) => void;
  onDelete: (id: string) => void;
}

const RestaurantCard: React.FC<RestaurantCardProps> = ({
  className,
  restaurant,
  onItemClick,
  onDelete,
}) => {
  const { handleConfirm } = useConfirm();

  const handleDelete = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.stopPropagation();
    const confirm = await handleConfirm(
      "Are you sure you want to delete this record ?"
    );

    if (confirm) {
      onDelete(restaurant.id);
    }
  };
  return (
    <div
      className={`py-[18px] px-5 bg-[#f3f4f5] w-full cursor-pointer hover:bg-[#323cf0] hover:!text-white group ${className}`}
      onClick={() => onItemClick(restaurant)}
    >
      <div className='flex items-center justify-between'>
        <div>
          <h6 className='text-[22px] font-semibold mb-1'>{restaurant.name}</h6>
          <span>{restaurant.address}</span>
        </div>
        <Button
          className='bg-[#4c54ee] text-white h-12 hidden group-hover:block hover:bg-white hover:text-[#323cf0]'
          onClick={handleDelete}
        >
          <MinusIcon />
        </Button>
      </div>
      <div className='flex items-center justify-between mt-7'>
        <a
          className='text-[#323cf0] group-hover:text-white hover:underline'
          href={`mailto:${restaurant.email}`}
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          {restaurant.email}
        </a>
        <a
          className='hover:underline'
          href={`tel:+${restaurant.phone}`}
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          {restaurant.phone}
        </a>
      </div>
    </div>
  );
};

export default RestaurantCard;
