import css from './Filters.module.css';
import icons from '../../images/symbol-defs.svg';
import Modal from '../../helpers/ModalWindow/Modal';
import { useModal } from '../../hooks/useModal';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from '../../redux/auth/auth-selectors';
import { filterTasksByPriority } from '../../redux/filter/filter-slice';
// import sprite from '../../images/circle_priority.svg';

const Filters = () => {
  const [radioChoose, setRadioChoose] = useState();
  const { theme } = useSelector(selectUser);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setRadioChoose(e.target.value);
    console.log(radioChoose);

    dispatch(filterTasksByPriority(e.target.value));
  };

  const closeAndReset = () => {
    closeModal();
    setRadioChoose('');
  };
  const { isModalOpen, openModal, closeModal } = useModal();
  return (
    <>
      <button className={css.button} type="button" onClick={openModal}>
        <svg
          className={[css.icon, css[theme]].join(' ')}
          width="16"
          height="16"
        >
          <use href={icons + '#icon-filter'}></use>
        </svg>
        <p className={[css.subscribe, css[theme]].join(' ')}>Filters</p>
      </button>

      <Modal isOpen={isModalOpen} onClose={closeAndReset}>
        <div>
          <h2 className={[css.modalHeader, css[theme]].join(' ')}>Filters</h2>
          <div className={css.vector}></div>
          <div className={css.container}>
            <p className={[css.mainText, css[theme]].join(' ')}>Label color</p>

            <button
              className={[css.btn, css[theme]].join(' ')}
              type="button"
              onClick={() => {
                dispatch(filterTasksByPriority('all'));
                setRadioChoose('');
              }}
            >
              Show all
            </button>
          </div>

          <div>
            <ul>
              <li className={css.priorityDataWrap}>
                <label>
                  <input
                    type="radio"
                    name="priority"
                    value="without"
                    checked={radioChoose === 'without' ? true : false}
                    onChange={handleChange}
                  />

                  {radioChoose === 'without' ? (
                    <div className={css.container}>
                      <div
                        className={[css.active, css[theme], css.without].join(
                          ' '
                        )}
                      ></div>
                      <span className={[css.textCheked, css[theme]].join(' ')}>
                        Without
                      </span>
                    </div>
                  ) : (
                    <div className={css.container}>
                      <div
                        className={[css.circle, css.without].join(' ')}
                      ></div>
                      <span className={[css.text, css[theme]].join(' ')}>
                        Without
                      </span>
                    </div>
                  )}
                </label>
              </li>

              <li className={css.priorityDataWrap}>
                <label>
                  <input
                    type="radio"
                    name="priority"
                    value="low"
                    onChange={handleChange}
                    checked={radioChoose === 'low' ? true : false}
                  />

                  {radioChoose === 'low' ? (
                    <div className={css.container}>
                      <div
                        className={[css.active, css[theme], css.low].join(' ')}
                      ></div>
                      <span className={[css.textCheked, css[theme]].join(' ')}>
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
                  <input
                    className={css.circle}
                    type="radio"
                    name="priority"
                    value="medium"
                    onChange={handleChange}
                    checked={radioChoose === 'medium' ? true : false}
                  />

                  {radioChoose === 'medium' ? (
                    <div className={css.container}>
                      <div
                        className={[css.active, css[theme], css.medium].join(
                          ' '
                        )}
                      ></div>
                      <span className={[css.textCheked, css[theme]].join(' ')}>
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
                  <input
                    type="radio"
                    name="priority"
                    value="high"
                    onChange={handleChange}
                    checked={radioChoose === 'high' ? true : false}
                  />

                  {radioChoose === 'high' ? (
                    <div className={css.container}>
                      <div
                        className={[css.active, css[theme], css.high].join(' ')}
                      ></div>
                      <span className={[css.textCheked, css[theme]].join(' ')}>
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
          </div>
        </div>
      </Modal>
    </>
  );
};

export default Filters;
