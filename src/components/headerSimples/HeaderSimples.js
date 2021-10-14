import './headerSimples.css';

import logoAlugaki from '../../img/imagens/alugaKi-removebg-preview.png'
import iconeSetaEsquerda from '../../img/icones/seta.svg'

function HeaderSimples(){
    return(
        <header className="headerSimples">
        <div className="btn-header">
            <button onClick={window.history.back}>
                <img src={iconeSetaEsquerda} alt="Seta voltar página"/><span>voltar</span>
            </button>
        </div>

        <a href="index.html" className="logo">
            <img src={logoAlugaki} alt="Logo alugaki"/>
        </a>
    </header>
    )
}

export default HeaderSimples;