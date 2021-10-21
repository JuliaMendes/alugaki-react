import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import apiProdutos from "../../services/apiProdutos";
import HeaderSecundario from "../../components/headerSecundario/HeaderSecundario"
import Footer from "../../components/footer/Footer"
import './produtosPorCat.css';
import linha from "../../img/icones/Line-azul.png"
import dropdown from "../../img/icones/drop_down1.png"
import Cards from "../../components/produtosProdPorCat/Cards"


function PaginaProdutosPorCat() {
    return (
        <div>
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
                                    <li className="botao-cat"><a href="#">Eletrônicos</a></li>
                                    <li className="botao-cat"><a href="#">Ferramentas e Utilitários</a></li>
                                </ul>
                            </li>
                            <li>
                                <h3>Preço</h3>
                                <ul>
                                    <li>
                                        <input type="radio" name="precoCelular" id="menor" onClick={console.log} />
                                        <label htmlFor="menor">até R$99</label>
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
                                <h3>Avaliações</h3>
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
                                <h3>Localização</h3>
                                <li>
                                    <input type="checkbox" name="localizacao" id="SP" />
                                    <label for="SP">São Paulo, SP</label>
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
                            {/* <li className="botao-cat"><a href="#" onClick={() => { setCat("Esporte e Lazer")}}>Esporte e Lazer</a></li> */}
                            <li className="botao-cat"><a href="#" onClick={() => {setProdutosExibidos("?category_like=Esporte e Lazer")}}>Esporte e Lazer</a></li>
                            <li className="botao-cat"><a href="#" onClick={() => {setProdutosExibidos("?category_like=Moda")}}>Moda</a></li>
                            <li className="botao-cat"><a href="#" onClick={() => {setProdutosExibidos("?category_like=Eletrônicos")}}>Eletrônicos</a></li>
                            <li className="botao-cat"><a href="#" onClick={() => {setProdutosExibidos("?category_like=Ferramentas e Utilitários")}}>Ferramentas e Utilitários</a></li>
                        </ul>

                        <div className="titulo-filtro">
                            <h3>Preço</h3>
                            <img src={linha} alt="" />
                        </div>
                        <ul className="preco">
                            <li>
                                <input type="radio" name="preco" id="menor" />
                                <label for="menor">até R$99</label>
                            </li>
                            <li>
                                <input type="radio" name="preco" id="medio" />
                                <label for="medio">entre R$99 e R$199</label>
                            </li>
                            <li>
                                <input type="radio" name="preco" id="maior" />
                                <label for="maior">de R$199 para cima</label>
                            </li>
                        </ul>

                        <div className="titulo-filtro">
                            <h3>Avaliações</h3>
                            <img src={linha} alt="" />
                        </div>
                        <ul>
                            <li>
                                <input type="radio" name="avaliacao" id="uma-duas" value="1" />
                                <label for="uma-duas">entre 1 e 2 estrelas</label>
                            </li>
                            <li>
                                <input type="radio" name="avaliacao" id="duas-tres" value="2" />
                                <label for="duas-tres">entre 2 e 3 estrelas</label>
                            </li>
                            <li>
                                <input type="radio" name="avaliacao" id="tres-quatro" value="3" />
                                <label for="tres-quatro">entre 3 e 4 estrelas</label>
                            </li>
                            <li>
                                <input type="radio" name="avaliacao" id="quatro-cinco" value="4" />
                                <label for="quatro-cinco">entre 4 e 5 estrelas</label>
                            </li>
                        </ul>

                        <div className="titulo-filtro">
                            <h3>Localização</h3>
                            <img src={linha} alt="" />
                        </div>
                        <ul>
                            <li>
                                <input type="radio" name="localizacao" id="SP" onClick={() => {setProdutosExibidos("?localizacao=São Paulo, SP")}}/>
                                <label for="SP">São Paulo, SP</label>
                            </li>
                            <li>
                                <input type="radio" name="localizacao" id="RJ" onClick={() => {setProdutosExibidos("?localizacao=Rio de Janeiro, RJ")}}/>
                                <label for="RJ">Rio de Janeiro, RJ</label>
                            </li>
                        </ul>
                    </div>
                    {/* lista dos produtos */}
                    <div className="lista-produtos">
                        <Cards produtosRequest={produtosExibidos} />
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
                            <li><a href="#"><img src={dropdown} alt="próxima página" /></a></li>
                            {
                                links.map((numero) => (
                                    <li><a onClick={() => { setPaginaAcessada(numero)}} className={numero === paginaAcessada ? "ativo" : ""}>{numero}</a></li>
                            ))}
                            <li><a href="#"><img src={dropdown} alt="próxima página" /></a></li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    )

}

export default PaginaProdutosPorCat