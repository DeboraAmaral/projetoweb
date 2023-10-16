import { useState } from 'react';
import './Nav.css'
import { Link } from 'react-router-dom';
import Logo from '../assets/img/logo.png';

function Nav() {
  const [currentPage, setCurrentPage] = useState('home');

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <>
    <div>
      <header>
        <nav>
            <ul className="menu">
              <Link to="/">
                <img src={Logo} alt="Logo da Empresa" className="logo" />
              </Link>
              <Link to="/"><li
                className={currentPage === 'home' ? 'active' : ''}
                onClick={() => handlePageChange('home')}
              >
                Home
              </li></Link>
              <Link to="/produtos"><li
                className={currentPage === 'produtos' ? 'active' : ''}
                onClick={() => handlePageChange('produtos')}
              >
                Produtos
              </li></Link>
              <Link to="/sobre"><li
                className={currentPage === 'sobre' ? 'active' : ''}
                onClick={() => handlePageChange('sobre')}
              >
                Sobre
              </li></Link>
              <Link to="/login"><li
                className={currentPage === 'login' ? 'active' : ''}
                onClick={() => handlePageChange('login')}
              >
                Login
              </li></Link>
            </ul>
        </nav>
      </header>
    </div>
    </>
  );
}

export default Nav;