import { useState, useEffect } from 'react';
import apiProdutos from "../../services/apiProdutos";

import perfilBlank from "../../img/icones/bolinha_perfil.png"
import linhaCinza from "../../img/icones/linha_cinza.png"
import star from "../../img/icones/star1.png"

function BarraPerfilPublico(props) {

    const user = props.userID
    const [profile, setProfile]  = useState({})
    const [showProfile, setShowProfile] = useState(false)

    let numero = "55"

    useEffect(() => {
        setShowProfile(true)
    }, [profile])

    useEffect(() => {
        apiProdutos.get(`/users/${user}`)
            .then(response => response.data)
            .then(response => {
                setProfile(response)})
            .catch(error => {
                window.alert("Usuário não encontrado.")
                setShowProfile(false)
            })
    }, [user])
    
    if(showProfile == true){
        try{
            for(let i=0; i < profile.telefone.length; i++){
                if(profile.telefone[i]!=' ' && profile.telefone[i]!='-'){
                    numero += profile.telefone[i]
                }
            }
        }
        catch(error){
            numero="55"
        }
    }


    return(
        <div className="infos">
            {!showProfile &&
                (
                    <>
                        <h3>Nome</h3>
                        <img src={perfilBlank} alt="Foto de Perfil do Usuário" id="foto_perfil" />
                
                        <div className="estrelas">
                            <img src={star} alt="" />
                            <small>Avaliação</small>
                            <small style={{ color: '#757575' }}>•  avaliações</small>
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
                        <img src={"/" + profile.img} alt="Foto de Perfil do Usuário" id="foto_perfil" />

                        <div className="estrelas">
                            <img src={star} alt="" />
                            <small>{profile.avaliacao}</small>
                            <small style={{ color: '#757575' }}>• {profile.navaliacao} avaliações</small>
                        </div>

                        <img src={linhaCinza} alt="Linha horizontal" id="linha_cinza" />

                        <a href={`https://api.whatsapp.com/send?phone=${numero}`}>{profile.telefone}</a>
                    </>
                )
            }
        </div>
    )
}

export default BarraPerfilPublico