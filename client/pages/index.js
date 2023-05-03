
import { news } from './../news';

const Home = () => {
    return (
        <div className="homepage">
            <div className="adsense">
                <h6>here places the google adsense 1</h6>
            </div>

            <div className="container-fluid home-content">
                {/* ========= banner section here ========= */}
                <div className="row banner-content">
                    <div className="banner-heading">
                        <h4>Welcome to news360.com</h4>
                        <p className='font-14 gray'>Wednesday, 3 May</p>
                    </div>
                    <div className="col-md-6 mb-2">
                        <div className="top-news" style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${news[0].images[0].image})` }}>
                            <div className="news-content">
                                <h2>{news[0].headline}</h2>
                                <p className="font-9">{news[0].title}</p>
                                <span className="left-border font-8">{news[0].country}</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="row">
                            {
                                news.map(n => <div className="col-md-6">
                                    <div className="update-news" style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${n.images[0].image})` }}>
                                        <div className="news-content">
                                            <h5>{n.headline}</h5>
                                            <span className="left-border font-8">{n.country}</span>
                                        </div>
                                    </div>
                                </div>)
                            }
                        </div>
                    </div>
                </div>


                <div className="row body-content">
                    <p className="left-border mb-3 ms-3">News</p>
                    <div className="col-md-8">
                        <div className="row">
                            {
                                news.map(ne => <div className='col-md-4 mb-3'>
                                    <div className="newses">
                                        <img className='mb-2' src={ne.images[0].image} alt="new headline picture" />
                                        <h5>{ne.headline}</h5>
                                        <p className='font-9 gray'>{ne.title}</p>
                                        <span className='left-border font-8'>{ne.country}</span>
                                    </div>
                                </div>)
                            }
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="adsense h-100">
                            this is adsense 2
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Home;