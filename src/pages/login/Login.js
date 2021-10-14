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

function CardLogin() {
    return (
        <body className="paginaLogin">
            <main className="container">

                <section className="card-login">
                    <h1>Faça login na&nbsp;<span>aluga</span><span id="ki">Ki</span></h1>

                    <form>
                        <label htmlFor="email">E-mail</label><br />
                        <input type="email" id="email" name="email" placeholder="meuemail@email.com" required onKeyUp={() => {}} /><br />

                        <label htmlFor="pass">Senha</label><br />
                        <div className="input-icone">
                            <input type="password" id="pass" name="password" minLength="8" maxLength="64" required onKeyUp={() => {}} />
                            <img className="olho" src={iconeOlho} alt="Ícone olho" />

                            <div className="esqueci-senha">
                                <a href="#">Esqueci a senha</a>
                            </div>

                            <ul className="erros"></ul>
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