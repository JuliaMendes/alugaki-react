import { useState, useEffect } from 'react';
import apiProdutos from "../../services/apiProdutos";
import { useParams } from 'react-router-dom';
import { Link } from "react-router-dom";

import produtoBlank from "../../img/icones/productBlank.png"
import Star from "../../img/icones/star1.png"
import Location from "../../img/icones/location.png"

function Cards(props) {

    const [showProdutos, setShowProdutos] = useState(false)

    const [produtos, setProdutos] = useState([])

    const url = props.produtosRequest
    const [produtosExibidos, setProdutosExibidos] = useState([])
    const [produtosAPI, setProdutosAPI] = useState([])

    useEffect(() => {
        setShowProdutos(true)
    }, [produtosExibidos])

    useEffect(() => {
        if (props.localizacao) {
            const produtos = produtosAPI.filter(item=> {
                    if(props.localizacao !== undefined) {
                        return item.localizacao === props.localizacao
                    }
                    return true
                });
                setProdutosExibidos(produtos);
        }
        
    }, [props]);

    useEffect(() => {
        apiProdutos
          .get(`/products${url}`)
          .then((response) => {
            setProdutosExibidos(response.data);
            setProdutosAPI(response.data);
          });
    }, [url])

    if (produtosExibidos) {

        if (produtosExibidos.length === 0) {
            return <h1>Nenhum produto encontrado</h1>
        }

        return produtosExibidos
        .map(item => {
            return(
                <div className="card-produto">
                    <div className="thumb">
                        <Link to={`/listagem-produto/${item.id}`}>
                                <img src={item.img} alt={item.titulo} />
                        </Link>
                    </div>
                    <div className="info">
                        <h3>{item.titulo}</h3>
                        <div>
                            <img src={Star} alt="Ícone estrela" />
                            <div>
                                <small className="pontuacao">{item.avaliacao}</small>
                                <small>• {item.navaliacao} avaliações</small>
                            </div>
                        </div>
                        <div className="localiz">
                            <img src={Location} alt="ícone localização" />
                            <small>{item.localizacao}</small>
                        </div>
                        <h3 className="preco">R$ {item.preco} /{item.tempo} </h3>
                    </div>
                </div>
            )
        })
    }

    return(
        <>
            {!showProdutos &&
                (
                    <div className="card-produto">
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
                        <div className="card-produto">
                            <div className="thumb">
                            <Link to={`/listagem-produto/${item.id}`}>
                                <img src={item.img} alt={item.titulo} />
                            </Link>
                            </div>
                            <div className="info">
                                <h3>{item.titulo}</h3>
                                <div>
                                    <img src={Star} alt="Ícone estrela" />
                                    <div>
                                        <small className="pontuacao">{item.avaliacao}</small>
                                        <small>• {item.navaliacao} avaliações</small>
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
        </>
    )
}

export default Cards