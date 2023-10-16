import { Component } from 'react';
import CryptoJS from 'crypto-js';
import Nav from "../componentes/Nav"
import Footer from "../componentes/Footer"
import Pedido from "./Pedido"
import './Login.css'

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      isAuthenticated: false,
    };
  }

  handleLogin = () => {
    const { username, password } = this.state;

    if (username === 'admin' && password === '1234') {
      const user = { username, password };
      const encryptedUser = CryptoJS.AES.encrypt(JSON.stringify(user), 'chave-de-criptografia').toString();
      sessionStorage.setItem('user', encryptedUser);
      this.setState({ isAuthenticated: true });
    } else {
      alert('Credenciais inválidas');
    }
  };

  handleLogout = () => {
    sessionStorage.removeItem('user');
    this.setState({ isAuthenticated: false });
  };

  render() {
    const { isAuthenticated } = this.state;

    return (
        <>
            <Nav />
            <div>
                {isAuthenticated ? (
                <div>
                    <Pedido />
                    <button className="botao02" onClick={this.handleLogout}>Logout</button>
                </div>
                ) : (
                <div>
                    <h1>Login</h1>
                    <input
                    type="text"
                    placeholder="Usuário"
                    onChange={(e) => this.setState({ username: e.target.value })}
                    />
                    <input
                    type="password"
                    placeholder="Senha"
                    onChange={(e) => this.setState({ password: e.target.value })}
                    />
                    <button className="botao" onClick={this.handleLogin}>ENTRAR</button>
                </div>
                )}
            </div>
            <Footer />
      </>
    );
  }
}

export default Login
