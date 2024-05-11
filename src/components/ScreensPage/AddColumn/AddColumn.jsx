import css from './AddColumn.module.css';
import icons from '../../../images/symbol-defs.svg';
import { useModal } from '../../../hooks/useModal';
import AddColumnModal from './AddColumnModal/AddColumnModal';

const AddColumn = ({ onAddColumn }) => {
  const { isModalOpen, openModal, closeModal } = useModal();

  const handleAddColumn = (columnName) => {
    onAddColumn(columnName);
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
