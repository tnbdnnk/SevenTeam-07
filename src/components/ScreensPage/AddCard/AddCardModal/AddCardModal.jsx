import Modal from '../../../../helpers/ModalWindow/Modal';
import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { format } from 'date-fns';
import { addDays } from 'date-fns';
import { useDispatch } from "react-redux";
import {addCard} from '../../../../redux/boards/boards-operations'

const AddCardModal = ({ isModalOpen, closeModal, columnId }) => {

          const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    name: '',
    text: '',
    priority: 'Without',
    deadline: null,
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
    const formattedDate = formData.deadline
      ? format(formData.deadline, 'MM/dd/yyyy')
      : null;
    const newCard = {
      title: formData.name,
      description: formData.text,
      label: formData.priority,
      deadline: formattedDate,
    };
console.log(columnId, newCard )
    dispatch(addCard({_id: columnId, newCard }));
    closeModal();
  };

  const minDate = addDays(new Date(), 1);

  return (
    <Modal isOpen={isModalOpen} onClose={closeModal}>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Card name"
          required
        />
        <textarea
          name="text"
          value={formData.text}
          onChange={handleChange}
          placeholder="Card description"

        />
        <div>
          <label>
            <input
              type="radio"
              name="priority"
              value="without"
              checked={formData.priority === 'without'}
              defaultChecked
              onChange={handleChange}
            />
            Without
          </label>
          <label>
            <input
              type="radio"
              name="priority"
              value="low"
              checked={formData.priority === 'low'}
              onChange={handleChange}
            />
            Low
          </label>
          <label>
            <input
              type="radio"
              name="priority"
              value="medium"
              checked={formData.priority === 'medium'}
              onChange={handleChange}
            />
            Medium
          </label>
          <label>
            <input
              type="radio"
              name="priority"
              value="high"
              checked={formData.priority === 'high'}
              onChange={handleChange}
            />
            High
          </label>
        </div>
        <DatePicker
          selected={formData.deadline}
          onChange={(date) => setFormData({ ...formData, deadline: date })}
          dateFormat="dd/MM/yyyy"
          placeholderText="Select deadline"
          
          minDate={minDate}
        />
        <button type="submit">Add</button>
      </form>
    </Modal>
  );
};

export default AddCardModal;
