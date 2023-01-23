import React, { Fragment } from "react";
import Cart from "./components/Cart/Cart";

import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
// import Checkbox from "./components/Tungs/Checkbox";

function App() {
  return (
    <Fragment>
      <Cart />
      <Header />
      <main>
        <Meals />
      </main>
      {/* <Checkbox /> */}
    </Fragment>
  );
}

export default App;
