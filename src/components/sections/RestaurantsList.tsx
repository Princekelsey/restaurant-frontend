import React, { useState } from "react";
import Button from "../elements/Button";
import TextInput from "../elements/TextInput";
import { ReactComponent as SearchIcon } from "../../icons/search.svg";
import { ReactComponent as PlusIcon } from "../../icons/plus.svg";
import { ReactComponent as XIcon } from "../../icons/x.svg";
import { ReactComponent as CheckIcon } from "../../icons/check.svg";
import RestaurantCard from "../elements/RestaurantCard";
import Pagination from "../elements/Pagination";
import { Modal, ModalBody, ModalFooter, ModalHeader } from "../elements/Modal";

interface RestaurantsListProps {}

const RestaurantsList: React.FC<RestaurantsListProps> = ({}) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [isModal, setIsModal] = useState(false);

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
            className='bg-[#323cf0] w-[88px] h-11 text-white hover:bg-[#4c54ee]'
            type='button'
            onClick={() => setIsModal(true)}
          >
            <PlusIcon />
          </Button>

          <div>
            <Pagination
              currentPage={currentPage}
              totalPages={20}
              setCurrentPage={(page) => setCurrentPage(page)}
            />
          </div>
        </div>
      </div>

      <Modal isOpen={isModal}>
        <ModalHeader>
          <h6 className='text-[22px] font-semibold'>Add restaurant</h6>
        </ModalHeader>
        <ModalBody>
          <div className='flex flex-col space-y-5 w-full'>
            <TextInput placeholder='Name' />
            <TextInput placeholder='Address' />
            <TextInput
              placeholder='Email'
              hasError
              errorMessage='Please provide a valid email address.'
            />
            <TextInput placeholder='Phone' />
          </div>
        </ModalBody>
        <ModalFooter className='flex pt-4  space-x-2'>
          <Button
            className='bg-[#323cf0] w-[88px] h-11 text-white hover:bg-[#4c54ee]'
            type='button'
          >
            <CheckIcon />
          </Button>
          <Button
            className='bg-[#f3f4f5] w-11 h-11 hover:bg-gray-500 hover:text-white'
            type='button'
            onClick={() => setIsModal(false)}
          >
            <XIcon />
          </Button>
        </ModalFooter>
      </Modal>
    </section>
  );
};

export default RestaurantsList;
