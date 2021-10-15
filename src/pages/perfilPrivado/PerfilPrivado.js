//imports
import { useState } from 'react';

import './perfilPrivado.css';

import HeaderSecundario from "../../components/headerSecundario/HeaderSecundario"
import Footer from "../../components/footer/Footer"

import perfilBlank from "../../img/icones/bolinha_perfil.png"
import linhaAzul from "../../img/icones/Line-azul.png"

function PaginaPerfilPrivado() {
    return (
        <div>
            <HeaderSecundario />
            <Corpo/>
            <Footer />
        </div>
    )
}

function Corpo(){

    const [botaoMain, setBotaoMain] = useState("Editar")
    const [botaoFoto, setBotaoFoto] = useState("Alterar")

    function handleSubmitMain(event) {
        event.preventDefault();

        if(botaoMain == "Editar"){
            setBotaoMain("Salvar")
        }
        if(botaoMain == "Salvar"){
            setBotaoMain("Editar")
        }
    }

    function handleSubmitFoto(event) {
        event.preventDefault();

        if(botaoFoto == "Alterar"){
            setBotaoFoto("Salvar")
        }
        if(botaoFoto == "Salvar"){
            setBotaoFoto("Alterar")
        }
    }

    function handleExcluir(event) {
        event.preventDefault();
        if(window.confirm('Tem certeza que deseja excluir sua conta? Todos os dados serão excluídos definitivamente e não será possível recuperar a conta posteriormente.')){
            window.alert("Conta excluída.");
            window.location.reload();
        }
    }

    return(
        <body className="perfilPrivado">

        <section className="titulo">
            <h1>Minha Conta</h1>
        </section>

        <div className="containerFlex">

            <section className="barraLateral">
                    <div className="foto">
                        <img src={perfilBlank} alt="Foto de Perfil" />
                        <form>
                            <input type="file" name="fotos" id="fotos" accept="image/*, .png .jpg" hidden />
                            <div className="botao"><button onClick={handleSubmitFoto}>{botaoFoto}</button></div>
                        </form>
                    </div>
                    <div className="menu">
                        <div className="tituloMenu">
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
                            <button onClick={handleSubmitMain}>{botaoMain}</button>
                        </div>

                        <label htmlFor="nome">Nome Completo</label>
                        <input type="text" id="nome" name="nome" placeholder="Nome Sobrenome" readonly="False" />
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
                        <button onClick={handleExcluir}>Excluir</button>
                    </div>
                </div>
            </section> 

        </div>

        </body>
    )
}

export default PaginaPerfilPrivado;
