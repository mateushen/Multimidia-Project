import '../home/home.css';
import Header from '../../components/header';
import Footer from '../../components/footer';
import { Sagas } from '../../assets/sagas';

function DragonBallZ() {

    return (
        <>
        <Header/>
            <h2 className="title-section">Sagas</h2>
            <div className="content-container">
                {Sagas.map(item => (
                    <a href={item.url} key={item.id}>
                        <div className="widget">
                            <img src={item.img} width="130" />
                            <p className="tag">{item.name}</p>
                        </div>
                    </a>
                ))}
            </div>
            <Footer/>
        </>
    )
}
export default DragonBallZ;