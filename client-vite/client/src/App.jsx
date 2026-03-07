import { useState, React } from 'react'
import { Routes, Route } from 'react-router-dom'
import Login from './pages/login'
import Home from './pages/home'
import EmailVerify from './pages/emailVerify'
import ResetPassword from './pages/resetPassword'
import { ToastContainer, toast } from 'react-toastify'
import Quarto from './pages/quarto'
import Layout from './layout'
import Alojamento from './pages/alojamento'

function App() {
  return (
    <div>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="quarto" element={<Quarto />} />
          <Route path="resetPassword" element={<ResetPassword />} />
          <Route path="emailVerify" element={<EmailVerify />} />
          <Route path="home" element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="alojamento" element={<Alojamento />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
