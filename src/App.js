import React from "react";
import Nav from "./component/Nav/Nav";
import ProductList from "./component/Products/ProductList";
import Cart from "./component/Cart/Cart";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CartProvider } from "./Context/CartContex";

const App = () => {
  return (
    <CartProvider>
      <Router>
        <Nav />
        <Routes>
          <Route path="/" exact Component={ProductList} />
          <Route path="/cart" Component={Cart} />
        </Routes>
      </Router>
    </CartProvider>
  );
};

export default App;
