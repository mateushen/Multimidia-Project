import '../../assets/style/style.css';
import Header from '../../components/header';
import Footer from '../../components/footer';

function Saiyan() {
    return (
        <>
            <Header />

            <main className="saga-container">
                <div className="saga-wallpaper">
                    <img src="" alt="Wallpaper" />
                </div>

                <div className="saga-history">
                    <h2>Saga dos Saiyajins</h2>
                    <p>
                        Seu enredo principal ocorre com a chegada de três alienígenas humanoides, conhecidos como "Saiyajins", à Terra,
                        procurando por Goku primeiro, e as Esferas do Dragão depois. O mais poderoso destes Saiyajins é Vegeta.
                        A saga cobre a chegada do primeiro destes Saiyajins, Raditz, e sua luta contra seu irmão Goku e Piccolo.
                        Então cobre o treinamento subsequente e preparação para a chegada de dois outros Saiyajins, Nappa e Vegeta.
                        Finalmente, ela cobre a luta entre os Guerreiros Z e os dois poderosos Saiyajins, culminando na batalha climática entre Goku e Vegeta.
                    </p>
                </div>
            </main>

            <Footer />
        </>
    )
}
export default Saiyan;