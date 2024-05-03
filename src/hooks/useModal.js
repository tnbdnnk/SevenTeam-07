import { useState } from 'react';

export const useModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  // const toggle = () => setIsOpen((isOpen) => !isOpen);

  return { isModalOpen, openModal, closeModal };
};
