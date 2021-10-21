import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

import "./cadastroProduto.css"

import HeaderSecundario from "../../components/headerSecundario/HeaderSecundario"
import Footer from "../../components/footer/Footer"

import calendario from '../../img/imagens/calendario.png'
import camera from '../../img/icones/photo_camera.png'

function PaginaCadastroProduto() {
    return (
        <div>
            <HeaderSecundario />
            <Formulario />
            <Footer />
        </div>
    )
}


function Formulario() {
    const [titulo, setTitulo]  = useState("");
    const [descricao, setDescricao] = useState("");
    const [preco, setPreco] = useState("");
    const [localizacao, setLocalizacao] = useState("");

    const [errosTitulo, setErrosTitulo] = useState("");
    const [errosDescricao, setErrosDescricao] = useState("");
    const [errosPreco, setErrosPreco] = useState("");
    const [errosLocalizacao, setErrosLocalizacao] = useState("");

    function handleSubmitMain(event) {
        let erros = !((errosTitulo == "") && (errosDescricao == "") && (errosPreco == "") && (errosLocalizacao == ""));
        if (erros) {
            window.alert("Favor verificar campo(s) com erro.");
            event.preventDefault();
        }
    }

    useEffect(() => {
        if(titulo != ""){
            if(titulo.length < 5 || titulo.length > 100){
                setErrosTitulo("O Campo Título deve conter de 5 a 100 caracteres");
            }
            else{
                setErrosTitulo("");
            }
        }
        else{
            setErrosTitulo("");
        }
    }, [titulo])

    useEffect(() => {
        if(descricao != ""){
            if(descricao.length < 5 || descricao.length > 400){
                setErrosDescricao("O Campo Descrição deve conter de 5 a 400 caracteres");
            }
            else{
                setErrosDescricao("");
            }
        }
        else{
            setErrosDescricao("");
        }
    }, [descricao])

    useEffect(() => {
        if(preco == ""){
            setErrosPreco("");
        }
        
    }, [preco])

    useEffect(() => {
        if(localizacao != ""){
            if(localizacao.length != 8){
                setErrosLocalizacao("Preencha o campo CEP corretamente (apenas números).");
            }
            else{
                setErrosLocalizacao("");
            }
        }
        else{
            setErrosLocalizacao("");
        }
    }, [localizacao])

    return (
        <body className="cadastroProduto">
            <section className="formulario">
                <div className="container">
                    <h1>Anuncie aki</h1>
                    <form>
                        <div className="esq">
                            <label htmlFor="titulo">Título</label> <br />
                            <input
                                className={`${(errosTitulo.length != 0) ? 'campo-com-erro' : ''}`}
                                type="text"
                                id="titulo"
                                name="titulo"
                                required
                                value={titulo} 
                                onChange={(e)=>setTitulo(e.target.value)}
                            />
                            
                            <br />

                            <ul>
                                <li>{errosTitulo}</li>
                            </ul>

                            <label htmlFor="descricao">Descrição</label> <br />
                            <textarea
                                className={`${(errosDescricao.length != 0) ? 'campo-com-erro' : ''}`}
                                type="text"
                                id="descricao"
                                name="descricao"
                                value={descricao}
                                required
                                maxLength="300"
                                onChange={(e)=>setDescricao(e.target.value)}
                            >
                            </textarea>

                            <br />

                            <ul>
                                <li>{errosDescricao}</li>
                            </ul>

                            <div className="preco-cat">
                                <div className="preco">
                                    <label htmlFor="preco">Preço</label>
                                    <div>
                                        <input className={`${(errosPreco.length != 0) ? 'campo-com-erro' : ''}`}
                                            type="text"
                                            id="preco"
                                            name="preco"
                                            placeholder="R$ "
                                            value={preco}
                                            required

                                            onChange={(e)=>setPreco(e.target.value)}
                                        />

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
                                    <select defaultValue="Categoria" name="categoria" id="categoria" required>
                                        {/* <option selected disabled value="">Categoria</option> */}
                                        <option value="esporte-lazer">Esporte e Lazer</option>
                                        <option value="moda">Moda</option>
                                        <option value="eletronicos">Eletrônicos</option>
                                        <option value="ferramentas-utilitarios">Ferramentas e Utilitários</option>
                                    </select>

                                </div>
                            </div>
                            
                            <ul>
                                <li>{errosPreco}</li>
                            </ul>

                            <div className="upload-fotos">
                                <p>Fotos (até 5)</p>
                                <label htmlFor="fotos">
                                    <img src={camera} alt="imagem de camera" />
                                    <br />
                                    <span>Adicionar Fotos</span>
                                </label>
                                <input type="file" name="fotos" id="fotos" accept="image/*" multiple required
                                    onClick="validaFotos(this)" />
                            </div>

                            <label htmlFor="localizacao">Localização</label>
                            <br />
                            <input 
                                className={`${(errosLocalizacao.length != 0) ? 'campo-com-erro' : ''}`}
                                type="text" id="localizacao" placeholder="CEP " required
                                value = {localizacao}
                                onChange={(e)=>setLocalizacao(e.target.value)} 
                            />
                            <br/> 
                            <ul>
                                <li>{errosLocalizacao}</li>
                            </ul>
                            <label htmlFor="cidade"> Cidade<br /><input type="text" id="cidade" /> </label><br />
                            <label htmlFor="estado"> Estado<br /><input type="text" id="estado" /> </label><br />

                        </div>

                        
                        <div className="dir">
                            <label htmlFor="disponibilidade">Disponibilidade</label>
                            <br />

                            <img src={calendario} alt="calendário" />

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
                            <Link to="/"><button id="btn-cancelar" type="button">Cancelar</button></Link>
                            <button id="btn-anunciar" type="submit" onClick={handleSubmitMain}>Anunciar</button>
                        </div>
                    </form>
                </div>
            </section>
        </body>
    )

}


export default PaginaCadastroProduto;