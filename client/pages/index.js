

import { filterNews } from '../components/filter';
import { newses } from '../newses';
import { Reels, Reels2, Reels3 } from '../components/reels';
import { News, News2 } from '../components/news';
import Link from 'next/link';
import { FaArrowRight, FaCopyright, FaCamera,  } from 'react-icons/fa';

const Home = () => {

    const today = new Date();
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    const day = days[today.getDay()];
    const date = today.getDate();
    const month = months[today.getMonth()];

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
                        <p className='font-14 gray'>{day}, {date} {month}</p>
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
                                    <News2 news={n} />
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
                                    <News news={item} title={true} />
                                </div>)
                            }
                        </div>

                        {/* =========== sport section in home page ========== */}
                        <div className="row">
                            <p className="section-title font-12">Sports</p>
                            {
                                filterNews("sport", 3).map((item, i) => <div className='col-md-4 mb-3' key={i}>
                                    <News news={item} title={true} />
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
                            filterNews("reel", 3).map((item, i) => <div className='col-md-4' key={i}>
                                <Reels reel={item} />
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
                            filterNews("news", 4).map((item, i) => <div className='col-md-3 mb-2' key={i}>
                                <News news={item} title={true} />
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
                                filterNews("news", 3).map((item, i) => <div className='col-md-4 mb-2'>
                                    <News news={item} title={true} />
                                </div>)
                            }
                        </div>

                        <div className="row">
                            {
                                filterNews("sport", 3).map((item, i) => <div className='col-md-4'>
                                    <News news={item} title={true} />
                                </div>)
                            }
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="latest-business-news">
                            <p className='news-title white bg-red m-0 p-2 text-uppercase fontw-600'>Latest Business News</p>
                            {
                                filterNews('news', 4).map((item, i) => <div className='buisness-news w-100' key={i}>
                                    <h4 className='index gray font-14 fontw-500'>{i + 1}</h4>
                                    <h4 className='gray font-12 fontw-400'>{item.headline}</h4>
                                </div>)
                            }
                        </div>
                    </div>
                </div>
            </div>


            {/* =========== future planet section in home page =============== */}
            <div className="future-planet">
                <div className="container-fluid home-content">
                    <div className="row">
                        <div className="reel-header mb-2">
                            <div className="heading">
                                <h3 className='white'>Future Planet</h3>
                                <p className="white">Solutions for a sustainable world</p>
                            </div>
                            <Link href='#' className='reel-btn white font-12'>Visit Future Planet <FaArrowRight /></Link>
                        </div>
                        {
                            filterNews("reel", 3).map((item, i) => <div className='col-md-4' key={i}>
                                <Reels reel={item} />
                            </div>)
                        }
                    </div>
                </div>
            </div>


            {/* ================= technology of buisness and global trade =========== */}
            <div className="business-global">
                <div className="container-fluid home-content">
                    <div className="row">
                        <h4 className='text-uppercase'>Technology of Business</h4>
                        {
                            filterNews("news", 2).map((n, i) => <div className="col-md-6" key={i}>
                                <News2 news={n} />
                            </div>)
                        }
                    </div>
                </div>
            </div>


            {/* ========= featured video in home page  ========== */}
            <div className='featured-video'>
                <div className='container-fluid home-content'>
                    <h3 className='text-uppercase mb-3'>Featured video</h3>
                    <div className="featured-reels">
                        {
                            filterNews("reel", 1).map((item, i) => <div className='row p-2' key={i}>
                                <Reels2 reel={item} />
                            </div>)
                        }

                        <div className="row related-reels">
                            {
                                filterNews("reel", 3).map((item, i) => <div className="col-md-4" key={i}>
                                    <Reels3 reel={item} />
                                </div>)
                            }
                        </div>
                    </div>
                </div>
            </div>


            {/* ============= world in pictures in home page ================ */}
            <div className="world-pictures">
                <div className="container-fluid home-content">
                    <div className="row world-big-pictures">
                        <h4 className="section-title mb-3">World in pictures</h4>
                        {
                            filterNews('news', 2).map((item, i) => <div className="col-md-6 world-in-picture" key={i}>
                                <News2 news={item} />
                                <FaCamera className="camera-icon" />
                            </div>)
                        }
                    </div>

                    <div className="row world-small-pictures">
                        {
                            filterNews('news', 3).map((item, i) => <div className="col-md-4 world-in-picture" key={i}>
                                <News news={item} title={false} />
                                <FaCamera className="camera-icon" />
                            </div>)
                        }
                    </div>
                </div>
            </div>


            {/* ============ explore the news360 in home page ========== */}
            <div className="explore-news360">
                <div className="container-fluid home-content">
                    <h4 className='white mb-3'>Explore the News360 </h4>
                    <div className="row bottom-navbar">
                        <div className="col-md-4 bottom-nav-link">
                            <Link href='/'>Home</Link>
                            <Link href='/news'>News</Link>
                        </div>
                        <div className="col-md-4 bottom-nav-link">
                            <Link href='/sports'>Sports</Link>
                            <Link href='/travel'>Travel</Link>
                        </div>
                        <div className="col-md-4 bottom-nav-link">
                            <Link href='/culture'>Culture</Link>
                            <Link href='/tv'>TV</Link>
                        </div>
                    </div>

                    <div className='terms-help mt-1 mb-3'>
                        <Link href='#'>Terms of use</Link>
                        <Link href='#'>About New360</Link>
                        <Link href='#'>Privacy Policy</Link>
                        <Link href='#'>Cookies</Link>
                        <Link href='#'>Accessability Help</Link>
                        <Link href='#'>Parental Guidence</Link>
                        <Link href='#'>Contact the News360</Link>
                        <Link href='#'>Advertise with us</Link>
                    </div>
                    <p className='white font-9'><b>Copyright <FaCopyright /> 2023 News360 .</b> The News360 is not responsible for the content of external sites.</p>
                </div>
            </div>
        </div>
    );
}

export default Home;