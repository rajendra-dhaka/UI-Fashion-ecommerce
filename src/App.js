import React from "react";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Product from "./pages/Product";
import ProductList from "./pages/ProductList";

function App() {
  return (
    <div>
      <Home />
      <ProductList />
      <Product />
      <Cart />
    </div>
  );
}

export default App;
