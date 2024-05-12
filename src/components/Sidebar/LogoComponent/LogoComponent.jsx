import icons from '../../../images/symbol-defs.svg';
import css from "./logoComponent.module.css"
import { useSelector } from 'react-redux';
import { selectUser } from '../../../redux/auth/auth-selectors';


const LogoComponent = () => {
  const { theme } = useSelector(selectUser);

  if (theme === "violet") {
    return <div className={css.wrap}>
    <svg width="32" height="32">
      <use href={icons + '#icon-logo-icon-violet'}></use>
    </svg>
    <h2>Task Pro</h2>
  </div>
  }

  return <div className={css.wrap}>
    <svg width="32" height="32">
      <use href={icons + '#icon-logo-icon-black'}></use>
    </svg>
    <h2>Task Pro</h2>
  </div>
}

export default LogoComponent;