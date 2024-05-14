// // import css from './AddColumnModal.module.css';
// // import { useState } from 'react';
// import { useForm } from "react-hook-form";
// // import Modal from '../../../../helpers/ModalWindow/Modal';
// import { useDispatch } from "react-redux";
// import { addColumn } from '../../../../redux/boards/boards-operations';
// import { useSelector } from 'react-redux';
// import { selectBoard } from '../../../redux/boards/boards-selectors';

// const AddColumnModal = () => {
//   // const [columnName, setColumnName] = useState('');
//   const dispatch = useDispatch();
//   const { register, handleSubmit } = useForm();
//   const board = useSelector(selectBoard);
//   const boardId = board._id;
//   // const handleInputChange = (event) => {
//   //   setColumnName(event.target.value);
//   // };

//   // const handleAddColumn = () => {
//   //   if (columnName.trim() === '') {
//   //     alert('Please enter a column name');
//   //     return;
//   //   }
//   //   const newColumn = {
//   //     name: columnName,
//   //     cards: [],
//   //   };
//   //   onAddColumn(newColumn);
//   //   closeModal();
//   // };

//   const handleAddColumn = async({title}) => {
//     try {
//       console.log(title);
//       console.log(boardId);
//       // const editData = { title };
//       // console.log(editData);
//       // dispatch(addColumn(boardId));
//       await dispatch(addColumn({title}));
//       // await dispatch(addColumn(boardId, title));
//       // closeModal();

//     } catch (error) {
//       console.error("Помилка при зміні борди:", error);
//     }
//   }

//   return (
//     <>
//       {/* <Modal onAddColumn={onAddColumn}> */}
//         <form onSubmit={handleSubmit(handleAddColumn)}>
//       <input {...register("title")} placeholder="Title" />
//       <button type="submit" >
//         </button>      
//     </form>
//         {/* <input
//           type="text"
//           value={columnName}
//           onChange={handleInputChange}
//           placeholder="Title"
//         />
//         <button className={css.add_column_modal_text} onClick={handleAddColumn}>
//           Add
//         </button> */}
//       {/* </Modal> */}
//     </>
//   );
// };

// export default AddColumnModal;
