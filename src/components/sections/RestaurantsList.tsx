import React from "react";
import Button from "../elements/Button";
import TextInput from "../elements/TextInput";
import { ReactComponent as SearchIcon } from "../../icons/search.svg";
import { ReactComponent as PlusIcon } from "../../icons/plus.svg";
import RestaurantCard from "../elements/RestaurantCard";

interface RestaurantsListProps {}

const RestaurantsList: React.FC<RestaurantsListProps> = ({}) => {
  return (
    <section className='flex justify-center items-start flex-col'>
      <form className='w-full flex space-x-3'>
        <TextInput placeholder='Search' />
        <Button className='bg-[#323cf0] w-[88px] text-white' type='submit'>
          <SearchIcon className='w-[18px] h-[18px]' />
        </Button>
      </form>
      <div className='pt-[42px] w-full'>
        <RestaurantCard
          restaurant={{
            name: "Test",
            email: "t@gmail.com",
            phone: "12345",
            address: "5 Hermitage Rd, St John's, Woking GU21 8TE, UK",
            id: 1,
          }}
          className='mb-[10px]'
        />
        <RestaurantCard
          restaurant={{
            name: "Test",
            email: "t@gmail.com",
            phone: "12345",
            address: "5 Hermitage Rd, St John's, Woking GU21 8TE, UK",
            id: 1,
          }}
          className='mb-[10px]'
        />
        <div className='flex items-center justify-between mt-7'>
          <Button
            className='bg-[#323cf0] w-[88px] h-11 text-white'
            type='button'
          >
            <PlusIcon />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default RestaurantsList;
