import css from './DeleteColumnModal.module.css';
import Modal from '../../../../helpers/ModalWindow/Modal';

const DeleteColumnModal = ({ isModalOpen, closeModal, onConfirmDelete }) => {
  return (
    <>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <p className={css.delete_confirm_text}>Are you sure?</p>
        <button className={css.delete_confirm_btn} onClick={onConfirmDelete}>
          Delete
        </button>
        <button className={css.delete_cancel_btn} onClick={closeModal}>
          Cancel
        </button>
      </Modal>
    </>
  );
};

export default DeleteColumnModal;
