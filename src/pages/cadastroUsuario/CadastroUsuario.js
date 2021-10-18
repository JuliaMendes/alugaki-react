import { useState, useEffect } from 'react';

import './cadastroUsuario.css';

import HeaderSimples from '../../components/headerSimples/HeaderSimples';
import backgroundGreen from '../../img/imagens/bg.jpeg'
import iconeOlho from '../../img/icones/icone_olho.png'

function PaginaCadastroUsuario() {
    return (
        <div style={{ backgroundImage: `url(${backgroundGreen})` }}>
            <HeaderSimples />

            <CardCadastrese />
        </div>
    )
}

const erros = {
    nome_errado: {
        id: 1,
        texto: 'O campo Nome completo deve conter no mínimo 6 caracteres.'
    },
    email_errado: {
        id: 2,
        texto: 'Insira um Email válido. Deve conter os caracteres "@" e "."'
    },
    password_errado: {
        id: 3,
        texto: 'O campo Senha deve conter de 8 a 64 caracteres.'
    }
}



function CardCadastrese() {
    const [fullName, setFullName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const [listaErros, setListaErros] = useState([])

    useEffect(() => {
        if (fullName && fullName.length < 6) {
            const estaNaLista = oErroJaEstaNaLista(erros.nome_errado);
            if (!estaNaLista) {
                setListaErros([...listaErros, erros.nome_errado])
            }
        } else {
            setListaErros(removeEsseErroDaLista(erros.nome_errado))

        }
    }, [fullName])

    useEffect(() => {
        if (email && (!email.includes('@') || !email.includes('.'))) {

            const estaNaLista = oErroJaEstaNaLista(erros.email_errado)

            if (!estaNaLista) {
                setListaErros([...listaErros, erros.email_errado])
            }


        } else {
            setListaErros(removeEsseErroDaLista(erros.email_errado))


        }

    }, [email])


    useEffect(() => {
        if (password && (password.length < 8 || password.length > 64)) {
            const estaNaLista = oErroJaEstaNaLista(erros.password_errado);

            if (!estaNaLista) {
                setListaErros([...listaErros, erros.password_errado])
            }



        } else {
            setListaErros(removeEsseErroDaLista(erros.password_errado))

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
        <body className="cadastroUsuario">
            <main className="container">

                <section className="card-cadastre-se">
                    <h1>Crie sua conta na&nbsp;<span>aluga</span><span id="ki">Ki</span></h1>
                    <form action="">
                        <label htmlFor="fullname">Nome completo</label><br />
                        <input className={`${oErroJaEstaNaLista(erros.nome_errado) ? 'campo-com-erro' : ''}`} type="text" id="fullname" name="fullname" placeholder="Nome Sobrenome" minLength="6" value={fullName}
                            required onChange={(e) => { setFullName(e.target.value) }} /><br />

                        <label htmlFor="email">E-mail</label><br />
                        <input className={`${oErroJaEstaNaLista(erros.email_errado) ? 'campo-com-erro' : ''}`} type="email" id="email" name="email" placeholder="meuemail@email.com" value={email} required onChange={(e) => { setEmail(e.target.value) }} /><br />

                        <label htmlFor="pass">Senha</label><br />
                        <div className={`input-icone ${oErroJaEstaNaLista(erros.password_errado) ? 'campo-com-erro' : ''}`}>
                            <input type="password" id="pass" name="password" placeholder="Use no mínimo 8 caracteres"
                                minLength="8" maxLength="64" value={password} required onChange={(e) => { setPassword(e.target.value) }} />
                            <img className="olho" src={iconeOlho} alt="Ícone olho" />
                        </div><br />

                        <ul className="erros">
                            {listaErros.map((erro) => {
                                return (<li>{erro.texto}</li>)
                            })}
                        </ul>

                        <hr />

                        <div className="checkboxes">
                            <input type="checkbox" id="novidades" name="novidades" value="novidades" defaultChecked />
                            <label htmlFor="novidades"> aceito receber novidades da alugaKi</label>
                        </div>

                        <div className="checkboxes">
                            <input type="checkbox" id="termos" name="termos" value="termo" defaultChecked required />
                            <label htmlFor="termos"> estou de acordo com os <span>termos de serviços</span> e as <span>politicas de
                                privacidade</span> da
                                alugaKi</label>
                        </div>

                        <div className="btn-criar-conta">
                            <button type="submit">Criar conta</button>
                        </div>

                    </form>

                    <div className="line">
                        <hr />
                        <span>ou</span>
                        <hr />
                    </div>

                    <div className="btn-facebook">
                        <a href="https://www.facebook.com/"><button>Cadastre-se com o facebook</button></a>
                    </div>

                    <div className="tem-cadastro">
                        <h2>Já tem cadastro? <a href="login.html">Entrar</a></h2>
                    </div>
                </section>

            </main>
        </body>
    )
}

export default PaginaCadastroUsuario;