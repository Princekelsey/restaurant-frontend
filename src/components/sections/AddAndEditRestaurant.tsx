import React, { useState, useEffect } from "react";
import Button from "../elements/Button";
import { Modal, ModalBody, ModalFooter, ModalHeader } from "../elements/Modal";
import TextInput from "../elements/TextInput";
import { ReactComponent as XIcon } from "../../icons/x.svg";
import { ReactComponent as CheckIcon } from "../../icons/check.svg";
import type { Restaurant } from "../../types";

interface AddAndEditRestaurantProps {
  isOpen: boolean;
  onClose: () => void;
  editingItem: Restaurant | null;
}

const AddAndEditRestaurant: React.FC<AddAndEditRestaurantProps> = ({
  isOpen,
  onClose,
  editingItem,
}) => {
  const [formData, setformData] = useState({
    name: "",
    address: "",
    email: "",
    phone: "",
  });

  useEffect(() => {
    if (editingItem) {
      setformData({
        name: editingItem.name,
        address: editingItem.address,
        email: editingItem.email,
        phone: editingItem.phone,
      });
    }
  }, [editingItem]);

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;

    setformData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <Modal isOpen={isOpen}>
      <ModalHeader>
        <h6 className='text-[22px] font-semibold'>Add restaurant</h6>
      </ModalHeader>
      <ModalBody>
        <div className='flex flex-col space-y-5 w-full'>
          <TextInput
            placeholder='Name'
            name='name'
            onChange={onInputChange}
            value={formData.name}
          />
          <TextInput
            placeholder='Address'
            name='address'
            value={formData.address}
            onChange={onInputChange}
          />
          <TextInput
            placeholder='Email'
            name='email'
            value={formData.email}
            onChange={onInputChange}
          />
          <TextInput
            placeholder='Phone'
            name='phone'
            value={formData.phone}
            onChange={onInputChange}
          />
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
          onClick={() => {
            setformData({
              name: "",
              address: "",
              email: "",
              phone: "",
            });
            onClose();
          }}
        >
          <XIcon />
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default AddAndEditRestaurant;
