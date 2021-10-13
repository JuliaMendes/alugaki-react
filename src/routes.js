import { Switch, Route } from 'react-router-dom';

import PaginaInicial from './pages/paginaInicial/PaginaInicial';
import PaginaLogin from './pages/login/Login';
import PaginaCadastroUsuario from './pages/cadastroUsuario/CadastroUsuario';
import ProdutosPorCat from './pages/produtosPorCategoria/ProdutosPorCat';
import PaginaCadastroProduto from './pages/cadastroProduto/CadastroProduto';
import PaginaPerfilPublico from './pages/perfilPublico/PerfilPublico';
import PaginaPerfilPrivado from './pages/perfilPrivado/PerfilPrivado';
import PaginaListagemProduto from './pages/listagemProduto/ListagemProduto';
import PaginaProdutosPorCat from './pages/produtosPorCategoria/ProdutosPorCat';

function Routes() {
    return(

        <Switch>
            <Route path ="/produtos-por-categoria">
                <PaginaProdutosPorCat/>
            </Route>
            <Route path="/listagem-produto">
                <PaginaListagemProduto/>
            </Route>
            <Route path="/perfil-privado">
                <PaginaPerfilPrivado/>
            </Route>
            <Route path="/perfil-publico">
                <PaginaPerfilPublico/>
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

