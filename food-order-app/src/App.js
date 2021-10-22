import { Route, Switch, Redirect } from 'react-router-dom';
import { useContext } from 'react'

import NotFound from './pages/NotFound';
import Header from "./components/layout/Header";
import Meals from './components/meals/Meals';
import Cart from './components/cart/Cart';

import CartButtonContext from './store/cart-button-context'

function App() {
  const cartBtnCtx = useContext(CartButtonContext);

  return (
    <Switch>
      <Route path='/' exact>
        <Redirect to='/meals' />
      </Route>
      <Route path='/meals' exact>
        {cartBtnCtx.cartIsOpen && <Cart/>}
        <Header onOpenCart={cartBtnCtx.openCartHandler}/>
        <Meals />
      </Route>
      <Route path='/cart' exact>
        {cartBtnCtx.openCart}
        <Cart/>
        <Header />
        <Meals />
      </Route>
      <Route path='*'>
        <NotFound/>
      </Route>
    </Switch>
  );
}

export default App;
