import Header from "../../components/header/Header"
import Footer from "../../components/footer/Footer"
import './paginaInicial.css';

import iconeLupa from '../../img/icones/search.png'
import iconeSetaDireita from '../../img/icones/seta-direita.png'
import backgroundGreen from '../../img/imagens/bg.jpeg'
import backgroundBannerVioloes from '../../img/imagens/banner-violao.jpeg'

function PaginaInicial() {
    return (
        <div>
            <Header />

            <PartePrincipal />

            <ProdutosPorCategoria />

            <BannerExperimenteAnunciar />

            <Footer />

        </div>
    )
}

function PartePrincipal() {
    return (
        <body className="paginaInicial">
            <section style={{ backgroundImage: `url(${backgroundGreen})` }} className="parte-principal">
                <div className="container">
                    <div className="frase-principal">
                        <h1>Use. Alugue. Reuse.</h1>
                    </div>

                    <div className="barra-de-pesquisa">
                        <div className="barra">
                            <div className="opt-localizacao">
                                <select name="localizacao" id="localizacao">
                                    <option selected disabled value="">Localização</option>
                                    <option value="Rio de Janeiro">Rio de Janeiro</option>
                                    <option value="São Paulo">São Paulo</option>
                                </select>
                            </div>

                            <div className="opt-categoria">
                                <select name="categoria" id="categoria">
                                    <option selected disabled value="">Categoria</option>
                                    <option value="Esporte e Lazer">Esporte e Lazer</option>
                                    <option value="Moda">Moda</option>
                                    <option value="Eletrônicos">Eletrônicos</option>
                                    <option value="Ferramentas e Utilitários">Ferramentas e Utilitários</option>
                                </select>
                            </div>

                            <div className="pesquisar-produto">
                                <input type="text" name="produto" id="produto" placeholder="O que você está procurando?" />
                                <div className="lupa">
                                    <button onClick="busca()"><img src={iconeLupa} alt="Botao de lupa" /></button>
                                </div>
                            </div>
                        </div>
                        {/* <div className="pesquisar-produto-mobile">
                            <input type="text" name="produto" id="produto-mobile" placeholder="O que você está procurando?" />
                            <div className="lupa">
                                <button onclick="buscaMobile()" ><img src={"img/search.png"} alt="Botao de lupa" /></button>
                            </div>
                        </div> */}

                    </div>
                </div>
            </section>
        </body>
    )
}


function ProdutosPorCategoria() {
    return (
        <body className="paginaInicial">
            <section className="produtos-por-categoria">
                <div className="container">
                    <div className="botoes-categoria">
                        <button className="ativo">Esporte e Lazer</button><span>|</span>
                        <button>Moda</button><span>|</span>
                        <button>Eletrônicos</button><span>|</span>
                        <button>Ferramentas e Utilitários</button>
                    </div>
                    <div className="lista-produtos"></div>
                    <div className="botao-ver-mais">
                        <a href="produtos-por-cat.html"><span>ver mais</span><img src={iconeSetaDireita}
                            alt="botao ver mais" /></a>
                    </div>
                </div>
            </section>
        </body>

    )
}

function BannerExperimenteAnunciar() {
    return (
        <body className="paginaInicial">
            <section style={{ backgroundImage: `url(${backgroundBannerVioloes})` }} className="banner-anunciar">
                <div className="gradient">
                    <div className="container">
                        <div className="frase-banner">
                            <h2>Experimente anunciar</h2>
                        </div>
                        <div className="botao-saiba-mais">
                            <a href="cadastro-produto.html"><button>Saiba mais</button></a>
                        </div>
                    </div>
                </div>
            </section>
        </body>
    )
}

export default PaginaInicial;