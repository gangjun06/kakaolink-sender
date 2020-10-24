import React, { useEffect } from 'react'
import { api_key } from "./config.json"
import Home from './pages/Home'

function App() {
  useEffect(() => {
    const kakao = window.Kakao
    kakao.init(api_key)
    console.log(kakao.isInitialized())
  }, [])

  return <div className='App'>
    <Home />
  </div>
}

export default App
