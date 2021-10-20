import { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';

import apiProdutos from "../../services/apiProdutos";

import CategoriasListagemProduto from '../categoriasListagemProduto/CategoriasListagemProduto';

import produtoBlank from "../../img/icones/productBlank.png"
import star from "../../img/icones/star1.png"
import local from "../../img/icones/location.png"
import arrowBack from "../../img/icones/arrow_back_ios.png"
import arrowForward from "../../img/icones/arrow_forward_ios.png"

function TerceiraListagemProduto(props) {

    const productID = props.productID
    const [category, setCategory] = useState("")
    const [showProdutos, setShowProdutos] = useState(false)

    useEffect(() => {
        setShowProdutos(true)
    }, [category])

    useEffect(() => {
        apiProdutos.get(`/products/${productID}`)
            .then(response => response.data)
            .then(response => setCategory(response.category))
    }, [productID])
    
    return(
        <>
            {!showProdutos &&
                (
                    <>
                        <section className="terceira">
                            <div className="container">

                                <h2>Produtos Similares</h2>

                                <div className="lista-produtos">
                                    <button id="botaoEsquerda" onClick="setaAnuncioEsquerda(this)"><img src={arrowBack} alt="" /></button>

                                    <div className="cardProduto">
                                        <div className="thumb">
                                            <img src={produtoBlank} alt="Produto" />
                                        </div>
                                        <div className="info">
                                            <h3>Titulo</h3>
                                            <div>
                                                <img src={star} alt="Ícone estrela" />
                                                <div>
                                                    <small className="pontuacao"> </small>
                                                    <small>• avaliações</small>
                                                </div>
                                            </div>
                                            <div className="localiz">
                                                <img src={local} alt="ícone localização" />
                                                <small>Localização</small>
                                            </div>
                                            <h3 className="preco">R$ preço</h3>
                                        </div>
                                    </div>

                                    <div className="cardProduto">
                                        <div className="thumb">
                                            <img src={produtoBlank} alt="Produto" />
                                        </div>
                                        <div className="info">
                                            <h3>Titulo</h3>
                                            <div>
                                                <img src={star} alt="Ícone estrela" />
                                                <div>
                                                    <small className="pontuacao"> </small>
                                                    <small>• avaliações</small>
                                                </div>
                                            </div>
                                            <div className="localiz">
                                                <img src={local} alt="ícone localização" />
                                                <small>Localização</small>
                                            </div>
                                            <h3 className="preco">R$ preço</h3>
                                        </div>
                                    </div>

                                    <div className="cardProduto">
                                        <div className="thumb">
                                            <img src={produtoBlank} alt="Produto" />
                                        </div>
                                        <div className="info">
                                            <h3>Titulo</h3>
                                            <div>
                                                <img src={star} alt="Ícone estrela" />
                                                <div>
                                                    <small className="pontuacao"> </small>
                                                    <small>• avaliações</small>
                                                </div>
                                            </div>
                                            <div className="localiz">
                                                <img src={local} alt="ícone localização" />
                                                <small>Localização</small>
                                            </div>
                                            <h3 className="preco">R$ preço</h3>
                                        </div>
                                    </div>

                                    <div className="cardProduto">
                                        <div className="thumb">
                                            <img src={produtoBlank} alt="Produto" />
                                        </div>
                                        <div className="info">
                                            <h3>Titulo</h3>
                                            <div>
                                                <img src={star} alt="Ícone estrela" />
                                                <div>
                                                    <small className="pontuacao"> </small>
                                                    <small>• avaliações</small>
                                                </div>
                                            </div>
                                            <div className="localiz">
                                                <img src={local} alt="ícone localização" />
                                                <small>Localização</small>
                                            </div>
                                            <h3 className="preco">R$ preço</h3>
                                        </div>
                                    </div>

                                    <button id="botaoDireita" onClick="setaAnuncioDireita(this)"><img src={arrowForward} alt="" /></button>
                                </div>

                            </div>
                        </section>
                    </>
                )
            }
            {showProdutos &&
                (
                    <>
                        <section className="terceira">
                            <div className="container">

                                <h2>Produtos Similares</h2>

                                <div className="lista-produtos">
                                    <button id="botaoEsquerda" onClick="setaAnuncioEsquerda()"><img src={arrowBack} alt="" /></button>

                                    <CategoriasListagemProduto category={category}/>

                                    <button id="botaoDireita" onClick="setaAnuncioDireita()"><img src={arrowForward} alt="" /></button>
                                </div>

                            </div>
                        </section>
                    </>
                )
            }
        </>
    )
}

export default TerceiraListagemProduto