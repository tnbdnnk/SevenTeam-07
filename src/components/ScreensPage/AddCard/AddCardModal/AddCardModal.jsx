import Modal from '../../../../helpers/ModalWindow/Modal';
import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { addDays } from 'date-fns';
import { useDispatch } from "react-redux";
import { addCard } from '../../../../redux/boards/boards-operations'
import css from "./addCardmodal.module.css"
import { useSelector } from 'react-redux';
import { selectUser } from '../../../../redux/auth/auth-selectors';
import sprite from "../../../../images/symbol-defs.svg"


const AddCardModal = ({ isModalOpen, closeModal, columnId }) => {
  const dispatch = useDispatch();
  const { theme } = useSelector(selectUser);

  const [formData, setFormData] = useState({
    name: '',
    priority: 'without',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newCard = {
      title: formData.name,
      label: formData.priority,
    };
    dispatch(addCard({_id: columnId, newCard }));
    closeModal();
  };

  const minDate = addDays(new Date(), 1);

  const getFormattedDate = () => {
  const date = new Date();
  const options = { weekday: 'long', month: 'long', day: 'numeric' };
  const formattedDate = date.toLocaleDateString('en-US', options);
  return formattedDate;
};

  return (
    <Modal isOpen={isModalOpen} onClose={closeModal}>
      <h2 className={[css.modalHeader, css[theme]].join(' ')}>Add card</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Card name"
          required
          className={[css.title, css[theme]].join(' ')}
        />
        <textarea
          name="text"
          value={formData.text}
          onChange={handleChange}
          placeholder="Description"
          className={[css.description, css[theme]].join(' ')}
        />
        <p className={[css.text, css[theme]].join(' ')}>Label color</p>
        <div className={css.radiowrap}>
          <label >
            <input
              type="radio"
              name="priority"
              value="without"
              checked={formData.priority === 'without'}
              onChange={handleChange}
              
            />
            
          </label>
          <label >
            <input
              type="radio"
              name="priority"
              value="low"
              checked={formData.priority === 'low'}
              onChange={handleChange}
              
            />
            
          </label>
          <label >
            <input
              type="radio"
              name="priority"
              value="medium"
              checked={formData.priority === 'medium'}
              onChange={handleChange}
              
            />
            
          </label>
          <label >
            <input
              type="radio"
              name="priority"
              value="high"
              checked={formData.priority === 'high'}
              onChange={handleChange}
              
            />
            
          </label>
        </div>
        <p className={[css.text, css[theme]].join(' ')}>Deadline</p>
        <DatePicker
          selected={formData.deadline}
          onChange={(date) => setFormData({ ...formData, deadline: date })}
          dateFormat="dd/MM/yyyy"
          placeholderText={getFormattedDate()}
          className={[css.date, css[theme]].join(' ')}
          minDate={minDate}
        />
        <button type="submit" className={[css.addBtn, css[theme]].join(' ')}><div className={css.iconWrap}><svg className={css.iconPlus} width="14" height="14">
      <use href={sprite + '#icon-plus'}></use>
    </svg></div>Add</button>
      </form>
    </Modal>
  );
};


export default AddCardModal;
