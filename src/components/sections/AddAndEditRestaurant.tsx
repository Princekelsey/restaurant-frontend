import React, { useState, useEffect } from "react";
import Button from "../elements/Button";
import { Modal, ModalBody, ModalFooter, ModalHeader } from "../elements/Modal";
import TextInput from "../elements/TextInput";
import { ReactComponent as XIcon } from "../../icons/x.svg";
import { ReactComponent as CheckIcon } from "../../icons/check.svg";
import type { Restaurant } from "../../types";
import { validateEmail } from "../../utils";
import Spinner from "../elements/Spinner";
import useRestaurants from "../../modules/restaurants/hooks/useRestaurants";

interface AddAndEditRestaurantProps {
  isOpen: boolean;
  onClose: () => void;
  editingItem: Restaurant | null;
}

const initialState = {
  name: "",
  address: "",
  email: "",
  phone: "",
};

const AddAndEditRestaurant: React.FC<AddAndEditRestaurantProps> = ({
  isOpen,
  onClose,
  editingItem,
}) => {
  const [formData, setformData] = useState(initialState);
  const [errors, setErrors] = useState(initialState);

  const { updateRestaurant, createRestaurant } = useRestaurants({
    enabled: false,
    variables: {
      searchInput: {
        page: 1,
        pageSize: 1,
        searchTerm: "",
      },
    },
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

  const handleClose = () => {
    setformData(initialState);
    setErrors(initialState);
    onClose();
  };

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;

    if (value) {
      if (name === "email") {
        const result = validateEmail(value);
        if (result) {
          setErrors((prev) => ({ ...prev, [name]: "" }));
        } else {
          setErrors((prev) => ({
            ...prev,
            [name]: "Please provide a valid email address.",
          }));
        }
      } else {
        setErrors((prev) => ({ ...prev, [name]: "" }));
      }
    } else {
      setErrors((prev) => ({ ...prev, [name]: `${name} is required` }));
    }

    setformData((prev) => ({ ...prev, [name]: value }));
  };

  const validate = (): boolean => {
    let isError = false;

    const errorsObject = JSON.parse(
      JSON.stringify(errors)
    ) as typeof initialState;

    if (!formData.name) {
      isError = true;
      errorsObject.name = "Name is required";
    }

    if (!formData.address) {
      isError = true;
      errorsObject.address = "Address is required";
    }

    if (!formData.phone) {
      isError = true;
      errorsObject.phone = "Phone is required";
    }

    if (!formData.email) {
      isError = true;
      errorsObject.email = "Email is required";
    }

    if (isError) {
      setErrors({ ...errors, ...errorsObject });
    }

    return isError;
  };

  const handleSubmit = async () => {
    if (validate()) return;

    const { name, email, address, phone } = formData;

    if (editingItem) {
      await updateRestaurant.mutateAsync(
        {
          id: editingItem.id,
          data: {
            name,
            address,
            email,
            phone,
          },
        },
        {
          onSettled: () => {
            handleClose();
          },
        }
      );
    } else {
      await createRestaurant.mutateAsync(
        {
          data: {
            name,
            address,
            email,
            phone,
          },
        },
        {
          onSettled: () => {
            handleClose();
          },
        }
      );
    }
  };

  return (
    <Modal isOpen={isOpen}>
      <ModalHeader>
        <h6 className='text-[22px] font-semibold'>Add restaurant</h6>
      </ModalHeader>
      <ModalBody>
        {(createRestaurant.isLoading || updateRestaurant.isLoading) && (
          <Spinner className='mb-5' />
        )}
        <div className='flex flex-col space-y-5 w-full'>
          <TextInput
            placeholder='Name'
            name='name'
            onChange={onInputChange}
            value={formData.name}
            hasError={!!errors.name}
            errorMessage={errors.name}
          />
          <TextInput
            placeholder='Address'
            name='address'
            value={formData.address}
            onChange={onInputChange}
            hasError={!!errors.address}
            errorMessage={errors.address}
          />
          <TextInput
            placeholder='Email'
            name='email'
            value={formData.email}
            onChange={onInputChange}
            hasError={!!errors.email}
            errorMessage={errors.email}
          />
          <TextInput
            placeholder='Phone'
            name='phone'
            value={formData.phone}
            onChange={onInputChange}
            hasError={!!errors.phone}
            errorMessage={errors.phone}
          />
        </div>
      </ModalBody>
      <ModalFooter className='flex pt-4  space-x-2'>
        <Button
          className='bg-[#323cf0] w-[88px] h-11 text-white hover:bg-[#4c54ee]'
          type='button'
          onClick={handleSubmit}
          disabled={createRestaurant.isLoading || updateRestaurant.isLoading}
        >
          <CheckIcon />
        </Button>
        <Button
          className='bg-[#f3f4f5] w-11 h-11 hover:bg-gray-500 hover:text-white'
          type='button'
          onClick={handleClose}
        >
          <XIcon />
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default AddAndEditRestaurant;
