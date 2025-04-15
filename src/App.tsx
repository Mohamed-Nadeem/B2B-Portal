import React from 'react';
import { mockProducts, Product } from './data/product';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="container">
      <h1>Al Rashed Order App</h1>
      <ul className="list-group">
        {mockProducts.map((product: Product) => (
          <li key={product.itemNumber} className="list-group-item">
            {product.itemNumber} - ${product.description}
          </li>
        ))}
      </ul>
      <button className="btn btn-primary mt-3">Place Order</button>
    </div>
  );
};

export default App;



