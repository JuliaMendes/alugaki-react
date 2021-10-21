import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Helmet from "react-helmet";

import "./login.css";

import HeaderSimples from "../../components/headerSimples/HeaderSimples";
import backgroundGreen from "../../img/imagens/bg.jpeg";
import iconeOlho from "../../img/icones/icone_olho.png";

function PaginaLogin() {
  return (
    <div style={{ backgroundImage: `url(${backgroundGreen})` }}>
      <Helmet title="Faça login | alugaKi" />
      <HeaderSimples />

      <CardLogin />
    </div>
  );
}

const erros = {
  email_errado: {
    id: 1,
    texto: 'Insira um Email válido. Deve conter os caracteres "@" e "."',
  },
  password_errado: {
    id: 2,
    texto: "O campo Senha deve conter de 8 a 64 caracteres.",
  },
};

function CardLogin() {
  const [inputs, setInputs] = useState({
    email: {
      texto: "",
      virgem: true,
    },
    password: {
      texto: "",
      virgem: true,
    },
  });
  const [listaErros, setListaErros] = useState({
    lista: [],
    formValido: false,
  });

  useEffect(() => {
    if (listaErros.formValido) {
      console.log("Foi submitado");
    }
  }, [listaErros.formValido]);

  useEffect(() => {
    if (!inputs.email.virgem) {
      let novaLista = listaErros.lista;

      novaLista = validaEmail(novaLista);

      setListaErros({ ...listaErros, lista: novaLista });
    }
  }, [inputs.email]);

  useEffect(() => {
    if (!inputs.password.virgem) {
      let novaLista = listaErros.lista;

      novaLista = validaPassword(novaLista);

      setListaErros({ ...listaErros, lista: novaLista });
    }
  }, [inputs.password]);

  function validaPassword(listaErros) {
    if (inputs.password.texto.length < 8 || inputs.password.texto.length > 64) {
      if (!oErroJaEstaNaLista(erros.password_errado)) {
        return [...listaErros, erros.password_errado];
      }

      return listaErros;
    }

    return removeEsseErroDaLista(erros.password_errado);
  }

  function validaEmail(listaErros) {
    if (
      !inputs.email.texto.includes("@") ||
      !inputs.email.texto.includes(".")
    ) {
      if (!oErroJaEstaNaLista(erros.email_errado)) {
        return [...listaErros, erros.email_errado];
      }

      return listaErros;
    }

    return removeEsseErroDaLista(erros.email_errado);
  }

  function oErroJaEstaNaLista(erro) {
    const achou = listaErros.lista.find((elemento) => {
      return elemento.id === erro.id;
    });

    return achou;
  }

  function removeEsseErroDaLista(erro) {
    const listaExcluida = listaErros.lista.filter((elemento) => {
      return elemento.id !== erro.id;
    });

    return listaExcluida;
  }

  function validaFormulario(evento) {
    evento.preventDefault();

    const resultadoForm = { ...listaErros };
    let erros = resultadoForm.lista;

    erros = validaPassword(erros);
    erros = validaEmail(erros);

    if (erros.length === 0) {
      resultadoForm.formValido = true;
    }

    resultadoForm.lista = erros;

    setListaErros(resultadoForm);
  }

  return (
    <div className="paginaLogin">
      <main className="container">
        <section className="card-login">
          <h1>
            Faça login na&nbsp;<span>aluga</span>
            <span id="ki">Ki</span>
          </h1>
          <form>
            <label htmlFor="email">E-mail</label>
            <br />
            <input
              type="email"
              id="email"
              name="email"
              placeholder="meuemail@email.com"
              className={`${
                oErroJaEstaNaLista(erros.email_errado) ? "campo-com-erro" : ""
              }`}
              value={inputs.email.texto}
              onChange={(e) =>
                setInputs({
                  ...inputs,
                  email: {
                    texto: e.target.value,
                    virgem: false,
                  },
                })
              }
              required
            />
            <br />
            <label htmlFor="pass">Senha</label>
            <br />
            <div className="input-icone">
              <input
                type="password"
                id="pass"
                name="password"
                minLength="8"
                maxLength="64"
                className={`${
                  oErroJaEstaNaLista(erros.password_errado)
                    ? "campo-com-erro"
                    : ""
                }`}
                value={inputs.password.texto}
                onChange={(e) =>
                  setInputs({
                    ...inputs,
                    password: {
                      texto: e.target.value,
                      virgem: false,
                    },
                  })
                }
                required
              />
              <img className="olho" src={iconeOlho} alt="Ícone olho" />
              <div className="esqueci-senha">
                <Link to="#">Esqueci a senha</Link>
              </div>
              <ul className="erros">
                {listaErros.lista.map((erro) => {
                  return <li>{erro.texto}</li>;
                })}
              </ul>
            </div>
            <div className="btn-continuar">
              <button type="submit" onClick={validaFormulario}>
                Continuar
              </button>
            </div>
          </form>
          <div className="line">
            <hr />
            <span>ou</span>
            <hr />
          </div>
          <div className="btn-facebook">
            <a href="https://www.facebook.com/">
              <button>Continuar com o facebook</button>
            </a>
          </div>
          <div className="tem-cadastro">
            <h2>Não tem cadastro?</h2>
            <Link to="/cadastro-usuario">Cadastre-se</Link>
          </div>
        </section>
      </main>
    </div>
  );
}

export default PaginaLogin;
