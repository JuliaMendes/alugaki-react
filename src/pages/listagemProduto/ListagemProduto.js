import "./listagemProduto.css"
import { useParams } from 'react-router-dom';
import { useState } from 'react';

import HeaderSecundario from "../../components/headerSecundario/HeaderSecundario"
import Footer from "../../components/footer/Footer"
import Helmet from 'react-helmet'
import PrimeiraSegundaListagem from "../../components/primeiraSegundaListagem/PrimeiraSegundaListagem";
import TerceiraListagemProduto from "../../components/terceiraListagemProduto/TerceiraListagemProduto";
import AvaliacaoListagemProduto from "../../components/avaliacaoListagemProduto/AvaliacaoListagemProduto";

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

    const [avaliacoes, setAvaliacoes] = useState(3)

    function carregarAvaliacoes() {
        setAvaliacoes(avaliacoes+1)
    }

    return (
        <div className="paginaListagem">
            <section className="quarta">
                <div className="container">
                    <h2>Avaliações</h2>

                    <div className="lista-aval">

                        <AvaliacaoListagemProduto repeticoes={avaliacoes}/>
                        <span></span>
                    </div>

                    <br />
                    <button id="botaoCarregar" onClick={carregarAvaliacoes}>Carregar mais avaliações<img src={dropDown2} alt="" /></button>
                </div>
            </section>
        </div>
    )
}

export default PaginaListagemProduto