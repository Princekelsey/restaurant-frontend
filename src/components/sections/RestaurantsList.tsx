import React, { useState } from "react";
import Button from "../elements/Button";
import TextInput from "../elements/TextInput";
import { ReactComponent as SearchIcon } from "../../icons/search.svg";
import { ReactComponent as PlusIcon } from "../../icons/plus.svg";
import RestaurantCard from "../elements/RestaurantCard";
import Pagination from "../elements/Pagination";
import useRestaurants from "../../modules/restaurants/hooks/useRestaurants";
import AddAndEditRestaurant from "./AddAndEditRestaurant";
import type { Restaurant } from "../../types";

const pageSize = 5;

const RestaurantsList: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [isModal, setIsModal] = useState(false);
  const [editingItem, setEditingItem] = useState<null | Restaurant>(null);

  const {
    data: { restaurants, totalCount },
  } = useRestaurants({
    variables: {
      searchInput: {
        searchTerm: "",
        page: currentPage + 1,
        pageSize,
      },
    },
  });

  const onDelete = (id: string) => {};

  const onEdit = (item: Restaurant) => {
    setIsModal(true);
    setEditingItem(item);
  };

  const onClose = () => {
    setIsModal(false);
    setEditingItem(null);
  };

  return (
    <section className='flex justify-center items-start flex-col'>
      <form className='w-full flex space-x-3'>
        <TextInput placeholder='Search' />
        <Button
          className='bg-[#323cf0] w-[88px] text-white  hover:bg-[#4c54ee] '
          type='submit'
        >
          <SearchIcon className='w-[18px] h-[18px]' />
        </Button>
      </form>
      {restaurants.length ? (
        <div className='pt-[42px] w-full'>
          {restaurants.map((res) => (
            <RestaurantCard
              key={res.id}
              restaurant={res}
              className='mb-[10px]'
              onDelete={onDelete}
              onItemClick={onEdit}
            />
          ))}
          <div className='flex items-center justify-between mt-7'>
            <Button
              className='bg-[#323cf0] w-[88px] h-11 text-white hover:bg-[#4c54ee]'
              type='button'
              onClick={() => setIsModal(true)}
            >
              <PlusIcon />
            </Button>

            {totalCount > pageSize && (
              <div>
                <Pagination
                  currentPage={currentPage}
                  totalPages={totalCount}
                  setCurrentPage={(page) => setCurrentPage(page)}
                />
              </div>
            )}
          </div>
        </div>
      ) : null}

      <AddAndEditRestaurant
        isOpen={isModal}
        onClose={onClose}
        editingItem={editingItem}
      />
    </section>
  );
};

export default RestaurantsList;
