import { useState, React } from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/home'
import Login from './pages/login'
import EmailVerify from './pages/emailVerify'
import ResetPassword from './pages/resetPassword'
import { ToastContainer, toast } from 'react-toastify';
import Cadastro from './pages/cadastro'

function App() {
  return (
      <div>
        <ToastContainer/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/email-verify' element={<EmailVerify/>} />
          <Route path='/reset-password' element={<ResetPassword/>} />
          <Route path='/cadastro' element={<Cadastro/>} />
        </Routes>
      </div>
  )
}

export default App
