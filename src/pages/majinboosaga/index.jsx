import '../../assets/style/style.css';
import Header from '../../components/header';
import Footer from '../../components/footer';

function MajinBoo() {
    return (
        <>
            <Header />

            <main className="saga-page">
                <div className="saga-container">

                    <div className="saga-history">
                        <h2 className="title-saga">Saga de Majin Boo</h2>
                        <p>
                            O enredo se inicia milhões de anos depois com o Torneio de Artes Marciais na Terra que atrai a atenção do filho do mago, Babidi. Logo, Majin Boo é revivido com a energia roubada dos Guerreiros Z. Esta é uma saga com várias lutas eletrizantes, reviravoltas desconcertantes e momentos muito chocantes.
                        </p>
                    </div>

                    <iframe width="853" height="480" src="https://www.youtube.com/embed/SC4WxXtOQZY" title="Goku destrói Majin Boo | Dragon Ball Z (Dublado)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
            </main>

            <Footer />
        </>
    )
}
export default MajinBoo;