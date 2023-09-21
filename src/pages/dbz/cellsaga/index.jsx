import '../../../assets/style/style.css';
import Header from '../../../components/header';
import Footer from '../../../components/footer';

function Cell() {
    return (
        <>
            <Header />

            <main className="saga-page">
                <div className="saga-container">
                    <div className="saga-history">
                        <h2 className="title-saga">Saga do Cell</h2>
                        <p>
                            Cell é um Bio-androide criado a partir das células de diversos lutadores como dos Guerreiros Z, Freeza e Rei Cold. Durante a sua participação na série, Cell evolui várias vezes, pois pretende se tornar um ser perfeito e para isso, passa a absorver a energia vital de vários humanos, em especial a dos Androides 17 e 18.
                        </p>
                    </div>
                </div>

                <iframe width="853" height="480" src="https://www.youtube.com/embed/cy-RMwmgjyg" title="GOHAN SE TRANSFORMA EM SUPER SAYAJIN 2 - DUBLADO (4K 60fps)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </main>

            <Footer />
        </>
    )
}
export default Cell;