import './footer.css';
import logoAlugaki from '../../img/imagens/alugaKi-removebg-preview.png'
import iconeInstagram from '../../img/icones/insta.png'
import iconeTwitter from '../../img/icones/twitter.png'
import iconeFacebook from '../../img/icones/face.png'
import iconeWhatsapp from '../../img/icones/whatsapp.png'

function Footer() {
    return(
        <footer>
        <div class="container">
            <div class="logo-e-menu">
                <div class="logo">
                    <img src={logoAlugaki} alt="Logo alugaki"/>
                </div>
                <div class="menu">
                    <ul>
                        <li><a href="#">Atendimento</a></li>
                        <li><a href="#">Central de ajuda</a></li>
                        <li><a href="#">Segurança</a></li>
                        <li><a href="#">Acessibilidade</a></li>
                    </ul>
                </div>
            </div>
            <div class="redes-sociais">
                <small>Siga-nos!</small>
                <ul>
                    <li><a href="#"><img src={iconeTwitter} alt="Logo twitter"/></a></li>
                    <li><a href="#"><img src={iconeInstagram} alt="Logo instagram"/></a></li>
                    <li><a href="#"><img src={iconeFacebook} alt="Logo facebook"/></a></li>
                    <li><a href="#"><img src={iconeWhatsapp} alt="Logo whatsapp"/></a></li>
                </ul>
            </div>
        </div>
        <div class="copyright">
            <small>copyright © alugaKi-2021</small>
        </div>
    </footer>

    )
}

export default Footer;