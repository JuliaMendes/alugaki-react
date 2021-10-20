import { useState, useEffect } from 'react';
import apiProdutos from "../../services/apiProdutos";
import { useParams } from 'react-router-dom';

import produtoBlank from "../../img/icones/productBlank.png"
import Star from "../../img/icones/star1.png"
import Location from "../../img/icones/location.png"

function ProdutosPerfilPublico() {

    const {user = 9} = useParams()
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

    console.log(produtos)

    return(
        <div className="infos">
            {!showProdutos &&
                (
                    <div className="cardProduto">
                        <div className="thumb">
                            <a href="listagem-prod.html"><img src={produtoBlank} alt="Produto" /></a>
                        </div>
                        <div className="info">
                            <h3>Titulo</h3>
                            <div>
                                <img src={Star} alt="Ícone estrela" />
                                <div>
                                    <small className="pontuacao"> </small>
                                    <small>• avaliações</small>
                                </div>
                            </div>
                            <div className="localiz">
                                <img src={Location} alt="ícone localização" />
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
                                <a href="listagem-prod.html"><img src={item.img} alt="Produto" /></a>
                            </div>
                            <div className="info">
                                <h3>{item.titulo}</h3>
                                <div>
                                    <img src={Star} alt="Ícone estrela" />
                                    <div>
                                        <small className="pontuacao">{item.avaliacao}</small>
                                        <small>•{item.navaliacao} avaliações</small>
                                    </div>
                                </div>
                                <div className="localiz">
                                    <img src={Location} alt="ícone localização" />
                                    <small>{item.localizacao}</small>
                                </div>
                                <h3 className="preco">R$ {item.preco}</h3>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default ProdutosPerfilPublico