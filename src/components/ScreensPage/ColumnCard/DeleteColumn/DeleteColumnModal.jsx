import { useDispatch } from 'react-redux';
import { deleteColumn } from '../../../../redux/columns/column-operations';
import css from './DeleteColumnModal.module.css';
import Modal from '../../../../helpers/ModalWindow/Modal';

const DeleteColumnModal = ({ isModalOpen, closeModal, columnId }) => {
  const dispatch = useDispatch();

  const handleConfirmDelete = () => {
    dispatch(deleteColumn(columnId));
    closeModal();
  };

  return (
    <>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <p className={css.delete_confirm_text}>Are you sure?</p>
        <button
          className={css.delete_confirm_btn}
          onClick={handleConfirmDelete}
        >
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
