
import { filterNews } from '../components/filter';
import News from '../components/news';
import { newses } from '../newses';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';

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
                        <div className="top-news" style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${newses[0].images[0].image})` }}>
                            <div className="news-content">
                                <h2>{newses[0].headline}</h2>
                                <p className="font-9">{newses[0].title}</p>
                                <span className="left-border font-8">{newses[0].country}</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="row">
                            {
                                filterNews("news", 4).map((n, i) => <div className="col-md-6" key={i}>
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


                {/* ============ body content section ============ */}
                <div className="row body-content">
                    <div className="col-md-8">

                        {/* =========== news section in home page ========== */}
                        <div className="row mb-4">
                            <p className="section-title font-12">News</p>
                            {
                                filterNews("news", 3).map((item, i) => <div className='col-md-4 mb-3' key={i}>
                                    <News news={item} />
                                </div>)
                            }
                        </div>

                        {/* =========== sport section in home page ========== */}
                        <div className="row">
                            <p className="section-title font-12">Sports</p>
                            {
                                filterNews("news", 3).map((item, i) => <div className='col-md-4 mb-3' key={i}>
                                    <News news={item} />
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

            {/* =========== reels section in home page ============ */}
            <div className="reels-section mb-3">
                <div className="container-fluid home-content">
                    <div className="row">
                        <div className="reel-header mb-2">
                            <div className="heading">
                                <h1 className='white'>REEL</h1>
                                <p className="white">The most amazing video from news360</p>
                            </div>
                            <Link href='#' className='reel-btn white font-12'>Visit Reel <FaArrowRight /></Link>
                        </div>
                        {
                            filterNews("news", 3).map((item, i) => <div className='col-md-4' key={i}>
                                <div className="reel">
                                    <img src={item.images[0].image} alt="reel cover" />
                                    <h5 className='bg-white'>{item.headline}</h5>
                                </div>
                            </div>)
                        }
                    </div>
                </div>
            </div>


            {/* ========== asia news section in home page ============= */}
            <div className="asian-news">
                <div className="container-fluid home-content">
                    <div className="row">
                        <p className="section-title">Asia News</p>
                        {
                            filterNews("news", 4).map((item, i) => <div className='col-md-3' key={i}>
                                <News news={item} />
                            </div>)
                        }
                    </div>
                </div>
            </div>


            {/* ============ editors pick section in home page =========== */}
            <div className="container-fluid home-content editors-pick">
                <div className="row">
                    <p className="section-title">Editor's Picks</p>
                    <div className="col-md-8">
                        <div className="top-news mb-4" style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${newses[0].images[0].image})` }}>
                            <div className="news-content">
                                <h2>{newses[0].headline}</h2>
                                <p className="font-9">{newses[0].title}</p>
                                <span className="left-border font-8">{newses[0].country}</span>
                            </div>
                        </div>

                        <div className="row">
                            {
                                filterNews("news", 3).map((item, i) => <div className='col-md-4'>
                                    <News news={item} />
                                </div>)
                            }
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="latest-business-news">
                            <p className='news-title white bg-red m-0 p-2 text-uppercase fontw-600'>Latest Business News</p>
                                {
                                    filterNews('news', 4).map((item, i) => <div className='buisness-news w-100' key={i}>
                                    <h4 className='gray fontw-400'>{item.headline}</h4>
                                </div>)
                                }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;