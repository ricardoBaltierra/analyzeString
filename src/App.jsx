import './App.css'
import ButtonComponent from './ButtonComponent'
import DecodeStringComponent from './DecodeStringComponent'
import RequestStringComponent from './RequestStringComponent'

function App() {

  return (
    <div className="App">
      <header className='header'>
        <h1> Decodificador de cadenas </h1>
      </header>
      <div className='main'>
        <RequestStringComponent/>
        <ButtonComponent/>
        <DecodeStringComponent/>
      </div>
      <footer>
        <h4> Desarrollado por Ricardo Baltierra Gaytán </h4>
      </footer>
    </div>
  )
}

export default App
