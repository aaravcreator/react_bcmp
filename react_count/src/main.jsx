import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Test from './Test.jsx'
import Count from './components/Count.jsx'
import Person from './components/Person.jsx'
import './index.css'
const rootElement = document.getElementById('root');
ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <Test name="Jhon" location="Dharan"/>
    <Test name="RAM" location="Biratnagar"/>
    <Person name="Janak" age="20" address="Kathmandu"/>
    <Count/>

  </React.StrictMode>,
)
