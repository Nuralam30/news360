
import 'bootstrap/dist/css/bootstrap.min.css';
import TopNav from '../components/TopNav';

const MyApp = ({ Component, pageProps}) => {
    return (
        <>
            <TopNav />
            <Component {...pageProps} />
        </>
    );
}

export default MyApp;