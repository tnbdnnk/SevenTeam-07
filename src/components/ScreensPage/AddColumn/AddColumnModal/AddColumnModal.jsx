import css from './AddColumnModal.module.css';
import { useState } from 'react';
import Modal from '../../../../helpers/ModalWindow/Modal';

const AddColumnModal = ({ isModalOpen, closeModal, onAddColumn }) => {
  const [columnName, setColumnName] = useState('');

  const handleInputChange = (event) => {
    setColumnName(event.target.value);
  };

  const handleAddColumn = () => {
    if (columnName.trim() === '') {
      alert('Please enter a column name');
      return;
    }
    onAddColumn(columnName);
    closeModal();
  };

  return (
    <>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <input
          type="text"
          value={columnName}
          onChange={handleInputChange}
          placeholder="Title"
        />
        <button className={css.add_column_modal_text} onClick={handleAddColumn}>
          Add
        </button>
      </Modal>
    </>
  );
};

export default AddColumnModal;
