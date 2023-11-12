import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MyBtn from './MyBtn'

function App() {
  const [classBody, setClassBody] = useState("")
  const [count, setCount] = useState(1)
  
  function actualizarContador() {
    setCount()
  }
  
  return (
    <>
      <div className={classBody}>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>{count}</h1>
      <div className="card">
        {/* <MyBtn fun={()=>{setCount((count) => count + 1)}}></MyBtn> */}

        <MyBtn fun={setClassBody} color="rojito"></MyBtn>
        <MyBtn fun={setClassBody} color="verde"></MyBtn>
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
