// // import css from './EditColumnModal.module.css';
// import Modal from '../../../../helpers/ModalWindow/Modal';
// import { useDispatch } from 'react-redux';
// import { editColumn } from '../../../../redux/boards/boards-operations';
// import { toast } from 'react-hot-toast';

// import { useForm } from "react-hook-form";
// import { useModal } from '../../../../hooks/useModal';
// // import { useModal } from '../../../hooks/useModal';
// import { selectBoard } from '../../../../redux/boards/boards-selectors';
// // import { selectBoard } from '../../../redux/boards/boards-selectors';
// import { useSelector } from 'react-redux';


// // const EditColumnModal = ({ currentId }) => {
// const EditColumnModal = () => {

//   const dispatch = useDispatch();
//   // const { isModalOpen, openModal, closeModal } = useModal();
//   const { register, handleSubmit } = useForm();
//   const board = useSelector(selectBoard);

//   const onSubmit = (data) => {
//     console.log(data);
//   } 
//   console.log(onSubmit());

//   const handleEditColumn = ({ title }) => {
//     dispatch(editColumn({ _id: board._id, title: title }));
//     closeModal();
//     toast.success('Column was edited successfully!');
//   }

//   return (
//     <>
//       {/* <Modal isOpen={isModalOpen} onClose={closeModal}> */}
//         <form onSubmit={handleSubmit(handleEditColumn)}>
//           <input type="text" {...register("title")} placeholder="Title" />
//           {/* <button className={css.edit_column_btn} type="submit" onClick={openModal}> */}
//           <input type="submit">
//             Edit
//           </input>
//           {/* </button> */}
//         </form>
//       {/* </Modal> */}
//     </>
//   );
// };


// export default EditColumnModal;
