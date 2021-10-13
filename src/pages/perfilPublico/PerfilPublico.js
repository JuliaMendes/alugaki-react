//imports
import { useState } from 'react';

import './perfilPublico.css';

import HeaderSecundario from "../../components/headerSecundario/HeaderSecundario"
import Footer from "../../components/footer/Footer"

import perfilBlank from "../../img/icones/bolinha_perfil.png"
import linhaAzul from "../../img/icones/Line-azul.png"
import linhaCinza from "../../img/icones/linha_cinza.png"
import Star from "../../img/icones/star1.png"
import seletorCheio from "../../img/icones/seletor_cheio_avaliacao.png"
import seletorVazio from "../../img/icones/seletor_vazio_avaliacao.png"
import botaoCar from "../../img/icones/drop_down1.png"
import seta from "../../img/icones/seta-direita.png"

//formando a pagina
function PaginaPerfilPublico() {
    return (
        <div>
            <HeaderSecundario />
            <Corpo/>
            <Footer />
        </div>
    )
}

function Corpo(){

    const [seletor1, setSeletor1] = useState(seletorCheio)
    const [seletor2, setSeletor2] = useState(seletorVazio)
    const [seletor3, setSeletor3] = useState(seletorVazio)
    const [seletor4, setSeletor4] = useState(seletorVazio)

    
    function botaoAvaliacao1() {
        if(seletor1 == seletorVazio){
            setSeletor1(seletorCheio)
        }
        setSeletor2(seletorVazio)
        setSeletor3(seletorVazio)
        setSeletor4(seletorVazio)
    }
    function botaoAvaliacao2() {
        if(seletor2 == seletorVazio){
            setSeletor2(seletorCheio)
        }
        setSeletor1(seletorVazio)
        setSeletor3(seletorVazio)
        setSeletor4(seletorVazio)
    }
    function botaoAvaliacao3() {
        if(seletor3 == seletorVazio){
            setSeletor3(seletorCheio)
        }
        setSeletor1(seletorVazio)
        setSeletor2(seletorVazio)
        setSeletor4(seletorVazio)
    }
    function botaoAvaliacao4() {
        if(seletor4 == seletorVazio){
            setSeletor4(seletorCheio)
        }
        setSeletor1(seletorVazio)
        setSeletor2(seletorVazio)
        setSeletor3(seletorVazio)
    }

    function setaAvaliacaoEsquerda() {
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
    }

    function setaAvaliacaoDireita() {
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
    }

    return(
        <body>

            <div className="containerFlex">
                <section className="barraLateral">
                    <div className="infos">
                        <h3>Nome</h3>
                        <img src={perfilBlank} alt="Foto de Perfil do Usuário" id="foto_perfil" />

                        <div className="estrelas">
                            <img src={Star} alt="Estrela de Avaliação" />
                            <img src={Star} alt="Estrela de Avaliação" />
                            <img src={Star} alt="Estrela de Avaliação" />
                            <img src={Star} alt="Estrela de Avaliação" />
                            <img src={Star} alt="Estrela de Avaliação" />
                        </div>

                        <img src={linhaCinza} alt="Linha horizontal" id="linha_cinza" />

                        <a href="https://api.whatsapp.com/send?phone=550">(xx) 9xxxx-xxxx</a>
                    </div>

                    <div className="filtros">
                        <div className="tituloFiltro">
                            <h3>Categoria</h3>
                            <img src={linhaAzul} alt="" />
                        </div>
            
                        <ul>
                            <li><a href="produtos-por-cat.html">Esporte e Lazer</a></li>
                            <li><a href="produtos-por-cat.html">Moda</a></li>
                            <li><a href="produtos-por-cat.html">Eletrônicos</a></li>
                            <li><a href="produtos-por-cat.html">Ferramentas e Utilitários</a></li>
                        </ul>       
                    </div> 
                </section>

                <section className="conteudo">

                    <h2>Anúncios</h2>
                    <section className="anuncios">

                        <div className="cardProduto">
                       </div>

                        <div className="cardProduto">
                        </div>

                        <div className="cardProduto">
                        </div>

                        <button onclick="setaAnuncio(this)"><img src={botaoCar} alt="Seta - Ir para próximo anuncio" /></button>
                    
                    </section>
                    
                    <div className="botaoVerMais">
                        <a href="produtos-por-cat.html"><span>ver mais</span><img src={seta} alt="botao ver mais" /></a>
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
                                    <h3>Perfil 1</h3>
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

        </body>
    )
}

//exportacao
export default PaginaPerfilPublico;
