import { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Dodaj({ onDodaj }) {
  const tekstRef = useRef()
  const gatunekRef = useRef()
  const liczbaRef = useRef()
  const [blad, setBlad] = useState('')
  const navigate = useNavigate()

  const handleSubmit = (event) => {
    event.preventDefault()
    const tekst = tekstRef.current.value.trim()
    const gatunek = gatunekRef.current.value
    const liczba = Number(liczbaRef.current.value)

    if (!tekst) return setBlad('Podaj nazwę przeglądarki.')
    if (!(liczba >= 1 && liczba <= 100)) return setBlad('Liczba musi być w zakresie 1–100.')

    onDodaj({ tekst, gatunek, liczba, widoczny: true })
    navigate('/')
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Dodaj przeglądarkę</h2>
      {blad && <div className="alert alert-danger">{blad}</div>}

      <label className="form-label">Nazwa przeglądarki:</label>
      <input ref={tekstRef} className="form-control mb-3" />

      <label className="form-label">Gatunek:</label>
      <select ref={gatunekRef} className="form-select mb-3">
        <option>Otwarte</option>
        <option>Zamknięte</option>
        <option>Mobilne</option>
      </select>

      <label className="form-label">Liczba (1–100):</label>
      <input ref={liczbaRef} type="number" className="form-control mb-3" />

      <button type="submit" className="btn btn-primary">Zatwierdź wybór</button>
    </form>
  )
}