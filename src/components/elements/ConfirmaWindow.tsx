import React from "react";
import useConfirm from "../../hooks/useConfirm";
import { Modal, ModalBody, ModalFooter, ModalHeader } from "./Modal";
import { ReactComponent as XIcon } from "../../icons/x.svg";
import { ReactComponent as CheckIcon } from "../../icons/check.svg";
import Button from "./Button";

const ConfirmaWindow: React.FC = () => {
  const { prompt = "", isOpen = false, proceed, title } = useConfirm();
  return (
    <Modal isOpen={isOpen}>
      <ModalHeader>
        <h6 className='text-[22px] font-semibold'>{title && "Alert"}</h6>
      </ModalHeader>
      <ModalBody>
        <p className='py-4'>{prompt}</p>
      </ModalBody>
      <ModalFooter>
        <ModalFooter className='flex pt-4  space-x-2'>
          <Button
            className='bg-[#323cf0] w-[88px] h-11 text-white hover:bg-[#4c54ee]'
            type='button'
            onClick={() => proceed(true)}
          >
            <CheckIcon />
          </Button>
          <Button
            className='bg-[#f3f4f5] w-11 h-11 hover:bg-gray-500 hover:text-white'
            type='button'
            onClick={() => proceed(false)}
          >
            <XIcon />
          </Button>
        </ModalFooter>
      </ModalFooter>
    </Modal>
  );
};

export default ConfirmaWindow;
