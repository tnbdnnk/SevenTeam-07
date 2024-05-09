import { useForm } from "react-hook-form"
import { useState, useEffect  } from "react";
import css from "./modalBoards.module.css";
import sprite from "../../../images/symbol-defs.svg"

import noBg from "../../../images/background_icons/noBg.jpg"
import bg1 from "../../../images/background_icons/bg1.jpg"
import bg2 from "../../../images/background_icons/bg2.jpg"
import bg3 from "../../../images/background_icons/bg3.jpg"
import bg4 from "../../../images/background_icons/bg4.jpg"
import bg5 from "../../../images/background_icons/bg5.jpg"
import bg6 from "../../../images/background_icons/bg6.jpg"
import bg7 from "../../../images/background_icons/bg7.jpg"
import bg8 from "../../../images/background_icons/bg8.jpg"
import bg9 from "../../../images/background_icons/bg9.jpg"
import bg10 from "../../../images/background_icons/bg10.jpg"
import bg11 from "../../../images/background_icons/bg11.jpg"
import bg12 from "../../../images/background_icons/bg12.jpg"
import bg13 from "../../../images/background_icons/bg13.jpg"
import bg14 from "../../../images/background_icons/bg14.jpg"
import bg15 from "../../../images/background_icons/bg15.jpg"

const arrayIcons = ["#icon-four-balls", "#icon-star", "#icon-loading", '#icon-puzzle', "#icon-box", "#icon-lightning", "#icon-colors",   "#icon-hexagon"]
const arrayBg = [noBg, bg1, bg2, bg3, bg4, bg5, bg6, bg7, bg8, bg9, bg10, bg11, bg12, bg13, bg14, bg15]

const NewBoardForm = ({ onSubmit }) => {
  const { register, handleSubmit } = useForm();

  const iconsList = arrayIcons.map((icon, index) => {
    return (<label key={icon}>
          <input type="radio" {...register("icons")} value={icon} defaultChecked={index === 0} />
          <div className={css.iconWrapper}>
        <svg className={css.modalIcons} width="18" height="18" >
              <use href={sprite + icon}></use></svg>
          </div>
        </label>)
  })

  const bgList = arrayBg.map((bgName, index) => {
    const bgValue = bgName.slice(50, 54).replace(".","");
    // console.log(bgValue)
    
    return (<label key={bgName}>
          <input type="radio" {...register("background")} value={bgValue} defaultChecked={index === 0}/>
      <div className={css.backgroundWrapper}>
        <img  src={bgName} alt={bgName} />
          </div>
        </label>)
  })

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("title")} placeholder="Title" className={css.title} required />
<h3 className={css.text}>Icons</h3>
      <div className={css.iconRadios}>
        { iconsList}
      </div>
<h3 className={css.text}>Background</h3>
      <div className={css.backgroundRadios}>
        {bgList}
      </div>
      <button type="submit" className={css.createBtn}><div className={css.iconWrap}><svg className={css.iconPlus} width="14" height="14">
      <use href={sprite + '#icon-plus'}></use>
    </svg></div>Create</button>      
    </form>
  );
};


export const NewBoard = () => {

  // створення данних форми
  const [boardData, setBoardData] = useState({
    title: "",
    icons: "",
    background: ""
  });

  useEffect(() => {
    console.log("Стан boardData змінився:", boardData);
  }, [boardData]);

  const onSubmit = ({ title, icons, background}) => {
    setBoardData({ title, icons, background });
    console.log(boardData)
      //  додати логіку відправки  даних на сервер
  }
  
  return <>
    <h2 className={css.modalHeader}>New board</h2>
    <NewBoardForm onSubmit={onSubmit} />
  </>
}


export const EditBoard = ({ boardData }) => {
  const { register, handleSubmit } = useForm();
  console.log('boardData', boardData)


  const [editBoardData, seteditBoardData] = useState(boardData);
  
  useEffect(() => {
    console.log("Стан editBoardData змінився:", editBoardData);
  }, [editBoardData]);
  
  const onSubmit = ({ title, icons, background}) => {
    
    seteditBoardData({ title, icons, background });
    console.log("відправка даних на сервер");
        //  Логіка відправки  даних на сервер
  }

  const iconsList = arrayIcons.map((icon) => {
    return (<label key={icon}>
          <input type="radio" {...register("icons")} value={icon} defaultChecked={boardData.icons === icon} />
          <div className={css.iconWrapper}>
        <svg className={css.modalIcons} width="18" height="18" >
              <use href={sprite + icon}></use></svg>
          </div>
        </label>)
  })

  const bgList = arrayBg.map((bgName) => {
    const bgValue = bgName.slice(50, 54).replace(".","");
    return (<label key={bgName}>
          <input type="radio" {...register("background")} value={bgValue} defaultChecked={boardData.background === bgValue} />
      <div className={css.backgroundWrapper}>
        <img  src={bgName} alt={bgName} />
          </div>
        </label>)
  })

  return <>
    <h2 className={css.modalHeader}>Edit board</h2>
<form onSubmit={handleSubmit(onSubmit) }>
      <input {...register("title")} placeholder="Title" className={css.title} defaultValue={boardData.title} required />
<h3 className={css.text}>Icons</h3>
      <div className={css.iconRadios}>
        { iconsList}
      </div>
<h3 className={css.text}>Background</h3>
      <div className={css.backgroundRadios}>
        {bgList}
      </div>
      <button type="submit" className={css.createBtn}>
        <div className={css.iconWrap}>
          <svg className={css.iconPlus} width="14" height="14">
            <use href={sprite + '#icon-plus'}></use>
    </svg></div>Edit</button>      
    </form>
  </>
}