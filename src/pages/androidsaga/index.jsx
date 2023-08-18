import '../../assets/style/style.css';
import Header from '../../components/header';
import Footer from '../../components/footer';

function Androids() {
    return (
        <>
            <Header />

            <main className="saga-page">
                <div className="saga-container">
                    <div className="saga-history">
                        <h2>Saga dos Andróides</h2>
                        <p>
                            A Saga Androides é a sétima saga na série Dragon Ball Z. Na convenção para o lançamento do anime, o arco Androides/Cell foi quebrado em cinco sagas: a Saga Trunks, a Saga Androides, a Saga Cell Imperfeito, a Saga Cell Perfeito, e a Saga Jogos de Cell. Este artigo se refere especificamente aos eventos da segunda saga. Ela mostra Androides 16-19 e seu criador Dr. Gero (também conhecido como Androide 20) que causam destruição no mundo.
                        </p>
                    </div>

                    <iframe width="853" height="480" src="https://www.youtube.com/embed/YjqVV3t6R-s" title="Androides 17 e 18 matam o Dr Gero sem piedade - Dragon Ball Z dublado" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
            </main>

            <Footer />
        </>
    )
}
export default Androids;