import { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Katalog from './pages/Katalog.jsx'
import Dodaj from './pages/Dodaj.jsx'
import Szczegoly from './pages/Szczegoly.jsx'
 
export default function App() {
  const [lista, setLista] = useState([])
  const [status, setStatus] = useState('ladowanie') 
 
  useEffect(() => {
    fetch('/dane.json')
      .then((r) => {
        if (!r.ok) throw new Error('Błąd HTTP')
        return r.json()
      })
      .then((dane) => {
        setLista(dane)
        setStatus('gotowe')
      })
      .catch(() => setStatus('blad'))
  }, [])
 
  const usun = (id) => setLista(lista.filter((p) => p.identyfikator !== id))
  const przelacz = (id) =>
    setLista(lista.map((p) => (p.identyfikator === id ? { ...p, widoczny: !p.widoczny } : p)))
  const dodaj = (nowy) => {
    const noweId = lista.length ? Math.max(...lista.map((p) => p.identyfikator)) + 1 : 1
    setLista([...lista, { ...nowy, identyfikator: noweId }])
  }
 
  return (
    <BrowserRouter>
      <nav className="navbar bg-light px-3 mb-3">
        <span className="navbar-brand fw-bold">Katalog przeglądarek</span>
        <div className="me-auto d-flex gap-3">
          <Link to="/">Katalog</Link>
          <Link to="/dodaj">Dodaj</Link>
        </div>
      </nav>
 
      <div className="container">
        {status === 'ladowanie' && <p>Ładowanie…</p>}
        {status === 'blad' && (
          <div className="alert alert-danger">Nie udało się pobrać danych.</div>
        )}
        {status === 'gotowe' && (
          <Routes>
            <Route
              path="/"
              element={<Katalog lista={lista} onUsun={usun} onPrzelacz={przelacz} />}
            />
            <Route path="/dodaj" element={<Dodaj onDodaj={dodaj} />} />
            <Route path="/:id" element={<Szczegoly lista={lista} />} />
            <Route path="*" element={<h2>Nie ma takiej strony</h2>} />
          </Routes>
        )}
      </div>
    </BrowserRouter>
  )
}