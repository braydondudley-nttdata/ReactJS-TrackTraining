import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';

import "./index.css";
import App from "./App";
import CartProvider from './store/CartProvider'
import store from './store/index';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <CartProvider>
        <App />
      </CartProvider>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
