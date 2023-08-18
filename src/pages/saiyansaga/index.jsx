import '../../assets/style/style.css';
import Header from '../../components/header';
import Footer from '../../components/footer';

function Saiyan() {
    return (
        <>
            <Header />

            <main className="saga-page">
                <div className="saga-container">

                    <div className="saga-history">
                        <h2 className="title-saga">Saga dos Saiyajins</h2>
                        <p>
                            Seu enredo principal ocorre com a chegada de três alienígenas humanoides, conhecidos como "Saiyajins", à Terra, procurando por Goku primeiro, e as Esferas do Dragão depois. O mais poderoso destes Saiyajins é Vegeta. A saga cobre a chegada do primeiro destes Saiyajins, Raditz, e sua luta contra seu irmão Goku e Piccolo. Então cobre o treinamento subsequente e preparação para a chegada de dois outros Saiyajins, Nappa e Vegeta. Finalmente, ela cobre a luta entre os Guerreiros Z e os dois poderosos Saiyajins, culminando na batalha climática entre Goku e Vegeta.
                        </p>
                    </div>

                    <iframe width="848" height="480" src="https://www.youtube.com/embed/s8ByBot323U" title="Garlick Ho vs Kamehameha (Vegeta vs Goku) DUBLADO PT BR" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
            </main>

            <Footer />
        </>
    )
}
export default Saiyan;