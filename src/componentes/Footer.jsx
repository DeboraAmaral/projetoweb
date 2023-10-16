import {} from 'react';
import { Link } from 'react-router-dom';
import icone01 from '../assets/img/instagram.png'
import icone02 from '../assets/img/linkedin.png'
import icone03 from '../assets/img/github.png'
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <h1>Veggie Bliss</h1>
            <p>© 2023 - Todos os direitos reservados</p>
          </div>
          <div className="icones">
            <a href="https://www.instagram.com/levyv_/"><img src={icone01}></img></a>
            <a href="https://www.linkedin.com/in/l%C3%ADvianamba/"><img src={icone02}></img></a>
            <a href="https://github.com/DeboraAmaral/projetoweb"><img src={icone03}></img></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
