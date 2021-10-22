import { useState } from 'react';

import star from "../../img/icones/star1.png"
import perfilImage from "../../img/icones/bolinha_perfil.png"
import dropDown2 from "../../img/icones/drop_down2.png"

function AvaliacaoListagemProduto(props) {

    const repeticoes = props.repeticoes;
    let avaliacoes = []
    let contador = 0

    while(contador < repeticoes){
        avaliacoes.push(
            <div className="card-avaliacao">
                <div className="avaliador">
                    <img src={perfilImage} alt="Foto de perfil do avaliador" className="perfil_avaliador" />
                    <div className="infos">
                        <h3>Perfil {contador+1}</h3>
                            <div className="estrelas">
                                <img src={star} alt="Estrela de Avaliação" />
                                <img src={star} alt="Estrela de Avaliação" />
                                <img src={star} alt="Estrela de Avaliação" />
                                <img src={star} alt="Estrela de Avaliação" />
                                <img src={star} alt="Estrela de Avaliação" />
                            </div>
                        <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam hendrerit nulla nec mollis venenatis. Donec  ornare. Nam sit amet arcu posuere, pulvinar dolor et, porta diam.“</p>
                    </div>
                </div>
            </div>
        )
        contador += 1;
    }

    return(
        <>
        {avaliacoes.map(item => {
            return item
        })}
        </>
    )
}

export default AvaliacaoListagemProduto