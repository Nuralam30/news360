
const Reels = ({reel}) => {
    return (
        <div className="reel">
            <video controls>
                <source src={reel.video} type="video/mp4" />
            </video>
            <h5 className='bg-white'>{reel.headline}</h5>
        </div>
    )
}

export default Reels;