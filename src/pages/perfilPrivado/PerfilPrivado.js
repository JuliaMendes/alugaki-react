//imports
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Helmet from 'react-helmet'

import './perfilPrivado.css';

import HeaderSecundario from "../../components/headerSecundario/HeaderSecundario"
import Footer from "../../components/footer/Footer"

import apiProdutos from '../../services/apiProdutos';

import perfilBlank from "../../img/icones/bolinha_perfil.png"
import linhaAzul from "../../img/icones/Line-azul.png"

function PaginaPerfilPrivado() {
    const { profile } = useParams();

    return (
        <div>
            <Helmet title="Minha Conta | alugaKi" />
            <HeaderSecundario />
            <Corpo userID={profile}/>
            <Footer />
        </div>
    )
}

function Corpo(props){

    let profile = props.userID;

    const [botaoMain, setBotaoMain] = useState("Editar");
    const [botaoFoto, setBotaoFoto] = useState("Alterar");

    const [stateRead, setStateRead] = useState("readOnly");
    const [stateHidden, setStateHidden] = useState("hidden");
    const [stateDisabled, setStateDisabled] = useState("disabled");

    // useState pro valor de cada campo que tem validacao
    const [nome, setNome]  = useState("");
    const [telefone, setTelefone] = useState("");
    const [emailP, setEmailP] = useState("");
    const [senha, setSenha] = useState("");
    const [foto, setFoto] = useState(perfilBlank);

    const [showProfile, setShowProfile] = useState(false)

    // useState pros erros de cada campo que tem validacao 
    const [errosNome, setErrosNome] = useState("");
    const [errosTelefone, setErrosTelefone] = useState("");
    const [errosEmail, setErrosEmail] = useState([]);
    const [errosSenha, setErrosSenha] = useState("");

    const [checkedState, setCheckedState] = useState(null)

    function validaPrivacidade() {
        if(checkedState==true){
            setCheckedState(null);
        }
        else{
            setCheckedState(true);
        }
    }

    // funcao pra analisar se tem erros quando usuario clica pra enviar
    function handleSubmitMain(event) {
        if(botaoMain == "Editar"){
            event.preventDefault();
            setBotaoMain("Salvar")
            setStateRead(null)
            setStateDisabled(null)
        }
        if(botaoMain == "Salvar"){
            let erros = !((errosNome == "") && (errosTelefone == "") && !(errosEmail.length != 0 ) && (errosSenha == ""));
            if(!erros){
                setBotaoMain("Editar")
                setStateRead("readOnly")
                setStateDisabled("disabled")
            }
            else{
                window.alert("Favor verificar campo(s) com erro.");
                event.preventDefault();
            }
        }
    }

    function handleSubmitFoto(event) {
        event.preventDefault();

        if(botaoFoto == "Alterar"){
            setBotaoFoto("Salvar")
            setStateHidden(null)
        }
        if(botaoFoto == "Salvar"){
            setBotaoFoto("Alterar")
            setStateHidden("Hidden")
        }
    }

    function handleExcluir(event) {
        event.preventDefault();
        if(window.confirm('Tem certeza que deseja excluir sua conta? Todos os dados serão excluídos definitivamente e não será possível recuperar a conta posteriormente.')){
            window.alert("Conta excluída.");
            window.location.reload();
        }
    }

    useEffect(() => {
        if(nome != ""){
            if(nome.length<3){
                setErrosNome("O campo Nome deve ter no mínimo 4 caracteres.");
            }
            else if(nome.length > 100){
                setErrosNome("O campo Nome deve ter no máximo 100 caraceteres.");
            }
            else{
                setErrosNome("");
            }
        }
        else{
            setErrosNome("");
        }
    }, [nome])

    useEffect(() => {
        if(telefone != ""){
            if(telefone.length < 10){
                setErrosTelefone("O campo Telefone deve ter no mínimo 10 caracteres.");
            }
            else{
                setErrosTelefone("");
            }
        }
        else{
            setErrosTelefone("");
        }
    }, [telefone])

    useEffect(() => {
        if(emailP != ""){
            let includeEsp = (!emailP.includes("@") || !emailP.includes("."));
            if (emailP.length < 10 && includeEsp){
                setErrosEmail(["O campo Email deve ter no mínimo 10 caracteres.", "O campo Email deve incluir os caracteres '@' e '.'"]);
            }
            else if(emailP.length > 180 && includeEsp) {
                setErrosEmail(["O campo Email deve ter no máximo 180 caracteres.", "O campo Email deve incluir os caracteres '@' e '.'"]);
            }
            else if(includeEsp) {
                setErrosEmail(["O campo Email deve incluir os caracteres '@' e '.'"]);
            }
            else {
                setErrosEmail([]);
            }
        }
        else{
            setErrosEmail([]);
        }
    }, [emailP])

    useEffect(() => {
        if(senha != ""){
            if(senha.length < 8){
                setErrosSenha("O campo Senha deve ter no mínimo 8 caracteres.");
            }
            else if(senha.length > 64){
                setErrosSenha("O campo Senha deve ter no máximo 64 caracteres.");
            }
            else{
                setErrosSenha("");
            }
        }
        else{
            setErrosSenha("");
        }
    }, [senha])

    useEffect(() => {
        apiProdutos.get(`/users/${profile}`)
            .then(response => response.data)
            .then(response => {
                setNome(response.nome)
                setTelefone(response.telefone)
                setEmailP(response.email)
                setSenha("********")
                setFoto("/" + response.img)
                if(response.privacidade == true){
                    setCheckedState(true)
                }
                else{
                    setCheckedState(null)
                }
            })
            .catch(error => window.alert("Usuário não encontrado!"))
    }, [profile])

    return(
        <div className="perfilPrivado">

            <section className="titulo">
                <h1>Minha Conta</h1>
            </section>

            <div className="containerFlex">

                <section className="barraLateral">
                        <div className="foto">
                            <img src={foto} alt="Foto de Perfil" />
                            <form>
                                <input type="file" name="fotos" id="fotos" accept="image/*, .png .jpg" hidden={stateHidden} />
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

                            <label htmlFor="nome">Nome</label>
                            <input className={`${(errosNome != "") ? 'campo-com-erro' : ''}`} type="text" id="nome" name="nome" placeholder="Nome Sobrenome" readOnly={stateRead} value={nome} onChange={(e)=>setNome(e.target.value)}/>
                            <ul>
                                <li>{errosNome}</li>
                            </ul>
                
                            <label htmlFor="telefone">Telefone</label>
                            <input className={`${(errosTelefone != "") ? 'campo-com-erro' : ''}`}type="tel" id="telefone" name="telefone" placeholder="(xx) 9xxxx-xxxx" readOnly={stateRead} value={telefone} onChange={(e)=>setTelefone(e.target.value)}/>
                            <ul>
                                <li>{errosTelefone}</li>
                            </ul>
                        </div>

                        <div className="login">
                            <h2>Login e Segurança</h2>

                            <label htmlFor="email">E-mail</label><br />
                            <input className={`${(errosEmail.length != 0) ? 'campo-com-erro' : ''}`} type="email" id="email" name="email" placeholder="meuemail@email.com" readOnly={stateRead} value={emailP} onChange={(e)=>setEmailP(e.target.value)}/>
                            <ul>
                                {errosEmail.map((erro) => {
                                        return (<li>{erro}</li>)
                                })}
                            </ul>

                            <label htmlFor="pass">Senha</label><br />
                            <input className={`${(errosSenha != "") ? 'campo-com-erro' : ''}`} type="password" id="pass" name="password" placeholder="********" readOnly={stateRead} value={senha} onChange={(e)=>setSenha(e.target.value)}/>
                            <ul>
                                <li></li>
                                <li>{errosSenha}</li>
                            </ul>
                        </div>

                        <div className="privacidade">
                            <h2>Privacidade</h2>
                            <div>
                                <input type="checkbox" id="priv" name="priv" disabled={stateDisabled} checked={checkedState} onClick={validaPrivacidade}/>
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

        </div>
    )
}

export default PaginaPerfilPrivado;
