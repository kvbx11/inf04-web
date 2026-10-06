import { useRef, useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import przegladarki from './data/wariant20'
import Pozycja from './components/Pozycja'

function App() {
  const imieNazwiskoRef = useRef(null)
  const numerPrzegladarkiRef = useRef(null)
  const [blad,setBlad]=useState("")

  const handleSubmit = (e)=>{
    e.preventDefault()
    setBlad('')

    const numer_przegladarki = numerPrzegladarkiRef.current.value
    const przegladarka = przegladarki[numer_przegladarki-1]

    console.log("Uzytkownik: "+imieNazwiskoRef.current.value)

    if(przegladarka){
      console.log("Wybrana pozycja: "+przegladarka)
    }
    else{
      const komunikat_bledu = "Nieprawidłowy numer przeglądarki internetowej"
      setBlad(komunikat_bledu)
      console.log("Błąd: "+komunikat_bledu)
    }

  }

  return (
    <>  
      <h3>Liczba przeglądarek internetowych: {przegladarki.length}</h3>

      <ol>
        {przegladarki.map((poz,idx)=>{
          return <Pozycja key={idx} nazwa={poz}/>
        })}
      </ol>
    

        <form onSubmit={handleSubmit}>
          <div className="m-3 w-50">
            <label htmlFor="imie_nazwisko" className="form-label">Imię i nazwisko</label>
            <input type="text" name="imie_nazwisko" id="imie_nazwisko" className="form-control" ref={imieNazwiskoRef} required/>
          </div>
          <div className="m-3 w-50">
            <label htmlFor="numer_przegladarki" className="form-label">Numer przeglądarki internetowej:</label>
            <input type="number" name="numer_przegladarki" id="numer_przegladarki" className="form-control" ref={numerPrzegladarkiRef}/>
          </div>
          <button type="submit" className='btn btn-primary ms-3'>Zatwierdź wybór</button>
        </form>
    
        {blad&&<p className='text-danger'>{blad}</p>}
    </>
  )
}

export default App
