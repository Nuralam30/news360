
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