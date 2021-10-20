import { useState, useEffect } from 'react';
import apiProdutos from "../../services/apiProdutos";
import { useParams } from 'react-router-dom';

import perfilBlank from "../../img/icones/bolinha_perfil.png"
import linhaCinza from "../../img/icones/linha_cinza.png"
import star from "../../img/icones/star1.png"
import local from "../../img/icones/location.png"
import favorite from "../../img/icones/favorite_border.png"
import share from "../../img/icones/share.png"
import calendario from "../../img/imagens/calendario.png"
import whatsapp from "../../img/icones/whatsapp-verde.png"

function PrimeiraSegundaListagem() {

    const {productID = 1} = useParams()
    const [profile, setProfile]  = useState({})
    const [produto, setProduto] = useState({})
    const [show, setShow] = useState(false)

    useEffect(() => {
        setShow(true)
    }, [produto])

    useEffect(() => {
        apiProdutos.get(`/products/${productID}`)
            .then(response => response.data)
            .then(response => {
                setProduto(response)})
            .catch(error => window.alert("Produto não encontrado."))
    }, [productID])

    // const user = produto.id_anunciante

    useEffect(() => {
        apiProdutos.get(`/users/4`)
            .then(response => response.data)
            .then(response => {
                setProfile(response)})
            .catch(error => console.log(error))
    },)
    
    return(
        <>
            {!show &&
                (
                    <>
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
                                    <div className="thumb" style={{ 'backgroundColor': 'darkgray'}}></div>
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
                                        <div className="avatar" style={{ 'backgroundColor': 'darkgray'}}></div>
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
                    </>
                )
            }
            {show &&
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
                                    <div className="thumb"> <img src={produto.img} /> </div>
                                    <div className="info2">
                                        <div className="esq">
                                            <img src={star} alt="" />
                                            <small>{produto.avaliacao}</small>
                                            <small style={{ color: '#757575' }}>• {produto.navaliacao} avaliações</small> <br />
                                            <small className="price">R$ {produto.preco}</small>
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
                        <section className="segunda">
                            <div className="container">
                                <div className="descricao">
                                    <h2>Descrição</h2>
                                    <p>{produto.descricao} </p>
                                </div>
                                <div className="vendedor">
                                    <a href="https://juliamendes.github.io/alugaki/app/perfil-publico.html" target="blank">
                                        <div className="avatar"> <img src={profile.img}/> </div>
                                    </a>
                                    <div className="info">
                                        <a href="https://juliamendes.github.io/alugaki/app/perfil-publico.html" target="blank"><h3>{profile.nome}</h3></a>
                                        <div>
                                            <img src={local} alt="" />
                                            <small style={{ color: '#757575' }}>{produto.localizacao}</small>
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
                    </>
                )
            }
        </>
    )
}

export default PrimeiraSegundaListagem