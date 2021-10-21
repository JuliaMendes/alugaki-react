import { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';

import apiProdutos from "../../services/apiProdutos";

import produtoBlank from "../../img/icones/productBlank.png"
import star from "../../img/icones/star1.png"
import local from "../../img/icones/location.png"
import botaoCar from "../../img/icones/drop_down1.png"

function ProdutosPerfilPublico(props) {

    const user = props.userID
    const [produtos, setProdutos]  = useState([])
    const [showProdutos, setShowProdutos] = useState(false)

    useEffect(() => {
        setShowProdutos(true)
    }, [produtos])

    useEffect(() => {
        apiProdutos.get(`/products?id_anunciante=${user}`)
            .then(response => response.data)
            .then(response => setProdutos(response))
    }, [user])

    return(
        <section className="anuncios">
            {!showProdutos &&
                (
                    <div className="cardProduto">
                        <div className="thumb">
                            <a href="listagem-prod.html"><img src={produtoBlank} alt="Produto" /></a>
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
                )
            }
            {showProdutos &&
                produtos.map(item => {
                    return(
                        <div className="cardProduto">
                            <div className="thumb">
                                <Link to={`/listagem-produto/${item.id}`}>
                                    <img src={"/" + item.img} alt="Produto" />
                                </Link>
                            </div>
                            <div className="info">
                                <h3>{item.titulo}</h3>
                                <div>
                                    <img src={star} alt="Ícone estrela" />
                                    <div>
                                        <small className="pontuacao">{item.avaliacao}</small>
                                        <small>•{item.navaliacao} avaliações</small>
                                    </div>
                                </div>
                                <div className="localiz">
                                    <img src={local} alt="ícone localização" />
                                    <small>{item.localizacao}</small>
                                </div>
                                <h3 className="preco">R$ {item.preco}</h3>
                            </div>
                        </div>
                    )
                })
            }

            <button onclick="setaAnuncio(this)"><img src={botaoCar} alt="Seta - Ir para próximo anuncio" /></button>

        </section>
    )
}

export default ProdutosPerfilPublico