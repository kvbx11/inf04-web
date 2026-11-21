import { useState } from 'react'
import { Routes, Route, Link, useParams, useNavigate } from 'react-router-dom'
import ListaWydarzenPage from './pages/ListaWydarzenPage'
import SzczegolyWydarzeniaPage from './pages/SzczegolyWydarzeniaPage'


function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<ListaWydarzenPage />} />
      <Route path="/wydarzenie/:id" element={<SzczegolyWydarzeniaPage />} />
    </Routes>
    </>
  )
}

export default App
