import { useRef } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import przegladarki from './data/wariant20'
import Pozycja from './components/Pozycja'

function App() {

  return (
    <>  
      <h3>Liczba przeglądarek internetowych: {przegladarki.length}</h3>

      <ol>
        {przegladarki.map((poz,idx)=>{
          return <Pozycja key={idx} nazwa={poz}/>
        })}
      </ol>
    
    
    
    </>
  )
}

export default App
