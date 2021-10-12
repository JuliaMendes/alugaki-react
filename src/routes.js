import { Switch, Route } from 'react-router-dom';

import PaginaInicial from './pages/paginaInicial/PaginaInicial';
import PaginaLogin from './pages/login/Login';
import PaginaCadastroUsuario from './pages/cadastroUsuario/CadastroUsuario';
import ProdutosPorCat from './pages/produtosPorCategoria/ProdutosPorCat';
import PaginaCadastroProduto from './pages/cadastroProduto/CadastroProduto';
import PerfilPublico from './pages/perfilPublico/PerfilPublico';
import PerfilPrivado from './pages/perfilPrivado/PerfilPrivado';
import PaginaListagemProduto from './pages/listagemProduto/listagemProduto';


function Routes() {
    return(

        <Switch>
            <Route path="listagem-produto">
                <PaginaListagemProduto/>
            </Route>
            <Route path="/perfil-privado">
                <PerfilPrivado/>
            </Route>
            <Route path="/perfil-publico">
                <PerfilPublico/>
            </Route>
            <Route path="/cadastro-produtos">
                <PaginaCadastroProduto/>
            </Route>
            <Route path="/produtos-por-categoria">
                <ProdutosPorCat/>
            </Route>
            <Route path="/login">
                <PaginaLogin/>
            </Route>
            <Route path="/cadastro-usuario">
                <PaginaCadastroUsuario/>
            </Route>
            <Route path="/">
                <PaginaInicial/>
            </Route>
        </Switch>

    )
}

export default Routes;

