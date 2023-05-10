import { useRef } from "react";
import { useState } from "react"
import { FaPause, FaPlay } from 'react-icons/fa';

export const Reels = ({ reel }) => {
    return (
        <div className="reel">
            <video
                src={reel.video}
                controls>
            </video>
            <h5 className='bg-white'>{reel.headline}</h5>
        </div>
    )
}


export const Reels2 = ({ reel }) => {
    const [headlineShow, setHeadlineShow] = useState(true);
    const videoRef = useRef(null);

    const playVideo = () => {
        setHeadlineShow(false);
        videoRef.current.play();
    }
    const pauseVideo = () => {
        setHeadlineShow(true);
        videoRef.current.pause();
    }

    return (
        <div className="reel2">
            <video 
                ref={videoRef}
                src={reel.video}
                controls={headlineShow ? false : true}
            ></video>
            <div className='play-icon'>
                {
                    headlineShow ? 
                    (<FaPlay className='icon font-16 white' onClick={playVideo} />) : 
                    (<FaPause className='icon font-16 white' onClick={pauseVideo} />)
                }
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

export const Reels3 = ({ reel }) => {
    return (
        <div className="row">
            <div className="col-md-6">
                <div className="video">
                    <video
                        src={reel.video}
                    ></video>
                </div>
            </div>
            <div className="col-md-6">
                <div className="video-title">
                    <h6 className="white font-12">{reel.headline}</h6>
                    <p className="section-title ms-0 font-9 gray mt-4">{reel.type}</p>
                </div>
            </div>
        </div>
    )
}