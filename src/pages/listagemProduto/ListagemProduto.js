import "./listagemProduto.css"

import HeaderSecundario from "../../components/headerSecundario/HeaderSecundario"
import Footer from "../../components/footer/Footer"
import PrimeiraSegundaListagem from "../../components/PrimeiraSegundaListagem/PrimeiraSegundaListagem"

import star from "../../img/icones/star1.png"
import local from "../../img/icones/location.png"
import favorite from "../../img/icones/favorite_border.png"
import share from "../../img/icones/share.png"
import calendario from "../../img/imagens/calendario.png"
import whatsapp from "../../img/icones/whatsapp-verde.png"
import arrowBack from "../../img/icones/arrow_back_ios.png"
import arrowForward from "../../img/icones/arrow_forward_ios.png"
import arduinoImage from "../../img/imagens/arduino.jpeg"
import barracaImage from "../../img/imagens/barraca.jpg"
import bicicletaImage from "../../img/imagens/bicicleta.jpg"
import betoneiraImage from "../../img/imagens/betoneira.jpg"
import perfilImage from "../../img/icones/bolinha_perfil.png"
import dropDown2 from "../../img/icones/drop_down2.png"

function PaginaListagemProduto() {
    return (
        <div>
            <HeaderSecundario />
            <PrimeiraSegunda />
            <Terceira />
            <Quarta />
            <Footer />
        </div>
    )
}

function PrimeiraSegunda() {
    return (
        <div className="paginaListagem">
            <PrimeiraSegundaListagem />
        </div>
    )
}

function Terceira() {
    return (
        <div className="paginaListagem">
            <section className="terceira">
                <h2>Produtos Similares</h2>
                <div className="container">
                    <button id="botaoEsquerda" onClick="setaAnuncioEsquerda(this)"><img src={arrowBack} alt="" /></button>

                    <div className="lista-produtos">
                        <div className="card-produto">
                            {/* <!--imagem do produto--> */}
                            <div className="thumb">
                                <a href="listagem-prod.html"><img src={arduinoImage} alt="Arduino" /></a>
                            </div>
                            {/* <!--informações do produto: nome, avaliação, localiz., preço--> */}
                            <div className="info">
                                <h3>Nome do produto</h3>
                                <div>
                                    {/* <!--div com infos sobre avaliação--> */}
                                    <img src={star} alt="" />
                                    <div>
                                        <small>4,8</small>
                                        <small style={{ color: '#757575' }}>• 750 avaliações</small>
                                    </div>
                                </div>
                                {/* <!--div com infos sobre localiz.--> */}
                                <div className="localiz">
                                    <img src={local} alt="" />
                                    <small style={{ color: '#757575' }}>São Paulo, SP</small>
                                </div>
                                {/* <!--preço--> */}
                                <h3 className="preco">R$preço /dia</h3>
                            </div>
                        </div>
                    </div>

                    <div className="lista-produtos">
                        <div className="card-produto">
                            {/* <!--imagem do produto--> */}
                            <div className="thumb">
                                <a href="listagem-prod.html"><img src={barracaImage} alt="Barraca de camping" /></a>
                            </div>
                            {/* <!--informações do produto: nome, avaliação, localiz., preço--> */}
                            <div className="info">
                                <h3>Nome do produto</h3>
                                <div>
                                    {/* <!--div com infos sobre avaliação--> */}
                                    <img src={star} alt="" />
                                    <div>
                                        <small>4,8</small>
                                        <small style={{ color: '#757575' }}>• 750 avaliações</small>
                                    </div>
                                </div>
                                {/* <!--div com infos sobre localiz.--> */}
                                <div className="localiz">
                                    <img src={local} alt="" />
                                    <small style={{ color: '#757575' }}>São Paulo, SP</small>
                                </div>
                                {/* <!--preço--> */}
                                <h3 className="preco">R$preço /dia</h3>
                            </div>
                        </div>
                    </div>

                    <div className="lista-produtos">
                        <div className="card-produto">
                            {/* <!--imagem do produto--> */}
                            <div className="thumb">
                                <a href="listagem-prod.html"><img src={bicicletaImage} alt="Bicicleta aro 29" /></a>
                            </div>
                            {/* <!--informações do produto: nome, avaliação, localiz., preço--> */}
                            <div className="info">
                                <h3>Nome do produto</h3>
                                <div>
                                    {/* <!--div com infos sobre avaliação--> */}
                                    <img src={star} alt="" />
                                    <div>
                                        <small>4,8</small>
                                        <small style={{ color: '#757575' }}>• 750 avaliações</small>
                                    </div>
                                </div>
                                {/* <!--div com infos sobre localiz.--> */}
                                <div className="localiz">
                                    <img src={local} alt="" />
                                    <small style={{ color: '#757575' }}>São Paulo, SP</small>
                                </div>
                                {/* <!--preço--> */}
                                <h3 className="preco">R$preço /dia</h3>
                            </div>
                        </div>
                    </div>

                    <div className="lista-produtos">
                        <div className="card-produto">
                            {/* <!--imagem do produto--> */}
                            <div className="thumb">
                                <a href="listagem-prod.html"><img src={betoneiraImage} alt="Betoneira" /></a>
                            </div>
                            {/* <!--informações do produto: nome, avaliação, localiz., preço--> */}
                            <div className="info">
                                <h3>Nome do produto</h3>
                                <div>
                                    {/* <!--div com infos sobre avaliação--> */}
                                    <img src={star} alt="" />
                                    <div>
                                        <small>4,8</small>
                                        <small style={{ color: '#757575' }}>• 750 avaliações</small>
                                    </div>
                                </div>
                                {/* <!--div com infos sobre localiz.--> */}
                                <div className="localiz">
                                    <img src={local} alt="" />
                                    <small style={{ color: '#757575' }}>São Paulo, SP</small>
                                </div>
                                {/* <!--preço--> */}
                                <h3 className="preco">R$preço /dia</h3>
                            </div>
                        </div>
                    </div>

                    <button id="botaoDireita" onClick="setaAnuncioDireita(this)"><img src={arrowForward} alt="" /></button>
                </div>
            </section>
        </div>
    )
}

function Quarta() {
    return (
        <div className="paginaListagem">
            <section className="quarta">
                <div className="container">
                    <h2>Avaliações</h2>
                    <div className="classificacao">
                        <img src={star} alt="" />
                        <small>4,8</small>
                        <a href="#">Todas as classificações <img src={dropDown2} alt="" /></a>
                    </div>

                    <div className="lista-aval">
                        <div className="card-avaliacao">
                            <div className="avaliador">
                                <img src={perfilImage} alt="Foto de perfil do avaliador" className="perfil_avaliador" />
                                <div className="infos">
                                    <h3>Perfil 1</h3>
                                    <div className="estrelas">
                                        <img src={star} alt="Estrela de Avaliação" />
                                        <img src={star} alt="Estrela de Avaliação" />
                                        <img src={star} alt="Estrela de Avaliação" />
                                        <img src={star} alt="Estrela de Avaliação" />
                                        <img src={star} alt="Estrela de Avaliação" />
                                    </div>
                                    <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam hendrerit nulla nec mollis venenatis. Donec  ornare. Nam sit amet arcu posuere, pulvinar dolor et, porta diam.“</p>
                                </div>
                            </div>
                        </div>

                        <div className="card-avaliacao">
                            <div className="avaliador">
                                <img src={perfilImage} alt="Foto de perfil do avaliador" className="perfil_avaliador" />
                                <div class="infos">
                                    <h3>Perfil 1</h3>
                                    <div className="estrelas">
                                        <img src={star} alt="Estrela de Avaliação" />
                                        <img src={star} alt="Estrela de Avaliação" />
                                        <img src={star} alt="Estrela de Avaliação" />
                                        <img src={star} alt="Estrela de Avaliação" />
                                        <img src={star} alt="Estrela de Avaliação" />
                                    </div>
                                    <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam hendrerit nulla nec mollis venenatis. Donec  ornare. Nam sit amet arcu posuere, pulvinar dolor et, porta diam.“</p>
                                </div>
                            </div>
                        </div>

                        <div className="card-avaliacao">
                            <div className="avaliador">
                                <img src={perfilImage} alt="Foto de perfil do avaliador" className="perfil_avaliador" />
                                <div className="infos">
                                    <h3>Perfil 1</h3>
                                    <div className="estrelas">
                                        <img src={star} alt="Estrela de Avaliação" />
                                        <img src={star} alt="Estrela de Avaliação" />
                                        <img src={star} alt="Estrela de Avaliação" />
                                        <img src={star} alt="Estrela de Avaliação" />
                                        <img src={star} alt="Estrela de Avaliação" />
                                    </div>
                                    <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam hendrerit nulla nec mollis venenatis. Donec  ornare. Nam sit amet arcu posuere, pulvinar dolor et, porta diam.“</p>
                                </div>
                            </div>
                        </div>

                        <span></span>
                    </div>
                    <br />
                    <button id="botaoCarregar">Carregar mais avaliações<img src={dropDown2} alt="" /></button>
                </div>
            </section>
        </div>
    )
}

export default PaginaListagemProduto
