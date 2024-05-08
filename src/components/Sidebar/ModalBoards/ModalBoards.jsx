import { useForm } from "react-hook-form"
import { useState, useEffect  } from "react";
import css from "./modalBoards.module.css";
import sprite from "../../../images/symbol-defs.svg"

const arrayIcons = ["#icon-four-balls", "#icon-star", "#icon-loading", '#icon-puzzle', "#icon-box", "#icon-lightning", "#icon-colors",   "#icon-hexagon"]

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

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("title")} placeholder="Title" className={css.title} required />
<h3 className={css.text}>Icons</h3>
      <div className={css.iconRadios}>
        { iconsList}
      </div>
<h3 className={css.text}>Background</h3>
      <div className={css.backgroundRadios}>
        <label>
          <input type="radio" {...register("background")} value="bg1" defaultChecked />
          <div className={css.backgroundWrapper}>
            <svg width="28" height="28" >
              <use href=''></use></svg>
          </div>
        </label>
        <label>
          <input type="radio" {...register("background")} value="bg2" />
          <div className={css.backgroundWrapper}>
            <svg width="18" height="18" >
              <use href=''></use></svg>
          </div>
        </label>
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
    setBoardData({ title, icons,  background });
      //  додати логіку відправки  даних на сервер
  }
  
  return <>
    <h2 className={css.modalHeader}>New board</h2>
    <NewBoardForm onSubmit={onSubmit} />
  </>
}


export const EditBoard = ({ boardData }) => {
  const { register, handleSubmit } = useForm();
  console.log(boardData)

  const onSubmit = (data) => {
    console.log("відправка даних на сервер");
        //  Логіка відправки  даних на сервер
  }

  const iconsList = arrayIcons.map((icon, index) => {
    return (<label key={icon}>
          <input type="radio" {...register("icons")} value={icon} defaultChecked={index === 0} />
          <div className={css.iconWrapper}>
        <svg className={css.modalIcons} width="18" height="18" >
              <use href={sprite + icon}></use></svg>
          </div>
        </label>)
  })

  return <>
    <h2 className={css.modalHeader}>Edit board</h2>
<form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("title")} placeholder="Title" className={css.title} defaultValue={boardData.title} required />
<h3 className={css.text}>Icons</h3>
      <div className={css.iconRadios}>
        { iconsList}
      </div>
<h3 className={css.text}>Background</h3>
      <div className={css.backgroundRadios}>
        <label>
          <input type="radio" {...register("background")} value="bg1" defaultChecked />
          <div className={css.backgroundWrapper}>
            <svg width="28" height="28" >
              <use href=''></use></svg>
          </div>
        </label>
        <label>
          <input type="radio" {...register("background")} value="bg2" />
          <div className={css.backgroundWrapper}>
            <svg width="18" height="18" >
              <use href=''></use></svg>
          </div>
        </label>
      </div>
      <button type="submit" className={css.createBtn}>
        <div className={css.iconWrap}>
          <svg className={css.iconPlus} width="14" height="14">
            <use href={sprite + '#icon-plus'}></use>
    </svg></div>Edit</button>      
    </form>
  </>
}