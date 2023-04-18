import { useState } from 'react'
import boraamiLogo from './assets/boraami-primary-horizontal-logo.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <img src={boraamiLogo} className="logo"></img>
      <h2> Coming soon...</h2>
    </div>
  )
}

export default App
