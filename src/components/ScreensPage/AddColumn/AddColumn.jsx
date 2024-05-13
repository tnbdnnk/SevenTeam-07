import { useDispatch } from 'react-redux';
import { addColumn } from '../../../redux/columns/column-operations';
import { useModal } from '../../../hooks/useModal';
import AddColumnModal from './AddColumnModal/AddColumnModal';
import css from './AddColumn.module.css';
import icons from '../../../images/symbol-defs.svg';
import { useSelector } from 'react-redux';
import { selectUser } from '../../../redux/auth/auth-selectors';

const AddColumn = () => {
  const dispatch = useDispatch();
  const { isModalOpen, openModal, closeModal } = useModal();
  const { theme } = useSelector(selectUser);

  const handleAddColumn = (columnName) => {
    dispatch(addColumn(columnName));
    closeModal();
  };

  return (
    <>
      {isModalOpen && (
        <AddColumnModal
          isModalOpen={isModalOpen}
          closeModal={closeModal}
          onAddColumn={handleAddColumn}
        />
      )}

      <button className={[css.button, css[theme]].join(' ')} type="button" onClick={openModal}>
          <div className={[css.iconBox, css[theme]].join(' ')}>
            <svg className={[css.icon, css[theme]].join(' ')} width="14" height="14">
              <use href={icons + '#icon-plus'}></use>
            </svg>
          </div>
          <p className={[css.text, css[theme]].join(' ')}>Add new column</p>
      </button>
    </>
  );
};

export default AddColumn;
