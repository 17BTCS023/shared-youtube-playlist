import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://youtube.com" target="_blank">
          <img src="data:image/png;base64,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" className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
