import '../../assets/style/style.css';
import Header from '../../components/header';
import Footer from '../../components/footer';

function MajinBoo() {
    return (
        <>
            <Header />

            <main className="saga-container">
                <div className="saga-wallpaper">
                    <img src="" alt="Wallpaper" />
                </div>

                <div className="saga-history">
                    <h2>Saga de Majin Boo</h2>
                    <p>
                        O enredo se inicia milhões de anos depois com o Torneio de Artes Marciais na Terra que atrai a atenção do filho do mago,
                        Babidi. Logo, Majin Boo é revivido com a energia roubada dos Guerreiros Z. Esta é uma saga com várias lutas eletrizantes,
                        reviravoltas desconcertantes e momentos muito chocantes.
                    </p>
                </div>



            </main>

            <Footer />
        </>
    )
}
export default MajinBoo;