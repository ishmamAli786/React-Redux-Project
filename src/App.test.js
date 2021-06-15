import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import ProductsContextProvider from './Global/ProductsContext';
import Products from './components/Products';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Cart from './components/Cart';
import Error from './components/Error';
import CartContextProvider from './Global/CartContext';

function App() {
  return (
    <div>
      <ProductsContextProvider>
      <CartContextProvider>
      <Router>
      <Navbar/>
        <Switch>
        <Route path="/" exact component={Products}/>
        <Route path="/cart" exact component={Cart}/>
        <Route path="*" exact component={Error}/>
        </Switch>
      </Router>
      </CartContextProvider>
      </ProductsContextProvider>
    </div>
  );
}

export default App;
