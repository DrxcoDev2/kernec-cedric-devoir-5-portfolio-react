import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main className='body'>
      <div className="content">

      </div>
      <Footer title="Footer name"></Footer>
      {/**
       * @param title str
       *
       */}
    </main>
  )
}

export default App
