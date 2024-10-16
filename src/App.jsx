import { useState } from 'react';

import Header from './components/Header.jsx';
import Shop from './components/Shop.jsx';
import Temp from './components/Temp.jsx';
import { DUMMY_PRODUCTS } from './dummy-products.js';
import Product from './components/Product.jsx';
import CartContextComponentProvider from './store/shopping-cart-context.jsx';

function App() {
  return (
    <CartContextComponentProvider>
      {/* <Temp/> */}
      <Header />
      <Shop>
        {DUMMY_PRODUCTS.map((product) => (
          <li key={product.id}>
            <Product {...product} />
          </li>
        ))}
      </Shop>
    </CartContextComponentProvider>
  );
}

export default App;
