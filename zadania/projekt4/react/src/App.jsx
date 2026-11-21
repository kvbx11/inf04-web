import { useState } from 'react'
import { Routes, Route, Link, useParams, useNavigate } from 'react-router-dom'
import ListaWydarzenPage from './pages/ListaWydarzenPage'
import SzczegolyWydarzeniaPage from './pages/SzczegolyWydarzeniaPage'
import NotFoundPage from './pages/NotFoundPage'


function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<ListaWydarzenPage />} />
      <Route path="/wydarzenie/:id" element={<SzczegolyWydarzeniaPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
    </>
  )
}

export default App
