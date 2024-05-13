import Modal from '../../../../helpers/ModalWindow/Modal';
import { useDispatch } from 'react-redux';
import { deleteCard } from '../../../../redux/cards/cards-operations';

const DeleteCardModal = ({ isModalOpen, closeModal, onConfirmDelete }) => {
  const dispatch = useDispatch();

  const handleDeleteCard = () => {
    dispatch(deleteCard());
    onConfirmDelete();
    closeModal();
  };

  return (
    <Modal isOpen={isModalOpen} onClose={closeModal}>
      <p>Are you sure?</p>
      <button onClick={handleDeleteCard}>Delete</button>
      <button onClick={closeModal}>Cancel</button>
    </Modal>
  );
};

export default DeleteCardModal;
