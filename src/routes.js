import { Switch, Route } from 'react-router-dom';

import PaginaInicial from './pages/paginaInicial/PaginaInicial';
import PaginaLogin from './pages/login/Login';
import PaginaCadastroUsuario from './pages/cadastroUsuario/CadastroUsuario';
import ProdutosPorCat from './pages/produtosPorCategoria/ProdutosPorCat';

function Routes() {
    return(

        <Switch>
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

