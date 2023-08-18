import '../../assets/style/style.css';
import Header from '../../components/header';
import Footer from '../../components/footer';

function Freeza() {
    return (
        <>
            <Header />

            <main className="saga-page">
                <div className="saga-container">

                    <div className="saga-history">
                        <h2>Saga de Freeza</h2>
                        <p>
                            A Saga Freeza é o segundo arco principal do anime Dragon Ball Z. A Saga Freeza é dividida em três sub-sagas: a Saga Namekusei, Saga Capitão Ginyu e a Saga Freeza. Este artigo se refere especificamente aos eventos da terceira sub-saga. Quase toda a Saga Freeza se passa no planeta Namekusei. O enredo principal é a tão aguardada luta entre Goku e Freeza, com Kuririn, Gohan, Piccolo, e Vegeta também participando.
                        </p>
                    </div>
                </div>

                <iframe width="853" height="480" src="https://www.youtube.com/embed/cSHkiBbvRfc" title="GOKU SE TRANSFORMA PELA PRIMEIRA VEZ EM SSJ - DRAGON BALL Z (4K ULTRA HD)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </main>

            <Footer />
        </>
    )
}
export default Freeza;