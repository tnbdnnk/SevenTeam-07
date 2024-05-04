import icons from '../../../images/symbol-defs.svg';
import css from "./logoComponent.module.css"

const LogoComponent = () => {
  return <div className={css.wrap}>
    <svg width="32" height="32">
      <use href={icons + '#icon-logo-icon-black'}></use>
    </svg>
    <h2>Task Pro</h2>
  </div>
}

export default LogoComponent;