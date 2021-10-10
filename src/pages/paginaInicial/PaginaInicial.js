import Header from "../../components/header/Header"
import Footer from "../../components/footer/Footer"
import './paginaInicial.css';

import iconeLupa from '../../img/icones/search.png'
import backgroundGreen from '../../img/imagens/bg.jpeg'

function PaginaInicial(){
    return(
        <div>
        <Header/>

        <PartePrincipal/>

        <Footer/>

        </div>
    )
}

function PartePrincipal() {
    return(
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
                            <input type="text" name="produto" id="produto" placeholder="O que você está procurando?"/>
                            <div className="lupa">
                                <button onclick="busca()"><img src={iconeLupa} alt="Botao de lupa"/></button>
                            </div>
                        </div>
                    </div>
                    <div className="pesquisar-produto-mobile">
                        <input type="text" name="produto" id="produto-mobile" placeholder="O que você está procurando?"/>
                        <div className="lupa">
                            <button onclick="buscaMobile()" ><img src="img/search.png" alt="Botao de lupa"/></button>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default PaginaInicial;