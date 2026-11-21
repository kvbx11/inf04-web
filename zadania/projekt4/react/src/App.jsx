import { useState } from 'react'
import { Routes, Route, Link, useParams, useNavigate } from 'react-router-dom'
import ListaWydarzenPage from './pages/ListaWydarzenPage'


function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<ListaWydarzenPage />} />
    </Routes>
    </>
  )
}

export default App
