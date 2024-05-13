import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addCard } from '../../../../redux/cards/card-operations';
import Modal from '../../../../helpers/ModalWindow/Modal';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { nanoid } from 'nanoid';
import { format } from 'date-fns';
import { addDays } from 'date-fns';

const AddCardModal = ({ isModalOpen, closeModal, columnId }) => {
  const [formData, setFormData] = useState({
    name: '',
    text: '',
    priority: 'Without',
    deadline: null,
  });
  const dispatch = useDispatch();

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
      ? format(formData.deadline, 'dd/MM/yyyy')
      : null;
    const newCard = {
      id: nanoid(),
      name: formData.name,
      text: formData.text,
      priority: formData.priority,
      deadline: formattedDate,
    };
    dispatch(addCard(columnId, newCard));
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
          required
        />
        <div>
          <label>
            <input
              type="radio"
              name="priority"
              value="Without"
              checked={formData.priority === 'Without'}
              onChange={handleChange}
            />
            Without
          </label>
          <label>
            <input
              type="radio"
              name="priority"
              value="Low"
              checked={formData.priority === 'Low'}
              onChange={handleChange}
            />
            Low
          </label>
          <label>
            <input
              type="radio"
              name="priority"
              value="Medium"
              checked={formData.priority === 'Medium'}
              onChange={handleChange}
            />
            Medium
          </label>
          <label>
            <input
              type="radio"
              name="priority"
              value="High"
              checked={formData.priority === 'High'}
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
          required
          minDate={minDate}
        />
        <button type="submit">Add</button>
      </form>
    </Modal>
  );
};

export default AddCardModal;
