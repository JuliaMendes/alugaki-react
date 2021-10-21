import "./listagemProduto.css"
import { useParams } from 'react-router-dom';

import HeaderSecundario from "../../components/headerSecundario/HeaderSecundario"
import Footer from "../../components/footer/Footer"
import Helmet from 'react-helmet'
import PrimeiraSegundaListagem from "../../components/primeiraSegundaListagem/PrimeiraSegundaListagem";
import TerceiraListagemProduto from "../../components/terceiraListagemProduto/TerceiraListagemProduto";

import star from "../../img/icones/star1.png"
import perfilImage from "../../img/icones/bolinha_perfil.png"
import dropDown2 from "../../img/icones/drop_down2.png"

function PaginaListagemProduto() {
    const { product } = useParams();

    return (
        <div>
            <Helmet title="Listagem de Produto | alugaKi" />
            <HeaderSecundario />
            <Corpo productID={product}/>
            <Quarta />
            <Footer />
        </div>
    )
}

function Corpo(props) {

    const product = props.productID

    return (
        <div className="paginaListagem">
            <PrimeiraSegundaListagem productID={product}/>
            <TerceiraListagemProduto productID={product}/>
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