import Modal from '../../../../helpers/ModalWindow/Modal';
import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { parse, format } from 'date-fns';
import { addDays } from 'date-fns';

const EditCardModal = ({
  isModalOpen,
  closeModal,
  card,
  updateCard,
  columnId,
}) => {
  const initialDeadline = card.deadline
    ? parse(card.deadline, 'dd/MM/yyyy', new Date())
    : null;
  const [formData, setFormData] = useState({
    name: card.name,
    text: card.text,
    priority: card.priority,
    deadline: initialDeadline,
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
      ? format(formData.deadline, 'dd/MM/yyyy')
      : null;
    updateCard(columnId, card.id, { ...formData, deadline: formattedDate });
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
        <button type="submit">Edit</button>
      </form>
    </Modal>
  );
};

export default EditCardModal;
