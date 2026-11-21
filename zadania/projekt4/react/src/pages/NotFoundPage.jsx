import { Link } from "react-router-dom"
export default function NotFoundPage() {
  return (
    <div className="container mt-4">
      <h1>Nie ma takiej strony</h1>
      <Link to="/">Wróć do listy</Link>
    </div>
  )
}