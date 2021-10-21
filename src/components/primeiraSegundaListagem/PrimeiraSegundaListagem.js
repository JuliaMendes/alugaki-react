import { useState, useEffect } from 'react';
import apiProdutos from "../../services/apiProdutos";

import VendedorListagemProduto from '../vendedorListagemProduto/VendedorListagemProduto';

import perfilBlank from "../../img/icones/bolinha_perfil.png"
import linhaCinza from "../../img/icones/linha_cinza.png"
import star from "../../img/icones/star1.png"
import local from "../../img/icones/location.png"
import favorite from "../../img/icones/favorite_border.png"
import share from "../../img/icones/share.png"
import calendario from "../../img/imagens/calendario.png"
import whatsapp from "../../img/icones/whatsapp-verde.png"
import coracaoVazio from "../../img/icones/favorite_border.png"
import coracaoCheio from "../../img/icones/red-heart.png"

function PrimeiraSegundaListagem(props) {

    const productID = props.productID
    const [produto, setProduto] = useState({})
    const [showProduto, setShowProduto] = useState(false)
    const [favoritar, setFavoritar] = useState(coracaoVazio)

    useEffect(() => {
        setShowProduto(true)
    }, [produto])

    useEffect(() => {
        apiProdutos.get(`/products/${productID}`)
            .then(response => response.data)
            .then(response => setProduto(response))
            .catch(error => window.alert("Produto não encontrado."))
    }, [productID])

    return(
        <>
            {!showProduto &&
                (
                    <>
                        <section className="primeira">
                            <div className="container">
                                <div className="produto">
                                    <div className="info">
                                        <h1>Título</h1>
                                        <div className="subtitulo">
                                            <img src={star} alt="" />
                                            <small>Avaliação</small>
                                            <img src={local} alt="" />
                                            <small style={{ color: '#757575' }}>Localização</small>
                                        </div>
                                    </div>
                                    <div className="thumb" style={{ 'backgroundColor': 'darkgray'}}></div>
                                    <div className="info2">
                                        <div className="esq">
                                            <img src={star} alt="" />
                                            <small>Avaliação</small>
                                            <small style={{ color: '#757575' }}>• avaliações</small> <br />
                                            <small className="price">R$ Preço/dia</small>
                                        </div>
                                        <div className="dir">
                                            <button onClick={() => {
                                                    if(favoritar == coracaoVazio){
                                                        setFavoritar(coracaoCheio)
                                                    }
                                                    else{
                                                        setFavoritar(coracaoVazio)
                                                    }
                                                }}>
                                                <img className="fav" src={favoritar} alt="" />
                                            </button>
                                            <button className="share">
                                                <img src={share} alt="" />
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
                        <section className="segunda">
                            <div className="container">
                                <div className="descricao">
                                    <h2>Descrição</h2>
                                    <p>Descrição do Produto. </p>
                                </div>
                                <div className="vendedor">
                                    <div className="avatar" style={{ 'backgroundColor': 'darkgray'}}></div>
                                    <div className="info">
                                        <a href="https://juliamendes.github.io/alugaki/app/perfil-publico.html" target="blank"><h3>Nome</h3></a>
                                        <div>
                                            <img src={local} alt="" />
                                            <small style={{ color: '#757575' }}>Localização</small>
                                        </div>
                                        <div>
                                            <img src={star} alt="" />
                                            <small>Avaliação</small>
                                            <small style={{ color: '#757575' }}>•  avaliações</small> <br />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </>
                )
            }
            {showProduto &&
                (
                    <>
                        <section className="primeira">
                            <div className="container">
                                <div className="produto">
                                    <div className="info">
                                        <h1>{produto.titulo}</h1>
                                        <div className="subtitulo">
                                            <img src={star} alt="" />
                                            <small>{produto.avaliacao}</small>
                                            <img src={local} alt="" />
                                            <small style={{ color: '#757575' }}>{produto.localizacao}</small>
                                        </div>
                                    </div>
                                    <div className="thumb"> <img src={"/" + produto.img} /> </div>
                                    <div className="info2">
                                        <div className="esq">
                                            <img src={star} alt="" />
                                            <small>{produto.avaliacao}</small>
                                            <small style={{ color: '#757575' }}>• {produto.navaliacao} avaliações</small> <br />
                                            <small className="price">R$ {produto.preco}</small>
                                        </div>
                                        <div className="dir">
                                            <button onClick={() => {
                                                    if(favoritar == coracaoVazio){
                                                        setFavoritar(coracaoCheio)
                                                    }
                                                    else{
                                                        setFavoritar(coracaoVazio)
                                                    }
                                                }}>
                                                <img className="fav" src={favoritar} alt="" />
                                            </button>
                                            <button className="share">
                                                <a href={`https://api.whatsapp.com/send?text= 
                                                Veja o anúncio de ${produto.titulo} no alugaKi!
                                                Entre no link: http://localhost:3000/listagem-produto/${produto.id}`
                                                } data-action="share/whatsapp/share" target="blank">
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
                        <section className="segunda">
                            <div className="container">
                                <div className="descricao">
                                    <h2>Descrição</h2>
                                    <p>{produto.descricao} </p>
                                </div>
                                <VendedorListagemProduto userID={produto.id_anunciante}/>
                            </div>
                        </section>
                    </>
                )
            }
        </>
    )
}

export default PrimeiraSegundaListagem 