import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import apiProdutos from "../../services/apiProdutos";
import HeaderSecundario from "../../components/headerSecundario/HeaderSecundario"
import Footer from "../../components/footer/Footer"
import './produtosPorCat.css';
import linha from "../../img/icones/Line-azul.png"
import dropdown from "../../img/icones/drop_down1.png"
import Cards from "../../components/produtosProdPorCat/Cards"
import Helmet from "react-helmet";


function PaginaProdutosPorCat() {
    return (
        <div>
            <Helmet title="Produtos | alugaKi" />
            <HeaderSecundario />
            <Produtos />
            <Footer />
        </div>
    )
}


function Produtos() {
    const urlBusca = useLocation()
    let urlBuscaSearch = urlBusca.search
    const [produtosExibidos, setProdutosExibidos] = useState(urlBuscaSearch);
 
    const [paginaAcessada, setPaginaAcessada] = useState(1)
    const links = [1, 2, 3]

    const [menuAberto, setMenuAberto] = useState(false)

    const [cat, setCat] = useState("Produtos")

    useEffect(() => {
        urlBuscaSearch = urlBusca.search
        setProdutosExibidos(urlBuscaSearch)
    }, [urlBusca])

    const [localiz, setLocaliz] = useState()

    return (
        <div className="paginaCategorias">
            <section className="produtos">
                {/* categoria de produtos */}
                <div className="titulo">
                    <h1>{cat}</h1>
                </div>
                <div className="dropdown" data-dropdown>
                    <button className="menu-filtros" onClick={(e) => { setMenuAberto(!menuAberto) }}>filtros</button>
                    <div className={`dropdown-menu ${menuAberto ? '' : 'dropdown-menu-escondido'}`}>
                        <ul>
                            <li>
                                <h3>Categoria</h3>
                                <ul>
                                    <li className="botao-cat"><a href="#">Esporte e Lazer</a></li>
                                    <li className="botao-cat"><a href="#">Moda</a></li>
                                    <li className="botao-cat"><a href="#">Eletr??nicos</a></li>
                                    <li className="botao-cat"><a href="#">Ferramentas e Utilit??rios</a></li>
                                </ul>
                            </li>
                            <li>
                                <h3>Pre??o</h3>
                                <ul>
                                    <li>
                                        <input type="radio" name="precoCelular" id="menor" onClick={console.log} />
                                        <label htmlFor="menor">at?? R$99</label>
                                    </li>
                                    <li>
                                        <input type="radio" name="precoCelular" id="medio" onClick={console.log}/>
                                        <label htmlFor="medio">entre R$99 e R$199</label>
                                    </li>
                                    <li>
                                        <input type="radio" name="precoCelular" id="maior" onClick={console.log}/>
                                        <label htmlFor="maior">de R$199 para cima</label>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <h3>Avalia????es</h3>
                                <ul>
                                    <li>
                                        <input type="checkbox" name="avaliacao" id="uma-duas" />
                                        <label for="uma-duas">entre 1 e 2 estrelas</label>
                                    </li>
                                    <li>
                                        <input type="checkbox" name="avaliacao" id="duas-tres" />
                                        <label for="duas-tres">entre 2 e 3 estrelas</label>
                                    </li>
                                    <li>
                                        <input type="checkbox" name="avaliacao" id="tres-quatro" />
                                        <label for="tres-quatro">entre 3 e 4 estrelas</label>
                                    </li>
                                    <li>
                                        <input type="checkbox" name="avaliacao" id="quatro-cinco" />
                                        <label for="quatro-cincos">entre 4 e 5 estrelas</label>
                                    </li>
                                </ul>

                            </li>
                            <li>
                                <h3>Localiza????o</h3>
                                <li>
                                    <input type="checkbox" name="localizacao" id="SP" />
                                    <label for="SP">S??o Paulo, SP</label>
                                </li>
                                <li>
                                    <input type="checkbox" name="localizacao" id="RJ" />
                                    <label for="RJ">Rio de Janeiro, RJ</label>
                                </li>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="container">
                    <div className="filtros">
                        {/* barra de filtros */}
                        <div className="titulo-filtro">
                            <h3>Categoria</h3>
                            <img src={linha} alt="" />
                        </div>

                        <ul>
                            <li className="botao-cat"><a onClick={() => {setProdutosExibidos("?category_like=Esporte e Lazer"); setCat("Esporte e Lazer")}}>Esporte e Lazer</a></li>
                            <li className="botao-cat"><a onClick={() => {setProdutosExibidos("?category_like=Moda"); setCat("Moda")} }>Moda</a></li>
                            <li className="botao-cat"><a onClick={() => {setProdutosExibidos("?category_like=Eletr??nicos"); setCat("Eletr??nicos")}}>Eletr??nicos</a></li>
                            <li className="botao-cat"><a onClick={() => {setProdutosExibidos("?category_like=Ferramentas e Utilit??rios"); setCat("Ferramentas e Utilit??rios")}}>Ferramentas e Utilit??rios</a></li>
                        </ul>

                        <div className="titulo-filtro">
                            <h3>Pre??o</h3>
                            <img src={linha} alt="" />
                        </div>
                        <ul className="preco">
                            <li>
                                <input type="radio" name="filtro" id="menor" onClick={() => {setProdutosExibidos("?preco_lte=99"); setCat("Produtos")}}/>
                                <label for="menor">at?? R$99</label>
                            </li>
                            <li>
                                <input type="radio" name="filtro" id="medio" onClick={() => {setProdutosExibidos("?preco_gte=100&preco_lte=199"); setCat("Produtos")}}/>
                                <label for="medio">entre R$99 e R$199</label>
                            </li>
                            <li>
                                <input type="radio" name="filtro" id="maior" onClick={() => {setProdutosExibidos("?preco_gte=200"); setCat("Produtos")}}/>
                                <label for="maior">de R$199 para cima</label>
                            </li>
                        </ul>

                        <div className="titulo-filtro">
                            <h3>Avalia????es</h3>
                            <img src={linha} alt="" />
                        </div>
                        <ul>
                            <li>
                                <input type="radio" name="filtro" id="uma-duas" value="1" onClick={() => {setProdutosExibidos("?avaliacao_gte=1&avaliacao_lte=2"); setCat("Produtos")}}/>
                                <label for="uma-duas">entre 1 e 2 estrelas</label>
                            </li>
                            <li>
                                <input type="radio" name="filtro" id="duas-tres" value="2" onClick={() => {setProdutosExibidos("?avaliacao_gte=2&avaliacao_lte=3"); setCat("Produtos")}}/>
                                <label for="duas-tres">entre 2 e 3 estrelas</label>
                            </li>
                            <li>
                                <input type="radio" name="filtro" id="tres-quatro" value="3" onClick={() => {setProdutosExibidos("?avaliacao_gte=3&avaliacao_lte=4"); setCat("Produtos")}}/>
                                <label for="tres-quatro">entre 3 e 4 estrelas</label>
                            </li>
                            <li>
                                <input type="radio" name="filtro" id="quatro-cinco" value="4" onClick={() => {setProdutosExibidos("?avaliacao_gte=4&avaliacao_lte=5"); setCat("Produtos")}}/>
                                <label for="quatro-cinco">entre 4 e 5 estrelas</label>
                            </li>
                        </ul>

                        <div className="titulo-filtro">
                            <h3>Localiza????o</h3>
                            <img src={linha} alt="" />
                        </div>
                        <ul>
                            <li>
                                <input type="radio" name="filtro" id="SP" onClick={() => {setLocaliz("S??o Paulo, SP")}}/>
                                <label for="SP">S??o Paulo, SP</label>
                            </li>
                            <li>
                                <input type="radio" name="filtro" id="RJ" onClick={() => {setLocaliz("Rio de Janeiro, RJ")}}/>
                                <label for="RJ">Rio de Janeiro, RJ</label>
                            </li>
                        </ul>
                    </div>
                    {/* lista dos produtos */}
                    <div className="lista-produtos">
                        <Cards produtosRequest={produtosExibidos} localizacao={localiz}/>
                        {/* {teste3 ? (
                            <Cards produtosRequest={produtosExibidos} />
                        ) : (
                            <Cards produtosRequest={false} category={cat} />
                        )} */}
                    </div>
                </div>

                <div className="container container-fim">
                    <div className="pagination">
                        <ul>
                            <li><a href="#"><img src={dropdown} alt="pr??xima p??gina" /></a></li>
                            {
                                links.map((numero) => (
                                    <li><a onClick={() => { setPaginaAcessada(numero)}} className={numero === paginaAcessada ? "ativo" : ""}>{numero}</a></li>
                            ))}
                            <li><a href="#"><img src={dropdown} alt="pr??xima p??gina" /></a></li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    )

}

export default PaginaProdutosPorCat