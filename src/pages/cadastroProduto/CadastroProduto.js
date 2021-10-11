import Header from "../../components/header/Header"
import Footer from "../../components/footer/Footer"

import calendario from '../../img/imagens/calendario.png'
import camera from '../../img/icones/photo_camera.png'

function PaginaCadastroProduto() {
    return (
        <div>
            <Header />
            <Formulario/>
            <Footer />
        </div>
    )
}

function Formulario() {
    return (
        <section class="formulario">
            <div class="container">
                <h1>Anuncie aki</h1>
                <form>
                    <div class="esq">
                        <label for="titulo">Título</label> <br />
                        <input type="" id="titulo" name="titulo" required /><br />
                        <ul id="erros-titulo"></ul>
                        <label for="descricao" required maxlength="300">Descrição</label> <br />
                        <textarea id="descricao" name="descricao" required></textarea> <br />
                        <ul id="erros-descricao"></ul>

                        <div class="preco-cat">
                            <div class="preco">
                                <label for="preco">Preço</label>
                                <div>
                                    <input type="text" id="preco" placeholder="R$ " required />
                                    <label for="periodo"></label>
                                    <select name="periodo" id="periodo" required>
                                        <option value="por-dia">/ Dia</option>
                                        <option value="por-mes">/ Mês</option>
                                        <option value="por-hora">/ Hora</option>
                                    </select>
                                </div>
                            </div>

                            <div class="cat">
                                <label for="categoria"></label>
                                <select name="categoria" id="categoria" required>
                                    <option selected disabled value="">Categoria</option>
                                    <option value="esporte-lazer">Esporte e Lazer</option>
                                    <option value="moda">Moda</option>
                                    <option value="eletronicos">Eletrônicos</option>
                                    <option value="ferramentas-utilitarios">Ferramentas e Utilitários</option>
                                </select>

                            </div>
                        </div>
                        <ul id="erros-preco"></ul>
                        <ul id="erros-cat"></ul>

                        <div class="upload-fotos">
                            <p>Fotos (até 5)</p>
                            <label for="fotos">
                                <img src= {camera} alt="imagem de camera"/>
                                <br />
                                <span>Adicionar Fotos</span>
                            </label>
                            <input type="file" name="fotos" id="fotos" accept="image/*" multiple required
                                onclick="validaFotos(this)" />
                        </div>

                        <label for="localizacao">Localização</label>
                        <br />
                        <input type="text" id="localizacao" placeholder="CEP " required /><br />
                        <label for="endereco"> Endereço <br /> <input type="text" id="endereco" /> </label><br />
                        <label for="bairro"> Bairro<br /><input type="text" id="bairro" /> </label><br />
                        <label for="cidade"> Cidade<br /><input type="text" id="cidade" /> </label><br />
                        <label for="estado"> Estado<br /><input type="text" id="estado" /> </label><br />

                    </div>

                    <div class="dir">
                        <label for="disponibilidade">Disponibilidade</label>
                        <br />

                        <img src= {calendario} alt="calendário" />

                        <div class="dispo">
                            <label for="disponibilidade"></label>
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

                    <div class="botoes">
                        <a href="index.html"><button id="btn-cancelar" type="button">Cancelar</button></a>
                        <button id="btn-anunciar" type="submit">Anunciar</button>
                    </div>
                </form>
            </div>
        </section>
    )
}


export default PaginaCadastroProduto;