import {} from 'react';
import './Sobre.css'; 
import Nav from "../componentes/Nav"
import Footer from "../componentes/Footer"
import imagem01 from "../assets/img/debora.jpg"
import imagem02 from "../assets/img/levy.png"
import imagem03 from "../assets/img/livia.jpg"
import imagem04 from "../assets/img/mateus.jpg"
import imagem05 from "../assets/img/sarah.png"

const Sobre = () => {
  const cardData = [
    {
      id: 1,
      image: [imagem01], 
      description: 'Debora da Silva Amaral',
    },
    {
      id: 2,
      image: [imagem02],
      description: 'Levy Nascimento Junior',
    },
    {
      id: 3,
      image: [imagem03], 
      description: 'Lívia Namba Seraphim',
    },
    {
      id: 4,
      image: [imagem04], 
      description: 'Mateus Iago Sousa Conceição',
    },
    {
      id: 5,
      image: [imagem05],
      description: 'Sarah Ribeiro da Silva',
    },
  ];

  return (
    <>
        <Nav />
        <div className="sobre-container">
        <h1>Sobre Nós</h1>
        <div className="card-container">
            {cardData.map((card) => (
            <div className="card" key={card.id}>
                <img src={card.image} alt={`Imagem ${card.id}`} />
                <p>{card.description}</p>
            </div>
            ))}
        </div>
        </div>
        <Footer />
    </>
  );
};

export default Sobre
