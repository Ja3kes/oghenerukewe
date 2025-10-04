import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './contact.js';
import './Product.js';
import './About.js';
import  './index.jsx';
import  './banner.js';
import '<div className="banner"></div>.html';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <p>
<h1>
  MY BANNER
</h1>
        </p>
        <p>
          <h1>
            About Section
          </h1>

        </p>
        <p>
          <h1>
            This is the product section
          </h1>

        </p>
        <p>
          <h1> This is the contact Section
            
          </h1>

        </p>
        <p>

        </p>
      </div>
      <h1>Vite + React</h1>
      <header>Jakes React app assignment</header>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <footer> &copy;{new Date().getFullYear()}This is my project sir .🙂
</footer>
    </>
  )
}

export default App
