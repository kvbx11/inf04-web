import { Link } from 'react-router-dom'

export default function KartaZasobu({ pozycja, onUsun, onPrzelacz }) {
  const klasa = pozycja.liczba > 50 ? 'border-success border-2' : ''

  return (
    <div className="col">
    <div className={`card h-100 ${klasa}`}>
      <div className="card-body">
        <h5 className="card-title">{pozycja.tekst}</h5>
        <p className="card-text mb-1">Gatunek: {pozycja.gatunek}</p>
        <p className="card-text">Rozmiar: {pozycja.liczba}</p>
        <span className={`badge ${pozycja.widoczny ? 'bg-success' : 'bg-secondary'}`}>
          {pozycja.widoczny ? 'Dostępny' : 'Niedostępny'}
        </span>
      </div>
      <div className="card-footer d-flex gap-2">
        <Link className="btn btn-sm btn-outline-primary" to={`/${pozycja.identyfikator}`}>
          Szczegóły
        </Link>
        <button
          className="btn btn-sm btn-outline-secondary"
          onClick={() => onPrzelacz(pozycja.identyfikator)}
        >
          Dostępność
        </button>
        <button className="btn btn-sm btn-danger" onClick={() => onUsun(pozycja.identyfikator)}>
          Usuń
        </button>
      </div>
    </div>
    </div>
  )
}