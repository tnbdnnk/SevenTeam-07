import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { editCard } from '../../../../redux/boards/boards-operations';
import { selectUser } from '../../../../redux/auth/auth-selectors';
import Modal from '../../../../helpers/ModalWindow/Modal.jsx';
import css from '../EditCard/EditCardModal.module.css';
import sprite from '../../../../images/symbol-defs.svg';

const EditCardModal = ({ isModalOpen, closeModal, card }) => {
    const dispatch = useDispatch();
    const { theme } = useSelector(selectUser);
    const { _id, title, description, label, deadline } = card;

    const { register, handleSubmit, setValue, watch } = useForm({
            defaultValues: {
            title,
            description,
            label,
            deadline: deadline ? new Date(deadline) : null,
        },
    });

    const onSubmit = async (data) => {
        const updatedCard = {
            title: data.title,
            description: data.description,
            label: data.label,
            deadline: data.deadline ? data.deadline.toISOString() : null,
        };
        try {
            await dispatch(editCard({ id: _id, updatedCard }));
            closeModal(); // Закриваємо модальне вікно після успішного редагування
        } catch (error) {
            console.error(error.message);
        }
    };

    return (
        <Modal isOpen={isModalOpen} onClose={closeModal}>
            <h2 className={[css.modalHeader, css[theme]].join(' ')}>Edit Card</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
            <input
                type="text"
                {...register('title', { required: true })}
                placeholder="Card title"
                className={[css.title, css[theme]].join(' ')}
            />
            <textarea
                {...register('description')}
                placeholder="Description"
                className={[css.description, css[theme]].join(' ')}
            />
            <p className={[css.mainText, css[theme]].join(' ')}>Priority</p>
            <ul className={css.priorityList}>
                <li className={css.priorityDataWrap}>
                <label>
                    <input type="radio" {...register('label')} value="without" />
                    {watch('label') === 'without' ? (
                    <div className={css.container}>
                        <div
                        className={[css.active, css[theme], css.without].join(
                            ' '
                        )}
                        ></div>
                        <span className={[css.textChecked, css[theme]].join(' ')}>
                        Without
                        </span>
                    </div>
                    ) : (
                    <div className={css.container}>
                        <div className={[css.circle, css.without].join(' ')}></div>
                        <span className={[css.text, css[theme]].join(' ')}>
                        Without
                        </span>
                    </div>
                    )}
                </label>
                </li>

                <li className={css.priorityDataWrap}>
                <label>
                    <input type="radio" {...register('label')} value="low" />
                    {watch('label') === 'low' ? (
                    <div className={css.container}>
                        <div
                        className={[css.active, css[theme], css.low].join(' ')}
                        ></div>
                        <span className={[css.textChecked, css[theme]].join(' ')}>
                        Low
                        </span>
                    </div>
                    ) : (
                    <div className={css.container}>
                        <div className={[css.circle, css.low].join(' ')}></div>
                        <span className={[css.text, css[theme]].join(' ')}>
                        Low
                        </span>
                    </div>
                    )}
                </label>
                </li>

                <li className={css.priorityDataWrap}>
                <label>
                    <input type="radio" {...register('label')} value="medium" />
                    {watch('label') === 'medium' ? (
                    <div className={css.container}>
                        <div
                        className={[css.active, css[theme], css.medium].join(' ')}
                        ></div>
                        <span className={[css.textChecked, css[theme]].join(' ')}>
                        Medium
                        </span>
                    </div>
                    ) : (
                    <div className={css.container}>
                        <div className={[css.circle, css.medium].join(' ')}></div>
                        <span className={[css.text, css[theme]].join(' ')}>
                        Medium
                        </span>
                    </div>
                    )}
                </label>
                </li>

                <li className={css.priorityDataWrap}>
                <label>
                    <input type="radio" {...register('label')} value="high" />
                    {watch('label') === 'high' ? (
                    <div className={css.container}>
                        <div
                        className={[css.active, css[theme], css.high].join(' ')}
                        ></div>
                        <span className={[css.textChecked, css[theme]].join(' ')}>
                        High
                        </span>
                    </div>
                    ) : (
                    <div className={css.container}>
                        <div className={[css.circle, css.high].join(' ')}></div>
                        <span className={[css.text, css[theme]].join(' ')}>
                        High
                        </span>
                    </div>
                    )}
                </label>
                </li>
            </ul>
            <p className={[css.mainText, css[theme]].join(' ')}>Deadline</p>
            <label className={css.dateWrap}>
                <DatePicker
                selected={watch('deadline')}
                onChange={(date) => setValue('deadline', date)}
                dateFormat="EEEE, d MMMM yyyy"
                calendarStartDay={1}
                placeholderText="Select a deadline"
                className={[css.date, css[theme]].join(' ')}
                calendarClassName={[css.calendarStyles, css[theme]].join(' ')}
                minDate={new Date()}
                />
                <div className={css.dropdownIconWrap}>
                <svg
                    className={[css.dropdownIcon, css[theme]].join(' ')}
                    width="18"
                    height="18"
                >
                    <use href={`${sprite}#icon-chevron-down`} />
                </svg>
                </div>
            </label>
            <button type="submit" className={[css.addBtn, css[theme]].join(' ')}>
                <div className={css.iconWrap}>
                <svg className={css.iconPlus} width="14" height="14">
                    <use href={sprite + '#icon-plus'}></use>
                </svg>
                </div>
                Save
            </button>
            </form>
        </Modal>
    );
};

export default EditCardModal;

// import Modal from '../../../../helpers/ModalWindow/Modal';
// import { useState } from 'react';
// import DatePicker from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css';
// import { parse, format } from 'date-fns';
// import { addDays } from 'date-fns';

// const EditCardModal = ({
//   isModalOpen,
//   closeModal,
//   card,
//   updateCard,
//   columnId,
// }) => {
//   const initialDeadline = card.deadline
//     ? parse(card.deadline, 'dd/MM/yyyy', new Date())
//     : null;
//   const [formData, setFormData] = useState({
//     name: card.name,
//     text: card.text,
//     priority: card.priority,
//     deadline: initialDeadline,
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
//     const formattedDate = formData.deadline
//       ? format(formData.deadline, 'dd/MM/yyyy')
//       : null;
//     updateCard(columnId, card.id, { ...formData, deadline: formattedDate });
//     closeModal();
//   };
//   const minDate = addDays(new Date(), 1);

//   return (
//     <Modal isOpen={isModalOpen} onClose={closeModal}>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           name="name"
//           value={formData.name}
//           onChange={handleChange}
//           placeholder="Card name"
//           required
//         />
//         <textarea
//           name="text"
//           value={formData.text}
//           onChange={handleChange}
//           placeholder="Card description"
//           required
//         />
//         <div>
//           <label>
//             <input
//               type="radio"
//               name="priority"
//               value="Without"
//               checked={formData.priority === 'Without'}
//               onChange={handleChange}
//             />
//             Without
//           </label>
//           <label>
//             <input
//               type="radio"
//               name="priority"
//               value="Low"
//               checked={formData.priority === 'Low'}
//               onChange={handleChange}
//             />
//             Low
//           </label>
//           <label>
//             <input
//               type="radio"
//               name="priority"
//               value="Medium"
//               checked={formData.priority === 'Medium'}
//               onChange={handleChange}
//             />
//             Medium
//           </label>
//           <label>
//             <input
//               type="radio"
//               name="priority"
//               value="High"
//               checked={formData.priority === 'High'}
//               onChange={handleChange}
//             />
//             High
//           </label>
//         </div>
//         <DatePicker
//           selected={formData.deadline}
//           onChange={(date) => setFormData({ ...formData, deadline: date })}
//           dateFormat="dd/MM/yyyy"
//           placeholderText="Select deadline"
//           required
//           minDate={minDate}
//         />
//         <button type="submit">Edit</button>
//       </form>
//     </Modal>
//   );
// };

// export default EditCardModal;
