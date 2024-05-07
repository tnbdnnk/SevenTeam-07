import {useMedia} from 'react-use';
import { useState } from 'react';
// import { useBoards } from 'hooks/useBoards';

import css from './Background.module.css';


const Background = ({ children }) => {
    
    const [boards] = useState({
        name: 'Project office',
        column: ['To Do', 'In Progress', 'Done'],
        // column: [],
        id: '12345',
        background: 'test-image',
        // background: 'https://wallpaper.forfun.com/fetch/98/986a3988049771e452a4c8de5399e3e1.jpeg',
        // background: null,
    });
    
    const bgImage = boards?.background;

    // const {boards, current} = useBoards();
    // const selectedBgIndex = boards[current]?.background;
    const isWide = useMedia('(min-width: 1180px)');
    const isMobile = useMedia('(max-width: 320px)');
    const userRatio = useMedia('(-webkit-min-device-pixel-ratio: 2)') ? "@2x" : "@1x";
    let background = {};

    if(bgImage) {
        const userScreen = isWide ? "1180" : isMobile ? "320-min" : "768-min";
        const url = `url('../../../images/${bgImage}_${userScreen}_${userRatio}.jpg')`;
        // const url = `https://res.cloudinary.com/pro-task-cloud/image/upload/v1687806931/backgrounds/diego-ph-wyeapf7Gy-U-unsplash%20${selectedBgIndex}%40${userRatio}_${userScreen}.jpg.webp`;
        background = { backgroundImage: `url(${url})` };
        console.log(url);
        console.log(background);
    }

    return (
        <div className={bgImage && `${css.imageStyles}`} style={background}>
            {children}
        </div>
    )
}


export default Background;