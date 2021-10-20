import { useState, useEffect } from 'react';
import apiProdutos from "../../services/apiProdutos";
import { useParams } from 'react-router-dom';

import perfilBlank from "../../img/icones/bolinha_perfil.png"
import linhaCinza from "../../img/icones/linha_cinza.png"
import Star from "../../img/icones/star1.png"

function BarraPerfilPublico() {

    const {user = 9} = useParams()
    const [profile, setProfile]  = useState({})
    const [showProfile, setShowProfile] = useState(false)

    useEffect(() => {
        setShowProfile(true)
    }, [profile])

    useEffect(() => {
        apiProdutos.get(`/users/${user}`)
            .then(response => response.data)
            .then(response => {
                setProfile(response)})
            .catch(error => window.alert("Usuário não encontrado."))
    }, [user])
    
    return(
        <div className="infos">
            {!showProfile &&
                (
                    <>
                        <h3>Nome</h3>
                        <img src={perfilBlank} alt="Foto de Perfil do Usuário" id="foto_perfil" />
                
                        <div className="estrelas">
                            <img src={Star} alt="Estrela de Avaliação" />
                            <img src={Star} alt="Estrela de Avaliação" />
                            <img src={Star} alt="Estrela de Avaliação" />
                            <img src={Star} alt="Estrela de Avaliação" />
                            <img src={Star} alt="Estrela de Avaliação" />
                        </div>
                
                        <img src={linhaCinza} alt="Linha horizontal" id="linha_cinza" />
                
                        <a href="https://api.whatsapp.com/send?phone=550">(xx) xxxxx-xxxx</a>
                    </>
                )
            }
            {showProfile &&
                (
                    <>
                        <h3>{profile.nome}</h3>
                        <img src={profile.img} alt="Foto de Perfil do Usuário" id="foto_perfil" />

                        <div className="estrelas">
                            <img src={Star} alt="Estrela de Avaliação" />
                            <img src={Star} alt="Estrela de Avaliação" />
                            <img src={Star} alt="Estrela de Avaliação" />
                            <img src={Star} alt="Estrela de Avaliação" />
                            <img src={Star} alt="Estrela de Avaliação" />
                        </div>

                        <img src={linhaCinza} alt="Linha horizontal" id="linha_cinza" />

                        <a href="https://api.whatsapp.com/send?phone=550">{profile.telefone}</a>
                    </>
                )
            }
        </div>
    )
}

export default BarraPerfilPublico