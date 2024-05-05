import css from "./need-help.module.css"
import icons from '../../../images/symbol-defs.svg';

const NeedHelp = () => {

  return <div className={css.box}>
    <div className={css.cactusBox}></div>
    <p>If you need help with  <span>TaskPro</span>, check out our support resources or reach out to our customer support team</p>
    <button className={css.btn}><svg className={css.icon} width="20" height="20"><use href={icons + '#icon-help-circle'}></use></svg>Need help?</button>
  </div>
}
export default NeedHelp