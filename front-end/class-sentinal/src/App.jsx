import { useState } from 'react'
import './App.css'
import Dashboard from './pages/DashBoard'
import { Navigate, Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'
import { isAuthenticated } from './services/api'
import ReportCard from './pages/ReportCard'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={true ? <Dashboard /> : <Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/report" element={<ReportCard />} />
      </Routes>
    </>
  )
}

export default App
