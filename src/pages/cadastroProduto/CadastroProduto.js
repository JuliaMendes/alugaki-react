import "./cadastroProduto.css"

import HeaderSecundario from "../../components/header/HeaderSecundario"
import Footer from "../../components/footer/Footer"

import calendario from '../../img/imagens/calendario.png'
import camera from '../../img/icones/photo_camera.png'

function PaginaCadastroProduto() {
    return (
        <div>
            <HeaderSecundario />
            <Formulario/>
            <Footer />
        </div>
    )
}

function Formulario() {
    return (
        <section className="formulario">
            <div className="container">
                <h1>Anuncie aki</h1>
                <form>
                    <div className="esq">
                        <label htmlFor="titulo">Título</label> <br />
                        <input type="" id="titulo" name="titulo" required /><br />
                        <ul id="erros-titulo"></ul>
                        <label htmlFor="descricao" required maxLength="300">Descrição</label> <br />
                        <textarea id="descricao" name="descricao" required></textarea> <br />
                        <ul id="erros-descricao"></ul>

                        <div className="preco-cat">
                            <div className="preco">
                                <label htmlFor="preco">Preço</label>
                                <div>
                                    <input type="text" id="preco" placeholder="R$ " required />
                                    <label htmlFor="periodo"></label>
                                    <select name="periodo" id="periodo" required>
                                        <option value="por-dia">/ Dia</option>
                                        <option value="por-mes">/ Mês</option>
                                        <option value="por-hora">/ Hora</option>
                                    </select>
                                </div>
                            </div>

                            <div className="cat">
                                <label htmlFor="categoria"></label>
                                <select defaultValue = "Categoria" name="categoria" id="categoria" required>
                                    {/* <option selected disabled value="">Categoria</option> */}
                                    <option value="esporte-lazer">Esporte e Lazer</option>
                                    <option value="moda">Moda</option>
                                    <option value="eletronicos">Eletrônicos</option>
                                    <option value="ferramentas-utilitarios">Ferramentas e Utilitários</option>
                                </select>

                            </div>
                        </div>
                        <ul id="erros-preco"></ul>
                        <ul id="erros-cat"></ul>

                        <div className="upload-fotos">
                            <p>Fotos (até 5)</p>
                            <label htmlFor="fotos">
                                <img src= {camera} alt="imagem de camera"/>
                                <br />
                                <span>Adicionar Fotos</span>
                            </label>
                            <input type="file" name="fotos" id="fotos" accept="image/*" multiple required
                                onClick="validaFotos(this)" />
                        </div>

                        <label htmlFor="localizacao">Localização</label>
                        <br />
                        <input type="text" id="localizacao" placeholder="CEP " required /><br />
                        <label htmlFor="endereco"> Endereço <br /> <input type="text" id="endereco" /> </label><br />
                        <label htmlFor="bairro"> Bairro<br /><input type="text" id="bairro" /> </label><br />
                        <label htmlFor="cidade"> Cidade<br /><input type="text" id="cidade" /> </label><br />
                        <label htmlFor="estado"> Estado<br /><input type="text" id="estado" /> </label><br />

                    </div>

                    <div className="dir">
                        <label htmlFor="disponibilidade">Disponibilidade</label>
                        <br />

                        <img src= {calendario} alt="calendário" />

                        <div className="dispo">
                            <label htmlFor="disponibilidade"></label>
                            <br />
                            <input type="radio" name="dispo" value="dias-uteis" />
                            Dias Úteis
                            <br />
                            <input type="radio" name="dispo" value="fins-de-semana" />
                            Fins de Semana
                            <br />
                            <input type="radio" name="dispo" value="todos-os-dias" />
                            Todos os dias
                            <br />
                        </div>
                    </div>

                    <div className="botoes">
                        <a href="index.html"><button id="btn-cancelar" type="button">Cancelar</button></a>
                        <button id="btn-anunciar" type="submit">Anunciar</button>
                    </div>
                </form>
            </div>
        </section>
    )
}


export default PaginaCadastroProduto;