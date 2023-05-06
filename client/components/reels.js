
const Reels = ({reel}) => {
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

export default Reels;