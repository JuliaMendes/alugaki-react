import { useState, useEffect } from 'react';

import './login.css';

import HeaderSimples from "../../components/headerSimples/HeaderSimples"
import backgroundGreen from '../../img/imagens/bg.jpeg'
import iconeOlho from '../../img/icones/icone_olho.png'

function PaginaLogin() {
    return (
        <div style={{ backgroundImage: `url(${backgroundGreen})` }}>
            <HeaderSimples />

            <CardLogin />
        </div>
    )
}

const erros = {
    email_errado: {
        id: 1,
        texto: 'Insira um Email válido. Deve conter os caracteres "@" e "."'
    },
    password_errado: {
        id: 2,
        texto: 'O campo Senha deve conter de 8 a 64 caracteres.'
    }
}

function CardLogin() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const [listaErros, setListaErros] = useState([])

    useEffect(() => {
        if (email && (!email.includes('@') || !email.includes('.'))) {

            const estaNaLista = oErroJaEstaNaLista(erros.email_errado)

            if (!estaNaLista) {
                setListaErros([...listaErros, erros.email_errado])
            }

            // inputEmail.style = 'border-color: #E64A19;'
        } else {
            setListaErros(removeEsseErroDaLista(erros.email_errado))

            // inputEmail.style = ''
        }

    }, [email])

    useEffect(() => {
        if (password && (password.length < 8 || password.length > 64)) {
            const estaNaLista = oErroJaEstaNaLista(erros.password_errado);

            if (!estaNaLista) {
                setListaErros([...listaErros, erros.password_errado])
            }

            // inputPassword.style = 'border-color: #E64A19;'

        } else {
            setListaErros(removeEsseErroDaLista(erros.password_errado))

            // inputPassword.style = ''
        }

    }, [password])

    function oErroJaEstaNaLista(erro) {
        const achou = listaErros.find((elemento) => {
            return elemento.id === erro.id;
        });

        return achou;
    }

    function removeEsseErroDaLista(erro) {
        const listaExcluida = listaErros.filter((elemento) => {
            return elemento.id !== erro.id;
        });

        return listaExcluida;
    }


    return (
        <body className="paginaLogin">
            <main className="container">

                <section className="card-login">
                    <h1>Faça login na&nbsp;<span>aluga</span><span id="ki">Ki</span></h1>

                    <form>
                        <label htmlFor="email">E-mail</label><br />
                        <input className={`${oErroJaEstaNaLista(erros.email_errado) ? 'campo-com-erro' : ''}`} type="email" id="email" name="email" placeholder="meuemail@email.com" value={email} required onChange={(e) => { setEmail(e.target.value) }} /><br />

                        <label htmlFor="pass">Senha</label><br />
                        <div className="input-icone">
                            <input className={`${oErroJaEstaNaLista(erros.password_errado) ? 'campo-com-erro' : ''}`} type="password" id="pass" name="password" minLength="8" maxLength="64" value={password} required onChange={(e) => { setPassword(e.target.value) }} />
                            <img className="olho" src={iconeOlho} alt="Ícone olho" />

                            <div className="esqueci-senha">
                                <a href="#">Esqueci a senha</a>
                            </div>

                            <ul className="erros">
                                {listaErros.map((erro) => {
                                    return (<li>{erro.texto}</li>)
                                })}
                            </ul>
                        </div>
                        <div className="btn-continuar">
                            <button type="submit">Continuar</button>
                        </div>
                    </form>

                    <div className="line">
                        <hr />
                        <span>ou</span>
                        <hr />
                    </div>

                    <div className="btn-facebook">
                        <a href="https://www.facebook.com/"><button>Continuar com o facebook</button></a>
                    </div>

                    <div className="tem-cadastro">
                        <h2>Não tem cadastro?</h2><a href="cadastro-usuario.html"> Cadastre-se</a>
                    </div>

                </section>

            </main>
        </body>
    )
}

export default PaginaLogin;