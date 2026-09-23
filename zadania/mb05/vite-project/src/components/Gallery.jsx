import { Fragment } from 'react'
import PhotoCard from './PhotoCard.jsx'

export default function Gallery({zdjecia}) {
  return (
    <div id="galeria" className="row g-4">
      {zdjecia.map(photo => (
        <Fragment key={photo.id}>
          <div className="col-12 col-md-6 col-lg-4">
            <PhotoCard {...photo} />
          </div>
        </Fragment>
      ))}
    </div>
  )
}
