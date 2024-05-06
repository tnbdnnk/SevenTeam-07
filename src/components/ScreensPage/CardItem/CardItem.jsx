import css from './CardItem.module.css';
import icons from '../../../images/symbol-defs.svg';


const CardItem = () => {
    const handleEditCard= () => { 
        console.log("Має відкритися модальне вікно - Edit card");
    }

    const handleDeleteCard = () => { 
        console.log("Має відкритися модальне вікно - Delete card");
    }

    const handleChangeColumn = () => { 
        console.log("Має відкритися tooltip - Change column");
    }

    return (
        <div className={css.card}>
            <div className={css.textCardWrap}>
                <h4 className={css.title}>Design and Prototyping SoYummy</h4>
                <p className={css.subscribe}>Create visually appealing and functional design prototypes based on the approved concepts, ensuring seamless user experience and incorporating feedback for iterative improvements.</p>
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
                    {/* кнопка дзвоника сигналізує про те що сьогодні дата дедлайну */}
                    <button className={css.button} type='button'>
                        <svg className={css.iconAccent} width='16' height='16'>
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