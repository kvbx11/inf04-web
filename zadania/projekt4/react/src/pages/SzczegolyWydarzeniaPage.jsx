export default function SzczegolyWydarzeniaPage() {
  const { id } = useParams()
  const navigate = useNavigate()
  const wydarzenie = wydarzenia.find(w => w.id === Number(id))

  if (!wydarzenie) {
    return (
      <div className="container mt-4">
        <div className="alert alert-warning">
          Nie znaleziono wydarzenia o numerze {id}
        </div>
        <button type="button" className="btn btn-outline-secondary" onClick={() => navigate(-1)}>
          Wstecz
        </button>
      </div>
    )
  }

  return (
    <div className="container mt-4">
      <h1>{wydarzenie.nazwa}</h1>
      <p>Miasto: {wydarzenie.miasto}</p>
      <p>Data: {wydarzenie.data}</p>
      <p>Cena: {wydarzenie.cena === 0 ? 'Wstęp wolny' : `${wydarzenie.cena} zł`}</p>
      <button type="button" className="btn btn-outline-secondary" onClick={() => navigate(-1)}>
        Wstecz
      </button>
    </div>
  )
}