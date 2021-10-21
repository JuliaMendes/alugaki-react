import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Helmet from "react-helmet";

import "./cadastroUsuario.css";

import HeaderSimples from "../../components/headerSimples/HeaderSimples";
import backgroundGreen from "../../img/imagens/bg.jpeg";
import iconeOlho from "../../img/icones/icone_olho.png";

function PaginaCadastroUsuario() {
  return (
    <div style={{ backgroundImage: `url(${backgroundGreen})` }}>
    <Helmet title="Crie sua conta | alugaKi" />
      <HeaderSimples />

      <CardCadastrese />
    </div>
  );
}

const erros = {
  nome_errado: {
    id: 1,
    texto: "O campo Nome completo deve conter no mínimo 6 caracteres.",
  },
  email_errado: {
    id: 2,
    texto: 'Insira um Email válido. Deve conter os caracteres "@" e "."',
  },
  password_errado: {
    id: 3,
    texto: "O campo Senha deve conter de 8 a 64 caracteres.",
  },
};

function CardCadastrese() {
  const [inputs, setInputs] = useState({
    email: {
      texto: "",
      virgem: true,
    },
    password: {
      texto: "",
      virgem: true,
    },
    fullName: {
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

  useEffect(() => {
    if (!inputs.fullName.virgem) {
      let novaLista = listaErros.lista;

      novaLista = validaFullName(novaLista);

      setListaErros({ ...listaErros, lista: novaLista });
    }
  }, [inputs.fullName]);

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

  function validaFullName(listaErros) {
    if (inputs.fullName.texto.length < 6) {
      if (!oErroJaEstaNaLista(erros.nome_errado)) {
        return [...listaErros, erros.nome_errado];
      }

      return listaErros;
    }

    return removeEsseErroDaLista(erros.nome_errado);
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
    erros = validaFullName(erros);

    if (erros.length === 0) {
      resultadoForm.formValido = true;
    }

    resultadoForm.lista = erros;

    setListaErros(resultadoForm);
  }

  return (
    <div className="cadastroUsuario">
      <main className="container">
        <section className="card-cadastre-se">
          <h1>
            Crie sua conta na&nbsp;<span>aluga</span>
            <span id="ki">Ki</span>
          </h1>
          <form action="">
            <label htmlFor="fullname">Nome completo</label>
            <br />
            <input
              className={`${
                oErroJaEstaNaLista(erros.nome_errado) ? "campo-com-erro" : ""
              }`}
              type="text"
              id="fullname"
              name="fullname"
              placeholder="Nome Sobrenome"
              minLength="6"
              value={inputs.fullName.texto}
              required
              onChange={(e) =>
                setInputs({
                  ...inputs,
                  fullName: {
                    texto: e.target.value,
                    virgem: false,
                  },
                })
              }
            />
            <br />

            <label htmlFor="email">E-mail</label>
            <br />
            <input
              className={`${
                oErroJaEstaNaLista(erros.email_errado) ? "campo-com-erro" : ""
              }`}
              type="email"
              id="email"
              name="email"
              placeholder="meuemail@email.com"
              value={inputs.email.texto}
              required
              onChange={(e) =>
                setInputs({
                  ...inputs,
                  email: {
                    texto: e.target.value,
                    virgem: false,
                  },
                })
              }
            />
            <br />

            <label htmlFor="pass">Senha</label>
            <br />
            <div
              className={`input-icone ${
                oErroJaEstaNaLista(erros.password_errado)
                  ? "campo-com-erro"
                  : ""
              }`}
            >
              <input
                type="password"
                id="pass"
                name="password"
                placeholder="Use no mínimo 8 caracteres"
                minLength="8"
                maxLength="64"
                value={inputs.password.texto}
                required
                onChange={(e) =>
                  setInputs({
                    ...inputs,
                    password: {
                      texto: e.target.value,
                      virgem: false,
                    },
                  })
                }
              />
              <img className="olho" src={iconeOlho} alt="Ícone olho" />
            </div>
            <br />

            <ul className="erros">
              {listaErros.lista.map((erro) => {
                return <li>{erro.texto}</li>;
              })}
            </ul>

            <hr />

            <div className="checkboxes">
              <input
                type="checkbox"
                id="novidades"
                name="novidades"
                value="novidades"
                defaultChecked
              />
              <label htmlFor="novidades">
                {" "}
                aceito receber novidades da alugaKi
              </label>
            </div>

            <div className="checkboxes">
              <input
                type="checkbox"
                id="termos"
                name="termos"
                value="termo"
                defaultChecked
                required
              />
              <label htmlFor="termos">
                {" "}
                estou de acordo com os <span>termos de serviços</span> e as{" "}
                <span>politicas de privacidade</span> da alugaKi
              </label>
            </div>

            <div className="btn-criar-conta">
              <button type="submit" onClick={validaFormulario}>
                Criar conta
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
              <button>Cadastre-se com o facebook</button>
            </a>
          </div>

          <div className="tem-cadastro">
            <h2>
              Já tem cadastro?<Link to="/login">Entrar</Link>
            </h2>
          </div>
        </section>
      </main>
    </div>
  );
}

export default PaginaCadastroUsuario;
