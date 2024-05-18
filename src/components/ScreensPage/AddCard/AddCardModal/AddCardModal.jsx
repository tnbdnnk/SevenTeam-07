// import Modal from '../../../../helpers/ModalWindow/Modal';
// import { useState } from 'react';
// import DatePicker from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css';
// import { addDays } from 'date-fns';
// import { useDispatch } from "react-redux";
// import { addCard } from '../../../../redux/boards/boards-operations'
// import css from "./addCardmodal.module.css"
// import { useSelector } from 'react-redux';
// import { selectUser } from '../../../../redux/auth/auth-selectors';
// import sprite from "../../../../images/symbol-defs.svg"


// const AddCardModal = ({ isModalOpen, closeModal, columnId }) => {
//   const dispatch = useDispatch();
//   const { theme } = useSelector(selectUser);

//   const minDate = new Date() ;

//   const getFormattedDate = (date) => {
//     // const date = new Date();
//      if (!(date instanceof Date)) return '';
//   const options = { weekday: 'long', month: 'long', day: 'numeric' };
//   const formattedDate = date.toLocaleDateString('en-US', options);
//   return formattedDate;
//   };
  
//   const [formData, setFormData] = useState({
//     name: '',
//     priority: 'without',
//     deadline: null
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const newCard = {
//       title: formData.name,
//       label: formData.priority,
//     };
//     dispatch(addCard({_id: columnId, newCard }));
//     closeModal();
//   };



//   return (
//     <Modal isOpen={isModalOpen} onClose={closeModal}>
//       <h2 className={[css.modalHeader, css[theme]].join(' ')}>Add card</h2>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           name="name"
//           value={formData.name}
//           onChange={handleChange}
//           placeholder="Card name"
//           required
//           className={[css.title, css[theme]].join(' ')}
//         />
//         <textarea
//           name="text"
//           value={formData.text}
//           onChange={handleChange}
//           placeholder="Description"
//           className={[css.description, css[theme]].join(' ')}
//         />
//         <p className={[css.text, css[theme]].join(' ')}>Label color</p>
//         <div className={css.radiowrap}>
//           <label className={[css.circle, css.without].join(' ')}>
//             <input
//               type="radio"
//               name="priority"
//               value="without"
//               checked={formData.priority === 'without'}
//               onChange={handleChange}
//             />
//           </label>
//           <label className={[css.circle, css.low].join(' ')}>
//             <input
//               type="radio"
//               name="priority"
//               value="low"
//               checked={formData.priority === 'low'}
//               onChange={handleChange}
//               className={[css.circle, css.low].join(' ')}
//             />
//           </label>
//           <label className={[css.circle, css.medium].join(' ')}>
//             <input
//               type="radio"
//               name="priority"
//               value="medium"
//               checked={formData.priority === 'medium'}
//               onChange={handleChange}
//             />
//           </label>
//           <label className={[css.circle, css.high].join(' ')}>
//             <input
//               type="radio"
//               name="priority"
//               value="high"
//               checked={formData.priority === 'high'}
//               onChange={handleChange}
//             />
//           </label>
//         </div>
//         <p className={[css.text, css[theme]].join(' ')}>Deadline</p>
//         <DatePicker
//           selected={formData.deadline}
//           onChange={(date) => setFormData({ ...formData, deadline: date })}
//           dateFormat="day/MM/dd"
//           placeholderText={getFormattedDate(minDate)}
//           className={[css.date, css[theme]].join(' ')}
//           minDate={minDate}
//         />
//         <button type="submit" className={[css.addBtn, css[theme]].join(' ')}>
//           <div className={css.iconWrap}>
//             <svg className={css.iconPlus} width="14" height="14">
//               <use href={sprite + '#icon-plus'}></use>
//             </svg>
//           </div>
//           Add
//         </button>
//       </form>
//     </Modal>
//   );
// };


// export default AddCardModal;




// import { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { addCard } from '../../../../redux/boards/boards-operations';
import { selectUser } from '../../../../redux/auth/auth-selectors';
import Modal from '../../../../helpers/ModalWindow/Modal';
import css from "./addCardmodal.module.css";
import sprite from "../../../../images/symbol-defs.svg";

const AddCardModal = ({ isModalOpen, closeModal, columnId }) => {
  const dispatch = useDispatch();
  const { theme } = useSelector(selectUser);
  
  const minDate = new Date();
  
  const getFormattedDate = (date) => {
    if (!(date instanceof Date)) return '';
    const options = { weekday: 'long', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('en-US', options); 
  };

  const { register, handleSubmit, setValue, watch, reset } = useForm();
  const deadline = watch("deadline");

  const onSubmit = (data) => {
    const newCard = {
      title: data.name,
      label: data.priority,
      deadline: data.deadline,
      description: data.text
    };
    dispatch(addCard({ _id: columnId, newCard }));
    closeModal();
    reset(); 
  };

  return (
    <Modal isOpen={isModalOpen} onClose={closeModal}>
      <h2 className={[css.modalHeader, css[theme]].join(' ')}>Add card</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          {...register("name", { required: true })}
          placeholder="Card name"
          className={[css.title, css[theme]].join(' ')}
        />
        <textarea
          {...register("text")}
          placeholder="Description"
          className={[css.description, css[theme]].join(' ')}
        />
        <p className={[css.text, css[theme]].join(' ')}>Label color</p>
        <div className={css.radiowrap}>
          <label className={[css.circle, css.without].join(' ')}>
            <input
              type="radio"
              {...register("priority")}
              value="without"
              defaultChecked 
            />
          </label>
          <label className={[css.circle, css.low].join(' ')}>
            <input
              type="radio"
              {...register("priority")}
              value="low"
              className={[css.circle, css.low].join(' ')}
            />
          </label>
          <label className={[css.circle, css.medium].join(' ')}>
            <input
              type="radio"
              {...register("priority")}
              value="medium"
            />
          </label>
          <label className={[css.circle, css.high].join(' ')}>
            <input
              type="radio"
              {...register("priority")}
              value="high"
            />
          </label>
        </div>
        <p className={[css.text, css[theme]].join(' ')}>Deadline</p>
        <label className={css.dateWrap}>
        <DatePicker
          selected={deadline}
          onChange={(date) => setValue("deadline", date)}
          dateFormat="eeee, MMMM d"
          placeholderText={getFormattedDate(minDate)}
          className={[css.date, css[theme]].join(' ')}
          minDate={minDate}
          />
          <div>
  <svg className={[css.dropdownIcon, css[theme]].join(' ')} width="18" height="18">
    <use href={`${sprite}#icon-chevron-down`} />
  </svg></div>
          </label>
        <button type="submit" className={[css.addBtn, css[theme]].join(' ')}>
          <div className={css.iconWrap}>
            <svg className={css.iconPlus} width="14" height="14">
              <use href={sprite + '#icon-plus'}></use>
            </svg>
          </div>
          Add
        </button>
      </form>
    </Modal>
  );
};

export default AddCardModal;

