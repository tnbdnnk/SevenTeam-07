// import css from './AddColumnModal.module.css';
// import { useState } from 'react';
// import Modal from '../../../../helpers/ModalWindow/Modal';
// import { addColumn } from "../../../../api/board-api";
// import { useSelector } from 'react-redux';
// import {selectBoard} from "../../../../redux/boards/boards-selectors"


// const AddColumnModal = ({ isModalOpen, closeModal}) => {
//   const [columnName, setColumnName] = useState('');
//   const {_id} = useSelector(selectBoard);

//   const handleInputChange = (event) => {
//     setColumnName(event.target.value);
//   };

//   const handleAddColumn = async() => {
//     if (columnName.trim() === '') {
//       alert('Please enter a column name');
//       return;
//     }

//     try {
//       const response = await addColumn(_id, columnName);
//       console.log(response); 
//     } catch (error) {
//       console.error('Помилка під час додавання колонки:', error);
//     }
//     closeModal();
//   };

//   return (
//     <>
//       <Modal isOpen={isModalOpen} onClose={closeModal}>
//         <input
//           type="text"
//           value={columnName}
//           onChange={handleInputChange}
//           placeholder="Title"
//         />
//         <button className={css.add_column_modal_text} onClick={handleAddColumn}>
//           Add
//         </button>
//       </Modal>
//     </>
//   );
// };

// export default AddColumnModal;

