import { useState } from 'react';
import { useDispatch } from 'react-redux';
import Modal from '../../../../helpers/ModalWindow/Modal';
import { addColumn } from '../../../../redux/columns/column-operations';
import css from './AddColumnModal.module.css';

const AddColumnModal = ({ isModalOpen, closeModal }) => {
  const [columnName, setColumnName] = useState('');
  const dispatch = useDispatch();

  const handleInputChange = (event) => {
    setColumnName(event.target.value);
  };

  const handleAddColumn = () => {
    if (columnName.trim() === '') {
      alert('Please enter a column name');
      return;
    }
    const newColumn = {
      name: columnName,
      cards: [],
    };
    dispatch(addColumn(newColumn));
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
