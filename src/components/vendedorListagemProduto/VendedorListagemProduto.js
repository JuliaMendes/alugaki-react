import { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';

import apiProdutos from "../../services/apiProdutos";

import star from "../../img/icones/star1.png"
import local from "../../img/icones/location.png"

function VendedorListagemProduto(props) {

    const user = props.userID
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
    }, [user])
    
    return(
        <>
            {!showProfile &&
                (
                    <>
                        <div className="vendedor">
                                    <div className="avatar" style={{ 'backgroundColor': 'darkgray'}}></div>
                                    <div className="info">
                                        <a href="https://juliamendes.github.io/alugaki/app/perfil-publico.html" target="blank"><h3>Nome</h3></a>
                                        <div>
                                            <img src={local} alt="" />
                                            <small style={{ color: '#757575' }}>Localização</small>
                                        </div>
                                        <div>
                                            <img src={star} alt="" />
                                            <small>Avaliação</small>
                                            <small style={{ color: '#757575' }}>•  avaliações</small> <br />
                                        </div>
                                    </div>
                        </div>
                    </>
                )
            }
            {showProfile &&
                (
                    <>
                        <div className="vendedor">
                            <Link to={`/perfil-publico/${profile.id}`}>
                                <div className="avatar"> <img src={"/" + profile.img}/> </div>
                            </Link>
                            <div className="info">
                                <Link to={`/perfil-publico/${profile.id}`}>
                                    <h3>{profile.nome}</h3>
                                </Link>
                                <div>
                                    <img src={local} alt="" />
                                    <small style={{ color: '#757575' }}>Localização</small>
                                </div>
                                <div>
                                    <img src={star} alt="" />
                                    <small>{profile.avaliacao}</small>
                                    <small style={{ color: '#757575' }}>• {profile.navaliacao} avaliações</small> <br />
                                </div>
                            </div>
                        </div>
                    </>
                    
                )
            }
        </>
    )
}

export default VendedorListagemProduto