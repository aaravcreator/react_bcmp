import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'

import Counter from './components/Counter.jsx'
import TodoApp from './components/TodoApp.jsx'
import Navbar from './components/Navbar.jsx'
import About1 from './components/About.jsx'
import ProductList from './components/ProductList.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  
  <Navbar/>
    <BrowserRouter>
       <Routes>

        <Route  path="/" element={<TodoApp/>} />
        <Route  path="/counter" element={<Counter/>} />
        <Route  path="/about" element={<About1/>} />
        <Route  path="/products" element={<ProductList/>} />


       </Routes>
    
    </BrowserRouter>


      {/* <App/> */}
    
    {/* <App/> */}
  </React.StrictMode>,
)
