import css from './Filters.module.css';
import icons from '../../images/symbol-defs.svg';
import Modal from '../../helpers/ModalWindow/Modal';
import { useModal } from '../../hooks/useModal';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { filterTasksByPriority } from '../../redux/filter/filter-slice';

const Filters = () => {
  const [radioChoose, setRadioChoose] = useState();

  const dispatch = useDispatch();

  const chooseBtn = (e) => {
    setRadioChoose(e.target.value);

    dispatch(filterTasksByPriority(e.target.value));
  };

  // const handleSetColor = (image) => {
  //     if (image) {
  //         return { backgroundColor: `${label}` }
  //     };
  //     return;
  // }

  const { isModalOpen, openModal, closeModal } = useModal();
  return (
    <>
      <button className={css.button} type="button" onClick={openModal}>
        <svg className={css.icon} width="16" height="16">
          <use href={icons + '#icon-filter'}></use>
        </svg>
        <p className={css.subscribe}>Filters</p>
      </button>

      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <div>
          <h4>Filters</h4>
          <div className={css.vector}></div>
          <div className={css.container}>
            <p>Label color</p>

            <button
              type="button"
              onClick={() => {
                dispatch(filterTasksByPriority('all'));
              }}
            >
              Show all
            </button>
          </div>

          <div></div>

          <ul>
            <li className={css.priorityDataWrap}>
              <label>
                <input
                  type="radio"
                  name="priority"
                  value="Without"
                  checked={radioChoose === 'without' ? true : false}
                  onClick={chooseBtn}
                />
                Without
              </label>
              {/* <div className={css.circle}></div>
              <p className={css.text}>Without priority</p> */}
            </li>
            <li className={css.priorityDataWrap}>
              <label>
                <input
                  type="radio"
                  name="priority"
                  value="Low"
                  onClick={chooseBtn}
                  checked={radioChoose === 'low' ? true : false}
                />
                Low
              </label>
              {/* <div className={css.circle}></div>
              <p className={css.text}>Low</p> */}
            </li>
            <li className={css.priorityDataWrap}>
              <label>
                <input
                  className={css.circle}
                  type="radio"
                  name="priority"
                  value="Medium"
                  onClick={chooseBtn}
                  checked={radioChoose === 'medium' ? true : false}
                />
                Medium
              </label>
              {/* <div className={css.circle}></div>
              <p className={css.text}>Medium</p> */}
            </li>
            <li className={css.priorityDataWrap}>
              <label>
                <input
                  type="radio"
                  name="priority"
                  value="High"
                  onClick={chooseBtn}
                  checked={radioChoose === 'high' ? true : false}
                />
                High
              </label>
              {/* <div className={css.circle}></div>
              <p className={css.text}>High</p> */}
            </li>
          </ul>
        </div>
      </Modal>
    </>
  );
};

export default Filters;
