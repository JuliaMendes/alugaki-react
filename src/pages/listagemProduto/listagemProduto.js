import "./listagemProduto.css"

import HeaderSecundario from "../../components/headerSecundario/HeaderSecundario"
import Footer from "../../components/footer/Footer"

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
            <Primeira />
            <Segunda />
            <Terceira />
            <Quarta />
            <Footer />
        </div>
    )
}

function Primeira() {
    return (
        <section className="primeira">
            <div className="container">
                <div className="produto">
                    <div className="info">
                        <h1>Título produto</h1>
                        <div className="subtitulo">
                            <img src={star} alt="" />
                            <small>4,8</small>
                            <img src={local} alt="" />
                            <small style={{ color: '#757575' }}>São Paulo, SP</small>
                        </div>
                    </div>
                    <div className="thumb" style={{ 'background-color': 'darkgray'}}></div>
                    <div className="info2">
                        <div className="esq">
                            <img src={star} alt="" />
                            <small>4,8</small>
                            <small style={{ color: '#757575' }}>• 750 avaliações</small> <br />
                            <small className="price">R$15,00 /dia</small>
                        </div>
                        <div className="dir">
                            <button>
                                <img className="fav" src={favorite} alt="" />
                            </button>
                            <button className="share">
                                <a href="https://www.facebook.com/sharer/sharer.php?u=https://juliamendes.github.io/alugaki/app/listagem-prod.html" target="blank">
                                    <img src={share} alt="" />
                                </a>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="calendario">
                    <h2>Precisa pra quando?</h2>
                    <img src={calendario} alt="" />
                    <small>Total: R$45,00</small>
                    <a href="https://api.whatsapp.com/send?phone=550" target="blank"><div className="botao"><button><img src={whatsapp} alt="" /> Alugar</button></div></a>
                </div>
            </div>
        </section>
    )
}

function Segunda() {
    return (
        <section className="segunda">
            <div className="container">
                <div className="descricao">
                    <h2>Descrição</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam <br />
                        hendrerit nulla nec mollis venenatis. Donec dapibus molestie ornare. <br />
                        Nam sit amet arcu posuere, pulvinar dolor et, porta diam. Duis fermentum <br />
                        tortor eu nibh mattis, id sodales nisl vestibulum. </p>
                </div>
                <div className="vendedor">
                    <a href="https://juliamendes.github.io/alugaki/app/perfil-publico.html" target="blank">
                        <div className="avatar" style={{ 'background-color': 'darkgray'}}></div>
                    </a>
                    <div className="info">
                        <a href="https://juliamendes.github.io/alugaki/app/perfil-publico.html" target="blank"><h3>John Doe</h3></a>
                        <div>
                            <img src={local} alt="" />
                            <small style={{ color: '#757575' }}>São Paulo, SP</small>
                        </div>
                        <div>
                            <img src={star} alt="" />
                            <small>4,8</small>
                            <small style={{ color: '#757575' }}>• 750 avaliações</small> <br />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

function Terceira() {
    return (
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
    )
}

function Quarta() {
    return (
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
    )
}

export default PaginaListagemProduto