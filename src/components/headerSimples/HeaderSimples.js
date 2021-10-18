import './headerSimples.css';
import { useHistory } from "react-router-dom";

import logoAlugaki from '../../img/imagens/alugaKi-removebg-preview.png'
import iconeSetaEsquerda from '../../img/icones/seta.svg'

function HeaderSimples(){
    let history = useHistory();

    return(
        <header className="headerSimples">
            <div className="btn-header">
                <button onClick={() => {history.goBack()}}>
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