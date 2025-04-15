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



// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.tsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App
