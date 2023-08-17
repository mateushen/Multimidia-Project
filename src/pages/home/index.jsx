import './home.css';
import Header from '../../components/header';
import Footer from '../../components/footer';
import Wallpaper from '../../assets/img/wallpaper.png'
import Saiyan from '../../assets/img/saiyansaga.png';
import Freeza from '../../assets/img/freezasaga.png';
import Androids from '../../assets/img/androidsaga.jpg';
import Cell from '../../assets/img/cellsaga.png';
import MajinBoo from '../../assets/img/majinboosaga.png';

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
                        <a href="/saiyajins">
                            <div className="widget">
                                <img src={Saiyan} width="150" />
                                <p className="tag">Saiyajins</p>
                            </div>
                        </a>

                        <a href="/freeza">
                            <div className="widget">
                                <img src={Freeza} width="150" />
                                <p className="tag">Freeza</p>
                            </div>
                        </a>

                        <a href="/androids">
                            <div className="widget">
                                <img src={Androids} width="150" />
                                <p className="tag">Andróides</p>
                            </div>
                        </a>

                        <a href="/cell">
                            <div className="widget">
                                <img src={Cell} width="150" />
                                <p className="tag">Cell</p>
                            </div>
                        </a>

                        <a href="/majinboo">
                            <div className="widget">
                                <img src={MajinBoo} width="150" />
                                <p className="tag">Majin Boo</p>
                            </div>
                        </a>
                    </div>
                </div>
            </main>

            <Footer />
        </>
    )
}
export default Home;