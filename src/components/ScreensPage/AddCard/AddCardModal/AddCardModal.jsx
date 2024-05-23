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
    const options = { weekday: 'short', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('en-GB', options);
  };

  const { register, handleSubmit, setValue, watch, reset } = useForm();
  const deadline = watch("deadline");

  const onSubmit = (data) => {
    const newCard = {
      title: data.name,
      label: data.priority,
      deadline: data.deadline ? data.deadline.toISOString() : null,
      description: data.text,
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
          {...register('name', { required: true })}
          placeholder="Card name"
          className={[css.title, css[theme]].join(' ')}
        />
        <textarea
          {...register('text')}
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
                    className={[css.active, css[theme], css.without].join(' ')}
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
                  <span className={[css.text, css[theme]].join(' ')}>Low</span>
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
                  <span className={[css.text, css[theme]].join(' ')}>High</span>
                </div>
              )}
            </label>
          </li>
        </ul>
        {/* <div className={css.radiowrap}>
          <label className={[css.circle, css.without].join(' ')}>
            <input
              type="radio"
              {...register('priority')}
              value="without"
              defaultChecked
            />
          </label>
          <label className={[css.circle, css.low].join(' ')}>
            <input
              type="radio"
              {...register('priority')}
              value="low"
              className={[css.circle, css.low].join(' ')}
            />
          </label>
          <label className={[css.circle, css.medium].join(' ')}>
            <input type="radio" {...register('priority')} value="medium" />
          </label>
          <label className={[css.circle, css.high].join(' ')}>
            <input type="radio" {...register('priority')} value="high" />
          </label>
        </div> */}
        <p className={[css.mainText, css[theme]].join(' ')}>Deadline</p>
        <label className={css.dateWrap}>
          <DatePicker
            selected={deadline}
            onChange={(date) => setValue('deadline', date)}
            dateFormat="EEE, d MMMM yyyy"
            calendarStartDay={1}
            placeholderText={getFormattedDate(minDate)}
            className={[css.date, css[theme]].join(' ')}
            calendarClassName={[css.calendarStyles, css[theme]].join(' ')}
            minDate={minDate}
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
          Add
        </button>
      </form>
    </Modal>
  );
};

export default AddCardModal;

