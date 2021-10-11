import './perfil-publico.css';

import Header from "../../components/header/Header"
import Footer from "../../components/footer/Footer"


function PaginaPerfilPublico() {
    return (
        <div>
            <Header />
            <Corpo/>
            <Footer />
        </div>
    )
}

function Corpo(){
    return(

        <body>

            <div class="container-flex">
                <section class="barra-lateral">
                    <div class="infos">
                        <h3>Nome</h3>
                        <img src="img/bolinha_perfil.png" alt="Foto de Perfil do Usuário" id="foto_perfil" />

                        <div class="estrelas">
                            <img src="img/Star 1.png" alt="Estrela de Avaliação" />
                            <img src="img/Star 1.png" alt="Estrela de Avaliação" />
                            <img src="img/Star 1.png" alt="Estrela de Avaliação" />
                            <img src="img/Star 1.png" alt="Estrela de Avaliação" />
                            <img src="img/Star 1.png" alt="Estrela de Avaliação" />
                        </div>

                        <img src="img/linha_cinza.png" alt="Linha horizontal" id="linha_cinza" />

                        <a href="https://api.whatsapp.com/send?phone=550">(xx) 9xxxx-xxxx</a>
                    </div>

                    <div class="filtros">
                        <div class="titulo-filtro">
                            <h3>Categoria</h3>
                            <img src="img/Line-azul.png" alt="" />
                        </div>
            
                        <ul>
                            <li><a href="produtos-por-cat.html">Esporte e Lazer</a></li>
                            <li><a href="produtos-por-cat.html">Moda</a></li>
                            <li><a href="produtos-por-cat.html">Eletrônicos</a></li>
                            <li><a href="produtos-por-cat.html">Ferramentas e Utilitários</a></li>
                        </ul>       
                    </div> 
                </section>

                <section class="conteudo">

                    <h2>Anúncios</h2>
                    <section class="anuncios">

                        <div class="card-produto">
                        </div>

                        <div class="card-produto">
                        </div>

                        <div class="card-produto">
                        </div>

                        <button onclick="setaAnuncio(this)"><img src="img/drop_down 1.png" alt="Seta - Ir para próximo anuncio" /></button>
                    
                    </section>
                    
                    <div class="botao-ver-mais">
                        <a href="produtos-por-cat.html"><span>ver mais</span><img src="./img/seta-direita.png" alt="botao ver mais" /></a>
                    </div>
            
                    <h2 id="titulo_avaliacao">Avaliações</h2>
                    <section class="avaliacoes">
                        <div class="seta_esquerda">
                            <button><img src="img/drop_down 1.png" alt="Seta - Ir para avaliação anterior" onclick="setaAvaliacaoEsquerda()" /></button>
                        </div>
                        <div class="card-avaliacao">
                            <div class="avaliador">
                                <img src="img/bolinha_perfil.png" alt="Foto de perfil do avaliador" id="perfil_avaliador" />
                                <div class="infos">
                                    <h3>Perfil 1</h3>
                                    <div class="estrelas">
                                        <img src="img/Star 1.png" alt="Estrela de Avaliação" />
                                        <img src="img/Star 1.png" alt="Estrela de Avaliação" />
                                        <img src="img/Star 1.png" alt="Estrela de Avaliação" />
                                        <img src="img/Star 1.png" alt="Estrela de Avaliação" />
                                        <img src="img/Star 1.png" alt="Estrela de Avaliação" />
                                    </div>
                                </div>
                            </div>
                            <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam hendrerit nulla nec mollis venenatis. Donec  ornare. Nam sit amet arcu posuere, pulvinar dolor et, porta diam.“</p>
                            <div class="seletores">
                                <button><img src="img/seletor_cheio_avaliacao.png" alt="Seletor Avaliação" onclick="botaoAvaliacao(this)" /></button>
                                <button><img src="img/seletor_vazio_avaliacao.png" alt="Seletor Avaliação" onclick="botaoAvaliacao(this)" /></button>
                                <button><img src="img/seletor_vazio_avaliacao.png" alt="Seletor Avaliação" onclick="botaoAvaliacao(this)" /></button>
                                <button><img src="img/seletor_vazio_avaliacao.png" alt="Seletor Avaliação" onclick="botaoAvaliacao(this)" /></button>
                            </div>
                        </div>
                        <div class="seta_direita">
                            <button><img src="img/drop_down 1.png" alt="Seta - Ir para próxima avaliação" onclick="setaAvaliacaoDireita()" /></button>
                        </div>
                    </section>
                </section>

            </div>

        </body>
    )
}

export default PaginaPerfilPublico;
