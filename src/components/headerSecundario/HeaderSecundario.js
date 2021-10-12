import "./headerSecundario.css";

import logoAlugaki from '../../img/imagens/alugaKi-removebg-preview.png'
import iconeUsuario from '../../img/icones/btn_login.png'
import lupa from '../../img/icones/lupa.png'

function headerSecundario() {
    return (
        <header>
            <div className="container">
                <div className="logo-e-barra">
                    <div className="logo">
                        <a href="index.html"><img src={logoAlugaki} alt="Logo alugaki" /></a>
                    </div>
                    <div className="barra">
                        <form>
                            <input type="text" id="barra" name="barra" />
                            <button className="lupa"><img src={lupa} alt="Icone de lupa" /></button>
                        </form>
                    </div>
                </div>
                <div className="botoes">
                    <a href="cadastro-produto.html"><button>Anunciar</button></a>
                    <div className="dropdown" data-dropdown>
                        <button className="login" data-dropdown-button> <img src={iconeUsuario} alt="Botao de Menu" />
                        </button>
                        <div className="dropdown-menu">
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
    )
}

export default headerSecundario;