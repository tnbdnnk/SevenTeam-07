import css from './CardItem.module.css';
import icons from '../../../images/symbol-defs.svg';
import DeleteCardModal from './DeleteCard/DeleteCardModal';
import { useModal } from '../../../hooks/useModal';
import EditCardModal from './EditCard/EditCardModal';

const CardItem = ({
  card: { id, name, text, priority, deadline },
  onDeleteCard,
  updateCard,
  columnId,
}) => {
  const {
    openModal: openDeleteModal,
    closeModal: closeDeleteModal,
    isModalOpen: isDeleteModalOpen,
  } = useModal();
  const {
    openModal: openEditCardModal,
    closeModal: closeEditCardModal,
    isModalOpen: isEditCardModalOpen,
  } = useModal();

  // const handleEditCard = () => {
  //   console.log('Має відкритися модальне вікно - Edit card');
  // };

  const handleDeleteCard = () => {
    onDeleteCard(id);
    closeDeleteModal();
  };

  // const handleChangeColumn = () => {
  //     console.log("Має відкритися tooltip - Change column");
  // }

  return (
    <div className={css.card}>
      {isDeleteModalOpen && (
        <DeleteCardModal
          isModalOpen={isDeleteModalOpen}
          closeModal={closeDeleteModal}
          onConfirmDelete={handleDeleteCard}
        />
      )}
      {isEditCardModalOpen && (
        <EditCardModal
          isModalOpen={isEditCardModalOpen}
          closeModal={closeEditCardModal}
          updateCard={updateCard}
          card={{ id, name, text, priority, deadline }}
          columnId={columnId}
        />
      )}
      <div className={css.textCardWrap}>
        <h4 className={css.title}>{name}</h4>
        <p className={css.subscribe}>{text}</p>
      </div>

      <div className={css.vector}></div>
      <div className={css.addedInfoWrap}>
        <div className={css.propertyWrap}>
          <div>
            <p className={css.caption}>Priority</p>
            <div className={css.priorityDataWrap}>
              <div className={css.circle}></div>
              <p className={css.text}>{priority}</p>
            </div>
          </div>
          <div>
            <p className={css.caption}>Deadline</p>
            <p className={css.text}>{deadline}</p>
          </div>
        </div>

        <div className={css.buttonsWrap}>
          {/* кнопка дзвоника сигналізує про те що сьогодні дата дедлайну */}
          <button className={css.button} type="button">
            <svg className={css.iconAccent} width="16" height="16">
              <use href={icons + '#icon-bell'}></use>
            </svg>
          </button>
          {/* <button className={css.button} type='button' onClick={handleChangeColumn}>
                        <svg className={css.icon} width='16' height='16'>
                            <use href={icons + '#icon-arrow-circle-broken-right'}></use>
                        </svg>
                    </button> */}
          <button
            className={css.button}
            type="button"
            onClick={openEditCardModal}
          >
            <svg className={css.icon} width="16" height="16">
              <use href={icons + '#icon-pen'}></use>
            </svg>
          </button>
          <button
            className={css.button}
            type="button"
            onClick={openDeleteModal}
          >
            <svg className={css.icon} width="16" height="16">
              <use href={icons + '#icon-trash'}></use>
            </svg>
          </button> 
        </div>
      </div>
    </div>
  );
};

export default CardItem;
