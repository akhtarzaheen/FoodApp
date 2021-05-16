import React, { Fragment, useState } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";

function App() {
  const [cartOpen, setCartOpen] = useState(false);

  const showCartHandler = () => {
    setCartOpen(true);
  };

  const closeCartHandler = () => {
    setCartOpen(false);
  };

  return (
    <Fragment>
      {cartOpen && <Cart closeCart={closeCartHandler} />}
      <Header openCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;
