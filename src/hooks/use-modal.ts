import { useState } from 'react';

/* -------------------------------------------------------------------------- */

type ReturnProps = {
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
};

export const useModal = (): ReturnProps => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return { isOpen, openModal, closeModal };
};
