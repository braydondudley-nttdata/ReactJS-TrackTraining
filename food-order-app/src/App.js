import { Route, Switch, Redirect } from 'react-router-dom';
import { Fragment, useContext } from 'react'

import NotFound from './pages/NotFound';
import Header from "./components/layout/Header";
import Meals from './components/meals/Meals';
import Cart from './components/cart/Cart';

import CartButtonContext from './store/cart-button-context'

function App() {
  const cartBtnCtx = useContext(CartButtonContext);

  return (
    <Fragment>
      <Switch>
        <Route path='/' exact>
          <Redirect to='/meals' />
        </Route>
        <Route path='/meals' exact>
          {cartBtnCtx.cartIsOpen && <Cart/>}
        </Route>
        <Route path='/cart' exact>
          {cartBtnCtx.openCart}
          <Cart/>
        </Route>
        <Route path='*'>
          <NotFound/>
        </Route>
      </Switch>
      <Header />
      <Meals />
    </Fragment>
  );
}

export default App;
