
export const News = ({news}) => {
    return (
        <div className="news">
            <img className='mb-2' src={news.images[0].image} alt="new headline picture" />
            <h5>{news.headline}</h5>
            <p className='font-9 gray'>{news.title}</p>
            <span className='left-border font-8'>{news.country ? news.country : news.type}</span>
        </div>
    )
}


export const News2 = ({ item }) => {
    return (
        <div className="news">
            <div className="update-news" style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${item.images[0].image})` }}>
                <div className="news-content">
                    <h5>{item.headline}</h5>
                    <span className="left-border font-8">{item.country}</span>
                </div>
            </div>
        </div>
    )
}

