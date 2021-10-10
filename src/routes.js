import { Switch, Route } from 'react-router-dom';

import PaginaInicial from './pages/paginaInicial/PaginaInicial';
import ProdutosPorCat from './pages/produtosPorCategoria/ProdutosPorCat';

function Routes() {
    return(

        <Switch>
            <Route path="/produtos-por-categoria">
                <ProdutosPorCat/>
            </Route>
            <Route path="/">
                <PaginaInicial/>
            </Route>
        </Switch>

    )
}

export default Routes;

