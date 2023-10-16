import { Component } from 'react';
import { Link } from 'react-router-dom';
import Nav from "../componentes/Nav"
import imagem01 from '../assets/img/imagem01.jpg';
import imagem02 from '../assets/img/imagem02.webp';
import imagem03 from '../assets/img/imagem03.jpg';
import imagem04 from '../assets/img/imagem04.jpg';

import img01 from '../assets/img/img01.webp';
import img02 from '../assets/img/img02.jpg';
import img03 from '../assets/img/img03.jpg';
import img04 from '../assets/img/img04.jpg';

import tostex from '../assets/img/tostex.webp'
import bowl from '../assets/img/bowl.webp'
import torrada from '../assets/img/torrada.webp'
import pao from '../assets/img/pao.webp'
import granola from '../assets/img/granola.webp'
import salada from '../assets/img/salada.webp'

import "./Home.css"
import Footer from "../componentes/Footer"

const images = [imagem01, imagem02, imagem03, imagem04];
const productData = [
  {
    id: 1,
    image: [tostex], 
    description: 'Sanduíche de pão integral caseiro tostado, recheado com tomate, pasta de manjericão, mortadela vegetal e maionese vegana.',
    name: 'Tostex',
    price: 'R$ 22,00',
  },
  {
    id: 2,
    image: [bowl], 
    description: 'Bowl de tofu mexido com cogumelos e legumes, temperado com cúrcuma e sal negro.',
    name: 'Bowl de Tofu Scramble',
    price: 'R$ 23,00',
  },
  {
    id: 3,
    image: [torrada], 
    description: 'Fatias do nosso pão integral caseiro torrado, servidas com geleia caseira de frutas e patê caseiro.',
    name: 'Torrada Caseira',
    price: 'R$ 17,50',
  },
  {
    id: 4,
    image: [pao], 
    description: 'Porção de pão de polvilho caseiro (4 unidades).',
    name: 'Pão de Polvilho',
    price: 'R$ 12,90',
  },
  {
    id: 5,
    image: [granola], 
    description: 'Granola caseira de aveia, passas, castanhas-do-pará, coco ralado, gergelim e linhaça adoçada com melado, servida com frutas frescas e leite vegetal.',
    name: 'Granola',
    price: 'R$ 18,50',
  },
  {
    id: 6,
    image: [salada], 
    description: 'Frutas da época.',
    name: 'Salada de Frutas',
    price: 'R$ 13,50',
  },
];


class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentImageIndex: 0,
    };
  }

  componentDidMount() {
    this.startSlideShow();
  }

  componentWillUnmount() {
    clearInterval(this.slideInterval);
  }

  startSlideShow = () => {
    this.slideInterval = setInterval(() => {
      this.nextSlide();
    }, 8000); 
  };

  nextSlide = () => {
    this.setState((prevState) => ({
      currentImageIndex: (prevState.currentImageIndex + 1) % images.length,
    }));
  };

  render() {
    const { currentImageIndex } = this.state;

    return (
        <>
        <Nav />  
        <div className="slide-show-container">
            <div className="slide-show">
                <img
                    src={images[currentImageIndex]}
                    alt={`Slide ${currentImageIndex + 1}`}
                />
                <button className="prev" onClick={this.prevSlide}>
                    &#10094;
                </button>
                <button className="next" onClick={this.nextSlide}>
                    &#10095;
                </button>
            </div>
        </div>
        <h1>Bem vindo(a) ao Veggie Bliss</h1>
        <p>Uma jornada de sabor e bem-estar</p>
        <div className='conteudo'>
            <p>Nascido de um amor profundo pela culinária vegana e pelo bem-estar de nossos clientes, o Veggie Bliss é mais do que apenas um restaurante. É um santuário para os amantes da comida saudável e saborosa, um lugar onde cada prato é uma obra-prima da alimentação baseada em plantas. <br></br><br></br>
                Fundado por um grupo de entusiastas veganos em 2010, o Veggie Bliss começou como um pequeno e aconchegante café, mas o desejo de compartilhar a alegria de uma alimentação saudável cresceu, assim como nossa família Veggie. Hoje, temos 15 unidades espalhadas pelo país, cada uma delas mantendo o compromisso inabalável com ingredientes de primeira qualidade.<br></br> <br></br>
                Nossa filosofia é simples: acreditamos que uma alimentação vegana pode ser uma explosão de sabor. No Veggie Bliss, combinamos tradição com inovação, criando pratos que surpreendem até os paladares mais céticos. Nossos chefs são verdadeiros artistas culinários, transformando ingredientes naturais em obras-primas que deixam os clientes pedindo por mais.<br></br> <br></br>
                No Veggie Bliss, não se trata apenas de servir refeições. É sobre nutrir o corpo e a alma com cada garfada, e é por isso que, a cada dia, continuamos a escrever nossa história de sucesso na cozinha vegana. Venha nos visitar e descubra a alegria de uma alimentação saudável no Veggie Bliss - onde a tradição se encontra com a inovação, e o sabor encontra a paz.</p>
            <div className='fotos'>
                <img className='img01' src={img01} alt="" />
                <img className='img02' src={img02} alt="" />
                <img className='img03' src={img03} alt="" />
                <img className='img04' src={img04} alt="" />
            </div>
            <div className="slide-show-text">
                <h1>Uma Experiência Vegana de Puro Sabor</h1>
                <Link to="/login"><button>FAÇA SEU PEDIDO</button></Link>
            </div>
        
        </div>
        <div className="produtos-container">
          <h1>Nossos Produtos</h1>
          <div className="product-container">
            {productData.map((product) => (
              <div className="product-card" key={product.id}>
                <img src={product.image} alt={`Imagem ${product.id}`} />
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <p className="price">{product.price}</p>
              </div>
            ))}
          </div>
        </div>
        <Footer /> 
        </>  
    );
  }
}

export default Home