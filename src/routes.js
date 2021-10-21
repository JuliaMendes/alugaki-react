import { Switch, Route } from 'react-router-dom';

import PaginaInicial from './pages/paginaInicial/PaginaInicial';
import PaginaLogin from './pages/login/Login';
import PaginaCadastroUsuario from './pages/cadastroUsuario/CadastroUsuario';
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
            <Route path="/listagem-produto/:product" component={PaginaListagemProduto}>
            </Route>
            <Route path="/perfil-privado/:profile" component={PaginaPerfilPrivado}>
            </Route>
            <Route path="/perfil-publico/:profile" component={PaginaPerfilPublico}>
            </Route>
            <Route path="/cadastro-produtos">
                <PaginaCadastroProduto/>
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

