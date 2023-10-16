import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from "./routes/Home.jsx";
import Login from "./routes/Login.jsx";
import Produtos from "./routes/Produtos.jsx";
import Error from "./routes/Error.jsx";
import Sobre from "./routes/Sobre.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

function AppRoutes () {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/produtos" element={<Produtos />}></Route>
        <Route path="/error" element={<Error />}></Route>
        <Route path="/sobre" element={<Sobre />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes