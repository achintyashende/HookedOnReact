import { useState } from 'react'
import './App.css'
import Stopwatch from './StopWatch'
import Demo from './Demo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="card">
        {/* <Stopwatch/> */}
        <Demo/>
      </div>

    </>
  )
}

export default App
