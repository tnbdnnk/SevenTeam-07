import { useDispatch } from 'react-redux';
import { addColumn } from '../../../redux/columns/column-operations';
import { useModal } from '../../../hooks/useModal';
import AddColumnModal from './AddColumnModal/AddColumnModal';
import css from './AddColumn.module.css';
import icons from '../../../images/symbol-defs.svg';

const AddColumn = () => {
  const dispatch = useDispatch();
  const { isModalOpen, openModal, closeModal } = useModal();

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
      <button className={css.button} type="button" onClick={openModal}>
        <div className={css.iconBox}>
          <svg className={css.icon} width="14" height="14">
            <use href={icons + '#icon-plus'}></use>
          </svg>
        </div>
        <p className={css.text}>Add new column</p>
      </button>
    </>
  );
};

export default AddColumn;
