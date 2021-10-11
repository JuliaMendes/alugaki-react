import './perfilPrivado.css';

import Header from "../../components/header/Header"
import Footer from "../../components/footer/Footer"

import perfilBlank from "../../img/icones/bolinha_perfil.png"
import linhaAzul from "../../img/icones/Line-azul.png"

function PaginaPerfilPrivado() {
    return (
        <div>
            <Header />
            <Corpo/>
            <Footer />
        </div>
    )
}

function Corpo(){
    return(
        <body>

        <section className="titulo">
            <h1>Minha Conta</h1>
        </section>

        <div className="container-flex">

            <section className="barra-lateral">
                    <div className="foto">
                        <img src={perfilBlank} alt="Foto de Perfil" />
                        <form>
                            <input type="file" name="fotos" id="fotos" accept="image/*, .png .jpg" hidden />
                            <div className="botao"><button>Alterar</button></div>
                        </form>
                    </div>
                    <div className="menu">
                        <div className="titulo-menu">
                            <h3>Minha Conta</h3>
                            <img src={linhaAzul} />
                        </div>

                        <ul>
                            <li>Dados Pessoais</li>
                            <li>Login e Segurança</li>
                            <li>Privacidade</li>
                            <li>Excluir conta</li>
                        </ul>
                    </div>
            </section>

            <section className="conteudo">
                <form id="form_editar">
                    <div className="dados">
                        <div className="botao">
                            <h2>Dados Pessoais</h2>
                            <button>Editar</button>
                        </div>

                        <label htmlFor="nome">Nome Completo</label>
                        <input type="text" id="nome" name="nome" placeholder="Nome Sobrenome" readonly />
                        <ul id="erros-nome"></ul>
            
                        <label htmlFor="telefone">Telefone</label>
                        <input type="tel" id="telefone" name="telefone" placeholder="(xx) 9xxxx-xxxx" readonly />
                        <ul id="erros-telefone"></ul>
                    </div>

                    <div className="login">
                        <h2>Login e Segurança</h2>

                        <label htmlFor="email">E-mail</label><br />
                        <input type="email" id="email" name="email" placeholder="meuemail@email.com" readonly />
                        <ul id="erros-email"></ul>

                        <label htmlFor="pass">Senha</label><br />
                        <input type="password" id="pass" name="password" placeholder="********" readonly />
                        <ul id="erros-senha"></ul>
                    </div>

                    <div className="privacidade">
                        <h2>Privacidade</h2>
                        <div>
                            <input type="checkbox" id="priv" name="priv" disabled onclick="validaPrivacidade(this)" />
                            <p>Aceito receber novidades da alugaKi</p>
                        </div>
                    </div>

                </form>

                <div className="excluir">
                    <h2>Excluir conta</h2>
                    <div>
                        <p>Todos os dados serão excluídos definitivamente.<br />
                        Não será possível recuperar sua conta.</p>
                        <button>Excluir</button>
                    </div>
                </div>
            </section> 

        </div>

        </body>
    )
}

export default PaginaPerfilPrivado;
