import css from './CardItem.module.css';
import icons from '../../../images/symbol-defs.svg';


const CardItem = () => {
    const handleEditCard= () => { 
        console.log("Має відкритися модальне вікно - Edit card");
    }

    const handleDeleteCard = () => { 
        console.log("??? Має відкритися модальне вікно - Delete card");
    }

    const handleChangeColumn = () => { 
        console.log("Має відкритися модальне вікно - Change column");
    }

    return (
        <div className={css.card}>
            <div className={css.textCardWrap}>
                <h3 className={css.title}>Design and Prototyping SoYummy</h3>
                {/* Приховуввати більше 2х рядків:*/}
                <p className={css.subscribe}>Create visually appealing and functional design prototypes based on the approved concepts,...</p>
            </div>

            <div className={css.vector}></div>

            <div className={css.addedInfoWrap}>
                <div className={css.propertyWrap}>
                    <div>
                        <p className={css.caption}>Priority</p>
                        <div className={css.priorityDataWrap}>
                            <div className={css.circle}></div>
                            <p className={css.text}>Low</p>
                        </div>
                    </div>
                    <div>
                        <p className={css.caption}>Deadline</p>
                        <p className={css.text}>12/05/2023</p>
                    </div>
                </div>

                <div className={css.buttonsWrap}>
                    {/* Який функціонал дзвіночка ? */}
                    <button className={css.button} type='button'>
                        <svg className={css.icon} width='16' height='16'>
                            <use href={icons + '#icon-bell'}></use>
                        </svg>
                    </button>
                    <button className={css.button} type='button' onClick={handleChangeColumn}>
                        <svg className={css.icon} width='16' height='16'>
                            <use href={icons + '#icon-arrow-circle-broken-right'}></use>
                        </svg>
                    </button>
                    <button className={css.button} type='button' onClick={handleEditCard}>
                        <svg className={css.icon} width='16' height='16'>
                            <use href={icons + '#icon-pen'}></use>
                        </svg>
                    </button>
                    <button className={css.button} type='button' onClick={handleDeleteCard}>
                        <svg className={css.icon} width='16' height='16'>
                            <use href={icons + '#icon-trash'}></use>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
};


export default CardItem;