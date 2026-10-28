import { useState } from 'react'
import KartaZasobu from '../components/KartaZasobu.jsx'

export default function Katalog({ lista, onUsun, onPrzelacz }) {
  const [fraza, setFraza] = useState('')

  const widoczne = lista.filter((p) =>
    p.tekst.toLowerCase().includes(fraza.toLowerCase())
  )

  return (
    <>
      <h2>Liczba przeglądarek: {lista.length}</h2>
      <input
        className="form-control mb-3"
        placeholder="Szukaj po nazwie"
        value={fraza}
        onChange={(e) => setFraza(e.target.value)}
      />

      <div className="row g-3">
        {widoczne.map((p) => (
          <div className="col-md-4" key={p.identyfikator}>
            <KartaZasobu pozycja={p} onUsun={onUsun} onPrzelacz={onPrzelacz} />
          </div>
        ))}
      </div>
    </>
  )
}