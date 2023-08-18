import './home.css';
import Modal from 'react-modal';
import { useState } from 'react';
import Header from '../../components/header';
import Footer from '../../components/footer';
import Wallpaper from '../../assets/img/wallpaper.png'
import { Characters } from '../../assets/characters';
import { Sagas } from '../../assets/sagas';

function Home() {

    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [selectedCharacter, setSelectedCharacter] = useState(null);

    const openModal = (character) => {
        setSelectedCharacter(character);
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setSelectedCharacter(null);
        setModalIsOpen(false);
    };

    return (
        <>
            <Header />

            <main className="home-container">
                <div className="home-wallpaper">
                    <img src={Wallpaper} alt="Wallpaper" />
                </div>

                <div className="container-posts">
                    <h2 className="title-posts">Sagas</h2>
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
                </div>

                <div className="container-posts">
                    <h2 className="title-posts">Personagens</h2>
                    <div className="content-container">
                        {Characters.map(item => (
                            <div className="widget" key={item.id} onClick={() => openModal(item)}>
                                <img src={item.img} width="50" />
                                <p className="tag">{item.name}</p>
                            </div>
                        ))}
                    </div>

                    <Modal
                        className="character-modal"
                        isOpen={modalIsOpen}
                        onRequestClose={closeModal}
                    >
                        {selectedCharacter && (
                            <div className="character-info">
                                <h2 className="character-name">{selectedCharacter.name}</h2>
                                <p>Raça: <spam>{selectedCharacter.race}</spam></p>
                                <p>Habilidades: <spam>{selectedCharacter.abilities}</spam></p>
                                <button className="modal-close" onClick={closeModal}>Fechar</button>
                            </div>
                        )}
                    </Modal>

                </div>
            </main>

            <Footer />
        </>
    )
}
export default Home;