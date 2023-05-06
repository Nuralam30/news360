import { useState } from "react"
import { FaPlay } from 'react-icons/fa';

export const Reels2 = ({reel}) => {
    const [ headlineShow, setHeadlineShow ] = useState(true);
    
    return (
        <div className="reel2">
            <video 
            src={reel.video}
            controls={headlineShow ? false : true}
            autoPlay={headlineShow ? false : true}
            ></video>
            <div className='play-icon' onClick={() => setHeadlineShow(!headlineShow)}>
                <FaPlay className='icon font-16 white' />
            </div>
            {
                headlineShow ? <div className='video-heading'>
                <h2 className='white'>{reel.headline}</h2>
                <p className='left-border white'>{reel.type}</p>
            </div>
            : ""
            }
        </div>
    )
}