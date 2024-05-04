import css from './EditColumnModal.module.css';
import { useState } from 'react';
import Modal from '../../../../helpers/ModalWindow/Modal';

const EditColumnModal = ({
  isModalOpen,
  closeModal,
  handleRenameColumn,
  currentName,
}) => {
  const [newColumnName, setNewColumnName] = useState(currentName);

  const handleChange = (e) => {
    setNewColumnName(e.target.value);
  };

  const handleConfirmRename = () => {
    console.log('New column name:', newColumnName);
    handleRenameColumn(newColumnName);
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
