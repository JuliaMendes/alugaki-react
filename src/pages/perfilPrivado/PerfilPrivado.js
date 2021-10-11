import './perfilPrivado.css';

import Header from "../../components/header/Header"
import Footer from "../../components/footer/Footer"

import perfilBlank from "../../img/bolinha_perfil.png"
import linha from "../../img/Line-azul.png"

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

        <section class="titulo">
            <h1>Minha Conta</h1>
        </section>

        <div class="container-flex">

            <section class="barra-lateral">
                    <div class="foto">
                        <img src={perfilBlank} alt="Foto de Perfil" />
                        <form>
                            <input type="file" name="fotos" id="fotos" accept="image/*, .png .jpg" hidden />
                            <div class="botao"><button>Alterar</button></div>
                        </form>
                    </div>
                    <div class="menu">
                        <div class="titulo-menu">
                            <h3>Minha Conta</h3>
                            <img src={linha} />
                        </div>

                        <ul>
                            <li>Dados Pessoais</li>
                            <li>Login e Segurança</li>
                            <li>Privacidade</li>
                            <li>Excluir conta</li>
                        </ul>
                    </div>
            </section>

            <section class="conteudo">
                <form id="form_editar">
                    <div class="dados">
                        <div class="botao">
                            <h2>Dados Pessoais</h2>
                            <button>Editar</button>
                        </div>

                        <label for="nome">Nome Completo</label>
                        <input type="text" id="nome" name="nome" placeholder="Nome Sobrenome" readonly />
                        <ul id="erros-nome"></ul>
            
                        <label for="telefone">Telefone</label>
                        <input type="tel" id="telefone" name="telefone" placeholder="(xx) 9xxxx-xxxx" readonly />
                        <ul id="erros-telefone"></ul>
                    </div>

                    <div class="login">
                        <h2>Login e Segurança</h2>

                        <label for="email">E-mail</label><br />
                        <input type="email" id="email" name="email" placeholder="meuemail@email.com" readonly />
                        <ul id="erros-email"></ul>

                        <label for="pass">Senha</label><br />
                        <input type="password" id="pass" name="password" placeholder="********" readonly />
                        <ul id="erros-senha"></ul>
                    </div>

                    <div class="privacidade">
                        <h2>Privacidade</h2>
                        <div>
                            <input type="checkbox" id="priv" name="priv" disabled onclick="validaPrivacidade(this)" />
                            <p>Aceito receber novidades da alugaKi</p>
                        </div>
                    </div>

                </form>

                <div class="excluir">
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
