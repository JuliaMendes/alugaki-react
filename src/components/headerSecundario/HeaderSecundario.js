import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./headerSecundario.css";

import logoAlugaki from "../../img/imagens/alugaKi-removebg-preview.png";
import iconeUsuario from "../../img/icones/btn_login.png";
import lupa from "../../img/icones/lupa.png";

function HeaderSecundario() {
  const [menuAberto, setMenuAberto] = useState(false);
  const [buscaAtual, setBuscaAtual] = useState("");
  const [localizacaoAtual, setLocalizacaoAtual] = useState("");

  useEffect(() => {
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
                setLocalizacaoAtual(estado);
              });
          },
          function (error) {
            console.log(error);
          }
        );
      } else {
        alert("ops, não foi possível pegar a sua localização");
      }
  }, []);

  return (
    <header className="headerSecundario">
      <div className="container">
        <div className="logo-e-barra">
          <div className="logo">
            <Link to="/">
              <img src={logoAlugaki} alt="Logo alugaki" />
            </Link>
          </div>
          <div className="barra">
            <form>
              <input type="text" id="barra" name="barra" onChange={(e) => setBuscaAtual(e.target.value)} />
              <Link to={`/produtos-por-categoria?localizacao_like=${localizacaoAtual}&q=${buscaAtual}`}>
                <button className="lupa">
                  <img src={lupa} alt="Icone de lupa" />
                </button>
              </Link>
            </form>
          </div>
        </div>
        <div className="botoes">
          <Link to="/cadastro-produtos">
            <button>Anunciar</button>
          </Link>
          <div className="dropdown">
            <button
              onClick={(e) => {
                setMenuAberto(!menuAberto);
              }}
            >
              <img src={iconeUsuario} alt="Botao de Menu" />
            </button>
            <div
              className={`dropdown-menu ${
                menuAberto ? "" : "dropdown-menu-escondido"
              }`}
            >
              <ul>
                <li>
                  <Link to="/cadastro-usuario">Cadastre-se</Link>
                </li>
                <li>
                  <Link to="/login">Login</Link>
                </li>
                <li>
                  <Link to="/perfil-privado">Meu perfil</Link>
                </li>
                <li>
                  <Link to="/cadastro-produtos">Anunciar</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default HeaderSecundario;
