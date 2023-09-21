import './home.css';
import Modal from 'react-modal';
import { useState } from 'react';
import Header from '../../components/header';
import Footer from '../../components/footer';
import Wallpaper from '../../assets/img/wallpaper.png'
import { Characters } from '../../assets/characters';

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

                    <h2 className="title-section">Personagens</h2>
                    <div className="content-container">
                        {Characters.map(item => (
                            <div className="widget" key={item.id} onClick={() => openModal(item)}>
                                <img src={item.img} width="60" />
                            </div>
                        ))}
                    </div>

                    <Modal
                        className="modal-content"
                        isOpen={modalIsOpen}
                        ariaHideApp={false}
                        onRequestClose={closeModal}
                    >
                        {selectedCharacter && (
                            <div className="character-info">
                                <h2 className="character-name">{selectedCharacter.name}</h2>
                                <h4>Raça: <span className="description">{selectedCharacter.race}</span></h4>
                                <h4>Habilidades: <span className="description">{selectedCharacter.abilities}</span></h4>
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