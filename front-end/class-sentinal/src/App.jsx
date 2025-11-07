import { useState } from 'react'
import './App.css'
import Dashboard from './pages/DashBoard'
import { Navigate, Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'
import ReportCard from './pages/ReportCard'
import { isAuthenticated } from './state/auth/Action'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={isAuthenticated ? <Dashboard /> : <Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/report" element={<ReportCard />} />
      </Routes>
    </>
  )
}

export default App
