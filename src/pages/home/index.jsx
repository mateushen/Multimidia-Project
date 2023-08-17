import './home.css';
import Header from '../../components/header';
import Footer from '../../components/footer';
import Wallpaper from '../../assets/img/wallpaper.png'

function Home() {
    return (
        <>
            <Header />

            <main className="home-container">
                <div className="home-wallpaper">
                    <img src={Wallpaper} alt="Wallpaper" />
                </div>
                <div className="container-sagas">
                    <h2 className="title-sagas">Sagas</h2>
                    <div className="view-sagas">

                    </div>
                </div>
            </main>

            <Footer />
        </>
    )
}
export default Home;