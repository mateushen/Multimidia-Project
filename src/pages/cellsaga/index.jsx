import '../../assets/style/style.css';
import Header from '../../components/header';
import Footer from '../../components/footer';

function Cell() {
    return (
        <>
            <Header />

            <main className="saga-container">
                <div className="saga-wallpaper">
                    <img src="" alt="Wallpaper" />
                </div>

                <div className="saga-history">
                    <h2>Saga do Cell</h2>
                    <p>
                        Cell é um Bio-androide criado a partir das células de diversos lutadores como dos Guerreiros Z, Freeza e Rei Cold.
                        Durante a sua participação na série, Cell evolui várias vezes, pois pretende se tornar um ser perfeito e para isso,
                        passa a absorver a energia vital de vários humanos, em especial a dos Androides 17 e 18.
                    </p>
                </div>
            </main>

            <Footer />
        </>
    )
}
export default Cell;