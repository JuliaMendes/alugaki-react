import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import "./paginaInicial.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import iconeLupa from "../../img/icones/search.png";
import iconeSetaDireita from "../../img/icones/seta-direita.png";
import backgroundGreen from "../../img/imagens/bg.jpeg";
import backgroundBannerVioloes from "../../img/imagens/banner-violao.jpeg";
import estrela from "../../img/icones/star1.png";
import localizacao from "../../img/icones/location.png";

function PaginaInicial() {
  return (
    <div>
      <Header />

      <PartePrincipal />

      <ProdutosPorCategoria />

      <BannerExperimenteAnunciar />

      <Footer />
    </div>
  );
}

function PartePrincipal() {
  const [categoriaAtual, setCategoriaAtual] = useState("");
  const [localizacaoAtual, setLocalizacaoAtual] = useState("");
  const [buscaAtual, setBuscaAtual] = useState("");


  useEffect(() => {
    if (window.screen.width < 768) {
      if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(
          function (position) {
            console.log(position);
            let latitude = position.coords.latitude;
            console.log(latitude);
            let longitude = position.coords.longitude;

            fetch(
              `https://geolocation.contrateumdev.com.br/api/geocode?lat=${latitude}7&lon=${longitude}`
            )
              .then((response) => response.json())
              .then((data) => {
                let estado = data.address.state;
                console.log(estado);
              });
          },
          function (error) {
            console.log(error);
          }
        );
      } else {
        alert("ops, não foi possível pegar a sua localização");
      }
    }
  }, []);

  return (
    <body className="paginaInicial">
      <section
        style={{ backgroundImage: `url(${backgroundGreen})` }}
        className="parte-principal"
      >
        <div className="container">
          <div className="frase-principal">
            <h1>Use. Alugue. Reuse.</h1>
          </div>

          <div className="barra-de-pesquisa">
            <div className="barra">
              <div className="opt-localizacao">
                <select onChange={(e) =>
                    setLocalizacaoAtual(e.target.selectedOptions[0].value)
                  } name="localizacao" id="localizacao">
                  <option selected disabled value="">
                    Localização
                  </option>
                  <option value="Rio de Janeiro">Rio de Janeiro</option>
                  <option value="São Paulo">São Paulo</option>
                </select>
              </div>

              <div className="opt-categoria">
                <select
                  onChange={(e) =>
                    setCategoriaAtual(e.target.selectedOptions[0].value)
                  }
                  name="categoria"
                  id="categoria"
                >
                  <option selected disabled value="">
                    Categoria
                  </option>
                  <option value="Esporte e Lazer">Esporte e Lazer</option>
                  <option value="Moda">Moda</option>
                  <option value="Eletrônicos">Eletrônicos</option>
                  <option value="Ferramentas e Utilitários">
                    Ferramentas e Utilitários
                  </option>
                </select>
              </div>

              <div className="pesquisar-produto">
                <input onChange={(e) =>
                    setBuscaAtual(e.target.value)
                  }
                  type="text"
                  name="produto"
                  id="produto"
                  placeholder="O que você está procurando?"
                  value = {buscaAtual}
                />
                <div className="lupa">
                  <button>
                    <img src={iconeLupa} alt="Botao de lupa" />
                  </button>
                </div>
              </div>
            </div>
            <div className="pesquisar-produto-mobile">
              <input
                type="text"
                name="produto"
                id="produto-mobile"
                placeholder="O que você está procurando?"
              />
              <div className="lupa">
                <button onclick="buscaMobile()">
                  <img src={"img/search.png"} alt="Botao de lupa" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </body>
  );
}

function ProdutosPorCategoria() {
  const [categoriaAtual, setcategoriaAtual] = useState("Esporte e Lazer");
  const [produtosExibidos, setProdutosExibidos] = useState([]);

  function categoria(elemento) {
    return elemento.category === categoriaAtual;
  }

  useEffect(() => {
    buscaFiltrados();
  }, []);

  useEffect(() => {
    buscaFiltrados();
  }, [categoriaAtual]);

  function buscaFiltrados() {
    fetch(
      `https://raw.githubusercontent.com/JuliaMendes/alugaki-react/main/src/database/db.json`
    )
      .then((response) => response.json())
      .then((data) => {
        setProdutosExibidos(data.products.filter(categoria).slice(0, 4));
      });
  }

  return (
    <body className="paginaInicial">
      <section className="produtos-por-categoria">
        <div className="container">
          <div className="botoes-categoria">
            <button
              className={`${
                categoriaAtual === "Esporte e Lazer"
                  ? "botoes-categoria-selecionado"
                  : ""
              }`}
              onClick={(e) => {
                setcategoriaAtual(e.target.innerText);
              }}
            >
              Esporte e Lazer
            </button>
            <span>|</span>
            <button
              className={`${
                categoriaAtual === "Moda" ? "botoes-categoria-selecionado" : ""
              }`}
              onClick={(e) => {
                setcategoriaAtual(e.target.innerText);
              }}
            >
              Moda
            </button>
            <span>|</span>
            <button
              className={`${
                categoriaAtual === "Eletrônicos"
                  ? "botoes-categoria-selecionado"
                  : ""
              }`}
              onClick={(e) => {
                setcategoriaAtual(e.target.innerText);
              }}
            >
              Eletrônicos
            </button>
            <span>|</span>
            <button
              className={`${
                categoriaAtual === "Ferramentas e Utilitários"
                  ? "botoes-categoria-selecionado"
                  : ""
              }`}
              onClick={(e) => {
                setcategoriaAtual(e.target.innerText);
              }}
            >
              Ferramentas e Utilitários
            </button>
          </div>
          <div className="lista-produtos">
            {produtosExibidos.map((elemento) => {
              return (
                <div class="card-produto">
                  <div class="thumb">
                    <a href="listagem-prod.html">
                      <img src={elemento.img} alt={elemento.titulo} />
                    </a>
                  </div>
                  <div class="info">
                    <h3>{elemento.titulo}</h3>
                    <div>
                      <img src={estrela} alt="Ícone estrela" />
                      <div>
                        <small class="pontuacao">{elemento.avaliacao}</small>
                        <small>•{elemento.navaliacao} avaliações</small>
                      </div>
                    </div>
                    <div class="localiz">
                      <img src={localizacao} alt="ícone localização" />
                      <small>{elemento.localizacao}</small>
                    </div>
                    <h3 class="preco">R$ {elemento.preco}</h3>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="botao-ver-mais">
            <Link to="/produtos-por-categoria">
              <span>ver mais</span>
              <img src={iconeSetaDireita} alt="botao ver mais" />
            </Link>
          </div>
        </div>
      </section>
    </body>
  );
}

function BannerExperimenteAnunciar() {
  return (
    <body className="paginaInicial">
      <section
        style={{ backgroundImage: `url(${backgroundBannerVioloes})` }}
        className="banner-anunciar"
      >
        <div className="gradient">
          <div className="container">
            <div className="frase-banner">
              <h2>Experimente anunciar</h2>
            </div>
            <div className="botao-saiba-mais">
              <a href="cadastro-produto.html">
                <button>Saiba mais</button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </body>
  );
}

export default PaginaInicial;
