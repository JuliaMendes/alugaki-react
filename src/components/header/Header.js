import { useState } from 'react';
import './header.css';

import logoAlugaki from '../../img/imagens/alugaKi-removebg-preview.png'
import iconeUsuario from '../../img/icones/btn_login.png'


function Header() {
        const [menuAberto, setMenuAberto] = useState(false)

    return (
        <body className="headerPaginaInicial">
            <header className="headerInicial">
                <div className="container">
                    <div className="logo">
                        <a href="index.html"><img src={logoAlugaki} alt="Logo alugaki" /></a>
                    </div>
                    <div className="botoes">
                        <a href="cadastro-produto.html"><button>Anunciar</button></a>
                        <div className="dropdown">
                            <button onClick={(e) => { setMenuAberto(!menuAberto) }}><img src={iconeUsuario}
                                alt="Botao de Menu" /></button>
                            <div className={`dropdown-menu ${menuAberto ? '' : 'dropdown-menu-escondido'}`}>
                                <ul>
                                    <li>
                                        <a href="cadastro-usuario.html">
                                            Cadastre-se
                                        </a>
                                    </li>
                                    <li>
                                        <a href="login.html">
                                            Login
                                        </a>
                                    </li>
                                    <li>
                                        <a href="perfil-privado.html">
                                            Meu perfil
                                        </a>
                                    </li>
                                    <li>
                                        <a href="cadastro-produto.html">
                                            Anunciar
                                        </a>
                                    </li>

                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

        </body>

    )

}





export default Header;