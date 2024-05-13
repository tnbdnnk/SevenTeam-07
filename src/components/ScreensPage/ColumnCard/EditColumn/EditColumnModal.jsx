import { useDispatch } from 'react-redux';
import { editColumnName } from '../../../../redux/columns/column-operations';
import css from './EditColumnModal.module.css';
import { useState } from 'react';
import Modal from '../../../../helpers/ModalWindow/Modal';

const EditColumnModal = ({
  isModalOpen,
  closeModal,
  currentName,
  columnId,
}) => {
  const [newColumnName, setNewColumnName] = useState(currentName);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setNewColumnName(e.target.value);
  };

  const handleConfirmRename = () => {
    console.log('New column name:', newColumnName);
    dispatch(editColumnName({ columnId, newName: newColumnName }));
    closeModal();
  };

  return (
    <>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <input type="text" value={newColumnName} onChange={handleChange} />
        <button className={css.edit_column_btn} onClick={handleConfirmRename}>
          Add
        </button>
      </Modal>
    </>
  );
};

export default EditColumnModal;
