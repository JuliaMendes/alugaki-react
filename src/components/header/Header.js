import { useState } from 'react';
import { Link } from 'react-router-dom';
import './header.css';

import logoAlugaki from '../../img/imagens/alugaKi-removebg-preview.png'
import iconeUsuario from '../../img/icones/btn_login.png'


function Header() {
        const [menuAberto, setMenuAberto] = useState(false)

    return (
        <div className="headerPaginaInicial">
            <header className="headerInicial">
                <div className="container">
                    <div className="logo">
                        <a href="index.html"><img src={logoAlugaki} alt="Logo alugaki" /></a>
                    </div>
                    <div className="botoes">
                        <Link to="/cadastro-produtos"><button>Anunciar</button></Link>
                        <div className="dropdown">
                            <button onClick={(e) => { setMenuAberto(!menuAberto) }}><img src={iconeUsuario}
                                alt="Botao de Menu" /></button>
                            <div className={`dropdown-menu ${menuAberto ? '' : 'dropdown-menu-escondido'}`}>
                                <ul>
                                    <li>
                                        <Link to="/cadastro-usuario">
                                            Cadastre-se
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/login">
                                            Login
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/perfil-privado">
                                            Meu perfil
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/cadastro-produtos">
                                            Anunciar
                                        </Link>
                                    </li>

                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

        </div>

    )

}


export default Header;