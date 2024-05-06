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
        <svg className={css.icon} width="28" height="28">
          <use href={icons + '#icon-plus'}></use>
        </svg>
        <p className={css.text}>Add new column</p>
      </button>
    </>
  );
};

export default AddColumn;
