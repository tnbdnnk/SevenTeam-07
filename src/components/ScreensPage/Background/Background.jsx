import { useMedia } from 'react-use';
import { useSelector } from 'react-redux';
import { selectUser } from '../../../redux/auth/auth-selectors';
import { selectBoard } from '../../../redux/boards/boards-selectors';

import css from './Background.module.css';


const Background = ({ children }) => {

    const { theme } = useSelector(selectUser);
    const board = useSelector(selectBoard);    
    const bgImage = board.background;

    const isWide = useMedia('(min-width: 1180px)');
    const isMobile = useMedia('(max-width: 767px)');
    const userRatio = useMedia('(-webkit-min-device-pixel-ratio: 2)') ? "2x" : "1x";

    const handleBackground = (image) => {
        const userScreen = isWide ? "desk" : isMobile ? "mob" : "tablet";
        const url = `url('https://res.cloudinary.com/dgo1apgvd/image/upload/v1715597465/bg/${image}-${userScreen}-${userRatio}.jpg')`;
        return image !== 'noBg' ? { backgroundImage: url } : null;
    }

    return (
        <div style={handleBackground(bgImage)} className={bgImage !== 'noBg' ? `${[css.imageStyles, css[theme]].join(' ')}` : `${[css.container, css[theme]].join(' ')}`}>
            { children }
        </div>
    )
}


export default Background;