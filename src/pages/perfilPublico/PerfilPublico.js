//imports
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import {Link} from 'react-router-dom';

import Helmet from 'react-helmet'

import './perfilPublico.css';

import HeaderSecundario from "../../components/headerSecundario/HeaderSecundario"
import Footer from "../../components/footer/Footer"
import BarraPerfilPublico from "../../components/barraPerfilPublico/BarraPerfilPublico"
import ProdutosPerfilPublico from "../../components/produtosPerfilPublico/ProdutosPerfilPublico"

import perfilBlank from "../../img/icones/bolinha_perfil.png"
import linhaAzul from "../../img/icones/Line-azul.png"
import Star from "../../img/icones/star1.png"
import seletorCheio from "../../img/icones/seletor_cheio_avaliacao.png"
import seletorVazio from "../../img/icones/seletor_vazio_avaliacao.png"
import botaoCar from "../../img/icones/drop_down1.png"
import seta from "../../img/icones/seta-direita.png"

//formando a pagina
function PaginaPerfilPublico() {
    const { profile } = useParams();
    return (
        <div>
            <Helmet title="Perfil | alugaKi" />
            <HeaderSecundario />
            <Corpo userID={profile}/>
            <Footer />
        </div>
    )
}

function Corpo(props){

    const profile = props.userID

    const [seletor1, setSeletor1] = useState(seletorCheio)
    const [seletor2, setSeletor2] = useState(seletorVazio)
    const [seletor3, setSeletor3] = useState(seletorVazio)
    const [seletor4, setSeletor4] = useState(seletorVazio)

    const [perfil, setPerfil] = useState(1)

    function changePerfil(operador){
        if (operador=='+') {
            setPerfil(perfil + 1)
        }
        else if (operador=='-') {
            setPerfil(perfil - 1)
        }
        else{
            if(operador%4 != 0){
                setPerfil(operador%4)
            }
            else{
                setPerfil(4)
            }
        }
    }

    function botaoAvaliacao1() {
        if(seletor1 == seletorVazio){
            setSeletor1(seletorCheio)
            changePerfil(1)
        }
        setSeletor2(seletorVazio)
        setSeletor3(seletorVazio)
        setSeletor4(seletorVazio)
    }
    function botaoAvaliacao2() {
        if(seletor2 == seletorVazio){
            setSeletor2(seletorCheio)
            changePerfil(2)
        }
        setSeletor1(seletorVazio)
        setSeletor3(seletorVazio)
        setSeletor4(seletorVazio)
    }
    function botaoAvaliacao3() {
        if(seletor3 == seletorVazio){
            setSeletor3(seletorCheio)
            changePerfil(3)
        }
        setSeletor1(seletorVazio)
        setSeletor2(seletorVazio)
        setSeletor4(seletorVazio)
    }
    function botaoAvaliacao4() {
        if(seletor4 == seletorVazio){
            setSeletor4(seletorCheio)
            changePerfil(4)
        }
        setSeletor1(seletorVazio)
        setSeletor2(seletorVazio)
        setSeletor3(seletorVazio)
    }

    function setaAvaliacaoEsquerda() {
        if(perfil>1){
            if(seletor1 == seletorCheio){
                botaoAvaliacao4()
            }
            else if(seletor2 == seletorCheio){
                botaoAvaliacao1()
            }
            else if(seletor3 == seletorCheio){
                botaoAvaliacao2()
            }
            else if(seletor4 == seletorCheio){
                botaoAvaliacao3()
            }
            changePerfil('-')
        }
    }

    function setaAvaliacaoDireita() {
        if(perfil<4){
            if(seletor1 == seletorCheio){
                botaoAvaliacao2()
            }
            else if(seletor2 == seletorCheio){
                botaoAvaliacao3()
            }
            else if(seletor3 == seletorCheio){
                botaoAvaliacao4()
            }
            else if(seletor4 == seletorCheio){
                botaoAvaliacao1()
            }
            changePerfil('+')
        }
    }

    return(
        <div className="perfilPublico">

            <div className="containerFlex">
                <section className="barraLateral">
                    <BarraPerfilPublico userID={profile} />

                    <div className="filtros">
                        <div className="tituloFiltro">
                            <h3>Categoria</h3>
                            <img src={linhaAzul} alt="" />
                        </div>
            
                        <ul>
                            <li><Link to={`/produtos-por-categoria?id_anunciante=${profile}&category_like=Esporte e Lazer`}>Esporte e Lazer</Link></li>
                            <li><Link to={`/produtos-por-categoria?id_anunciante=${profile}&category_like=Moda`}>Moda</Link></li>
                            <li><Link to={`/produtos-por-categoria?id_anunciante=${profile}&category_like=Eletrônicos`}>Eletrônicos</Link></li>
                            <li><Link to={`/produtos-por-categoria?id_anunciante=${profile}&category_like=Ferramentas e Utilitários`}>Ferramentas e Utilitários</Link></li>
                        </ul>       
                    </div> 
                </section>

                <section className="conteudo">

                    <h2>Anúncios</h2>

                    <ProdutosPerfilPublico userID={profile}/>

                    <div className="botaoVerMais">
                        <Link to={`/produtos-por-categoria?id_anunciante=${profile}`}>
                            <span>ver mais</span><img src={seta} alt="botao ver mais" />
                        </Link>
                    </div>
            
                    <h2 id="titulo_avaliacao">Avaliações</h2>
                    <section className="avaliacoes">
                        <div className="seta_esquerda">
                            <button><img src={botaoCar} alt="Seta - Ir para avaliação anterior" onClick={setaAvaliacaoEsquerda} /></button>
                        </div>
                        <div className="cardAvaliacao">
                            <div className="avaliador">
                                <img src={perfilBlank} alt="Foto de perfil do avaliador" id="perfil_avaliador" />
                                <div className="infos">
                                    <h3>Perfil {perfil}</h3>
                                    <div className="estrelas">
                                        <img src={Star} alt="Estrela de Avaliação" />
                                        <img src={Star} alt="Estrela de Avaliação" />
                                        <img src={Star} alt="Estrela de Avaliação" />
                                        <img src={Star} alt="Estrela de Avaliação" />
                                        <img src={Star} alt="Estrela de Avaliação" />
                                    </div>
                                </div>
                            </div>
                            <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam hendrerit nulla nec mollis venenatis. Donec  ornare. Nam sit amet arcu posuere, pulvinar dolor et, porta diam.“</p>
                            <div className="seletores">
                                <button><img src={seletor1} alt="Seletor Avaliação" onClick={botaoAvaliacao1} /></button>
                                <button><img src={seletor2} alt="Seletor Avaliação" onClick={botaoAvaliacao2} /></button>
                                <button><img src={seletor3} alt="Seletor Avaliação" onClick={botaoAvaliacao3} /></button>
                                <button><img src={seletor4} alt="Seletor Avaliação" onClick={botaoAvaliacao4} /></button>
                            </div>
                        </div>
                        <div className="seta_direita">
                            <button><img src={botaoCar} alt="Seta - Ir para próxima avaliação" onClick={setaAvaliacaoDireita} /></button>
                        </div>
                    </section>
                </section>

            </div>

        </div>
    )
}

//exportacao
export default PaginaPerfilPublico;
