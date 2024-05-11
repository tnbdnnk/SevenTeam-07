import Modal from '../../../../helpers/ModalWindow/Modal';

const DeleteCardModal = ({ isModalOpen, closeModal, onConfirmDelete }) => {
  return (
    <Modal isOpen={isModalOpen} onClose={closeModal}>
      <p>Are you sure?</p>
      <button onClick={onConfirmDelete}>Delete</button>
      <button onClick={closeModal}>Cancel</button>
    </Modal>
  );
};

export default DeleteCardModal;
