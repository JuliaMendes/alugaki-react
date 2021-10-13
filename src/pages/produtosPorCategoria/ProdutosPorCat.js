import HeaderSecundario from "../../components/headerSecundario/HeaderSecundario"
import Footer from "../../components/footer/Footer"
import './produtosPorCat.css';
import linha from "../../img/icones/Line-azul.png"
import dropdown from "../../img/icones/drop_down1.png"

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
    return (
        <section class="produtos">
            {/* categoria de produtos */}
            <div class="titulo">
                <h1>Categoria</h1>
            </div>
            <div class="dropdown" data-dropdown>
                <button class="menu-filtros" data-dropdown-button >filtros</button>
                <div class="dropdown-menu">
                    <ul>
                        <li>
                            <h3>Categoria</h3>
                            <ul>
                                <li class="botao-cat"><a href="#">Esporte e Lazer</a></li>
                                <li class="botao-cat"><a href="#">Moda</a></li>
                                <li class="botao-cat"><a href="#">Eletrônicos</a></li>
                                <li class="botao-cat"><a href="#">Ferramentas e Utilitários</a></li>
                            </ul>
                        </li>
                        <li>
                            <h3>Preço</h3>
                            <ul>
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
            <div class="container">
                <div class="filtros">
                    {/* barra de filtros */}
                    <div class="titulo-filtro">
                        <h3>Categoria</h3>
                        <img src={linha} alt="" />
                    </div>

                    <ul>
                        <li class="botao-cat"><a href="#">Esporte e Lazer</a></li>
                        <li class="botao-cat"><a href="#">Moda</a></li>
                        <li class="botao-cat"><a href="#">Eletrônicos</a></li>
                        <li class="botao-cat"><a href="#">Ferramentas e Utilitários</a></li>
                    </ul>

                    <div class="titulo-filtro">
                        <h3>Preço</h3>
                        <img src={linha} alt="" />
                    </div>
                    <ul class="preco">
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

                    <div class="titulo-filtro">
                        <h3>Avaliações</h3>
                        <img src={linha} alt="" />
                    </div>
                    <ul>
                        <li>
                            <input type="checkbox" name="avaliacao" id="uma-duas" value="1" />
                            <label for="uma-duas">entre 1 e 2 estrelas</label>
                        </li>
                        <li>
                            <input type="checkbox" name="avaliacao" id="duas-tres" value="2" />
                            <label for="duas-tres">entre 2 e 3 estrelas</label>
                        </li>
                        <li>
                            <input type="checkbox" name="avaliacao" id="tres-quatro" value="3" />
                            <label for="tres-quatro">entre 3 e 4 estrelas</label>
                        </li>
                        <li>
                            <input type="checkbox" name="avaliacao" id="quatro-cinco" value="4" />
                            <label for="quatro-cinco">entre 4 e 5 estrelas</label>
                        </li>
                    </ul>

                    <div class="titulo-filtro">
                        <h3>Localização</h3>
                        <img src={linha} alt="" />
                    </div>
                    <ul>
                        <li>
                            <input type="checkbox" name="localizacao" id="SP" />
                            <label for="SP">São Paulo, SP</label>
                        </li>
                        <li>
                            <input type="checkbox" name="localizacao" id="RJ" />
                            <label for="RJ">Rio de Janeiro, RJ</label>
                        </li>
                    </ul>
                </div>
                {/* lista dos produtos */}
                <div class="lista-produtos">
                    {/* <div class="card-produto">
                    <div class="thumb">
                        <a href="listagem-prod.html"><img src="img/barraca.jpg" alt="Barraca de camping"></a>
                    </div>
                    <div class="info">
                        <h3>Nome do produto</h3>
                        <div>
                            <img src="img/Star 1.png" alt="">
                            <div>
                                <small>4,8</small>
                                <small style="color: #757575;">• 750 avaliações</small>
                            </div>
                        </div>
                        <div class="localiz">
                            <img src="img/location.png" alt="">
                            <small style="color: #757575;">São Paulo, SP</small>
                        </div>
                        <h3 class="preco">R$preço /dia</h3>
                    </div>
                </div> */}
                </div>
            </div>

            <div class="container container-fim">
                <div class="pagination">
                    <ul>
                        <li><a href="#"><img src={dropdown} alt="próxima página" /></a></li>
                        <li><a href="#" class="ativo">1</a></li>
                        <li><a href="#">2</a></li>
                        <li>...</li>
                        <li><a href="#">n</a></li>
                        <li><a href="#"><img src={dropdown} alt="próxima página" /></a></li>
                    </ul>
                </div>
            </div>
        </section>

    )

}

export default PaginaProdutosPorCat