import { Link, useParams } from 'react-router-dom'

export default function Szczegoly({ lista }) {
  const { id } = useParams()
  const p = lista.find((x) => x.identyfikator === Number(id))

  if (!p) {
    return (
      <>
        <h2>Nie ma przegladarki o identyfikatorze {id}</h2>
        <Link to="/">← Wróć do katalogu</Link>
      </>
    )
  }

  return (
    <div className="card mx-auto" style={{ maxWidth: 400 }}>
      <div className="card-body">
        <div className="d-flex justify-content-between">
          <h4>{p.tekst}</h4>
          <span className={`badge ${p.widoczny ? 'bg-success' : 'bg-secondary'} align-self-start`}>
            {p.dostepny ? 'Dostępny' : 'Niedostępny'}
          </span>
        </div>
        <p className="text-muted">Numer: {p.identyfikator}</p>
        <div className="d-flex justify-content-between"><span>Gatunek</span><strong>{p.gatunek}</strong></div>
        <div className="d-flex justify-content-between mb-3"><span>Liczba</span><strong>{p.liczba}</strong></div>
        <Link className="btn btn-outline-primary w-100" to="/">← Wróć do katalogu</Link>
      </div>
    </div>
  )
}