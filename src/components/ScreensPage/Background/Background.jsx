import {useMedia} from 'react-use';
// import { useState } from 'react';
// import aa from '../../../images/bg-images/test-image_1180_@1x.jpg';

import css from './Background.module.css';


const Background = ({ children }) => {
    
    // const [boards, setBoards] = useState({
    //     name: 'Project office',
    //     column: ['To Do', 'In Progress', 'Done'],
    //     // column: [],
    //     id: '12345',
    //     background: 'test-image',
        // background: 'https://wallpaper.forfun.com/fetch/98/986a3988049771e452a4c8de5399e3e1.jpeg',
        // background: null,
    // });

    const boards = [
        {
            background: 'test-image',
        }
    ];
    
    const bgImage = boards[0].background;

    const isWide = useMedia('(min-width: 1180px)');
    const isMobile = useMedia('(max-width: 767px)');
    const userRatio = useMedia('(-webkit-min-device-pixel-ratio: 2)') ? "@2x" : "@1x";
    // const Ratio = useMedia('(-webkit-min-device-pixel-ratio: 2)');
    // const userRatio = Ratio ? "@2x" : "@1x";
    let bg = {};

    const handleBackground = (image) => {
        if (image) {
            const userScreen = isWide ? "1180" : isMobile ? "320" : "768";
            const url = `url('../../../images/bg-images/${image}_${userScreen}_${userRatio}.jpg')`;
            // const url = `https://cloudinary.com/.jpg`;
            bg = { backgroundImage: url };
            console.log(bg);
            return bg;
        };
        return;
    }

    // if(bgImage) {
    //     const userScreen = isWide ? "1180" : isMobile ? "320" : "768";
    //     const url = `url('../../../images/bg-images/${bgImage}_${userScreen}_${userRatio}.jpg')`
    //     // const url = `https://cloudinary.com/.jpg`;
    //     bg = { backgroundImage: url };
    // }

    return (
        <div style={handleBackground(bgImage)} className={bgImage ? `${css.container} ${css.imageStyles}` : `${css.container}`}>
        {/* <div className={bgImage && `${css.imageStyles}`} style={bg}> */}
            {children}
        </div>
    )
}


export default Background;