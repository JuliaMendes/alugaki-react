import { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';

import apiProdutos from "../../services/apiProdutos";

import produtoBlank from "../../img/icones/productBlank.png"
import star from "../../img/icones/star1.png"
import local from "../../img/icones/location.png"

function CategoriasListagemProduto(props) {

    const category = props.category
    const [produtos, setProdutos] = useState([])
    const [showProdutos, setShowProdutos] = useState(false)


    useEffect(() => {
        setShowProdutos(true)
    }, [produtos])

    useEffect(() => {
        apiProdutos.get(`/products/?category_like=${category}`)
            .then(response => response.data)
            .then(response => setProdutos(response))
            .catch(error => setShowProdutos(false))
    }, [category])
    
    return(
        <>
            {!showProdutos &&
                (
                    <>
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
                    </>
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
                                        <small className="pontuacao"> {item.avaliacao} </small>
                                        <small>• {item.navaliacao} avaliações</small>
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
        </>
    )
}

export default CategoriasListagemProduto