
const Reels = ({reel}) => {
    return (
        <div className="reel">
            <img src={reel.images[0].image} alt="reel cover" />
            <h5 className='bg-white'>{reel.headline}</h5>
        </div>
    )
}

export default Reels;