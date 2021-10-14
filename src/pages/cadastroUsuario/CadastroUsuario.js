import './cadastroUsuario.css';

import HeaderSimples from '../../components/headerSimples/HeaderSimples';
import backgroundGreen from '../../img/imagens/bg.jpeg'
import iconeOlho from '../../img/icones/icone_olho.png'

function PaginaCadastroUsuario() {
    return (
        <div style={{ backgroundImage: `url(${backgroundGreen})` }}>
            <HeaderSimples />

            <CardCadastrese/>

        </div>
    )
}

function CardCadastrese() {
    return (
        <main className="container">

            <section className="card-cadastre-se">
                <h1>Crie sua conta na&nbsp;<span>aluga</span><span id="ki">Ki</span></h1>
                <form action="">
                    <label htmlFor="fullname">Nome completo</label><br />
                    <input type="text" id="fullname" name="fullname" placeholder="Nome Sobrenome" minLength="6"
                        required onKeyUp={() => {}} /><br />

                    <label htmlFor="email">E-mail</label><br />
                    <input type="email" id="email" name="email" placeholder="meuemail@email.com" required onKeyUp={() => {}} /><br />

                    <label htmlFor="pass">Senha</label><br />
                    <div className="input-icone">
                        <input type="password" id="pass" name="password" placeholder="Use no mínimo 8 caracteres"
                            minLength="8" maxLength="64" required onKeyUp={() => {}}/>
                        <img className="olho" src={iconeOlho} alt="Ícone olho" />
                    </div><br />

                    <ul className="erros"></ul>

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
    )
}

export default PaginaCadastroUsuario;