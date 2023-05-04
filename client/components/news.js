
const News = ({news}) => {
    return (
        <div className="news">
            <img className='mb-2' src={news.images[0].image} alt="new headline picture" />
            <h5>{news.headline}</h5>
            <p className='font-9 gray'>{news.title}</p>
            <span className='left-border font-8'>{news.country ? news.country : news.type}</span>
        </div>
    )
}

export default News;